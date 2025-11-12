"use client";
// Import React hooks for state, side effects, and refs
import { useState, useEffect, useRef } from "react";
// Import Next.js hook for navigation
import { useRouter } from "next/navigation";
// Import custom components
import PageTransition from "@/app/components/PageTransition";
import Breadcrumb from "@/app/components/Breadcrumb";
// Import CSS module for styling
import styles from "./courseDetail.module.css";
// Import the Supabase client for database interactions
import { supabase } from "@/lib/supabaseClient";


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
  const attendCourse = async () => {

    // Guard: Check if the user is logged in and the course is loaded
    if (!course || !loggedInUser) {
      alert("you should be logged in.");
      return;
    }

    try {
      // 1. Define the FastAPI endpoint for updating history
      const endpoint = `http://localhost:8000/profile/history/${loggedInUser.id}`;
      // 2. Send a POST request with the course_id
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ course_id: course.id }),
      });

      if (!response.ok) {
        throw new Error("Failed to update history");
      }

      // 3. Dispatch a custom event to notify other components (e.g., history sidebar)
      window.dispatchEvent(new Event("historyUpdated"));

      // 4. Navigate to the actual course-taking page
      router.push(`/courses/${course.id}/Real_course`);

    } catch (error) {
      console.error("Attend course error:", error);
      // Fallback: Still try to navigate even if history logging failed
      router.push(`/courses/${course.id}/Real_course`);
    }

  };

  // State to store the currently authenticated user's information
  const [loggedInUser, setLoggedInUser] = useState(null);

  // This useEffect hook runs on mount to fetch the current user
  useEffect(() => {
    const fetchUser = async () => {
      // Get user data from Supabase authentication
      const { data: { user: authUser } } = await supabase.auth.getUser();
      if (authUser) {
        // If user is found, store them in state
        setLoggedInUser(authUser);
      } else {
        // If no user, redirect to the authentication page
        router.push('/auth');
      }
    };
    fetchUser();
  }, [router]); // Dependency: router (for navigation)

  // This useEffect hook runs when 'course' or 'loggedInUser' changes
  // It checks if the current course is in the user's favorites
  useEffect(() => {
    // Don't run if the course or user isn't loaded yet
    if (!course || !loggedInUser) return;

    const checkFavorite = async () =>{
      // Query the 'favorites' table
      const {data, error} = await supabase
          .from("favorites")
          .select("course_id") // We only need to know if it exists
          .eq("user_id", loggedInUser.id) // Match the current user
          .eq("course_id", course.id) // Match the current course
          .maybeSingle(); // Expect 0 or 1 result

      // If data is returned (a record was found), it's a favorite
      if (data) {
        setIsFavorite(true);
      } else {
        // Otherwise, it's not
        setIsFavorite(false);
      }
    };
    checkFavorite();
  },[course, loggedInUser]); // Dependencies: re-run if course or user changes


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
  const toggleFavorite = async () => {

    // Guard: Check for user and course
    if (!course || !loggedInUser) {
      alert("you should be logged in.");
      return;
    }

    // Determine the API endpoint and HTTP method based on the current state
    let endpoint = `http://localhost:8000/profile/favorites/${loggedInUser.id}`;
    let method = "POST"; // Default to POST (adding)

    if (isFavorite) {
      // If it's already a favorite, we need to DELETE
      endpoint += `/${course.id}`; // Add the course_id to the URL for deletion
      method = "DELETE";
    }

    try {
      // Call the FastAPI backend
      const response = await fetch(endpoint, {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        // Only send a body for POST requests
        body: method === "POST" ? JSON.stringify({ course_id: course.id }) : null,
      });

      if (!response.ok) {
        throw new Error(`Failed to ${method} favorite`);
      }

      // On success, toggle the local state
      setIsFavorite(!isFavorite);

      // Notify other components (like profile page) that favorites have changed
      window.dispatchEvent(new Event("favoritesUpdated"));

    } catch (error) {
      console.error("Favorite toggle error:", error);
      alert("Failed to toggle favorites");
    }
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
                // This inline style is set by the `useEffect` hook to animate the height
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