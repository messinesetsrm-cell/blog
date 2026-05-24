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
                { label: lang === 'it' ? "Inflazione e mercati: lo scenario" : "Inflation and markets: the scenario" }
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
                        ? "Inflazione e mercati: lo scenario che nessuno vuole ma tutti stanno iniziando a prezzare"
                        : "Inflation and markets: the scenario nobody wants but everyone is starting to price in"}
                </h1>
                <div className={styles.meta} style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <span>Macroeconomia & Investimenti</span>
                        <span>•</span>
                        <span>{lang === 'it' ? 'Mag 24, 2026' : 'May 24, 2026'}</span>
                    </div>
                    <ShareButton
                        title={lang === 'it' ? "Inflazione e mercati: lo scenario che nessuno vuole" : "Inflation and markets: the scenario nobody wants"}
                        text={lang === 'it' ? "L'inflazione è tornata al centro della scena, e con lei il fantasma di nuovi rialzi dei tassi. Cosa sta succedendo?" : "Inflation is back to center stage, and with it the phantom of new rate hikes. What is happening?"}
                        url="https://messinese.work/blog/inflazione-mercati-scenario"
                    />
                </div>
            </header>

            <div className={styles.content} style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'hsl(var(--text-secondary))' }}>
                <div style={{ marginBottom: '2.5rem', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.15)', border: '1px solid hsla(var(--accent-color), 0.2)' }}>
                    <Image
                        src="/images/inflazione_mercati_scenario.png"
                        alt={lang === 'it' ? "Illustrazione: Inflazione e mercati finanziari" : "Illustration: Inflation and financial markets"}
                        width={1200}
                        height={675}
                        style={{ width: '100%', height: 'auto', display: 'block' }}
                        priority
                    />
                </div>

                {lang === 'it' ? (
                    <>
                        <p style={{ marginBottom: '1.5rem', fontSize: '1.2rem', fontStyle: 'italic', borderLeft: '4px solid hsl(var(--accent-color))', paddingLeft: '1.5rem', color: 'hsl(var(--text-primary))' }}>
                            Fino a qualche settimana fa sembrava uno scenario di coda, una possibilità remota da considerare ma non da temere davvero. Oggi, guardando i mercati finanziari, la narrativa è cambiata: l'inflazione è tornata al centro della scena, e con lei il fantasma di nuovi rialzi dei tassi.
                        </p>
                        
                        <p style={{ marginBottom: '1.5rem' }}>
                            Cosa sta succedendo, e cosa significa per chi investe?
                        </p>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>Il catalizzatore: lo Stretto di Hormuz</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Tutto parte da una crisi geopolitica che molti speravano si risolvesse in fretta. Le tensioni nello Stretto di Hormuz — il corridoio marittimo attraverso cui transita circa un quarto del petrolio e una quota rilevante del gas naturale liquefatto globale — hanno innescato una perturbazione profonda sui mercati energetici. A maggio il Brent si attesta intorno ai 105 dollari al barile, con rotte alternative più costose e più lente che non riescono a compensare la riduzione dei flussi.
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            L'effetto non si limita alla bolletta energetica. Quando il petrolio sale a questi livelli, l'impatto si propaga su logistica, trasporti, produzione industriale e alimentari. L'inflazione smette di essere un problema del settore energia e diventa un problema trasversale.
                        </p>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>I numeri: cosa dicono le previsioni</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            La Commissione Europea ha già rivisto le stime. Per l'Italia, lo scenario attuale si traduce in:
                        </p>
                        <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem', listStyleType: 'disc' }}>
                            <li style={{ marginBottom: '0.5rem' }}><strong>PIL 2026</strong> fermo allo 0,5%</li>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Inflazione</strong> schizzata al 3,2%</li>
                        </ul>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Per l'Eurozona nel suo complesso, la crescita è stata tagliata all'1,1% con inflazione attesa al 3%. Numeri che segnano un netto deterioramento rispetto alle aspettative di inizio anno, quando si parlava di un ciclo di allentamento monetario ormai avviato.
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            A livello globale, anche il PCE americano — la misura dell'inflazione preferita dalla Federal Reserve — ha raggiunto il 3,5% su base annua, con la componente core al 3,2%. Il punto critico è che l'inflazione stava già salendo prima che la crisi in Medio Oriente aggiungesse pressione sui prezzi energetici.
                        </p>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>La BCE di fronte a un dilemma</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Per mesi i mercati avevano scontato un percorso di discesa dei tassi in Europa. Quel percorso oggi appare molto meno lineare.
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            I tassi BCE attuali — tasso sui depositi al 2,00%, tasso di rifinanziamento principale al 2,15% — riflettono ancora una postura di attesa. Ma le aspettative degli operatori stanno cambiando: i mercati prezzano attualmente circa due rialzi nel corso del 2026, con una probabilità non trascurabile di un terzo intervento. Bloomberg Economics anticipa che la prima mossa potrebbe arrivare già a giugno.
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Il problema strutturale della BCE è che la politica monetaria può raffreddare la domanda interna, ma non può riaprire le rotte energetiche né ridurre le tensioni geopolitiche. Alzare i tassi in un contesto di crescita debole significa rischiare di soffocare un'economia già fragile, pur cercando di contenere un'inflazione alimentata da fattori esterni.
                        </p>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>I mercati stanno già reagendo</h3>
                        <p style={{ marginBottom: '1.5rem' }}>Tre segnali tecnici che gli investitori istituzionali hanno già registrato:</p>
                        <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem', listStyleType: 'disc' }}>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Obbligazionario sotto pressione:</strong> I fondi pensione europei hanno ridotto la duration aggregata dei loro portafogli in media di 0,8 nelle ultime quattro settimane. Il mercato si protegge da un rialzo dei tassi che potrebbe erodere il valore dei titoli a lunga scadenza.</li>
                            <li style={{ marginBottom: '0.5rem' }}><strong>La sequenza oro-rame-petrolio:</strong> Quando questi tre asset si muovono in rialzo in questa sequenza, storicamente segnalano che l'inflazione sta diventando un problema strutturale, non congiunturale. È una sequenza da monitorare con attenzione perché cambia il modo in cui si dovrebbe guardare all'intera allocazione di portafoglio.</li>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Le Borse (forza corporate ma punizione selettiva):</strong> L'84% delle società S&P 500 ha battuto le stime nel primo trimestre 2026, la stagione degli utili più solida dal 2021. Tuttavia, il mercato sta penalizzando le trimestrali sotto le attese il doppio rispetto alla media storica: la selettività è alta e la tolleranza per la delusione è bassa.</li>
                        </ul>

                        <div style={{ padding: '1.5rem', background: 'hsla(var(--accent-color), 0.05)', borderRadius: 'var(--radius-md)', margin: '2rem 0', border: '1px dashed hsla(var(--accent-color), 0.3)' }}>
                            <h4 style={{ margin: '0 0 1rem 0', fontSize: '1.2rem', color: 'hsl(var(--accent-color))' }}>Cosa significa per il risparmiatore italiano</h4>
                            <p style={{ marginBottom: '1rem' }}>Le ripercussioni arrivano anche sul piano domestico. Secondo Confindustria, la crisi energetica rischia di bloccare il canale del credito, frenare consumi e servizi, e ridurre la fiducia sia delle famiglie che delle imprese. L'unico driver di crescita che regge, per ora, è il Pnrr.</p>
                            <p style={{ marginBottom: '0' }}>Sul fronte dei mutui, tassi più elevati più a lungo significano rate ancora costose e minore capacità di spesa. Molti speravano in una normalizzazione del credito nella seconda metà del 2026: quello scenario oggi è in discussione.</p>
                        </div>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>Il quadro in sintesi</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Non siamo (ancora) in stagflazione, ma ci stiamo avvicinando a un territorio scomodo: crescita bassa, inflazione in risalita, banche centrali con poco margine di manovra. I mercati lo stanno iniziando a prezzare.
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Per chi investe, la domanda non è se questo scenario si materializzerà completamente. La domanda è: il mio portafoglio reggerebbe uno shock inflattivo prolungato?
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Diversificazione, riduzione della duration obbligazionaria, attenzione agli asset reali e ai titoli con potere di prezzo: sono temi che torneranno al centro della conversazione nei prossimi mesi. Vale la pena iniziare a ragionarci adesso.
                        </p>
                    </>
                ) : (
                    <>
                        <p style={{ marginBottom: '1.5rem', fontSize: '1.2rem', fontStyle: 'italic', borderLeft: '4px solid hsl(var(--accent-color))', paddingLeft: '1.5rem', color: 'hsl(var(--text-primary))' }}>
                            Until a few weeks ago it seemed like a tail scenario, a remote possibility to consider but not to really fear. Today, looking at the financial markets, the narrative has changed: inflation is back to center stage, and with it the phantom of new rate hikes.
                        </p>
                        
                        <p style={{ marginBottom: '1.5rem' }}>
                            What is happening, and what does it mean for investors?
                        </p>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>The catalyst: the Strait of Hormuz</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            It all starts from a geopolitical crisis that many hoped would be resolved quickly. Tensions in the Strait of Hormuz — the maritime corridor through which about a quarter of global oil and a significant share of liquefied natural gas transit — have triggered a profound disruption in energy markets. In May, Brent crude sits around 105 dollars a barrel, with alternative routes being more expensive and slower, failing to compensate for the reduction in flows.
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            The effect is not limited to the energy bill. When oil rises to these levels, the impact propagates to logistics, transport, industrial production, and food. Inflation stops being a problem of the energy sector and becomes a transversal problem.
                        </p>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>The numbers: what the forecasts say</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            The European Commission has already revised its estimates. For Italy, the current scenario translates into:
                        </p>
                        <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem', listStyleType: 'disc' }}>
                            <li style={{ marginBottom: '0.5rem' }}><strong>2026 GDP</strong> stalled at 0.5%</li>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Inflation</strong> spiked to 3.2%</li>
                        </ul>
                        <p style={{ marginBottom: '1.5rem' }}>
                            For the Eurozone as a whole, growth has been cut to 1.1% with expected inflation at 3%. Numbers that mark a sharp deterioration compared to expectations at the beginning of the year, when there was talk of a monetary easing cycle already underway.
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Globally, even the US PCE — the Federal Reserve's preferred measure of inflation — has reached 3.5% year-on-year, with the core component at 3.2%. The critical point is that inflation was already rising before the crisis in the Middle East added pressure on energy prices.
                        </p>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>The ECB facing a dilemma</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            For months the markets had priced in a path of descending rates in Europe. That path today appears much less linear.
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Current ECB rates — deposit rate at 2.00%, main refinancing rate at 2.15% — still reflect a waiting stance. But operators' expectations are changing: markets currently price in about two hikes during 2026, with a non-negligible probability of a third intervention. Bloomberg Economics anticipates that the first move could arrive as early as June.
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            The structural problem of the ECB is that monetary policy can cool domestic demand, but it cannot reopen energy routes or reduce geopolitical tensions. Raising rates in a context of weak growth means risking suffocating an already fragile economy, while trying to contain inflation fueled by external factors.
                        </p>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>Markets are already reacting</h3>
                        <p style={{ marginBottom: '1.5rem' }}>Three technical signals that institutional investors have already registered:</p>
                        <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem', listStyleType: 'disc' }}>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Bond market under pressure:</strong> European pension funds have reduced the aggregate duration of their portfolios by an average of 0.8 over the last four weeks. The market is protecting itself from a rate hike that could erode the value of long-term bonds.</li>
                            <li style={{ marginBottom: '0.5rem' }}><strong>The gold-copper-oil sequence:</strong> When these three assets move upwards in this sequence, historically they signal that inflation is becoming a structural problem, not a cyclical one. It's a sequence to monitor carefully because it changes the way one should look at the entire portfolio allocation.</li>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Stock Markets (corporate strength but selective punishment):</strong> 84% of S&P 500 companies beat estimates in the first quarter of 2026, the most solid earnings season since 2021. However, the market is penalizing earnings misses twice as much as the historical average: selectivity is high and tolerance for disappointment is low.</li>
                        </ul>

                        <div style={{ padding: '1.5rem', background: 'hsla(var(--accent-color), 0.05)', borderRadius: 'var(--radius-md)', margin: '2rem 0', border: '1px dashed hsla(var(--accent-color), 0.3)' }}>
                            <h4 style={{ margin: '0 0 1rem 0', fontSize: '1.2rem', color: 'hsl(var(--accent-color))' }}>What it means for the Italian saver</h4>
                            <p style={{ marginBottom: '1rem' }}>The repercussions also arrive on the domestic front. According to Confindustria, the energy crisis risks blocking the credit channel, slowing consumption and services, and reducing the confidence of both households and businesses. The only growth driver holding up, for now, is the PNRR.</p>
                            <p style={{ marginBottom: '0' }}>On the mortgage front, higher rates for longer mean still expensive installments and reduced spending capacity. Many hoped for a normalization of credit in the second half of 2026: that scenario is currently in question.</p>
                        </div>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>The picture in summary</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            We are not (yet) in stagflation, but we are approaching uncomfortable territory: low growth, rising inflation, central banks with little room to maneuver. Markets are starting to price it in.
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            For those who invest, the question is not whether this scenario will fully materialize. The question is: would my portfolio withstand a prolonged inflationary shock?
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Diversification, reduction of bond duration, attention to real assets and stocks with pricing power: these are themes that will return to the center of the conversation in the coming months. It is worth starting to think about it now.
                        </p>
                    </>
                )}
            </div>
        </article>
    );
}
