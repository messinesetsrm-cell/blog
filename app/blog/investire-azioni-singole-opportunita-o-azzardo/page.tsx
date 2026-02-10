import type { Metadata } from 'next';
import ArticleContent from './Article';

export const metadata: Metadata = {
    title: "Investire in azioni singole: Opportunità reale o azzardo per pochi? | Antigravity",
    description: "Un'analisi approfondita sullo stock picking, il vantaggio dell'investitore privato e la gestione dell'incertezza nei mercati moderni.",
};

export default function BlogPost() {
    return <ArticleContent />;
}
