import type { Metadata } from 'next';
import ArticleContent from './Article';

export const metadata: Metadata = {
    title: "Il Senior Engineer è morto, lunga vita al Product Engineer | Antigravity",
    description: "Il CTO di Canva lancia una provocazione: con l'AI, saper scrivere codice non basta più. La nuova frontiera è capire cosa costruire, non solo come farlo.",

    openGraph: {
        title: "Il Senior Engineer è morto, lunga vita al Product Engineer | Antigravity",
        description: "Il CTO di Canva lancia una provocazione: con l'AI, saper scrivere codice non basta più. La nuova frontiera è capire cosa costruire, non solo come farlo.",
        images: ["/images/il-cuore-nella-testa.jpg"],
    },
    twitter: {
        card: "summary_large_image",
        title: "Il Senior Engineer è morto, lunga vita al Product Engineer | Antigravity",
        description: "Il CTO di Canva lancia una provocazione: con l'AI, saper scrivere codice non basta più. La nuova frontiera è capire cosa costruire, non solo come farlo.",
        images: ["/images/il-cuore-nella-testa.jpg"],
    },
};

export default function BlogPost() {
    return <ArticleContent />;
}
