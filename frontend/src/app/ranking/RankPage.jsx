"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import PageTransition from "@/app/components/PageTransition";
import styles from "./ranking.module.css";
import { supabase } from "@/lib/supabaseClient"; // Supabaseをインポート

// --- UserHoverCard Component (修正) ---
// propsで受け取る user オブジェクトがDBのものに変わります
function UserHoverCard({ user, onViewProfile }) {

  const formatTime = (totalSeconds) => {
    if (!totalSeconds) totalSeconds = 0;
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    return `${hours}h ${minutes}m`;
  };

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

  const getDecorationClass = (decorationId) => {
    // (デコレーションのロジックはDB移行に伴い別途実装が必要です)
    return '';
  };

  return (
      <div
          className={styles.hoverCard}
          onClick={(e) => onViewProfile(e, user.username)}
      >
        <div className={styles.hoverCardHeaderBackground}></div>
        <div className={styles.hoverCardAvatarSection}>
          <div className={styles.hoverCardAvatarWrapper}>
            <div className={`${styles.hoverCardAvatarDecoration} ${getDecorationClass(null)}`}></div>
            {user.avatar_url ? (
                <img src={user.avatar_url} alt={user.name} className={styles.hoverCardAvatar} />
            ) : (
                <div className={styles.hoverCardAvatarPlaceholder}>
                  {user.name.charAt(0).toUpperCase()}
                </div>
            )}
          </div>
        </div>
        <div className={styles.hoverCardBody}>
          <h3 className={styles.hoverCardName}>{user.name || user.username}</h3>
          <p className={styles.hoverCardUsername}>@{user.username}</p>
          <p className={styles.hoverCardBio}>{user.bio || "No bio available."}</p>

          <div className={styles.hoverCardStats}>
            <div className={styles.hoverCardStatItem}>
              <span className={styles.hoverCardStatLabel}>Learning Time</span>
              <span className={styles.hoverCardStatValue}>{formatTime(user.learning_time)}</span>
            </div>
            <div className={styles.hoverCardStatItem}>
              <span className={styles.hoverCardStatLabel}>Achievements</span>
              <span className={styles.hoverCardStatValue}>N/A</span>
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
  const [rankings, setRankings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [particles, setParticles] = useState([]);
  const router = useRouter();

  const menuItemsPrimary = [
    { label: "Home", icon: "/icons/home.png", path: "/home" },
    { label: "Profile", icon: "/icons/user.png", path: "/profile" },
    { label: "Ranking", icon: "/icons/ranking.png", path: "/ranking" },
    { label: "Logout", icon: "/icons/logout.png", path: "/auth" },
  ];

  // 背景パーティクルの useEffect
  useEffect(() => {
    const baseParticles = [ /* ... particle positions ... */ ]; // あなたの元のパーティクルデータをここに追加
    const randomizedParticles = baseParticles.map((p) => ({
      ...p,
      size: 5 + Math.random() * 15,
      duration: 15 + Math.random() * 15,
      color: `rgba(0,0,0,${0.1 + Math.random() * 0.3})`,
    }));
    setParticles(randomizedParticles);
  }, []);

  // ランキング取得の useEffect
  useEffect(() => {
    const fetchRankings = async () => {
      setIsLoading(true);

      const { data, error } = await supabase
          .from('user_rankings')
          .select('*')
          .order('rank', { ascending: true });

      if (error) {
        console.error("Error fetching rankings:", error);
        setRankings([]);
      } else {
        setRankings(data);
      }
      setIsLoading(false);
    };

    fetchRankings();
  }, []);

  const formatTime = (totalSeconds) => {
    if (!totalSeconds) totalSeconds = 0;
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    return `${hours}h ${minutes}m`;
  };

  const getDecorationClass = (decorationId) => {
    // (このロジックはDB移行に伴い別途実装が必要です)
    if (decorationId === "gold_decoration") return styles.goldDecoration;
    if (decorationId === "silver_decoration") return styles.silverDecoration;
    if (decorationId === "bronze_decoration") return styles.bronzeDecoration;
    return '';
  };

  const handleViewProfile = (e, username) => {
    if (e) e.preventDefault();
    localStorage.setItem("viewing_profile", username);
    router.push('/profile');
  };

  // --- Render the component's JSX (HTML) ---

  return (
      <PageTransition>
        {/* --- Sidebar (中身を元に戻しました) --- */}
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
        <div className={`${styles.container} ${sidebarOpen ? styles.sidebarActive : ""}`}>
          <h2 className={styles.title}>Leaderboard</h2>
          {isLoading ? (
              <p>Loading rankings...</p>
          ) : rankings.length === 0 ? (
              <p>No learning records yet.</p>
          ) : (
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

                      {/* Rank Cell */}
                      <td className={styles.rankCell}>
                    <span className={`${styles.rank} ${
                        user.rank === 1 ? styles.gold :
                            user.rank === 2 ? styles.silver :
                                user.rank === 3 ? styles.bronze : ''
                    }`}>
                      {user.rank}
                    </span>
                      </td>

                      {/* User Cell */}
                      <td className={styles.userCell}>
                        <div className={styles.avatarWrapper} onClick={(e) => handleViewProfile(e, user.username)}>
                          <div className={`${styles.avatarDecoration} ${getDecorationClass(null)}`}></div>
                          {user.avatar_url ? (
                              <img src={user.avatar_url} alt={user.username} className={styles.userAvatar} />
                          ) : (
                              <div className={styles.userAvatarPlaceholder}>
                                {user.username.charAt(0).toUpperCase()}
                              </div>
                          )}
                        </div>
                        <span onClick={(e) => handleViewProfile(e, user.username)}>{user.name}</span>

                        <UserHoverCard user={user} onViewProfile={handleViewProfile} />
                      </td>

                      {/* Time Cell */}
                      <td className={styles.timeCell}>
                        {formatTime(user.learning_time)}
                      </td>
                    </tr>
                ))}
                </tbody>
              </table>
          )}
        </div>
      </PageTransition>
  );
}
