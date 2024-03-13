import React from 'react';
import { HeaderNav } from './HeaderNav';
import styles from '../styles/HeaderMine.module.css'

export const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Sara Connor Fanpage</h1>
      <HeaderNav />
    </header>
  );
};

