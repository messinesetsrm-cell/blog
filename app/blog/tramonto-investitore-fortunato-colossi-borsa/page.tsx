import type { Metadata } from 'next';
import ArticleContent from './Article';

export const metadata: Metadata = {
    title: "Il tramonto dell'investitore fortunato? Quando i colossi arrivano in Borsa già giganti | Messinese.work",
    description: "Le aziende non utilizzano più la Borsa per diventare grandi: ci arrivano quando sono già adulte, giganti globali che hanno già consumato la crescita più redditizia.",
    keywords: ["IPO", "Borsa", "Venture Capital", "OpenAI", "SpaceX", "Mercati Privati", "Investimenti"],
    openGraph: {
        title: "Il tramonto dell'investitore fortunato? Quando i colossi arrivano in Borsa già giganti",
        description: "Le aziende non utilizzano più la Borsa per diventare grandi: ci arrivano quando sono già adulte, giganti globali che hanno già consumato la crescita più redditizia.",
        images: ["/images/tramonto_investitore_fortunato.png"],
    },
    twitter: {
        card: "summary_large_image",
        title: "Il tramonto dell'investitore fortunato? Quando i colossi arrivano in Borsa già giganti",
        description: "Il Value Flip e la crescita invisibile: come i mercati privati stanno cambiando le regole delle quotazioni.",
        images: ["/images/tramonto_investitore_fortunato.png"],
    },
};

export default function BlogPost() {
    return <ArticleContent />;
}
