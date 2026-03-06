import type { Metadata } from 'next';
import ArticleContent from './article';

export const metadata: Metadata = {
    title: "Educazione Finanziaria #3: Navigare tra il Rischio e la Valutazione (Shiller e dintorni) | Dalle radici alla gravità zero",
    description: "Dalle lezioni di 'The Bull' alle riflessioni sul CAPE di Shiller: una guida per capire quando il mercato è caro e come gestire la nostra bussola interiore.",

    openGraph: {
        title: "Educazione Finanziaria #3: Navigare tra il Rischio e la Valutazione (Shiller e dintorni) | Dalle radici alla gravità zero",
        description: "Dalle lezioni di 'The Bull' alle riflessioni sul CAPE di Shiller: una guida per capire quando il mercato è caro e come gestire la nostra bussola interiore.",
        images: ["/images/il-cuore-nella-testa.jpg"],
    },
    twitter: {
        card: "summary_large_image",
        title: "Educazione Finanziaria #3: Navigare tra il Rischio e la Valutazione (Shiller e dintorni) | Dalle radici alla gravità zero",
        description: "Dalle lezioni di 'The Bull' alle riflessioni sul CAPE di Shiller: una guida per capire quando il mercato è caro e come gestire la nostra bussola interiore.",
        images: ["/images/il-cuore-nella-testa.jpg"],
    },
};

export default function BlogPost() {
    return <ArticleContent />;
}
