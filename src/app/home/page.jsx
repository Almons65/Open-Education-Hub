"use client";
import "./home.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [particles, setParticles] = useState([]);
  const router = useRouter();

  const menuItemsPrimary = [
    { label: "Home", icon:"icons/home.png", path: "/home"},
    { label: "Profile", icon: "icons/user.png", path: "/profile"},
    { label: "Logout", icon:"icons/logout.png", path: "/"},
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

    const matchesDifficulty =
      difficulty === "" || course.difficulty === difficulty;

    const selectedSubjects = Object.keys(subjects).filter((s) => subjects[s]);
    const matchesSubjects =
      selectedSubjects.length === 0 ||
      selectedSubjects.some((s) => course.subjects.includes(s));

    return matchesSearch && matchesDifficulty && matchesSubjects;
  });

  const handleSubjectChange = (key) => {
    setSubjects({ ...subjects, [key]: !subjects[key] });
  };

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
    <div className="home-container">
      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? "open" : "close"}`}>
        <header>
          <div className="image-text">
            <span className="image">
              <img src="/icons/OEH_logo.png" alt="CodePen" />
            </span>
            <div className="text header-text">
              <span className="main">Open Education Hub</span>
            </div>
          </div>
          <div
            className={`toggle-btn ${sidebarOpen ? "open" : "close"}`}
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <span className="bar bar1"></span>
            <span className="bar bar2"></span>
            <span className="bar bar3"></span>
          </div>
        </header>

        <ul className="menu-bar">
  <ul className="menu-links">
  {menuItemsPrimary.map((item) => (
    <li key={item.label} className="nav-link">
      <button
        className="menu-btn"
        onClick={() => router.push(item.path)}
      >
        <img src={item.icon} alt={item.label} className="menu-icon" />
        <span className="text">{item.label}</span>
      </button>
    </li>
  ))}
</ul>

</ul>
      </div>

      {/* Main content */}
      <main>
        {/* Particles */}
        <div className="particles">
          {particles.map((p, i) => (
            <div
              key={i}
              className="particle"
              style={{
                top: p.top,
                left: p.left,
                width: `${p.size}px`,
                height: `${p.size}px`,
                animationDuration: `${p.duration}s`,
                backgroundColor: p.color,
              }}
            ></div>
          ))}
        </div>

        {/* Course Filter */}
        <div className="course-filter">
         <div className="filter-row">
  <input
    type="text"
    placeholder="course id/name"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
  />
  <button className="search-btn">Search</button>
  <button className="clear-btn" onClick={clearFilters}>Clear</button>

  <label className="diff">
    Difficulty Level:
    <DifficultySelect value={difficulty} onChange={setDifficulty} />
  </label>
</div>

          <div className="subjects">
            <span className="subjects_label">Subjects:</span>
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

        <p className="course-count">{filteredCourses.length} courses in total</p>

        <div className="course-grid">
          {filteredCourses.map((course) => (
            <div key={course.id} className="course-card" onClick={() => alert(`Opening ${course.name}`)}>
              <h3 className="course-id">{course.id}</h3>
              <p className="course-name">{course.name}</p>
              <div className="tags">
                <span className={`tag ${course.difficulty.toLowerCase()}`}>
                  {course.difficulty}
                </span>
                {course.subjects.map((s) => (
                  <span key={s} className="tag subject">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
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
    <div className={`custom-select ${open ? "open" : ""}`}>
      <div className="selected" onClick={() => setOpen(!open)}>
        {value || "All"}
        <span className={`arrow ${open ? "up" : "down"}`}>▴</span>
      </div>
      {open && (
        <div className="options">
          {options.map((opt) => (
            <div
              key={opt}
              className="option"
              onClick={() => handleSelect(opt)}
            >
              {opt}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
