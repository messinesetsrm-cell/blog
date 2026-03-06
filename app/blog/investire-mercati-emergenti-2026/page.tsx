import type { Metadata } from 'next';
import ArticleContent from './Article';

export const metadata: Metadata = {
    title: "Investire nei Mercati Emergenti nel 2026: Opportunità Reale o Trappola? | Antigravity",
    description: "Analizziamo insieme se vale la pena esporsi ai mercati emergenti nel 2026 o se il rischio è superiore al beneficio. Dati, TSMC e mindset dell'investitore.",

    openGraph: {
        title: "Investire nei Mercati Emergenti nel 2026: Opportunità Reale o Trappola? | Antigravity",
        description: "Analizziamo insieme se vale la pena esporsi ai mercati emergenti nel 2026 o se il rischio è superiore al beneficio. Dati, TSMC e mindset dell'investitore.",
        images: ["/images/il-cuore-nella-testa.jpg"],
    },
    twitter: {
        card: "summary_large_image",
        title: "Investire nei Mercati Emergenti nel 2026: Opportunità Reale o Trappola? | Antigravity",
        description: "Analizziamo insieme se vale la pena esporsi ai mercati emergenti nel 2026 o se il rischio è superiore al beneficio. Dati, TSMC e mindset dell'investitore.",
        images: ["/images/il-cuore-nella-testa.jpg"],
    },
};

export default function BlogPost() {
    return <ArticleContent />;
}
