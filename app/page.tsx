import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1 className={`${styles.title} floating`}>Messinese Salvatore</h1>
        <p className={styles.subtitle}>
          Dalle radici alla gravità zero.
        </p>
      </section>

      <section className={styles.grid}>
        <Link href="/blog" className={`${styles.card} glass`}>
          <h2 className={styles.cardTitle}>The Blog</h2>
          <p className={styles.cardDesc}>
            Long-form essays and micro-thoughts on technology, design, and life.
          </p>
          <span className={styles.cta}>Read more &rarr;</span>
        </Link>

        <Link href="/market" className={`${styles.card} glass`}>
          <h2 className={styles.cardTitle}>Market Data</h2>
          <p className={styles.cardDesc}>
            Real-time insights and visualizations of the pulse of the economy.
          </p>
          <span className={styles.cta}>View Data &rarr;</span>
        </Link>

        <Link href="/multimedia" className={`${styles.card} glass`}>
          <h2 className={styles.cardTitle}>Multimedia</h2>
          <p className={styles.cardDesc}>
            A curated collection of videos, short stories, and visual art.
          </p>
          <span className={styles.cta}>Watch now &rarr;</span>
        </Link>
      </section>
    </div>
  );
}
