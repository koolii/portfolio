import React from 'react';
import styles from './Histories.module.css';
import { History } from '../../interfaces/types';

interface Props {
  histories: History[];
}

const Histories: React.FC<Props> = ({ histories }) => (
  <section className={styles.container}>
    <h2>History</h2>
    <ul>
      {histories.map((h) => (
        <li>
          {h.yearFrom}
          {h.yearTo && `-${h.yearTo}`}: {h.description}
        </li>
      ))}
    </ul>
  </section>
);

export default Histories;
