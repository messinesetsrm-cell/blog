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
                { label: lang === 'it' ? 'Shock Petroliferi e Mercati Finanziari' : 'Oil Shocks and Financial Markets' }
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
                        ? 'Shock Petroliferi e Mercati Finanziari: Cosa Insegna la Storia agli Investitori'
                        : 'Oil Shocks and Financial Markets: What History Teaches Investors'}
                </h1>
                <div className={styles.meta} style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <span>Educazione Finanziaria</span>
                        <span>•</span>
                        <span>{lang === 'it' ? 'Mar 31, 2026' : 'Mar 31, 2026'}</span>
                    </div>
                    <ShareButton
                        title={lang === 'it' ? 'Shock Petroliferi e Mercati Finanziari' : 'Oil Shocks and Financial Markets'}
                        text={lang === 'it' ? "Contrariamente alla percezione comune, un'impennata del prezzo del petrolio non è necessariamente una condanna per il portafoglio. Scopriamo l'impatto reale sui mercati." : "Contrary to popular belief, a surge in oil prices is not necessarily a death sentence for your portfolio. Let's discover the real impact on the markets."}
                        url="https://messinese.work/blog/shock-petroliferi-mercati-finanziari"
                    />
                </div>
            </header>

            <div className={styles.content} style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'hsl(var(--text-secondary))' }}>
                <div style={{ marginBottom: '2.5rem', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.15)', border: '1px solid hsla(var(--accent-color), 0.2)' }}>
                    <Image
                        src="/images/shock_petroliferi.png"
                        alt={lang === 'it' ? "Infografica: Shock Petroliferi e Mercati" : "Infographic: Oil Shocks and Markets"}
                        width={1200}
                        height={675}
                        style={{ width: '100%', height: 'auto', display: 'block' }}
                        priority
                    />
                </div>

                {lang === 'it' ? (
                    <>
                        <p style={{ marginBottom: '1.5rem', fontSize: '1.2rem', fontStyle: 'italic', borderLeft: '4px solid hsl(var(--accent-color))', paddingLeft: '1.5rem', color: 'hsl(var(--text-primary))' }}>
                            L'instabilità geopolitica e le tensioni energetiche sono spesso percepite come il preludio a un disastro finanziario imminente. Tuttavia, analizzando i dati degli ultimi 40 anni, emerge una realtà controintuitiva: i mercati azionari tendono a reagire con una resilienza sorprendente agli shock del greggio.
                        </p>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>1. La statistica rompe il tabù: Cosa succede dopo lo "spike"?</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Contrariamente alla percezione comune, un'impennata del prezzo del petrolio non è necessariamente una condanna per il portafoglio. Analizzando i casi dal 1990 ad oggi in cui il greggio è salito di almeno il 5% per due giorni consecutivi, i dati mostrano che:
                        </p>
                        <div style={{ padding: '1.5rem', background: 'hsla(var(--accent-color), 0.05)', borderRadius: 'var(--radius-md)', marginBottom: '1.5rem', border: '1px dashed hsla(var(--accent-color), 0.3)' }}>
                            <p style={{ marginBottom: '1rem', fontWeight: '500' }}>
                                <strong>Rendimento a 12 mesi:</strong> L'S&P 500 ha registrato una crescita media superiore al 22% nell'anno successivo allo shock.
                            </p>
                            <p style={{ marginBottom: '1rem', fontWeight: '500' }}>
                                <strong>Probabilità di successo:</strong> In oltre l'80% dei casi storici, il mercato ha chiuso l'anno in positivo dopo il picco del petrolio.
                            </p>
                            <p style={{ marginBottom: '0', fontWeight: '500' }}>
                                <strong>Il paradosso della crescita:</strong> Mediamente, l'indice americano ha performato meglio negli anni di rincaro energetico (13,1%) rispetto a quelli di calo (11,3%), spesso perché l'aumento dei prezzi rifletteva un'economia globale in forte accelerazione.
                            </p>
                        </div>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>2. Crisi "Nette" vs Crisi "Logoranti"</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Non tutti i momenti di tensione sono uguali. È fondamentale distinguere la natura del ribasso per calibrare la strategia:
                        </p>
                        <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem', listStyleType: 'disc' }}>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Shock Short-Term:</strong> Eventi come il Black Monday del 1987, la crisi del debito greco (2011) o la pandemia del 2020 sono stati violenti ma rapidi. In questi scenari, il mercato tende a rimbalzare con forza una volta sfiorata la soglia psicologica del -20% (il confine del Bear Market).</li>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Crisi Sistemiche:</strong> I veri danni a lungo termine (come nel 2000 o nel 2008) si verificano quando lo shock energetico si somma a bolle speculative o a gravi errori di politica monetaria, trasformando una correzione in una recessione prolungata.</li>
                        </ul>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>3. Il VIX come termometro della paura</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Per capire se una crisi sta per esaurirsi, un indicatore chiave è il VIX (l'indice della volatilità).
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Una volatilità che staziona sopra quota 27-35 segnala un nervosismo estremo.
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Storicamente, i picchi massimi di volatilità (sopra 35) coincidono spesso con le fasi finali della discesa, offrendo ai più pazienti i migliori punti di ingresso.
                        </p>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>4. Il rischio reale: L'iperattività dell'investitore</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Il pericolo maggiore durante uno shock energetico non è il prezzo della benzina, ma la reazione impulsiva.<br />
                            Un'analisi comparativa mostra che un investimento di 1.000$ nell'S&P 500 dal 1990 ad oggi sarebbe cresciuto di 19 volte rimanendo sempre investiti. Al contrario, un investitore che avesse venduto a ogni calo del 5% per attendere tempi più calmi avrebbe ottenuto una crescita di meno di 4 volte.
                        </p>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>Conclusioni</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            In sintesi, per navigare queste fasi serve porsi tre domande:
                        </p>
                        <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem', listStyleType: 'disc' }}>
                            <li style={{ marginBottom: '0.5rem' }}>Il danno all'offerta è strutturale o temporaneo?</li>
                            <li style={{ marginBottom: '0.5rem' }}>L'inflazione rischia di diventare fuori controllo, obbligando a tassi alti per anni?</li>
                            <li style={{ marginBottom: '0.5rem' }}>Il mercato sta scontando una crisi di poche settimane o di molti trimestri?</li>
                        </ul>
                        <p style={{ marginBottom: '1.5rem', fontWeight: 'bold' }}>
                            La storia suggerisce che la pazienza e una diversificazione solida (che includa eventualmente una quota di titoli del settore energia come protezione specifica) restano le armi più efficaci contro l'incertezza energetica.
                        </p>
                    </>
                ) : (
                    <>
                        <p style={{ marginBottom: '1.5rem', fontSize: '1.2rem', fontStyle: 'italic', borderLeft: '4px solid hsl(var(--accent-color))', paddingLeft: '1.5rem', color: 'hsl(var(--text-primary))' }}>
                            Geopolitical instability and energy tensions are often perceived as the prelude to an imminent financial disaster. However, analyzing data from the last 40 years reveals a counterintuitive reality: stock markets tend to react with surprising resilience to crude oil shocks.
                        </p>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>1. Statistics break the taboo: What happens after the "spike"?</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Contrary to popular belief, a surge in oil prices is not necessarily a death sentence for your portfolio. Analyzing cases from 1990 to today where crude oil rose by at least 5% for two consecutive days, the data shows that:
                        </p>
                        <div style={{ padding: '1.5rem', background: 'hsla(var(--accent-color), 0.05)', borderRadius: 'var(--radius-md)', marginBottom: '1.5rem', border: '1px dashed hsla(var(--accent-color), 0.3)' }}>
                            <p style={{ marginBottom: '1rem', fontWeight: '500' }}>
                                <strong>12-Month Return:</strong> The S&P 500 recorded an average growth of over 22% in the year following the shock.
                            </p>
                            <p style={{ marginBottom: '1rem', fontWeight: '500' }}>
                                <strong>Probability of Success:</strong> In over 80% of historical cases, the market closed the year in positive territory after the oil peak.
                            </p>
                            <p style={{ marginBottom: '0', fontWeight: '500' }}>
                                <strong>The paradox of growth:</strong> On average, the US index performed better in years of energy price hikes (13.1%) compared to years of decline (11.3%), often because rising prices reflected a rapidly accelerating global economy.
                            </p>
                        </div>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>2. "Sharp" Crises vs "Grinding" Crises</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Not all moments of tension are created equal. It is fundamental to distinguish the nature of the downturn to calibrate your strategy:
                        </p>
                        <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem', listStyleType: 'disc' }}>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Short-Term Shocks:</strong> Events like Black Monday in 1987, the Greek debt crisis (2011), or the 2020 pandemic were violent but rapid. In these scenarios, the market tends to bounce back strongly once it nears the psychological threshold of -20% (the edge of a Bear Market).</li>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Systemic Crises:</strong> True long-term damage (as in 2000 or 2008) occurs when an energy shock is compounded by speculative bubbles or serious monetary policy errors, turning a correction into a prolonged recession.</li>
                        </ul>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>3. The VIX as a thermometer of fear</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            To understand if a crisis is about to run out of steam, a key indicator is the VIX (the volatility index).
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Volatility hovering above 27-35 signals extreme nervousness.
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Historically, maximum peaks in volatility (above 35) often coincide with the final stages of a decline, offering the most patient investors the best entry points.
                        </p>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>4. The real risk: Investor hyperactivity</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            The greatest danger during an energy shock is not the price of gasoline, but the impulsive reaction.<br />
                            A comparative analysis shows that a $1,000 investment in the S&P 500 from 1990 to today would have grown 19 times by staying fully invested. Conversely, an investor who sold at every 5% drop to wait for calmer times would have seen growth of less than 4 times.
                        </p>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>Conclusions</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            In summary, to navigate these phases, you need to ask yourself three questions:
                        </p>
                        <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem', listStyleType: 'disc' }}>
                            <li style={{ marginBottom: '0.5rem' }}>Is the damage to supply structural or temporary?</li>
                            <li style={{ marginBottom: '0.5rem' }}>Is inflation at risk of spiraling out of control, forcing high rates for years?</li>
                            <li style={{ marginBottom: '0.5rem' }}>Is the market pricing in a crisis of a few weeks or many quarters?</li>
                        </ul>
                        <p style={{ marginBottom: '1.5rem', fontWeight: 'bold' }}>
                            History suggests that patience and solid diversification (which may optionally include an allocation to energy sector stocks as a specific hedge) remain the most effective weapons against energy uncertainty.
                        </p>
                    </>
                )}
            </div>
        </article>
    );
}
