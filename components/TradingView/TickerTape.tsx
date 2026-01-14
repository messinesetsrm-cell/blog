'use client';

import React, { useEffect, useRef } from 'react';

export default function TickerTape() {
    const container = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!container.current) return;

        const script = document.createElement("script");
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
        script.type = "text/javascript";
        script.async = true;
        script.innerHTML = JSON.stringify({
            "symbols": [
                { "proName": "FOREXCOM:SPX500", "description": "S&P 500" },
                { "proName": "BITSTAMP:BTCUSD", "description": "Bitcoin" },
                { "proName": "BITSTAMP:ETHUSD", "description": "Ethereum" },
                { "proName": "FX_IDC:EURUSD", "description": "EUR/USD" },
                { "proName": "OANDA:XAUUSD", "description": "Gold" },
                { "proName": "OANDA:XAGUSD", "description": "Silver" }
            ],
            "showSymbolLogo": true,
            "colorTheme": "dark",
            "isTransparent": true,
            "displayMode": "adaptive",
            "locale": "it"
        });

        container.current.appendChild(script);

        return () => {
            if (container.current) {
                container.current.innerHTML = '';
            }
        };
    }, []);

    return (
        <div className="tradingview-widget-container" ref={container} style={{ marginBottom: '2rem' }}>
            <div className="tradingview-widget-container__widget"></div>
        </div>
    );
}
