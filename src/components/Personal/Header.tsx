import React from 'react';
import { SNS as SNSType } from '../../interfaces/types';
import styles from './Header.module.css';
import SNS from './SNS';

interface Props {
  sns: SNSType[];
}

const Header: React.FC<Props> = ({ sns }) => (
  <header className={styles.container}>
    <h1>Portfolio</h1>
    <span>Living in Tokyo, Japan. Making a living from engineering.</span>
    <SNS menus={sns} />
  </header>
);

export default Header;
