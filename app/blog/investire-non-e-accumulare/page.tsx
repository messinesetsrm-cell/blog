import type { Metadata } from 'next';
import ArticleContent from './Article';

export const metadata: Metadata = {
    title: 'Investire non è accumulare: è progettare la vita che vuoi davvero | Messinese.work',
    description: "Investire significa costruire i mattoni della vita che desideri. Non si tratta di quanto denaro hai nel portafoglio oggi, ma di quale libertà vuoi garantirti domani.",
    keywords: ["Investimenti", "Pianificazione Finanziaria", "Obiettivi", "Risparmio", "Educazione Finanziaria"],
    openGraph: {
        title: 'Investire non è accumulare: è progettare la vita che vuoi davvero',
        description: "Investire significa costruire i mattoni della vita che desideri. Non si tratta di quanto denaro hai nel portafoglio oggi, ma di quale libertà vuoi garantirti domani.",
        images: ["/images/investire_non_e_accumulare.png"],
    },
    twitter: {
        card: "summary_large_image",
        title: 'Investire non è accumulare',
        description: "Il denaro come mezzo, non come fine. Il segreto di una strategia finanziaria efficace sta nel ribaltare la prospettiva.",
        images: ["/images/investire_non_e_accumulare.png"],
    },
};

export default function BlogPost() {
    return <ArticleContent />;
}
