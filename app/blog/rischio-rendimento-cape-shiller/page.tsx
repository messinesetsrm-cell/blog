import type { Metadata } from 'next';
import ArticleContent from './Article';

export const metadata: Metadata = {
    title: "Messinese: Navigare tra il Rischio e la Valutazione (Shiller e dintorni) | Dalle radici alla gravità zero",
    description: "Dalle lezioni di 'The Bull' alle riflessioni sul CAPE di Shiller: una guida per capire quando il mercato è caro e come gestire la nostra bussola interiore.",
};

export default function BlogPost() {
    return <ArticleContent />;
}
