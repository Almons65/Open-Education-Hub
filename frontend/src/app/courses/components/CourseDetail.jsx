"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import PageTransition from "@/app/components/PageTransition";
import styles from "./courseDetail.module.css"; 
import Breadcrumb from "@/app/components/Breadcrumb";

//const CURRENT_USERNAME = "User1"; 
const CURRENT_USERNAME = "User2";
//const CURRENT_USERNAME = "User3";
//const CURRENT_USERNAME = "User4";


// Define and export the CourseDetail component, which receives a 'course' object as a prop
export default function CourseDetail({ course }) {
  // Initialize the router hook to be able to redirect the user
  const router = useRouter();
  // State to track if this course is in the user's favorites list (true/false)
  const [isFavorite, setIsFavorite] = useState(false);
  // State to track if the description accordion is open or closed (true/false)
  const [showDescription, setShowDescription] = useState(false);
  // State to track if an animation is in progress (currently unused in the logic)
  const [isAnimating, setIsAnimating] = useState(false);
  // A ref to get direct access to the description's <div> element (for height calculation)
  const descRef = useRef(null);
  // A ref to get direct access to the arrow icon <span> element
  const arrowRef = useRef(null);

  // This function is called when the "Attend Course" button is clicked
  const attendCourse = () => {
    // Safety check: do nothing if the course prop isn't available
    if (!course) return;

    // --- Update the user-specific "Recently Viewed" history ---

    // 1. Get the main history object from localStorage (or an empty object)
    let historyData = JSON.parse(localStorage.getItem("history") || "{}");
    // 2. Fix for old data: If 'historyData' is an array (from a bug), reset it
    if (Array.isArray(historyData)) { historyData = {}; }

    // 3. Get the personal history list for *this* user
    let userHistory = historyData[CURRENT_USERNAME] || [];

    // 4. Remove any old instance of this course ID to prevent duplicates
    userHistory = userHistory.filter(id => id !== course.id);
    // 5. Add the current course ID to the *front* of the list (as most recent)
    userHistory.unshift(course.id);

    // 6. Put the user's updated list back into the main history object
    historyData[CURRENT_USERNAME] = userHistory;
    // 7. Save the updated main object back to localStorage
    localStorage.setItem("history", JSON.stringify(historyData));
    
    // 8. Dispatch a custom event to notify other components (like ProfilePage) to refresh
    window.dispatchEvent(new Event("historyUpdated"));

    // 9. Navigate the user to the actual course-taking page
    router.push(`/courses/${course.id}/Real_course`);
  };

  // This useEffect hook runs when the 'course' prop changes
  useEffect(() => {
    // Don't run if the course isn't loaded yet
    if (!course) return;
    
    // --- Check if this course is in the user's favorites ---
    // 1. Get the main favorites object from localStorage
    const allFavorites = JSON.parse(localStorage.getItem("favorites") || "{}");
    // 2. Get the personal favorites list for *this* user
    const userFavorites = allFavorites[CURRENT_USERNAME] || [];
    // 3. Set the 'isFavorite' state to true if the user's list includes this course ID
    setIsFavorite(userFavorites.includes(course.id));
  }, [course]); // Dependency array: re-run this effect if 'course' changes

  // This useEffect hook manages the smooth accordion animation for the description
  useEffect(() => {
    // Don't run if the 'descRef' isn't attached to the <div> yet
    if (!descRef.current) return;
    
    // Get the actual DOM element from the ref
    const el = descRef.current;

    // This is the core animation logic:
    // If 'showDescription' is true, set maxHeight to the element's full content height
    // If 'showDescription' is false, set maxHeight to "0px"
    // The 'transition' property in the CSS file animates this height change
    el.style.maxHeight = showDescription ? el.scrollHeight + "px" : "0px";

  }, [showDescription, course]); // Re-run this effect if 'showDescription' or 'course' changes

  // Safety guard: If the 'course' prop hasn't loaded, display a message
  if (!course) return <p>Course not found.</p>;

  // This function is called when the "Add/Remove Favorite" button is clicked
  const toggleFavorite = () => {
    
    // --- Update the user-specific "Favorites" list ---

    // 1. Get the main favorites object from localStorage
    let allFavorites = JSON.parse(localStorage.getItem("favorites") || "{}");
    // 2. Fix for old data: If it's an array, reset to an object
    if (Array.isArray(allFavorites)) { allFavorites = {}; }

    // 3. Get the personal favorites list for *this* user
    let userFavorites = allFavorites[CURRENT_USERNAME] || [];

    if (isFavorite) {
      // If it's *already* a favorite, filter it *out* (remove it)
      userFavorites = userFavorites.filter(id => id !== course.id);
    } else {
      // If it's *not* a favorite, add it to the list (if not already present)
      if (!userFavorites.includes(course.id)) {
        userFavorites.push(course.id);
      }
    }

    // 4. Put the user's updated list back into the main object
    allFavorites[CURRENT_USERNAME] = userFavorites;
    // 5. Save the updated main object back to localStorage
    localStorage.setItem("favorites", JSON.stringify(allFavorites));
    
    // 6. Toggle the 'isFavorite' state in React to update the button's appearance
    setIsFavorite(!isFavorite);
    // 7. Dispatch an event to notify other components that favorites have changed
    window.dispatchEvent(new Event("favoritesUpdated"));
  };

  // This function toggles the 'showDescription' state when the "Show More" button is clicked
  const toggleDescription = () => setShowDescription(!showDescription);

  // --- Render the component's JSX (HTML) ---
  return (
    // Wrap the page in the animated PageTransition component
    <PageTransition>
      {/* The main container for the course detail content */}
      <div className={styles.courseDetailContainer}>
        {/* The white card that holds all the content */}
        <div className={styles.courseDetailCard}>
          {/* Breadcrumb navigation */}
          <Breadcrumb
            items={[
              { label: "Home", href: "/home" },
              // The last item has no 'href', so it will be rendered as plain text
              { label: course.name }, 
            ]}
          />

          {/* The main title of the course */}
          <h2 className={styles.courseTitle}>{course.name}</h2>

          {/* The difficulty "pill" */}
          <p className={styles.courseDifficulty}>
            <strong>Difficulty:</strong>{" "}
            <span
              // Dynamically apply a CSS class based on the difficulty level
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

          {/* The container for subject tags */}
          <div className={styles.subjects}>
            {/* Check if the 'subjects' array exists and has items */}
            {course.subjects?.length
              // If yes, map over the array and create a <span> for each subject
              ? course.subjects.map((s, i) => (
                  <span key={i} className={styles.subjectTag}>
                    {s}
                  </span>
                ))
              // If no, display "N/A"
              : "N/A"}
          </div>

          {/* Conditionally render the preview video if a 'previewVideo' URL exists */}
          {course.preview_video && (
            <div className={styles.previewContainer}>
              <h3 className={styles.previewLabel}>Preview</h3>
              {/* The container for the video player */}
              <div className={styles.videoContainer}>
                <video
                  src={course.preview_video} // The video file to play
                  controls // Show the default browser controls (play, pause, volume)
                  className={styles.courseVideo}
                >
                  {/* This text displays if the browser doesn't support the <video> tag */}
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* The "Attend Course" button */}
              <button
                className={styles.attendBtn}
                onClick={attendCourse} // Call the 'attendCourse' function on click
              >
                Attend Course
              </button>
            </div>
          )}

          {/* Accordion Description container */}
          <div
            ref={descRef} // Attach the ref to this <div>
            className={styles.courseDescription}
            // This inline style is redundant because the `useEffect` hook above
            // is already managing the 'maxHeight' property directly.
            // This was likely left from a previous implementation.
            style={{
              maxHeight: showDescription ? `${descRef.current?.scrollHeight}px` : "0px",
            }}
          >
            <h3>Description</h3>
            <p>{course.description || "No description available for this course."}</p>
            <br></br>
            <p> {course.lecturer || "No lecturer info available for this course."}</p>
          </div>

          {/* The "Show More" / "Show Less" button for the accordion */}
          <button
            onClick={toggleDescription} // Call the 'toggleDescription' function on click
            className={styles.toggleDescBtn}
          >
            {/* The animated arrow icon */}
            <span
              ref={arrowRef} // Attach the ref to this <span>
              // Apply 'arrowUp' class if description is open
              // Apply 'spinning' class if 'isAnimating' is true
              className={`${styles.arrow} ${showDescription ? styles.arrowUp : ""} ${isAnimating ? styles.spinning : ""}`}
            >
              ▼ {/* The arrow character */}
            </span>
            {/* The text label for the button */}
            <span className={styles.toggleLabel}>
              {/* Change the text based on the 'showDescription' state */}
              {showDescription ? "Show Less" : "Show More"}
            </span>
          </button>

          {/* The "Add/Remove Favorite" button */}
          <button
            onClick={toggleFavorite} // Call the 'toggleFavorite' function on click
            // Apply 'remove' or 'add' class based on the 'isFavorite' state
            className={`${styles.favoriteBtn} ${isFavorite ? styles.remove : styles.add}`}
          >
            {/* Change the button text based on the 'isFavorite' state */}
            {isFavorite ? "💔 Remove from Favorites" : "❤️ Add to Favorites"}
          </button>
        </div>
      </div>
    </PageTransition>
  );
}