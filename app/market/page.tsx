'use client';

import React from 'react';
import styles from './market.module.css';
import TickerTape from '@/components/TradingView/TickerTape';
import MarketOverview from '@/components/TradingView/MarketOverview';
import MiniChart from '@/components/TradingView/MiniChart';
import SeasonalityChart from '@/components/TradingView/SeasonalityChart';

export default function Market() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>Pulse of the Market</h1>
                <p className={styles.subtitle}>Real-time global financial insights.</p>
            </header>

            <TickerTape />

            <div className={styles.topCharts}>
                <div className={`${styles.card} glass`}>
                    <MiniChart symbol="BITSTAMP:BTCUSD" title="Bitcoin" />
                </div>
                <div className={`${styles.card} glass`}>
                    <MiniChart symbol="FOREXCOM:SPX500" title="S&P 500" />
                </div>
                <div className={`${styles.card} glass`}>
                    <MiniChart symbol="OANDA:XAUUSD" title="Gold" />
                </div>
            </div>

            <div className={styles.mainOverview}>
                <div className={`${styles.card} glass`} style={{ height: '700px', padding: '1rem' }}>
                    <MarketOverview />
                </div>
            </div>

            <div className={styles.mainOverview} style={{ marginTop: '2rem' }}>
                <header className={styles.header} style={{ textAlign: 'left', marginBottom: '1rem' }}>
                    <h2 className={styles.title} style={{ fontSize: '1.5rem' }}>Stagionalità</h2>
                    <p className={styles.subtitle}>Visualizza le variazioni di valore di un simbolo negli anni precedenti per identificare tendenze ricorrenti.</p>
                </header>
                <div className={`${styles.card} glass`} style={{ height: '600px', padding: '1rem' }}>
                    <SeasonalityChart symbol="FOREXCOM:SPX500" />
                </div>
            </div>
        </div>
    );
}

