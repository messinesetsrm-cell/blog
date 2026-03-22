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
                { label: lang === 'it' ? 'La Pazienza è il nuovo "Alpha"' : 'Patience is the new "Alpha"' }
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
                        ? 'La Pazienza è il nuovo "Alpha": Perché saper aspettare rende più di qualsiasi previsione'
                        : 'Patience is the new "Alpha": Why waiting pays off more than any forecast'}
                </h1>
                <div className={styles.meta} style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <span>Educazione Finanziaria</span>
                        <span>•</span>
                        <span>{lang === 'it' ? 'Mar 22, 2026' : 'Mar 22, 2026'}</span>
                    </div>
                    <ShareButton
                        title={lang === 'it' ? 'La Pazienza è il nuovo "Alpha"' : 'Patience is the new "Alpha"'}
                        text={lang === 'it' ? "Scopri perché la pazienza non è solo una virtù morale, ma un vero e proprio motore di rendimento quantificabile negli investimenti." : "Discover why patience is not just a moral virtue, but a real, quantifiable driver of returns in investing."}
                        url="https://messinese.work/blog/pazienza-nuovo-alpha"
                    />
                </div>
            </header>

            <div className={styles.content} style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'hsl(var(--text-secondary))' }}>
                <div style={{ marginBottom: '2.5rem', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.15)', border: '1px solid hsla(var(--accent-color), 0.2)' }}>
                    <Image
                        src="/images/pazienza-alpha.png"
                        alt={lang === 'it' ? "Infografica: La Pazienza come Alpha negli Investimenti" : "Infographic: Patience as Alpha in Investing"}
                        width={1200}
                        height={675}
                        style={{ width: '100%', height: 'auto', display: 'block' }}
                        priority
                    />
                </div>

                {lang === 'it' ? (
                    <>
                        <p style={{ marginBottom: '1.5rem', fontSize: '1.2rem', fontStyle: 'italic', borderLeft: '4px solid hsl(var(--accent-color))', paddingLeft: '1.5rem', color: 'hsl(var(--text-primary))' }}>
                            Nel mondo degli investimenti siamo ossessionati dalla ricerca della "prossima mossa vincente". Analizziamo grafici, seguiamo le notizie macroeconomiche e cerchiamo di anticipare i movimenti del mercato. Ma cosa succederebbe se il segreto per ottenere rendimenti superiori fosse molto più semplice (ma incredibilmente difficile da attuare)?
                        </p>

                        <p style={{ marginBottom: '1.5rem' }}>
                            Recentemente ho approfondito il paper di Gabriele Galletta, "Patience As Alpha", e i concetti espressi cambiano radicalmente la prospettiva su come dovremmo gestire i nostri portafogli.
                        </p>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>Che cos'è la "Patience Alpha"?</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Solitamente, l'Alpha rappresenta la capacità di un gestore di battere il mercato. Galletta teorizza che la pazienza non sia solo una virtù morale, ma un vero e proprio motore di rendimento quantificabile.
                        </p>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>Ecco perché la pazienza paga (letteralmente):</h3>

                        <div style={{ padding: '1.5rem', background: 'hsla(var(--accent-color), 0.05)', borderRadius: 'var(--radius-md)', marginBottom: '1.5rem', border: '1px dashed hsla(var(--accent-color), 0.3)' }}>
                            <p style={{ marginBottom: '1rem', fontWeight: '500' }}>
                                <strong>L’efficienza del tempo:</strong> Rimanere fermi permette all'interesse composto di sprigionare tutta la sua forza e ottimizza il carico fiscale, evitando di "regalare" rendimento in tasse e commissioni di trading superflue.
                            </p>
                            <p style={{ marginBottom: '1rem', fontWeight: '500' }}>
                                <strong>Vincere contro se stessi:</strong> Il mercato punisce l'impazienza. Chi scappa durante i ribassi o insegue i trend del momento distrugge valore. La "Patience Alpha" è il premio che ricevi per non aver ceduto ai tuoi istinti primordiali di fuga.
                            </p>
                            <p style={{ marginBottom: '0', fontWeight: '500' }}>
                                <strong>Sfruttare le inefficienze:</strong> Nei mercati meno liquidi o meno efficienti, il tempo è l'unico vero vantaggio competitivo. Chi può permettersi di aspettare anni raccoglie i frutti che chi cerca il "tutto e subito" è costretto a lasciare sul tavolo.
                            </p>
                        </div>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>In conclusione</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Il paper ci ricorda che, paradossalmente, nell'era dell'iper-informazione e della velocità estrema, l'asset più scarso e prezioso è il tempo. Non conta solo cosa compri, ma per quanto tempo sei disposto a tenerlo, specialmente quando tutti gli altri intorno a te stanno correndo verso l'uscita.
                        </p>
                        <p style={{ marginBottom: '1.5rem', fontWeight: 'bold' }}>
                            E voi? Siete investitori pazienti o vi lasciate guidare dalla frenesia del momento?
                        </p>
                    </>
                ) : (
                    <>
                        <p style={{ marginBottom: '1.5rem', fontSize: '1.2rem', fontStyle: 'italic', borderLeft: '4px solid hsl(var(--accent-color))', paddingLeft: '1.5rem', color: 'hsl(var(--text-primary))' }}>
                            In the investment world, we are obsessed with finding the "next winning move." We analyze charts, follow macroeconomic news, and try to anticipate market movements. But what if the secret to superior returns were much simpler (yet incredibly difficult to execute)?
                        </p>

                        <p style={{ marginBottom: '1.5rem' }}>
                            I recently delved into Gabriele Galletta's paper, "Patience As Alpha," and the concepts expressed radically change the perspective on how we should manage our portfolios.
                        </p>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>What is "Patience Alpha"?</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Typically, Alpha represents a manager's ability to beat the market. Galletta theorizes that patience is not just a moral virtue, but a real, quantifiable driver of returns.
                        </p>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>Here is why patience pays (literally):</h3>

                        <div style={{ padding: '1.5rem', background: 'hsla(var(--accent-color), 0.05)', borderRadius: 'var(--radius-md)', marginBottom: '1.5rem', border: '1px dashed hsla(var(--accent-color), 0.3)' }}>
                            <p style={{ marginBottom: '1rem', fontWeight: '500' }}>
                                <strong>Time Efficiency:</strong> Staying put allows compound interest to unleash its full power and optimizes the tax burden, avoiding "giving away" returns in taxes and unnecessary trading commissions.
                            </p>
                            <p style={{ marginBottom: '1rem', fontWeight: '500' }}>
                                <strong>Winning against yourself:</strong> The market punishes impatience. Those who flee during downturns or chase current trends destroy value. "Patience Alpha" is the reward you receive for not giving in to your primal instincts to flee.
                            </p>
                            <p style={{ marginBottom: '0', fontWeight: '500' }}>
                                <strong>Exploiting inefficiencies:</strong> In less liquid or less efficient markets, time is the only true competitive advantage. Those who can afford to wait years reap the rewards that those seeking "everything right now" are forced to leave on the table.
                            </p>
                        </div>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>In conclusion</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            The paper reminds us that, paradoxically, in the era of hyper-information and extreme speed, the scarcest and most precious asset is time. It doesn't just matter what you buy, but how long you are willing to hold it, especially when everyone else around you is rushing for the exit.
                        </p>
                        <p style={{ marginBottom: '1.5rem', fontWeight: 'bold' }}>
                            What about you? Are you patient investors, or do you let the frenzy of the moment guide you?
                        </p>
                    </>
                )}
            </div>
        </article>
    );
}
