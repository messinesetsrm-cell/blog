import type { Metadata } from 'next';
import ArticleContent from './Article';

export const metadata: Metadata = {
    title: 'Il paradosso del "Pezzo di Carta": l’Università è diventata un Master in Resistenza? | Messinese.work',
    description: "L'università oggi serve, ma non per le ragioni che leggiamo nei bandi. È diventata una palestra per il cervello, un certificato di resilienza contro le difficoltà del lavoro.",
    keywords: ["Università", "Lavoro", "Formazione", "Resilienza", "Soft Skills", "Hard Skills"],
    openGraph: {
        title: 'Il paradosso del "Pezzo di Carta": l’Università è diventata un Master in Resistenza?',
        description: "L'università oggi serve, ma non per le ragioni che leggiamo nei bandi. È diventata una palestra per il cervello, un certificato di resilienza.",
        images: ["/images/universita_master_resistenza.png"],
    },
    twitter: {
        card: "summary_large_image",
        title: 'Il paradosso del "Pezzo di Carta"',
        description: "L'università oggi serve, ma non per le ragioni che leggiamo nei bandi. È diventata una palestra per il cervello, un certificato di resilienza.",
        images: ["/images/universita_master_resistenza.png"],
    },
};

export default function BlogPost() {
    return <ArticleContent />;
}
