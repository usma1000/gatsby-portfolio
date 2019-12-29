import React from 'react';
import styles from './HomeHero.module.css';

const HomeHero = () => (
  <div className={styles.container}>
    <div className={styles.stars}>
      <div className={styles.titleContainer}>
        <div className={styles.titleTop}>
          <div className={styles.title}>
            De
            <span className={styles.reverse}>s</span>
            ign
          </div>
        </div>
        <div className={styles.titleBottom}>
          <div className={styles.title}>
            <span className={styles.reverse}>R</span>
            evolution
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default HomeHero;
