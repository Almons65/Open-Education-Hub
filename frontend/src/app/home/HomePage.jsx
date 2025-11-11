"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import PageTransition from "../components/PageTransition";
import styles from "./home.module.css";
import { supabase } from "@/lib/supabaseClient";

//const CURRENT_USERNAME = "User1"; 
//const CURRENT_USERNAME = "User2";
//const CURRENT_USERNAME = "User3";
//const CURRENT_USERNAME = "User4";

export default function HomePage() {
// State to track if the sidebar is open or closed (true/false)
  const [sidebarOpen, setSidebarOpen] = useState(false);
  // State to store the properties of the background particles
  const [particles, setParticles] = useState([]);
  // Initialize the router hook to be able to redirect the user
  const router = useRouter();

  // An array of objects defining the primary sidebar menu items
  const menuItemsPrimary = [
    { label: "Home", icon: "/icons/home.png", path: "/home" },
    { label: "Profile", icon: "/icons/user.png", path: "/profile" },
    { label: "Ranking", icon: "/icons/ranking.png", path: "/ranking" },
    { label: "Logout", icon: "/icons/logout.png", path: "/auth" },
  ];

  // --- Filter States ---
  // State for the text in the search bar
  const [search, setSearch] = useState("");
  // State for the selected difficulty filter (e.g., "Beginner")
  const [difficulty, setDifficulty] = useState("");
  // State to track which subject checkboxes are checked
  const [subjects, setSubjects] = useState({
    Python: false,
    Ai: false,
    Physics: false,
    Biology: false,
    Calculus: false,
  });



  // Hardcoded array of available courses
  // const courses = [
  //   { id: "AAA001", name: "Introduction to Programming", difficulty: "Beginner", subjects: ["Python"], totalLectures: 3, badge: "/badges/ITP_badge.png" },
  //   { id: "AAA002", name: "Calculus 1", difficulty: "Intermediate", subjects: ["Calculus"], totalLectures: 3, badge: "/badges/Cal_Badge.png" },
  //   { id: "BAA001", name: "Electromagnetic Induction", difficulty: "Intermediate", subjects: ["Physics"], totalLectures: 3, badge: "/badges/Electromag_Badge.png" },
  //   { id: "BBA001", name: "Introduction to Deep Learning", difficulty: "Advanced", subjects: ["Ai"], totalLectures: 3, badge: "/badges/ITDL_Badge.png" },
  //   { id: "BBA002", name: "Ecology", difficulty: "Intermediate", subjects: ["Biology"], totalLectures: 3, badge: "/badges/Eco_Badge.png" },
  //   { id: "CAA100", name: "Electrodynamics", difficulty: "Advanced", subjects: ["Physics"], totalLectures: 3, badge: "/badges/ElectroDyn_Badge.png" },
  // ];


  // State to hold the progress for *only the current user*
  // e.g., { "AAA001": { completedLectures: [1, 2] }, "AAA002": ... }

  // const [courseProgress, setCourseProgress] = useState({});

  // This useEffect runs once when the component first mounts
  // useEffect(() => {
  //   // Get the *entire* progress object from localStorage (for all users)
  //   const allProgress = JSON.parse(localStorage.getItem("courseProgress")) || {};
  //   // Find *this specific user's* progress within that object
  //   const userProgress = allProgress[CURRENT_USERNAME] || {};
  //   // Set the state with only this user's progress
  //   setCourseProgress(userProgress);
  // }, []); // The empty array `[]` ensures this runs only once on mount
  //
  // // This useEffect sets up listeners to keep progress in sync across tabs
  // useEffect(() => {
  //   // This function runs when localStorage changes or the tab is re-focused
  //   const handleStorageChange = () => {
  //     // Re-fetch the entire progress object
  //     const allProgress = JSON.parse(localStorage.getItem("courseProgress")) || {};
  //     // Get *this user's* specific progress
  //     const userProgress = allProgress[CURRENT_USERNAME] || {};
  //     // Update the state
  //     setCourseProgress(userProgress);
  //   };
  //
  //   // Listen for changes made in other browser tabs
  //   window.addEventListener('storage', handleStorageChange);
  //   // Also update when the user clicks back to this tab
  //   window.addEventListener('focus', handleStorageChange);
  //
  //   // This is the "cleanup function" that runs when the component unmounts
  //   return () => {
  //     // Remove the listeners to prevent memory leaks
  //     window.removeEventListener('storage', handleStorageChange);
  //     window.removeEventListener('focus', handleStorageChange);
  //   };
  // }, []); // The empty array `[]` ensures this runs only once

  const [courses, setCourses] = useState([]);
  const [lectures, setLectures] = useState([]);
  const [profileProgress, setProfileProgress] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null);


  useEffect(() => {
    const fetchUser = async () => {
      // 1. Supabaseセッションから認証ユーザーを取得
      const { data: { user: authUser }, error: authError } = await supabase.auth.getUser();

      if (authError || !authUser) {
        router.push('/auth'); // ログインしていなければAuthページへ
        return;
      }

      // 2. 'users' テーブルから本物のプロフィール（username）を取得
      const { data: profileData, error: profileError } = await supabase
          .from('users')
          .select('username')
          .eq('id', authUser.id)
          .single();

      if (profileError || !profileData) {
        console.error("HomePage: CRITICAL: Could not find user profile for ID:", authUser.id, profileError);
        router.push('/auth'); // プロファイルがなければAuthページへ
        return;
      }

      // 3. 認証情報とプロフィール情報を結合
      const completeUser = {
        ...authUser,
        profile: profileData
      };
      setLoggedInUser(completeUser);
    };
    fetchUser();
  }, [router]);

  useEffect(() => {
    // 1. 全コースを取得
    const fetchCourses = async () => {
      try {
        const response = await fetch('http://localhost:8000/courses');
        if (response.ok) setCourses(await response.json());
      } catch (error) { console.error("Failed to fetch courses:", error); }
    };

    // 2. 全レクチャーを取得
    const fetchAllLectures = async () => {
      try {
        const response = await fetch('http://localhost:8000/lectures');
        if (response.ok) setLectures(await response.json());
      } catch (error) { console.error("Failed to fetch lectures:", error); }
    };

    fetchCourses();
    fetchAllLectures();
  }, []); // 空の配列で、マウント時に1回だけ実行

  // ユーザーの進捗を取得する useEffect
  useEffect(() => {
    // ★ ログインユーザーの情報が読み込まれるまで待つ
    if (!loggedInUser) return;

    const fetchProfileData = async () => {
      try {
        // ★ 本物のユーザー名 (loggedInUser.profile.username) を使う
        const username = loggedInUser.profile.username;
        const response = await fetch(`http://localhost:8000/profile/${username}`);

        if (!response.ok) throw new Error(`Profile not found: ${username}`);
        const data = await response.json();
        setProfileProgress(data.progress || []); // 完了済み lecture_id の配列
      } catch (error) {
        console.error("Failed to fetch profile progress:", error);
      }
    };
    fetchProfileData();
  }, [loggedInUser]);


  const calculateProgress = (courseId) => {
    // 1. 全講義 (lectures state) から、このコースの講義をフィルタリング
    const lecturesInThisCourse = lectures.filter(l => l.course_id === courseId);

    // 2. このコースの全体の講義数を取得
    const totalLectures = lecturesInThisCourse.length;
    if (totalLectures === 0) return 0; // 0除算を防止

    // 3. 完了した講義 (profileProgress state) のうち、このコースの講義が何件あるかカウント
    let completedCount = 0;
    const completedLectureIds = new Set(profileProgress); // APIから取得した進捗配列

    for (const lecture of lecturesInThisCourse) {
      // 4. 'lecture.id' が完了済み Set に含まれているかチェック
      // (lectures テーブルの主キーが 'id' のため)
      if (completedLectureIds.has(lecture.id)) {
        completedCount++;
      }
    }

    // 5. (完了数 / 全体数) * 100
    return (completedCount / totalLectures) * 100;
  };

  // // A function to calculate the completion percentage for a single course
  // const calculateProgress = (courseId) => {
  //   // Find the course details (like totalLectures)
  //   const course = courses.find((course) => course.id === courseId);
  //   const totalLectures = course ? course.totalLectures : 0;
  //   // Prevent division by zero if course data is missing
  //   if (totalLectures === 0) return 0;
  //
  //   // Get the list of completed lectures for this course *from the state*
  //   const completedLectures = courseProgress[courseId]?.completedLectures || [];
  //
  //   // Calculate the percentage
  //   const progress = (completedLectures.length / totalLectures) * 100;
  //   return progress;
  // };

  // This useEffect runs once on mount to create the animated background particles
  useEffect(() => {
    // A base set of positions for the particles
    const baseParticles = [
      { top: "10%", left: "20%" },
      { top: "30%", left: "70%" },
      { top: "50%", left: "40%" },
      { top: "70%", left: "15%" },
      { top: "80%", left: "80%" },
      { top: "20%", left: "50%" },
    ];

    // Add random properties (size, speed, opacity) to each particle
    const randomizedParticles = baseParticles.map((p) => ({
      ...p,
      size: 5 + Math.random() * 15, // Random size
      duration: 15 + Math.random() * 15, // Random animation duration
      color: `rgba(0,0,0,${0.1 + Math.random() * 0.3})`, // Random opacity
    }));

    // Save the array of particles to the state
    setParticles(randomizedParticles);
  }, []); // The empty array `[]` ensures this runs only once

  // This logic calculates the list of courses to display based on the filters
  const filteredCourses = courses.filter((course) => {
    // Check if the search text matches the course ID or name
    const matchesSearch =
      course.id.toLowerCase().includes(search.toLowerCase()) ||
      course.name.toLowerCase().includes(search.toLowerCase());

    // Check if the difficulty matches (or if "All" is selected)
    const matchesDifficulty = difficulty === "" || course.difficulty === difficulty;

    // Get an array of the subjects that are *checked* (e.g., ["Python", "Physics"])
    const selectedSubjects = Object.keys(subjects).filter((s) => subjects[s]);
    // Check if the course includes *at least one* of the selected subjects
    const matchesSubjects =
      selectedSubjects.length === 0 || // Show all if no subjects are selected
      selectedSubjects.some((s) => course.subjects.includes(s));

    // A course is shown only if it matches all three conditions
    return matchesSearch && matchesDifficulty && matchesSubjects;
  });

  // This function is called when a subject checkbox is clicked
  const handleSubjectChange = (key) => setSubjects({ ...subjects, [key]: !subjects[key] });
  
  // This function resets all filters to their default values
  const clearFilters = () => {
    setSearch("");
    setDifficulty("");
    setSubjects({
      Python: false,
      Ai: false,
      Physics: false,
      Biology: false,
      Calculus: false,
    });
  };

  // --- Render the component's JSX (HTML) ---
  return (
    // Wrap the entire page in the PageTransition component
    <PageTransition>
      {/* The main container for the sidebar and content */}
      <div className={styles.homeContainer}>
        {/* Sidebar */}
        {/* Apply the 'active' class if 'sidebarOpen' is true */}
        <div className={`${styles.sidebar} ${sidebarOpen ? styles.active : ""}`}>
          {/* Sidebar header with logo and text */}
          <header>
            <div className={styles.imageText}>
              <img src="/icons/OEH_logo.png" alt="OEH Logo" />
              <span className={styles.main}>Open Education Hub</span>
            </div>

            {/* The hamburger menu toggle button */}
            <div
              className={`${styles.toggleBtn} ${sidebarOpen ? styles.active : ""}`}
              onClick={() => setSidebarOpen(!sidebarOpen)} // Toggle state on click
            >
              <span className={styles.bar1}></span>
              <span className={styles.bar2}></span>
              <span className={styles.bar3}></span>
            </div>
          </header>

          {/* The list of menu links */}
          <ul className={styles.menuLinks}>
            {/* Map over the 'menuItemsPrimary' array to create each link */}
            {menuItemsPrimary.map((item) => (
              <li key={item.label} className={styles.navLink}>
                {/* Use a button for navigation */}
                <button className={styles.menuBtn} onClick={() => router.push(item.path)}>
                  <img src={item.icon} alt={item.label} />
                  <span>{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Main content area (right side) */}
        <main className={styles.mainContent}>
          {/* Container for the animated background particles */}
          <div className={styles.particles}>
            {/* Map over the 'particles' state to render each one */}
            {particles.map((p, i) => (
              <div
                key={i}
                className={styles.particle}
                // Apply the randomized style properties
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

          {/* Filters section */}
          <div className={styles.courseFilter}>
            {/* Top row of filters (search, buttons) */}
            <div className={styles.filterRow}>
              {/* Search bar */}
              <input
                type="text"
                placeholder="course id/name"
                value={search} // Controlled component: value is tied to state
                onChange={(e) => setSearch(e.target.value)} // Update state on change
                className={styles.searchInput}
              />
              {/* Clear button */}
              <button className={styles.clearBtn} onClick={clearFilters}>
                Clear
              </button>

              {/* Difficulty dropdown */}
              <label className={styles.diff}>
                Difficulty Level:
                {/* Render the custom DifficultySelect component */}
                <DifficultySelect value={difficulty} onChange={setDifficulty} />
              </label>
            </div>

            {/* Bottom row of filters (subject checkboxes) */}
            <div className={styles.subjects}>
              <span className={styles.subjectsLabel}>Subjects:</span>
              {/* Map over the 'subjects' state object to create checkboxes */}
              {Object.keys(subjects).map((key) => (
                <label key={key}>
                  <input
                    type="checkbox"
                    checked={subjects[key]} // Checked status is tied to state
                    onChange={() => handleSubjectChange(key)} // Update state on change
                  />
                  {key} {/* The text label for the checkbox */}
                </label>
              ))}
            </div>
          </div>

          {/* Display the count of filtered courses */}
          <p className={styles.courseCount}>{filteredCourses.length} courses in total</p>

          {/* The grid of course cards */}
          <div className={styles.courseGrid}>
            {/* Map over the 'filteredCourses' array to create a card for each */}
            {filteredCourses.map((course) => {
              // Calculate progress for *this* course
              const progress = calculateProgress(course.id);
              // Check if the course is fully completed
              const isCompleted = progress === 100;

              // Render the course card
              return (
                <div
                  key={course.id}
                  className={styles.courseCard}
                  // Navigate to the course detail page on click
                  onClick={() => {
                    router.push(`/courses/${course.id}`);
                  }}
                >
                  <h3 className={styles.courseId}>{course.id}</h3>
                  <p className={styles.courseName}>{course.name}</p>
                  {/* Container for the difficulty and subject tags */}
                  <div className={styles.tags}>
                    {/* Difficulty tag */}
                    <span className={`${styles.tag} ${styles[course.difficulty.toLowerCase()]}`}>
                      {course.difficulty}
                    </span>
                    {/* Map over the course's subjects to create tags */}
                    {course.subjects.map((s) => (
                      <span key={s} className={`${styles.tag} ${styles.subject}`}>
                        {s}
                      </span>
                    ))}
                  </div>

                  {/* Progress Bar Container */}
                  <div className={styles.progressContainer}>
                    {/* The blue filled part of the bar */}
                    <div
                      className={styles.progressBar}
                      style={{ width: `${progress}%` }} // Width is set by progress
                    />
                  </div>
                  {/* The text label (e.g., "50% Completed") */}
                  <p className={styles.percentlabel}>{Math.round(progress)}% Completed</p>

                  {/* Conditionally render a "Completed" or "Keep going" message */}
                  {isCompleted ? (
                    // If 100%, show the "Completed" message
                    <div className={styles.badge}>
                      <p>Course Completed!</p>
                    </div>
                  ) : (
                    // Otherwise, show "Keep going!"
                    <p className={styles.tracklabel}>Keep going!</p>
                  )}
                </div>
              );
            })}
          </div>
        </main>
      </div>
    </PageTransition>
  );
}

// A custom component for the "Difficulty" dropdown select
function DifficultySelect({ value, onChange }) {
  // An array of the available options
  const options = ["All", "Beginner", "Intermediate", "Advanced"];
  // State to track if the dropdown is open or closed
  const [open, setOpen] = useState(false);

  // This function is called when an option is clicked
  const handleSelect = (option) => {
    // If "All" is clicked, set the state to "", otherwise set it to the option
    onChange(option === "All" ? "" : option);
    // Close the dropdown
    setOpen(false);
  };

  // --- Render the custom select dropdown ---
  return (
    // The main container
    <div className={`${styles.customSelect} ${open ? styles.open : ""}`}>
      {/* The part that is always visible, showing the selected value */}
      <div className={styles.selected} onClick={() => setOpen(!open)}>
        {/* Show the 'value' prop, or "All" if the value is empty */}
        {value || "All"}
        {/* The arrow icon */}
        <span className={`${styles.arrow} ${open ? styles.up : styles.down}`}>▴</span>
      </div>
      {/* Conditionally render the options list if 'open' is true */}
      {open && (
        <div className={styles.options}>
          {/* Map over the 'options' array to create each item */}
          {options.map((opt) => (
            <div key={opt} className={styles.option} onClick={() => handleSelect(opt)}>
              {opt}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}