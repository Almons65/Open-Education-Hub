"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import PageTransition from "@/app/components/PageTransition";
import styles from "./courseDetail.module.css"; 
import Breadcrumb from "@/app/components/Breadcrumb";

export default function CourseDetail({ course }) {
  const router = useRouter();
  const [isFavorite, setIsFavorite] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const descRef = useRef(null);
  const arrowRef = useRef(null);

const attendCourse = () => {
  if (!course) return;

  // Update history in localStorage
  const savedHistory = JSON.parse(localStorage.getItem("history") || "[]");
  if (!savedHistory.includes(course.id)) {
    const updated = [...savedHistory, course.id];
    localStorage.setItem("history", JSON.stringify(updated));
    // Notify ProfilePage to refresh
    window.dispatchEvent(new Event("historyUpdated"));
  }

  // Navigate to the real course page
  router.push(`/courses/${course.id}/Real_course`);
};


  useEffect(() => {
    if (!course) return;
    const savedFavorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    setIsFavorite(savedFavorites.includes(course.id));
  }, [course]);

  useEffect(() => {
    if (!descRef.current) return;

    setIsAnimating(true);
    descRef.current.style.maxHeight = showDescription
      ? `${descRef.current.scrollHeight}px`
      : "0px";

    const handleTransitionEnd = () => {
      setIsAnimating(false);
    };

    const currentRef = descRef.current;
    currentRef.addEventListener("transitionend", handleTransitionEnd);

    return () => {
      if (currentRef) {
        currentRef.removeEventListener("transitionend", handleTransitionEnd);
      }
    };
  }, [showDescription]);

  if (!course) return <p>Course not found.</p>;

  const toggleFavorite = () => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    const updatedFavorites = isFavorite
      ? savedFavorites.filter(id => id !== course.id)
      : [...savedFavorites, course.id];

    setIsFavorite(!isFavorite);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    window.dispatchEvent(new Event("favoritesUpdated"));
  };

  const toggleDescription = () => setShowDescription(!showDescription);


  return (
    <PageTransition>
      <div className={styles.courseDetailContainer}>
        <div className={styles.courseDetailCard}>
          <Breadcrumb
            items={[
              { label: "🏠 Home", href: "/home" },
              { label: course.name },
            ]}
          />

          <h2 className={styles.courseTitle}>{course.name}</h2>

          <p className={styles.courseDifficulty}>
            <strong>Difficulty:</strong>{" "}
            <span
              className={
                course.difficulty === "Beginner"
                  ? styles.beginner
                  : course.difficulty === "Intermediate"
                  ? styles.intermediate
                  : styles.advanced
              }
            >
              {course.difficulty}
            </span>
          </p>

          <div className={styles.subjects}>
            {course.subjects?.length
              ? course.subjects.map((s, i) => (
                  <span key={i} className={styles.subjectTag}>
                    {s}
                  </span>
                ))
              : "N/A"}
          </div>

          {/* Preview Video */}
          {course.previewVideo && (
            <div className={styles.previewContainer}>
              <h3 className={styles.previewLabel}>Preview</h3>
              <div className={styles.videoContainer}>
                <video
                  src={course.previewVideo}
                  controls
                  className={styles.courseVideo}
                >
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Attend Course Button */}
              <button
                className={styles.attendBtn}
                onClick={attendCourse}
              >
              Attend Course
              </button>
            </div>
          )}

          {/* Accordion Description */}
          <div
            ref={descRef}
            className={styles.courseDescription}
            style={{
              maxHeight: showDescription ? `${descRef.current?.scrollHeight}px` : "0px",
            }}
          >
            <h3>Description</h3>
            <p>{course.description || "No description available for this course."}</p>
          </div>

          {/* Show More / Show Less button */}
          <button
            onClick={toggleDescription}
            className={styles.toggleDescBtn}
          >
            <span
              ref={arrowRef}
              className={`${styles.arrow} ${showDescription ? styles.arrowUp : ""} ${isAnimating ? styles.spinning : ""}`}
            >
              ▼
            </span>
            <span className={styles.toggleLabel}>
              {showDescription ? "Show Less" : "Show More"}
            </span>
          </button>

          <button
            onClick={toggleFavorite}
            className={`${styles.favoriteBtn} ${isFavorite ? styles.remove : styles.add}`}
          >
            {isFavorite ? "💔 Remove from Favorites" : "❤️ Add to Favorites"}
          </button>
        </div>
      </div>
    </PageTransition>
  );
}
