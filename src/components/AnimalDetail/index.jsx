import { getImageUrl } from "../../utils/function.js";
import styles from "./animalDetail.module.css";

const AnimalDetail = ({ animal, onClose, onReadLess }) => {
  if (!animal) return null;

  return (
    <div className={styles.alertOverlay}>
      <div className={styles.alertBox}>
        <h2>{animal.name}</h2>
        <img
          className={styles.animalImg}
          src={getImageUrl(animal.img_url)}
          alt={animal.name}
        />
        <p>{animal.bigDescription}</p>
        <p>
          <strong>Diet:</strong> {animal.diet}
        </p>
        <p>
          <strong>Group:</strong> {animal.category}
        </p>
        <div className={styles.buttonGroup}>
          <button onClick={onReadLess} className={styles.readLessBtn}>
            Read Less
          </button>
          <button onClick={onClose} className={styles.closeBtn}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnimalDetail;