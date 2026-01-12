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

            <section className={styles.section} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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
                <p style={{ marginTop: '2rem', color: 'hsl(var(--text-secondary))', fontStyle: 'italic' }}>
                    Transmission incoming...
                </p>
            </section>
        </div>
    );
}
