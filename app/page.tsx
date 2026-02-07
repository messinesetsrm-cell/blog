import Link from 'next/link';
import NextImage from 'next/image';
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

      <section className={`${styles.bookSection} glass`}>
        <div className={`${styles.bookImageContainer} floating`}>
          <NextImage
            src="/images/il-cuore-nella-testa.jpg"
            alt="Copertina Libro IL CUORE NELLA TESTA"
            width={300}
            height={450}
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>
        <div className={styles.bookContent}>
          <span className={styles.bookLabel}>Nuova Uscita - Febbraio 2026</span>
          <h2 className={styles.bookTitle}>IL CUORE NELLA TESTA</h2>
          <p className={styles.bookDescription}>
            Un viaggio profondo nell'animo umano e nella razionalità, dove le emozioni incontrano il pensiero critico.
            Scopri l'ultima opera di Salvatore Messinese, un libro che sfida la gravità delle convenzioni.
          </p>
          <a
            href="https://amzn.eu/d/09MM6CLy"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.bookLink}
          >
            Acquista su Amazon &rarr;
          </a>
        </div>
      </section>

      <section className={styles.videoSection}>
        <h2 className={styles.videoTitle}>Esiste una forza...</h2>
        <div className={`${styles.videoContainer} glass floating`}>
          <video
            className={styles.videoElement}
            controls
            autoPlay
            muted
            loop
            playsInline
            poster="/images/oscillating-planets.png"
            preload="auto"
          >
            <source src="/videos/Esiste_una_forza.mp4" type="video/mp4" />
            Il tuo browser non supporta il tag video.
          </video>
        </div>
      </section>
    </div>
  );
}
