"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useRouter, useSearchParams} from "next/navigation";
import PageTransition from "../components/PageTransition";
import styles from "./profile.module.css";

// --- Mock Data and Constants ---

// The username of the person currently logged in.
const LOGGED_IN_USERNAME = "User2";

// A mock database of user information. In a real app, this would be fetched.
const USERS_DATA = {
  User1: { name: "User1", username: "user_01", email: "user1@example.com", joined: "Nov 2, 2025", bio: "A passionate learner and explorer." },
  User2: { name: "User2", username: "user_02", email: "user2@example.com", joined: "Nov 2, 2025", bio: "Try to reach the top." },
  User3: { name: "User3", username: "user_03", email: "user3@example.com", joined: "Nov 3, 2025", bio: "Be the best." },
  User4: { name: "User4", username: "user_04", email: "user4@example.com", joined: "Nov 3, 2025", bio: "Likes to face challenges." },
};

// --- Reusable Dropdown Component ---

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
  // Ref to get a reference to the main dropdown <div>
  const ref = useRef(null);

  // This effect adds a global click listener to close the dropdown
  // when the user clicks *outside* of it.
  useEffect(() => {
    function onDocClick(e) {
      // If the ref is set and the click was *not* inside the ref's element
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false); // Close the dropdown
      }
    }
    // Add the listener
    document.addEventListener("mousedown", onDocClick);
    // Cleanup: Remove the listener when the component unmounts
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

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
        type="button"
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

// --- Profile Page Component ---

// A list of all courses, used to look up names and badge info
const courses = [
  { id: "AAA001", name: "Introduction to Programming", totalLectures: 3, badge: "/badges/ITP_badge.png", badgeName: "Python Pioneer" },
  { id: "AAA002", name: "Calculus 1", totalLectures: 3, badge: "/badges/Cal_Badge.png", badgeName: "Mathematical Master" },
  { id: "BAA001", name: "Electromagnetic Induction", totalLectures: 3, badge: "/badges/Electromag_Badge.png", badgeName: "Physics Phenom" },
  { id: "BBA001", name: "Introduction to Deep Learning", totalLectures: 3, badge: "/badges/ITDL_Badge.png", badgeName: "AI Technician" },
  { id: "BBA002", name: "Ecology", totalLectures: 3, badge: "/badges/Eco_Badge.png", badgeName: "Eco Explorer" },
  { id: "CAA100", name: "Electrodynamics", totalLectures: 3, badge: "/badges/ElectroDyn_Badge.png", badgeName: "Quantum Quester" },
];

// A mapping of ranking medals to their badge and decoration assets
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
  // State to store the user's avatar (as a base64 Data URL)
  const [avatar, setAvatar] = useState(null);
  // Ref to access the hidden file input for changing the avatar
  const fileInputRef = useRef(null);
  // State for the user's list of favorite course IDs
  const [favorites, setFavorites] = useState([]);
  // State for the user's list of recently viewed course IDs
  const [history, setHistory] = useState([]);
  // State for the user's earned badge objects { url, name }
  const [badges, setBadges] = useState([]);
  // State for the *entire* course progress object (for all users)
  const [courseProgress, setCourseProgress] = useState({});
  // State for the user's total learning time in seconds
  const [learningTime, setLearningTime] = useState(0);
  // State for the list of decoration IDs the user has unlocked
  const [unlockedDecorations, setUnlockedDecorations] = useState([]);
  // State for the currently equipped decoration ID
  const [equippedDecoration, setEquippedDecoration] = useState(null);

  // This state is crucial. It stores *which profile we are currently viewing*.
  // It starts as 'null' to indicate we haven't checked the URL yet.
  const [currentUsername, setCurrentUsername] = useState(null); 

  // State for the static user data (name, bio, etc.)
  const [user, setUser] = useState({});
  // State for the form data when in "edit mode"
  const [formData, setFormData] = useState({});
  
  
  // This function calculates the user's earned badges from their progress
  // 'useCallback' memoizes the function so it doesn't change on every render,
  // making it safe to use in 'useEffect' dependency arrays.
  const updateEarnedBadges = useCallback((currentProgress) => {
    // Don't run if the user isn't set yet
    if (!currentUsername) return;
    const earnedBadges = [];
    // Get the progress for *this specific user*
    const userProgress = currentProgress[currentUsername] || {};

    // 1. Check for a badge for each *course*
    for (const course of courses) {
      const progressData = userProgress[course.id];
      // If the user has progress data and their 'badgeEarned' property matches
      if (progressData && progressData.badgeEarned === course.badge) {
        earnedBadges.push({
          url: course.badge,
          name: course.badgeName,
        });
      }
    }

    // 2. Check for a badge for each *ranking medal*
    for (const reward of Object.values(MEDAL_REWARDS)) {
      const medalData = userProgress[reward.badge.id];
      // If the user has progress data and their 'badgeEarned' property matches
      if (medalData && medalData.badgeEarned === reward.badge.url) {
        earnedBadges.push({ url: reward.badge.url, name: reward.badge.name });
      }
    }
    // Update the state with the final list of badges
    setBadges(earnedBadges);
  }, [currentUsername]); // This function will be remade if 'currentUsername' changes


  // A helper function to format total seconds into "Xh Ym" format
  const formatTime = (totalSeconds) => {
    if (!totalSeconds) totalSeconds = 0;
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    return `${hours}h ${minutes}m`;
  };


  // Get the URL search/query parameters
  const searchParams = useSearchParams();

  // EFFECT 1: This effect runs ONCE on page load to determine *which user to display*.
  useEffect(() => {
    // Get the '?view=' parameter from the URL (e.g., "/profile?view=User1")
    const viewParam = searchParams.get("view");

    // If URL is "?view=me", load the logged-in user
    if (viewParam === "me") {
      setCurrentUsername(LOGGED_IN_USERNAME);
      return; // Stop here
    }

    // If URL has a specific username (e.g., "?view=User1"), load that user
    if (viewParam && viewParam !== "me") {
      setCurrentUsername(viewParam);
      return; // Stop here
    }

    // FALLBACK: If no '?view=' param, check localStorage (from Ranking page)
    const storedProfile = localStorage.getItem("viewing_profile");
    // Load the stored profile, or default to the logged-in user
    setCurrentUsername(storedProfile || LOGGED_IN_USERNAME);
  }, [searchParams]); // This effect re-runs if the URL search params change



  // EFFECT 2: This effect loads all data *after* 'currentUsername' has been set.
  useEffect(() => {
    // Do nothing if 'currentUsername' is still null (waiting for Effect 1)
    if (!currentUsername) return; 

    // --- Load all data from mock database and localStorage ---

    // 1. Load static user info (name, bio, etc.)
    const userInfo = USERS_DATA[currentUsername] || { name: "Guest", username: "guest", email: "", joined: "N/A", bio: "" };
    setUser(userInfo);
    setFormData(userInfo); // Pre-fill the edit form

    // 2. Load user's favorites
    let allFavorites = JSON.parse(localStorage.getItem("favorites") || "{}");
    if (Array.isArray(allFavorites)) { allFavorites = {}; } // Fix old data format
    setFavorites(allFavorites[currentUsername] || []); // Get only this user's list

    // 3. Load user's history
    let allHistory = JSON.parse(localStorage.getItem("history") || "{}");
    if (Array.isArray(allHistory)) { allHistory = {}; } // Fix old data format
    setHistory(allHistory[currentUsername] || []); // Get only this user's list

    // 4. Load course progress and update badges
    const savedProgress = JSON.parse(localStorage.getItem("courseProgress") || "{}");
    setCourseProgress(savedProgress); // Save the *entire* progress object
    updateEarnedBadges(savedProgress); // Calculate badges from it

    // 5. Load learning time
    const savedTime = JSON.parse(localStorage.getItem("learningTime") || "{}");
    setLearningTime(savedTime[currentUsername] || 0); // Get only this user's time

    // 6. Load avatar
    const savedAvatars = JSON.parse(localStorage.getItem("userAvatars") || "{}");
    setAvatar(savedAvatars[currentUsername] || null); // Get only this user's avatar

    // 7. Load decorations
    const decorationData = JSON.parse(localStorage.getItem("userDecorations") || "{}");
    const userDecorations = decorationData[currentUsername] || { unlocked: [], equipped: null };
    setUnlockedDecorations(userDecorations.unlocked);
    setEquippedDecoration(userDecorations.equipped);
    
  }, [currentUsername, updateEarnedBadges]); // Re-runs if 'currentUsername' changes


  // EFFECT 3: This effect sets up listeners to keep the page in sync with other tabs.
  useEffect(() => {
    // Don't attach listeners if we don't know *which* user to listen for
    if (!currentUsername) return;
    
    // This function re-loads ALL data from localStorage
    const handleStorageAndFocus = () => {
      // (This is the same logic as EFFECT 2, just re-running to get fresh data)
      let allFavorites = JSON.parse(localStorage.getItem("favorites") || "{}");
      if (Array.isArray(allFavorites)) { allFavorites = {}; }
      setFavorites(allFavorites[currentUsername] || []);

      let allHistory = JSON.parse(localStorage.getItem("history") || "{}");
      if (Array.isArray(allHistory)) { allHistory = {}; }
      setHistory(allHistory[currentUsername] || []);

      const savedProgress = JSON.parse(localStorage.getItem("courseProgress") || "{}");
      setCourseProgress(savedProgress);
      updateEarnedBadges(savedProgress);

      const savedTime = JSON.parse(localStorage.getItem("learningTime") || "{}");
      setLearningTime(savedTime[currentUsername] || 0);
      
      const savedAvatars = JSON.parse(localStorage.getItem("userAvatars") || "{}");
      setAvatar(savedAvatars[currentUsername] || null);

      const decorationData = JSON.parse(localStorage.getItem("userDecorations") || "{}");
      const userDecorations = decorationData[currentUsername] || { unlocked: [], equipped: null };
      setUnlockedDecorations(userDecorations.unlocked);
      setEquippedDecoration(userDecorations.equipped);
    };

    // Custom events dispatched by other components for instant updates
    const handleHistoryUpdated = () => handleStorageAndFocus();
    const handleFavoritesUpdated = () => handleStorageAndFocus();

    // Listen for 'storage' events (changes in other tabs)
    window.addEventListener("storage", handleStorageAndFocus);
    // Listen for 'focus' events (user clicking back to this tab)
    window.addEventListener("focus", handleStorageAndFocus);
    // Listen for our custom events
    window.addEventListener("favoritesUpdated", handleFavoritesUpdated);
    window.addEventListener("historyUpdated", handleHistoryUpdated);

    // Cleanup: Remove all listeners when the component unmounts
    return () => {
      window.removeEventListener("storage", handleStorageAndFocus);
      window.removeEventListener("focus", handleStorageAndFocus);
      window.removeEventListener("favoritesUpdated", handleFavoritesUpdated);
      window.removeEventListener("historyUpdated", handleHistoryUpdated);
    };
  }, [updateEarnedBadges, currentUsername]); // Re-attach listeners if the user changes


  // Calculates progress for a course, pulling from the *correct user's* data
  const calculateProgress = (courseId) => {
    if (!currentUsername) return 0; // Safety check
    const course = courses.find((course) => course.id === courseId);
    const totalLectures = course ? course.totalLectures : 0;
    if (totalLectures === 0) return 0; // Prevent divide by zero

    // Get this user's progress from the main progress object
    const userProgress = courseProgress[currentUsername] || {};
    const courseData = userProgress[courseId] || {};
    const completedLectures = courseData.completedLectures || [];

    const progress = (completedLectures.length / totalLectures) * 100;
    return progress;
  };

  
  // EFFECT 4: This effect runs ONCE on mount to create background particles
  useEffect(() => {
    const baseParticles = [ /* ... particle positions ... */ ];
    const randomizedParticles = baseParticles.map((p) => ({
      ...p,
      size: 5 + Math.random() * 15,
      duration: 15 + Math.random() * 15,
      color: `rgba(0,0,0,${0.1 + Math.random() * 0.3})`,
    }));
    setParticles(randomizedParticles);
  }, []); // The empty array `[]` ensures this runs only once


  // --- Event Handlers for Editing Profile ---

  // Called when "Edit Profile" is clicked
  const handleEditClick = () => { setFormData(user); setIsEditing(true); };
  // Called when "Cancel" is clicked
  const handleCancelClick = () => { setIsEditing(false); }; 
  // Called when "Save" is clicked
  const handleSaveClick = () => { 
    // Merge the edited 'formData' into the 'user' object
    const updatedUser = { ...user, ...formData };
    setUser(updatedUser); // Update the state
    
    // In a real app, this would be an API call to a database.
    // Here, we just update the mock data object.
    USERS_DATA[currentUsername] = updatedUser; 
    
    setIsEditing(false); // Exit edit mode
  };
  // Updates 'formData' state as the user types in an input
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  // Called when a new avatar file is selected
  const handleAvatarChange = (e) => {
    if (!currentUsername) return; // Safety check
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader(); // Use FileReader to read the file
      reader.onload = () => {
        // 'reader.result' is a base64 Data URL (e.g., "data:image/png;base64,...")
        const avatarDataUrl = reader.result;
        setAvatar(avatarDataUrl); // Update the UI
        // Save the avatar to localStorage under this user's name
        const savedAvatars = JSON.parse(localStorage.getItem("userAvatars") || "{}");
        savedAvatars[currentUsername] = avatarDataUrl;
        localStorage.setItem("userAvatars", JSON.stringify(savedAvatars));
        // Dispatch a 'storage' event to notify other components/tabs
        window.dispatchEvent(new Event("storage"));
      };
      reader.readAsDataURL(file); // Start reading the file
    }
  };
  // --- End User Info Handlers ---

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
  // Called when a new decoration is selected in the edit form
  const handleEquipDecoration = (decorationId) => {
    if (!currentUsername) return;
    // If "none" is clicked, set to null. Otherwise, use the ID.
    const newEquippedId = decorationId === "none" ? null : decorationId;
    setEquippedDecoration(newEquippedId); // Update the UI
    
    // Save the new equipped decoration to localStorage
    const decorationData = JSON.parse(localStorage.getItem("userDecorations") || "{}");
    if (!decorationData[currentUsername]) {
      // Ensure the user's object exists
      decorationData[currentUsername] = { unlocked: [], equipped: null };
    }
    decorationData[currentUsername].equipped = newEquippedId;
    localStorage.setItem("userDecorations", JSON.stringify(decorationData));
    
    // Notify other components/tabs
    window.dispatchEvent(new Event("storage"));
  };
  // --- End Decoration Handlers ---

  // Data for the sidebar menu
  const menuItemsPrimary = [
    { label: "Home", icon: "/icons/home.png", path: "/home" },
    { label: "Profile", icon: "/icons/user.png", path: "/profile" },
    { label: "Ranking", icon: "/icons/ranking.png", path: "/ranking" },
    { label: "Logout", icon: "/icons/logout.png", path: "/auth" },
  ];
  
  // A boolean flag to check if we are viewing our *own* profile
  // This is used to show/hide the "Edit Profile" button, avatar change, etc.
  const isViewingOwnProfile = currentUsername === LOGGED_IN_USERNAME;

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
          <div style={{textAlign: 'center', paddingTop: '100px', fontSize: '1.5rem', fontWeight: 600, color: '#1a2c50'}}>
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
            // When clicked, clear the 'viewing_profile' from localStorage
            localStorage.removeItem("viewing_profile");
            // And navigate back to our own profile URL
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
            <div
              className={`${styles.toggleBtn} ${sidebarOpen ? styles.active : ""}`}
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <span className={styles.bar1}></span>
              <span className={styles.bar2}></span>
              <span className={styles.bar3}></span>
            </div>
          </header>
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
                <div className={styles.avatarWrapper}>
                  {/* The equipped decoration (e.g., gold wreath) */}
                  <div className={`${styles.avatarDecoration} ${getDecorationClass(equippedDecoration)}`}></div>
                  {/* The avatar image itself */}
                  {avatar ? (
                    <img src={avatar} alt="Profile Avatar" className={styles.profileAvatarImage} />
                  ) : (
                    <div className={styles.profileAvatarPlaceholder}>AVATAR</div>
                  )}

                  {/* Show the "Change Avatar" overlay only if viewing our own profile */}
                  {isViewingOwnProfile && (
                    <div
                      className={styles.avatarOverlay}
                      onClick={() => fileInputRef.current?.click()} // Clicks the hidden file input
                    >
                      Change Avatar
                    </div>
                  )}
                  
                  {/* The hidden file input, controlled by the overlay */}
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
                      <span className={styles.memberSince}>{user.joined}</span>
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
                      <input type="text" name="name" value={formData.name} onChange={handleChange} />
                    </label>
                    <label><strong>Bio</strong>
                      <textarea name="bio" value={formData.bio} onChange={handleChange} rows="3" />
                    </label>
                    <label><strong>Email</strong>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} />
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
                // When opened, re-fetch favorites data from localStorage
                onOpen={() => {
                  let allFavorites = JSON.parse(localStorage.getItem("favorites") || "{}");
                  if (Array.isArray(allFavorites)) { allFavorites = {}; }
                  setFavorites(allFavorites[currentUsername] || []);
                }}
              >
                {/* If there are favorites, map over them */}
                {favorites.length > 0 ? (
                  favorites.map(id => {
                    const course = courses.find(c => c.id === id);
                    const progress = calculateProgress(id);
                    return (
                      <a
                        key={id}
                        className={styles.dropItem}
                        onClick={() => router.push(`/courses/${id}`)}
                      >
                        <div>{course ? course.name : id}</div>
                        {/* Show progress bar for each favorite item */}
                        <div className={styles.progressWrapper}>
                          <div className={styles.progressContainer}>
                            <div
                              className={styles.progressBar}
                              style={{ width: `${Math.round(progress)}%` }}
                            />
                          </div>
                          <span className={styles.percentLabel}>{Math.round(progress)}%</span>
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
                // When opened, re-fetch all data to ensure it's up to date
                onOpen={() => {
                  let allHistory = JSON.parse(localStorage.getItem("history") || "{}");
                  if (Array.isArray(allHistory)) { allHistory = {}; }
                  setHistory(allHistory[currentUsername] || []);
                  
                  const savedProgress = JSON.parse(localStorage.getItem("courseProgress") || "{}");
                  setCourseProgress(savedProgress);
                  updateEarnedBadges(savedProgress);
                  
                  const savedTime = JSON.parse(localStorage.getItem("learningTime") || "{}");
                  setLearningTime(savedTime[currentUsername] || 0);
                }}
              >
                {/* If there is history, map over it */}
                {history.length > 0 ? (
                  history.map(id => {
                    const course = courses.find(c => c.id === id);
                    const progress = calculateProgress(id);
                    return (
                      <a
                        key={id}
                        className={styles.dropItem}
                        onClick={() => router.push(`/courses/${id}`)}
                      >
                        <div>{course ? course.name : id}</div>
                        {/* Show progress bar for each history item */}
                        <div className={styles.progressWrapper}>
                          <div className={styles.progressContainer}>
                            <div
                              className={styles.progressBar}
                              style={{ width: `${Math.round(progress)}%` }}
                            />
                          </div>
                          <span className={styles.percentLabel}>{Math.round(progress)}%</span>
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