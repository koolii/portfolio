import React from 'react';
import { SNS as SNSType } from '../../interfaces/types';
import styles from './Footer.module.css';
import SNS from './SNS';

interface Props {
  sns: SNSType[];
}

const Footer: React.FC<Props> = ({ sns }) => (
  <footer className={styles.footer}>
    <h2>Contact</h2>
    <div>主にメール・Twitter・Facebookですと気づきやすいです。</div>
    <div>
      <b>koolii0909アットgmail.com</b>
    </div>
    <SNS menus={sns} />
    <div className={styles.copyright}>
      © 2021 - Copyright Takahito Kuriyama, All Rights Reserved.
    </div>
  </footer>
);

export default Footer;
