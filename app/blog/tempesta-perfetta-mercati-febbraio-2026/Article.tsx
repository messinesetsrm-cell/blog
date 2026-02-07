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
                { label: lang === 'it' ? 'Tempesta sui Mercati' : 'Market Storm' }
            ]} />
            <header className={styles.header}>
                <div style={{ marginBottom: '2rem', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
                    <Image
                        src="/images/tempesta-perfetta-2026.png"
                        alt="Febbraio 2026: Tempesta Perfetta sui Mercati"
                        width={800}
                        height={450}
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
                        ? "Febbraio 2026: Tempesta Perfetta sui Mercati. Cosa sta succedendo?"
                        : "February 2026: Perfect Storm on the Markets. What is Happening?"}
                </h1>
                <div className={styles.meta} style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <span>Analisi</span>
                        <span>•</span>
                        <span>{lang === 'it' ? 'Feb 07, 2026' : 'Feb 07, 2026'}</span>
                    </div>
                    <ShareButton
                        title={lang === 'it' ? "Febbraio 2026: Tempesta Perfetta sui Mercati" : "February 2026: Perfect Storm on the Markets"}
                        text={lang === 'it' ? "Cosa sta succedendo nel panorama finanziario?" : "What is happening in the financial landscape?"}
                        url="https://messinese.work/blog/tempesta-perfetta-mercati-febbraio-2026"
                    />
                </div>
            </header>

            <div className={styles.content} style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'hsl(var(--text-secondary))' }}>
                {lang === 'it' ? (
                    <>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Il panorama finanziario di questi giorni sembra un puzzle complesso dove i pezzi faticano a incastrarsi. Se fino a poche settimane fa regnava un cauto ottimismo, l'inizio di febbraio ha rimescolato le carte, colpendo simultaneamente i giganti del tech, il mondo crypto e persino i beni rifugio per eccellenza.
                        </p>

                        <h2 className={styles.sectionTitle}>Il "Caso Amazon" e il brusco risveglio delle Big Tech</h2>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Tutto è partito dai dati trimestrali. Amazon, da anni locomotiva del settore, ha presentato previsioni per il prossimo futuro che hanno gelato gli investitori. Nonostante i volumi di vendita restino imponenti, il mercato ha reagito con una vendita massiccia. Questo "sell-off" non è rimasto isolato: ha trascinato il Nasdaq in territorio negativo, sollevando una domanda cruciale: le valutazioni delle aziende tecnologiche sono ancora sostenibili in questo scenario economico?
                        </p>

                        <h2 className={styles.sectionTitle}>Bitcoin e il legame con il rischio</h2>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Chi sperava in un Bitcoin totalmente decorrelato dai mercati tradizionali è rimasto deluso. La criptovaluta regina ha subito una correzione significativa, muovendosi quasi in sincronia con le borse americane. Quando gli investitori istituzionali hanno bisogno di liquidità per coprire le perdite sul fronte azionario, spesso attingono agli asset più volatili e liquidi, come appunto le crypto.
                        </p>

                        <h2 className={styles.sectionTitle}>Metalli Preziosi: Un porto sicuro meno calmo del previsto</h2>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Anche l'oro e l'argento, storicamente i "salvagent" durante le tempeste, stanno vivendo giornate di forte tensione. In un contesto di dollaro forte e necessità di liquidità immediata, persino i metalli preziosi hanno mostrato oscillazioni che mettono alla prova i nervi dei risparmiatori.
                        </p>

                        <blockquote style={{ borderLeft: '4px solid hsl(var(--accent-color))', paddingLeft: '1.5rem', fontStyle: 'italic', margin: '2rem 0', color: 'hsl(var(--text-main))' }}>
                            "In momenti di alta emotività, il mercato smette di guardare ai fondamentali e inizia a rispondere alla paura. La storia insegna che la lucidità è l'asset più prezioso in un portafoglio."
                        </blockquote>

                        <h2 className={styles.sectionTitle}>Cosa trarre da questo scenario?</h2>
                        <p style={{ marginBottom: '1.5rem' }}>
                            È fondamentale ricordare che la volatilità è una caratteristica intrinseca dei mercati, specialmente in fasi di transizione come quella attuale. Per l'investitore consapevole, questi momenti non sono solo fonte di stress, ma anche occasioni per rivalutare la propria tolleranza al rischio e la diversificazione del portafoglio.
                        </p>
                    </>
                ) : (
                    <>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Today's financial landscape seems like a complex puzzle where the pieces struggle to fit together. While cautious optimism reigned until just a few weeks ago, the beginning of February has reshuffled the cards, simultaneously hitting tech giants, the crypto world, and even the ultimate safe-haven assets.
                        </p>

                        <h2 className={styles.sectionTitle}>The "Amazon Case" and the Rude Awakening of Big Tech</h2>
                        <p style={{ marginBottom: '1.5rem' }}>
                            It all started with the quarterly data. Amazon, for years the locomotive of the sector, presented forecasts for the near future that froze investors. Despite sales volumes remaining impressive, the market reacted with a massive sell-off. This sell-off was not isolated: it dragged the Nasdaq into negative territory, raising a crucial question: are tech company valuations still sustainable in this economic scenario?
                        </p>

                        <h2 className={styles.sectionTitle}>Bitcoin and the Link to Risk</h2>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Those who hoped for Bitcoin to be totally uncorrelated from traditional markets were disappointed. The king of cryptocurrencies suffered a significant correction, moving almost in sync with American stock exchanges. When institutional investors need liquidity to cover losses on the equity front, they often tap into the most volatile and liquid assets, such as crypto.
                        </p>

                        <h2 className={styles.sectionTitle}>Precious Metals: A Less Calm Safe Haven Than Expected</h2>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Even gold and silver, historically the "lifeboats" during storms, are experiencing days of strong tension. In a context of a strong dollar and the need for immediate liquidity, even precious metals have shown fluctuations that test the nerves of savers.
                        </p>

                        <blockquote style={{ borderLeft: '4px solid hsl(var(--accent-color))', paddingLeft: '1.5rem', fontStyle: 'italic', margin: '2rem 0', color: 'hsl(var(--text-main))' }}>
                            "In moments of high emotion, the market stops looking at fundamentals and starts responding to fear. History teaches that lucidity is the most precious asset in a portfolio."
                        </blockquote>

                        <h2 className={styles.sectionTitle}>What to Take from This Scenario?</h2>
                        <p style={{ marginBottom: '1.5rem' }}>
                            It is fundamental to remember that volatility is an intrinsic characteristic of markets, especially in transition phases like the current one. For the conscious investor, these moments are not just a source of stress, but also opportunities to reassess their risk tolerance and portfolio diversification.
                        </p>
                    </>
                )}
            </div>
        </article>
    );
}
