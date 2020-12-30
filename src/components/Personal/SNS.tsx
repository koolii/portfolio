import React from 'react';
import styles from './SNS.module.css';
import { SNS } from '../../interfaces/types';

interface Props {
  menus: SNS[];
}
const SNSMenu: React.FC<Props> = ({ menus }) => (
  <ul className={styles.navigationb}>
    {menus.map((m) => (
      <a key={m.id} href={m.url}>
        <li>{m.name}</li>
      </a>
    ))}
  </ul>
);

export default SNSMenu;
