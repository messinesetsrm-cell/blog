import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p>&copy; {new Date().getFullYear()} Messinese Salvatore. Dalle radici alla gravità zero.</p>
            <div className={styles.links}>
                <Link href="/privacy" className={styles.link}>Privacy Policy</Link>
                <Link href="/terms" className={styles.link}>Termini di Servizio</Link>
                <Link href="/about" className={styles.link}>Chi Sono</Link>

                <a href="https://www.instagram.com/mess_salvo/" target="_blank" rel="noopener noreferrer" className={styles.link}>Instagram</a>
            </div>
        </footer>
    );
}
