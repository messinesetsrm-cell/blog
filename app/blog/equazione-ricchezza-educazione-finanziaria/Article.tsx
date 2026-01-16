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
                        ? "L’Equazione della Ricchezza e l’Arte di Sfidare il Tempo"
                        : "The Wealth Equation and the Art of Defying Time"}
                </h1>
                <div className={styles.meta} style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <span>Educazione Finanziaria</span>
                        <span>•</span>
                        <span>{lang === 'it' ? 'Gen 16, 2026' : 'Jan 16, 2026'}</span>
                    </div>
                    <ShareButton
                        title={lang === 'it' ? "L’Equazione della Ricchezza" : "The Wealth Equation"}
                        text={lang === 'it' ? "Scopri l'equazione fondamentale per la libertà finanziaria." : "Discover the fundamental equation for financial freedom."}
                        url="https://messinese.work/blog/equazione-ricchezza-educazione-finanziaria"
                    />
                </div>
            </header>

            <div className={styles.content} style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'hsl(var(--text-secondary))' }}>
                <div style={{ marginBottom: '2.5rem', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.15)', border: '1px solid hsla(var(--accent-color), 0.2)' }}>
                    <Image
                        src="/images/equazione-ricchezza.jpg"
                        alt={lang === 'it' ? "Infografica: L’Equazione Fondamentale della Ricchezza" : "Infographic: The Fundamental Wealth Equation"}
                        width={1200}
                        height={2000}
                        style={{ width: '100%', height: 'auto', display: 'block' }}
                        priority
                    />
                </div>

                {lang === 'it' ? (
                    <>
                        <p style={{ marginBottom: '1.5rem', fontSize: '1.2rem', fontStyle: 'italic', borderLeft: '4px solid hsl(var(--accent-color))', paddingLeft: '1.5rem', color: 'hsl(var(--text-primary))' }}>
                            Esiste una forza invisibile che governa le nostre vite finanziarie, una sorta di "gravità sociale" che tende a tenerci incollati a terra, vincolati allo scambio diretto tra tempo e denaro.
                        </p>

                        <p style={{ marginBottom: '1.5rem' }}>
                            Spesso guardiamo alla ricchezza come a un evento magico, un colpo di fortuna o il risultato di un talento fuori dal comune. La realtà, però, è molto più simile a un'architettura precisa, un'equazione che, se compresa, permette di sollevarsi e fluttuare verso la libertà.
                        </p>

                        <p style={{ marginBottom: '2rem', fontWeight: '600', color: 'hsl(var(--accent-color))', fontSize: '1.3rem', textAlign: 'center' }}>
                            Tempo + Risparmio + Rendimento = Ricchezza
                        </p>

                        <p style={{ marginBottom: '1.5rem' }}>
                            In questo articolo esploreremo perché questi tre elementi sono le coordinate fondamentali per ogni persona che voglia sfidare la gravità del sistema economico attuale.
                        </p>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>1. Il Tempo: Il Potere Invisibile della Pazienza</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Il primo pilastro è il Tempo. Spesso lo sottovalutiamo perché la nostra mente è programmata per pensare in modo lineare, mentre la ricchezza cresce in modo esponenziale.
                        </p>

                        <div style={{ padding: '1.5rem', background: 'hsla(var(--accent-color), 0.05)', borderRadius: 'var(--radius-md)', marginBottom: '1.5rem', border: '1px dashed hsla(var(--accent-color), 0.3)' }}>
                            <p style={{ marginBottom: '0', fontWeight: '500' }}>
                                <strong>L'aneddoto della scacchiera:</strong> Si narra che l'inventore del gioco degli scacchi chiese al suo sovrano una ricompensa apparentemente modesta: un chicco di riso per la prima casella, due per la seconda, quattro per la terza, e così via, raddoppiando per tutte le 64 caselle. Il Re accettò ridendo, convinto di essersela cavata con poco. Non sapeva che alla metà della scacchiera il riso avrebbe già riempito un intero granaio, e alla fine della scacchiera la quantità sarebbe stata superiore a tutto il riso mai prodotto nella storia dell'umanità.
                            </p>
                        </div>

                        <p style={{ marginBottom: '1.5rem' }}>
                            Questo è l'interesse composto. Iniziare presto fa la differenza non perché si hanno più soldi, ma perché si dà al tempo il potere di curvare la realtà a proprio favore.
                        </p>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>2. Il Risparmio: Costruire la Rampa di Lancio</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Il Risparmio è il motore del decollo; è l'atto di decidere che il tuo "io futuro" merita più del tuo "io presente". Senza una base solida costruita con metodo, non c'è rendimento che possa salvarti.
                        </p>

                        <p style={{ marginBottom: '1.5rem' }}>
                            <strong>L'aneddoto di Ronald Read:</strong> Pochi conoscono la storia di Ronald Read, un uomo che ha lavorato per tutta la vita come benzinaio e spazzino in una piccola città americana. Alla sua morte, nel 2014, lasciò in eredità oltre 8 milioni di dollari. Non aveva vinto alla lotteria e non aveva ereditato nulla. Semplicemente, aveva vissuto con estrema dignità e metodo, risparmiando costantemente una parte del suo modesto stipendio per decenni.
                        </p>

                        <p style={{ marginBottom: '1.5rem' }}>
                            Ronald era un "Salvatore Messinese" dello spirito: radici umili, vita concreta, ma una visione capace di guardare oltre l'orizzonte immediato. Il risparmio non è privazione, è l'acquisto della propria indipendenza.
                        </p>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>3. Il Rendimento: Scegliere la Giusta Traiettoria</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Infine, il Rendimento. Se il tempo è il vento e il risparmio è la tua imbarcazione, il rendimento rappresenta la qualità delle tue vele. Selezionare gli strumenti giusti accelera il raggiungimento dei tuoi obiettivi, permettendo al tuo capitale di crescere più velocemente della "gravità" dell'inflazione, che altrimenti consumerebbe i tuoi sforzi.
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Non si tratta di inseguire la scommessa del giorno, ma di posizionarsi dove il valore cresce costantemente.
                        </p>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>La Libertà come Destinazione</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Nell'immagine che apre questo articolo, vediamo una figura che attraversa una porta verso un orizzonte luminoso. Quella luce non rappresenta il lusso sfrenato, ma la <strong>Libertà</strong>.
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Utilizzare l'equazione della ricchezza per smettere di subire il peso delle preoccupazioni finanziarie e iniziare a volare sopra di esse. La ricchezza vera non si misura in quello che puoi comprare, ma nel numero di giorni in cui puoi permetterti di fare esattamente ciò che desideri, senza dover chiedere il permesso a nessuno.
                        </p>
                    </>
                ) : (
                    <>
                        <p style={{ marginBottom: '1.5rem', fontSize: '1.2rem', fontStyle: 'italic', borderLeft: '4px solid hsl(var(--accent-color))', paddingLeft: '1.5rem', color: 'hsl(var(--text-primary))' }}>
                            There is an invisible force that governs our financial lives, a sort of "social gravity" that tends to keep us glued to the ground, bound to the direct exchange between time and money.
                        </p>

                        <p style={{ marginBottom: '1.5rem' }}>
                            We often look at wealth as a magical event, a stroke of luck, or the result of extraordinary talent. The reality, however, is much more like precise architecture, an equation that, if understood, allows one to rise and float towards freedom.
                        </p>

                        <p style={{ marginBottom: '2rem', fontWeight: '600', color: 'hsl(var(--accent-color))', fontSize: '1.3rem', textAlign: 'center' }}>
                            Time + Savings + Return = Wealth
                        </p>

                        <p style={{ marginBottom: '1.5rem' }}>
                            In this article, we will explore why these three elements are the fundamental coordinates for anyone who wants to challenge the gravity of the current economic system.
                        </p>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>1. Time: The Invisible Power of Patience</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            The first pillar is Time. We often underestimate it because our minds are programmed to think linearly, while wealth grows exponentially.
                        </p>

                        <div style={{ padding: '1.5rem', background: 'hsla(var(--accent-color), 0.05)', borderRadius: 'var(--radius-md)', marginBottom: '1.5rem', border: '1px dashed hsla(var(--accent-color), 0.3)' }}>
                            <p style={{ marginBottom: '0', fontWeight: '500' }}>
                                <strong>The story of the chessboard:</strong> Legend has it that the inventor of chess asked his sovereign for a seemingly modest reward: one grain of rice for the first square, two for the second, four for the third, and so on, doubling for all 64 squares. The King laughed and accepted, convinced he had gotten off easy. He didn't know that by the middle of the board, the rice would have already filled an entire granary, and by the end, the quantity would be greater than all the rice ever produced in human history.
                            </p>
                        </div>

                        <p style={{ marginBottom: '1.5rem' }}>
                            This is compound interest. Starting early makes a difference not because you have more money, but because you give time the power to bend reality in your favor.
                        </p>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>2. Savings: Building the Launchpad</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Savings is the takeoff engine; it is the act of deciding that your "future self" deserves more than your "present self". Without a solid base built with method, there is no return that can save you.
                        </p>

                        <p style={{ marginBottom: '1.5rem' }}>
                            <strong>The Ronald Read story:</strong> Few know the story of Ronald Read, a man who worked all his life as a gas station attendant and janitor in a small American town. At his death in 2014, he left an inheritance of over 8 million dollars. He hadn't won the lottery and hadn't inherited anything. He simply lived with extreme dignity and method, constantly saving a part of his modest salary for decades.
                        </p>

                        <p style={{ marginBottom: '1.5rem' }}>
                            Ronald was a "Messinese Savior" of the spirit: humble roots, concrete life, but a vision capable of looking beyond the immediate horizon. Saving is not deprivation, it is the purchase of your own independence.
                        </p>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>3. Return: Choosing the Right Trajectory</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Finally, Return. If time is the wind and savings is your boat, return represents the quality of your sails. Selecting the right tools accelerates the achievement of your goals, allowing your capital to grow faster than the "gravity" of inflation, which would otherwise consume your efforts.
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            It's not about chasing the bet of the day, but about positioning yourself where value grows constantly.
                        </p>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>Freedom as Destination</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            In the image at the top of this article, we see a figure passing through a gate towards a luminous horizon. That light does not represent unbridled luxury, but <strong>Freedom</strong>.
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Using the wealth equation to stop suffering the weight of financial worries and start flying above them. True wealth is not measured by what you can buy, but by the number of days you can afford to do exactly what you want, without having to ask anyone for permission.
                        </p>
                    </>
                )}
            </div>
        </article>
    );
}
