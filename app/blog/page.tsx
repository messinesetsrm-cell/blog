import Link from 'next/link';
import styles from './blog.module.css';

// Mock Data
const longFormPosts = [
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
