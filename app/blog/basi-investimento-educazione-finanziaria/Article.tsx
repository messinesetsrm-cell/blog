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
                { label: lang === 'it' ? 'Basi Investimento' : 'Investment Basics' }
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
                        ? "Educazione Finanziaria #1: Perché investire non è (solo) per ricchi"
                        : "Financial Education #1: Why Investing Isn't (Only) for the Rich"}
                </h1>
                <div className={styles.meta} style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <span>Basi Investimento</span>
                        <span>•</span>
                        <span>{lang === 'it' ? 'Gen 14, 2026' : 'Jan 14, 2026'}</span>
                    </div>
                    <ShareButton
                        title={lang === 'it' ? "Educazione Finanziaria #1" : "Financial Education #1"}
                        text={lang === 'it' ? "Perché investire non è (solo) per ricchi" : "Why investing isn't (only) for the rich"}
                        url="https://messinese.work/blog/basi-investimento-educazione-finanziaria"
                    />
                </div>
            </header>

            <div className={styles.content} style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'hsl(var(--text-secondary))' }}>
                {lang === 'it' ? (
                    <>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Molti pensano che il mondo degli investimenti sia riservato a chi ha capitali enormi. La realtà è che investire è uno strumento di protezione necessario, accessibile a tutti.
                        </p>

                        <div style={{ marginBottom: '2rem', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
                            <Image
                                src="/images/infografica-investimento.jpg"
                                alt="Infografica: Perché Investire?"
                                width={1200}
                                height={675}
                                style={{ width: '100%', height: 'auto', display: 'block' }}
                            />
                        </div>


                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>L'Inflazione: il nemico silenzioso</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            L'inflazione erode il tuo potere d'acquisto nel tempo. Se lasci i tuoi soldi fermi sul conto, ogni anno valgono un po' meno. Investire è il modo principale per proteggere il valore del tuo lavoro.
                        </p>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>L'Interesse Composto: l'ottava meraviglia</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Albert Einstein definì l'interesse composto come "l'ottava meraviglia del mondo". È il processo attraverso cui i tuoi rendimenti generano altri rendimenti, portando a una crescita esponenziale del capitale nel tempo.
                        </p>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>I 3 Pilastri dell'Investitore</h3>
                        <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem', listStyle: 'disc' }}>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Orizzonte temporale:</strong> Il tempo è il tuo miglior alleato. Più lungo è, più rischi puoi gestire.</li>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Diversificazione:</strong> Non mettere tutte le uova in un solo paniere.</li>
                            <li><strong>Profilo di rischio:</strong> Conoscere sé stessi e quanto si è disposti a sopportare le oscillazioni di mercato.</li>
                        </ul>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>Confronto: Conto Corrente vs Investimento</h3>
                        <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
                            <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid hsl(var(--border-color))' }}>
                                <thead>
                                    <tr style={{ background: 'hsla(var(--accent-color), 0.1)' }}>
                                        <th style={{ padding: '1rem', border: '1px solid hsl(var(--border-color))', textAlign: 'left' }}>Caratteristica</th>
                                        <th style={{ padding: '1rem', border: '1px solid hsl(var(--border-color))', textAlign: 'left' }}>Lasciare i soldi sul Conto</th>
                                        <th style={{ padding: '1rem', border: '1px solid hsl(var(--border-color))', textAlign: 'left' }}>Investimento Diversificato (es. ETF)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td style={{ padding: '1rem', border: '1px solid hsl(var(--border-color))' }}><strong>Rischio</strong></td>
                                        <td style={{ padding: '1rem', border: '1px solid hsl(var(--border-color))' }}>Basso</td>
                                        <td style={{ padding: '1rem', border: '1px solid hsl(var(--border-color))' }}>Medio/Alto nel breve periodo</td>
                                    </tr>
                                    <tr>
                                        <td style={{ padding: '1rem', border: '1px solid hsl(var(--border-color))' }}><strong>Rendimento atteso</strong></td>
                                        <td style={{ padding: '1rem', border: '1px solid hsl(var(--border-color))' }}>Quasi zero / Negativo</td>
                                        <td style={{ padding: '1rem', border: '1px solid hsl(var(--border-color))' }}>Storicamente 5-7% annuo</td>
                                    </tr>
                                    <tr>
                                        <td style={{ padding: '1rem', border: '1px solid hsl(var(--border-color))' }}><strong>Effetto inflazione</strong></td>
                                        <td style={{ padding: '1rem', border: '1px solid hsl(var(--border-color))' }}>Perdita di valore</td>
                                        <td style={{ padding: '1rem', border: '1px solid hsl(var(--border-color))' }}>Protezione del valore</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <p style={{ marginBottom: '1.5rem', fontWeight: 'bold' }}>
                            Conclusione: L'importante è iniziare subito, anche con piccole cifre tramite un Piano di Accumulo del Capitale (PAC). Il tempo che non investi è tempo che perdi.
                        </p>
                    </>
                ) : (
                    <>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Many people think that the world of investment is reserved for those with huge sums of capital. The reality is that investing is a necessary tool for protection, accessible to everyone.
                        </p>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>Inflation: The Silent Enemy</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Inflation erodes your purchasing power over time. If you leave your money sitting in a bank account, it's worth a little less every year. Investing is the primary way to protect the value of your work.
                        </p>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>Compound Interest: The Eighth Wonder</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Albert Einstein called compound interest "the eighth wonder of the world." It is the process by which your returns generate further returns, leading to exponential growth of capital over time.
                        </p>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>The 3 Pillars of an Investor</h3>
                        <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem', listStyle: 'disc' }}>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Time Horizon:</strong> Time is your best ally. The longer it is, the more risk you can manage.</li>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Diversification:</strong> Don't put all your eggs in one basket.</li>
                            <li><strong>Risk Profile:</strong> Knowing yourself and how much market volatility you can handle.</li>
                        </ul>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>Comparison: Savings Account vs. Investment</h3>
                        <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
                            <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid hsl(var(--border-color))' }}>
                                <thead>
                                    <tr style={{ background: 'hsla(var(--accent-color), 0.1)' }}>
                                        <th style={{ padding: '1rem', border: '1px solid hsl(var(--border-color))', textAlign: 'left' }}>Feature</th>
                                        <th style={{ padding: '1rem', border: '1px solid hsl(var(--border-color))', textAlign: 'left' }}>Leaving money in the Bank</th>
                                        <th style={{ padding: '1rem', border: '1px solid hsl(var(--border-color))', textAlign: 'left' }}>Diversified Investment (e.g. ETF)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td style={{ padding: '1rem', border: '1px solid hsl(var(--border-color))' }}><strong>Risk</strong></td>
                                        <td style={{ padding: '1rem', border: '1px solid hsl(var(--border-color))' }}>Low</td>
                                        <td style={{ padding: '1rem', border: '1px solid hsl(var(--border-color))' }}>Medium/High in the short term</td>
                                    </tr>
                                    <tr>
                                        <td style={{ padding: '1rem', border: '1px solid hsl(var(--border-color))' }}><strong>Expected Return</strong></td>
                                        <td style={{ padding: '1rem', border: '1px solid hsl(var(--border-color))' }}>Near Zero / Negative</td>
                                        <td style={{ padding: '1rem', border: '1px solid hsl(var(--border-color))' }}>Historically 5-7% annually</td>
                                    </tr>
                                    <tr>
                                        <td style={{ padding: '1rem', border: '1px solid hsl(var(--border-color))' }}><strong>Inflation Effect</strong></td>
                                        <td style={{ padding: '1rem', border: '1px solid hsl(var(--border-color))' }}>Value Loss</td>
                                        <td style={{ padding: '1rem', border: '1px solid hsl(var(--border-color))' }}>Value Protection</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <p style={{ marginBottom: '1.5rem', fontWeight: 'bold' }}>
                            Conclusion: The key is to start immediately, even with small amounts through a Capital Accumulation Plan (PAC). Uninvested time is lost time.
                        </p>
                    </>
                )}
            </div>
        </article>
    );
}
