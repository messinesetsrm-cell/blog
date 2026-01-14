'use client';

import React, { useEffect, useRef } from 'react';

interface MiniChartProps {
    symbol: string;
    title: string;
}

export default function MiniChart({ symbol, title }: MiniChartProps) {
    const container = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!container.current) return;

        const script = document.createElement("script");
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js";
        script.type = "text/javascript";
        script.async = true;
        script.innerHTML = JSON.stringify({
            "symbol": symbol,
            "width": "100%",
            "height": "100%",
            "locale": "it",
            "dateRange": "12M",
            "colorTheme": "dark",
            "isTransparent": true,
            "autosize": true,
            "largeChartUrl": ""
        });

        container.current.appendChild(script);

        return () => {
            if (container.current) {
                container.current.innerHTML = '';
            }
        };
    }, [symbol]);

    return (
        <div className="tradingview-widget-container" ref={container} style={{ height: '220px', width: '100%' }}>
            <div className="tradingview-widget-container__widget"></div>
        </div>
    );
}
