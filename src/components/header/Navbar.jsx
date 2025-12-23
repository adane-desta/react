import React from "react";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <h2 className={styles.logo}>React Practice</h2>
      <ul className={styles.navLinks}>
       <NavLink to={'/'}> <li>Home</li> </NavLink>
       <NavLink to={'/about'}> <li>About</li></NavLink>
        <NavLink to={'/contact'}><li>Contact</li></NavLink>
        <NavLink to={'/dashboard'}><li>Dashboard</li></NavLink>
        <NavLink to={'/services'}><li>Services</li></NavLink>
        <NavLink to={'/portfolio'}><li>Portfolio</li></NavLink>
        <NavLink to={'/blog'}><li>Blog</li></NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;