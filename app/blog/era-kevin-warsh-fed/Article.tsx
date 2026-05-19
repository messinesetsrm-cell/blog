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
                { label: lang === 'it' ? "L'era di Kevin Warsh alla Fed" : "The Era of Kevin Warsh at the Fed" }
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
                        ? "L'era di Kevin Warsh alla Fed: quali scenari macroeconomici si aprono adesso?"
                        : "The Era of Kevin Warsh at the Fed: What Macroeconomic Scenarios Are Opening Up?"}
                </h1>
                <div className={styles.meta} style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <span>Macroeconomia & Geopolitica</span>
                        <span>•</span>
                        <span>{lang === 'it' ? 'Mag 19, 2026' : 'May 19, 2026'}</span>
                    </div>
                    <ShareButton
                        title={lang === 'it' ? "L'era di Kevin Warsh alla Fed" : "The Era of Kevin Warsh at the Fed"}
                        text={lang === 'it' ? "Con la conferma formale da parte del Senato americano, Kevin Warsh è ufficialmente il 17° Presidente della Federal Reserve." : "With formal confirmation by the US Senate, Kevin Warsh is officially the 17th Chair of the Federal Reserve."}
                        url="https://messinese.work/blog/era-kevin-warsh-fed"
                    />
                </div>
            </header>

            <div className={styles.content} style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'hsl(var(--text-secondary))' }}>
                <div style={{ marginBottom: '2.5rem', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.15)', border: '1px solid hsla(var(--accent-color), 0.2)' }}>
                    <Image
                        src="/images/warsh_fed_comic.png"
                        alt={lang === 'it' ? "Illustrazione: Kevin Warsh e la Fed" : "Illustration: Kevin Warsh and the Fed"}
                        width={1200}
                        height={675}
                        style={{ width: '100%', height: 'auto', display: 'block' }}
                        priority
                    />
                </div>

                {lang === 'it' ? (
                    <>
                        <p style={{ marginBottom: '1.5rem', fontSize: '1.2rem', fontStyle: 'italic', borderLeft: '4px solid hsl(var(--accent-color))', paddingLeft: '1.5rem', color: 'hsl(var(--text-primary))' }}>
                            Con la conferma formale da parte del Senato americano, Kevin Warsh è ufficialmente il 17° Presidente della Federal Reserve, succedendo a Jerome Powell dopo il voto più teso e politicamente diviso nella storia della banca centrale.
                        </p>
                        
                        <p style={{ marginBottom: '1.5rem' }}>
                            Quando Washington cambia il timoniere della Fed, l'intero assetto macroeconomico globale si rimette in moto. Le scelte di Warsh non influenzeranno solo Wall Street, ma detteranno il ritmo delle banche centrali di tutto il mondo, BCE inclusa, modificando i flussi di capitale, i tassi di cambio e le traiettorie della crescita globale.
                        </p>

                        <p style={{ marginBottom: '1.5rem' }}>
                            Ecco un'analisi approfondita dei tre grandi fronti macroeconomici che definiranno la sua leadership.
                        </p>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>1. La lotta all'inflazione "strutturale" e la stabilità dei tassi</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Warsh si insedia in un momento delicato: l'inflazione statunitense si attesta intorno al 3,8%, spinta dalle tensioni geopolitiche globali e dai costi energetici instabili.
                        </p>

                        <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem', listStyleType: 'disc' }}>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Il nuovo corso metodologico:</strong> Warsh ha espresso storicamente una visione da "falco", critica verso la gestione passata dell'inflazione post-pandemica. Una delle sue novità principali potrebbe essere l'adozione di metriche diverse per calcolare l'inflazione (come le medie trimmed, che escludono i picchi volatili ed estremi), per pulire il dato dai temporanei shock petroliferi e comprendere la reale direzione dei prezzi.</li>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Cosa aspettarsi nel breve termine:</strong> Nonostante le forti pressioni politiche per un taglio dei tassi, gli analisti prevedono che la Fed manterrà il costo del denaro stabile per la seconda metà dell'anno. La priorità assoluta di Warsh sarà ripristinare la stabilità dei prezzi prima di allentare la morsa monetaria.</li>
                        </ul>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>2. Il piano di "Regime Change" della Federal Reserve</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Durante le audizioni al Senato, Warsh ha invocato un vero e proprio cambio di paradigma istituzionale. Il suo obiettivo è una Fed più snella, meno focalizzata sulla comunicazione continua e più incisiva nelle azioni.
                        </p>

                        <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem', listStyleType: 'disc' }}>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Meno "Forward Guidance":</strong> Sotto le precedenti leadership, la Fed ha abituato i mercati a una trasparenza totale (previsioni trimestrali sui tassi, discorsi continui). Warsh ritiene che questa iper-comunicazione riduca la flessibilità della banca centrale e destabilizzi i mercati. Potremmo assistere a una Fed che "parla meno e agisce con più rapidità".</li>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Riduzione del Bilancio (Quantitative Tightening):</strong> Warsh sostiene la necessità di ridurre in modo più deciso il bilancio della Fed (i titoli di Stato accumulati negli anni). Nella sua visione economica, un bilancio pubblico più snello è la chiave strutturale per permettere, in futuro, tassi d'interesse stabilmente più bassi senza generare bolle speculative.</li>
                        </ul>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>3. Il dilemma dell'indipendenza e i rapporti con la Casa Bianca</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            L'aspetto più monitorato dai mercati internazionali sarà l'interazione tra la Federal Reserve e l'amministrazione Trump. Se da un lato il Presidente spinge per un taglio aggressivo dei tassi d'interesse per stimolare la crescita, dall'altro la Fed deve difendere la sua autonomia tecnica per evitare spinte inflazionistiche fuori controllo.
                        </p>

                        <p style={{ marginBottom: '1.5rem' }}>
                            Il modo in cui Warsh gestirà questo equilibrio sposterà l'ago della bilancia della fiducia degli investitori globali nel dollaro come valuta di riserva e rifugio sicuro.
                        </p>

                        <div style={{ padding: '1.5rem', background: 'hsla(var(--accent-color), 0.05)', borderRadius: 'var(--radius-md)', margin: '2rem 0', border: '1px dashed hsla(var(--accent-color), 0.3)' }}>
                            <h4 style={{ margin: '0 0 1rem 0', fontSize: '1.2rem', color: 'hsl(var(--accent-color))' }}>Lo scenario globale: gli effetti sull'Eurozona</h4>
                            <p style={{ marginBottom: '1rem' }}>Per l'Europa e l'Italia, la strategia di Warsh delinea uno scenario a doppio binario:</p>
                            <ul style={{ marginBottom: 0, paddingLeft: '1.5rem', listStyleType: 'disc' }}>
                                <li style={{ marginBottom: '0.5rem' }}><strong>Cambio Euro-Dollaro:</strong> Se la Fed manterrà i tassi elevati più a lungo rispetto alla BCE, il dollaro resterà forte. Questo rende le esportazioni europee più competitive, ma aumenta il costo delle materie prime che acquistiamo in dollari (come petrolio e gas), importando di fatto inflazione.</li>
                                <li style={{ marginBottom: '0' }}><strong>Pressione sulla BCE:</strong> Francoforte non potrà muoversi in totale autonomia: un divario troppo ampio tra i tassi americani e quelli europei rischierebbe di indebolire eccessivamente l'euro.</li>
                            </ul>
                        </div>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>Considerazioni finali</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            La nomina di Kevin Warsh segna la fine di un lungo ciclo di politica monetaria ultra-comunicativa e apre una stagione di rigore metodologico, transizione tecnologica e riforme istituzionali. In un sistema economico interconnesso, gli osservatori macroeconomici dovranno guardare non solo a quanto i tassi si muoveranno, ma alle nuove regole del gioco che il nuovo Presidente intende stabilire.
                        </p>
                    </>
                ) : (
                    <>
                        <p style={{ marginBottom: '1.5rem', fontSize: '1.2rem', fontStyle: 'italic', borderLeft: '4px solid hsl(var(--accent-color))', paddingLeft: '1.5rem', color: 'hsl(var(--text-primary))' }}>
                            With formal confirmation by the US Senate, Kevin Warsh is officially the 17th Chair of the Federal Reserve, succeeding Jerome Powell after the most tense and politically divided vote in the central bank's history.
                        </p>
                        
                        <p style={{ marginBottom: '1.5rem' }}>
                            When Washington changes the helm of the Fed, the entire global macroeconomic framework is set in motion. Warsh's choices will not only influence Wall Street but will dictate the pace of central banks worldwide, including the ECB, altering capital flows, exchange rates, and global growth trajectories.
                        </p>

                        <p style={{ marginBottom: '1.5rem' }}>
                            Here is an in-depth analysis of the three major macroeconomic fronts that will define his leadership.
                        </p>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>1. The fight against "structural" inflation and rate stability</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Warsh takes office at a delicate moment: US inflation stands around 3.8%, driven by global geopolitical tensions and unstable energy costs.
                        </p>

                        <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem', listStyleType: 'disc' }}>
                            <li style={{ marginBottom: '0.5rem' }}><strong>The new methodological course:</strong> Warsh has historically expressed a "hawkish" view, critical of past management of post-pandemic inflation. One of his main innovations could be the adoption of different metrics to calculate inflation (such as trimmed means, which exclude volatile and extreme peaks), to clean the data from temporary oil shocks and understand the real direction of prices.</li>
                            <li style={{ marginBottom: '0.5rem' }}><strong>What to expect in the short term:</strong> Despite strong political pressures for a rate cut, analysts predict that the Fed will keep the cost of money stable for the second half of the year. Warsh's top priority will be to restore price stability before easing the monetary grip.</li>
                        </ul>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>2. The Federal Reserve's "Regime Change" plan</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            During the Senate hearings, Warsh called for a real institutional paradigm shift. His goal is a leaner Fed, less focused on continuous communication and more incisive in its actions.
                        </p>

                        <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem', listStyleType: 'disc' }}>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Less "Forward Guidance":</strong> Under previous leaderships, the Fed has accustomed markets to total transparency (quarterly rate forecasts, continuous speeches). Warsh believes that this hyper-communication reduces the central bank's flexibility and destabilizes markets. We could witness a Fed that "speaks less and acts more quickly."</li>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Balance Sheet Reduction (Quantitative Tightening):</strong> Warsh supports the need to more decisively reduce the Fed's balance sheet (government bonds accumulated over the years). In his economic vision, a leaner public balance sheet is the structural key to allowing, in the future, stably lower interest rates without generating speculative bubbles.</li>
                        </ul>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>3. The dilemma of independence and relations with the White House</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            The aspect most monitored by international markets will be the interaction between the Federal Reserve and the Trump administration. If on the one hand the President pushes for an aggressive interest rate cut to stimulate growth, on the other hand the Fed must defend its technical autonomy to avoid out-of-control inflationary pressures.
                        </p>

                        <p style={{ marginBottom: '1.5rem' }}>
                            The way Warsh will manage this balance will shift the needle of global investors' confidence in the dollar as a reserve currency and safe haven.
                        </p>

                        <div style={{ padding: '1.5rem', background: 'hsla(var(--accent-color), 0.05)', borderRadius: 'var(--radius-md)', margin: '2rem 0', border: '1px dashed hsla(var(--accent-color), 0.3)' }}>
                            <h4 style={{ margin: '0 0 1rem 0', fontSize: '1.2rem', color: 'hsl(var(--accent-color))' }}>The global scenario: effects on the Eurozone</h4>
                            <p style={{ marginBottom: '1rem' }}>For Europe and Italy, Warsh's strategy outlines a dual-track scenario:</p>
                            <ul style={{ marginBottom: 0, paddingLeft: '1.5rem', listStyleType: 'disc' }}>
                                <li style={{ marginBottom: '0.5rem' }}><strong>Euro-Dollar Exchange Rate:</strong> If the Fed keeps rates higher for longer than the ECB, the dollar will remain strong. This makes European exports more competitive, but increases the cost of raw materials we buy in dollars (like oil and gas), effectively importing inflation.</li>
                                <li style={{ marginBottom: '0' }}><strong>Pressure on the ECB:</strong> Frankfurt will not be able to move in total autonomy: too wide a gap between American and European rates would risk excessively weakening the euro.</li>
                            </ul>
                        </div>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>Final considerations</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Kevin Warsh's appointment marks the end of a long cycle of ultra-communicative monetary policy and opens a season of methodological rigor, technological transition, and institutional reforms. In an interconnected economic system, macroeconomic observers will have to look not only at how much rates will move, but at the new rules of the game that the new Chair intends to establish.
                        </p>
                    </>
                )}
            </div>
        </article>
    );
}
