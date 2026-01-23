import type { Metadata } from 'next';
import ArticleContent from './Article';

export const metadata: Metadata = {
    title: "2026: L'Anno in cui le Regole del Gioco sono Cambiate | Antigravity",
    description: "5 Verità Scomode dall'Economia Globale: dal collasso del Rial iraniano all'Operazione Absolute Resolve in Venezuela.",
};

export default function BlogPost() {
    return <ArticleContent />;
}
