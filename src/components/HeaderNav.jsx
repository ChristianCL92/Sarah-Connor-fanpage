import React from "react";
import styles from "../styles/HeaderNav.module.css";

export const HeaderNav = () => {
    return (
        <nav className={styles.nav}>
            <ul className={styles.navList}>
                <li className={styles.navItem}>
                    <a className={styles.navLink} href="/">John Connor</a>
                </li>
                <li className={styles.navItem}>
                    <a className={styles.navLink} href="/">The Terminator T-800</a>
                </li>
                <li className={styles.navItem}>
                    <a className={styles.navLink} href="/">Secondary characters</a>
                </li>
            </ul>
        </nav>
    );
};
