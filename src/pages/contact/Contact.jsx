import React from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      <h1>Contact Page</h1>
      <form className={styles.form}>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;