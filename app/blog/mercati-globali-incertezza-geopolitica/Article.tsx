'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from '../blog.module.css';
import ShareButton from '@/components/ShareButton/ShareButton';
import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs';

export default function ArticleContent() {
    const [lang, setLang] = useState<'it' | 'en'>('it');

    return (
        <article className={styles.container}>
            <Breadcrumbs items={[
                { label: 'Blog', href: '/blog' },
                { label: lang === 'it' ? 'Mercati Globali e Incertezza Geopolitica' : 'Global Markets and Geopolitical Uncertainty' }
            ]} />
            <header className={styles.header}>
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
                        ? 'Mercati globali e incertezza geopolitica: come proteggersi'
                        : 'Global markets and geopolitical uncertainty: how to protect yourself'}
                </h1>
                <div className={styles.meta} style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <span>Educazione Finanziaria</span>
                        <span>•</span>
                        <span>Apr 20, 2026</span>
                    </div>
                    <ShareButton
                        title={lang === 'it' ? 'Mercati globali e incertezza geopolitica' : 'Global markets and geopolitical uncertainty'}
                        text={lang === 'it' ? "Gli eventi geopolitici che stanno scuotendo lo scacchiere mondiale non sono più solo \"notizie dal mondo\", ma fattori che entrano direttamente nelle nostre tasche." : "Geopolitical events shaking the global chessboard are no longer just \"world news\", but factors directly affecting our wallets."}
                        url="https://messinese.work/blog/mercati-globali-incertezza-geopolitica"
                    />
                </div>
            </header>

            <div className={styles.content} style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'hsl(var(--text-secondary))' }}>
                <div style={{ marginBottom: '2.5rem', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.15)', border: '1px solid hsla(var(--accent-color), 0.2)' }}>
                    <Image
                        src="/images/geopolitica_incertezza.png"
                        alt={lang === 'it' ? "Infografica: Mercati Globali e Geopolitica" : "Infographic: Global Markets and Geopolitics"}
                        width={1200}
                        height={675}
                        style={{ width: '100%', height: 'auto', display: 'block' }}
                        priority
                    />
                </div>

                {lang === 'it' ? (
                    <>
                        <p style={{ marginBottom: '1.5rem', fontSize: '1.2rem', fontStyle: 'italic', borderLeft: '4px solid hsl(var(--accent-color))', paddingLeft: '1.5rem', color: 'hsl(var(--text-primary))' }}>
                            L'ultimo aggiornamento dai mercati finanziari non lascia spazio a interpretazioni: l'aria che tira è tesa. Gli eventi geopolitici che stanno scuotendo lo scacchiere mondiale non sono più solo "notizie dal mondo", ma fattori che entrano direttamente nelle nostre tasche, influenzando inflazione, tassi di interesse e, di riflesso, il mercato del lavoro.
                        </p>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>1. La geopolitica è il nuovo driver economico</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Se un tempo erano i dati sull'occupazione o la produzione industriale a muovere i mercati, oggi la geopolitica ha preso il sopravvento. Le tensioni internazionali creano colli di bottiglia nelle catene di approvvigionamento e incertezza sui costi energetici. Per chi lavora o fa impresa, questo significa una sola cosa: volatilità.
                        </p>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>2. Inflazione e Politiche Monetarie: cosa aspettarsi?</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Le banche centrali si trovano in una posizione delicata. Da un lato devono contrastare un'inflazione che fatica a scendere a causa dei costi esterni, dall'altro non possono alzare i tassi all'infinito senza rischiare di bloccare la crescita economica.
                        </p>
                        <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem', listStyleType: 'disc' }}>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Per il risparmiatore:</strong> è fondamentale diversificare e non cedere al panico da volatilità.</li>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Per il professionista:</strong> è il momento di monitorare con attenzione i costi fissi e pianificare gli investimenti con estrema prudenza.</li>
                        </ul>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>3. La resilienza professionale in tempi incerti</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            In un contesto dove i mercati globali oscillano bruscamente, il valore del proprio lavoro e della propria competenza diventa l'asset più stabile. Credo che la formazione continua e la capacità di adattamento siano le migliori forme di "assicurazione" contro l'instabilità macroeconomica.
                        </p>
                        <div style={{ padding: '1.5rem', background: 'hsla(var(--accent-color), 0.05)', borderRadius: 'var(--radius-md)', marginBottom: '1.5rem', border: '1px dashed hsla(var(--accent-color), 0.3)' }}>
                            <p style={{ marginBottom: '0', fontWeight: '500' }}>
                                <strong>Il consiglio:</strong> La consapevolezza finanziaria non serve solo a chi investe in borsa, ma a chiunque voglia navigare con successo nel mondo.
                            </p>
                        </div>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>Conclusione</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Navigare nell'incertezza richiede una bussola affidabile. Restare informati sull'andamento dei mercati globali non è più un optional, ma una necessità per proteggere il proprio valore professionale e i propri traguardi economici.
                        </p>
                    </>
                ) : (
                    <>
                        <p style={{ marginBottom: '1.5rem', fontSize: '1.2rem', fontStyle: 'italic', borderLeft: '4px solid hsl(var(--accent-color))', paddingLeft: '1.5rem', color: 'hsl(var(--text-primary))' }}>
                            The latest update from the financial markets leaves no room for interpretation: the atmosphere is tense. The geopolitical events shaking the global chessboard are no longer just "world news", but factors that directly enter our pockets, influencing inflation, interest rates, and consequently, the job market.
                        </p>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>1. Geopolitics is the new economic driver</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            If employment data or industrial production once moved the markets, today geopolitics has taken over. International tensions create bottlenecks in supply chains and uncertainty over energy costs. For those working or running a business, this means one thing: volatility.
                        </p>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>2. Inflation and Monetary Policies: what to expect?</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Central banks find themselves in a delicate position. On one hand, they must counter an inflation that struggles to go down due to external costs, on the other they cannot raise rates endlessly without risking a block in economic growth.
                        </p>
                        <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem', listStyleType: 'disc' }}>
                            <li style={{ marginBottom: '0.5rem' }}><strong>For the saver:</strong> it is crucial to diversify and not give in to panic over volatility.</li>
                            <li style={{ marginBottom: '0.5rem' }}><strong>For the professional:</strong> it is the time to carefully monitor fixed costs and plan investments with extreme caution.</li>
                        </ul>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>3. Professional resilience in uncertain times</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            In a context where global markets oscillate abruptly, the value of one's work and competence becomes the most stable asset. I believe that continuous education and adaptability are the best forms of "insurance" against macroeconomic instability.
                        </p>
                        <div style={{ padding: '1.5rem', background: 'hsla(var(--accent-color), 0.05)', borderRadius: 'var(--radius-md)', marginBottom: '1.5rem', border: '1px dashed hsla(var(--accent-color), 0.3)' }}>
                            <p style={{ marginBottom: '0', fontWeight: '500' }}>
                                <strong>The advice:</strong> Financial awareness is not only for those who invest in the stock market, but for anyone who wants to successfully navigate the world.
                            </p>
                        </div>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>Conclusion</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Navigating uncertainty requires a reliable compass. Staying informed about the trends of global markets is no longer an option, but a necessity to protect one's professional value and economic goals.
                        </p>
                    </>
                )}
            </div>
        </article>
    );
}
