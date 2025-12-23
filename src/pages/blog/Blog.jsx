import React from "react";
import styles from "./Blog.module.css";

const Blog = () => {
  return (
    <div className={styles.blogContainer}>
      <h1>Blog</h1>
      <p>Latest posts:</p>
      <ul>
        <li>Understanding React Basics</li>
        <li>Building Secure Apps</li>
        <li>Democratizing Tech Education</li>
      </ul>
    </div>
  );
};

export default Blog;