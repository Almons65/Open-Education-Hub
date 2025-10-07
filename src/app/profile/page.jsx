"use client";
import "./profile.css";
import { useState, useEffect } from "react";

export default function ProfilePage() {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    joined: "January 2024",
    bio: "A passionate learner and explorer of knowledge.",
  });

  useEffect(() => {
    // You can later fetch real user data from Firebase or API here
  }, []);

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-header">
          <img
            src="/icons/user.png"
            alt="Profile"
            className="profile-avatar"
          />
          <h2 className="profile-name">{user.name}</h2>
          <p className="profile-email">{user.email}</p>
        </div>

        <div className="profile-body">
          <p><strong>Member Since:</strong> {user.joined}</p>
          <p><strong>Bio:</strong> {user.bio}</p>
        </div>

        <div className="profile-actions">
          <button className="edit-btn">Edit Profile</button>
          <button className="logout-btn" onClick={() => alert("Logging out...")}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
