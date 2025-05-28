import React from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.css";
import Logo from "../Logo";
import Navigation from "../Navigation";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.zooHeader}>
        <Logo />
        <h1 className={styles.h1}> Australia Zoo</h1>
      </div>
      <Navigation />
    </header>
  );
};

export default Header;