import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styles from "./navigation.module.css";
import HamburgerMenu from "./HamburgerMenu";
import { animalCategories } from "../../data/data.js";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [clickedLink, setClickedLink] = useState(null);

  const links = ["Home", ...animalCategories];

  const handleLinkHover = (link) => setHoveredLink(link);
  const handleLinkLeave = () => setHoveredLink(null);

  const handleLinkClick = (link) => {
    setClickedLink(link);
    setIsOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <HamburgerMenu isOpen={isOpen} toggleMenu={() => setIsOpen(!isOpen)} />

      <ul className={`${styles.navLinks} ${isOpen ? styles.showMenu : ""}`}>
        {links.map((link, i) => {
          const path = link === "Home" ? "/" : `/${link.toLowerCase()}`;

          const isActive = clickedLink === link;

          return (
            <li
              key={i}
              onMouseEnter={() => handleLinkHover(link)}
              onMouseLeave={handleLinkLeave}
              className={hoveredLink === link ? styles.hovered : ""}
            >
              <NavLink
                to={path}
                className={isActive ? styles.active : ""}
                onClick={() => handleLinkClick(link)}
                end={link === "Home"}
              >
                {link}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;