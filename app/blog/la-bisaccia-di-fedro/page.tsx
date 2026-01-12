import type { Metadata } from 'next';
import ArticleContent from './Article';

export const metadata: Metadata = {
    title: "La Bisaccia di Fedro e la Gravità dell'Ipocrisia | Dalle radici alla gravità zero",
    description: "Un'analisi senza tempo della natura umana, tra l'antica saggezza di Fedro e le moderne sfide dell'autocritica nell'era digitale.",
};

export default function BlogPost() {
    return <ArticleContent />;
}
