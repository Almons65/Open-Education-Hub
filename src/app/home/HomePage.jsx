"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import PageTransition from "../components/PageTransition";
import styles from "./home.module.css";

export default function HomePage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [particles, setParticles] = useState([]);
  const router = useRouter();

  const menuItemsPrimary = [
    { label: "Home", icon: "/icons/home.png", path: "/home" },
    { label: "Profile", icon: "/icons/user.png", path: "/profile" },
    { label: "Ranking", icon: "/icons/ranking.png", path: "/ranking" },
    { label: "Logout", icon: "/icons/logout.png", path: "/auth" },
  ];

  const [search, setSearch] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [subjects, setSubjects] = useState({
    Python: false,
    Ai: false,
    Physics: false,
    Biology: false,
    Calculus: false,
  });

  const courses = [
    { id: "AAA001", name: "Introduction to Programming", difficulty: "Beginner", subjects: ["Python"], totalLectures: 3, badge: "/badges/ITP_badge.png" },
    { id: "AAA002", name: "Calculus 1", difficulty: "Intermediate", subjects: ["Calculus"], totalLectures: 3, badge: "/badges/Cal_Badge.png" },
    { id: "BAA001", name: "Electromagnetic Induction", difficulty: "Intermediate", subjects: ["Physics"], totalLectures: 3, badge: "/badges/Electromag_Badge.png" },
    { id: "BBA001", name: "Introduction to Deep Learning", difficulty: "Advanced", subjects: ["Ai"], totalLectures: 3, badge: "/badges/ITDL_Badge.png" },
    { id: "BBA002", name: "Ecology", difficulty: "Intermediate", subjects: ["Biology"], totalLectures: 3, badge: "/badges/Eco_Badge.png" },
    { id: "CAA100", name: "Electrodynamics", difficulty: "Advanced", subjects: ["Physics"], totalLectures: 3, badge: "/badges/ElectroDyn_Badge.png" },
];

  const [courseProgress, setCourseProgress] = useState({});

  // Fetch saved progress from localStorage on mount
  useEffect(() => {
  // Fetch saved progress from localStorage
  const savedProgress = JSON.parse(localStorage.getItem("courseProgress"));
  if (savedProgress) {
    setCourseProgress(savedProgress);
  } else {
    // Initialize with an empty progress object if no saved progress exists
    localStorage.setItem("courseProgress", JSON.stringify({}));
    setCourseProgress({});
  }
}, []);

  // Function to calculate course progress
const calculateProgress = (courseId) => {
  const course = courses.find((course) => course.id === courseId);
  const totalLectures = course ? course.totalLectures : 0;
  
  // Get the completed lectures from courseProgress
  const completedLectures = courseProgress[courseId]?.completedLectures || [];
  
  // Calculate the percentage of completed lectures
  const progress = (completedLectures.length / totalLectures) * 100;
  return progress;
};

const finishLecture = (courseId, lectureNumber) => {
  // Get the current progress data for the course from localStorage
  let courseProgressData = JSON.parse(localStorage.getItem("courseProgress")) || {};

  // Ensure that courseProgressData[courseId] is an object
  if (typeof courseProgressData[courseId] !== "object" || courseProgressData[courseId] === null) {
    // Initialize it as an object with completedLectures as an array if it's not already
    courseProgressData[courseId] = { completedLectures: [] };
  }

  // Ensure that completedLectures is an array for the given course
  if (!Array.isArray(courseProgressData[courseId].completedLectures)) {
    console.error(`Expected an array for completedLectures, but got:`, courseProgressData[courseId].completedLectures);
    courseProgressData[courseId].completedLectures = []; // Reset to an empty array
  }

  // Check if the lecture is already completed, if not, mark it as completed
  if (!courseProgressData[courseId].completedLectures.includes(lectureNumber)) {
    courseProgressData[courseId].completedLectures.push(lectureNumber); // Add the completed lecture
  }

  const course = courses.find((course) => course.id === courseId);
  const progress = calculateProgress(courseId);
  if (progress === 100 && !courseProgressData[courseId].badgeEarned) {
    courseProgressData[courseId].badgeEarned = course.badge;  // Assign the badge image URL when completed
    console.log(`Congratulations! You earned the badge!`);
  }

  // Save the updated courseProgressData back to localStorage
  localStorage.setItem("courseProgress", JSON.stringify(courseProgressData));

  // Trigger a re-render or update UI if needed
  setCourseProgress(courseProgressData);
};



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

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.id.toLowerCase().includes(search.toLowerCase()) ||
      course.name.toLowerCase().includes(search.toLowerCase());

    const matchesDifficulty = difficulty === "" || course.difficulty === difficulty;

    const selectedSubjects = Object.keys(subjects).filter((s) => subjects[s]);
    const matchesSubjects =
      selectedSubjects.length === 0 || selectedSubjects.some((s) => course.subjects.includes(s));

    return matchesSearch && matchesDifficulty && matchesSubjects;
  });

  const handleSubjectChange = (key) => setSubjects({ ...subjects, [key]: !subjects[key] });
  const clearFilters = () => {
    setSearch("");
    setDifficulty("");
    setSubjects({
      subject1: false,
      subject2: false,
      subject3: false,
      subject4: false,
      subject5: false,
      subject6: false,
    });
  };

  return (
    <PageTransition>
      <div className={styles.homeContainer}>
        {/* Sidebar */}
        <div className={`${styles.sidebar} ${sidebarOpen ? styles.active : ""}`}>
          <header>
            <div className={styles.imageText}>
              <img src="/icons/OEH_logo.png" alt="OEH Logo" />
              <span className={styles.main}>Open Education Hub</span>
            </div>

            {/* Toggle button */}
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

          {/* Filters */}
          <div className={styles.courseFilter}>
            <div className={styles.filterRow}>
              <input
                type="text"
                placeholder="course id/name"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className={styles.searchInput}
              />
              <button className={styles.searchBtn} onClick={clearFilters}>
                Search
              </button>
              <button className={styles.clearBtn} onClick={clearFilters}>
                Clear
              </button>

              <label className={styles.diff}>
                Difficulty Level:
                <DifficultySelect value={difficulty} onChange={setDifficulty} />
              </label>
            </div>

            <div className={styles.subjects}>
              <span className={styles.subjectsLabel}>Subjects:</span>
              {Object.keys(subjects).map((key) => (
                <label key={key}>
                  <input
                    type="checkbox"
                    checked={subjects[key]}
                    onChange={() => handleSubjectChange(key)}
                  />
                  {key}
                </label>
              ))}
            </div>
          </div>

          <p className={styles.courseCount}>{filteredCourses.length} courses in total</p>

         <div className={styles.courseGrid}>
            {filteredCourses.map((course) => {
              const progress = calculateProgress(course.id);
              const isCompleted = progress === 100;

              return (
                <div
                  key={course.id}
                  className={styles.courseCard}
                  onClick={() => {
                    finishLecture(course.id, 1);
                    router.push(`/courses/${course.id}`);
                  }}
                >
                  <h3 className={styles.courseId}>{course.id}</h3>
                  <p className={styles.courseName}>{course.name}</p>
                  <div className={styles.tags}>
                    <span className={`${styles.tag} ${styles[course.difficulty.toLowerCase()]}`}>
                      {course.difficulty}
                    </span>
                    {course.subjects.map((s) => (
                      <span key={s} className={`${styles.tag} ${styles.subject}`}>
                        {s}
                      </span>
                    ))}
                  </div>

                  {/* Progress Bar */}
                  <div className={styles.progressContainer}>
                    <div
                      className={styles.progressBar}
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <p className={styles.percentlabel}>{Math.round(progress)}% Completed</p>

                  {isCompleted ? (
                    <div className={styles.badge}>
                      <p>🏅 Course Completed!</p>
                    </div>
                  ) : (
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

function DifficultySelect({ value, onChange }) {
  const options = ["All", "Beginner", "Intermediate", "Advanced"];
  const [open, setOpen] = useState(false);

  const handleSelect = (option) => {
    onChange(option === "All" ? "" : option);
    setOpen(false);
  };

  return (
    <div className={`${styles.customSelect} ${open ? styles.open : ""}`}>
      <div className={styles.selected} onClick={() => setOpen(!open)}>
        {value || "All"}
        <span className={`${styles.arrow} ${open ? styles.up : styles.down}`}>▴</span>
      </div>
      {open && (
        <div className={styles.options}>
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
