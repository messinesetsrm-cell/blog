'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from '../blog.module.css';
import ShareButton from '@/components/ShareButton/ShareButton';

export default function ArticleContent() {
    const [lang, setLang] = useState<'it' | 'en'>('it');

    return (
        <article className={styles.container}>
            <header className={styles.header}>
                <div style={{ marginBottom: '2rem', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
                    <Image
                        src="/images/verita-scomode-2026.jpg"
                        alt="2026: L'Anno in cui le Regole del Gioco sono Cambiate"
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
                        ? "2026: L'Anno in cui le Regole del Gioco sono Cambiate. 5 Verità Scomode dall'Economia Globale"
                        : "2026: The Year the Rules of the Game Changed. 5 Uncomfortable Truths from the Global Economy"}
                </h1>
                <div className={styles.meta} style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <span>Long-form</span>
                        <span>•</span>
                        <span>{lang === 'it' ? 'Gen 23, 2026' : 'Jan 23, 2026'}</span>
                    </div>
                    <ShareButton
                        title={lang === 'it' ? "2026: L'Anno in cui le Regole del Gioco sono Cambiate" : "2026: The Year the Rules of the Game Changed"}
                        text={lang === 'it' ? "5 Verità Scomode dall'Economia Globale" : "5 Uncomfortable Truths from the Global Economy"}
                        url="http://localhost:3000/blog/2026-regole-gioco-cambiate-economia-globale"
                    />
                </div>
            </header>

            <div className={styles.content} style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'hsl(var(--text-secondary))' }}>
                {lang === 'it' ? (
                    <>
                        <h2 className={styles.sectionTitle}>1. Introduzione: Il Mondo al Punto di Rottura</h2>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Sotto la superficie levigata dei listini azionari occidentali, che tentano di proiettare un’immagine di stoica resilienza, le placche tettoniche della geopolitica hanno iniziato a collidere con una violenza che non ammette ritorni al passato. Il 2026 non si è presentato come un’evoluzione, ma come una rottura sistemica. Dalle piazze di Teheran, dove la moneta è evaporata in un’astrazione informatica, alle coste del Venezuela, dove la proiezione di potenza americana ha riscritto le gerarchie emisferiche, i pilastri dell’ordine liberale tremano.
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Il "Trump Corollary" alla Dottrina Monroe e l'aggressività esistenziale di Pechino segnalano che il commercio globale non è più un deterrente per i conflitti, ma un’estensione del campo di battaglia. Ci troviamo di fronte a un paradosso: mentre la Federal Reserve inietta liquidità per sostenere l'apparato bellico e il debito sovrano, la fiducia monetaria internazionale si sgretola. Quanto può durare un sistema basato sulla fiducia quando le valute iniziano a segnare "zero" sui terminali? Nel 2026, il potere militare è ancora un garante della sicurezza economica o è diventato il catalizzatore della sua frammentazione definitiva?
                        </p>

                        <hr style={{ border: '0', borderTop: '1px solid hsl(var(--border-color))', margin: '3rem 0' }} />

                        <h2 className={styles.sectionTitle}>2. Il "Grado Zero" della Valuta: La Lezione dell'Iran</h2>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Il collasso del Rial iraniano all'inizio del 2026 non è solo un caso di iperinflazione; è un avvertimento per l'intero sistema fiduciario globale. Con un tasso di cambio che ha raggiunto la cifra surreale di 1,4-1,5 milioni di Rial per USD sul mercato parallelo, le piattaforme digitali di conversione hanno iniziato a mostrare un valore di "$0,00". Questo limite tecnico non è una semplice curiosità informatica, ma una pietra tombale digitale per il contratto sociale.
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Sebbene legalmente la valuta esista ancora, l'incapacità dei sistemi di arrotondamento di gestire una svalutazione così estrema ha cancellato il Rial dalla realtà economica quotidiana. Con un'inflazione superiore al 40% a fine 2025, i beni essenziali — pane, olio, medicinali — sono diventati spettri inaccessibili per la classe media. La lezione è brutale: la fiducia monetaria è una risorsa non rinnovabile. Una volta superato il punto di non ritorno, la distinzione tra "valore legale" e "zero tecnico" perde ogni significato politico.
                        </p>
                        <blockquote style={{ borderLeft: '4px solid hsl(var(--accent-color))', paddingLeft: '1.5rem', fontStyle: 'italic', margin: '2rem 0', color: 'hsl(var(--text-main))' }}>
                            "Il collasso della valuta si trasforma istantaneamente in una crisi umanitaria e politica totale, dimostrando come l'erosione della stabilità monetaria diventi, in ultima istanza, una minaccia esistenziale alla sopravvivenza stessa dello Stato."
                        </blockquote>

                        <hr style={{ border: '0', borderTop: '1px solid hsl(var(--border-color))', margin: '3rem 0' }} />

                        <h2 className={styles.sectionTitle}>3. Operazione "Absolute Resolve": La Nuova Dottrina Monroe in Venezuela</h2>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Il 3 gennaio 2026, gli Stati Uniti hanno dato il via all'operazione "Absolute Resolve", catturando Nicolás Maduro e sua moglie Cilia Flores. L'indriminazione formale del Dipartimento di Giustizia USA non lascia spazio a interpretazioni: Maduro è accusato di essere a capo del Cartel de los Soles, designato come una "Specially Designated Global Terrorist Organization".
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Questa non è una semplice operazione di regime change; è l'applicazione del "Trump Corollary" alla Dottrina Monroe. L'obiettivo strategico non è solo il petrolio, ma la negazione del controllo di asset vitali a competitor non emisferici, in particolare alla Cina. Il fulcro della contesa si è spostato sui minerali critici — oro e coltan — essenziali per l'industria bellica avanzata e i sistemi radar. Nonostante la cattura di Maduro, la situazione resta in un limbo legale: la Vice-Presidente Delcy Rodríguez ha prestato giuramento come Presidente, invocando una "assenza temporanea", mentre l'Articolo 233 della Costituzione venezuelana imporrebbe elezioni entro 30 giorni per "assenza forzata".
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            L'intervento ha cristallizzato le divisioni ideologiche in America Latina:
                        </p>
                        <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem', listStyle: 'disc' }}>
                            <li style={{ marginBottom: '0.5rem' }}><strong>A favore dell'azione:</strong> Argentina, Ecuador e il Cile (sotto la presidenza Kast).</li>
                            <li><strong>Contro l'azione:</strong> Brasile, Colombia, Messico, Bolivia e Perù.</li>
                        </ul>

                        <hr style={{ border: '0', borderTop: '1px solid hsl(var(--border-color))', margin: '3rem 0' }} />

                        <h2 className={styles.sectionTitle}>4. Il Pivot della Fed: Dalla Restrizione alla Dominanza Fiscale</h2>
                        <p style={{ marginBottom: '1.5rem' }}>
                            In un momento di estrema tensione sistemica, la Federal Reserve ha operato una sterzata storica. Dopo aver concluso ufficialmente il Quantitative Tightening (QT) il 1° dicembre 2025, la Fed ha annunciato il 10 dicembre l'avvio di acquisti di T-bills per 40 miliardi di dollari al mese.
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Ufficialmente denominati "Reserve Management Purchases" (RMP), questi interventi sono considerati dagli analisti come un "Covert Easing" (allentamento occulto). La manovra è stata resa necessaria dallo stress nel mercato monetario, evidenziato da uno spread positivo tra il tasso SOFR e l'interesse sulle riserve (IORB). In questo scenario, la Fed è diventata il "compratore marginale del debito pubblico a breve termine", fornendo di fatto l'ossigeno fiscale necessario a finanziare l'enorme debito USA (36 trilioni di dollari) e l'espansione militare richiesta dall'Operazione Absolute Resolve. È l'alba della dominanza fiscale, dove il confine tra politica monetaria e finanziamento bellico svanisce definitivamente.
                        </p>

                        <hr style={{ border: '0', borderTop: '1px solid hsl(var(--border-color))', margin: '3rem 0' }} />

                        <h2 className={styles.sectionTitle}>5. Pechino e Taiwan: La Fine della "Riunificazione Pacifica"</h2>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Il mutamento del linguaggio diplomatico cinese tra il 2024 e il 2025 rappresenta un segnale di allarme senza precedenti. Nei rapporti ufficiali del governo è scomparso il termine "pacifica" riferito alla riunificazione con Taiwan. Al suo posto è emersa la dottrina della "National Total War" (Guerra Totale Nazionale).
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            L'obiettivo fissato per il 2027 non è solo la conquista territoriale, ma il raggiungimento di una "vittoria strategica decisiva" che includa un controbilanciamento nucleare diretto verso gli Stati Uniti. Pechino non sta più tentando di persuadere Taipei; sta testando la propria capacità di sostenere un conflitto ad alta intensità, supportata da un bilancio della difesa quasi raddoppiato. Il messaggio è chiaro: la Cina è pronta a sfidare l'ordine mondiale per ridisegnare i confini del Pacifico.
                        </p>

                        <hr style={{ border: '0', borderTop: '1px solid hsl(var(--border-color))', margin: '3rem 0' }} />

                        <h2 className={styles.sectionTitle}>6. L'Eurozona tra Resilienza e Diniego Strategico</h2>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Mentre il mondo si arma per lo scontro cinetico, l'Eurozona sembra abitare una realtà parallela. Con l'adesione della Bulgaria il 1° gennaio 2026, l'euro continua a espandersi, mostrando dati macroeconomici di apparente solidità:
                        </p>
                        <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem', listStyle: 'disc' }}>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Inflazione:</strong> Stabilizzata al 2%, nonostante la lentezza nella disinflazione dei servizi.</li>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Disoccupazione:</strong> Ai minimi storici del 6,4%.</li>
                            <li><strong>Crescita:</strong> Proiettata all'1,2% per il 2026.</li>
                        </ul>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Tuttavia, il contrasto è stridente. Mentre gli USA e la Cina si focalizzano sull'immediato potere cinetico, l'Europa resta assorbita da obiettivi regolatori a lungo termine, come l'implementazione dell'ETS2 nel 2028 e la transizione climatica. Questo approccio solleva una domanda scomoda: l'Eurozona è davvero un'isola di stabilità o si trova in uno stato di diniego strategico, sottovalutando l'impatto dei costi energetici e della frammentazione globale che già tormentano i suoi alleati?
                        </p>

                        <hr style={{ border: '0', borderTop: '1px solid hsl(var(--border-color))', margin: '3rem 0' }} />

                        <h2 className={styles.sectionTitle}>7. Conclusione: Oltre il Disordine, Quale Ordine?</h2>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Il 2026 ci ha insegnato che la stabilità non è l'assenza di shock, ma la velocità di adattamento a un disordine permanente. Siamo entrati definitivamente nell'era della competizione totale, dove la moneta, i minerali critici e le catene logistiche sono armi tanto letali quanto i missili ipersonici. L'ordine globale non è più garantito da trattati multilaterali, ma dalla robustezza delle sfere d'influenza e dalla capacità delle banche centrali di sostenere lo sforzo bellico dei rispettivi Stati.
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            La vera sicurezza economica non risiede più nei saldi nominali dei conti correnti, ma nella credibilità delle istituzioni che garantiscono l'accesso alle risorse fisiche e alla tecnologia.
                        </p>
                        <p style={{ marginBottom: '1.5rem', fontWeight: 'bold' }}>
                            In un mondo dove le valute possono valere zero e i confini vengono ridisegnati in una notte, qual è il vero ancoraggio della vostra sicurezza economica?
                        </p>
                    </>
                ) : (
                    <>
                        <h2 className={styles.sectionTitle}>1. Introduction: The World at Breaking Point</h2>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Beneath the polished surface of Western stock indices, attempting to project an image of stoic resilience, the tectonic plates of geopolitics have begun to collide with a violence that admits no return to the past. 2026 has not presented itself as an evolution, but as a systemic break. From the squares of Tehran, where currency has evaporated into a computing abstraction, to the coasts of Venezuela, where American power projection has rewritten hemispheric hierarchies, the pillars of the liberal order are shaking.
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            The "Trump Corollary" to the Monroe Doctrine and Beijing's existential aggressiveness signal that global trade is no longer a deterrent to conflicts, but an extension of the battlefield. We face a paradox: while the Federal Reserve injects liquidity to support the war machine and sovereign debt, international monetary confidence crumbles. How long can a system based on trust last when currencies begin to register "zero" on terminals? In 2026, is military power still a guarantor of economic security or has it become the catalyst for its definitive fragmentation?
                        </p>

                        <hr style={{ border: '0', borderTop: '1px solid hsl(var(--border-color))', margin: '3rem 0' }} />

                        <h2 className={styles.sectionTitle}>2. Currency "Ground Zero": The Lesson from Iran</h2>
                        <p style={{ marginBottom: '1.5rem' }}>
                            The collapse of the Iranian Rial at the beginning of 2026 is not just a case of hyperinflation; it is a warning for the entire global fiduciary system. With an exchange rate reaching the surreal figure of 1.4-1.5 million Rial per USD on the parallel market, digital conversion platforms have started showing a value of "$0.00". This technical limit is not a simple computer curiosity, but a digital headstone for the social contract.
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Although the currency still legally exists, the inability of rounding systems to handle such extreme devaluation has erased the Rial from daily economic reality. With inflation exceeding 40% at the end of 2025, essential goods — bread, oil, medicine — have become inaccessible ghosts for the middle class. The lesson is brutal: monetary trust is a non-renewable resource. Once the point of no return is passed, the distinction between "legal value" and "technical zero" loses all political meaning.
                        </p>
                        <blockquote style={{ borderLeft: '4px solid hsl(var(--accent-color))', paddingLeft: '1.5rem', fontStyle: 'italic', margin: '2rem 0', color: 'hsl(var(--text-main))' }}>
                            "The collapse of a currency transforms instantly into a total humanitarian and political crisis, demonstrating how the erosion of monetary stability becomes, ultimately, an existential threat to the very survival of the State."
                        </blockquote>

                        <hr style={{ border: '0', borderTop: '1px solid hsl(var(--border-color))', margin: '3rem 0' }} />

                        <h2 className={styles.sectionTitle}>3. Operation "Absolute Resolve": The New Monroe Doctrine in Venezuela</h2>
                        <p style={{ marginBottom: '1.5rem' }}>
                            On January 3, 2026, the United States launched Operation "Absolute Resolve," capturing Nicolás Maduro and his wife Cilia Flores. The formal indictment from the US Department of Justice leaves no room for interpretation: Maduro is accused of heading the Cartel de los Soles, designated as a "Specially Designated Global Terrorist Organization."
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            This is not just a regime change operation; it is the application of the "Trump Corollary" to the Monroe Doctrine. The strategic objective is not just oil, but the denial of control over vital assets to non-hemispheric competitors, particularly China. The core of the dispute has shifted to critical minerals — gold and coltan — essential for the advanced defense industry and radar systems. Despite Maduro's capture, the situation remains in a legal limbo: Vice-President Delcy Rodríguez has taken the oath as President, invoking a "temporary absence," while Article 233 of the Venezuelan Constitution would require elections within 30 days for "forced absence."
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            The intervention has crystallized ideological divisions in Latin America:
                        </p>
                        <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem', listStyle: 'disc' }}>
                            <li style={{ marginBottom: '0.5rem' }}><strong>In favor of the action:</strong> Argentina, Ecuador, and Chile (under the Kast presidency).</li>
                            <li><strong>Against the action:</strong> Brazil, Colombia, Mexico, Bolivia, and Peru.</li>
                        </ul>

                        <hr style={{ border: '0', borderTop: '1px solid hsl(var(--border-color))', margin: '3rem 0' }} />

                        <h2 className={styles.sectionTitle}>4. The Fed's Pivot: From Restriction to Fiscal Dominance</h2>
                        <p style={{ marginBottom: '1.5rem' }}>
                            In a moment of extreme systemic tension, the Federal Reserve has executed a historic turn. After officially ending Quantitative Tightening (QT) on December 1, 2025, the Fed announced on December 10 the start of T-bill purchases for $40 billion per month.
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Officially termed "Reserve Management Purchases" (RMP), these interventions are considered by analysts as "Covert Easing." The move was necessitated by stress in the money market, evidenced by a positive spread between the SOFR rate and the Interest on Reserve Balances (IORB). In this scenario, the Fed has become the "marginal buyer of short-term public debt," effectively providing the fiscal oxygen needed to finance the massive US debt ($36 trillion) and the military expansion required by Operation Absolute Resolve. It is the dawn of fiscal dominance, where the boundary between monetary policy and war financing definitively vanishes.
                        </p>

                        <hr style={{ border: '0', borderTop: '1px solid hsl(var(--border-color))', margin: '3rem 0' }} />

                        <h2 className={styles.sectionTitle}>5. Beijing and Taiwan: The End of "Peaceful Reunification"</h2>
                        <p style={{ marginBottom: '1.5rem' }}>
                            The shift in Chinese diplomatic language between 2024 and 2025 represents an unprecedented warning signal. In official government reports, the term "peaceful" referring to reunification with Taiwan has disappeared. In its place, the doctrine of "National Total War" has emerged.
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            The objective set for 2027 is not just territorial conquest, but the achievement of a "decisive strategic victory" that includes a direct nuclear counterbalance toward the United States. Beijing is no longer attempting to persuade Taipei; it is testing its capacity to sustain a high-intensity conflict, supported by a nearly doubled defense budget. The message is clear: China is ready to challenge the world order to redraw the boundaries of the Pacific.
                        </p>

                        <hr style={{ border: '0', borderTop: '1px solid hsl(var(--border-color))', margin: '3rem 0' }} />

                        <h2 className={styles.sectionTitle}>6. The Eurozone between Resilience and Strategic Denial</h2>
                        <p style={{ marginBottom: '1.5rem' }}>
                            While the world arms itself for kinetic confrontation, the Eurozone seems to inhabit a parallel reality. With Bulgaria's accession on January 1, 2026, the euro continues to expand, showing macroeconomic data of apparent solidity:
                        </p>
                        <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem', listStyle: 'disc' }}>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Inflation:</strong> Stabilized at 2%, despite the slowness in services disinflation.</li>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Unemployment:</strong> At record lows of 6.4%.</li>
                            <li><strong>Growth:</strong> Projected at 1.2% for 2026.</li>
                        </ul>
                        <p style={{ marginBottom: '1.5rem' }}>
                            However, the contrast is glaring. While the US and China focus on immediate kinetic power, Europe remains absorbed by long-term regulatory goals, such as the implementation of ETS2 in 2028 and the climate transition. This approach raises an uncomfortable question: is the Eurozone truly an island of stability or is it in a state of strategic denial, underestimating the impact of energy costs and global fragmentation already tormenting its allies?
                        </p>

                        <hr style={{ border: '0', borderTop: '1px solid hsl(var(--border-color))', margin: '3rem 0' }} />

                        <h2 className={styles.sectionTitle}>7. Conclusion: Beyond Disorder, What Order?</h2>
                        <p style={{ marginBottom: '1.5rem' }}>
                            2026 has taught us that stability is not the absence of shocks, but the speed of adaptation to permanent disorder. We have definitively entered the era of total competition, where currency, critical minerals, and supply chains are weapons as lethal as hypersonic missiles. The global order is no longer guaranteed by multilateral treaties, but by the robustness of spheres of influence and the ability of central banks to sustain the war efforts of their respective states.
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            True economic security no longer lies in the nominal balances of checking accounts, but in the credibility of institutions that guarantee access to physical resources and technology.
                        </p>
                        <p style={{ marginBottom: '1.5rem', fontWeight: 'bold' }}>
                            In a world where currencies can be worth zero and borders are redrawn overnight, what is the true anchor of your economic security?
                        </p>
                    </>
                )}
            </div>
        </article>
    );
}
