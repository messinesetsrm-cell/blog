'use client';

import React, { useState } from 'react';
import styles from './suggest.module.css';

export default function Suggest() {
    const [status, setStatus] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [formData, setFormData] = useState({
        name: '',
        type: 'Blog Topic',
        suggestion: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sent');
        setTimeout(() => setStatus(''), 3000);
        setFormData({ name: '', type: 'Blog Topic', suggestion: '' });
        alert('Grazie per il tuo suggerimento! Lo abbiamo ricevuto nel cloud.');
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
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
                    <input
                        type="text"
                        id="name"
                        className={styles.input}
                        required
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>

                <div className={styles.group}>
                    <label htmlFor="type" className={styles.label}>Content Type</label>
                    <div style={{ position: 'relative' }}>
                        <select
                            id="type"
                            className={styles.input}
                            style={{ appearance: 'none' }}
                            value={formData.type}
                            onChange={handleChange}
                        >
                            <option>Blog Topic</option>
                            <option>Multimedia</option>
                            <option>Market Asset</option>
                            <option>Other</option>
                        </select>
                    </div>
                </div>

                <div className={styles.group}>
                    <label htmlFor="suggestion" className={styles.label}>Suggestion</label>
                    <textarea
                        id="suggestion"
                        className={styles.textarea}
                        required
                        placeholder="What should we explore next?"
                        value={formData.suggestion}
                        onChange={handleChange}
                    ></textarea>
                </div>

                <button type="submit" className={styles.button} disabled={status === 'sending'}>
                    {status === 'sending' ? 'Transmitting...' :
                        status === 'sent' ? 'Received in Zero-G' :
                            status === 'error' ? 'Transmission Failed' : 'Send to Ether'}
                </button>

                {status === 'error' && (
                    <p style={{ color: '#ff4444', marginTop: '1rem', fontSize: '0.9rem', textAlign: 'center' }}>
                        {errorMessage}
                    </p>
                )}
            </form>
        </div>
    );
}
