import type { Metadata } from 'next';
import ArticleContent from './Article';

export const metadata: Metadata = {
    title: "ETF Covered Call: La Strategia per Generare Rendite nel Mercato Odierno | Messinese.work",
    description: "Scopri come funzionano gli ETF Covered Call, le strategie Buy-Write e come possono generare rendite costanti in mercati laterali o incerti.",
    keywords: ["ETF", "Covered Call", "Buy-Write", "Rendite", "Educazione Finanziaria", "Dividendi"],
    openGraph: {
        title: "ETF Covered Call: La Strategia per Generare Rendite nel Mercato Odierno | Messinese.work",
        description: "Scopri come funzionano gli ETF Covered Call, le strategie Buy-Write e come possono generare rendite costanti in mercati laterali o incerti.",
        images: ["/images/il-cuore-nella-testa.jpg"],
    },
    twitter: {
        card: "summary_large_image",
        title: "ETF Covered Call: La Strategia per Generare Rendite nel Mercato Odierno | Messinese.work",
        description: "Scopri come funzionano gli ETF Covered Call, le strategie Buy-Write e come possono generare rendite costanti in mercati laterali o incerti.",
        images: ["/images/il-cuore-nella-testa.jpg"],
    },
};

export default function BlogPost() {
    return <ArticleContent />;
}
