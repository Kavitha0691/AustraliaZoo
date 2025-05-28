import { Link } from "react-router-dom";
import { getImageUrl } from "../../utils/function";
import styles from "./animalCard.module.css";

const AnimalCard = ({ animal, onClose, onReadMore }) => {
  const shortDesc = animal.description.slice(0, 200) + "...";

  return (
    <div className={styles.animalCard}>
      <button onClick={onClose} className={styles.closeBtn}>
        Close
      </button>
      <img
        className={styles.animalImg}
        src={getImageUrl(animal.img_url)}
        alt={animal.name}
      />
      <h2 className={styles.animalName}>{animal.name}</h2>
      <p className={styles.animalDesc}>{shortDesc}</p>
      <p className={styles.animalInfo}>
        <strong>Diet:</strong> {animal.diet}
      </p>
      <p className={styles.animalInfo}>
        <strong>Group:</strong>{" "}
        <Link className={styles.categoryLink} to={`/${animal.category.toLowerCase()}`}>
          {animal.category}
        </Link>
      </p>
      <button onClick={onReadMore} className={styles.readMoreBtn}>
        Read More
      </button>
    </div>
  );
};

export default AnimalCard;