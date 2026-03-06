import type { Metadata } from 'next';
import ArticleContent from './Article';

export const metadata: Metadata = {
    title: "Febbraio 2026: Tempesta Perfetta sui Mercati | Antigravity",
    description: "Analisi del sell-off di febbraio 2026: Amazon, Bitcoin e il ruolo della paura nei mercati finanziari.",

    openGraph: {
        title: "Febbraio 2026: Tempesta Perfetta sui Mercati | Antigravity",
        description: "Analisi del sell-off di febbraio 2026: Amazon, Bitcoin e il ruolo della paura nei mercati finanziari.",
        images: ["/images/il-cuore-nella-testa.jpg"],
    },
    twitter: {
        card: "summary_large_image",
        title: "Febbraio 2026: Tempesta Perfetta sui Mercati | Antigravity",
        description: "Analisi del sell-off di febbraio 2026: Amazon, Bitcoin e il ruolo della paura nei mercati finanziari.",
        images: ["/images/il-cuore-nella-testa.jpg"],
    },
};

export default function BlogPost() {
    return <ArticleContent />;
}
