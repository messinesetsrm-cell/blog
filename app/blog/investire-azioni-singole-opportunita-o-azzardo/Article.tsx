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
                { label: lang === 'it' ? 'Azioni Singole' : 'Individual Stocks' }
            ]} />
            <header className={styles.header}>
                <div style={{ marginBottom: '2rem', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
                    <Image
                        src="/images/investire-azioni-singole.png"
                        alt="Investire in azioni singole"
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
                    {lang === 'it' ? "Investire in azioni singole: Opportunità reale o azzardo per pochi?" : "Investing in Individual Stocks: Real Opportunity or a Gamble for the Few?"}
                </h1>
                <div className={styles.meta} style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <span>Long-form</span>
                        <span>•</span>
                        <span>{lang === 'it' ? 'Feb 10, 2026' : 'Feb 10, 2026'}</span>
                    </div>
                    <ShareButton
                        title={lang === 'it' ? "Investire in azioni singole" : "Investing in Individual Stocks"}
                        text={lang === 'it' ? "Investire in azioni singole: Opportunità reale o azzardo per pochi?" : "Investing in Individual Stocks: Real Opportunity or a Gamble for the Few?"}
                        url="https://www.messinese.work/blog/investire-azioni-singole-opportunita-o-azzardo"
                    />
                </div>
            </header>

            <div className={styles.content} style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'hsl(var(--text-secondary))' }}>
                {lang === 'it' ? (
                    <>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Nel mondo della finanza personale, il mantra dominante è quello dell'investimento passivo: "compra tutto il mercato tramite un ETF e aspetta". È un consiglio eccellente per il 99% delle persone, ma esiste una strada per chi vuole puntare a qualcosa di più?
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Recentemente ho approfondito una riflessione tra Riccardo Zanetti e il consulente Alessandro Pedone che mette in discussione molti dogmi. Se non stai attento, rischi di farti molto male.
                        </p>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>1. Il mercato non è sempre intelligente</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            La teoria classica dice che i mercati sono efficienti e che tutte le informazioni sono già riflesse nel prezzo. Se fosse vero, nessuno potrebbe battere il mercato. La realtà, però, è che il prezzo non riflette l'informazione, ma l’interpretazione che la massa dà a quell'informazione.
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            In momenti di euforia o panico, la massa sbaglia. Generare "Alfa" (ovvero un rendimento superiore alla media) significa avere il coraggio di sostenere una tesi controversa quando tutti gli altri guardano altrove o scappano.
                        </p>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>2. Il vantaggio dell'investitore privato rispetto ai "professionisti"</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Paradossalmente, tu come investitore individuale hai un vantaggio enorme rispetto ai grandi gestori di fondi:
                        </p>
                        <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem', listStyle: 'disc' }}>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Il fattore tempo:</strong> Un gestore viene licenziato se fa male per due trimestri di fila. Tu puoi permetterti di avere un titolo in perdita per tre anni se credi nella tua analisi.</li>
                            <li><strong>Il controllo dei flussi:</strong> I fondi sono costretti a vendere quando il mercato scende (per rimborsare i clienti che scappano). Tu, invece, puoi decidere di iniettare liquidità proprio quando i prezzi sono a sconto.</li>
                        </ul>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>3. Non è "Stock Picking", è gestione dell’incertezza</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Selezionare l'azione giusta è solo il 10% del lavoro. Il restante 90% è gestione:
                        </p>
                        <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem', listStyle: 'disc' }}>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Tesi controverse:</strong> Non ha senso investire in ciò che è ovvio. L’opportunità risiede dove c’è un’alta interpretabilità (es. tecnologie trasformative come lo spazio o l'intelligenza artificiale applicata a settori tradizionali).</li>
                            <li><strong>L'uso dei "Chip":</strong> Non si entra "all-in". Si inizia con una piccola posizione per testare la tesi e si aggiunge capitale solo quando i risultati aziendali (le trimestrali) confermano la visione, anche se il prezzo di mercato scende.</li>
                        </ul>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>4. Il rischio dell'emulazione</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Il pericolo più grande? Copiare le mosse di qualcun altro senza capirne il processo. Investire in azioni singole richiede una mole di lavoro e uno studio delle trimestrali che la maggior parte delle persone non può o non vuole affrontare. Senza un metodo rigoroso, lo stock picking diventa gioco d'azzardo.
                        </p>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>Conclusione</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Investire in singole aziende ha senso solo se lo consideri un lavoro o un percorso educativo profondo. Se non hai il tempo di analizzare ogni trimestre l'evoluzione dei tuoi titoli o se non riesci a dormire vedendo un -30% nel tuo portafoglio, l'indice passivo rimane la tua isola felice.
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            E voi? Siete per la semplicità degli ETF o vi affascina la sfida delle singole aziende?
                        </p>
                    </>
                ) : (
                    <>
                        <p style={{ marginBottom: '1.5rem' }}>
                            In the world of personal finance, the dominant mantra is passive investing: "buy the whole market through an ETF and wait." It's excellent advice for 99% of people, but is there a path for those who want to aim for something more?
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Recently, I delved into a reflection between Riccardo Zanetti and consultant Alessandro Pedone that questions many dogmas. If you're not careful, you risk getting seriously hurt.
                        </p>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>1. The Market is Not Always Smart</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Classical theory suggests markets are efficient and all information is already reflected in the price. If true, no one could beat the market. In reality, however, the price doesn't reflect the information itself, but rather the masses' interpretation of that information.
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            In moments of euphoria or panic, the crowd is wrong. Generating "Alpha" (a return higher than average) means having the courage to support a controversial thesis when everyone else is looking away or running away.
                        </p>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>2. The Individual Investor's Advantage over "Professionals"</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Paradoxically, as an individual investor, you have a huge advantage over large fund managers:
                        </p>
                        <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem', listStyle: 'disc' }}>
                            <li style={{ marginBottom: '0.5rem' }}><strong>The Time Factor:</strong> A manager gets fired if they perform poorly for two consecutive quarters. You can afford to hold a losing stock for three years if you believe in your analysis.</li>
                            <li><strong>Control of Flows:</strong> Funds are forced to sell when the market drops (to refund fleeing clients). You, on the other hand, can decide to inject liquidity exactly when prices are discounted.</li>
                        </ul>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>3. It's Not "Stock Picking", It's Uncertainty Management</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Selecting the right stock is only 10% of the job. The remaining 90% is management:
                        </p>
                        <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem', listStyle: 'disc' }}>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Controversial Theses:</strong> It makes no sense to invest in what's obvious. Opportunity lies where there's high interpretability (e.g., transformative technologies like space or AI applied to traditional sectors).</li>
                            <li><strong>Using "Chips":</strong> You don't go "all-in." You start with a small position to test the thesis and add capital only when business results (quarterlies) confirm the vision, even if the market price drops.</li>
                        </ul>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>4. The Risk of Emulation</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            The biggest danger? Copying someone else's moves without understanding their process. Investing in individual stocks requires a workload and study of quarterly reports that most people can't or won't face. Without a rigorous method, stock picking becomes gambling.
                        </p>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>Conclusion</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Investing in individual companies only makes sense if you consider it a job or a deep educational path. If you don't have the time to analyze your stocks' evolution every quarter or if you can't sleep seeing a -30% in your portfolio, the passive index remains your happy island.
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            What about you? Are you for the simplicity of ETFs or does the challenge of individual companies fascinate you?
                        </p>
                    </>
                )}
            </div>
        </article>
    );
}
