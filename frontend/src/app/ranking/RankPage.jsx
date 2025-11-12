"use client";

// Import React hooks for state, side effects, and refs
import { useState, useEffect, useRef } from "react";
// Import Next.js hook for navigation
import { useRouter } from "next/navigation";
// Import custom components
import PageTransition from "@/app/components/PageTransition";
// Import CSS module for styling
import styles from "./ranking.module.css";
// Import the Supabase client
import { supabase } from "@/lib/supabaseClient";

// --- UserHoverCard Component ---
// A pop-up card component that shows detailed user info on hover.
// The 'user' prop is now data from the 'user_rankings' Supabase view.
function UserHoverCard({ user, onViewProfile, achievementCount }) {

  // Helper function to format total seconds into "Xh Ym" string
  const formatTime = (totalSeconds) => {
    if (!totalSeconds) totalSeconds = 0;
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    return `${hours}h ${minutes}m`;
  };

  // Helper function to format a date string (e.g., "Nov 12, 2025")
  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      });
    } catch (e) {
      return "N/A";
    }
  };

  // Placeholder function to get the CSS class for an avatar decoration
  const getDecorationClass = (decorationId) => {
    if (decorationId === "gold_decoration") return styles.goldDecoration;
    if (decorationId === "silver_decoration") return styles.silverDecoration;
    if (decorationId === "bronze_decoration") return styles.bronzeDecoration;
    return '';
  };

  return (
      // Main card container, triggers profile view on click
      <div
          className={styles.hoverCard}
          onClick={(e) => onViewProfile(e, user.username)}
      >
        {/* Decorative header background */}
        <div className={styles.hoverCardHeaderBackground}></div>
        {/* Section for the user's avatar */}
        <div className={styles.hoverCardAvatarSection}>
          <div className={styles.hoverCardAvatarWrapper}>
            {/* Avatar decoration (e.g., wreath) */}
            <div className={`${styles.hoverCardAvatarDecoration} ${getDecorationClass(
                user.rank === 1 ? "gold_decoration" :
                    user.rank === 2 ? "silver_decoration" :
                        user.rank === 3 ? "bronze_decoration" : null
            )}`}></div>
            {/* Conditionally render the user's avatar image */}
            {user.avatar_url ? (
                <img src={user.avatar_url} alt={user.name} className={styles.hoverCardAvatar} />
            ) : (
                // Fallback placeholder (first initial) if no avatar
                <div className={styles.hoverCardAvatarPlaceholder}>
                  {user.name.charAt(0).toUpperCase()}
                </div>
            )}
          </div>
        </div>
        {/* Main content section with user details */}
        <div className={styles.hoverCardBody}>
          <h3 className={styles.hoverCardName}>{user.name || user.username}</h3>
          <p className={styles.hoverCardUsername}>@{user.username}</p>
          <p className={styles.hoverCardBio}>{user.bio || "No bio available."}</p>

          {/* Stats section (Time, Achievements, Joined) */}
          <div className={styles.hoverCardStats}>
            <div className={styles.hoverCardStatItem}>
              <span className={styles.hoverCardStatLabel}>Learning Time</span>
              <span className={styles.hoverCardStatValue}>{formatTime(user.learning_time)}</span>
            </div>
            <div className={styles.hoverCardStatItem}>
              <span className={styles.hoverCardStatLabel}>Achievements</span>
              {/* (Achievements stat is currently hardcoded) */}
              <span className={styles.hoverCardStatValue}>{achievementCount}</span>
            </div>
            <div className={styles.hoverCardStatItem}>
              <span className={styles.hoverCardStatLabel}>Joined</span>
              <span className={styles.hoverCardStatValue}>{formatDate(user.created_at)}</span>
            </div>
          </div>
        </div>
      </div>
  );
}

// --- RankingPage Component (Main) ---

export default function RankingPage() {
  // State to store the array of user ranking data
  const [rankings, setRankings] = useState([]);
  const [achievementCounts, setAchievementCounts] = useState({});
  // State to track loading status
  const [isLoading, setIsLoading] = useState(true);
  // State for sidebar toggle
  const [sidebarOpen, setSidebarOpen] = useState(false);
  // State for background particle animation
  const [particles, setParticles] = useState([]);
  // Next.js router for navigation
  const router = useRouter();

  // Navigation links for the sidebar
  const menuItemsPrimary = [
    { label: "Home", icon: "/icons/home.png", path: "/home" },
    { label: "Profile", icon: "/icons/user.png", path: "/profile" },
    { label: "Ranking", icon: "/icons/ranking.png", path: "/ranking" },
    { label: "Logout", icon: "/icons/logout.png", path: "/auth" },
  ];

  // Effect to create randomized background particles on mount
  useEffect(() => {
    const baseParticles = [ { top: "10%", left: "20%" }, { top: "30%", left: "70%" }, { top: "50%", left: "40%" }, { top: "70%", left: "15%" }, { top: "80%", left: "80%" }, { top: "20%", left: "50%" } ]; // Your particle data
    const randomizedParticles = baseParticles.map((p) => ({
      ...p,
      size: 5 + Math.random() * 15,
      duration: 15 + Math.random() * 15,
      color: `rgba(0,0,0,${0.1 + Math.random() * 0.3})`,
    }));
    setParticles(randomizedParticles);
  }, []); // Empty array ensures this runs only once

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const [rankingsResult, countsResult] = await Promise.all([
          supabase
              .from('user_rankings')
              .select('*')
              .order('rank', { ascending: true }),

          supabase.rpc('count_achievements_by_user')
        ]);

        if (rankingsResult.error) {
          console.error("Error fetching rankings:", rankingsResult.error);
          setRankings([]);
        } else {
          setRankings(rankingsResult.data);
        }

        if (countsResult.error) {
          console.error("Error fetching achievement counts:", countsResult.error);
          setAchievementCounts({});
        } else {

          const countsMap = {};
          for (const item of countsResult.data) {
            countsMap[item.user_id_col] = item.count_col;
          }
          setAchievementCounts(countsMap);
        }

      } catch (err) {
        console.error("Error fetching page data:", err);
        setRankings([]);
        setAchievementCounts({});
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // Helper function to format seconds to "Xh Ym"
  const formatTime = (totalSeconds) => {
    if (!totalSeconds) totalSeconds = 0;
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    return `${hours}h ${minutes}m`;
  };

  // Placeholder for avatar decoration styles
  const getDecorationClass = (decorationId) => {
    // (This logic needs to be implemented based on the new DB structure)
    if (decorationId === "gold_decoration") return styles.goldDecoration;
    if (decorationId === "silver_decoration") return styles.silverDecoration;
    if (decorationId === "bronze_decoration") return styles.bronzeDecoration;
    return '';
  };

  // Handles clicking on a user's name or avatar
  const handleViewProfile = (e, username) => {

    if (e) e.preventDefault(); // Prevent default link/button behavior

    router.push(`/profile?view=${username}`);
  };

  // --- Render the component's JSX (HTML) ---

  return (
      <PageTransition>
        {/* --- Standard Sidebar --- */}
        <div className={`${styles.sidebar} ${sidebarOpen ? styles.active : ""}`}>
          <header>
            <div className={styles.imageText}>
              <img src="/icons/OEH_logo.png" alt="OEH Logo" />
              <span className={styles.main}>Open Education Hub</span>
            </div>
            {/* Hamburger toggle button */}
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
        {/* Apply class to shift content when sidebar is open */}
        <div className={`${styles.container} ${sidebarOpen ? styles.sidebarActive : ""}`}>
          <h2 className={styles.title}>Leaderboard</h2>
          {/* Show loading message */}
          {isLoading ? (
              <p>Loading rankings...</p>
          ) : rankings.length === 0 ? (
              // Show message if no rankings are found
              <p>No learning records yet.</p>
          ) : (
              // The main leaderboard table
              <table className={styles.rankingTable}>
                <thead>
                <tr>
                  <th>Rank</th>
                  <th>User</th>
                  <th>Total Learning Time</th>
                </tr>
                </thead>
                <tbody>
                {rankings.map((user) => (
                    <tr key={user.id}>
                      <td className={styles.rankCell}>
        <span
            className={`${styles.rank} ${
                user.rank === 1
                    ? styles.gold
                    : user.rank === 2
                        ? styles.silver
                        : user.rank === 3
                            ? styles.bronze
                            : ""
            }`}
        >
          {user.rank}
        </span>
                      </td>

                      <td className={styles.userCell}>
                        <div
                            className={styles.avatarWrapper}
                            onClick={(e) => handleViewProfile(e, user.username)}
                        >
                          <div
                              className={`${styles.avatarDecoration} ${getDecorationClass(
                                  user.rank === 1
                                      ? "gold_decoration"
                                      : user.rank === 2
                                          ? "silver_decoration"
                                          : user.rank === 3
                                              ? "bronze_decoration"
                                              : null
                              )}`}
                          ></div>
                          {user.avatar_url ? (
                              <img
                                  src={user.avatar_url}
                                  alt={user.username}
                                  className={styles.userAvatar}
                              />
                          ) : (
                              <div className={styles.userAvatarPlaceholder}>
                                {user.username.charAt(0).toUpperCase()}
                              </div>
                          )}
                        </div>
                        <span onClick={(e) => handleViewProfile(e, user.username)}>
          {user.name}
        </span>

                        <UserHoverCard
                            user={user}
                            onViewProfile={handleViewProfile}
                            achievementCount={achievementCounts[user.id] || 0}
                        />
                      </td>

                      <td className={styles.timeCell}>{formatTime(user.learning_time)}</td>
                    </tr>
                ))}
                </tbody>
              </table>
          )}
        </div>
      </PageTransition>
  );
}