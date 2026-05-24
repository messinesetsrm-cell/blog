import type { Metadata } from 'next';
import ArticleContent from './Article';

export const metadata: Metadata = {
    title: "Inflazione e mercati: lo scenario che nessuno vuole ma tutti stanno iniziando a prezzare | Messinese.work",
    description: "Fino a qualche settimana fa sembrava uno scenario di coda, una possibilità remota. Oggi l'inflazione è tornata al centro della scena, e con lei il fantasma di nuovi rialzi dei tassi.",
    keywords: ["Inflazione", "Mercati Finanziari", "Tassi d'interesse", "BCE", "Fed", "Stagflazione", "Petrolio", "Stretto di Hormuz", "Investimenti"],
    openGraph: {
        title: "Inflazione e mercati: lo scenario che nessuno vuole ma tutti stanno iniziando a prezzare",
        description: "L'inflazione è tornata al centro della scena, e con lei il fantasma di nuovi rialzi dei tassi. Cosa sta succedendo?",
        images: ["/images/inflazione_mercati_scenario.png"],
    },
    twitter: {
        card: "summary_large_image",
        title: "Inflazione e mercati",
        description: "L'inflazione è tornata al centro della scena, e con lei il fantasma di nuovi rialzi dei tassi.",
        images: ["/images/inflazione_mercati_scenario.png"],
    },
};

export default function BlogPost() {
    return <ArticleContent />;
}
