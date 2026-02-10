import Link from 'next/link';
import styles from './blog.module.css';

// Mock Data
const longFormPosts = [
    { id: 11, title: "Investire in azioni singole: Opportunità reale o azzardo per pochi?", date: 'Feb 10, 2026', excerpt: "Un consiglio eccellente per il 99% delle persone è l'investimento passivo, ma esiste una strada per chi vuole puntare a qualcosa di più?", slug: 'investire-azioni-singole-opportunita-o-azzardo' },
    { id: 10, title: "Febbraio 2026: Tempesta Perfetta sui Mercati. Cosa sta succedendo?", date: 'Feb 07, 2026', excerpt: "L'inizio di febbraio rimescola le carte: sell-off nel tech, Bitcoin in correzione e metalli preziosi sotto pressione. Analisi di un momento di alta emotività.", slug: 'tempesta-perfetta-mercati-febbraio-2026' },
    { id: 9, title: "Educazione Finanziaria #4: Smetti di fare il 'cecchino': perché il tempo batte il tempismo", date: 'Jan 31, 2026', excerpt: "Scopri perché il market timing è spesso una trappola e perché restare sul mercato a lungo termine è più efficace che cercare di azzeccare il momento giusto.", slug: 'tempo-vs-tempismo-educazione-finanziaria' },
    { id: 8, title: "Smetti di Leggere le Notizie: Riprenditi il Tuo Tempo e la Tua Mente", date: 'Jan 26, 2026', excerpt: "Perché il consumo costante di notizie è dannoso e come disintossicarsi per riprendere il controllo della propria mente.", slug: 'smetti-leggere-notizie' },
    { id: 7, title: "2026: L'Anno in cui le Regole del Gioco sono Cambiate. 5 Verità Scomode dall'Economia Globale", date: 'Jan 23, 2026', excerpt: "Dall'iperinflazione in Iran all'intervento militare in Venezuela: come la geopolitica sta ridisegnando l'economia mondiale.", slug: '2026-regole-gioco-cambiate-economia-globale' },
    { id: 6, title: "Educazione Finanziaria #3: Navigare tra il Rischio e la Valutazione (Shiller e dintorni)", date: 'Jan 20, 2026', excerpt: "Dalle lezioni di 'The Bull' alle riflessioni sul CAPE di Shiller: una guida per capire quando il mercato è caro e come gestire la nostra bussola interiore.", slug: 'rischio-rendimento-cape-shiller' },
    { id: 5, title: "Educazione Finanziaria #2: L’Equazione della Ricchezza e l’Arte di Sfidare il Tempo", date: 'Jan 16, 2026', excerpt: "Scopri come Tempo, Risparmio e Rendimento formano l'equazione fondamentale per la libertà finanziaria e come sfidare la gravità sociale.", slug: 'equazione-ricchezza-educazione-finanziaria' },
    { id: 4, title: "Educazione Finanziaria #1: Perché investire non è (solo) per ricchi", date: 'Jan 14, 2026', excerpt: "Scopri perché investire è fondamentale per proteggere i tuoi risparmi dall'inflazione e come sfruttare l'interesse composto partendo da zero.", slug: 'basi-investimento-educazione-finanziaria' },
    { id: 3, title: "La Bisaccia di Fedro e la Gravità dell'Ipocrisia", date: 'Jan 11, 2026', excerpt: "Un'analisi senza tempo della natura umana, tra l'antica saggezza di Fedro e le moderne sfide dell'autocritica nell'era digitale.", slug: 'la-bisaccia-di-fedro' },
];

const microContext = [
    { id: 1, date: 'Today, 10:42 AM', content: 'The market is behaving irrationally again. Time to watch closer.' },
    { id: 2, date: 'Yesterday', content: 'Just refined the animation curves on the new component. Fluidity is key.' },
    { id: 3, date: 'Oct 15', content: 'Why do we still use pagination? Infinite scroll feels more like floating.' },
];

export default function Blog() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>The Blog</h1>
                <p className={styles.subtitle}>Hybrid thoughts from the ether.</p>
            </header>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Deep Dives</h2>
                <div className={styles.grid}>
                    {longFormPosts.map((post) => (
                        <Link key={post.id} href={`/blog/${post.slug}`} className={`${styles.card} glass`}>
                            <span className={styles.meta}>{post.date}</span>
                            <h3 className={styles.postTitle}>{post.title}</h3>
                            <p className={styles.excerpt}>{post.excerpt}</p>
                            <span className={styles.readMore}>Read Article &rarr;</span>
                        </Link>
                    ))}
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Micro Thoughts</h2>
                <div className={styles.microGrid}>
                    {microContext.map((post) => (
                        <article key={post.id} className={`${styles.card} ${styles.microCard} glass`}>
                            <span className={styles.meta}>{post.date}</span>
                            <p className={styles.microContent}>"{post.content}"</p>
                        </article>
                    ))}
                </div>
            </section>
        </div>
    );
}
