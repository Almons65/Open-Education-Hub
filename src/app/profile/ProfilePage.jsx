"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import PageTransition from "../components/PageTransition";
import styles from "./profile.module.css";

// Define courses here so ProfilePage knows the names
function Dropdown({ label, icon, children, width = "410px", onOpen }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function onDocClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  const toggleDropdown = () => {
    const newOpen = !open;
    setOpen(newOpen);
    if (newOpen && onOpen) onOpen();
  };

  return (
    <div className={styles.dropdown} ref={ref} style={{ width }}>
      <button
        className={styles.dropBtn}
        onClick={() => setOpen((s) => !s)}
        aria-expanded={open}
        type="button"
      >
        <div className={styles.dropBtnLeft}>
          {icon && <img src={icon} alt="" className={styles.dropIcon} />}
          <span className={styles.dropLabel}>{label}</span>
        </div>
        <div className={`${styles.arrow} ${open ? styles.arrowOpen : ""}`} aria-hidden="true">
          ▶
        </div>
      </button>
      {open && <div className={styles.dropContent}>{children}</div>}
    </div>
  );
}

export default function ProfilePage() {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [particles, setParticles] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const fileInputRef = useRef(null);
  const [favorites, setFavorites] = useState([]);
  const [history, setHistory] = useState([]);
  const [badges, setBadges] = useState([]);

  useEffect(() => {
    setFavorites(JSON.parse(localStorage.getItem("favorites") || "[]"));
    setHistory(JSON.parse(localStorage.getItem("history") || "[]"));
    setBadges(JSON.parse(localStorage.getItem("badges") || "[]"));
  }, []);

  // Listen for updates from other pages
  useEffect(() => {
    const handleFavoritesUpdated = () => {
      setFavorites(JSON.parse(localStorage.getItem("favorites") || "[]"));
    };
    const handleHistoryUpdated = () => {
      setHistory(JSON.parse(localStorage.getItem("history") || "[]"));
    };
        const handleBadgesUpdated = () => {
      setBadges(JSON.parse(localStorage.getItem("badges") || "[]"));
    };

    window.addEventListener("favoritesUpdated", handleFavoritesUpdated);
    window.addEventListener("historyUpdated", handleHistoryUpdated);
    window.addEventListener("badgesUpdated", handleBadgesUpdated);
    return () => {
      window.removeEventListener("favoritesUpdated", handleFavoritesUpdated);
      window.removeEventListener("historyUpdated", handleHistoryUpdated);
      window.removeEventListener("badgesUpdated", handleBadgesUpdated);
    };
  }, []);

 const courses = [
  { id: "AAA001", name: "Introduction to Programming" },
  { id: "AAA002", name: "Calculus 1" },
  { id: "BAA001", name: "Electromagnetic Induction" },
  { id: "BBA001", name: "Introduction to Deep Learning" },
  { id: "BBA002", name: "Ecology" },
  { id: "CAA100", name: "Electrodynamics" },
];

 
    useEffect(() => {
    const baseParticles = [
      { top: "10%", left: "20%" },
      { top: "30%", left: "70%" },
      { top: "50%", left: "40%" },
      { top: "70%", left: "15%" },
      { top: "80%", left: "80%" },
      { top: "20%", left: "50%" },
    ];
    const randomizedParticles = baseParticles.map((p) => ({
      ...p,
      size: 5 + Math.random() * 15,
      duration: 15 + Math.random() * 15,
      color: `rgba(0,0,0,${0.1 + Math.random() * 0.3})`,
    }));
    setParticles(randomizedParticles);
  }, []);

  // User info
  const [user, setUser] = useState({
    name: "Nickname",
    username: "Username",
    joined: "Jan 1, 2024",
    bio: "A passionate learner and explorer of knowledge.",
    email: "john.example@gmail.com",
  });
  const [formData, setFormData] = useState(user);

  const handleEditClick = () => { setFormData(user); setIsEditing(true); };
  const handleCancelClick = () => setIsEditing(false);
  const handleSaveClick = () => { setUser({ ...user, ...formData }); setIsEditing(false); };
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setAvatar(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const menuItemsPrimary = [
    { label: "Home", icon: "/icons/home.png", path: "/home" },
    { label: "Profile", icon: "/icons/user.png", path: "/profile" },
    { label: "Ranking", icon: "/icons/ranking.png", path: "/ranking" },
    { label: "Logout", icon: "/icons/logout.png", path: "/auth" },
  ];

  return (
    <PageTransition>
      <div className={styles.profileContainer}>
        {/* Sidebar */}
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
          <div className={styles.particles}>
            {particles.map((p, i) => (
              <div
                key={i}
                className={styles.particle}
                style={{
                  top: p.top,
                  left: p.left,
                  width: `${p.size}px`,
                  height: `${p.size}px`,
                  animationDuration: `${p.duration}s`,
                  backgroundColor: p.color,
                }}
              />
            ))}
          </div>

          <div className={styles.profileHeader}>
            <span className={styles.headerLabel}>USER CENTRE</span>

            {/* Editable avatar */}
            <div className={styles.avatarWrapper}>
              {avatar ? (
                <img src={avatar} alt="Profile Avatar" className={styles.profileAvatarPlaceholder} />
              ) : (
                <div className={styles.profileAvatarPlaceholder}>AVATAR</div>
              )}
              <div
                className={styles.avatarOverlay}
                onClick={() => fileInputRef.current?.click()}
              >
                Change your avatar
              </div>
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleAvatarChange}
                style={{ display: "none" }}
              />
            </div>
          </div>

          {/* User info */}
          {!isEditing ? (
            <>
              <h2 className={styles.profileName}>{user.name}</h2>
              <p className={styles.profileUsername}>{user.username}</p>
              <p className={styles.membersince}>
                <strong>Member Since</strong><br />
                {user.joined}
              </p>
              <p className={styles.profileBio}>{user.bio}</p>
              <img src="/icons/email-icon.png" alt="email icon" className={styles.emailIcon} />
              <p className={styles.profileEmail}>{user.email}</p>
              <div className={styles.profileActions}>
                <button className={styles.editBtn} onClick={handleEditClick}>Edit Profile</button>
              </div>
            </>
          ) : (
            <>
              <div className={styles.editForm}>
                <label><strong>Name</strong>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} />
                </label>
                <label><strong>Bio</strong>
                  <textarea name="bio" value={formData.bio} onChange={handleChange} />
                </label>
                <label><strong>Email</strong>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} />
                </label>
              </div>
              <div className={styles.profileActions}>
                <button className={styles.saveBtn} onClick={handleSaveClick}>Save</button>
                <button className={styles.cancelBtn} onClick={handleCancelClick}>Cancel</button>
              </div>
            </>
          )}

            
          <div className={styles.achievementContainer}>
  <h3 className={styles.achievementTitle}>Achievements</h3>
  {favorites.length === 0 && history.length === 0 ? (
    <p>No achievements yet</p>
  ) : (
    <div className={styles.badgeGrid}>
      {/* Sample badges (replace with actual badge images) */}
      <div className={styles.badgeCard}>
        <img src="/badges/Cal_Badge.png" alt="Badge 1" className={styles.badgeImage} />
        <p className={styles.badgeLabel}>Mathematical Master</p>
      </div>
      <div className={styles.badgeCard}>
        <img src="/badges/ITDL_Badge.png" alt="Badge 2" className={styles.badgeImage} />
        <p className={styles.badgeLabel}>Ai Technician</p>
      </div>
      {/* Add more badges dynamically if needed */}
    </div>
  )}
</div>

 <div className={styles.dropdownGroup}>
            <Dropdown label="FAVORITE" icon="/icons/heart.png">
              {favorites.length > 0 ? (
                favorites.map(id => {
                  const course = courses.find(c => c.id === id);
                  return (
                    <a
                      key={id}
                      className={styles.dropItem}
                      onClick={() => router.push(`/courses/${id}`)}
                    >
                      {course ? course.name : id}
                    </a>
                  );
                })
              ) : (
                <span className={styles.dropItem}>No favorites yet</span>
              )}
            </Dropdown>

            <Dropdown label="HISTORY" icon="/icons/history.png" onOpen={() => {
    const updated = JSON.parse(localStorage.getItem("history") || "[]");
    setHistory(updated);
  }}>
              {history.length > 0 ? (
                history.map(id => {
                  const course = courses.find(c => c.id === id);
                  return (
                    <a
                      key={id}
                      className={styles.dropItem}
                      onClick={() => router.push(`/courses/${id}`)}
                    >
                      {course ? course.name : id}
                    </a>
                  );
                })
              ) : (
                <span className={styles.dropItem}>No recent courses</span>
              )}
            </Dropdown>
          </div>
        </main>
      </div>
    </PageTransition>
  );
}