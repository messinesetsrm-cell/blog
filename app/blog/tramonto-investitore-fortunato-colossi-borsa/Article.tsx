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
                { label: lang === 'it' ? "Il tramonto dell'investitore fortunato?" : "The Sunset of the Lucky Investor?" }
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
                        ? "Il tramonto dell'investitore fortunato? Quando i colossi arrivano in Borsa già giganti"
                        : "The Sunset of the Lucky Investor? When Giants Arrive on the Stock Exchange Already Gigantic"}
                </h1>
                <div className={styles.meta} style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <span>Analisi Finanziaria / Macro</span>
                        <span>•</span>
                        <span>{lang === 'it' ? 'Giu 22, 2026' : 'Jun 22, 2026'}</span>
                    </div>
                    <ShareButton
                        title={lang === 'it' ? "Il tramonto dell'investitore fortunato? Quando i colossi arrivano in Borsa già giganti" : "The Sunset of the Lucky Investor? When Giants Arrive on the Stock Exchange Already Gigantic"}
                        text={lang === 'it' ? "Le aziende non utilizzano più il listino per diventare grandi: ci arrivano quando sono già adulte, giganti globali che hanno già consumato la crescita più redditizia." : "Companies no longer use the listing to become big: they arrive when they are already adults, global giants that have already consumed their most profitable growth."}
                        url="https://messinese.work/blog/tramonto-investitore-fortunato-colossi-borsa"
                    />
                </div>
            </header>

            <div className={styles.content} style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'hsl(var(--text-secondary))' }}>
                <div style={{ marginBottom: '2.5rem', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.15)', border: '1px solid hsla(var(--accent-color), 0.2)' }}>
                    <Image
                        src="/images/tramonto_investitore_fortunato.png"
                        alt={lang === 'it' ? "Illustrazione: Il tramonto dell'investitore fortunato" : "Illustration: The Sunset of the Lucky Investor"}
                        width={1200}
                        height={675}
                        style={{ width: '100%', height: 'auto', display: 'block' }}
                        priority
                    />
                </div>

                {lang === 'it' ? (
                    <>
                        <h3 className={styles.sectionTitle} style={{ marginTop: '2rem' }}>1. Introduzione: Il paradosso della crescita invisibile</h3>
                        <p style={{ marginBottom: '1.5rem', fontSize: '1.2rem', fontStyle: 'italic', borderLeft: '4px solid hsl(var(--accent-color))', paddingLeft: '1.5rem', color: 'hsl(var(--text-primary))' }}>
                            Il mito del garage di Seattle è morto. Se negli anni ’80 e ’90 investire in Microsoft o Amazon significava scommettere su adolescenti ambiziosi pronti a esplodere sotto lo scrutinio dei mercati pubblici, oggi la musica è cambiata.
                        </p>
                        
                        <p style={{ marginBottom: '1.5rem' }}>
                            Le aziende non utilizzano più il listino per "diventare" grandi: ci arrivano quando sono già adulte, giganti globali che hanno già consumato la loro fase di crescita più redditizia lontano dagli occhi dei piccoli risparmiatori.
                        </p>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>2. L'era delle IPO da 4.000 miliardi di dollari</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Il recente sbarco in Borsa di SpaceX ha segnato un punto di non ritorno, agendo da apripista per i prossimi debutti attesi di OpenAI e Anthropic. Siamo di fronte a una nuova generazione di pesi massimi tecnologici che, complessivamente, si presentano al pubblico con una valutazione vicina ai 4.000 miliardi di dollari. A differenza del passato, queste società vantano già marchi planetari e centinaia di milioni di utenti prima di emettere una singola azione per il mercato retail.
                        </p>

                        <div style={{ padding: '1.5rem', background: 'hsla(var(--accent-color), 0.05)', borderRadius: 'var(--radius-md)', margin: '2rem 0', border: '1px dashed hsla(var(--accent-color), 0.3)', textAlign: 'center' }}>
                            <p style={{ margin: 0, fontSize: '1.3rem', fontStyle: 'italic', fontWeight: '500', color: 'hsl(var(--accent-color))' }}>
                                "Queste società potrebbero già essere tra le aziende più grandi del mondo prima ancora che la maggior parte degli investitori abbia la possibilità di acquistarne le azioni."
                            </p>
                        </div>

                        <p style={{ marginBottom: '1.5rem' }}>
                            Questa realtà trasforma l'IPO da momento di raccolta capitali per l'espansione a vera e propria cerimonia di incoronazione per realtà che hanno già raggiunto la piena maturità operativa.
                        </p>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>3. Il "Value Flip": La crescita è diventata un affare privato?</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Il cuore del problema è il cosiddetto "Value Flip": la fase più esplosiva della creazione di valore si è spostata dai mercati pubblici ai mercati privati. Se Tesla ha vissuto la sua adolescenza finanziaria sui listini, permettendo al pubblico di partecipare alla sua scalata, i giganti di oggi preferiscono restare "protetti" molto più a lungo.
                        </p>

                        <p style={{ marginBottom: '1.5rem' }}>
                            I motivi di questa permanenza prolungata sono strutturali:
                        </p>

                        <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem', listStyleType: 'disc' }}>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Capitale di rischio iper-trofico:</strong> Il Venture Capital è oggi in grado di sostenere round miliardari che un tempo erano esclusiva della Borsa.</li>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Fondi Sovrani come nuovi Market Maker:</strong> Entità come il PIF saudita o i fondi di Singapore agiscono come finanziatori di ultima istanza, garantendo liquidità immensa senza i vincoli di trasparenza dei mercati regolamentati.</li>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Visione a lungo termine:</strong> Rimanere privati permette di evitare la dittatura delle trimestrali, cruciale per settori ad alta intensità di capitale come l'Intelligenza Artificiale o l'esplorazione spaziale.</li>
                        </ul>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>4. Indici Fast-Track: La rincorsa del Nasdaq</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Il cambiamento è talmente dirompente che i provider di indici hanno dovuto stracciare i vecchi manuali. Storicamente, una società doveva attendere mesi o anni prima di entrare nei benchmark principali. Oggi, il Nasdaq ha introdotto regole per includere le mega-IPO quasi istantaneamente. Se un colosso da 2.000 miliardi restasse fuori dai radar per troppo tempo, l'indice smetterebbe di essere uno specchio fedele dell'economia reale.
                        </p>

                        <p style={{ marginBottom: '1.5rem' }}>
                            Tuttavia, c'è un'insidia tecnica per l'investitore: anche per giganti di questa portata, i pesi iniziali negli indici potrebbero essere inizialmente contenuti, complicando la strategia di chi cerca un'esposizione immediata e significativa attraverso gli strumenti passivi.
                        </p>

                        <p style={{ marginBottom: '1.5rem', padding: '1.2rem', background: 'hsla(var(--text-primary), 0.02)', borderLeft: '3px solid hsl(var(--text-secondary))', fontSize: '0.95rem' }}>
                            <strong>Nota di approfondimento:</strong> Il processo di analisi dei fondamentali viene oggi drasticamente accelerato. La velocità di inclusione negli indici costringe i gestori a valutare modelli di business complessi in poche settimane anziché mesi, aumentando il rischio di errori nella "price discovery" iniziale a causa della compressione dei tempi di osservazione del mercato.
                        </p>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>5. Mercati Pubblici: Da incubatori a distributori di proprietà</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            La tesi centrale è chiara: le Borse stanno perdendo la loro funzione di incubatori di crescita per diventare semplici meccanismi di distribuzione della proprietà. Gli investitori passivi, attraverso ETF e fondi indicizzati, sono diventati i destinatari finali di aziende già sature. Si crea così una tensione tra la necessità dei benchmark di rappresentare il mercato e il rischio di offrire agli investitori titoli che hanno già dato il meglio in termini di multipli di rivalutazione.
                        </p>

                        <div style={{ padding: '1.5rem', background: 'hsla(var(--accent-color), 0.05)', borderRadius: 'var(--radius-md)', margin: '2rem 0', border: '1px dashed hsla(var(--accent-color), 0.3)', textAlign: 'center' }}>
                            <p style={{ margin: 0, fontSize: '1.3rem', fontStyle: 'italic', fontWeight: '500', color: 'hsl(var(--accent-color))' }}>
                                "Gli investitori stanno gradualmente perdendo l'accesso alle fasi iniziali (e potenzialmente più redditizie) della crescita aziendale?"
                            </p>
                        </div>

                        <p style={{ marginBottom: '1.5rem' }}>
                            È il dilemma dell'era moderna: entiamo in gioco solo quando il valore è già stato estratto dai grandi capitali privati, trasformando il mercato pubblico in una sorta di mercato dell'usato di lusso.
                        </p>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>6. Conclusione: Verso un nuovo DNA finanziario</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Siamo testimoni di una mutazione genetica del sistema finanziario. Se un tempo la Borsa era il luogo dove si scommetteva sul futuro, oggi rischia di diventare il luogo dove si consolida un presente già scritto. In un mondo in cui le aziende nascono già "adulte", la strategia del risparmiatore non può più basarsi sulla speranza di scoprire la prossima perla nascosta, ma sulla gestione sofisticata dell'esposizione a colossi che hanno già cambiato il mondo prima ancora di essere quotati.
                        </p>

                        <p style={{ marginBottom: '1.5rem' }}>
                            Il futuro dell'investimento retail dipenderà sempre meno dalla fortuna di individuare il prossimo gigante e sempre più dalla comprensione di un ecosistema dove il tempo e l'accesso non sono più distribuiti in modo democratico.
                        </p>
                    </>
                ) : (
                    <>
                        <h3 className={styles.sectionTitle} style={{ marginTop: '2rem' }}>1. Introduction: The Paradox of Invisible Growth</h3>
                        <p style={{ marginBottom: '1.5rem', fontSize: '1.2rem', fontStyle: 'italic', borderLeft: '4px solid hsl(var(--accent-color))', paddingLeft: '1.5rem', color: 'hsl(var(--text-primary))' }}>
                            The myth of the Seattle garage is dead. If investing in Microsoft or Amazon in the '80s and '90s meant betting on ambitious teenagers ready to explode under the scrutiny of public markets, today the music has changed.
                        </p>
                        
                        <p style={{ marginBottom: '1.5rem' }}>
                            Companies no longer use the stock exchange to "become" big: they arrive when they are already adults, global giants that have already consumed their most profitable growth phase far from the eyes of retail investors.
                        </p>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>2. The Era of $4 Trillion IPOs</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            The recent stock market debut of SpaceX marked a point of no return, acting as a trailblazer for the upcoming expected debuts of OpenAI and Anthropic. We are facing a new generation of tech heavyweights that, collectively, present themselves to the public with a valuation close to $4 trillion. Unlike the past, these companies already boast planetary brands and hundreds of millions of users before issuing a single share for the retail market.
                        </p>

                        <div style={{ padding: '1.5rem', background: 'hsla(var(--accent-color), 0.05)', borderRadius: 'var(--radius-md)', margin: '2rem 0', border: '1px dashed hsla(var(--accent-color), 0.3)', textAlign: 'center' }}>
                            <p style={{ margin: 0, fontSize: '1.3rem', fontStyle: 'italic', fontWeight: '500', color: 'hsl(var(--accent-color))' }}>
                                "These companies could already be among the largest companies in the world before most investors even have the chance to buy their shares."
                            </p>
                        </div>

                        <p style={{ marginBottom: '1.5rem' }}>
                            This reality transforms the IPO from a capital-raising moment for expansion into a true coronation ceremony for entities that have already reached full operational maturity.
                        </p>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>3. The "Value Flip": Has Growth Become a Private Affair?</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            The heart of the problem is the so-called "Value Flip": the most explosive phase of value creation has shifted from public to private markets. While Tesla lived its financial adolescence on the public listings, allowing the public to participate in its ascent, today's giants prefer to remain "protected" much longer.
                        </p>

                        <p style={{ marginBottom: '1.5rem' }}>
                            The reasons for this prolonged stay are structural:
                        </p>

                        <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem', listStyleType: 'disc' }}>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Hyper-trophic Venture Capital:</strong> Venture Capital is now capable of supporting multi-billion dollar rounds that were once the exclusive domain of the stock exchange.</li>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Sovereign Wealth Funds as New Market Makers:</strong> Entities like the Saudi PIF or Singaporean funds act as lenders of last resort, guaranteeing immense liquidity without the transparency constraints of regulated markets.</li>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Long-term Vision:</strong> Remaining private allows companies to avoid the dictatorship of quarterly earnings, crucial for capital-intensive sectors like Artificial Intelligence or space exploration.</li>
                        </ul>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>4. Fast-Track Indexes: Nasdaq's Catch-up</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            The shift is so disruptive that index providers have had to tear up the old manuals. Historically, a company had to wait months or years before entering major benchmarks. Today, Nasdaq has introduced rules to include mega-IPOs almost instantaneously. If a $2 trillion giant remained off the radar for too long, the index would cease to be a faithful mirror of the real economy.
                        </p>

                        <p style={{ marginBottom: '1.5rem' }}>
                            However, there is a technical pitfall for the investor: even for giants of this scale, initial weights in the indexes may initially be limited, complicating the strategy for those seeking immediate and significant exposure through passive instruments.
                        </p>

                        <p style={{ marginBottom: '1.5rem', padding: '1.2rem', background: 'hsla(var(--text-primary), 0.02)', borderLeft: '3px solid hsl(var(--text-secondary))', fontSize: '0.95rem' }}>
                            <strong>Deep Dive Note:</strong> The process of fundamental analysis is now drastically accelerated. The speed of index inclusion forces managers to evaluate complex business models in a few weeks rather than months, increasing the risk of errors in the initial "price discovery" due to the compression of market observation times.
                        </p>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>5. Public Markets: From Growth Incubators to Property Distributors</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            The central thesis is clear: stock exchanges are losing their function as growth incubators to become simple mechanisms for distributing ownership. Passive investors, through ETFs and index funds, have become the final recipients of already-saturated companies. This creates a tension between the need for benchmarks to represent the market and the risk of offering investors stocks that have already delivered their best valuation multiples.
                        </p>

                        <div style={{ padding: '1.5rem', background: 'hsla(var(--accent-color), 0.05)', borderRadius: 'var(--radius-md)', margin: '2rem 0', border: '1px dashed hsla(var(--accent-color), 0.3)', textAlign: 'center' }}>
                            <p style={{ margin: 0, fontSize: '1.3rem', fontStyle: 'italic', fontWeight: '500', color: 'hsl(var(--accent-color))' }}>
                                "Are investors gradually losing access to the early (and potentially most lucrative) stages of corporate growth?"
                            </p>
                        </div>

                        <p style={{ marginBottom: '1.5rem' }}>
                            It is the dilemma of the modern era: we enter the game only when the value has already been extracted by large private capital, transforming the public market into a sort of luxury second-hand market.
                        </p>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>6. Conclusion: Toward a New Financial DNA</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            We are witnessing a genetic mutation of the financial system. If once the stock exchange was the place to bet on the future, today it risks becoming the place where an already-written present is consolidated. In a world where companies are born already "adults," the saver's strategy can no longer rely on the hope of discovering the next hidden gem, but on the sophisticated management of exposure to giants that have already changed the world before ever being listed.
                        </p>

                        <p style={{ marginBottom: '1.5rem' }}>
                            The future of retail investing will depend less and less on the luck of finding the next giant and more and more on understanding an ecosystem where time and access are no longer democratically distributed.
                        </p>
                    </>
                )}
            </div>
        </article>
    );
}
