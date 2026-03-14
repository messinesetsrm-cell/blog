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
                { label: lang === 'it' ? 'Geopolitica e Portafoglio' : 'Geopolitics and Portfolio' }
            ]} />
            <header className={styles.header}>
                <div style={{ marginBottom: '2rem', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
                    <Image
                        src="/images/geopolitica-portafoglio.png"
                        alt="Geopolitica e Portafoglio"
                        width={800}
                        height={1200}
                        style={{ width: '100%', height: 'auto', display: 'block' }}
                        priority
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
                        ? "Geopolitica e Portafoglio: Come Proteggere i Risparmi Quando il Mondo Trema"
                        : "Geopolitics and Portfolio: How to Protect Savings When the World Trembles"}
                </h1>
                <div className={styles.meta} style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                         <span>Long-form</span>
                        <span>•</span>
                        <span>{lang === 'it' ? 'Mar 14, 2026' : 'Mar 14, 2026'}</span>
                    </div>
                     <ShareButton
                        title={lang === 'it' ? "Geopolitica e Portafoglio" : "Geopolitics and Portfolio"}
                        text={lang === 'it' ? "Come Proteggere i Risparmi Quando il Mondo Trema" : "How to Protect Savings When the World Trembles"}
                        url="https://messinese.work/blog/geopolitica-portafoglio-proteggere-risparmi"
                    />
                </div>
            </header>

            <div className={styles.content} style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'hsl(var(--text-secondary))' }}>
                {lang === 'it' ? (
                    <>
                        <h2 className={styles.sectionTitle}>Introduzione</h2>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Viviamo in un’epoca in cui i confini tra cronaca internazionale ed economia domestica sono sempre più sottili. Le tensioni in Medio Oriente, così come i conflitti che hanno segnato gli ultimi anni, non sono solo titoli di coda del telegiornale: sono variabili che entrano direttamente nelle nostre tasche, influenzando il costo della benzina, delle bollette e, inevitabilmente, l’andamento dei nostri investimenti.
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Ma come deve reagire un risparmiatore consapevole davanti alla volatilità causata dalla geopolitica? Ecco tre pilastri per non perdere la bussola.
                        </p>

                        <hr style={{ border: '0', borderTop: '1px solid hsl(var(--border-color))', margin: '3rem 0' }} />

                        <h2 className={styles.sectionTitle}>1. Il ritorno dell'inflazione energetica</h2>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Il primo segnale di allarme quando scoppia una crisi in aree strategiche è il prezzo delle materie prime. Petrolio e gas naturale sono i "nervi scoperti" dell'economia globale. Un aumento del greggio non significa solo pagare di più al distributore, ma innesca un effetto domino:
                        </p>
                        <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem', listStyle: 'disc' }}>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Costi di trasporto:</strong> Aumentano i prezzi dei beni di consumo.</li>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Produzione agricola:</strong> I fertilizzanti diventano più cari, alzando il carrello della spesa.</li>
                            <li><strong>Margini aziendali:</strong> Le imprese faticano a mantenere i profitti, riflettendosi sulle quotazioni azionarie.</li>
                        </ul>

                        <hr style={{ border: '0', borderTop: '1px solid hsl(var(--border-color))', margin: '3rem 0' }} />

                        <h2 className={styles.sectionTitle}>2. Banche Centrali: il "taglio" che si allontana</h2>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Fino a pochi mesi fa, il mercato scommetteva su una rapida discesa dei tassi di interesse nel 2026. Tuttavia, le tensioni geopolitiche complicano i piani delle Banche Centrali. Se l'inflazione rialza la testa a causa dell'energia, è probabile che i tassi rimangano alti più a lungo per evitare una nuova spirale dei prezzi.
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            <strong>Cosa significa per te?</strong> I mutui potrebbero non scendere velocemente come sperato, ma i rendimenti dei conti deposito e dei titoli di Stato restano interessanti.
                        </p>

                        <hr style={{ border: '0', borderTop: '1px solid hsl(var(--border-color))', margin: '3rem 0' }} />

                        <h2 className={styles.sectionTitle}>3. La strategia del "Rumore Bianco"</h2>
                        <p style={{ marginBottom: '1.5rem' }}>
                            La tentazione più grande durante una crisi è vendere tutto e "aspettare che passi". Storicamente, questa è la scelta più costosa. I mercati tendono a reagire in modo eccessivo nelle prime due settimane di un conflitto, per poi stabilizzarsi.
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Il segreto è la diversificazione intelligente:
                        </p>
                        <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem', listStyle: 'disc' }}>
                            <li style={{ marginBottom: '0.5rem' }}>Non limitarti al classico mix azioni/obbligazioni.</li>
                            <li style={{ marginBottom: '0.5rem' }}>Valuta l'inserimento di materie prime o valute rifugio.</li>
                            <li>Controlla la duration dei tuoi titoli: la sensibilità ai tassi è il rischio maggiore oggi.</li>
                        </ul>

                        <hr style={{ border: '0', borderTop: '1px solid hsl(var(--border-color))', margin: '3rem 0' }} />

                        <h2 className={styles.sectionTitle}>Conclusione</h2>
                        <p style={{ marginBottom: '1.5rem' }}>
                            <strong>Il consiglio:</strong> L'educazione finanziaria serve a capire che non possiamo controllare i venti di guerra, ma possiamo regolare le vele del nostro portafoglio. Invece di rincorrere l'ultima notizia, concentrati sul tuo obiettivo di lungo termine.
                        </p>
                        <p style={{ marginBottom: '1.5rem', fontWeight: 'bold' }}>
                            La volatilità è il prezzo che paghiamo per il rendimento futuro.
                        </p>
                    </>
                ) : (
                    <>
                        <h2 className={styles.sectionTitle}>Introduction</h2>
                        <p style={{ marginBottom: '1.5rem' }}>
                            We live in an era where the boundaries between international news and domestic economy are increasingly blurred. Tensions in the Middle East, as well as the conflicts that have marked recent years, are not just news headlines: they are variables that directly enter our pockets, influencing the cost of gasoline, bills, and, inevitably, the performance of our investments.
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            But how should an aware saver react to the volatility caused by geopolitics? Here are three pillars to avoid losing your compass.
                        </p>

                        <hr style={{ border: '0', borderTop: '1px solid hsl(var(--border-color))', margin: '3rem 0' }} />

                        <h2 className={styles.sectionTitle}>1. The Return of Energy Inflation</h2>
                        <p style={{ marginBottom: '1.5rem' }}>
                            The first warning sign when a crisis breaks out in strategic areas is the price of raw materials. Oil and natural gas are the "exposed nerves" of the global economy. An increase in crude oil doesn't just mean paying more at the pump, but triggers a domino effect:
                        </p>
                         <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem', listStyle: 'disc' }}>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Transport costs:</strong> Prices of consumer goods rise.</li>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Agricultural production:</strong> Fertilizers become more expensive, raising the grocery bill.</li>
                            <li><strong>Corporate margins:</strong> Companies struggle to maintain profits, reflecting on stock prices.</li>
                        </ul>

                        <hr style={{ border: '0', borderTop: '1px solid hsl(var(--border-color))', margin: '3rem 0' }} />

                        <h2 className={styles.sectionTitle}>2. Central Banks: The Delayed "Cut"</h2>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Until a few months ago, the market bet on a rapid drop in interest rates in 2026. However, geopolitical tensions complicate Central Banks' plans. If inflation rears its head due to energy, rates are likely to remain high for longer to prevent a new price spiral.
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            <strong>What does this mean for you?</strong> Mortgages might not drop as quickly as hoped, but returns on deposit accounts and government bonds remain attractive.
                        </p>

                        <hr style={{ border: '0', borderTop: '1px solid hsl(var(--border-color))', margin: '3rem 0' }} />

                        <h2 className={styles.sectionTitle}>3. The "White Noise" Strategy</h2>
                        <p style={{ marginBottom: '1.5rem' }}>
                            The greatest temptation during a crisis is to sell everything and "wait for it to pass." Historically, this is the most costly choice. Markets tend to overreact in the first two weeks of a conflict, only to stabilize.
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                             The secret is intelligent diversification:
                        </p>
                        <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem', listStyle: 'disc' }}>
                            <li style={{ marginBottom: '0.5rem' }}>Don't limit yourself to the classic stock/bond mix.</li>
                            <li style={{ marginBottom: '0.5rem' }}>Consider including commodities or safe-haven currencies.</li>
                            <li>Check the duration of your bonds: interest rate sensitivity is the biggest risk today.</li>
                        </ul>

                        <hr style={{ border: '0', borderTop: '1px solid hsl(var(--border-color))', margin: '3rem 0' }} />

                        <h2 className={styles.sectionTitle}>Conclusion</h2>
                        <p style={{ marginBottom: '1.5rem' }}>
                            <strong>Advice:</strong> Financial education serves to understand that we cannot control the winds of war, but we can adjust the sails of our portfolio. Instead of chasing the latest news, focus on your long-term goal.
                        </p>
                        <p style={{ marginBottom: '1.5rem', fontWeight: 'bold' }}>
                            Volatility is the price we pay for future returns.
                        </p>
                    </>
                )}
            </div>
        </article>
    );
}
