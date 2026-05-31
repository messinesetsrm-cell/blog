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
                { label: lang === 'it' ? 'Debito Italia vs Grecia' : 'Italy vs Greece Debt' }
            ]} />
            <header className={styles.header}>
                <div style={{ marginBottom: '2rem', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
                    <Image
                        src="/images/italia-grecia-debito-pubblico.png"
                        alt="Italy and Greece public debt comparison chart and architectural symbols"
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
                        ? "L’Italia ha davvero superato la Grecia per debito pubblico? Numeri, miti e verità macroeconomiche" 
                        : "Has Italy Really Surpassed Greece in Public Debt? Numbers, Myths, and Macroeconomic Truths"}
                </h1>
                <div className={styles.meta} style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <span>Macroeconomia</span>
                        <span>•</span>
                        <span>{lang === 'it' ? 'Mag 31, 2026' : 'May 31, 2026'}</span>
                    </div>
                    <ShareButton
                        title={lang === 'it' ? "Debito Pubblico Italia vs Grecia" : "Italy vs Greece Public Debt"}
                        text={lang === 'it' 
                            ? "L’Italia ha davvero superato la Grecia per debito pubblico? Numeri, miti e verità macroeconomiche" 
                            : "Has Italy Really Surpassed Greece in Public Debt? Numbers, Myths, and Macroeconomic Truths"}
                        url="https://www.messinese.work/blog/italia-superato-grecia-debito-pubblico"
                    />
                </div>
            </header>

            <div className={styles.content} style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'hsl(var(--text-secondary))' }}>
                {lang === 'it' ? (
                    <>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Nelle ultime settimane i titoli dei giornali finanziari hanno rilanciato una notizia che ha fatto tremare i polsi a molti: secondo le previsioni macroeconomiche, l’Italia registrerà un rapporto debito/PIL superiore a quello della Grecia, diventando la maglia nera dell’Eurozona.
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Ma le cose stanno davvero così? Siamo davvero "messi peggio" del paese che nel 2010 ha rischiato il default totale sotto la scure della Troika?
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Per capire la realtà dietro ai titoli sensazionalistici, dobbiamo analizzare i dati reali, guardare alla struttura delle due economie e comprendere perché la Grecia sta correndo mentre l'Italia è frenata dall'effetto "palla di neve".
                        </p>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>Il sorpasso nei dati: cosa sta succedendo?</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            I dati dei documenti di finanza pubblica scattano una fotografia chiara sulla direzione dei due paesi:
                        </p>
                        <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem', listStyle: 'disc' }}>
                            <li style={{ marginBottom: '0.8rem' }}>
                                <strong>Italia:</strong> Le previsioni indicano che il debito salirà al 138,6% del PIL, in aumento rispetto al 137% dell'anno precedente.
                            </li>
                            <li style={{ marginBottom: '0.8rem' }}>
                                <strong>Grecia:</strong> Atene stima una discesa decisa del proprio rapporto, che passerà dal 146% al 136,8%.
                            </li>
                        </ul>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Il sorpasso, che gli analisti attendevano inizialmente più avanti nel tempo, è arrivato con circa due anni di anticipo. Tuttavia, fermarsi a questa percentuale significa osservare solo la punta dell'iceberg.
                        </p>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>Un confronto tra due "campionati" differenti</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Dire che l'economia italiana è più fragile di quella greca sulla base del solo rapporto debito/PIL è fuorviante. Parliamo di due scale di grandezza completamente diverse:
                        </p>
                        <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem', listStyle: 'disc' }}>
                            <li style={{ marginBottom: '0.8rem' }}>
                                <strong>Il valore assoluto del debito:</strong> L’Italia gestisce un debito pubblico superiore ai 3.140 miliardi di euro, contro i circa 363 miliardi della Grecia.
                            </li>
                            <li style={{ marginBottom: '0.8rem' }}>
                                <strong>Il PIL:</strong> L'economia italiana genera un Prodotto Interno Lordo di circa 2.250 miliardi di euro, ovvero nove volte superiore a quello greco (che si attesta sui 250 miliardi).
                            </li>
                        </ul>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Inoltre, la struttura industriale italiana è storicamente più solida. L'Italia è la seconda manifattura d'Europa (il settore industriale pesa per il 24% del PIL) e vanta un surplus commerciale stazionario, esportando più di quanto importa. La Grecia, al contrario, ha un'economia fortemente sbilanciata sui servizi e sul turismo (che incide per oltre il 30% tra effetti diretti e indiretti) e sullo storico pilastro dell'armamento navale mercantile.
                        </p>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>Il "miracolo" greco: a quale prezzo?</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Per capire come Atene sia riuscita a tagliare ben 70 punti di debito/PIL dal picco della pandemia ad oggi, bisogna ricordare il percorso lacrime e sangue iniziato dopo la crisi del 2009.
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            La Grecia ha ottenuto imponenti piani di salvataggio europei, ma ha dovuto accettare riforme strutturali draconiane:
                        </p>
                        <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem', listStyle: 'disc' }}>
                            <li style={{ marginBottom: '0.8rem' }}>Innalzamento dell'età pensionabile a 67 anni.</li>
                            <li style={{ marginBottom: '0.8rem' }}>Tagli lineari alla sanità e ai sistemi previdenziali.</li>
                            <li style={{ marginBottom: '0.8rem' }}>Un default controllato nel 2012 con il taglio del 53,5% del valore dei titoli in mano agli investitori privati.</li>
                        </ul>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Questo ha causato un costo sociale devastante: il PIL greco è crollato del 25% in cinque anni e la disoccupazione giovanile ha toccato la vetta del 40%. Oggi il paese raccoglie i frutti economici di quei sacrifici, con riforme strutturali digitali e una crescita stimata del PIL attorno al 7%, sostenuta anche dal piano Greece 2.0.
                        </p>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>Il vero problema dell'Italia: la crescita zero</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Il paradosso italiano risiede proprio qui. Nonostante una base manifatturiera importante e conti pubblici presidiati (il deficit programmato è sotto il tetto del 3%), l'Italia non cresce. Con uno sviluppo stimato appena tra lo 0,5% e lo 0,6%, i tassi di interesse reali sul debito superano la crescita nominale dell'economia. È il classico meccanismo macroeconomico in cui il peso degli interessi fa salire il debito più velocemente di quanto il Paese riesca a produrre.
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Mentre altri grandi paesi debitori dell'Eurozona (come Portogallo, Cipro o Irlanda) hanno sfruttato la ripresa post-Covid per abbattere i propri rapporti debito/PIL, l'Italia è l'unica ad aver invertito la rotta tornando a salire.
                        </p>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>Cosa dicono i mercati?</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            I mercati finanziari stanno premiando la ristrutturazione greca: la borsa di Atene ha chiuso l'anno precedente con un eccellente +44% e i titoli di Stato greci hanno riconquistato lo status di Investment Grade.
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Per l'Italia la situazione non è drammatica – lo spread BTP-Bund rimane storicamente contenuto grazie a una percepita stabilità politica – ma la spesa per gli interessi drena costantemente risorse che potrebbero essere destinate a investimenti, sviluppo e riduzione del cuneo fiscale.
                        </p>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>Conclusioni: una lezione per il futuro del lavoro e dell'impresa</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Il caso dello scontro a distanza tra Italia e Grecia dimostra una dura verità economica: il debito in sé non è un problema assoluto, lo diventa se l'economia smette di correre.
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Per invertire la rotta e alleggerire il fardello che grava sulle imprese e sui lavoratori, l'Italia non ha bisogno di semplici manovre di austerità o di tagli lineari, ma di riforme strutturali profonde (sburocratizzazione, costi energetici competitivi e riforme fiscali) capaci di liberare la produttività. La domanda che resta aperta è solo una: la politica e l'elettorato italiano sono davvero pronti ad affrontare i costi nel breve termine che riforme del genere comportano?
                        </p>
                    </>
                ) : (
                    <>
                        <p style={{ marginBottom: '1.5rem' }}>
                            In recent weeks, financial headlines have flashed a piece of news that has sent shivers down many spines: according to macroeconomic forecasts, Italy will record a higher debt-to-GDP ratio than Greece, making it the black jersey of the Eurozone.
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            But is this really the case? Are we truly "worse off" than the country that in 2010 risked total default under the hammer of the Troika?
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            To understand the reality behind these sensational headlines, we need to analyze the real data, look at the structure of the two economies, and understand why Greece is running while Italy is held back by the "snowball" effect.
                        </p>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>The overtake in the data: what is happening?</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Data from public finance documents capture a clear picture of the direction of the two countries:
                        </p>
                        <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem', listStyle: 'disc' }}>
                            <li style={{ marginBottom: '0.8rem' }}>
                                <strong>Italy:</strong> Forecasts indicate that debt will rise to 138.6% of GDP, up from 137% the previous year.
                            </li>
                            <li style={{ marginBottom: '0.8rem' }}>
                                <strong>Greece:</strong> Athens estimates a sharp decline in its ratio, which will go from 146% to 136.8%.
                            </li>
                        </ul>
                        <p style={{ marginBottom: '1.5rem' }}>
                            The overtake, which analysts initially expected further down the road, has arrived about two years early. However, stopping at this percentage means looking only at the tip of the iceberg.
                        </p>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>A comparison between two different 'leagues'</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Saying that the Italian economy is more fragile than the Greek one based solely on the debt-to-GDP ratio is misleading. We are talking about two completely different scales of magnitude:
                        </p>
                        <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem', listStyle: 'disc' }}>
                            <li style={{ marginBottom: '0.8rem' }}>
                                <strong>The absolute value of debt:</strong> Italy manages a public debt exceeding 3,140 billion euros, compared to approximately 363 billion euros for Greece.
                            </li>
                            <li style={{ marginBottom: '0.8rem' }}>
                                <strong>GDP:</strong> The Italian economy generates a Gross Domestic Product of about 2,250 billion euros, which is nine times larger than the Greek GDP (which stands at around 250 billion euros).
                            </li>
                        </ul>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Furthermore, Italy's industrial structure is historically more robust. Italy is the second-largest manufacturing economy in Europe (the industrial sector accounts for 24% of GDP) and boasts a steady trade surplus, exporting more than it imports. Greece, conversely, has an economy heavily tilted towards services and tourism (which accounts for over 30% through direct and indirect effects) and its historic pillar of merchant shipping.
                        </p>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>The Greek 'miracle': at what cost?</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            To understand how Athens managed to cut a whopping 70 points of debt-to-GDP from the pandemic peak to today, we must remember the path of tears and blood that began after the 2009 crisis.
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Greece received massive European rescue packages but had to accept draconian structural reforms:
                        </p>
                        <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem', listStyle: 'disc' }}>
                            <li style={{ marginBottom: '0.8rem' }}>Raising the retirement age to 67.</li>
                            <li style={{ marginBottom: '0.8rem' }}>Linear cuts to health and social security systems.</li>
                            <li style={{ marginBottom: '0.8rem' }}>A controlled default in 2012 with a 53.5% haircut on the value of bonds held by private investors.</li>
                        </ul>
                        <p style={{ marginBottom: '1.5rem' }}>
                            This caused a devastating social cost: Greek GDP collapsed by 25% in five years and youth unemployment reached a peak of 40%. Today the country is reaping the economic fruits of those sacrifices, with digital structural reforms and estimated GDP growth of around 7%, also supported by the Greece 2.0 plan.
                        </p>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>The real problem of Italy: zero growth</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            The Italian paradox lies precisely here. Despite a major manufacturing base and supervised public accounts (the planned deficit is below the 3% ceiling), Italy is not growing. With an estimated growth of just 0.5% to 0.6%, real interest rates on debt exceed the nominal growth of the economy. It is the classic macroeconomic mechanism where the weight of interest payments raises the debt faster than the country can produce.
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            While other large debtor countries in the Eurozone (such as Portugal, Cyprus, or Ireland) capitalized on the post-Covid recovery to bring down their debt-to-GDP ratios, Italy is the only one to have reversed course and started climbing again.
                        </p>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>What do the markets say?</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Financial markets are rewarding Greece's restructuring: the Athens stock exchange closed the previous year with an excellent +44%, and Greek government bonds regained Investment Grade status.
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            For Italy, the situation is not dramatic – the BTP-Bund spread remains historically contained thanks to perceived political stability – but interest spending constantly drains resources that could be directed toward investments, development, and reducing the tax wedge.
                        </p>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>Conclusions: a lesson for the future of work and business</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            The case of the long-distance clash between Italy and Greece demonstrates a harsh economic truth: debt in itself is not an absolute problem; it becomes one if the economy stops running.
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            To reverse course and lighten the burden weighing on businesses and workers, Italy does not need simple austerity measures or linear cuts, but deep structural reforms (de-bureaucratization, competitive energy costs, and tax reforms) capable of unleashing productivity. The question that remains open is only one: are Italian politics and the electorate truly ready to face the short-term costs that such reforms entail?
                        </p>
                    </>
                )}
            </div>
        </article>
    );
}
