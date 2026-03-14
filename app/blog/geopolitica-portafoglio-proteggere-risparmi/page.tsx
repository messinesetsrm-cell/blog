import type { Metadata } from 'next';
import ArticleContent from './Article';

export const metadata: Metadata = {
    title: "Geopolitica e Portafoglio: Come Proteggere i Risparmi Quando il Mondo Trema | Antigravity",
    description: "Scopri come proteggere i tuoi risparmi e navigare la volatilità dei mercati durante le crisi geopolitiche.",

    openGraph: {
        title: "Geopolitica e Portafoglio | Antigravity",
        description: "Scopri come proteggere i tuoi risparmi e navigare la volatilità dei mercati durante le crisi geopolitiche.",
        images: ["/images/logo.png"],
    },
    twitter: {
        card: "summary_large_image",
        title: "Geopolitica e Portafoglio | Antigravity",
        description: "Scopri come proteggere i tuoi risparmi e navigare la volatilità dei mercati durante le crisi geopolitiche.",
        images: ["/images/logo.png"],
    },
};

export default function BlogPost() {
    return <ArticleContent />;
}
