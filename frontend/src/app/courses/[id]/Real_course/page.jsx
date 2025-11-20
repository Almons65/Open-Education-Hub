"use client";

// Import React hooks for state, side effects, and refs
import { useState, useEffect, useRef } from "react";
// Import Next.js hooks for navigation and accessing URL parameters
import { useParams, useRouter } from "next/navigation";
// Import custom components
import PageTransition from "@/app/components/PageTransition";
import Breadcrumb from "@/app/components/Breadcrumb";
// Import the Supabase client for database interactions
import { supabase } from "@/lib/supabaseClient";
import styles from "./realCourse.module.css"; // Import CSS modules for styling

// --- DEBUGGING CONSTANT ---
// This appears to be for testing different user scenarios.
// const CURRENT_USERNAME = "User1";
const CURRENT_USERNAME = "User2";
//const CURRENT_USERNAME = "User3";
//const CURRENT_USERNAME = "User4";
// --- END DEBUGGING ---

export default function RealCoursePage() {
  // Get URL parameters (e.g., the course ID)
  const params = useParams();
  // Get the router object for navigation
  const router = useRouter();
  // Extract the course ID from the URL parameters
  const courseId = params.id;

  // State for the (currently unused) debug username
  const [currentUser] = useState(CURRENT_USERNAME);

  // Refs to track video playback state and timing without causing re-renders
  const isPlayingRef = useRef(false); // Is the video currently playing?
  const sessionStartTimeRef = useRef(null); // When did the current play session start (in ms)?

  // --- Data Fetching State ---
  const [course, setCourse] = useState(null); // Holds the entire course object (info + lectures)
  const [currentLecture, setCurrentLecture] = useState(null); // Holds the currently selected lecture object
  const [isLoading, setIsLoading] = useState(true); // Tracks loading state for data fetching

  // --- UI & Feedback State ---
  const [isFeedbackActive, setIsFeedbackActive] = useState(false); // Is the feedback panel open?
  const [feedbackText, setFeedbackText] = useState(""); // Text inside the feedback textarea
  const [feedbackRating, setFeedbackRating] = useState(0); // Star rating (1-5)
  const [showFeedbackAlert, setShowFeedbackAlert] = useState(false); // Show "Feedback Submitted!" alert
  const [isChangingLecture, setIsChangingLecture] = useState(false); // Triggers fade effect when lecture changes

  // --- User & Progress State ---
  const [loggedInUser, setLoggedInUser] = useState(null); // Holds the authenticated user object from Supabase
  const [completedLectures, setCompletedLectures] = useState(new Set()); // A Set of completed lecture IDs (UUIDs)
  const [courseProgress, setCourseProgress] = useState({}); // (Legacy?) Holds progress data from localStorage

  /**
   * Main data fetching effect.
   * Runs when the component mounts or when 'courseId' changes.
   * Fetches the specific course and its associated lectures from Supabase.
   */
  useEffect(() => {
    if (!courseId) return; // Don't run if there's no courseId

    const fetchCourseData = async () => {
      setIsLoading(true); // Start loading

      // Fetch from the 'courses' table
      const { data, error } = await supabase
          .from("courses")
          .select(`
          *,
          lectures (
            *
          )
        `) // Select all course columns AND all columns from the related 'lectures' table
          .eq("id", courseId) // Where the course 'id' matches the one from the URL
          .single(); // Expect only one result

      if (error) {
        console.error("Error fetching course data:", error);
        setCourse(null);
      } else {
        // If data is fetched successfully
        // Sort the lectures by their 'lecture_number'
        if (data.lectures) {
          data.lectures.sort((a, b) => a.lecture_number - b.lecture_number);
        }

        setCourse(data); // Set the course state
        // Set the current lecture to the first one in the sorted list
        setCurrentLecture(data.lectures?.[0] || null);
      }
      setIsLoading(false); // Stop loading
    };

    fetchCourseData();
  }, [courseId]); // Dependency: re-run if courseId changes

  /**
   * User fetching effect.
   * Runs on mount to get the current user and their progress.
   */
  useEffect(() => {
    const fetchUserAndProgress = async () => {
      // 1. Get the current user from Supabase auth
      const { data: { user } } = await supabase.auth.getUser();
      setLoggedInUser(user);

      if (user) {
        // 2. If user is logged in, fetch their progress
        const { data: progressData, error } = await supabase
            .from("lecture_progress") // from the 'lecture_progress' junction table
            .select("lecture_id") // select only the lecture IDs
            .eq("user_id", user.id); // where the 'user_id' matches

        if (progressData) {
          // Convert the array of objects [{lecture_id: 1}, {lecture_id: 2}]
          // into a Set for efficient lookups: Set(1, 2)
          setCompletedLectures(new Set(progressData.map(p => p.lecture_id)));
        }
      } else {
        // If no user, redirect to the login page
        router.push('/auth');
      }
    };
    fetchUserAndProgress();
  }, [router]); // Dependency: router (for navigation)

  /**
   * (Legacy?) Load 'courseProgress' from localStorage.
   * This seems to be a remnant of a previous progress system.
   */
  useEffect(() => {
    const savedProgress = JSON.parse(localStorage.getItem("courseProgress"));
    if (savedProgress) {
      setCourseProgress(savedProgress);
    } else {
      localStorage.setItem("courseProgress", JSON.stringify({}));
      setCourseProgress({});
    }
  }, []); // Runs once on mount

  /**
   * Update 'history' in localStorage.
   * Adds the current course to the user's viewing history.
   */
  useEffect(() => {
    if (!courseId) return; // Don't run if ID isn't ready
    let historyData = JSON.parse(localStorage.getItem("history") || "{}");
    // Basic data migration if 'history' is an old array format
    if (Array.isArray(historyData)) {
      historyData = {};
    }
    // Get history for the current debug user
    let userHistory = historyData[CURRENT_USERNAME] || [];
    // Remove this courseId if it already exists (to move it to the front)
    userHistory = userHistory.filter(id => id !== courseId);
    // Add this courseId to the beginning of the list
    userHistory.unshift(courseId);
    historyData[CURRENT_USERNAME] = userHistory;
    // Save back to localStorage
    localStorage.setItem("history", JSON.stringify(historyData));
    // Dispatch a custom event so other components (like a history sidebar) can update
    window.dispatchEvent(new Event("historyUpdated"));
  }, [courseId]); // Dependency: courseId


  /**
   * Saves learning time (in seconds) to the database.
   * Calls a Supabase RPC (Remote Procedure Call) function 'increment_learning_time'.
   * @param {number} seconds - The number of seconds to add to the user's total.
   */
  const saveLearningTime = async (seconds) => {
    if (seconds === 0) return; // Do nothing if no time has passed

    try {
      // Call the SQL function 'increment_learning_time' defined in Supabase
      const { error } = await supabase.rpc('increment_learning_time', {
        seconds_to_add: seconds // Pass the argument to the function
      });

      if (error) {
        console.error("Failed to save learning time:", error.message);
      } else {
        console.log(`Saved ${seconds} seconds to Supabase.`);
      }
    } catch (error) {
      console.error("Error calling RPC function:", error);
    }
  };

  /**
   * Learning time tracking effect.
   * Sets up an interval to periodically save time and a listener to save time on page exit.
   */
  useEffect(() => {
    // Every 5 seconds, check if the video is playing and save the time
    const interval = setInterval(() => {
      if (isPlayingRef.current && sessionStartTimeRef.current) {
        const now = Date.now();
        const secondsElapsed = Math.floor((now - sessionStartTimeRef.current) / 1000);
        if (secondsElapsed > 0) {
          saveLearningTime(secondsElapsed);
          // Reset the start time to now
          sessionStartTimeRef.current = now;
        }
      }
    }, 5000); // Run every 5000 ms

    // This handler runs when the user closes the tab or navigates away
    const handleUnload = () => {
      if (isPlayingRef.current && sessionStartTimeRef.current) {
        const secondsElapsed = Math.floor((Date.now() - sessionStartTimeRef.current) / 1000);
        saveLearningTime(secondsElapsed); // Save any remaining time
        isPlayingRef.current = false;
      }
    };
    // Add the listener
    window.addEventListener("beforeunload", handleUnload);

    // Cleanup function: runs when the component unmounts
    return () => {
      clearInterval(interval); // Clear the interval
      window.removeEventListener("beforeunload", handleUnload); // Remove the listener
      handleUnload(); // Run one last time on unmount
    };
  }, [currentUser]); // Dependency: currentUser (though it's constant)

  /**
   * Video 'onPlay' event handler.
   * Marks the video as playing and records the start time.
   */
  const handlePlay = () => {
    isPlayingRef.current = true;
    sessionStartTimeRef.current = Date.now();
    console.log(`Video playing for ${currentUser}, starting timer...`);
  };

  /**
   * Video 'onPause' or 'onEnded' event handler.
   * Calculates elapsed time, saves it, and marks the video as not playing.
   */
  const handlePauseOrEnd = () => {
    if (isPlayingRef.current && sessionStartTimeRef.current) {
      const secondsElapsed = Math.floor((Date.now() - sessionStartTimeRef.current) / 1000);
      saveLearningTime(secondsElapsed); // Save the time
    }
    // Reset the tracking refs
    isPlayingRef.current = false;
    sessionStartTimeRef.current = null;
    console.log(`Video paused/ended for ${currentUser}, stopping timer.`);
  };


  const markLectureAsComplete = async () => {
        handlePauseOrEnd();

        if (!loggedInUser || !currentLecture || !course) return;

        const lectureIdToMark = currentLecture.id; // DBの 'id' (UUID)
        if (completedLectures.has(lectureIdToMark)) {
          console.log(`Lecture ${lectureIdToMark} is already marked as complete.`);
          return;
        }

        try {
          const endpoint = `http://localhost:8000/progress/complete/${loggedInUser.id}`;
          const response = await fetch(endpoint, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ lecture_id: lectureIdToMark }), // 'id' を 'lecture_id' として送信
          });

          if (!response.ok) throw new Error("Failed to save progress");

          const newCompletedSet = new Set(completedLectures).add(lectureIdToMark);
          setCompletedLectures(newCompletedSet);

          console.log(`Marked Lecture ${lectureIdToMark} as complete in DB.`);


          const totalLecturesInCourse = course.lectures.length;

          let completedCount = 0;
          for (const lec of course.lectures) {
            if (newCompletedSet.has(lec.id)) {
              completedCount++;
            }
          }

          if (completedCount === totalLecturesInCourse) {
            console.log(`Course ${course.id} completed! Checking for badge...`);

            // ★ 6. Supabase (user_achievements) にバッジを UPSERT
            //    (あなたのテーブル構造に合わせてカラム名を修正)
            const { error: badgeError } = await supabase
                .from('user_achievements')
                .upsert({
                  user_id: loggedInUser.id,
                  achievement_id: course.id,  // ★ カラム名を 'achievement_id' に修正
                  name: course.name,          // ★ カラム名を 'name' に修正
                  image_url: course.badge     // ★ カラム名を 'image_url' に修正
                  // 'id' (int8 PK) と 'achieved_at' は自動で入力される
                }, {
                  onConflict: 'user_id, achievement_id' // ★ 競合条件を (user_id, achievement_id) に指定
                });

            if (badgeError) {
              console.error("Failed to save course badge:", badgeError);
            } else {
              console.log(`Badge for ${course.name} saved to user_achievements!`);

              window.dispatchEvent(new Event("achievementsUpdated"));
            }
          }

        } catch (error) {
          console.error("Progress save error:", error);
        }
      };

  /**
   * Toggles the visibility of the feedback panel.
   */
  const handleFeedbackToggle = () => {
    setIsFeedbackActive((prev) => !prev);
  };

  /**
   * Updates the 'feedbackText' state as the user types in the textarea.
   */
  const handleFeedbackChange = (e) => {
    setFeedbackText(e.target.value);
  };

  /**
   * Submits the user's feedback (rating and text) to the 'reviews' table in Supabase.
   */
  const handleSendFeedback = async () => {
    // --- Validation ---
    if (feedbackRating === 0) {
      alert("Please select a star rating.");
      return;
    }
    if (!feedbackText.trim() || !courseId || !currentLecture) {
      alert("Please write a comment.");
      return;
    }
    // --- End Validation ---

    try {
      // Get the current user again (just in case)
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error("You must be logged in to leave a review.");

      // 'upsert' = UPDATE or INSERT
      // It tries to update a row based on 'onConflict'
      // If no matching row is found, it inserts a new one.
      const { error } = await supabase
          .from('reviews') // Target the 'reviews' table
          .upsert({
            course_id: courseId,
            lecture_id: currentLecture.id,
            comment: feedbackText,
            rating: feedbackRating,
            user_id: user.id
          }, {
            // Define the conflict: a user can only have one review
            // for one specific lecture.
            onConflict: 'user_id, lecture_id'
          });

      if (error) {
        throw new Error(`Failed to submit review: ${error.message}`);
      }

      // --- Success ---
      // Reset the form
      setFeedbackText("");
      setFeedbackRating(0);
      setIsFeedbackActive(false); // Close the panel

      // Show the success alert
      setShowFeedbackAlert(true);
      setTimeout(() => {
        setShowFeedbackAlert(false);
      }, 3000); // Hide after 3 seconds

    } catch (error) {
      console.error(error);
      alert(error.message); // Show error to the user
    }
  };

  /**
   * Handles changing the 'currentLecture'.
   * Sets a loading state to allow for a fade-out/fade-in animation.
   * @param {object} lec - The lecture object to switch to.
   */
  const handleChangeLecture = (lec) => {
    if (lec.id === currentLecture?.id) return; // Don't reload if it's the same lecture

    setIsChangingLecture(true); // Trigger fade-out

    // Wait for the fade-out animation (300ms) before changing the content
    setTimeout(() => {
      setCurrentLecture(lec); // Change the lecture
      setIsChangingLecture(false); // Trigger fade-in
    }, 300);
  };


  // --- ▼ RENDER LOGIC ▼ ---

  // 1. Show loading state while fetching
  if (isLoading) {
    return (
        <PageTransition>
          <div className={styles.container}>
            <p style={{ padding: "2rem" }}>Loading course data...</p>
          </div>
        </PageTransition>
    );
  }

  // 2. Show error if course fetch failed
  if (!course) {
    return <p style={{ padding: "2rem" }}>Course not found.</p>;
  }

  // 3. Render the full page
  return (
      <PageTransition>
        {/* Feedback Submitted Alert */}
        {showFeedbackAlert && (
            <div className={styles.feedbackAlert}>
              Feedback Submitted! Thank you.
            </div>
        )}

        <div className={styles.container}>
          {/* --- Sidebar (Lecture List) --- */}
          <aside className={styles.sidebar}>
            <Breadcrumb
                items={[
                  { label: "Home", href: "/home" },
                  { label: course.name, href: `/courses/${course.id}` },
                ]}
            />
            <h2> {course.name}: Lectures</h2>
            <ul>
              {/* Map over the sorted lectures fetched from Supabase */}
              {course.lectures && course.lectures.length > 0 ? (
                  course.lectures.map((lec) => (
                      <li
                          key={lec.id} // Use the database UUID as the key
                          className={lec.id === currentLecture?.id ? styles.activeLecture : ""}
                          onClick={() => handleChangeLecture(lec)}
                      >
                        {lec.title} {/* Display lecture title */}
                      </li>
                  ))
              ) : (
                  <li>No lectures available</li> // Fallback
              )}
            </ul>
          </aside>

          {/* --- Main Content (Video & Info) --- */}
          <main className={`${styles.mainContent} ${isChangingLecture ? styles.loading : ""}`}>
            {currentLecture ? (
                <>
                  <h1 className={styles.lecLabel}>{currentLecture.title}</h1>
                  {/* Video Player */}
                  <div className={styles.lectureVideoContainer}>
                    {/* Log the video URL for debugging */}
                    {console.log("Current lecture video URL:", currentLecture?.video)}
                    <video
                        src={currentLecture.video} // Video source from DB
                        controls
                        className={styles.lectureVideo}
                        onPlay={handlePlay} // Track play events
                        onPause={handlePauseOrEnd} // Track pause events
                        onEnded={markLectureAsComplete} // Mark complete on end
                        key={currentLecture.id} // Re-mount the video element when the lecture ID changes
                    >
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  {/* Lecture Text/Description */}
                  <div className={styles.lectureText}>
                    <h2 className={styles.DesLabel}>Description</h2>
                    <p>
                      {currentLecture.description}
                    </p>
                    <br></br>
                    <p>
                      {currentLecture.lecturer}
                    </p>
                  </div>

                  {/* Lecture Materials Section */}
                  {/* Check if the 'materials' JSONB array has items */}
                  {currentLecture.materials?.length > 0 && (
                      <div className={styles.lectureMaterials}>
                        <h2 className={styles.MaterialLabel}>Lecture Materials</h2>
                        <ul>
                          {/* Map over the materials array */}
                          {currentLecture.materials.map((mat, index) => (
                              <li key={index}>
                                <a href={mat.link} target="_blank" rel="noopener noreferrer">
                                  {mat.name} {/* Link name */}
                                </a>
                              </li>
                          ))}
                        </ul>
                      </div>
                  )}
                </>
            ) : (
                <p>No lecture selected.</p> // Fallback if no lecture is selected
            )}
          </main>
        </div>

        <div className={`${styles.feedbackSection} ${isFeedbackActive ? styles.active : ""}`}>
          <h2>Feedback for {currentLecture?.title || "this lecture"}</h2>

          <div className={styles.starRating}>
            {[1, 2, 3, 4, 5].map((star) => (
                <span
                    key={star}
                    className={star <= feedbackRating ? styles.starFilled : styles.starEmpty}
                    onClick={() => setFeedbackRating(star)}
                >
                ★
              </span>
            ))}
          </div>

          <textarea
              className={styles.feedbackTextArea}
              value={feedbackText}
              onChange={handleFeedbackChange}
              placeholder="Your feedback..."
          />
          <button className={styles.feedbackSendButton} onClick={handleSendFeedback}>Send</button>
        </div>
        {/* --- Floating Feedback Button --- */}
        <div className={styles.feedbackButtonContainer} onClick={handleFeedbackToggle}>
          <img src="/icons/feedback.png" alt="chat icon" style={{ width: '35px', height: '35px' }} />
        </div>

      </PageTransition>
  );
}