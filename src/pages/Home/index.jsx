import { useState } from "react";
import { motion } from "framer-motion";
import { animalsData } from "../../data/data.js";
import AnimalCard from "../../components/AnimalCard";
import AnimalDetail from "../../components/AnimalDetail";
import Sidebar from "../../components/Sidebar";
import { getImageUrl } from "../../utils/function.js";
import styles from "./home.module.css";

const Home = () => {
  const [activeAnimal, setActiveAnimal] = useState(null);
  const [showDetail, setShowDetail] = useState(false);

  const handleAnimalClick = (animal) => {
    setActiveAnimal((prev) => (prev?.name === animal.name ? null : animal));
    setShowDetail(false);
  };

  // Handler for Read Less button
  const handleReadLess = () => {
    setShowDetail(false);
  };

  // Images
  const MainBg = getImageUrl("panda.jpg");
  const SecondaryBg = getImageUrl("zeebra.jpg");
  const ThirdBg = getImageUrl("lionmammal.jpg");

  return (
    <>
      <div className={styles.homeLayout}>
        <Sidebar
          animals={animalsData}
          onAnimalClick={handleAnimalClick}
          activeAnimal={activeAnimal}
        />

        <section className={styles.mainContent}>
          {!activeAnimal ? (
            <motion.div
              className={styles.hero}
              style={{
                backgroundImage: `url(${MainBg})`,
              }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className={styles.heroTitle}>Welcome to the Australia Zoo</h1>
              <p className={styles.heroSubtitle}>
                Discover the unique wildlife of Australia. Plan your adventure today!
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={styles.ctaButton}
              >
                Explore Animals
              </motion.button>
            </motion.div>
          ) : (
            <>
              <AnimalCard
                animal={activeAnimal}
                onReadMore={() => setShowDetail(true)}
                onClose={() => setActiveAnimal(null)}
              />
              {showDetail && (
                <AnimalDetail
                  animal={activeAnimal}
                  onClose={() => {
                    setShowDetail(false);
                    setActiveAnimal(null);
                  }}
                  onReadLess={handleReadLess}  // <-- pass the onReadLess handler 
                />
              )}
            </>
          )}
        </section>
      </div>

      {/* Container for side-by-side sections */}
      <div className={styles.sideBySideSections}>
        {/* Section 1 */}
        <motion.section
          className={styles.infoSection}
          style={{
            backgroundImage: `url(${SecondaryBg})`,
          }}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          <h2>Our Mission</h2>
          <p>
            We are dedicated to protecting wildlife and inspiring people to care about nature.
            Join us in making a difference.
          </p>
        </motion.section>

        {/* Section 2  */}
        <motion.section
          className={styles.infoSection}
          style={{
            backgroundImage: `url(${ThirdBg})`,
          }}
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          <h2>Why Visit Us?</h2>
          <p>
            From iconic kangaroos to cuddly koalas, explore the vibrant life of Australian wildlife in one place.
          </p>
        </motion.section>
      </div>
    </>
  );
};

export default Home;