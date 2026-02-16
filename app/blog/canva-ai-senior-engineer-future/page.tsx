import type { Metadata } from 'next';
import ArticleContent from './Article';

export const metadata: Metadata = {
    title: "Messinese: Il Senior Engineer è morto, lunga vita al Product Engineer | Antigravity",
    description: "Il CTO di Canva lancia una provocazione: con l'AI, saper scrivere codice non basta più. La nuova frontiera è capire cosa costruire, non solo come farlo.",
};

export default function BlogPost() {
    return <ArticleContent />;
}
