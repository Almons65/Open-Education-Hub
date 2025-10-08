"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import PageTransition from "./components/PageTransition";
import "./page.css";

export default function AuthPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("login");
  const [showPassword, setShowPassword] = useState({
    login: false,
    signup: { password: false, confirm: false },
  });
  const [loading, setLoading] = useState({
    login: false,
    signup: false,
    reset: false,
  });

  const cardRef = useRef(null);

  const tabHeights = { login: 640, signup: 710, reset: 530 };

  useEffect(() => {
    if (cardRef.current) {
      cardRef.current.style.height = tabHeights[activeTab] + "px";
    }
  }, [activeTab]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading((prev) => ({ ...prev, [activeTab]: true }));

    setTimeout(() => {
      setLoading((prev) => ({ ...prev, [activeTab]: false }));
      // Navigate to /home after loading
      router.push("/home");
    }, 2000);
  };

  return (
    <PageTransition>
    <div className="auth-page">
      <div className="particles">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="particle"></div>
        ))}
      </div>

      <div className="auth-card-container">
        <div className="auth-card" ref={cardRef}>
          {/* Orb with Logo */}
          <div className="orb-container">
            <div className="orb-with-image">
              <svg viewBox="0 0 300 300" className="orb-svg">
                <defs>
                  <radialGradient id="orbNeonGradient" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
                    <stop offset="25%" stopColor="#33cc66" stopOpacity="0.7" />
                    <stop offset="50%" stopColor="#3399ff" stopOpacity="0.5" />
                    <stop offset="75%" stopColor="#996633" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#000000" stopOpacity="0" />
                  </radialGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="12" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                <g className="orbRotate">
                  <circle
                    className="orbBreath"
                    cx="150"
                    cy="150"
                    r="70"
                    fill="url(#orbNeonGradient)"
                    filter="url(#glow)"
                  />
                </g>
                <g>
                  <polygon points="120,70 180,70 150,50" fill="#222222" stroke="#000000" strokeWidth="2" />
                  <rect x="140" y="70" width="20" height="10" fill="#222222" />
                  <line x1="160" y1="70" x2="160" y2="90" stroke="#FFD700" strokeWidth="3" />
                  <circle cx="160" cy="90" r="2" fill="#ffffff" />
                </g>
              </svg>
              <Image
                src="/icons/OEH_logo.png"
                alt="OEH Logo"
                width={220}
                height={180}
                className="orb-side-img"
              />
            </div>
          </div>

          {/* Tabs */}
          <div className="auth-tabs">
            {["login", "signup", "reset"].map((tab) => (
              <div
                key={tab}
                className={activeTab === tab ? "active" : ""}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </div>
            ))}
          </div>

          {/* Forms */}
          <FormLogin
            active={activeTab === "login"}
            loading={loading.login}
            showPassword={showPassword}
            setShowPassword={setShowPassword}
            handleSubmit={handleSubmit}
          />
          <FormSignup
            active={activeTab === "signup"}
            loading={loading.signup}
            showPassword={showPassword}
            setShowPassword={setShowPassword}
            handleSubmit={handleSubmit}
          />
          <FormReset
            active={activeTab === "reset"}
            loading={loading.reset}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
    </div>
    </PageTransition>
  );
}

// ===== Login Form =====
const FormLogin = ({ active, loading, showPassword, setShowPassword, handleSubmit }) => (
  <form className={`auth-form ${active ? "visible" : ""}`} onSubmit={handleSubmit}>
    <h2 className="form-title">Login</h2>
    <div className="input-group">
      <input type="type" required placeholder=" " name="identifier" />
      <label>Email or Username</label>
      <span className="underline"></span>
      <img src="/icons/user-icon.png" alt="user icon" className="user-icon" />
    </div>
    <div className="input-group">
      <input type={showPassword.login ? "text" : "password"} required placeholder=" " />
      <label>Password</label>
      <span className="underline"></span>
      <Image
        src={showPassword.login ? "/icons/eye-open-icon.png" : "/icons/eye-close-icon.png"}
        alt="toggle password"
        width={35}
        height={20}
        className="input-icon"
        onClick={() => setShowPassword(prev => ({ ...prev, login: !prev.login }))}
      />
    </div>
    <div className="checkbox-group">
      <input type="checkbox" id="rememberMe" />
      <label className="checkbox-label">Remember Me</label>
    </div>
    <LoadingButton loading={loading} text="Login" />
  </form>
);

// ===== Signup Form =====
const FormSignup = ({ active, loading, showPassword, setShowPassword, handleSubmit }) => (
  <form className={`auth-form ${active ? "visible" : ""}`} onSubmit={handleSubmit}>
    <h2 className="form-title">Sign Up</h2>
    <div className="input-group">
      <input type="text" required placeholder=" " />
      <label>Username</label>
      <span className="underline"></span>
      <img src="/icons/user-icon.png" alt="user icon" className="user-icon" />
    </div>
    <div className="input-group">
      <input type="email" required placeholder=" " />
      <label>Email</label>
      <span className="underline"></span>
      <img src="/icons/email-icon.png" alt="email icon" className="email-icon" />
    </div>
    <div className="input-group">
      <input type={showPassword.signup.password ? "text" : "password"} required placeholder=" " />
      <label>Password</label>
      <span className="underline"></span>
      <Image
        src={showPassword.signup.password ? "/icons/eye-open-icon.png" : "/icons/eye-close-icon.png"}
        alt="toggle password"
        width={35}
        height={20}
        className="input-icon"
        onClick={() => setShowPassword(prev => ({ ...prev, signup: { ...prev.signup, password: !prev.signup.password } }))}
      />
    </div>
    <div className="input-group">
      <input type={showPassword.signup.confirm ? "text" : "password"} required placeholder=" " />
      <label>Confirm Password</label>
      <span className="underline"></span>
      <Image
        src={showPassword.signup.confirm ? "/icons/eye-open-icon.png" : "/icons/eye-close-icon.png"}
        alt="toggle password"
        width={35}
        height={20}
        className="input-icon"
        onClick={() => setShowPassword(prev => ({ ...prev, signup: { ...prev.signup, confirm: !prev.signup.confirm } }))}
      />
    </div>
    <LoadingButton loading={loading} text="Sign Up" />
  </form>
);

// ===== Reset Form =====
const FormReset = ({ active, loading, handleSubmit }) => (
  <form className={`auth-form ${active ? "visible" : ""}`} onSubmit={handleSubmit}>
    <h2 className="form-title">Reset Password</h2>
    <div className="input-group">
      <input type="email" required placeholder=" " />
      <label>Email</label>
      <span className="underline"></span>
      <img src="/icons/email-icon.png" alt="email icon" className="email-icon" />
    </div>
    <LoadingButton loading={loading} text="Send Reset Link" />
  </form>
);

// ===== Loading Button =====
const LoadingButton = ({ loading, text }) => {
  const [showGif, setShowGif] = useState(false);

  useEffect(() => {
    let timer;
    if (loading) {
      timer = setTimeout(() => setShowGif(true), 200);
    } else {
      setShowGif(false);
    }
    return () => clearTimeout(timer);
  }, [loading]);

  return (
    <div className="submit-btn-wrapper">
      <button
        type="submit"
        className={`submit-btn ${loading ? "fade-out" : "fade-in"}`}
        disabled={loading}
      >
        {text}
      </button>
      {showGif && (
        <div className="loading-gif">
          <img src="/infinite_loading.gif" alt="loading" />
        </div>
      )}
    </div>
  );
};
