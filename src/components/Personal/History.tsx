import React from 'react';
import styles from './History.module.css';

const History: React.FC = () => (
  <section className={styles.container}>
    <h2>History</h2>
    <ul>
      <li>2011: 会津大学に入学、プログラマーのアルバイトを始める</li>
      <li>2015: 同大学を卒業し、アルバイト先に入社</li>
      <li>2016-2017: エアークロゼットに中途入社</li>
      <li>2017-19: オランダへ移住し、WEB・インフラエンジニアとして従事</li>
      <li>2020: (仮)日本に帰国しフリーランスエンジニアとして活動を開始</li>
    </ul>
  </section>
);

export default History;
