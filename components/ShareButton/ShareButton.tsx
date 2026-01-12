'use client';

import React, { useState } from 'react';

export default function ShareButton({ title, text, url }: { title: string, text: string, url: string }) {
    const [copied, setCopied] = useState(false);

    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title,
                    text,
                    url,
                });
            } catch (err) {
                console.error('Error sharing:', err);
            }
        } else {
            try {
                await navigator.clipboard.writeText(url);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            } catch (err) {
                console.error('Failed to copy:', err);
            }
        }
    };

    return (
        <button
            onClick={handleShare}
            style={{
                background: 'transparent',
                border: '1px solid hsl(var(--text-secondary))',
                color: 'hsl(var(--text-secondary))',
                padding: '0.5rem 1rem',
                borderRadius: 'var(--radius-sm)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.9rem',
                marginTop: '1rem',
                transition: 'all 0.2s ease',
            }}
            onMouseOver={(e) => {
                e.currentTarget.style.borderColor = 'hsl(var(--accent-color))';
                e.currentTarget.style.color = 'hsl(var(--accent-color))';
            }}
            onMouseOut={(e) => {
                e.currentTarget.style.borderColor = 'hsl(var(--text-secondary))';
                e.currentTarget.style.color = 'hsl(var(--text-secondary))';
            }}
        >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="18" cy="5" r="3"></circle>
                <circle cx="6" cy="12" r="3"></circle>
                <circle cx="18" cy="19" r="3"></circle>
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
            </svg>
            {copied ? 'Link Copied!' : 'Share'}
        </button>
    );
}
