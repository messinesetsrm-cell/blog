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
                { label: lang === 'it' ? 'Tempo vs Tempismo' : 'Time vs Timing' }
            ]} />
            <header className={styles.header}>
                <div className={styles.langSwitch}>
                    <button
                        onClick={() => setLang('it')}
                        className={lang === 'it' ? styles.activeLang : ''}
                    >
                        Italiano
                    </button>
                    <button
                        onClick={() => setLang('en')}
                        className={lang === 'en' ? styles.activeLang : ''}
                    >
                        English
                    </button>
                </div>

                <h1 className={styles.title}>
                    {lang === 'it'
                        ? "Educazione Finanziaria #4: Smetti di fare il 'cecchino': perché il tempo batte il tempismo"
                        : "Financial Education #4: Stop Being a 'Sniper': Why Time Beats Timing"}
                </h1>
                <div className={styles.meta}>
                    <div className={styles.metaStats}>
                        <span>Educazione Finanziaria</span>
                        <span>•</span>
                        <span>{lang === 'it' ? 'Gen 31, 2026' : 'Jan 31, 2026'}</span>
                    </div>
                    <ShareButton
                        title={lang === 'it' ? "Educazione Finanziaria #4" : "Financial Education #4"}
                        text={lang === 'it' ? "Smetti di fare il 'cecchino': perché il tempo batte il tempismo" : "Stop being a 'sniper': why time beats timing"}
                        url="https://messinese.work/blog/tempo-vs-tempismo-educazione-finanziaria"
                    />
                </div>
            </header>

            <div className={styles.content}>
                {lang === 'it' ? (
                    <>
                        <p>
                            Ti è mai capitato di guardare l’andamento dei mercati e pensare: “È tutto ai massimi, ora aspetto che crolli tutto così entro a prezzi di saldo”?
                        </p>
                        <p>
                            Ammettiamolo, è una tentazione irresistibile. È l’istinto del cacciatore: restare immobili, nel buio, aspettando il momento perfetto per colpire. Ma la verità, numeri alla mano, è che questa attesa è la tassa più alta che tu possa pagare. Mentre aspetti il "botto", la tua ricchezza sta probabilmente perdendo il treno della vita.
                        </p>

                        <div className={styles.imageContainer}>
                            <Image
                                src="/images/tempo-vs-tempismo.jpg"
                                alt="Infografica: Tempo vs Tempismo"
                                width={1200}
                                height={2130}
                                style={{ width: '100%', height: 'auto', borderRadius: 'var(--radius-lg)' }}
                                priority
                            />
                        </div>

                        <h3 className={styles.sectionTitle}>Il mito del "momento giusto" (Market Timing)</h3>
                        <p>
                            C'è un'analisi illuminante di justETF che demolisce il mito del market timing analizzando cinquant'anni di dati, dal 1970 a oggi. Il risultato è una doccia fredda per chi ama stare alla finestra con la liquidità ferma sul conto.
                        </p>
                        <p>
                            Il concetto è semplice: il mercato passa molto più tempo a salire che a scendere. Mentre tu aspetti che il mercato faccia un -20% (il famoso "crollo"), lui spesso sale del 40%, 50% o anche di più. Quando finalmente arriva il ribasso che tanto sognavi, il prezzo "scontato" sarà comunque molto più alto di quello che avresti pagato iniziando subito. In pratica, è come aspettare i saldi per un vestito che, nel frattempo, è raddoppiato di prezzo: lo pagherai "scontato" rispetto a ieri, ma molto più caro rispetto a un anno fa.
                        </p>

                        <h3 className={styles.sectionTitle}>Perché il Piano di Accumulo (PAC) è la tua vera arma segreta</h3>
                        <p>
                            Se la vita quotidiana ti assorbe e il tempo è la tua risorsa più scarsa, non puoi permetterti di passare ore davanti ai grafici. È qui che entra in gioco il PAC. Investire una cifra fissa ogni mese, in modo automatico, batte quasi sempre il tentativo di "fare il furbo" con il mercato per tre ragioni fondamentali:
                        </p>
                        <ul className={styles.list}>
                            <li><strong>Elimini lo stress decisionale:</strong> Non devi più chiederti "sarà il momento giusto?". Il momento giusto è sempre lo stesso: quando hai i risparmi pronti per essere messi al lavoro.</li>
                            <li><strong>Sfrutti l'inerzia positiva:</strong> Più tempo i tuoi soldi restano sul mercato, più l'interesse composto può sprigianare la sua magia. Ogni mese di attesa è un mese di crescita esponenziale che non tornerà mai più.</li>
                            <li><strong>Ottimizzi i prezzi:</strong> Quando il mercato scende, il tuo PAC compra più quote; quando sale, il tuo capitale complessivo lievita. È una strategia "antigravitazionale" per definizione.</li>
                        </ul>

                        <h3 className={styles.sectionTitle}>Conclusione: Il tempo batte il tempismo</h3>
                        <p>
                            La lezione per ogni investitore consapevole è chiara: il tempo "sul" mercato batte il tentativo di "azzeccare" il mercato. Se il tuo orizzonte è lungo — 10, 20 o 30 anni — il "rumore" di oggi è solo un battito di ciglia. La vera sconfitta non è un -20% passeggero, che fa parte del gioco, ma vedere i propri risparmi erosi dall'inflazione mentre si aspetta un treno che, quando finalmente passa, è già diventato troppo costoso per essere preso.
                        </p>
                        <p style={{ fontWeight: 600, fontSize: '1.2rem', textAlign: 'center', marginTop: '3rem', color: 'hsl(var(--accent-color))' }}>
                            La disciplina batte il genio, sempre.
                        </p>
                    </>
                ) : (
                    <>
                        <p>
                            Have you ever looked at market trends and thought: "Everything is at its peak, I'll wait for a crash so I can get in at bargain prices"?
                        </p>
                        <p>
                            Let's admit it, it's an irresistible temptation. It's the hunter's instinct: staying still, in the dark, waiting for the perfect moment to strike. But the truth, backed by numbers, is that this waiting is the highest tax you can pay. While you wait for the "big bang," your wealth is likely missing the train of a lifetime.
                        </p>

                        <h3 className={styles.sectionTitle}>The Myth of the "Right Moment" (Market Timing)</h3>
                        <p>
                            There is an enlightening analysis by justETF that demolishes the myth of market timing by analyzing fifty years of data from 1970 to today. The result is a cold shower for those who love to stay on the sidelines with idle cash in their account.
                        </p>
                        <p>
                            The concept is simple: the market spends much more time going up than going down. While you wait for the market to drop -20% (the famous "crash"), it often rises by 40%, 50%, or even more. When the decline you dreamed of finally arrives, the "discounted" price will still be much higher than what you would have paid by starting immediately. In practice, it's like waiting for a sale on a dress that, in the meantime, has doubled in price: you'll pay a "discounted" price compared to yesterday, but much more expensive than a year ago.
                        </p>

                        <h3 className={styles.sectionTitle}>Why the Dollar-Cost Averaging (DCA/PAC) is Your True Secret Weapon</h3>
                        <p>
                            If daily life consumes you and time is your scarcest resource, you can't afford to spend hours in front of charts. This is where the PAC (Capital Accumulation Plan) comes in. Investing a fixed amount every month, automatically, almost always beats the attempt to "be smart" with the market for three fundamental reasons:
                        </p>
                        <ul className={styles.list}>
                            <li><strong>Eliminate Decision Fatigue:</strong> You no longer have to ask yourself "is it the right time?". The right time is always the same: when you have savings ready to be put to work.</li>
                            <li><strong>Harness Positive Inertia:</strong> The more time your money stays in the market, the more compound interest can unleash its magic. Every month of waiting is a month of exponential growth that will never return.</li>
                            <li><strong>Optimize Prices:</strong> When the market goes down, your PAC buys more shares; when it goes up, your overall capital grows. It is an "anti-gravity" strategy by definition.</li>
                        </ul>

                        <h3 className={styles.sectionTitle}>Conclusion: Time Beats Timing</h3>
                        <p>
                            The lesson for every conscious investor is clear: time "in" the market beats the attempt to "time" the market. If your horizon is long — 10, 20, or 30 years — today's "noise" is just a blink of an eye. The real defeat is not a passing -20%, which is part of the game, but seeing your savings eroded by inflation while waiting for a train that, when it finally passes, is already too expensive to catch.
                        </p>
                        <p style={{ fontWeight: 600, fontSize: '1.2rem', textAlign: 'center', marginTop: '3rem', color: 'hsl(var(--accent-color))' }}>
                            Discipline beats genius, every time.
                        </p>
                    </>
                )}
            </div>
        </article>
    );
}
