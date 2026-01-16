import type { Metadata } from 'next';
import ArticleContent from './Article';

export const metadata: Metadata = {
    title: "Educazione Finanziaria #2: L’Equazione della Ricchezza e l’Arte di Sfidare il Tempo | Messinese.work",
    description: "Scopri come Tempo, Risparmio e Rendimento formano l'equazione fondamentale per la libertà finanziaria e come sfidare la gravità sociale.",
    keywords: ["Educazione Finanziaria", "Equazione della Ricchezza", "Interesse Composto", "Risparmio", "Libertà Finanziaria", "Ronald Read", "Investimento"],
};

export default function BlogPost() {
    return <ArticleContent />;
}
