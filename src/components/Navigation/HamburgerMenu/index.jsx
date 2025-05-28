import React from "react";
import { X } from "lucide-react";
import Hamburger from "hamburger-react";
import styles from "../navigation.module.css";

const HamburgerMenu = ({ isOpen, toggleMenu }) => {
  return (
    <div className={styles.menuIcon} onClick={toggleMenu}>
      {isOpen ? <X size={30} /> : <Hamburger toggled={isOpen} toggle={toggleMenu} />}
    </div>
  );
};

export default HamburgerMenu;