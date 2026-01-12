import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p>&copy; {new Date().getFullYear()} Messinese Salvatore. Dalle radici alla gravità zero.</p>
        </footer>
    );
}
