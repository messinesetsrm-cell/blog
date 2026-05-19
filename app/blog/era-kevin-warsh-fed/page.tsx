import type { Metadata } from 'next';
import ArticleContent from './Article';

export const metadata: Metadata = {
    title: "L'era di Kevin Warsh alla Fed: quali scenari macroeconomici si aprono adesso? | Messinese.work",
    description: "Con la conferma formale da parte del Senato americano, Kevin Warsh è ufficialmente il 17° Presidente della Federal Reserve. Quali scenari macroeconomici si aprono adesso?",
    keywords: ["Kevin Warsh", "Fed", "Federal Reserve", "Macroeconomia", "Tassi d'interesse", "Trump", "Economia Globale"],
    openGraph: {
        title: "L'era di Kevin Warsh alla Fed: quali scenari macroeconomici si aprono adesso?",
        description: "Con la conferma formale da parte del Senato americano, Kevin Warsh è ufficialmente il 17° Presidente della Federal Reserve.",
        images: ["/images/warsh_fed_comic.png"],
    },
    twitter: {
        card: "summary_large_image",
        title: "L'era di Kevin Warsh alla Fed",
        description: "Con la conferma formale da parte del Senato americano, Kevin Warsh è ufficialmente il 17° Presidente della Federal Reserve.",
        images: ["/images/warsh_fed_comic.png"],
    },
};

export default function BlogPost() {
    return <ArticleContent />;
}
