import React from 'react';
import styles from './Introduction.module.css';

const Introduction: React.FC = () => (
  <section className={styles.container}>
    <p className={styles.profile} />
    <div>
      <h2>About me</h2>
      <div className={styles.detail}>
        <span>Name: Takahito Kuriyama</span>
        <span>Nationality: Japan</span>
        <span>Gender: Man</span>
        <span>Birthday: 09/09/1992(28age)</span>
        <span>Education: University of Aizu (会津大学)</span>
      </div>
    </div>
  </section>
);

export default Introduction;
