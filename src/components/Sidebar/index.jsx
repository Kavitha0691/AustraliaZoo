import React, { useState } from "react";
import styles from "./sideBar.module.css";
import { getImageUrl } from "../../utils/function.js";

const Sidebar = ({ animals, onAnimalClick, activeAnimal }) => {
  const [isSidebarHovered, setIsSidebarHovered] = useState(false);
  const isExpanded = isSidebarHovered || !!activeAnimal;

  return (
    <aside
      className={`${styles.sidebar} ${isExpanded ? styles.expanded : ""}`}
      onMouseEnter={() => setIsSidebarHovered(true)}
      onMouseLeave={() => setIsSidebarHovered(false)}
    >
      <ul className={styles.animalList}>
        {animals.map((animal) => (
          <li
            key={animal.name}
            onClick={() => onAnimalClick(animal)}
            className={`${styles.animalItem} ${activeAnimal?.name === animal.name ? styles.active : ""
              }`}
          >
            <img
              src={getImageUrl(animal.img_url)}
              alt={animal.name}
              className={styles.animalImage}
            />
            <span
              className={`${styles.animalName} ${isExpanded || activeAnimal?.name === animal.name
                  ? styles.showName
                  : ""
                }`}
            >
              {animal.name}
            </span>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;