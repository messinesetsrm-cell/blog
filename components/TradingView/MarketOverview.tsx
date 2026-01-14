'use client';

import React, { useEffect, useRef } from 'react';

export default function MarketOverview() {
    const container = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!container.current) return;

        const script = document.createElement("script");
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js";
        script.type = "text/javascript";
        script.async = true;
        script.innerHTML = JSON.stringify({
            "colorTheme": "dark",
            "dateRange": "12M",
            "showChart": true,
            "locale": "it",
            "width": "100%",
            "height": "100%",
            "largeChartUrl": "",
            "isTransparent": true,
            "showSymbolLogo": true,
            "showFloatingTooltip": true,
            "tabs": [
                {
                    "title": "Indici",
                    "symbols": [
                        { "s": "FOREXCOM:SPX500", "d": "S&P 500" },
                        { "s": "FOREXCOM:NSXUSD", "d": "Nasdaq 100" },
                        { "s": "FOREXCOM:DJI", "d": "Dow 30" },
                        { "s": "INDEX:NKY", "d": "Nikkei 225" },
                        { "s": "INDEX:DEU40", "d": "DAX 40" }
                    ]
                },
                {
                    "title": "Crypto",
                    "symbols": [
                        { "s": "BITSTAMP:BTCUSD", "d": "Bitcoin" },
                        { "s": "BITSTAMP:ETHUSD", "d": "Ethereum" },
                        { "s": "BINANCE:SOLUSDT", "d": "Solana" },
                        { "s": "BINANCE:BNBUSDT", "d": "Binance Coin" }
                    ]
                },
                {
                    "title": "Valute",
                    "symbols": [
                        { "s": "FX_IDC:EURUSD", "d": "EUR/USD" },
                        { "s": "FX_IDC:GBPUSD", "d": "GBP/USD" },
                        { "s": "FX_IDC:USDJPY", "d": "USD/JPY" }
                    ]
                }
            ]
        });

        container.current.appendChild(script);

        return () => {
            if (container.current) {
                container.current.innerHTML = '';
            }
        };
    }, []);

    return (
        <div className="tradingview-widget-container" ref={container} style={{ height: '600px', width: '100%' }}>
            <div className="tradingview-widget-container__widget"></div>
        </div>
    );
}
