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
                { label: lang === 'it' ? 'Product Engineer' : 'Product Engineer' }
            ]} />
            <header className={styles.header}>
                <div style={{ marginBottom: '2rem', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
                    <Image
                        src="/images/canva-ai-senior-engineer-future.png"
                        alt="Product Engineer Future"
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
                    {lang === 'it' ? "Messinese: Il Senior Engineer è morto, lunga vita al Product Engineer" : "Messinese: The Senior Engineer is Dead, Long Live the Product Engineer"}
                </h1>
                <div className={styles.meta} style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <span>Visione</span>
                        <span>•</span>
                        <span>{lang === 'it' ? 'Feb 16, 2026' : 'Feb 16, 2026'}</span>
                    </div>
                    <ShareButton
                        title={lang === 'it' ? "Il Product Engineer" : "The Product Engineer"}
                        text={lang === 'it' ? "Messinese: Il Senior Engineer è morto, lunga vita al Product Engineer" : "The Senior Engineer is Dead, Long Live the Product Engineer"}
                        url="https://www.messinese.work/blog/canva-ai-senior-engineer-future"
                    />
                </div>
            </header>

            <div className={styles.content} style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'hsl(var(--text-secondary))' }}>
                {lang === 'it' ? (
                    <>
                        <h3 className={styles.sectionTitle}>La fine dell'era del 'Solo Codice'</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            C'è una dichiarazione che sta scuotendo le fondamenta della Silicon Valley e non solo. Dave Hearnden, CTO di Canva, ha recentemente affermato che il ruolo del "Senior Engineer" sta subendo una trasformazione radicale a causa dell'intelligenza artificiale.
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            In passato, il valore di un ingegnere era misurato dalla sua capacità di risolvere enigmi tecnici complessi e scrivere righe di codice impeccabili. Oggi, quella barriera sta crollando. L'AI ha abbassato la "gravità" tecnica: scrivere codice sta diventando un'attività a basso attrito, quasi una commodity.
                        </p>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>Dal Come al Cosa: L'ascesa del Product Engineer</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Secondo Hearnden, non stiamo andando verso un mondo con meno ingegneri, ma verso un mondo con ingegneri diversi. Il nuovo profilo richiesto è il <strong>Product Engineer</strong>.
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>Cosa significa?</p>
                        <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem', listStyle: 'disc' }}>
                            <li style={{ marginBottom: '0.8rem' }}><strong>Meno esecuzione, più intenzione:</strong> Se l'AI può scrivere il codice in pochi secondi, il vero valore umano si sposta sulla comprensione del problema dell'utente.</li>
                            <li style={{ marginBottom: '0.8rem' }}><strong>Visione d'insieme:</strong> Non basta più essere esperti di un singolo linguaggio. Bisogna saper orchestrare l'AI per costruire prodotti che abbiano un impatto reale.</li>
                            <li style={{ marginBottom: '0.8rem' }}><strong>Velocità Antigravitazionale:</strong> La velocità con cui un'idea può diventare un prototipo funzionante è aumentata di dieci volte. Questo significa che il "collo di bottiglia" non è più la programmazione, ma la creatività e il design del prodotto.</li>
                        </ul>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>La sfida per noi</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Questa evoluzione ci insegna una lezione fondamentale, valida anche al di fuori del mondo tech: <strong>l'automazione non elimina l'esperto, ma lo costringe a elevare il suo punto di osservazione.</strong>
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Come scriviamo spesso su questo blog, sfidare la gravità significa non farsi schiacciare dal peso dei compiti ripetitivi che le macchine possono fare meglio di noi. La vera ricchezza, professionale e intellettuale, risiederà nella capacità di fare le domande giuste e di avere una visione chiara di dove vogliamo arrivare.
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Il codice è diventato leggero. Ora tocca a noi decidere verso quali stelle farlo volare.
                        </p>
                    </>
                ) : (
                    <>
                        <h3 className={styles.sectionTitle}>The End of the 'Code Only' Era</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            There is a statement shaking the foundations of Silicon Valley and beyond. Dave Hearnden, CTO of Canva, recently stated that the role of the "Senior Engineer" is undergoing a radical transformation due to artificial intelligence.
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            In the past, an engineer's value was measured by their ability to solve complex technical puzzles and write flawless lines of code. Today, that barrier is collapsing. AI has lowered technical "gravity": writing code is becoming a low-friction activity, almost a commodity.
                        </p>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>From How to What: The Rise of the Product Engineer</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            According to Hearnden, we are not heading towards a world with fewer engineers, but towards a world with different engineers. The new required profile is the <strong>Product Engineer</strong>.
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>What does it mean?</p>
                        <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem', listStyle: 'disc' }}>
                            <li style={{ marginBottom: '0.8rem' }}><strong>Less execution, more intention:</strong> If AI can write code in seconds, true human value shifts to understanding the user's problem.</li>
                            <li style={{ marginBottom: '0.8rem' }}><strong>Overall vision:</strong> It's no longer enough to be an expert in a single language. You must know how to orchestrate AI to build products that have a real impact.</li>
                            <li style={{ marginBottom: '0.8rem' }}><strong>Antigravity Speed:</strong> The speed at which an idea can become a working prototype has increased tenfold. This means the "bottleneck" is no longer programming, but product creativity and design.</li>
                        </ul>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>The Challenge for Us</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            This evolution teaches us a fundamental lesson, valid even outside the tech world: <strong>automation doesn't eliminate the expert; it forces them to elevate their point of observation.</strong>
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            As we often write on this blog, defying gravity means not being crushed by the weight of repetitive tasks that machines can do better than us. True professional and intellectual wealth will reside in the ability to ask the right questions and have a clear vision of where we want to go.
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Code has become lightweight. Now it's up to us to decide which stars to let it fly towards.
                        </p>
                    </>
                )}
            </div>
        </article>
    );
}
