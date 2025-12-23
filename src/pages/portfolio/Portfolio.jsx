import React from "react";
import styles from "./Portfolio.module.css";

const Portfolio = () => {
  return (
    <div className={styles.portfolioContainer}>
      <h1>Portfolio</h1>
      <p>Here are some sample projects:</p>
      <ul>
        <li>React Practice App</li>
        <li>Scrcpy Setup Guide</li>
        <li>Amharic Tech Education Platform</li>
      </ul>
    </div>
  );
};

export default Portfolio;