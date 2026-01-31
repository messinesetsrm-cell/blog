import type { Metadata } from 'next';
import ArticleContent from './Article';

export const metadata: Metadata = {
    title: "Educazione Finanziaria #4: Smetti di fare il 'cecchino': perché il tempo batte il tempismo | Messinese.work",
    description: "Scopri perché il market timing è spesso una trappola e perché restare sul mercato a lungo termine (Time in the Market) è più efficace che cercare di azzeccare il momento giusto.",
    keywords: ["Market Timing", "PAC", "Piano di Accumulo", "Investimento Lungo Termine", "Finanza Personale"],
};

export default function BlogPost() {
    return <ArticleContent />;
}
