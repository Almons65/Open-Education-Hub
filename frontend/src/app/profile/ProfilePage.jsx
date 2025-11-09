"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useRouter, useSearchParams} from "next/navigation";
import PageTransition from "../components/PageTransition";
import styles from "./profile.module.css";
import { supabase } from "@/lib/supabaseClient";

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
// Replace your first useEffect with this one

  // This effect adds a global click listener to close the dropdown
  // when the user clicks *outside* of it.
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

  // State for the logged-in user data
  const [loggedInUser, setLoggedInUser] = useState(null);

// --- REPLACE your first useEffect (lines 159-169) with this one ---
  useEffect(() => {
    const fetchUser = async () => {
      // 1. Get the auth user (id, email) from Supabase session
      const { data: { user: authUser }, error: authError } = await supabase.auth.getUser();
      
      if (authError || !authUser) {
        // No user is logged in
        router.push('/auth'); 
        return;
      }

      // 2. Use the authUser.id to get their REAL profile from our 'users' table
      const { data: profileData, error: profileError } = await supabase
        .from('users') // Query your public 'users' table
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
        ...authUser,       // Contains id, email, user_metadata
        profile: profileData // Contains { username: '...' }
      };
      
      // 4. Now set the logged-in user
      setLoggedInUser(completeUser);
    };
    fetchUser();
  }, [router]);  
  
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
// --- ADDED ---
  // A new state to hold the progress dictionary from your API
  const [profileProgress, setProfileProgress] = useState({});

  // EFFECT 1: This effect runs to determine *which user to display*.
  useEffect(() => {
    // Wait until we know who is logged in
    if (!loggedInUser) return;

    const viewParam = searchParams.get("view");
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
    // We remove the old localStorage fallback
    setCurrentUsername(loggedInUsername);
    
  }, [searchParams, loggedInUser]); // Now depends on loggedInUser


  // // EFFECT 2: This effect loads all data *after* 'currentUsername' has been set.
  // useEffect(() => {
  //   // Do nothing if 'currentUsername' is still null (waiting for Effect 1)
  //   if (!currentUsername) return; 

  //   // --- Load all data from mock database and localStorage ---

  //   // 1. Load static user info (name, bio, etc.)
  //   const userInfo = USERS_DATA[currentUsername] || { name: "Guest", username: "guest", email: "", joined: "N/A", bio: "" };
  //   setUser(userInfo);
  //   setFormData(userInfo); // Pre-fill the edit form

  //   // 2. Load user's favorites
  //   let allFavorites = JSON.parse(localStorage.getItem("favorites") || "{}");
  //   if (Array.isArray(allFavorites)) { allFavorites = {}; } // Fix old data format
  //   setFavorites(allFavorites[currentUsername] || []); // Get only this user's list

  //   // 3. Load user's history
  //   let allHistory = JSON.parse(localStorage.getItem("history") || "{}");
  //   if (Array.isArray(allHistory)) { allHistory = {}; } // Fix old data format
  //   setHistory(allHistory[currentUsername] || []); // Get only this user's list

  //   // 4. Load course progress and update badges
  //   const savedProgress = JSON.parse(localStorage.getItem("courseProgress") || "{}");
  //   setCourseProgress(savedProgress); // Save the *entire* progress object
  //   updateEarnedBadges(savedProgress); // Calculate badges from it

  //   // 5. Load learning time
  //   const savedTime = JSON.parse(localStorage.getItem("learningTime") || "{}");
  //   setLearningTime(savedTime[currentUsername] || 0); // Get only this user's time

  //   // 6. Load avatar
  //   const savedAvatars = JSON.parse(localStorage.getItem("userAvatars") || "{}");
  //   setAvatar(savedAvatars[currentUsername] || null); // Get only this user's avatar

  //   // 7. Load decorations
  //   const decorationData = JSON.parse(localStorage.getItem("userDecorations") || "{}");
  //   const userDecorations = decorationData[currentUsername] || { unlocked: [], equipped: null };
  //   setUnlockedDecorations(userDecorations.unlocked);
  //   setEquippedDecoration(userDecorations.equipped);
    
  // }, [currentUsername, updateEarnedBadges]); // Re-runs if 'currentUsername' changes

// // EFFECT 2: This effect loads all data *after* 'currentUsername' has been set.
//   useEffect(() => {
//     // Do nothing if 'currentUsername' is still null (waiting for Effect 1)
//     if (!currentUsername) return; 

//     // --- Load all data from mock database and localStorage ---

//     // 1. Load static user info (name, bio, etc.)
//     const userInfo = USERS_DATA[currentUsername] || { name: "Guest", username: "guest", email: "", joined: "N/A", bio: "" };
//     setUser(userInfo);
//     setFormData(userInfo); // Pre-fill the edit form

//     // 2. Load user's favorites
//     let allFavorites = JSON.parse(localStorage.getItem("favorites") || "{}");
//     if (Array.isArray(allFavorites)) { allFavorites = {}; } // Fix old data format
//     setFavorites(allFavorites[currentUsername] || []); // Get only this user's list

//     // 3. Load user's history
//     let allHistory = JSON.parse(localStorage.getItem("history") || "{}");
//     if (Array.isArray(allHistory)) { allHistory = {}; } // Fix old data format
//     setHistory(allHistory[currentUsername] || []); // Get only this user's list

//     // 4. Load course progress and update badges
//     const savedProgress = JSON.parse(localStorage.getItem("courseProgress") || "{}");
//     setCourseProgress(savedProgress); // Save the *entire* progress object
//     updateEarnedBadges(savedProgress); // Calculate badges from it

//     // 5. Load learning time
//     const savedTime = JSON.parse(localStorage.getItem("learningTime") || "{}");
//     setLearningTime(savedTime[currentUsername] || 0); // Get only this user's time

//     // 6. Load avatar
//     const savedAvatars = JSON.parse(localStorage.getItem("userAvatars") || "{}");
//     setAvatar(savedAvatars[currentUsername] || null); // Get only this user's avatar

//     // 7. Load decorations
//     const decorationData = JSON.parse(localStorage.getItem("userDecorations") || "{}");
//     const userDecorations = decorationData[currentUsername] || { unlocked: [], equipped: null };
//     setUnlockedDecorations(userDecorations.unlocked);
//     setEquippedDecoration(userDecorations.equipped);
    
//   }, [currentUsername, updateEarnedBadges]); // Re-runs if 'currentUsername' changes

// --- ADD THIS NEW EFFECT ---
  // EFFECT 2 (NEW): This effect loads all data *after* 'currentUsername' has been set.
  useEffect(() => {
    // Do nothing if 'currentUsername' is still null (waiting for Effect 1)
    if (!currentUsername) return; 

    const fetchProfileData = async () => {
      try {
        // 1. Fetch from your new FastAPI endpoint
        // Make sure your FastAPI server is running (usually on port 8000)
        const response = await fetch(`http://localhost:8000/profile/${currentUsername}`);
        
        if (!response.ok) {
          throw new Error(`Profile not found: ${currentUsername}`);
        }
        
        const data = await response.json();

        // 2. Set all your states from this single API call
        setUser(data.user);
        setFormData(data.user); // Pre-fill the edit form
        setAvatar(data.user.avatar_url || null);
        
        setFavorites(data.favorites || []);
        setHistory(data.history || []);
        setBadges(data.badges || []);
        setLearningTime(data.learningTime || 0);
        setProfileProgress(data.progress || {}); // Use the new progress state
        
        setUnlockedDecorations(data.decorations?.unlocked || []);
        setEquippedDecoration(data.decorations?.equipped || null);
        
      } catch (error) {
        console.error("Failed to fetch profile:", error);
        // Handle error, e.g., show a "not found" message or redirect
        setUser({ name: "User Not Found", username: "error", bio: "" });
      }
    };

    fetchProfileData();
    
  }, [currentUsername]); // This effect re-runs if the user we are viewing changes

// // EFFECT 3: This effect sets up listeners to keep the page in sync with other tabs.
//   useEffect(() => {
//     // Don't attach listeners if we don't know *which* user to listen for
//     if (!currentUsername) return;
    
//     // This function re-loads ALL data from localStorage
//     const handleStorageAndFocus = () => {
//       // (This is the same logic as EFFECT 2, just re-running to get fresh data)
//       let allFavorites = JSON.parse(localStorage.getItem("favorites") || "{}");
//       if (Array.isArray(allFavorites)) { allFavorites = {}; }
//       setFavorites(allFavorites[currentUsername] || []);

//       let allHistory = JSON.parse(localStorage.getItem("history") || "{}");
//       if (Array.isArray(allHistory)) { allHistory = {}; }
//       setHistory(allHistory[currentUsername] || []);

//       const savedProgress = JSON.parse(localStorage.getItem("courseProgress") || "{}");
//       setCourseProgress(savedProgress);
//       updateEarnedBadges(savedProgress);

//       const savedTime = JSON.parse(localStorage.getItem("learningTime") || "{}");
//       setLearningTime(savedTime[currentUsername] || 0);
      
//       const savedAvatars = JSON.parse(localStorage.getItem("userAvatars") || "{}");
//       setAvatar(savedAvatars[currentUsername] || null);

//       const decorationData = JSON.parse(localStorage.getItem("userDecorations") || "{}");
//       const userDecorations = decorationData[currentUsername] || { unlocked: [], equipped: null };
//       setUnlockedDecorations(userDecorations.unlocked);
//       setEquippedDecoration(userDecorations.equipped);
//     };

//     // Custom events dispatched by other components for instant updates
//     const handleHistoryUpdated = () => handleStorageAndFocus();
//     const handleFavoritesUpdated = () => handleStorageAndFocus();

//     // Listen for 'storage' events (changes in other tabs)
//     window.addEventListener("storage", handleStorageAndFocus);
//     // Listen for 'focus' events (user clicking back to this tab)
//     window.addEventListener("focus", handleStorageAndFocus);
//     // Listen for our custom events
//     window.addEventListener("favoritesUpdated", handleFavoritesUpdated);
//     window.addEventListener("historyUpdated", handleHistoryUpdated);

//     // Cleanup: Remove all listeners when the component unmounts
//     return () => {
//       window.removeEventListener("storage", handleStorageAndFocus);
//       window.removeEventListener("focus", handleStorageAndFocus);
//       window.removeEventListener("favoritesUpdated", handleFavoritesUpdated);
//       window.removeEventListener("historyUpdated", handleHistoryUpdated);
//     };
//   }, [updateEarnedBadges, currentUsername]); // Re-attach listeners if the user changes

  // // Calculates progress for a course, pulling from the *correct user's* data
  // const calculateProgress = (courseId) => {
  //   if (!currentUsername) return 0; // Safety check
  //   const course = courses.find((course) => course.id === courseId);
  //   const totalLectures = course ? course.totalLectures : 0;
  //   if (totalLectures === 0) return 0; // Prevent divide by zero

  //   // Get this user's progress from the main progress object
  //   const userProgress = courseProgress[currentUsername] || {};
  //   const courseData = userProgress[courseId] || {};
  //   const completedLectures = courseData.completedLectures || [];

  //   const progress = (completedLectures.length / totalLectures) * 100;
  //   return progress;
  // };

  // Calculates progress for a course, pulling from the *new* progress state
  const calculateProgress = (courseId) => {
    const course = courses.find((course) => course.id === courseId);
    const totalLectures = course ? course.totalLectures : 0;
    if (totalLectures === 0) return 0; // Prevent divide by zero

    // Get this user's completed lectures from the simple progress object
    const completedLectures = profileProgress[courseId] || [];

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
  // Called when "Save" is clicked — now sends a PATCH to the backend
// Called when "Save" is clicked
  const handleSaveClick = async () => { 
    // user.id comes from the 'user' state, set by your fetchProfileData hook
    if (!user || !user.id) {
      alert("Error: User data is not loaded.");
      return;
    }

    const apiEndpoint = `http://localhost:8000/profile/${user.id}`;

    try {
      const response = await fetch(apiEndpoint, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData) // Send the form data (name, bio, email)
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
  
  // Updates 'formData' state as the user types in an input
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

// Called when a new avatar file is selected
  const handleAvatarChange = async (e) => {
    if (!user || !user.id) {
      alert("Error: User data is not loaded.");
      return;
    }
    const file = e.target.files[0];
    if (!file) return;

    // --- 1. Upload to Cloudinary ---
    const cloudinaryFormData = new FormData();
    cloudinaryFormData.append("file", file);
    cloudinaryFormData.append("upload_preset", process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET);

    try {
      const cloudinaryRes = await fetch(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`, {
        method: "POST",
        body: cloudinaryFormData
      });
      
      if (!cloudinaryRes.ok) throw new Error("Cloudinary upload failed.");
      
      const cloudinaryData = await cloudinaryRes.json();
      const newAvatarUrl = cloudinaryData.secure_url;

      // --- 2. Save the new URL to our backend ---
      const apiEndpoint = `http://localhost:8000/profile/avatar/${user.id}`;
      const backendRes = await fetch(apiEndpoint, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ avatar_url: newAvatarUrl })
      });

      if (!backendRes.ok) throw new Error("Failed to save avatar URL to backend.");
      
      const updatedUser = await backendRes.json();

      // --- 3. Update UI ---
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
// Called when a new decoration is selected in the edit form
  const handleEquipDecoration = async (decorationId) => {
    if (!user || !user.id) {
      alert("Error: User data is not loaded.");
      return;
    }
    
    // If "none" is clicked, set to null. Otherwise, use the ID.
    const newEquippedId = decorationId === "none" ? null : decorationId;
    const apiEndpoint = `http://localhost:8000/profile/decoration/${user.id}`;

    try {
      const response = await fetch(apiEndpoint, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ equipped: newEquippedId })
      });

      if (!response.ok) throw new Error("Failed to equip decoration.");
      
      // Update UI immediately
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
  
  // A boolean flag to check if we are viewing our *own* profile
  // This is used to show/hide the "Edit Profile" button, avatar change, etc.
  // const isViewingOwnProfile = currentUsername === LOGGED_IN_USERNAME;

  const isViewingOwnProfile = loggedInUser && loggedInUser.user_metadata.username === currentUsername;

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
                // // When opened, re-fetch favorites data from localStorage
                // onOpen={() => {
                //   let allFavorites = JSON.parse(localStorage.getItem("favorites") || "{}");
                //   if (Array.isArray(allFavorites)) { allFavorites = {}; }
                //   setFavorites(allFavorites[currentUsername] || []);
                // }}
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
                // onOpen={() => {
                //   let allHistory = JSON.parse(localStorage.getItem("history") || "{}");
                //   if (Array.isArray(allHistory)) { allHistory = {}; }
                //   setHistory(allHistory[currentUsername] || []);
                  
                //   const savedProgress = JSON.parse(localStorage.getItem("courseProgress") || "{}");
                //   setCourseProgress(savedProgress);
                //   updateEarnedBadges(savedProgress);
                  
                //   const savedTime = JSON.parse(localStorage.getItem("learningTime") || "{}");
                //   setLearningTime(savedTime[currentUsername] || 0);
                // }}
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