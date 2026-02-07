'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './about.module.css';

export default function About() {
    const [lang, setLang] = useState<'it' | 'en'>('it');

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '2rem' }}>
                    <button
                        onClick={() => setLang('it')}
                        style={{
                            background: lang === 'it' ? 'hsl(var(--accent-color))' : 'transparent',
                            color: lang === 'it' ? 'white' : 'hsl(var(--text-secondary))',
                            border: '1px solid hsl(var(--accent-color))',
                            padding: '0.5rem 1rem',
                            borderRadius: 'var(--radius-sm)',
                            cursor: 'pointer',
                            fontWeight: 600,
                            transition: 'all 0.2s ease'
                        }}
                    >
                        Italiano
                    </button>
                    <button
                        onClick={() => setLang('en')}
                        style={{
                            background: lang === 'en' ? 'hsl(var(--accent-color))' : 'transparent',
                            color: lang === 'en' ? 'white' : 'hsl(var(--text-secondary))',
                            border: '1px solid hsl(var(--accent-color))',
                            padding: '0.5rem 1rem',
                            borderRadius: 'var(--radius-sm)',
                            cursor: 'pointer',
                            fontWeight: 600,
                            transition: 'all 0.2s ease'
                        }}
                    >
                        English
                    </button>
                </div>
                <h1 className={styles.title}>
                    {lang === 'it' ? 'Chi Sono' : 'About Me'}
                </h1>
            </header>

            <div className={styles.content}>
                <section className={`${styles.section} glass`}>
                    <div className={styles.profileCard}>
                        <Image
                            src="/images/profile-logo.png"
                            alt="Salvatore Messinese"
                            width={120}
                            height={120}
                            className={styles.profileImage}
                        />
                        <div>
                            <h2>Messinese Salvatore</h2>
                            <p style={{ fontWeight: 'bold', color: 'hsl(var(--text-main))' }}>
                                {lang === 'it' ? 'Creatore di Antigravity' : 'Creator of Antigravity'}
                            </p>
                        </div>
                    </div>

                    {lang === 'it' ? (
                        <>
                            <p>
                                Benvenuti su <strong>Antigravity</strong>. Questo spazio nasce dalla passione per l'intersezione tra tecnologia, finanza e narrazione visiva.
                            </p>
                            <p>
                                Il mio obiettivo è esplorare temi complessi — dai mercati globali all'educazione finanziaria, fino alla creatività digitale — cercando di offrire una prospettiva chiara e "leggera", proprio come suggerisce il nome del sito.
                            </p>
                            <p>
                                <em>"Dalle radici alla gravità zero"</em> non è solo un motto, ma un percorso: partire da basi solide (le radici) per elevarsi verso una comprensione libera da pregiudizi e pesi superflui (gravità zero).
                            </p>
                        </>
                    ) : (
                        <>
                            <p>
                                Welcome to <strong>Antigravity</strong>. This space was born from a passion for the intersection of technology, finance, and visual storytelling.
                            </p>
                            <p>
                                My goal is to explore complex topics — from global markets and financial education to digital creativity — while striving to offer a clear and "light" perspective, just as the site's name suggests.
                            </p>
                            <p>
                                <em>"From roots to zero gravity"</em> is not just a motto, but a journey: starting from solid foundations (the roots) to rise towards an understanding free from bias and unnecessary weight (zero gravity).
                            </p>
                        </>
                    )}
                </section>

                <section className={`${styles.section} glass`}>
                    <h2>{lang === 'it' ? 'La Mia Visione' : 'My Vision'}</h2>
                    {lang === 'it' ? (
                        <p>
                            Credo che l'informazione di qualità debba essere accessibile e coinvolgente. Attraverso saggi long-form, micro-pensieri e visualizzazioni di dati in tempo reale, Antigravity si propone come un hub di conoscenza per chiunque voglia comprendere meglio il mondo che ci circonda.
                        </p>
                    ) : (
                        <p>
                            I believe that quality information should be accessible and engaging. Through long-form essays, micro-thoughts, and real-time data visualizations, Antigravity aims to be a knowledge hub for anyone wishing to better understand the world around us.
                        </p>
                    )}
                </section>

                <section className={`${styles.section} glass`}>
                    <h2>{lang === 'it' ? 'Contatti' : 'Contact'}</h2>
                    {lang === 'it' ? (
                        <p>
                            Se hai suggerimenti, domande o desideri collaborare, puoi contattarmi tramite la sezione <a href="/suggest" style={{ color: 'hsl(var(--accent-color))', textDecoration: 'underline' }}>Suggest</a> del sito o seguirmi su Instagram.
                        </p>
                    ) : (
                        <p>
                            If you have suggestions, questions, or wish to collaborate, you can reach out via the <a href="/suggest" style={{ color: 'hsl(var(--accent-color))', textDecoration: 'underline' }}>Suggest</a> section of the site or follow me on Instagram.
                        </p>
                    )}
                </section>
            </div>
        </div>
    );
}
