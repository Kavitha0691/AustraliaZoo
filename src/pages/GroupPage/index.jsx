import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { animalsData, categoryInfo, defaultCategoryInfo } from "../../data/data";
import Sidebar from "../../components/Sidebar";
import AnimalCard from "../../components/AnimalCard";
import AnimalDetail from "../../components/AnimalDetail";
import { getImageUrl } from "../../utils/function.js";
import styles from "./groupPage.module.css";
import Slideshow from "../../components/Slideshow/index.jsx";

const GroupPage = () => {
  const { category } = useParams();

  const [selectedAnimal, setSelectedAnimal] = useState(null);
  const [showCardDetail, setShowCardDetail] = useState(false);
  const [showBigDescription, setShowBigDescription] = useState(false);

  const normalizedCategory = category.toLowerCase();

  useEffect(() => {
    setSelectedAnimal(null);
    setShowCardDetail(false);
    setShowBigDescription(false);
  }, [normalizedCategory]);

  const groupAnimals = animalsData.filter(
    (a) => a.category.toLowerCase() === normalizedCategory
  );

  const { welcomeMessage, description, bgImage, title } =
    categoryInfo[normalizedCategory] || defaultCategoryInfo;

  const backgroundUrl = getImageUrl(bgImage);

  const handleAnimalClick = (animal) => {
    if (selectedAnimal?.name === animal.name) {
      // Deselect if clicked again
      setSelectedAnimal(null);
      setShowCardDetail(false);
      setShowBigDescription(false);
    } else {
      setSelectedAnimal(animal);
      setShowCardDetail(true);
      setShowBigDescription(false);
    }
  };

  return (
    <div className={styles.groupLayout}>
      {!showBigDescription && (
        <div className={styles.rowLayout}>
          <Sidebar
            animals={groupAnimals}
            onAnimalClick={handleAnimalClick}
            activeAnimal={selectedAnimal}
          />

          <main className={styles.mainContent}>
            {!selectedAnimal && (
              <motion.section
                className={styles.heroSection}
                style={{ backgroundImage: `url(${backgroundUrl})` }}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <h1 className={styles.heroTitle}>{title}</h1>
                <h2 className={styles.heroMessage}>{welcomeMessage}</h2>
                <p className={styles.heroDescription}>{description}</p>
              </motion.section>
            )}

            {selectedAnimal && showCardDetail && (
              <AnimalCard
                animal={selectedAnimal}
                onReadMore={() => setShowBigDescription(true)}
                onClose={() => {
                  setSelectedAnimal(null);
                  setShowCardDetail(false);
                }}
              />
            )}
          </main>
        </div>
      )}

      {!showBigDescription && <Slideshow category={normalizedCategory} />}

      {selectedAnimal && showBigDescription && (
        <AnimalDetail
          animal={selectedAnimal}
          onClose={() => {
            setSelectedAnimal(null);
            setShowBigDescription(false);
          }}
          onReadLess={() => setShowBigDescription(false)}
        />
      )}
    </div>
  );
};

export default GroupPage;