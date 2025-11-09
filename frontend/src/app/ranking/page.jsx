import RankPage from "./RankPage";
// import ClientGate from "../components/ClientGate";
// import RankingPage from "./RankPage";
//
// export default function Home() {
//   return (
//     <ClientGate>
//       <RankingPage />
//     </ClientGate>
//   );
// }

"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import PageTransition from "@/app/components/PageTransition";
import styles from "./ranking.module.css";
import { supabase } from "@/lib/supabaseClient"; // Supabaseをインポート

// --- 削除 ---
// USERS_DATA モックは不要になりました
// MEDAL_REWARDS モックは（一旦）不要になりました

// --- UserHoverCard Component (修正) ---
// propsで受け取る user オブジェクトがDBのものに変わります
function UserHoverCard({ user, onViewProfile }) {

    // Helper function to format total seconds into "Xh Ym"
    const formatTime = (totalSeconds) => {
        if (!totalSeconds) totalSeconds = 0;
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        return `${hours}h ${minutes}m`;
    };

    // joined (created_at) の日付をフォーマット
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

    // (デコレーションのロジックはDB移行に伴い別途実装が必要です)
    const getDecorationClass = (decorationId) => {
        // if (decorationId === "gold_decoration") return styles.goldDecoration;
        // ...
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
                    {/* DBの 'avatar_url' を参照 */}
                    {user.avatar_url ? (
                        <img src={user.avatar_url} alt={user.username} className={styles.hoverCardAvatar} />
                    ) : (
                        <div className={styles.hoverCardAvatarPlaceholder}>
                            {user.username.charAt(0).toUpperCase()}
                        </div>
                    )}
                </div>
            </div>
            <div className={styles.hoverCardBody}>
                {/* DBの 'name' または 'username' を参照 */}
                <h3 className={styles.hoverCardName}>{user.name || user.username}</h3>
                <p className={styles.hoverCardUsername}>@{user.username}</p>
                {/* DBの 'bio' を参照 */}
                <p className={styles.hoverCardBio}>{user.bio || "No bio available."}</p>

                <div className={styles.hoverCardStats}>
                    <div className={styles.hoverCardStatItem}>
                        <span className={styles.hoverCardStatLabel}>Learning Time</span>
                        {/* DBの 'learning_time' を参照 */}
                        <span className={styles.hoverCardStatValue}>{formatTime(user.learning_time)}</span>
                    </div>
                    <div className={styles.hoverCardStatItem}>
                        <span className={styles.hoverCardStatLabel}>Achievements</span>
                        {/* (バッジカウントもDBから取得するよう別途実装が必要です) */}
                        <span className={styles.hoverCardStatValue}>N/A</span>
                    </div>
                    <div className={styles.hoverCardStatItem}>
                        <span className={styles.hoverCardStatLabel}>Joined</span>
                        {/* DBの 'created_at' を参照 */}
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
    const [isLoading, setIsLoading] = useState(true); // ローディング状態を追加
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [particles, setParticles] = useState([]);
    const router = useRouter();

    // ... (menuItemsPrimary はそのまま) ...
    const menuItemsPrimary = [
        { label: "Home", icon: "/icons/home.png", path: "/home" },
        { label: "Profile", icon: "/icons/user.png", path: "/profile" },
        { label: "Ranking", icon: "/icons/ranking.png", path: "/ranking" },
        { label: "Logout", icon: "/icons/logout.png", path: "/auth" },
    ];

    // ... (背景パーティクルの useEffect はそのまま) ...
    useEffect(() => {
        // ...
    }, []);

    // ▼▼▼ ランキング取得の useEffect (全面的に書き換え) ▼▼▼
    // 以前のlocalStorageから計算するロジックはすべて削除します
    useEffect(() => {
        const fetchRankings = async () => {
            setIsLoading(true);

            // ステップ3で作成した 'user_rankings' ビューからデータを取得
            const { data, error } = await supabase
                .from('user_rankings') // 'user_rankings' ビューを指定
                .select('*')          // すべてのカラム (rank, username, learning_time など)
                .order('rank', { ascending: true }); // rank 1 が最初に来るように並び替え

            if (error) {
                console.error("Error fetching rankings:", error);
                setRankings([]);
            } else {
                // 取得したデータをそのまま state にセット
                setRankings(data);
            }
            setIsLoading(false);
        };

        fetchRankings();
    }, []); // ページロード時に1回だけ実行
    // ▲▲▲ ランキング取得の useEffect (全面的に書き換え) ▲▲▲


    // ... (formatTime, getDecorationClass は UserHoverCard 内に移動) ...
    // formatTime はテーブルセル用にも残します
    const formatTime = (totalSeconds) => {
        if (!totalSeconds) totalSeconds = 0;
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        return `${hours}h ${minutes}m`;
    };

    const getDecorationClass = (decorationId) => {
        // (このロジックはDB移行に伴い別途実装が必要です)
        // if (decorationId === "gold_decoration") return styles.goldDecoration;
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
            {/* --- Sidebar (変更なし) --- */}
            <div className={`${styles.sidebar} ${sidebarOpen ? styles.active : ""}`}>
                {/* ... (サイドバーの中身は省略) ... */}
            </div>

            {/* --- Background Particles (変更なし) --- */}
            <div className={styles.particles}>
                {/* ... (パーティクルの中身は省略) ... */}
            </div>

            {/* --- Main Content (Leaderboard) (修正) --- */}
            <div className={styles.container}>
                <h2 className={styles.title}>Leaderboard</h2>
                {/* ローディング表示を追加 */}
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
                        {/* 'index' は使わず、DBから取得した 'user' を使う */}
                        {rankings.map((user) => (
                            <tr key={user.id}> {/* keyを 'username' から 'id' (DBの主キー) に変更 */}

                                {/* Rank Cell (DBの 'rank' を使用) */}
                                <td className={styles.rankCell}>
                    <span className={`${styles.rank} ${
                        user.rank === 1 ? styles.gold :
                            user.rank === 2 ? styles.silver :
                                user.rank === 3 ? styles.bronze : ''
                    }`}>
                      {user.rank} {/* 'index + 1' の代わりに 'user.rank' を表示 */}
                    </span>
                                </td>

                                {/* User Cell (DBの 'avatar_url' と 'username' を使用) */}
                                <td className={styles.userCell}>
                                    <div className={styles.avatarWrapper} onClick={(e) => handleViewProfile(e, user.username)}>
                                        {/* (デコレーションのロジックは別途実装) */}
                                        <div className={`${styles.avatarDecoration} ${getDecorationClass(null)}`}></div>
                                        {/* 'user.avatar' -> 'user.avatar_url' */}
                                        {user.avatar_url ? (
                                            <img src={user.avatar_url} alt={user.username} className={styles.userAvatar} />
                                        ) : (
                                            <div className={styles.userAvatarPlaceholder}>
                                                {user.username.charAt(0).toUpperCase()}
                                            </div>
                                        )}
                                    </div>
                                    <span onClick={(e) => handleViewProfile(e, user.username)}>{user.username}</span>

                                    {/* UserHoverCard にDBの 'user' オブジェクトを渡す */}
                                    <UserHoverCard user={user} onViewProfile={handleViewProfile} />
                                </td>

                                {/* Time Cell (DBの 'learning_time' を使用) */}
                                <td className={styles.timeCell}>
                                    {/* 'user.totalSeconds' -> 'user.learning_time' */}
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
