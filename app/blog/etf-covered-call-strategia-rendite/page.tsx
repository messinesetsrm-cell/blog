import type { Metadata } from 'next';
import ArticleContent from './Article';

export const metadata: Metadata = {
    title: "ETF Covered Call: La Strategia per Generare Rendite nel Mercato Odierno | Messinese.work",
    description: "Scopri come funzionano gli ETF Covered Call, le strategie Buy-Write e come possono generare rendite costanti in mercati laterali o incerti.",
    keywords: ["ETF", "Covered Call", "Buy-Write", "Rendite", "Educazione Finanziaria", "Dividendi"],
};

export default function BlogPost() {
    return <ArticleContent />;
}
