'use client';

import React, { useState } from 'react';
import styles from './suggest.module.css';

export default function Suggest() {
    const [status, setStatus] = useState<string>('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');
        // Simulate API call
        setTimeout(() => {
            setStatus('sent');
        }, 1500);
    };

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>Suggest Content</h1>
                <p className={styles.subtitle}>Help us shape the antigravity stream.</p>
            </header>

            <form className={`${styles.form} glass`} onSubmit={handleSubmit}>
                <div className={styles.group}>
                    <label htmlFor="name" className={styles.label}>Name</label>
                    <input type="text" id="name" className={styles.input} required placeholder="Your name" />
                </div>

                <div className={styles.group}>
                    <label htmlFor="type" className={styles.label}>Content Type</label>
                    <select id="type" className={styles.input} style={{ appearance: 'none' }}>
                        <option>Blog Topic</option>
                        <option>Multimedia</option>
                        <option>Market Asset</option>
                        <option>Other</option>
                    </select>
                </div>

                <div className={styles.group}>
                    <label htmlFor="suggestion" className={styles.label}>Suggestion</label>
                    <textarea id="suggestion" className={styles.textarea} required placeholder="What should we explore next?"></textarea>
                </div>

                <button type="submit" className={styles.button}>
                    {status === 'sending' ? 'Transmitting...' : status === 'sent' ? 'Received in Zero-G' : 'Send to Ether'}
                </button>
            </form>
        </div>
    );
}
