import type { Metadata } from 'next';
import ArticleContent from './Article';

export const metadata: Metadata = {
    title: 'La Pazienza è il nuovo "Alpha": Perché saper aspettare rende più di qualsiasi previsione | Messinese.work',
    description: "Scopri perché la pazienza non è solo una virtù morale, ma un vero e proprio motore di rendimento quantificabile negli investimenti, e come la 'Patience Alpha' può farti battere il mercato.",
    keywords: ["Investimenti", "Finanza Comportamentale", "Patience As Alpha", "Wealth Management", "Educazione Finanziaria", "Interesse Composto"],
    openGraph: {
        title: 'La Pazienza è il nuovo "Alpha": Perché saper aspettare rende più di qualsiasi previsione | Messinese.work',
        description: "Scopri perché la pazienza non è solo una virtù morale, ma un vero e proprio motore di rendimento quantificabile negli investimenti.",
        images: ["/images/pazienza-alpha.png"],
    },
    twitter: {
        card: "summary_large_image",
        title: 'La Pazienza è il nuovo "Alpha"',
        description: "Scopri perché la pazienza non è solo una virtù morale, ma un vero e proprio motore di rendimento.",
        images: ["/images/pazienza-alpha.png"],
    },
};

export default function BlogPost() {
    return <ArticleContent />;
}
