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
    { label: "Logout", icon: "/icons/logout.png", path: "/auth" },
  ];

  const [search, setSearch] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [subjects, setSubjects] = useState({
    subject1: false,
    subject2: false,
    subject3: false,
    subject4: false,
    subject5: false,
    subject6: false,
  });

  const courses = [
    { id: "AAA001", name: "Course a", difficulty: "Beginner", subjects: ["subject1"] },
    { id: "AAA002", name: "Course b", difficulty: "Beginner", subjects: ["subject2"] },
    { id: "BAA001", name: "Course c", difficulty: "Intermediate", subjects: ["subject3"] },
    { id: "BBA001", name: "Course d", difficulty: "Advanced", subjects: ["subject4"] },
    { id: "BBA002", name: "Course e", difficulty: "Intermediate", subjects: ["subject5"] },
    { id: "CAA100", name: "Course f", difficulty: "Advanced", subjects: ["subject6"] },
    { id: "EDD098", name: "Course g", difficulty: "Beginner", subjects: ["subject5"] },
    { id: "DFE050", name: "Course h", difficulty: "Intermediate", subjects: ["subject1"] },
    { id: "AAA003", name: "Course i", difficulty: "Intermediate", subjects: ["subject1"] },
    { id: "AAA004", name: "Course j", difficulty: "Beginner", subjects: ["subject2"] },
    { id: "BAA005", name: "Course k", difficulty: "Advanced", subjects: ["subject3"] },
    { id: "BBA006", name: "Course l", difficulty: "Advanced", subjects: ["subject4"] },
    { id: "BBA007", name: "Course m", difficulty: "Intermediate", subjects: ["subject5"] },
    { id: "CAA200", name: "Course n", difficulty: "Advanced", subjects: ["subject6"] },
    { id: "EDD099", name: "Course o", difficulty: "Beginner", subjects: ["subject5"] },
    { id: "DFE051", name: "Course p", difficulty: "Intermediate", subjects: ["subject1"] },
    { id: "CAA201", name: "Course q", difficulty: "Advanced", subjects: ["subject6"] },
    { id: "EDD100", name: "Course r", difficulty: "Beginner", subjects: ["subject5"] },
    { id: "DFE052", name: "Course s", difficulty: "Intermediate", subjects: ["subject1"] },
    { id: "DFE053", name: "Course t", difficulty: "Advanced", subjects: ["subject1"] },
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
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className={styles.courseCard}
                onClick={() => alert(`Opening ${course.name}`)}
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
              </div>
            ))}
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
