import React from 'react';
import { Experience } from '../../interfaces/types';
import styles from './Experiences.module.css';

interface Props {
  experiences: Experience[];
}

const Experiences: React.FC<Props> = ({ experiences }) => (
  <section className={styles.skill}>
    <h2>Experiences</h2>
    {experiences.map((p) => (
      <div key={p.id} className={styles.skillDiv}>
        <div className={styles.inner}>
          <h3>{p.lang}</h3>
          <div>
            {p.description.map((s) => (
              <span key={s}>{s}</span>
            ))}
          </div>
        </div>
      </div>
    ))}
  </section>
);

export default Experiences;
