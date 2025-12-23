import React from "react";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <header className={styles.hero}>
        <h1>Welcome to My Practice </h1>
        <p>This is the homepage component.</p>
      </header>

      <section className={styles.features}>
        <h2> Features</h2>
        <ul>
          <li>Beautiful design</li>
          <li>Reusable components</li>
          <li>Easy to extend</li>
        </ul>
      </section>
    </div>
  );
};

export default Home;