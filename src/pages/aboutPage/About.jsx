import React from "react";
import style from './about.module.css'

const About = () => {
  return (
    <div className={style.aboutContainer}>
      <header className={style.aboutCeader}>
        <h1 className={style.aboutTitle}>✨ About This Project ✨</h1>
        <p className={style.aboutSubtitle}>
          A simple React playground to explore components, styling, and routing.
        </p>
      </header>

      <section className={style.aboutContent}>
        <p>
          This project is built to <strong>practice React components</strong> and
          learn how they interact with each other.
        </p>
        <p>
          You can easily <em>add more pages</em>, style them individually, and
          experiment with reusable layouts.
        </p>
      </section>
    </div>
  );
};

export default About;