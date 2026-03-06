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
                { label: lang === 'it' ? 'ETF Covered Call' : 'ETF Covered Call' }
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
                        ? "ETF Covered Call: La Strategia per Generare Rendite nel Mercato Odierno"
                        : "ETF Covered Call: The Strategy to Generate Yield in Today's Market"}
                </h1>
                <div className={styles.meta} style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <span>Educazione Finanziaria</span>
                        <span>•</span>
                        <span>Mar 06, 2026</span>
                    </div>
                    <ShareButton
                        title={lang === 'it' ? "ETF Covered Call" : "ETF Covered Call"}
                        text={lang === 'it' ? "La Strategia per Generare Rendite nel Mercato Odierno" : "The Strategy to Generate Yield in Today's Market"}
                        url="https://messinese.work/blog/etf-covered-call-strategia-rendite"
                    />
                </div>
            </header>

            <div className={styles.content} style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'hsl(var(--text-secondary))' }}>
                <div style={{ marginBottom: '2rem', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
                    <Image
                        src="/images/etf-covered-call.png"
                        alt="ETF Covered Call Strategy"
                        width={1200}
                        height={675}
                        style={{ width: '100%', height: 'auto', display: 'block' }}
                        priority
                    />
                </div>

                {lang === 'it' ? (
                    <>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Nel panorama degli investimenti moderni, la ricerca di un flusso di cassa costante è diventata una priorità per molti. Gli ETF Covered Call (noti anche come strategie Buy-Write) si sono imposti come una delle soluzioni più interessanti per chi cerca dividendi elevati, specialmente in fasi di mercato laterale o di moderata incertezza.
                        </p>

                        <p style={{ marginBottom: '1.5rem' }}>
                            Ma come funzionano esattamente e perché dovresti considerarli per il tuo portafoglio?
                        </p>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>Il Meccanismo: Combinare Azioni e Opzioni</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            La strategia alla base di questi strumenti è duale. L’ETF non si limita a detenere un paniere di azioni (come il Nasdaq 100 o l'S&P 500), ma compie un'operazione supplementare: vende opzioni Call sui titoli che possiede.
                        </p>

                        <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem', listStyle: 'disc' }}>
                            <li style={{ marginBottom: '0.5rem' }}><strong>L'incasso del "Premio":</strong> Vendendo queste opzioni, il fondo riceve immediatamente un pagamento in denaro dai compratori.</li>
                            <li style={{ marginBottom: '0.5rem' }}><strong>La Distribuzione:</strong> Questo premio, insieme ai dividendi classici delle azioni, viene distribuito periodicamente agli investitori dell'ETF.</li>
                        </ul>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>Quando conviene investire in Covered Call?</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Questi strumenti non sono "magici", ma eccellono in contesti specifici:
                        </p>

                        <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem', listStyle: 'disc' }}>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Mercati Laterali:</strong> Quando le borse si muovono poco, il premio incassato dalle opzioni rappresenta un guadagno netto che batte l'investimento azionario tradizionale.</li>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Mercati in Lieve Calo:</strong> Il premio funge da "ammortizzatore", riducendo la perdita complessiva rispetto a chi detiene solo le azioni.</li>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Bisogno di Cash-Flow:</strong> Per chi vuole integrare le proprie entrate mensili senza dover vendere quote del proprio investimento.</li>
                        </ul>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>Il "Compromesso" Necessario</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Non esiste un pasto gratis in finanza. Il principale svantaggio dei Covered Call è il tetto ai guadagni (Cap).
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Se il mercato azionario vive un rialzo improvviso e violento (un bull market sfrenato), l'ETF sarà obbligato a vendere i titoli al prezzo prestabilito dell'opzione, rinunciando a gran parte della crescita extra. In pratica, scambi il potenziale di guadagno infinito con una rendita certa e immediata.
                        </p>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>Conclusioni</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Gli ETF Covered Call sono strumenti sofisticati che portano nel mondo del retail strategie un tempo riservate ai professionisti del trading in opzioni. Sono ideali per chi privilegia la generazione di reddito e la riduzione della volatilità, accettando di sacrificare i massimi guadagni durante le grandi corse del mercato.
                        </p>
                    </>
                ) : (
                    <>
                        <p style={{ marginBottom: '1.5rem' }}>
                            In today's investment landscape, the search for consistent cash flow has become a priority for many. Covered Call ETFs (also known as Buy-Write strategies) have emerged as one of the most interesting solutions for those seeking high dividends, especially in sideways market phases or periods of moderate uncertainty.
                        </p>

                        <p style={{ marginBottom: '1.5rem' }}>
                            But how exactly do they work and why should you consider them for your portfolio?
                        </p>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>The Mechanism: Combining Stocks and Options</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            The strategy behind these instruments is dual. The ETF doesn't just hold a basket of stocks (like the Nasdaq 100 or S&P 500), but performs an additional operation: it sells Call options on the titles it owns.
                        </p>

                        <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem', listStyle: 'disc' }}>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Collecting the "Premium":</strong> By selling these options, the fund immediately receives a cash payment from the buyers.</li>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Distribution:</strong> This premium, along with classic stock dividends, is periodically distributed to ETF investors.</li>
                        </ul>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>When is it worth investing in Covered Calls?</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            These instruments are not "magic," but they excel in specific contexts:
                        </p>

                        <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem', listStyle: 'disc' }}>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Sideways Markets:</strong> When stock markets move little, the premium collected from options represents a net gain that beats traditional stock investment.</li>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Slightly Declining Markets:</strong> The premium acts as a "buffer," reducing the overall loss compared to those holding only stocks.</li>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Need for Cash-Flow:</strong> For those who want to supplement their monthly income without having to sell shares of their investment.</li>
                        </ul>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>The Necessary "Compromise"</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            There is no free lunch in finance. The main disadvantage of Covered Calls is the "cap" on gains.
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            If the stock market experiences a sudden and violent rise (an unbridled bull market), the ETF will be forced to sell the titles at the option's predetermined price, giving up much of the extra growth. In practice, you trade the potential for infinite gain for a certain and immediate yield.
                        </p>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>Conclusions</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Covered Call ETFs are sophisticated tools that bring strategies once reserved for professional option traders to the retail world. They are ideal for those who prioritize income generation and volatility reduction, accepting to sacrifice maximum gains during major market rallies.
                        </p>
                    </>
                )}
            </div>
        </article>
    );
}
