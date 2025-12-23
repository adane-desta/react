import React from "react";
import styles from "./Services.module.css";

const Services = () => {
  return (
    <div className={styles.servicesContainer}>
      <h1>Services</h1>
      <ul>
        <li>Web Development</li>
        <li>Mobile Apps</li>
        <li>Cloud Solutions</li>
        <li>Training</li>
      </ul>
    </div>
  );
};

export default Services;