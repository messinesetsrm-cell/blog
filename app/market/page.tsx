'use client';

import React from 'react';
import styles from './market.module.css';
import TickerTape from '@/components/TradingView/TickerTape';
import MarketOverview from '@/components/TradingView/MarketOverview';
import MiniChart from '@/components/TradingView/MiniChart';

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
        </div>
    );
}

