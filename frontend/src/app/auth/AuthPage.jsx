"use client";

// React's built-in hooks for managing state and side effects
import { useState, useEffect, useRef } from "react";
// Next.js's hook for navigation
import { useRouter } from "next/navigation";
// Optimized image component from Next.js
import Image from "next/image";
// Custom PageTransition wrapper component
import PageTransition from "../components/PageTransition";
// CSS module for locally-scoped styles
import styles from "./auth.module.css";
import { supabase } from "@/lib/supabaseClient";

export default function AuthPage() {
  // Router hook to be able to redirect the user
  const router = useRouter();
  // State to keep track of which tab is curently active
  const [activeTab, setActiveTab] = useState("login");
  // State to manage the visibility of password fields (show/hide)
  const [showPassword, setShowPassword] = useState({
    login: false, // Controls the login form's password field
    signup: { password: false, confirm: false }, // Controls the signup form's two password fields
  });

  // State to manage the loading status for each form's submit button
  const [loading, setLoading] = useState({
    login: false,
    signup: false,
    reset: false,
    updatePassword: false,
  });

  // Get direct access to the main card's DOM element (for height changes)
  const cardRef = useRef(null);
  // Get direct acces to the tab slider's DOM element (for position changes)
  const sliderRef = useRef(null);
  // A helper object mapping each tab to its required card height in pixels
  const tabHeights = { login: 640, signup: 710, reset: 530, updatePassword: 550 };

  // Effect hook runs whenever the 'activeTab' or 'tabHeights' values change
  useEffect(() => {
    // -- Animate the card's height --
    if (cardRef.current) { // Check if the card ref is attached to an element
      // Set the card's CSS height based on the new active tab
      cardRef.current.style.height = tabHeights[activeTab] + "px";
    }

    // -- Animate the tab slider's position --
    if (sliderRef.current) { // Check if the slider ref is attached
      // Find the DOM element for the *currently active* tab

      if (activeTab === 'updatePassword') {
        sliderRef.current.style.width = '0px';
        return; // これ以降の処理をスキップ
      }

      const activeTabElement = document.getElementById(`tab-${activeTab}`);

      if (activeTabElement) { // If the active tab element exists
        // Get its horizontal position (offsetLeft) and its width (offsetWidth)
        const { offsetLeft, offsetWidth } = activeTabElement;

        // Set the slider's width to match the active tab's width
        sliderRef.current.style.width = `${offsetWidth}px`;
        // Move the slider horizontally to align with the active tab
        sliderRef.current.style.transform = `translateX(${offsetLeft}px)`;
      }
    }
    // The dependency array ensures this code runs only when 'activeTab' or 'tabHeights' changes
  }, [activeTab, tabHeights]);

  // Supabase の認証状態の変化を監視
  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
        async (event, session) => {
          // パスワードリセットのリンクから来た場合
          if (event === "PASSWORD_RECOVERY") {
            // "新しいパスワード設定" モードに切り替え
            setActiveTab("updatePassword");
          }
        }
    );

    // クリーンアップ関数
    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  // Function to handle form submissions
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission (page reload)
    // Set the loading state for the *current* tab to true
    setLoading((prev) => ({ ...prev, [activeTab]: true }));

    try{
      if(activeTab === "login"){
        const email = e.target.identifier.value;
        const password = e.target.password.value;

        const {error} = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if(error) throw error;
        router.push("/home")
      }
      if(activeTab === "signup"){
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirm =e.target.confirm.value;
        const username = e.target.username.value;

        if(password !== confirm) throw new Error("Passwords do not match");

        const {error} = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              username: username
            }
          }
        });
        if(error) throw error;
        alert("Check your email to confirm your account!");
        e.target.reset();
      }

      if(activeTab ==="reset"){
        const email = e.target.email.value;
        const {error} = await supabase.auth.resetPasswordForEmail(email);
        if(error) throw error;
        alert("Password reset link sent!");
      }

      if (activeTab === "updatePassword") {
        const password = e.target.password.value;
        const confirm = e.target.confirm.value;

        if (password !== confirm) {
          throw new Error("Passwords do not match");
        }

        // Supabase の updateUser を呼び出す
        const { error } = await supabase.auth.updateUser({
          password: password,
        });

        if (error) throw error;

        alert("Password updated successfully! Please log in.");
        setActiveTab("login"); // ログインタブに戻す
      }
    }catch(err){
      alert(err.message);
    }finally{
      setLoading(prev =>({...prev, [activeTab]:false}));
    }
  };

  //google github login
  const handleOAuthLogin = async (provider)=>{
    const {error} = await supabase.auth.signInWithOAuth({
      provider,
      options: {redirectTo:"http://localhost:3000/auth/callback"}
    });
    if(error) alert(error.message);
  };

  // Render the component's JSX
  return (
    // Wrap the entire page in the transition component
    <PageTransition>
      {/* Main page container */}
      <div className={styles["auth-page"]}>
        {/* Container for the animated background particles */}
        <div className={styles.particles}>
          {/* Create 6 particle divs for the animation */}
          {[...Array(6)].map((_, i) => (
            <div key={i} className={styles.particle}></div>
          ))}
        </div>

        {/* This container centers the authentication card */}
        <div className={styles["auth-card-container"]}>
          {/* The main card element, attached to the cardRef for height animation */}
          <div className={styles["auth-card"]} ref={cardRef}>
            {/* Container for the animated orb and logo */}
            <div className={styles["orb-container"]}>
              <div className={styles["orb-with-image"]}>
                {/* SVG for the animated, glowing orb */}
                <svg viewBox="0 0 300 300" className={styles["orb-svg"]}>
                  <defs>
                    {/* Define the gradient for the orb's color */}
                    <radialGradient id="orbNeonGradient" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
                      <stop offset="25%" stopColor="#33cc66" stopOpacity="0.7" />
                      <stop offset="50%" stopColor="#3399ff" stopOpacity="0.5" />
                      <stop offset="75%" stopColor="#996633" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#000000" stopOpacity="0" />
                    </radialGradient>
                    {/* Define the filter for the "glow" effect */}
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="12" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>
                  {/* Group for the rotating animation */}
                  <g className={styles.orbRotate}>
                    {/* The orb circle itself, with "breathing" animation, gradient, and glow */}
                    <circle
                      className={styles.orbBreath}
                      cx="150"
                      cy="150"
                      r="70"
                      fill="url(#orbNeonGradient)"
                      filter="url(#glow)"
                    />
                  </g>
                  {/* Group for the static elements on top of the orb */}
                  <g>
                  <polygon points="120,70 180,70 150,50" fill="#222222" stroke="#000000" strokeWidth="2" />
                  <rect x="140" y="70" width="20" height="10" fill="#222222" />
                  <line x1="160" y1="70" x2="160" y2="90" stroke="#FFD700" strokeWidth="3" />
                  <circle cx="160" cy="90" r="2" fill="#ffffff" />
                </g>
                </svg>
                {/* The "OEH" logo image positioned next to the orb */}
                <Image
                  src="/icons/OEH_logo.png"
                  alt="OEH Logo"
                  width={220}
                  height={180}
                  className={styles["orb-side-img"]}
                />
              </div>
            </div>

            {/* Container for the tab navigation */}
            {activeTab !== 'updatePassword' ? (
                <>
                  {/* Container for the tab navigation */}
                  <div className={styles["auth-tabs"]}>
                    {["login", "signup", "reset"].map((tab) => (
                        <div
                            key={tab}
                            id={`tab-${tab}`}
                            className={`${styles.tabItem} ${activeTab === tab ? styles.active : ""}`}
                            onClick={() => setActiveTab(tab)}
                        >
                          {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </div>
                    ))}
                    <div className={styles.slider} ref={sliderRef} />
                  </div>

                  {/* Render the Login form component */}
                  <FormLogin
                      active={activeTab === "login"}
                      loading={loading.login}
                      showPassword={showPassword}
                      setShowPassword={setShowPassword}
                      handleSubmit={handleSubmit}
                      handleOAuthLogin={handleOAuthLogin}
                  />
                  {/* Render the Signup form component */}
                  <FormSignup
                      active={activeTab === "signup"}
                      loading={loading.signup}
                      showPassword={showPassword}
                      setShowPassword={setShowPassword}
                      handleSubmit={handleSubmit}
                  />
                  {/* Render the Reset Password form component */}
                  <FormReset
                      active={activeTab === "reset"}
                      loading={loading.reset}
                      handleSubmit={handleSubmit}
                  />
                </>
            ) : (
              <FormUpdatePassword
              active={activeTab === "updatePassword"}
              loading={loading.updatePassword}
              showPassword={showPassword}
              setShowPassword={setShowPassword}
              handleSubmit={handleSubmit}
              />
            )}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

// -- FormLogin Component --
// Separate component for the Login form
const FormLogin = ({ active, loading, showPassword, setShowPassword, handleSubmit, handleOAuthLogin }) => (
  // The form element. 'visible' class is added when 'active' is true.
  <form className={`${styles["auth-form"]} ${active ? styles.visible : ""}`} onSubmit={handleSubmit}>
    <h2 className={styles["form-title"]}>Login</h2>
    {/* Input group for Email or Username */}
    <div className={styles["input-group"]}>
      <input type="text" required placeholder=" " name="identifier" />
      <label>Email</label>
      <span className={styles.underline}></span>
      <img src="/icons/user-icon.png" alt="user icon" className={styles["user-icon"]} />
    </div>
    {/* Input group for Password */}
    <div className={styles["input-group"]}>
      {/* Dynamically set input type based on showPassword state */}
      <input type={showPassword.login ? "text" : "password"} name="password" required placeholder=" " />
      <label>Password</label>
      <span className={styles.underline}></span>
      {/* The eye icon to toggle password visibility */}
      <Image
        src={showPassword.login ? "/icons/eye-open-icon.png" : "/icons/eye-close-icon.png"}
        alt="toggle password"
        width={35}
        height={20}
        className={styles["input-icon"]}
        // On click, toggle the 'login' property in the showPassword state
        onClick={() => setShowPassword(prev => ({ ...prev, login: !prev.login }))}
      />
    </div>

    {/* supabase OAuth button*/}
    <div className={styles["oauth-buttons"]}>
      <button type="button" onClick={()=>handleOAuthLogin("google")} className={`${styles.oauthBtn} ${styles.google}`}><Image
          src="/icons/google-icon.png"
          alt="Google Icon"
          width={20}
          height={20}
          className={styles["google-icon"]}
      /></button>
      <button type="button" onClick={()=>handleOAuthLogin("github")} className={`${styles.oauthBtn} ${styles.github}`}><Image
          src="/icons/github-icon.png"
          alt="GitHub Icon"
          width={20}
          height={20}
          className={styles["github-icon"]}
      />
      </button>
    </div>

    {/* Checkbox group for "Remember Me" */}
    <div className={styles["checkbox-group"]}>
      <input type="checkbox" id="rememberMe" />
      <label className={styles["checkbox-label"]}>Remember Me</label>
    </div>
    {/* The custom loading-aware submit button */}
    <LoadingButton loading={loading} text="Login" />
  </form>
);

// -- FormSignup Component --
// Separate component for the Sign Up form
const FormSignup = ({ active, loading, showPassword, setShowPassword, handleSubmit }) => (
  // The form element. 'visible' class is added when 'active' is true.
  <form className={`${styles["auth-form"]} ${active ? styles.visible : ""}`} onSubmit={handleSubmit}>
    <h2 className={styles["form-title"]}>Sign Up</h2>
    {/* Input group for Username */}
    <div className={styles["input-group"]}>
      <input type="text" name="username" required placeholder=" " />
      <label>Username</label>
      <span className={styles.underline}></span>
      <img src="/icons/user-icon.png" alt="user icon" className={styles["user-icon"]} />
    </div>
    {/* Input group for Email */}
    <div className={styles["input-group"]}>
      <input type="email" name= "email" required placeholder=" " />
      <label>Email</label>
      <span className={styles.underline}></span>
      <img src="/icons/email-icon.png" alt="email icon" className={styles["email-icon"]} />
    </div>
    {/* Input group for Password */}
    <div className={styles["input-group"]}>
      {/* Dynamically set input type */}
      <input type={showPassword.signup.password ? "text" : "password"} name="password" required placeholder=" " />
      <label>Password</label>
      <span className={styles.underline}></span>
      {/* Icon to toggle password visibility */}
      <Image
        src={showPassword.signup.password ? "/icons/eye-open-icon.png" : "/icons/eye-close-icon.png"}
        alt="toggle password"
        width={35}
        height={20}
        className={styles["input-icon"]}
        // On click, toggle the 'signup.password' property
        onClick={() =>
          setShowPassword(prev => ({
            ...prev,
            signup: { ...prev.signup, password: !prev.signup.password }
          }))
        }
      />
    </div>
    {/* Input group for Confirm Password */}
    <div className={styles["input-group"]}>
      {/* Dynamically set input type */}
      <input type={showPassword.signup.confirm ? "text" : "password"} name="confirm" required placeholder=" " />
      <label>Confirm Password</label>
      <span className={styles.underline}></span>
      {/* Icon to toggle password visibility */}
      <Image
        src={showPassword.signup.confirm ? "/icons/eye-open-icon.png" : "/icons/eye-close-icon.png"}
        alt="toggle password"
        width={35}
        height={20}
        className={styles["input-icon"]}
        // On click, toggle the 'signup.confirm' property
        onClick={() =>
          setShowPassword(prev => ({
            ...prev,
            signup: { ...prev.signup, confirm: !prev.signup.confirm }
          }))
        }
      />
    </div>
    {/* The custom loading-aware submit button */}
    <LoadingButton loading={loading} text="Sign Up" />
  </form>
);

// -- FormReset Component --
// Separate component for the Reset Password form
const FormReset = ({ active, loading, handleSubmit }) => (
  // The form element. 'visible' class is added when 'active' is true.
  <form className={`${styles["auth-form"]} ${active ? styles.visible : ""}`} onSubmit={handleSubmit}>
    <h2 className={styles["form-title"]}>Reset Password</h2>
    {/* Input group for Email */}
    <div className={styles["input-group"]}>
      <input type="email" name="email" required placeholder=" " />
      <label>Email</label>
      <span className={styles.underline}></span>
      <img src="/icons/email-icon.png" alt="email icon" className={styles["email-icon"]} />
    </div>
    {/* The custom loading-aware submit button */}
    <LoadingButton loading={loading} text="Send Reset Link" />
  </form>
);

const FormUpdatePassword = ({ active, loading, showPassword, setShowPassword, handleSubmit }) => (
    <form className={`${styles["auth-form"]} ${active ? styles.visible : ""}`} onSubmit={handleSubmit}>
      <h2 className={styles["form-title"]}>Set New Password</h2>
      <p className={styles["form-subtitle"]}>Please enter your new password below.</p>

      {/* Input group for Password */}
      <div className={styles["input-group"]}>
        <input type={showPassword.signup.password ? "text" : "password"} name="password" required placeholder=" " />
        <label>New Password</label>
        <span className={styles.underline}></span>
        <Image
            src={showPassword.signup.password ? "/icons/eye-open-icon.png" : "/icons/eye-close-icon.png"}
            alt="toggle password"
            width={35}
            height={20}
            className={styles["input-icon"]}
            onClick={() =>
                setShowPassword(prev => ({
                  ...prev,
                  signup: { ...prev.signup, password: !prev.signup.password }
                }))
            }
        />
      </div>

      {/* Input group for Confirm Password */}
      <div className={styles["input-group"]}>
        <input type={showPassword.signup.confirm ? "text" : "password"} name="confirm" required placeholder=" " />
        <label>Confirm New Password</label>
        <span className={styles.underline}></span>
        <Image
            src={showPassword.signup.confirm ? "/icons/eye-open-icon.png" : "/icons/eye-close-icon.png"}
            alt="toggle password"
            width={35}
            height={20}
            className={styles["input-icon"]}
            onClick={() =>
                setShowPassword(prev => ({
                  ...prev,
                  signup: { ...prev.signup, confirm: !prev.signup.confirm }
                }))
            }
        />
      </div>

      <LoadingButton loading={loading} text="Update Password" />
    </form>
);

// -- LoadingButton Component --
// A reusable component for a button that shows a loading state
const LoadingButton = ({ loading, text }) => {
  // State to control *when* the GIF appears.
  const [showGif, setShowGif] = useState(false);

  // This effect manages the loading GIF's appearance
  useEffect(() => {
    let timer;
    // If loading starts
    // Wait 200ms before showing the GIF. This prevents flashing on fast loads.
    if (loading) timer = setTimeout(() => setShowGif(true), 200);
    // If loading stops, hide the GIF immediately.
    else setShowGif(false);
    // Cleanup function: clear the timer if the component unmounts or 'loading' changes
    return () => clearTimeout(timer);
  }, [loading]); // Run this effect whenever the 'loading' prop changes

  return (
    // Wrapper div to position the button and GIF
    <div className={styles["submit-btn-wrapper"]}>
      {/* The actual submit button */}
      <button
        type="submit"
        // Apply 'fade-out' class when loading, 'fade-in' when not
        className={`${styles["submit-btn"]} ${loading ? styles["fade-out"] : styles["fade-in"]}`}
        // Disable the button while loading
        disabled={loading}
      >
        {text} {/* Display the button text (e.g., "Login", "Sign Up") */}
      </button>
      {/* Conditionally render the loading GIF wrapper */}
      {showGif && (
        <div className={styles["loading-gif"]}>
          <img src="/icons/infinite_loading.gif" alt="loading" />
        </div>
      )}
    </div>
  );
};
