import React from 'react';
import nl2br from 'react-nl2br';
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
        <li key={h.id}>
          {h.yearFrom}
          {h.yearTo && `-${h.yearTo}`}: {nl2br(h.description.join('\n'))}
        </li>
      ))}
    </ul>
  </section>
);

export default Histories;
