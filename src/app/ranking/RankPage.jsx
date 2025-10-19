"use client";

import { useState, useEffect } from "react";
import PageTransition from "@/app/components/PageTransition";
import styles from "./ranking.module.css"; // Create your own CSS

export default function RankingPage() {
  const [rankings, setRankings] = useState([]);

  // Load ranking data from localStorage
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("learningTime") || "{}");
    // data format: { username: totalMinutes }
    const rankingArray = Object.entries(data)
      .map(([username, minutes]) => ({ username, minutes }))
      .sort((a, b) => b.minutes - a.minutes); // Descending
    setRankings(rankingArray);
  }, []);

  return (
    <PageTransition>
      <div className={styles.container}>
        <h2>📊 Learning Time Rankings</h2>
        {rankings.length === 0 ? (
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
              {rankings.map((user, index) => (
                <tr key={user.username}>
                  <td>{index + 1}</td>
                  <td>{user.username}</td>
                  <td>{Math.floor(user.minutes / 60)}h {user.minutes % 60}m</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </PageTransition>
  );
}
