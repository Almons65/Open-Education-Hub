"use client";

// Import React hooks: state, side effects, refs, and memoization
import { useState, useEffect, useRef, useCallback } from "react";
// Import Next.js hooks: router for navigation, searchParams for URL queries
import { useRouter, useSearchParams } from "next/navigation";
// Import custom components
import PageTransition from "../components/PageTransition";
// Import CSS module for styling
import styles from "./profile.module.css";
// Import the Supabase client for auth and storage
import { supabase } from "@/lib/supabaseClient";


// --- OLD MOCK DATA (Commented out) ---
// The username of the person currently logged in.
// const LOGGED_IN_USERNAME = "User2";
//
// // A mock database of user information. In a real app, this would be fetched.
// const USERS_DATA = {
//   User1: { name: "User1", username: "user_01", email: "user1@example.com", joined: "Nov 2, 2025", bio: "A passionate learner and explorer." },
//   ...
// };
// --- END OLD MOCK DATA ---


/**
 * A reusable dropdown component.
 * @param {object} props - Component props.
 * @param {string} props.label - The text to display on the dropdown button.
 * @param {string} props.icon - The path to the icon image.
 * @param {React.ReactNode} props.children - The content to show inside the dropdown.
 * @param {string} props.width - The CSS width of the component.
 * @param {function} props.onOpen - A callback function to run when the dropdown is opened.
 */
function Dropdown({ label, icon, children, width = "100%", onOpen }) {
  // State to track if the dropdown is open or closed
  const [open, setOpen] = useState(false);
  // Ref to get a reference to the main dropdown <div> (for detecting outside clicks)
  const ref = useRef(null);

  // This effect adds a global click listener to close the dropdown
  useEffect(() => {
    // This function runs when a click happens anywhere
    const handleClickOutside = (event) => {
      // If the dropdown is open AND the click was outside the dropdown's <div>...
      if (ref.current && !ref.current.contains(event.target)) {
        // ...then close the dropdown.
        setOpen(false);
      }
    };

    // Add the listener to the whole document
    document.addEventListener("mousedown", handleClickOutside);

    // This is a cleanup function: remove the listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]); // This effect only re-runs if the 'ref' changes (which it won't)


  // Function to toggle the dropdown's open state
  const toggleDropdown = () => {
    const newOpen = !open;
    setOpen(newOpen);
    // If we are opening it and an 'onOpen' function was provided, call it
    if (newOpen && onOpen) {
      onOpen();
    }
  };

  // Render the dropdown
  return (
      <div className={styles.dropdown} ref={ref} style={{ width }}>
        {/* The main button that is always visible */}
        <button
            className={styles.dropBtn}
            onClick={toggleDropdown}
            aria-expanded={open} // For accessibility
            type="button" // Important for forms
        >
          <div className={styles.dropBtnLeft}>
            {/* The icon and label */}
            {icon && <img src={icon} alt="" className={styles.dropIcon} />}
            <span className={styles.dropLabel}>{label}</span>
          </div>
          {/* The arrow that rotates */}
          <div className={`${styles.arrow} ${open ? styles.arrowOpen : ""}`} aria-hidden="true">
            ▶
          </div>
        </button>
        {/* The content that appears/disappears */}
        <div className={`${styles.dropContent} ${open ? styles.dropContentOpen : ""}`}>{children}</div>
      </div>
  );
}

// A constant lookup object for medal/decoration assets and names
const MEDAL_REWARDS = {
  gold: {
    badge: { id: "rank_gold_badge", url: "/medals/gold_medal.png", name: "Gold Medalist" },
    decoration: { id: "gold_decoration", name: "Gold Wreath", styleClass: styles.goldDecoration }
  },
  silver: {
    badge: { id: "rank_silver_badge", url: "/medals/silver_medal.png", name: "Silver Medalist" },
    decoration: { id: "silver_decoration", name: "Silver Wreath", styleClass: styles.silverDecoration }
  },
  bronze: {
    badge: { id: "rank_bronze_badge", url: "/medals/bronze_medal.png", name: "Bronze Medalist" },
    decoration: { id: "bronze_decoration", name: "Bronze Wreath", styleClass: styles.bronzeDecoration }
  },
};

// The main Profile Page component
export default function ProfilePage() {
  // Initialize Next.js router
  const router = useRouter();
  // State for the sidebar (open/closed)
  const [sidebarOpen, setSidebarOpen] = useState(false);
  // State for the background particles
  const [particles, setParticles] = useState([]);
  // State for tracking if the profile is in "edit mode"
  const [isEditing, setIsEditing] = useState(false);
  // State to store the user's avatar (as a full public URL)
  const [avatar, setAvatar] = useState(null);
  // Ref to access the hidden file input for changing the avatar
  const fileInputRef = useRef(null);

  // --- Profile Data States (for the user being viewed) ---
  // State for the user's list of favorite course IDs
  const [favorites, setFavorites] = useState([]);
  // State for the user's list of recently viewed course IDs
  const [history, setHistory] = useState([]);
  // State for the user's earned badge objects { url, name }
  const [badges, setBadges] = useState([]);
  // State for the user's total learning time in seconds
  const [learningTime, setLearningTime] = useState(0);
  // State for the list of decoration IDs the user has unlocked
  const [unlockedDecorations, setUnlockedDecorations] = useState([]);
  // State for the currently equipped decoration ID
  const [equippedDecoration, setEquippedDecoration] = useState(null);

  // This state is crucial. It stores *which profile we are currently viewing* (e.g., "user_02").
  // It starts as 'null' to indicate we haven't checked the URL yet.
  const [currentUsername, setCurrentUsername] = useState(null);

  // State for the static user data (name, bio, etc.) of the *viewed* profile
  const [user, setUser] = useState({});
  // State for the form data when in "edit mode"
  const [formData, setFormData] = useState({});

  // State to hold the data for the *currently logged-in* user
  const [loggedInUser, setLoggedInUser] = useState(null);

  // --- Global Data States (needed for context) ---
  // State to hold all courses (for dropdowns, etc.)
  const [courses, setCourses] = useState([]);
  // State to hold all lectures (for progress calculation)
  const [lectures, setLectures] = useState([]);
  // State to hold the viewed user's progress (array of completed lecture IDs)
  const [profileProgress, setProfileProgress] = useState({});

  /**
   * Effect: Fetches *all* lectures from the backend.
   * Needed to calculate progress percentages.
   */
  useEffect(() => {
    const fetchAllLectures = async () => {
      try {
        const response = await fetch('http://localhost:8000/lectures');
        if (!response.ok) throw new Error("Failed to fetch lectures");
        const data = await response.json();
        setLectures(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAllLectures();
  }, []); // Runs once on mount

  /**
   * Effect: Fetches *all* courses from the backend.
   * Needed to display info in the Favorites and History dropdowns.
   */
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        // Fetch from the FastAPI backend
        const response = await fetch('http://localhost:8000/courses');
        if (!response.ok) throw new Error("Failed to fetch courses");
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error("Failed to fetch courses:", error);
      }
    };
    fetchCourses();
  }, []); // Runs once on mount

  /**
   * Effect: Fetches the *currently logged-in* user's data.
   * This identifies *who* is using the app.
   */
  useEffect(() => {
    const fetchUser = async () => {
      // 1. Get the auth user (id, email) from Supabase session
      const { data: { user: authUser }, error: authError } = await supabase.auth.getUser();

      if (authError || !authUser) {
        // No user is logged in
        router.push('/auth');
        return;
      }

      // 2. Use the authUser.id to get their REAL profile (username) from our 'users' table
      const { data: profileData, error: profileError } = await supabase
          .from('users') // Query public 'users' table
          .select('username') // We only need the username
          .eq('id', authUser.id) // Match the ID
          .single(); // We expect only one row

      if (profileError || !profileData) {
        // This means the user is authenticated, but their profile row is missing
        console.error("CRITICAL: Could not find user profile for ID:", authUser.id, profileError);
        alert("Error loading user profile. Please log out and log in again.");
        router.push('/auth');
        return;
      }

      // 3. Combine the auth data and profile data into one object
      const completeUser = {
        ...authUser,       // Contains id, email, etc.
        profile: profileData // Contains { username: '...' }
      };

      // 4. Now set the logged-in user state
      setLoggedInUser(completeUser);
    };
    fetchUser();
  }, [router]); // Dependency: router (for navigation)

  /**
   * A helper function to format total seconds into "Xh Ym" format.
   * @param {number} totalSeconds - The total learning time in seconds.
   */
  const formatTime = (totalSeconds) => {
    if (!totalSeconds) totalSeconds = 0;
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    return `${hours}h ${minutes}m`;
  };


  // Get the URL search/query parameters (e.g., ?view=...)
  const searchParams = useSearchParams();

  /**
   * EFFECT 1: Determine *which user's profile to display*.
   * This runs after 'loggedInUser' is set.
   * It checks the URL query parameters.
   */
  useEffect(() => {
    // Wait until we know who is logged in
    if (!loggedInUser) return;

    const viewParam = searchParams.get("view"); // Get '?view=...'
    const loggedInUsername = loggedInUser.profile.username;

    // If URL is "?view=me", load the logged-in user
    if (viewParam === "me") {
      setCurrentUsername(loggedInUsername);
      return;
    }

    // If URL has a specific username (e.g., "?view=User1"), load that user
    if (viewParam && viewParam !== "me") {
      setCurrentUsername(viewParam);
      return;
    }

    // FALLBACK: If no '?view=' param, default to the logged-in user
    setCurrentUsername(loggedInUsername);

  }, [searchParams, loggedInUser]); // Re-runs if the URL params change or the logged-in user is identified


  /**
   * EFFECT 2: Load all profile data for the *current user*.
   * This runs *after* 'currentUsername' has been set by EFFECT 1.
   */
  useEffect(() => {
    // Do nothing if 'currentUsername' is still null (waiting for Effect 1)
    if (!currentUsername) return;

    const fetchProfileData = async () => {
      try {
        // 1. Fetch from the FastAPI endpoint
        const response = await fetch(`http://localhost:8000/profile/${currentUsername}`);

        if (!response.ok) {
          throw new Error(`Profile not found: ${currentUsername}`);
        }

        const data = await response.json();

        // 2. Set all component states from this single API call
        setUser(data.user);
        setFormData(data.user); // Pre-fill the edit form with this data
        setAvatar(data.user.avatar_url || null); // Set avatar URL

        setFavorites(data.favorites || []); // Set favorite course IDs
        setHistory(data.history || []); // Set history course IDs
        setBadges(data.badges || []); // Set earned badge objects
        setLearningTime(data.learningTime || 0); // Set learning time
        setProfileProgress(data.progress || []); // Set completed lecture IDs

        // Set decoration data
        setUnlockedDecorations(data.decorations?.unlocked || []);
        setEquippedDecoration(data.decorations?.equipped || null);

      } catch (error) {
        console.error("Failed to fetch profile:", error);
        // Handle error, e.g., show a "not found" message
        setUser({ name: "User Not Found", username: "error", bio: "" });
      }
    };

    fetchProfileData();

  }, [currentUsername]); // This effect re-runs if the user we are viewing changes


  /**
   * Calculates progress for a course using the API-fetched data.
   * @param {string} courseId - The UUID of the course.
   * @returns {number} - The completion percentage (0-100).
   */
  const calculateProgress = (courseId) => {
    // 1. Filter all lectures to get only those for this course
    const lecturesInThisCourse = lectures.filter(l => l.course_id === courseId);

    // 2. Get the total number of lectures
    const totalLectures = lecturesInThisCourse.length;
    if (totalLectures === 0) return 0; // Prevent division by zero

    // 3. Count how many of this course's lectures are in the 'profileProgress' (completed) list
    let completedCount = 0;
    const completedLectureIds = new Set(profileProgress); // Use a Set for fast lookups

    for (const lecture of lecturesInThisCourse) {
      if (completedLectureIds.has(lecture.id)) {
        completedCount++;
      }
    }

    // 4. Calculate the percentage
    return (completedCount / totalLectures) * 100;
  };

  /**
   * EFFECT 4: Runs ONCE on mount to create background particles.
   */
  useEffect(() => {
    const baseParticles = [ { top: "10%", left: "20%" }, { top: "30%", left: "70%" }, { top: "50%", left: "40%" }, { top: "70%", left: "15%" }, { top: "80%", left: "80%" }, { top: "20%", left: "50%" } ];
    const randomizedParticles = baseParticles.map((p) => ({
      ...p,
      size: 5 + Math.random() * 15, // Random size
      duration: 15 + Math.random() * 15, // Random animation speed
      color: `rgba(0,0,0,${0.1 + Math.random() * 0.3})`, // Random opacity
    }));
    setParticles(randomizedParticles);
  }, []); // The empty array `[]` ensures this runs only once


  /**
   * Effect: Listens for a custom 'favoritesUpdated' event.
   * This allows the Favorites dropdown to refresh without a full page reload
   * if the user favorites a course on another page.
   */
  useEffect(() => {
    // This function re-fetches *only* the favorites data
    const refreshProfileData = async () => {
      if (!currentUsername) return; // Don't run if no user is being viewed

      try {
        const response = await fetch(`http://localhost:8000/profile/${currentUsername}`);
        if (!response.ok) throw new Error("Profile refresh failed");
        const data = await response.json();

        // Update *only* the favorites state
        setFavorites(data.favorites || []);
      } catch (error) {
        console.error("Failed to refresh favorites:", error);
      }
    };

    // Add the event listener
    window.addEventListener("favoritesUpdated", refreshProfileData);

    // Cleanup: remove the listener when the component unmounts
    return () => {
      window.removeEventListener("favoritesUpdated", refreshProfileData);
    };
  }, [currentUsername]); // Re-attach listener if the viewed user changes

  /**
   * Effect: Listens for a custom 'historyUpdated' event.
   * Refreshes the History dropdown when the user visits a course.
   */
  useEffect(() => {
    const refreshHistoryData = async () => {
      if (!currentUsername) return;
      try {
        const response = await fetch(`http://localhost:8000/profile/${currentUsername}`);
        if (!response.ok) throw new Error("Profile refresh failed");
        const data = await response.json();

        // Update *only* the history state
        setHistory(data.history || []);
      } catch (error) {
        console.error("Failed to refresh history:", error);
      }
    };

    // Add the event listener
    window.addEventListener("historyUpdated", refreshHistoryData);
    // Cleanup: remove the listener
    return () => {
      window.removeEventListener("historyUpdated", refreshHistoryData);
    };
  }, [currentUsername]); // Re-attach listener if the viewed user changes

  // --- Event Handlers for Editing Profile ---

  // Called when "Edit Profile" is clicked
  const handleEditClick = () => {
    setFormData(user); // Load current user data into the form
    setIsEditing(true); // Enter edit mode
  };

  // Called when "Cancel" is clicked
  const handleCancelClick = () => {
    setIsEditing(false); // Exit edit mode
  };

  /**
   * Called when "Save" is clicked.
   * Sends a PATCH request to the FastAPI backend to update user info.
   */
  const handleSaveClick = async () => {
    if (!user || !user.id) {
      alert("Error: User data is not loaded.");
      return;
    }

    // The API endpoint to update the user
    const apiEndpoint = `http://localhost:8000/profile/${user.id}`;

    try {
      // Send the 'formData' (name, bio, email) to the backend
      const response = await fetch(apiEndpoint, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error("Failed to save profile.");
      }

      const updatedUser = await response.json();

      // Update the local state with the saved data
      setUser(updatedUser);
      setIsEditing(false); // Exit edit mode

    } catch (error) {
      console.error("Save error:", error);
      alert("Error saving profile. Please try again.");
    }
  };

  // Updates 'formData' state as the user types in an input (controlled component)
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });



  /**
   * Called when a new avatar file is selected.
   * 1. Uploads file to Supabase Storage.
   * 2. Gets the public URL.
   * 3. Saves the URL to our backend via FastAPI.
   * 4. Updates the UI.
   */
  const handleAvatarChange = async (e) => {
    if (!user || !user.id) {
      alert("Error: User data is not loaded.");
      return;
    }
    const file = e.target.files[0];
    if (!file) return;

    // 1. Define the file path (e.g., public/avatars/USER_ID/avatar.png)
    const fileExt = file.name.split('.').pop();
    const fileName = `avatar.${fileExt}`;
    const filePath = `${user.id}/${fileName}`; // Unique path per user

    try {
      // --- 1. Upload to Supabase Storage ---
      const { error: storageError } = await supabase.storage
          .from('avatars') // The 'avatars' bucket
          .upload(filePath, file, {
            cacheControl: '3600',
            upsert: true, // Overwrite if it already exists
          });

      if (storageError) {
        throw new Error(`Supabase Storage failed: ${storageError.message}`);
      }

      // --- 2. Get the public URL for the newly uploaded file ---
      const { data: urlData } = supabase.storage
          .from('avatars')
          .getPublicUrl(filePath);

      if (!urlData || !urlData.publicUrl) {
        throw new Error("Failed to get public URL from Supabase.");
      }

      // This is the permanent URL to the image
      const newAvatarUrl = urlData.publicUrl;

      // --- 3. Save the new URL to our backend (FastAPI) ---
      const apiEndpoint = `http://localhost:8000/profile/avatar/${user.id}`;
      const backendRes = await fetch(apiEndpoint, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ avatar_url: newAvatarUrl }),
      });

      if (!backendRes.ok) throw new Error("Failed to save avatar URL to backend.");

      const updatedUser = await backendRes.json();

      // --- 4. Update UI ---
      setAvatar(newAvatarUrl); // Update the <img> src
      setUser(updatedUser); // Update the user state

    } catch (error) {
      console.error("Avatar change error:", error);
      alert("Error changing avatar. Please try again.");
    }
  };

  // --- Decoration Handlers ---

  // Helper to get the CSS class for a decoration ID
  const getDecorationClass = (decorationId) => {
    if (decorationId === "gold_decoration") return styles.goldDecoration;
    if (decorationId === "silver_decoration") return styles.silverDecoration;
    if (decorationId === "bronze_decoration") return styles.bronzeDecoration;
    return ''; // Default: no class
  };

  // Helper to get the name (e.g., "Gold Wreath") for a decoration ID
  const getDecorationName = (decorationId) => {
    for (const reward of Object.values(MEDAL_REWARDS)) {
      if (reward.decoration.id === decorationId) return reward.decoration.name;
    }
    return "None";
  };

  /**
   * Called when a new decoration is selected in the edit form.
   * Sends a PATCH request to the FastAPI backend.
   */
  const handleEquipDecoration = async (decorationId) => {
    if (!user || !user.id) {
      alert("Error: User data is not loaded.");
      return;
    }

    // If "none" is clicked, set to null. Otherwise, use the ID.
    const newEquippedId = decorationId === "none" ? null : decorationId;
    const apiEndpoint = `http://localhost:8000/profile/decoration/${user.id}`;

    try {
      // Send the new equipped ID (or null) to the backend
      const response = await fetch(apiEndpoint, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ equipped: newEquippedId })
      });

      if (!response.ok) throw new Error("Failed to equip decoration.");

      // Update UI immediately on success
      setEquippedDecoration(newEquippedId);

    } catch (error) {
      console.error("Equip error:", error);
      alert("Error equipping decoration. Please try again.");
    }
  };

  // Data for the sidebar menu
  const menuItemsPrimary = [
    { label: "Home", icon: "/icons/home.png", path: "/home" },
    { label: "Profile", icon: "/icons/user.png", path: "/profile" },
    { label: "Ranking", icon: "/icons/ranking.png", path: "/ranking" },
    { label: "Logout", icon: "/icons/logout.png", path: "/auth" },
  ];

  // A boolean to check if we are viewing our own profile
  // Used to show/hide edit buttons
  const isViewingOwnProfile = loggedInUser && loggedInUser.profile.username === currentUsername;

  // --- Loading State Render ---
  // If 'currentUsername' is still null, we are still waiting for EFFECT 1
  // to run and figure out who to load. Show a loading message.
  if (!currentUsername) {
    return (
        <div className={styles.profileContainer}>
          {/* Show a simplified sidebar while loading */}
          <div className={`${styles.sidebar} ${sidebarOpen ? styles.active : ""}`}>
            <header>
              <div className={styles.imageText}>
                <img src="/icons/OEH_logo.png" alt="OEH Logo" />
              </div>
            </header>
          </div>
          {/* Show a centered "Loading..." message */}
          <main className={styles.mainContent}>
            <div style={{ textAlign: 'center', paddingTop: '100px', fontSize: '1.5rem', fontWeight: 600, color: '#1a2c50' }}>
              Loading profile...
            </div>
          </main>
        </div>
    );
  }

  // --- Main Page Render ---
  // This renders *after* 'currentUsername' is set and data has been loaded.
  return (
      <PageTransition>
        {/* "Back to My Profile" Button */}
        {/* This button only appears if we are *not* viewing our own profile */}
        {!isViewingOwnProfile && (
            <button
                className={styles.backToProfileBtn}
                onClick={() => {
                  // Navigate back to our own profile URL
                  router.replace("/profile?view=me");
                }}
            >
              ← Back to My Profile
            </button>
        )}

        {/* Main 2-column layout */}
        <div className={styles.profileContainer}>
          {/* Sidebar (Standard) */}
          <div className={`${styles.sidebar} ${sidebarOpen ? styles.active : ""}`}>
            <header>
              <div className={styles.imageText}>
                <img src="/icons/OEH_logo.png" alt="OEH Logo" />
                <span className={styles.main}>Open Education Hub</span>
              </div>
              {/* Hamburger menu toggle */}
              <div
                  className={`${styles.toggleBtn} ${sidebarOpen ? styles.active : ""}`}
                  onClick={() => setSidebarOpen(!sidebarOpen)}
              >
                <span className={styles.bar1}></span>
                <span className={styles.bar2}></span>
                <span className={styles.bar3}></span>
              </div>
            </header>
            {/* Sidebar navigation links */}
            <ul className={styles.menuLinks}>
              {menuItemsPrimary.map((item) => (
                  <li key={item.label} className={styles.navLink}>
                    <button className={styles.menuBtn} onClick={() => router.push(item.path)}>
                      <img src={item.icon} alt={item.label} />
                      <span>{item.label}</span>
                    </button>
                  </li>
              ))}
            </ul>
          </div>

          {/* Main content */}
          <main className={styles.mainContent}>
            {/* Background particles */}
            <div className={styles.particles}>
              {particles.map((p, i) => (
                  <div
                      key={i}
                      className={styles.particle}
                      style={{
                        top: p.top, left: p.left,
                        width: `${p.size}px`, height: `${p.size}px`,
                        animationDuration: `${p.duration}s`, backgroundColor: p.color,
                      }}
                  />
              ))}
            </div>

            {/* Main 3-section profile layout */}
            <div className={styles.profileLayout}>
              {/* Section 1: User Info (Left) */}
              <div className={styles.profileInfoWrapper}>
                <div className={styles.profileHeader}>
                  <span className={styles.headerLabel}>USER CENTRE</span>
                  {/* Editable avatar */}
                  <div
                      className={styles.avatarWrapper}
                      // The whole avatar area is clickable, but only if it's your profile
                      onClick={() => isViewingOwnProfile && fileInputRef.current?.click()}
                  >
                    {/* The equipped decoration (e.g., gold wreath) */}
                    <div className={`${styles.avatarDecoration} ${getDecorationClass(equippedDecoration)}`}></div>
                    {/* The avatar image itself */}
                    {avatar ? (
                        <img src={avatar} alt="Profile Avatar" className={styles.profileAvatarImage} />
                    ) : (
                        // Placeholder if no avatar is set
                        <div className={styles.profileAvatarPlaceholder}>AVATAR</div>
                    )}

                    {/* Show the "Change Avatar" overlay only if viewing our own profile */}
                    {isViewingOwnProfile && (
                        <div
                            className={styles.avatarOverlay}
                        >
                          Change Avatar
                        </div>
                    )}

                    {/* The hidden file input (this part stays the same) */}
                    {isViewingOwnProfile && (
                        <input
                            type="file" accept="image/*"
                            ref={fileInputRef} onChange={handleAvatarChange}
                            style={{ display: "none" }} // Hide the default ugly input
                        />
                    )}
                  </div>
                </div>

                {/* User info: Toggles between VIEW and EDIT mode */}
                {!isEditing ? (
                    // --- VIEW MODE ---
                    <>
                      <h2 className={styles.profileName}>{user.name}</h2>
                      <p className={styles.profileUsername}>@{user.username}</p>

                      {/* Stats block for learning time and join date */}
                      <div className={styles.statBlock}>
                        <div className={styles.statItem}>
                          <strong>Total Learning Time:</strong>
                          <span className={styles.learntime}>{formatTime(learningTime)}</span>
                        </div>
                        <div className={styles.statItem}>
                          <strong>Member Since:</strong>
                          <span className={styles.memberSince}>
                        {/* Format the 'created_at' timestamp */}
                            {user.created_at ? (
                                new Date(user.created_at).toLocaleDateString('en-US', {
                                  year: 'numeric', month: 'short', day: 'numeric'
                                })
                            ) : (
                                '-'
                            )}
                      </span>
                        </div>
                      </div>

                      <p className={styles.profileBio}>{user.bio}</p>

                      <div className={styles.emailWrapper}>
                        <img src="/icons/email-icon.png" alt="email icon" className={styles.emailIcon} />
                        <p className={styles.profileEmail}>{user.email}</p>
                      </div>

                      {/* Show "Edit Profile" button ONLY if it's our profile */}
                      {isViewingOwnProfile && (
                          <div className={styles.profileActions}>
                            <button className={styles.editBtn} onClick={handleEditClick}>Edit Profile</button>
                          </div>
                      )}
                    </>
                ) : (
                    // --- EDIT MODE ---
                    <>
                      <div className={styles.editForm}>
                        <label><strong>Name</strong>
                          <input type="text" name="name" value={formData.name || ""} onChange={handleChange} />
                        </label>
                        <label><strong>Bio</strong>
                          <textarea name="bio" value={formData.bio || ""} onChange={handleChange} rows="3" />
                        </label>
                        <label><strong>Email</strong>
                          <input type="email" name="email" value={formData.email || ""} onChange={handleChange} />
                        </label>
                        {/* Decoration Selector */}
                        <label>
                          <strong>Avatar Decoration</strong>
                          <div className={styles.decorationSelector}>
                            {/* "None" option */}
                            <button
                                className={`${styles.decorationOption} ${!equippedDecoration ? styles.decorationActive : ''}`}
                                onClick={() => handleEquipDecoration("none")}
                                type="button" // Prevent this button from submitting a form
                            >
                              <div className={styles.decorationPreview}>
                                <div className={styles.decorationPreviewInner}></div>
                              </div>
                              <span className={styles.decorationName}>None</span>
                            </button>

                            {/* Map over UNLOCKED decorations */}
                            {unlockedDecorations.map(decoId => (
                                <button
                                    key={decoId}
                                    // Add 'decorationActive' class if this is the equipped one
                                    className={`${styles.decorationOption} ${equippedDecoration === decoId ? styles.decorationActive : ''}`}
                                    onClick={() => handleEquipDecoration(decoId)}
                                    type="button"
                                >
                                  {/* Show a preview of the decoration */}
                                  <div className={`${styles.decorationPreview} ${getDecorationClass(decoId)}`}>
                                    <div className={styles.decorationPreviewInner}></div>
                                  </div>
                                  <span className={styles.decorationName}>{getDecorationName(decoId)}</span>
                                </button>
                            ))}
                          </div>
                        </label>
                      </div>
                      {/* "Save" and "Cancel" buttons for the form */}
                      <div className={styles.formActions}>
                        <button className={styles.saveBtn} onClick={handleSaveClick}>Save</button>
                        <button className={styles.cancelBtn} onClick={handleCancelClick}>Cancel</button>
                      </div>
                    </>
                )}
              </div>

              {/* Section 2: Achievements (Center) */}
              <div className={styles.achievementContainer}>
                <h3 className={styles.achievementTitle}>Achievements</h3>
                {/* Show a message if no badges are earned */}
                {badges.length === 0 ? (
                    <p>No achievements yet</p>
                ) : (
                    // Otherwise, create a grid of badges
                    <div className={styles.badgeGrid}>
                      {badges.map((badge, index) => (
                          <div className={styles.badgeCard} key={index}>
                            <img
                                src={badge.url}
                                alt={badge.name}
                                className={styles.badgeImage}
                                // Fallback image in case the src is broken
                                onError={(e) => e.target.src = 'https://placehold.co/100x100/eee/aaa?text=Badge'}
                            />
                            <p className={styles.badgeLabel}>{badge.name}</p>
                          </div>
                      ))}
                    </div>
                )}
              </div>

              {/* Section 3: Dropdowns (Right) */}
              <div className={styles.dropdownGroup}>
                {/* Favorites Dropdown */}
                <Dropdown
                    label="FAVORITE"
                    icon="/icons/heart.png"
                    // The 'onOpen' prop (which used localStorage) is no longer needed
                    // because the 'favoritesUpdated' event listener handles updates.
                >
                  {/* If there are favorites, map over them */}
                  {favorites.length > 0 ? (
                      favorites.map(id => {
                        // Find the full course data from the 'courses' state
                        const course = courses.find(c => c.id === id);
                        if (!course) return null; // Don't render if course data isn't loaded yet

                        // Calculate progress for this course
                        const progress = calculateProgress(id);
                        return (
                            <a
                                key={id}
                                className={styles.dropItem}
                                onClick={() => router.push(`/courses/${id}`)}
                            >
                              {/* Video Thumbnail */}
                              <div className={styles.dropItemVideo}>
                                <video
                                    src={course.preview_video}
                                    muted
                                    playsInline
                                    className={styles.dropItemVideoPlayer}
                                />
                              </div>
                              {/* Course Name and Progress Bar */}
                              <div className={styles.dropItemContent}>
                                <div className={styles.dropItemName}>{course.name}</div>
                                <div className={styles.progressWrapper}>
                                  <div className={styles.progressContainer}>
                                    <div
                                        className={styles.progressBar}
                                        style={{ width: `${Math.round(progress)}%` }}
                                    />
                                  </div>
                                  <span className={styles.percentLabel}>{Math.round(progress)}%</span>
                                </div>
                              </div>
                            </a>
                        );
                      })
                  ) : (
                      // Show a message if no favorites
                      <span className={styles.dropItem}>No favorites yet</span>
                  )}
                </Dropdown>

                {/* History Dropdown */}
                <Dropdown
                    label="HISTORY"
                    icon="/icons/history.png"
                    // 'onOpen' removed, handled by 'historyUpdated' event listener
                >
                  {/* If there is history, map over it */}
                  {history.length > 0 ? (
                      history.map(id => {
                        // Find the full course data
                        const course = courses.find(c => c.id === id);
                        if (!course) return null; // Don't render if course data isn't loaded yet

                        const progress = calculateProgress(id);
                        return (
                            <a
                                key={id}
                                className={styles.dropItem}
                                onClick={() => router.push(`/courses/${id}`)}
                            >
                              {/* Video Thumbnail */}
                              <div className={styles.dropItemVideo}>
                                <video
                                    src={course.preview_video}
                                    muted
                                    playsInline
                                    className={styles.dropItemVideoPlayer}
                                />
                              </div>
                              {/* Course Name and Progress Bar */}
                              <div className={styles.dropItemContent}>
                                <div className={styles.dropItemName}>{course.name}</div>
                                <div className={styles.progressWrapper}>
                                  <div className={styles.progressContainer}>
                                    <div
                                        className={styles.progressBar}
                                        style={{ width: `${Math.round(progress)}%` }}
                                    />
                                  </div>
                                  <span className={styles.percentLabel}>{Math.round(progress)}%</span>
                                </div>
                              </div>
                            </a>
                        );
                      })
                  ) : (
                      // Show a message if no history
                      <span className={styles.dropItem}>No recent courses</span>
                  )}
                </Dropdown>
              </div>
            </div>
          </main>
        </div>
      </PageTransition>
  );
}