import type { Metadata } from 'next';
import ArticleContent from './Article';

export const metadata: Metadata = {
    title: "La Bisaccia di Fedro e la Gravità dell'Ipocrisia | Dalle radici alla gravità zero",
    description: "Un'analisi senza tempo della natura umana, tra l'antica saggezza di Fedro e le moderne sfide dell'autocritica nell'era digitale.",

    openGraph: {
        title: "La Bisaccia di Fedro e la Gravità dell'Ipocrisia | Dalle radici alla gravità zero",
        description: "Un'analisi senza tempo della natura umana, tra l'antica saggezza di Fedro e le moderne sfide dell'autocritica nell'era digitale.",
        images: ["/images/il-cuore-nella-testa.jpg"],
    },
    twitter: {
        card: "summary_large_image",
        title: "La Bisaccia di Fedro e la Gravità dell'Ipocrisia | Dalle radici alla gravità zero",
        description: "Un'analisi senza tempo della natura umana, tra l'antica saggezza di Fedro e le moderne sfide dell'autocritica nell'era digitale.",
        images: ["/images/il-cuore-nella-testa.jpg"],
    },
};

export default function BlogPost() {
    return <ArticleContent />;
}
