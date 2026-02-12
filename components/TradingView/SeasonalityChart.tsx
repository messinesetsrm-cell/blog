'use client';

import React, { useEffect } from 'react';

declare global {
    interface Window {
        TradingView: any;
    }
}

interface SeasonalityChartProps {
    symbol?: string;
}

export default function SeasonalityChart({ symbol = "FOREXCOM:SPX500" }: SeasonalityChartProps) {
    useEffect(() => {
        const scriptId = 'tradingview-tv-script';
        let script = document.getElementById(scriptId) as HTMLScriptElement;

        const initWidget = () => {
            if (window.TradingView) {
                new window.TradingView.widget({
                    "width": "100%",
                    "height": 600,
                    "symbol": symbol,
                    "interval": "D",
                    "timezone": "Etc/UTC",
                    "theme": "dark",
                    "style": "2",
                    "locale": "it",
                    "enable_publishing": false,
                    "hide_top_toolbar": true,
                    "hide_legend": false,
                    "save_image": false,
                    "container_id": "tv_seasonality_chart",
                    "studies": [
                        {
                            "id": "STD;Seasonality",
                            "forceOverlay": true // Try to force overlay to avoid multi-pane issues
                        }
                    ]
                });
            }
        };

        if (!script) {
            script = document.createElement('script');
            script.id = scriptId;
            script.src = 'https://s3.tradingview.com/tv.js';
            script.async = true;
            script.onload = initWidget;
            document.head.appendChild(script);
        } else {
            initWidget();
        }

        return () => {
            // No easy cleanup for tv.js instances but it's acceptable for now
        };
    }, [symbol]);

    return (
        <div id="tv_seasonality_chart" style={{ height: '600px', width: '100%' }}></div>
    );
}
