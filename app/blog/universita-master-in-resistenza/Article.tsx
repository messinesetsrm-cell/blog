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
                { label: lang === 'it' ? 'Il paradosso del "Pezzo di Carta"' : 'The Paradox of the "Piece of Paper"' }
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
                        ? 'Il paradosso del "Pezzo di Carta": l’Università è diventata un Master in Resistenza?'
                        : 'The Paradox of the "Piece of Paper": Has University Become a Master in Endurance?'}
                </h1>
                <div className={styles.meta} style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <span>Lavoro & Formazione</span>
                        <span>•</span>
                        <span>{lang === 'it' ? 'Mag 01, 2026' : 'May 01, 2026'}</span>
                    </div>
                    <ShareButton
                        title={lang === 'it' ? 'Il paradosso del "Pezzo di Carta"' : 'The Paradox of the "Piece of Paper"'}
                        text={lang === 'it' ? "L'università oggi serve, ma non per le ragioni che leggiamo nei bandi. È diventata una palestra per il cervello, un certificato di resilienza contro le difficoltà del lavoro." : "A degree is needed today, but not for the reasons we read in job postings. It has become a training ground for the brain, a certificate of resilience."}
                        url="https://messinese.work/blog/universita-master-in-resistenza"
                    />
                </div>
            </header>

            <div className={styles.content} style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'hsl(var(--text-secondary))' }}>
                <div style={{ marginBottom: '2.5rem', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.15)', border: '1px solid hsla(var(--accent-color), 0.2)' }}>
                    <Image
                        src="/images/universita_master_resistenza.png"
                        alt={lang === 'it' ? "Infografica: Università e Resistenza" : "Infographic: University and Endurance"}
                        width={1200}
                        height={675}
                        style={{ width: '100%', height: 'auto', display: 'block' }}
                        priority
                    />
                </div>

                {lang === 'it' ? (
                    <>
                        <p style={{ marginBottom: '1.5rem', fontSize: '1.2rem', fontStyle: 'italic', borderLeft: '4px solid hsl(var(--accent-color))', paddingLeft: '1.5rem', color: 'hsl(var(--text-primary))' }}>
                            Diciamocelo chiaramente, senza girarci troppo intorno: la laurea oggi serve. Ma non per le ragioni che leggiamo nei bandi di concorso o nelle descrizioni dei posti di lavoro.
                        </p>
                        
                        <p style={{ marginBottom: '1.5rem' }}>
                            Se guardiamo al percorso accademico con onestà, dobbiamo ammettere che l'università è diventata una palestra per il cervello. Non è tanto ciò che studi, ma come studi a fare la differenza:
                        </p>

                        <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem', listStyleType: 'disc' }}>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Gestione dello stress:</strong> Sessioni d’esame impossibili e scadenze serrate.</li>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Organizzazione del pensiero:</strong> Sintetizzare migliaia di pagine in concetti logici (ad aver avuto l’AI 😊).</li>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Metodo:</strong> Imparare a imparare (con il TFA questo concetto si è sentito fino alla nausea), superando ostacoli complessi in autonomia.</li>
                        </ul>

                        <div style={{ padding: '1.5rem', background: 'hsla(var(--accent-color), 0.05)', borderRadius: 'var(--radius-md)', margin: '2rem 0', border: '1px dashed hsla(var(--accent-color), 0.3)', textAlign: 'center' }}>
                            <p style={{ margin: 0, fontSize: '1.3rem', fontStyle: 'italic', fontWeight: '500', color: 'hsl(var(--accent-color))' }}>
                                "In pratica l’università non ti insegna il lavoro, ti insegna a non affogare quando il lavoro diventa difficile. È un certificato di resilienza."
                            </p>
                        </div>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>La Nota Dolente: Il Divario Tecnico</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Qui arriva la nota dolente. A livello di competenze tecniche (hard skills), il sistema accademico è diventato, in molti settori (no, per i medici non conta!), assolutamente inutile.
                        </p>

                        <p style={{ marginBottom: '1.5rem' }}>
                            Il mercato corre a una velocità che la burocrazia universitaria non riesce nemmeno a intravedere. Mentre un piano di studi viene discusso, approvato e implementato, le tecnologie o le procedure che dovrebbe insegnare sono già obsolete (in questi mesi vorrei avviare un nuovo percorso accademico e, ad oggi, ancora attendo il riconoscimento dei CFU da parte della segreteria; ma non possono usare Gemini?!).
                        </p>
                        
                        <p style={{ marginBottom: '1.5rem' }}>
                            Ci ritroviamo in un paradosso: le aziende assumono per il "pezzo di carta", ma poi sono “costrette” a formare le persone perché non sanno gestire la pratica quotidiana.
                        </p>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>Mappe Vecchie per Territori Nuovi</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Sempre più spesso, chi esce dall'università possiede una mappa dettagliata di un territorio che non esiste più. Chi lavora "sul campo" sa che la realtà è fatta di imprevisti, rapidità decisionale e strumenti che cambiano ogni sei mesi. L'aula, al contrario, è un ambiente protetto, lento, spesso ancorato a una teoria coperta di polvere.
                        </p>

                        <p style={{ marginBottom: '1.5rem' }}>
                            Ha ancora senso, quindi, pretendere la laurea per ruoli dove contano esclusivamente le competenze tecniche? O stiamo usando il titolo accademico solo come un filtro pigro per scremare i candidati, dando per scontato che chi si è laureato sia "più disciplinato"?
                        </p>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>Un Master in Resistenza Mentale</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Forse dovremmo finalmente ammettere che l'università oggi è un master in resistenza mentale. È un percorso prezioso per formare il carattere e la capacità critica, ma è ora di smettere di considerarla la fonte primaria del saper fare.
                        </p>

                        <p style={{ marginBottom: '1.5rem' }}>
                            Se il mercato vuole professionisti pronti, deve iniziare a valorizzare l'esperienza pratica e la formazione continua tanto quanto, se non di più, di un titolo accademico che, spesso, testimonia solo quanto siamo stati bravi a stare seduti su una sedia per cinque anni.
                        </p>

                        <p style={{ marginBottom: '1.5rem', fontWeight: 'bold' }}>
                            Chiudo come ho iniziato: la laurea serve? Sì, ma le università devono “correre”.
                        </p>
                    </>
                ) : (
                    <>
                        <p style={{ marginBottom: '1.5rem', fontSize: '1.2rem', fontStyle: 'italic', borderLeft: '4px solid hsl(var(--accent-color))', paddingLeft: '1.5rem', color: 'hsl(var(--text-primary))' }}>
                            Let's be clear, without beating around the bush: a degree is needed today. But not for the reasons we read in job postings or job descriptions.
                        </p>
                        
                        <p style={{ marginBottom: '1.5rem' }}>
                            If we look at the academic path honestly, we must admit that university has become a training ground for the brain. It's not so much what you study, but how you study that makes the difference:
                        </p>

                        <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem', listStyleType: 'disc' }}>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Stress management:</strong> Impossible exam sessions and tight deadlines.</li>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Organization of thought:</strong> Synthesizing thousands of pages into logical concepts (if only we had AI 😊).</li>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Method:</strong> Learning to learn, overcoming complex obstacles autonomously.</li>
                        </ul>

                        <div style={{ padding: '1.5rem', background: 'hsla(var(--accent-color), 0.05)', borderRadius: 'var(--radius-md)', margin: '2rem 0', border: '1px dashed hsla(var(--accent-color), 0.3)', textAlign: 'center' }}>
                            <p style={{ margin: 0, fontSize: '1.3rem', fontStyle: 'italic', fontWeight: '500', color: 'hsl(var(--accent-color))' }}>
                                "In practice, university doesn't teach you the job, it teaches you not to drown when the job gets difficult. It's a certificate of resilience."
                            </p>
                        </div>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>The Sore Point: The Technical Gap</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Here comes the sore point. At the level of technical skills (hard skills), the academic system has become, in many sectors (no, it doesn't count for doctors!), absolutely useless.
                        </p>

                        <p style={{ marginBottom: '1.5rem' }}>
                            The market runs at a speed that university bureaucracy cannot even glimpse. While a study plan is discussed, approved, and implemented, the technologies or procedures it should teach are already obsolete (in these months I would like to start a new academic path and, to date, I am still waiting for the recognition of credits by the secretariat; couldn't they use Gemini?!).
                        </p>
                        
                        <p style={{ marginBottom: '1.5rem' }}>
                            We find ourselves in a paradox: companies hire for the "piece of paper", but then are "forced" to train people because they don't know how to manage daily practice.
                        </p>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>Old Maps for New Territories</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Increasingly often, those who leave university possess a detailed map of a territory that no longer exists. Those who work "in the field" know that reality is made up of unforeseen events, rapid decision-making, and tools that change every six months. The classroom, on the contrary, is a protected, slow environment, often anchored to dust-covered theory.
                        </p>

                        <p style={{ marginBottom: '1.5rem' }}>
                            Does it still make sense, then, to demand a degree for roles where only technical skills count? Or are we using the academic title only as a lazy filter to weed out candidates, assuming that those who have graduated are "more disciplined"?
                        </p>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>A Master in Mental Endurance</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Perhaps we should finally admit that university today is a master in mental endurance. It is a precious path to build character and critical capacity, but it is time to stop considering it the primary source of know-how.
                        </p>

                        <p style={{ marginBottom: '1.5rem' }}>
                            If the market wants ready professionals, it must start valuing practical experience and continuous training as much as, if not more than, an academic title that often only testifies to how good we were at sitting on a chair for five years.
                        </p>

                        <p style={{ marginBottom: '1.5rem', fontWeight: 'bold' }}>
                            I close as I began: is a degree needed? Yes, but universities must "run".
                        </p>
                    </>
                )}
            </div>
        </article>
    );
}
