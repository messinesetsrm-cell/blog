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
                        src="/images/stop-reading-news.jpg"
                        alt="Smetti di Leggere le Notizie"
                        width={800}
                        height={800}
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
                        ? "Smetti di Leggere le Notizie: Riprenditi il Tuo Tempo e la Tua Mente"
                        : "Stop Reading the News: Reclaim Your Time and Your Mind"}
                </h1>
                <div className={styles.meta} style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <span>Long-form</span>
                        <span>•</span>
                        <span>{lang === 'it' ? 'Gen 26, 2026' : 'Jan 26, 2026'}</span>
                    </div>
                    <ShareButton
                        title={lang === 'it' ? "Smetti di Leggere le Notizie" : "Stop Reading the News"}
                        text={lang === 'it' ? "Riprenditi il Tuo Tempo e la Tua Mente" : "Reclaim Your Time and Your Mind"}
                        url="https://www.messinese.work/blog/smetti-leggere-notizie"
                    />
                </div>
            </header>

            <div className={styles.content} style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'hsl(var(--text-secondary))' }}>
                {lang === 'it' ? (
                    <>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Nell'era dell'informazione costante, siamo bombardati da un flusso ininterrotto di notizie. Dalle notifiche sul telefono alle prime pagine dei giornali online, sembra che il mondo intero ci chiami a gran voce, chiedendoci di essere sempre aggiornati. Ma cosa succederebbe se ti dicessi che questo incessante consumo di notizie potrebbe non solo essere inutile, ma addirittura dannoso per la tua produttività, la tua concentrazione e persino la tua serenità mentale?
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            L'idea che "ignorare le notizie ti rende più intelligente" è stata resa popolare da pensatori come Rolf Dobelli nel suo libro "Stop Reading the News". E sebbene possa sembrare controintuitivo in un mondo che premia l'essere informati, ci sono solide ragioni per riconsiderare il nostro rapporto con il flusso di informazioni quotidiano.
                        </p>

                        <h2 className={styles.sectionTitle}>Il Vizio delle Notizie: Un Ciclo Infruttuoso</h2>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Pensaci bene: quante delle notizie che hai letto ieri o la settimana scorsa hanno avuto un impatto reale sulla tua vita, sulle tue decisioni importanti o sul tuo lavoro a lungo termine? Molto probabilmente, la risposta è: pochissime. La maggior parte delle notizie sono "rumore bianco", eventi effimeri, scandali passeggeri o dettagli irrilevanti che catturano la nostra attenzione per un breve istante per poi svanire, lasciandoci esattamente dove eravamo prima.
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Questo consumo compulsivo crea una falsa sensazione di produttività. Ci illudiamo di essere proattivi e informati, quando in realtà stiamo solo distraggendo la nostra mente da ciò che conta davvero.
                        </p>

                        <h2 className={styles.sectionTitle}>I Costi Nascosti l'Informazione Costante:</h2>
                        <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem', listStyle: 'disc' }}>
                            <li style={{ marginBottom: '1rem' }}>
                                <strong>Danni alla Concentrazione (Deep Work):</strong> La costante interruzione delle notizie spezza la nostra attenzione. Ogni volta che controlliamo un titolo, il nostro cervello impiega tempo per riorientarsi al compito precedente. Questo rende quasi impossibile svolgere lavori che richiedono profonda concentrazione e pensiero critico.
                            </li>
                            <li style={{ marginBottom: '1rem' }}>
                                <strong>Visione Distorta del Mondo:</strong> Le notizie, per loro natura, tendono a concentrarsi su eventi negativi, tragedie, conflitti e problemi. Questo perché il "negativo" vende e attira più facilmente l'attenzione. Il risultato è una visione distorta e spesso pessimistica del mondo, che può alimentare ansia, paura e un senso di impotenza.
                            </li>
                            <li style={{ marginBottom: '1rem' }}>
                                <strong>Perdita di Tempo Prezioso:</strong> Ogni minuto speso a scorrere feed di notizie è un minuto che non dedichiamo a imparare una nuova abilità, a passare tempo con i nostri cari, a lavorare su un progetto significativo o semplicemente a riposare. Il tempo è la nostra risorsa più preziosa, e le notizie lo dilapidano.
                            </li>
                            <li style={{ marginBottom: '1rem' }}>
                                <strong>Illusione di Comprensione:</strong> Leggere titoli e brevi articoli ci dà l'illusione di capire questioni complesse. In realtà, spesso ci impedisce di approfondire, leggere libri, studi o analisi più complete che offrirebbero una vera comprensione.
                            </li>
                        </ul>

                        <h2 className={styles.sectionTitle}>Come Disintossicarsi dal Flusso di Notizie:</h2>
                        <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem', listStyle: 'disc' }}>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Sii Selettivo:</strong> Invece di consumare notizie indiscriminatamente, scegli fonti affidabili e limitati a controllarle una o due volte al giorno, o anche meno.</li>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Opta per l'Approfondimento:</strong> Privilegia libri, saggi, documentari o articoli di analisi lunghi che offrono una prospettiva più profonda e un contesto reale.</li>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Focalizzati su Ciò che Puoi Controllare:</strong> Concentra la tua energia su ciò che puoi influenzare direttamente nella tua vita, piuttosto che preoccuparti per eventi globali su cui hai scarso controllo.</li>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Riscopri il "Deep Work":</strong> Proteggi blocchi di tempo in cui ti dedichi a compiti importanti senza interruzioni digitali.</li>
                        </ul>

                        <p style={{ marginBottom: '1.5rem' }}>
                            Smettere di leggere le notizie non significa essere disinformati o ignoranti. Significa essere intenzionali con il proprio consumo di informazioni, scegliere la qualità sulla quantità e riprendersi il controllo del proprio tempo e della propria mente. Prova a staccarti per una settimana e osserva come cambia la tua concentrazione e il tuo stato d'animo. Potresti rimanere sorpreso dai risultati.
                        </p>
                    </>
                ) : (
                    <>
                        <p style={{ marginBottom: '1.5rem' }}>
                            In the era of constant information, we are bombarded by an unceasing flow of news. From phone notifications to the headlines of online newspapers, it seems like the entire world is shouting at us, asking us to be always up to date. But what if I told you that this constant news consumption might not only be useless but actually harmful to your productivity, concentration, and even your peace of mind?
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            The idea that "ignoring the news makes you smarter" has been popularized by thinkers like Rolf Dobelli in his book "Stop Reading the News." While it may seem counterintuitive in a world that rewards being informed, there are solid reasons to reconsider our relationship with the daily information flow.
                        </p>

                        <h2 className={styles.sectionTitle}>The News Addiction: A Fruitless Cycle</h2>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Think about it: how many of the news stories you read yesterday or last week had a real impact on your life, your important decisions, or your long-term work? Most likely, the answer is: very few. Most news is "white noise"—ephemeral events, passing scandals, or irrelevant details that capture our attention for a brief moment only to fade away, leaving us exactly where we were before.
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            This compulsive consumption creates a false sense of productivity. We delude ourselves into thinking we are proactive and informed when, in reality, we are just distracting our minds from what truly matters.
                        </p>

                        <h2 className={styles.sectionTitle}>The Hidden Costs of Constant Information:</h2>
                        <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem', listStyle: 'disc' }}>
                            <li style={{ marginBottom: '1rem' }}>
                                <strong>Damage to Concentration (Deep Work):</strong> Constant news interruptions break our attention. Every time we check a headline, our brain takes time to refocus on the previous task. This makes it almost impossible to perform work that requires deep concentration and critical thinking.
                            </li>
                            <li style={{ marginBottom: '1rem' }}>
                                <strong>Distorted World View:</strong> News, by its nature, tends to focus on negative events, tragedies, conflicts, and problems. This is because "negative" sells and attracts attention more easily. The result is a distorted and often pessimistic view of the world, which can fuel anxiety, fear, and a sense of helplessness.
                            </li>
                            <li style={{ marginBottom: '1rem' }}>
                                <strong>Loss of Precious Time:</strong> Every minute spent scrolling through news feeds is a minute not spent learning a new skill, spending time with loved ones, working on a meaningful project, or simply resting. Time is our most precious resource, and news squanders it.
                            </li>
                            <li style={{ marginBottom: '1rem' }}>
                                <strong>The Illusion of Understanding:</strong> Reading headlines and short articles gives us the illusion of understanding complex issues. In reality, it often prevents us from going deeper, reading books, studies, or more complete analyses that would offer true understanding.
                            </li>
                        </ul>

                        <h2 className={styles.sectionTitle}>How to Detox from the News Flow:</h2>
                        <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem', listStyle: 'disc' }}>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Be Selective:</strong> Instead of consuming news indiscriminately, choose reliable sources and limit checking them to once or twice a day, or even less.</li>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Opt for Depth:</strong> Prioritize books, essays, documentaries, or long-form analysis articles that offer a deeper perspective and real context.</li>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Focus on What You Can Control:</strong> Concentrate your energy on what you can directly influence in your life, rather than worrying about global events you have little control over.</li>
                            <li style={{ marginBottom: '0.5rem' }}><strong>Rediscover "Deep Work":</strong> Protect blocks of time where you dedicate yourself to important tasks without digital interruptions.</li>
                        </ul>

                        <p style={{ marginBottom: '1.5rem' }}>
                            Stopping reading the news doesn't mean being uninformed or ignorant. It means being intentional with your information consumption, choosing quality over quantity, and taking back control of your time and your mind. Try to disconnect for a week and see how your concentration and mood change. You might be surprised by the results.
                        </p>
                    </>
                )}
            </div>
        </article>
    );
}
