'use client';

import React, { useState, useEffect } from 'react';
import styles from './market.module.css';

interface Asset {
    id: string;
    symbol: string;
    name: string;
    price: number;
    change: number;
}

const initialAssets: Asset[] = [
    { id: '1', symbol: 'SPX', name: 'S&P 500', price: 4783.45, change: 1.25 },
    { id: '2', symbol: 'BTC', name: 'Bitcoin', price: 95432.50, change: 2.4 },
    { id: '3', symbol: 'EUR/USD', name: 'Euro / US Dollar', price: 1.0845, change: -0.15 },
];

export default function Market() {
    const [assets, setAssets] = useState<Asset[]>(initialAssets);

    useEffect(() => {
        const interval = setInterval(() => {
            setAssets(currentAssets =>
                currentAssets.map(asset => {
                    const volatility = 0.002; // 0.2% max change per tick
                    const changePercent = (Math.random() * volatility * 2) - volatility;
                    const newPrice = asset.price * (1 + changePercent);

                    return {
                        ...asset,
                        price: newPrice,
                        change: asset.change + (changePercent * 100) // Accumulate change for demo
                    };
                })
            );
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>Market Data</h1>
                <p className={styles.subtitle}>Real-time pulse of the global economy.</p>
            </header>

            <div className={styles.grid}>
                {assets.map((asset) => (
                    <div key={asset.id} className={`${styles.card} glass`}>
                        <div>
                            <h3 className={styles.symbol}>{asset.symbol}</h3>
                            <p className={styles.name}>{asset.name}</p>
                        </div>

                        <div className={styles.priceContainer}>
                            <span className={styles.price}>
                                {asset.price.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 })}
                            </span>
                            <span className={`${styles.change} ${asset.change >= 0 ? styles.positive : styles.negative}`}>
                                {asset.change >= 0 ? '+' : ''}{asset.change.toFixed(2)}%
                            </span>
                        </div>

                        <div className={styles.chart} style={{ color: asset.change >= 0 ? '#10b981' : '#ef4444' }}></div>
                    </div>
                ))}
            </div>
        </div>
    );
}
