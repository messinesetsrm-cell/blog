'use client';

import React, { useEffect, useRef } from 'react';

interface SeasonalityChartProps {
    symbol?: string;
}

export default function SeasonalityChart({ symbol = "FOREXCOM:SPX500" }: SeasonalityChartProps) {
    const container = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!container.current) return;

        const script = document.createElement("script");
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
        script.type = "text/javascript";
        script.async = true;
        script.innerHTML = JSON.stringify({
            "autosize": true,
            "symbol": symbol,
            "interval": "D",
            "timezone": "Etc/UTC",
            "theme": "dark",
            "style": "2", // 2 is for "Line" chart which looks cleaner for seasonality
            "locale": "it",
            "enable_publishing": false,
            "hide_top_toolbar": true,
            "allow_symbol_change": true,
            "container_id": "tradingview_seasonality",
            "studies": [
                "STD;Seasonality"
            ],
            "show_popup_button": true,
            "popup_width": "1000",
            "popup_height": "650",
            "support_host": "https://www.tradingview.com"
        });

        container.current.appendChild(script);

        return () => {
            if (container.current) {
                container.current.innerHTML = '';
            }
        };
    }, [symbol]);

    return (
        <div className="tradingview-widget-container" ref={container} style={{ height: '500px', width: '100%' }}>
            <div id="tradingview_seasonality" style={{ height: '100%', width: '100%' }}></div>
        </div>
    );
}
