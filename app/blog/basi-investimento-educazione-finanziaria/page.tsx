import type { Metadata } from 'next';
import ArticleContent from './Article';

export const metadata: Metadata = {
    title: "Educazione Finanziaria #1: Perché investire non è (solo) per ricchi | Messinese.work",
    description: "Scopri perché investire è fondamentale per proteggere i tuoi risparmi dall'inflazione e come sfruttare l'interesse composto partendo da zero.",
    keywords: ["Risparmio", "Basi Investimento", "Interesse Composto", "Finanza Personale"],
};

export default function BlogPost() {
    return <ArticleContent />;
}
