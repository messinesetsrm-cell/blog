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
                { label: lang === 'it' ? 'Investire non è accumulare' : 'Investing is not hoarding' }
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
                        ? 'Investire non è accumulare: è progettare la vita che vuoi davvero'
                        : 'Investing is not hoarding: it is designing the life you really want'}
                </h1>
                <div className={styles.meta} style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <span>Educazione Finanziaria</span>
                        <span>•</span>
                        <span>{lang === 'it' ? 'Apr 25, 2026' : 'Apr 25, 2026'}</span>
                    </div>
                    <ShareButton
                        title={lang === 'it' ? 'Investire non è accumulare' : 'Investing is not hoarding'}
                        text={lang === 'it' ? "Investire significa costruire i mattoni della vita che desideri. Non si tratta di quanto denaro hai nel portafoglio oggi, ma di quale libertà vuoi garantirti domani." : "Investing means building the bricks of the life you desire. It's not about how much money you have in your wallet today, but what freedom you want to guarantee yourself tomorrow."}
                        url="https://messinese.work/blog/investire-non-e-accumulare"
                    />
                </div>
            </header>

            <div className={styles.content} style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'hsl(var(--text-secondary))' }}>
                <div style={{ marginBottom: '2.5rem', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.15)', border: '1px solid hsla(var(--accent-color), 0.2)' }}>
                    <Image
                        src="/images/investire_non_e_accumulare.png"
                        alt={lang === 'it' ? "Infografica: Obiettivi di vita" : "Infographic: Life goals"}
                        width={1200}
                        height={675}
                        style={{ width: '100%', height: 'auto', display: 'block' }}
                        priority
                    />
                </div>

                {lang === 'it' ? (
                    <>
                        <p style={{ marginBottom: '1.5rem', fontSize: '1.2rem', fontStyle: 'italic', borderLeft: '4px solid hsl(var(--accent-color))', paddingLeft: '1.5rem', color: 'hsl(var(--text-primary))' }}>
                            Spesso, quando sentiamo la parola "investimento", la nostra mente corre subito a grafici complessi, numeri incomprensibili e fluttuazioni di borsa. Pensiamo che investire sia un’attività riservata a chi vuole "diventare ricco".
                        </p>
                        
                        <p style={{ marginBottom: '1.5rem' }}>
                            Ma la verità è molto più profonda: investire significa costruire i mattoni della vita che desideri. Non si tratta di quanto denaro hai nel portafoglio oggi, ma di quale libertà vuoi garantirti domani.
                        </p>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>Il denaro come mezzo, non come fine</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Il segreto di una strategia finanziaria efficace sta nel ribaltare la prospettiva. Il denaro non è l'obiettivo finale; è il carburante che permette ai tuoi progetti di viaggiare. Senza un obiettivo chiaro, investire è come guidare senza una meta: potresti fare molta strada, ma non saprai mai se sei arrivato nel posto giusto.
                        </p>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>A ogni traguardo la sua strategia</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Come suggerisce l'immagine, la vita è fatta di tappe diverse, e ognuna richiede un approccio su misura. Non puoi usare lo stesso strumento per obiettivi che hanno tempi e pesi differenti:
                        </p>

                        <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem', listStyleType: 'disc' }}>
                            <li style={{ marginBottom: '0.5rem' }}><strong>La Casa:</strong> È stabilità e sicurezza. Richiede una pianificazione che guardi al medio periodo, bilanciando la necessità di liquidità con la crescita del capitale.</li>
                            <li style={{ marginBottom: '0.5rem' }}><strong>I Figli:</strong> Rappresentano il futuro. Qui l'orizzonte temporale è più lungo, permettendo di sfruttare la forza dell'interesse composto per garantire loro istruzione e opportunità.</li>
                            <li style={{ marginBottom: '0.5rem' }}><strong>La Pensione:</strong> È la tua libertà futura. Richiede costanza e una visione a lunghissimo termine, per far sì che il tempo diventi il tuo miglior alleato contro l'inflazione e l'incertezza.</li>
                        </ul>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>Strategia batte improvvisazione</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Perché è fondamentale avere una strategia dedicata? Perché le emozioni sono il peggior nemico dei risparmi. Senza un piano, è facile farsi prendere dal panico durante un calo di mercato o farsi trascinare dall'entusiasmo di una moda passeggera.
                        </p>

                        <p style={{ marginBottom: '1.5rem' }}>
                            Avere una strategia significa sapere esattamente perché stai mettendo da parte quel denaro. Significa dormire sonni tranquilli perché sai che ogni euro è impegnato a lavorare per un pezzetto del tuo futuro.
                        </p>

                        <div style={{ padding: '1.5rem', background: 'hsla(var(--accent-color), 0.05)', borderRadius: 'var(--radius-md)', margin: '2rem 0', border: '1px dashed hsla(var(--accent-color), 0.3)', textAlign: 'center' }}>
                            <p style={{ margin: 0, fontSize: '1.3rem', fontStyle: 'italic', fontWeight: '500', color: 'hsl(var(--accent-color))' }}>
                                "Investire è un atto di ottimismo verso se stessi."
                            </p>
                        </div>

                        <p style={{ marginBottom: '1.5rem' }}>
                            Non aspettare il "momento perfetto" o la cifra "giusta" per iniziare. Il momento migliore per iniziare a costruire la vita che vuoi è oggi. Definisci i tuoi obiettivi, dai loro un nome e inizia a tracciare la rotta.
                        </p>

                        <p style={{ marginBottom: '1.5rem', fontWeight: 'bold' }}>
                            E tu, quale obiettivo vuoi raggiungere per primo?
                        </p>
                    </>
                ) : (
                    <>
                        <p style={{ marginBottom: '1.5rem', fontSize: '1.2rem', fontStyle: 'italic', borderLeft: '4px solid hsl(var(--accent-color))', paddingLeft: '1.5rem', color: 'hsl(var(--text-primary))' }}>
                            Often, when we hear the word "investment", our minds immediately jump to complex charts, incomprehensible numbers, and stock market fluctuations. We think that investing is an activity reserved for those who want to "get rich".
                        </p>
                        
                        <p style={{ marginBottom: '1.5rem' }}>
                            But the truth is much deeper: investing means building the bricks of the life you desire. It is not about how much money you have in your wallet today, but what freedom you want to guarantee yourself tomorrow.
                        </p>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>Money as a means, not an end</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            The secret to an effective financial strategy lies in reversing the perspective. Money is not the ultimate goal; it is the fuel that allows your projects to travel. Without a clear goal, investing is like driving without a destination: you might go a long way, but you will never know if you have arrived at the right place.
                        </p>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>Every milestone has its strategy</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            As the image suggests, life is made up of different stages, and each requires a tailored approach. You cannot use the same tool for goals that have different timeframes and weights:
                        </p>

                        <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem', listStyleType: 'disc' }}>
                            <li style={{ marginBottom: '0.5rem' }}><strong>The House:</strong> It is stability and security. It requires planning that looks to the medium term, balancing the need for liquidity with capital growth.</li>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Children:</strong> They represent the future. Here the time horizon is longer, allowing you to exploit the power of compound interest to guarantee them education and opportunities.</li>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Retirement:</strong> It is your future freedom. It requires constancy and a very long-term vision, to ensure that time becomes your best ally against inflation and uncertainty.</li>
                        </ul>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>Strategy beats improvisation</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Why is it essential to have a dedicated strategy? Because emotions are the worst enemy of savings. Without a plan, it is easy to panic during a market downturn or get swept up in the enthusiasm of a passing fad.
                        </p>

                        <p style={{ marginBottom: '1.5rem' }}>
                            Having a strategy means knowing exactly why you are putting that money aside. It means sleeping peacefully because you know that every euro is committed to working for a piece of your future.
                        </p>

                        <div style={{ padding: '1.5rem', background: 'hsla(var(--accent-color), 0.05)', borderRadius: 'var(--radius-md)', margin: '2rem 0', border: '1px dashed hsla(var(--accent-color), 0.3)', textAlign: 'center' }}>
                            <p style={{ margin: 0, fontSize: '1.3rem', fontStyle: 'italic', fontWeight: '500', color: 'hsl(var(--accent-color))' }}>
                                "Investing is an act of optimism towards oneself."
                            </p>
                        </div>

                        <p style={{ marginBottom: '1.5rem' }}>
                            Don't wait for the "perfect moment" or the "right" amount to start. The best time to start building the life you want is today. Define your goals, name them, and start charting the course.
                        </p>

                        <p style={{ marginBottom: '1.5rem', fontWeight: 'bold' }}>
                            And you, which goal do you want to achieve first?
                        </p>
                    </>
                )}
            </div>
        </article>
    );
}
