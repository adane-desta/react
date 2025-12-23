import React from "react";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={styles.dashboardContainer}>
      <h1>Dashboard</h1>
      <ul>
        <li>Completed Lessons: 12</li>
        <li>Pending Tasks: 5</li>
        <li>Achievements: 3 Badges</li>
      </ul>
    </div>
  );
};

export default Dashboard;