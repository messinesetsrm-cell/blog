import type { Metadata } from 'next';
import ArticleContent from './Article';

export const metadata: Metadata = {
    title: 'Shock Petroliferi e Mercati Finanziari: Cosa Insegna la Storia agli Investitori | Messinese.work',
    description: "Contrariamente alla percezione comune, un'impennata del prezzo del petrolio non è necessariamente una condanna per il portafoglio. Scopriamo l'impatto reale sui mercati.",
    keywords: ["Investimenti", "Shock Petroliferi", "Mercati Finanziari", "Geopolitica", "VIX", "S&P 500", "Educazione Finanziaria"],
    openGraph: {
        title: 'Shock Petroliferi e Mercati Finanziari: Cosa Insegna la Storia',
        description: "Contrariamente alla percezione comune, un'impennata del prezzo del petrolio non è necessariamente una condanna per il portafoglio.",
        images: ["/images/shock_petroliferi.png"],
    },
    twitter: {
        card: "summary_large_image",
        title: 'Shock Petroliferi e Mercati Finanziari',
        description: "Analizzando i dati degli ultimi 40 anni, emerge una realtà controintuitiva: i mercati azionari tendono a reagire con una resilienza sorprendente agli shock del greggio.",
        images: ["/images/shock_petroliferi.png"],
    },
};

export default function BlogPost() {
    return <ArticleContent />;
}
