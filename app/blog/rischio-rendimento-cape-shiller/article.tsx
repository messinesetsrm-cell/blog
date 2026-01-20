'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from '../blog.module.css';
import ShareButton from '@/components/ShareButton/ShareButton';

export default function ArticleContent() {
    const [lang, setLang] = useState<'it' | 'en'>('it');

    return (
        <article className={styles.container}>
            <header className={styles.header}>
                <div style={{ marginBottom: '2rem', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
                    <Image
                        src="/images/shiller-cape-ratio.jpg"
                        alt="Messinese: Navigare tra il Rischio e la Valutazione"
                        width={800}
                        height={450}
                        style={{ width: '100%', height: 'auto', display: 'block' }}
                    />
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                    <button
                        onClick={() => setLang('it')}
                        style={{
                            background: lang === 'it' ? 'hsl(var(--accent-color))' : 'transparent',
                            color: lang === 'it' ? 'white' : 'hsl(var(--text-secondary))',
                            border: '1px solid hsl(var(--accent-color))',
                            padding: '0.5rem 1rem',
                            borderRadius: 'var(--radius-sm)',
                            cursor: 'pointer',
                            fontWeight: 600,
                            transition: 'all 0.2s ease'
                        }}
                    >
                        Italiano
                    </button>
                    <button
                        onClick={() => setLang('en')}
                        style={{
                            background: lang === 'en' ? 'hsl(var(--accent-color))' : 'transparent',
                            color: lang === 'en' ? 'white' : 'hsl(var(--text-secondary))',
                            border: '1px solid hsl(var(--accent-color))',
                            padding: '0.5rem 1rem',
                            borderRadius: 'var(--radius-sm)',
                            cursor: 'pointer',
                            fontWeight: 600,
                            transition: 'all 0.2s ease'
                        }}
                    >
                        English
                    </button>
                </div>

                <h1 className={styles.title}>
                    {lang === 'it'
                        ? "Educazione Finanziaria #3: Navigare tra il Rischio e la Valutazione (Shiller e dintorni)"
                        : "Financial Education #3: Navigating Risk and Valuation (Shiller and surroundings)"}
                </h1>
                <div className={styles.meta} style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <span>Educazione Finanziaria</span>
                        <span>•</span>
                        <span>{lang === 'it' ? 'Gen 20, 2026' : 'Jan 20, 2026'}</span>
                    </div>
                    <ShareButton
                        title={lang === 'it' ? "Educazione Finanziaria #3: Navigare tra il Rischio e la Valutazione" : "Financial Education #3: Navigating Risk and Valuation"}
                        text={lang === 'it' ? "Dalle lezioni di 'The Bull' alle riflessioni sul CAPE di Shiller." : "From 'The Bull' lessons to Shiller's CAPE reflections."}
                        url="https://messinese.vercel.app/blog/rischio-rendimento-cape-shiller"
                    />
                </div>
            </header>

            <div className={styles.content} style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'hsl(var(--text-secondary))' }}>
                {lang === 'it' ? (
                    <>
                        <h3 className={styles.sectionTitle} style={{ marginTop: '2rem' }}>La Bussola e il Termometro: Come Orientarsi nei Mercati</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Investire non è solo una questione di numeri, ma di consapevolezza. Spesso ci sentiamo attratti dai rendimenti elevati, dimenticando che, nel mondo finanziario, ogni centimetro di guadagno ha un peso in termini di rischio. In questo articolo, riassumiamo due visioni fondamentali tratte dai migliori podcast di settore per aiutarvi a costruire un portafoglio più solido.
                        </p>

                        <h4 className={styles.sectionTitle} style={{ marginTop: '2.5rem' }}>1. Il Legame Indissolubile: Rischio e Rendimento</h4>
                        <p style={{ marginBottom: '1rem' }}>
                            Come evidenziato da <strong>The Bull</strong>, non esiste guadagno senza incertezza. Il rischio non è un nemico da eliminare, ma una variabile da gestire.
                        </p>
                        <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem', listStyle: 'disc' }}>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Il profilo personale:</strong> Ognuno di noi ha una soglia di tolleranza diversa. La domanda non è "quanto posso guadagnare?", ma "quanto posso veder scendere il mio portafoglio senza perdere il sonno?".</li>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Gestire l'incertezza:</strong> Comprendere questo legame ci permette di non inseguire bolle speculative e di restare fedeli al nostro Piano di Accumulo (PAC) anche quando il mare è agitato.</li>
                        </ul>

                        <h4 className={styles.sectionTitle} style={{ marginTop: '2.5rem' }}>2. Misurare l'Euforia: Il CAPE di Shiller</h4>
                        <p style={{ marginBottom: '1rem' }}>
                            Se il rischio è la nostra bussola interiore, il <strong>CAPE Ratio</strong> (Cyclically Adjusted Price-to-Earnings) di Robert Shiller è il termometro del mercato. Analizzato in <strong>Reflections on Investing</strong>, questo strumento ci dice se le azioni sono "care" o "a buon mercato".
                        </p>
                        <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem', listStyle: 'disc' }}>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Come funziona:</strong> Invece di guardare agli utili di un solo anno (che possono essere falsati), il CAPE guarda alla media degli ultimi 10 anni, aggiustata per l'inflazione.</li>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Perché è utile:</strong> Ci aiuta a capire se stiamo comprando durante una fase di euforia irrazionale o se ci sono opportunità reali. Storicamente, un CAPE molto alto suggerisce rendimenti futuri più bassi, mentre un CAPE basso è spesso presagio di grandi risalite.</li>
                        </ul>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>Conclusione: La Consapevolezza è Libertà</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Interpretare le dinamiche degli investimenti richiede sia strumenti tecnici che equilibrio psicologico. Imparare a valutare le opportunità attraverso metriche come quella di Shiller, senza mai ignorare la propria propensione al rischio, è l'unico modo per sfidare la gravità dei mercati nel lungo periodo.
                        </p>
                        <p style={{ marginBottom: '1.5rem', fontWeight: 600 }}>
                            La finanza non deve essere un mistero: deve essere un supporto per la vostra libertà.
                        </p>
                    </>
                ) : (
                    <>
                        <h3 className={styles.sectionTitle} style={{ marginTop: '2rem' }}>The Compass and the Thermometer: Navigating the Markets</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Investing is not just a matter of numbers, but of awareness. Often we feel attracted by high returns, forgetting that, in the financial world, every inch of gain has a weight in terms of risk. In this article, we summarize two fundamental views taken from the best industry podcasts to help you build a more solid portfolio.
                        </p>

                        <h4 className={styles.sectionTitle} style={{ marginTop: '2.5rem' }}>1. The Unbreakable Link: Risk and Return</h4>
                        <p style={{ marginBottom: '1rem' }}>
                            As highlighted by <strong>The Bull</strong>, there is no gain without uncertainty. Risk is not an enemy to be eliminated, but a variable to be managed.
                        </p>
                        <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem', listStyle: 'disc' }}>
                            <li style={{ marginBottom: '0.5rem' }}><strong>The personal profile:</strong> Each of us has a different tolerance threshold. The question is not "how much can I earn?", but "how much can I see my portfolio drop without losing sleep?".</li>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Managing uncertainty:</strong> Understanding this link allows us not to chase speculative bubbles and to remain faithful to our Accumulation Plan (PAC) even when the sea is rough.</li>
                        </ul>

                        <h4 className={styles.sectionTitle} style={{ marginTop: '2.5rem' }}>2. Measuring Euphoria: Shiller's CAPE</h4>
                        <p style={{ marginBottom: '1rem' }}>
                            If risk is our inner compass, Robert Shiller's <strong>CAPE Ratio</strong> (Cyclically Adjusted Price-to-Earnings) is the market thermometer. Analyzed in <strong>Reflections on Investing</strong>, this tool tells us if stocks are "expensive" or "cheap".
                        </p>
                        <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem', listStyle: 'disc' }}>
                            <li style={{ marginBottom: '0.5rem' }}><strong>How it works:</strong> Instead of looking at a single year's earnings (which can be distorted), the CAPE looks at the average of the last 10 years, adjusted for inflation.</li>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Why it's useful:</strong> It helps us understand if we are buying during a phase of irrational euphoria or if there are real opportunities. Historically, a very high CAPE suggests lower future returns, while a low CAPE is often a harbinger of great recoveries.</li>
                        </ul>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>Conclusion: Awareness is Freedom</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Interpreting investment dynamics requires both technical tools and psychological balance. Learning to evaluate opportunities through metrics like Shiller's, without ever ignoring your risk propensity, is the only way to challenge the gravity of the markets in the long run.
                        </p>
                        <p style={{ marginBottom: '1.5rem', fontWeight: 600 }}>
                            Finance should not be a mystery: it must be a support for your freedom.
                        </p>
                    </>
                )}
            </div>
        </article>
    );
}
