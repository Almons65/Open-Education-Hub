"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import PageTransition from "@/app/components/PageTransition";
import styles from "./ranking.module.css"; // Create your own CSS

// --- Mock Data ---

// A mock database of user information. In a real app, this would be fetched.
const USERS_DATA = {
  User1: { name: "User1", username: "user_01", email: "user1@example.com", joined: "Nov 2, 2025", bio: "A passionate learner and explorer." },
  User2: { name: "User2", username: "user_02", email: "user2@example.com", joined: "Nov 2, 2025", bio: "Try to reach the top." },
  User3: { name: "User3", username: "user_03", email: "user3@example.com", joined: "Nov 3, 2025", bio: "Be the best." },
  User4: { name: "User4", username: "user_04", email: "user4@example.com", joined: "Nov 3, 2025", bio: "Likes to face challenges." },
};

// A mapping of ranking medals to their badge and decoration assets
const MEDAL_REWARDS = {
  gold: {
    badge: {
      id: "rank_gold_badge",
      url: "/medals/gold_medal.png", // Path to gold medal image
      name: "Gold Medalist",
    },
    decoration: {
      id: "gold_decoration",
      name: "Gold Wreath",
      styleClass: styles.goldDecoration, // CSS class for the gold wreath
    }
  },
  silver: {
    badge: {
      id: "rank_silver_badge",
      url: "/medals/silver_medal.png", // Path to silver medal image
      name: "Silver Medalist",
    },
    decoration: {
      id: "silver_decoration",
      name: "Silver Wreath",
      styleClass: styles.silverDecoration,
    }
  },
  bronze: {
    badge: {
      id: "rank_bronze_badge",
      url: "/medals/bronze_medal.png", // Path to bronze medal image
      name: "Bronze Medalist",
    },
    decoration: {
      id: "bronze_decoration",
      name: "Bronze Wreath",
      styleClass: styles.bronzeDecoration,
    }
  },
};

// --- UserHoverCard Component ---

/**
 * A small popup card that shows detailed user info on hover.
 * This component is displayed using CSS when hovering over a user row.
 * @param {object} props - Component props.
 * @param {object} props.user - The user object to display.
 * @param {function} props.onViewProfile - Function to call when the card is clicked.
 */
function UserHoverCard({ user, position, onViewProfile }) {
  // Helper function to format total seconds into "Xh Ym"
  const formatTime = (totalSeconds) => {
    if (!totalSeconds) totalSeconds = 0;
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    return `${hours}h ${minutes}m`;
  };

  // Helper function to get the CSS class for a user's equipped decoration
  const getDecorationClass = (decorationId) => {
    if (decorationId === "gold_decoration") return styles.goldDecoration;
    if (decorationId === "silver_decoration") return styles.silverDecoration;
    if (decorationId === "bronze_decoration") return styles.bronzeDecoration;
    return ''; 
  };
  
  // Render the hover card
  return (
    <div 
      className={styles.hoverCard} 
      // This onClick handler allows the *card itself* to be clicked to view the profile
      onClick={(e) => onViewProfile(e, user.username)}
    >
      {/* The decorative blue background of the header */}
      <div className={styles.hoverCardHeaderBackground}></div>
      {/* Section for the avatar */}
      <div className={styles.hoverCardAvatarSection}>
        <div className={styles.hoverCardAvatarWrapper}>
          {/* The medal wreath decoration (gold, silver, bronze, or nothing) */}
          <div className={`${styles.hoverCardAvatarDecoration} ${getDecorationClass(user.equippedDecoration)}`}></div>
          {/* The user's avatar: shows image if it exists, or a placeholder */}
          {user.avatar ? (
            <img src={user.avatar} alt={user.username} className={styles.hoverCardAvatar} />
          ) : (
            <div className={styles.hoverCardAvatarPlaceholder}>
              {user.username.charAt(0).toUpperCase()}
            </div>
          )}
        </div>
      </div>
      {/* The main body of the card with user info */}
      <div className={styles.hoverCardBody}>
        <h3 className={styles.hoverCardName}>{user.name || user.username}</h3>
        <p className={styles.hoverCardUsername}>@{user.username}</p>
        <p className={styles.hoverCardBio}>{user.bio || "No bio available."}</p>
        
        {/* Statistics section */}
        <div className={styles.hoverCardStats}>
          <div className={styles.hoverCardStatItem}>
            <span className={styles.hoverCardStatLabel}>Learning Time</span>
            <span className={styles.hoverCardStatValue}>{formatTime(user.totalSeconds)}</span>
          </div>
          <div className={styles.hoverCardStatItem}>
            <span className={styles.hoverCardStatLabel}>Achievements</span>
            <span className={styles.hoverCardStatValue}>{user.badgeCount}</span>
          </div>
          <div className={styles.hoverCardStatItem}>
            <span className={styles.hoverCardStatLabel}>Joined</span>
            <span className={styles.hoverCardStatValue}>{user.joined}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- RankingPage Component (Main) ---

export default function RankingPage() {
  // State to store the calculated and sorted list of users
  const [rankings, setRankings] = useState([]);
  // State for the sidebar (open/closed)
  const [sidebarOpen, setSidebarOpen] = useState(false);
  // State for the background particles
  const [particles, setParticles] = useState([]);
  // Initialize Next.js router
  const router = useRouter();
;
  
  // Data for the sidebar menu
  const menuItemsPrimary = [
    { label: "Home", icon: "/icons/home.png", path: "/home" },
    { label: "Profile", icon: "/icons/user.png", path: "/profile" },
    { label: "Ranking", icon: "/icons/ranking.png", path: "/ranking" },
    { label: "Logout", icon: "/icons/logout.png", path: "/auth" },
  ];

  // This useEffect runs once on mount to create background particles
  useEffect(() => {
    const baseParticles = [ /* ... particle positions ... */ ];
    // Add random properties to each particle
    const randomizedParticles = baseParticles.map((p) => ({
      ...p,
      size: 5 + Math.random() * 15, // Random size
      duration: 15 + Math.random() * 15, // Random animation speed
      color: `rgba(0,0,0,${0.1 + Math.random() * 0.3})`, // Random opacity
    }));
    setParticles(randomizedParticles);
  }, []); // The empty array `[]` ensures this runs only once

  // This useEffect runs once on mount to calculate the rankings
  useEffect(() => {
    // 1. Load all necessary data from localStorage
    const timeData = JSON.parse(localStorage.getItem("learningTime") || "{}");
    const progressData = JSON.parse(localStorage.getItem("courseProgress") || "{}");
    const avatarData = JSON.parse(localStorage.getItem("userAvatars") || "{}");
    const decorationData = JSON.parse(localStorage.getItem("userDecorations") || "{}");

    // 2. Create the ranking array by mapping over the 'timeData'
    const rankingArray = Object.entries(timeData)
      .map(([username, totalSeconds]) => {
        // For each user, assemble a complete object with all their info
        const profile = USERS_DATA[username] || {};
        const userProgress = progressData[username] || {};
        const userDecorations = decorationData[username] || {};

        // Count how many badges the user has earned
        let badgeCount = 0;
        Object.keys(userProgress).forEach(key => {
          if (userProgress[key].badgeEarned) {
            badgeCount++;
          }
        });
        
        // Return the final object for this user
        return { 
          name: profile.name,
          username, 
          totalSeconds,
          avatar: avatarData[username] || null,
          equippedDecoration: userDecorations.equipped || null,
          bio: profile.bio || "",
          joined: profile.joined || "N/A",
          badgeCount: badgeCount,
        }
      })
      // 3. Sort the array by 'totalSeconds' in descending order (highest first)
      .sort((a, b) => b.totalSeconds - a.totalSeconds); 
    
    // 4. Save the final sorted array to the state
    setRankings(rankingArray); 
    
    // --- 5. Award/Remove Medals based on the new ranking ---
    
    // Create deep copies of the data to modify
    const newProgressData = JSON.parse(JSON.stringify(progressData));
    const newDecorationData = JSON.parse(JSON.stringify(decorationData));
    
    // Get the top 3 users and the order of medals
    const top3 = rankingArray.slice(0, 3);
    const medalOrder = [MEDAL_REWARDS.gold, MEDAL_REWARDS.silver, MEDAL_REWARDS.bronze];
    // Create a Set for fast lookup of who is in the top 3
    const rankedUsernames = new Set(top3.map(user => user.username));

    // First, loop through *all* users and *remove* medals if they are NOT in the top 3
    Object.keys(newProgressData).forEach(username => {
      // Create a default decoration object if one doesn't exist
      if (!newDecorationData[username]) newDecorationData[username] = { unlocked: [], equipped: null };
      
      // If this user is NOT in the top 3...
      if (!rankedUsernames.has(username)) {
        // ...loop through all possible medal rewards...
        Object.values(MEDAL_REWARDS).forEach(reward => {
          // ...and remove their medal badge from progress data
          if (newProgressData[username] && newProgressData[username][reward.badge.id]) {
            delete newProgressData[username][reward.badge.id];
          }
          // ...and remove their medal decoration from the unlocked list
          const decIndex = newDecorationData[username].unlocked.indexOf(reward.decoration.id);
          if (decIndex > -1) {
            newDecorationData[username].unlocked.splice(decIndex, 1);
          }
          // ...and unequip the decoration if they had it on
          if (newDecorationData[username].equipped === reward.decoration.id) {
            newDecorationData[username].equipped = null;
          }
        });
      }
    });

    // Second, loop through the *top 3* and *award* them their medals
    top3.forEach((user, index) => {
      const username = user.username;
      const reward = medalOrder[index]; // 0=gold, 1=silver, 2=bronze
      
      // Ensure their progress/decoration objects exist
      if (!newProgressData[username]) newProgressData[username] = {};
      if (!newDecorationData[username]) newDecorationData[username] = { unlocked: [], equipped: null };
      
      // Give them the badge
      newProgressData[username][reward.badge.id] = { badgeEarned: reward.badge.url };
      
      // Add the decoration to their "unlocked" list if it's not already there
      if (!newDecorationData[username].unlocked.includes(reward.decoration.id)) {
        newDecorationData[username].unlocked.push(reward.decoration.id);
      }   
      // Automatically equip the medal decoration
      newDecorationData[username].equipped = reward.decoration.id;
    });

    // 6. Save the updated progress and decoration data back to localStorage
    localStorage.setItem("courseProgress", JSON.stringify(newProgressData));
    localStorage.setItem("userDecorations", JSON.stringify(newDecorationData));
  }, []); // The empty array `[]` ensures this runs only once

  // Helper function to format seconds into "Xh Ym"
  const formatTime = (totalSeconds) => {
    if (!totalSeconds) totalSeconds = 0;
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    return `${hours}h ${minutes}m`;
  };

  // Helper function to get the CSS class for a decoration
  const getDecorationClass = (decorationId) => {
    if (decorationId === "gold_decoration") return styles.goldDecoration;
    if (decorationId === "silver_decoration") return styles.silverDecoration;
    if (decorationId === "bronze_decoration") return styles.bronzeDecoration;
    return ''; // No decoration
  };

  // This function is called when a user's name or avatar is clicked
  const handleViewProfile = (e, username) => {
    if (e) e.preventDefault(); // Stop any default link behavior
    // Store the username of the profile we want to view in localStorage
    localStorage.setItem("viewing_profile", username);
    // Navigate to the profile page
    router.push('/profile');
  };

  // --- Render the component's JSX (HTML) ---
  return (
    <PageTransition>
      {/* --- Sidebar --- */}
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

      {/* --- Background Particles --- */}
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

      {/* --- Main Content (Leaderboard) --- */}
      <div className={styles.container}>
        <h2 className={styles.title}>Leaderboard</h2>
        {/* Check if there are any rankings to display */}
        {rankings.length === 0 ? (
          <p>No learning records yet.</p>
        ) : (
          // If yes, render the table
          <table className={styles.rankingTable}>
            <thead>
              <tr>
                <th>Rank</th>
                <th>User</th>
                <th>Total Learning Time</th>
              </tr>
            </thead>
            <tbody>
              {/* Map over the sorted 'rankings' state */}
              {rankings.map((user, index) => (
                <tr key={user.username}>
                  {/* Rank Cell (1, 2, 3...) */}
                  <td className={styles.rankCell}>
                    <span className={`${styles.rank} ${
                      // Apply special CSS classes for the top 3
                      index === 0 ? styles.gold : 
                      index === 1 ? styles.silver : 
                      index === 2 ? styles.bronze : ''
                    }`}>
                      {index + 1}
                    </span>
                  </td>
                  
                  {/* User Cell (Avatar, Name, Hover Card) */}
                  <td className={styles.userCell}> 
                    {/* The avatar shown in the table row */}
                    <div className={styles.avatarWrapper} onClick={(e) => handleViewProfile(e, user.username)}>
                      <div className={`${styles.avatarDecoration} ${getDecorationClass(user.equippedDecoration)}`}></div>
                      {user.avatar ? (
                        <img src={user.avatar} alt={user.username} className={styles.userAvatar} />
                      ) : (
                        <div className={styles.userAvatarPlaceholder}>
                          {user.username.charAt(0).toUpperCase()}
                        </div>
                      )}
                    </div>
                    {/* The username text, also clickable */}
                    <span onClick={(e) => handleViewProfile(e, user.username)}>{user.username}</span>
                    
                    {/* The UserHoverCard component. It's hidden by default and shown by CSS on hover. */}
                    <UserHoverCard user={user} onViewProfile={handleViewProfile} />
                  </td>

                  {/* Time Cell (e.g., "5h 10m") */}
                  <td className={styles.timeCell}>{formatTime(user.totalSeconds)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </PageTransition>
  );
}