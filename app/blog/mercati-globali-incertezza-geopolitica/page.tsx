import type { Metadata } from 'next';
import ArticleContent from './Article';

export const metadata: Metadata = {
    title: 'Mercati globali e incertezza geopolitica: come proteggersi | Messinese.work',
    description: "Gli eventi geopolitici che stanno scuotendo lo scacchiere mondiale non sono più solo 'notizie dal mondo', ma fattori che entrano direttamente nelle nostre tasche.",
    keywords: ["Investimenti", "Mercati Globali", "Incertezza Geopolitica", "Inflazione", "Educazione Finanziaria", "Protezione", "Portafoglio"],
    openGraph: {
        title: 'Mercati globali e incertezza geopolitica: come proteggersi',
        description: "Gli eventi geopolitici che stanno scuotendo lo scacchiere mondiale non sono più solo 'notizie dal mondo', ma fattori che entrano direttamente nelle nostre tasche.",
        images: ["/images/geopolitica_incertezza.png"],
    },
    twitter: {
        card: "summary_large_image",
        title: 'Mercati globali e incertezza geopolitica',
        description: "La geopolitica è il nuovo driver economico. Come proteggere i propri traguardi e il proprio valore in tempi incerti.",
        images: ["/images/geopolitica_incertezza.png"],
    },
};

export default function BlogPost() {
    return <ArticleContent />;
}
