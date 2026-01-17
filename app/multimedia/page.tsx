import React from 'react';
import Image from 'next/image';
import styles from './multimedia.module.css';

export default function Multimedia() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>Multimedia</h1>
                <p className={styles.subtitle}>Visuals, sounds, and stories.</p>
            </header>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Featured Video</h2>
                <div className={`${styles.videoContainer} glass floating`}>
                    <video
                        className={styles.videoElement}
                        controls
                        poster="/images/oscillating-planets.png"
                    >
                        <source src="/videos/Esiste_una_forza_.mp4" type="video/mp4" />
                        Il tuo browser non supporta il tag video.
                    </video>
                </div>
                <p style={{ textAlign: 'center', marginTop: '1rem', color: 'hsl(var(--text-secondary))', fontStyle: 'italic' }}>
                    "Esiste una forza..." - Transmission incoming.
                </p>
            </section>

            <section className={styles.section} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h2 className={styles.sectionTitle}>Visual Arts</h2>
                <div className="floating" style={{
                    animationDuration: '8s',
                    borderRadius: 'var(--radius-lg)',
                    overflow: 'hidden',
                    boxShadow: '0 0 50px -10px hsla(var(--accent-color) / 0.3)'
                }}>
                    <Image
                        src="/images/oscillating-planets.png"
                        alt="Oscillating Planets"
                        width={800}
                        height={800}
                        style={{ width: '100%', maxWidth: '600px', height: 'auto', display: 'block' }}
                    />
                </div>
            </section>
        </div>
    );
}
