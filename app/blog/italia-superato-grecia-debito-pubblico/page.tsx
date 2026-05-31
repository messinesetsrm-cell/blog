import type { Metadata } from 'next';
import ArticleContent from './Article';

export const metadata: Metadata = {
    title: "L’Italia ha davvero superato la Grecia per debito pubblico? | Antigravity",
    description: "Un'analisi dei dati reali dietro i titoli sensazionalistici sull'economia italiana e greca, la struttura industriale e l'effetto palla di neve.",
    openGraph: {
        title: "L’Italia ha davvero superato la Grecia per debito pubblico? | Antigravity",
        description: "Un'analisi dei dati reali dietro i titoli sensazionalistici sull'economia italiana e greca, la struttura industriale e l'effetto palla di neve.",
        images: ["/images/italia-grecia-debito-pubblico.png"],
    },
    twitter: {
        card: "summary_large_image",
        title: "L’Italia ha davvero superato la Grecia per debito pubblico? | Antigravity",
        description: "Un'analisi dei dati reali dietro i titoli sensazionalistici sull'economia italiana e greca, la struttura industriale e l'effetto palla di neve.",
        images: ["/images/italia-grecia-debito-pubblico.png"],
    },
};

export default function BlogPost() {
    return <ArticleContent />;
}
