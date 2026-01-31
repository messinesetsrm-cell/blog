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
                { label: lang === 'it' ? 'Fedro' : 'Phaedrus' }
            ]} />
            <header className={styles.header}>
                <div style={{ marginBottom: '2rem', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
                    <Image
                        src="/images/bisaccia-fedro.png"
                        alt="La Bisaccia di Fedro"
                        width={800}
                        height={450}
                        style={{ width: '100%', height: 'auto', display: 'block' }}
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
                    {lang === 'it' ? "La Bisaccia di Fedro e la Gravità dell'Ipocrisia" : "Phaedrus' Saddlebag and the Gravity of Hypocrisy"}
                </h1>
                <div className={styles.meta} style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <span>Long-form</span>
                        <span>•</span>
                        <span>{lang === 'it' ? 'Gen 11, 2026' : 'Jan 11, 2026'}</span>
                    </div>
                    <ShareButton
                        title={lang === 'it' ? "La Bisaccia di Fedro" : "Phaedrus' Saddlebag"}
                        text={lang === 'it' ? "Leggi questo articolo interessante da Messinese Salvatore." : "Read this interesting article by Messinese Salvatore."}
                        url="http://localhost:3000/blog/la-bisaccia-di-fedro"
                    />
                </div>
            </header>

            <div className={styles.content} style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'hsl(var(--text-secondary))' }}>
                {lang === 'it' ? (
                    <>
                        <p style={{ marginBottom: '1.5rem' }}>
                            "Questa è una citazione eccellente e senza tempo, tratta dalle Favole di Fedro (libro IV, favola 10), che a sua volta riprende un tema già trattato da Esopo. È una delle metafore più potenti e visive mai scritte sulla natura umana, sull'ipocrisia e sulla mancanza di autocritica."
                        </p>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>Analisi della Metafora: Due Bisacce, Due Visioni</h3>
                        <p style={{ marginBottom: '1rem' }}>
                            L'immagine creata da Fedro è semplice ma geniale nella sua efficacia, una vera e propria architettura della percezione umana stabilita dall'architetto divino, Giove:
                        </p>
                        <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem', listStyle: 'disc' }}>
                            <li style={{ marginBottom: '0.5rem' }}><strong>La bisaccia davanti (sul petto):</strong> Contiene i difetti altrui. Sempre nel nostro campo visivo, non richiede alcuno sforzo. I difetti degli altri ci "sbattono in faccia" costantemente.</li>
                            <li><strong>La bisaccia dietro (sulla schiena):</strong> Contiene i nostri difetti. È il punto cieco per eccellenza. Per vederne il contenuto, dovremmo compiere un movimento innaturale, scomodo, contorcerci per guardare dietro di noi.</li>
                        </ul>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Il significato profondo di questa favola è una constatazione amara ma realistica della psicologia umana: siamo biologicamente predisposti a notare immediatamente gli errori e i vizi di chi ci circonda, mentre l'autocritica rimane una pratica rara e difficile, quasi contro-natura.
                        </p>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>Fedro: Voce Disincantata dall'Antichità</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Gaio Giulio Fedro (ca. 15 a.C. – 50 d.C.) fu uno schiavo trace liberato dall'imperatore Augusto. Questa sua condizione di "outsider" gli permise di sviluppare una prospettiva disincantata sulla società e sui rapporti di potere. Le sue favole, scritte in versi latini, utilizzavano spesso allegorie e animali per mascherare una satira pungente dei vizi umani e delle ingiustizie della Roma imperiale.
                        </p>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>L'Attualità Gravitazionale nell'Era Digitale</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Oggi, la favola di Fedro è più attuale che mai. Nell'era dei social media, la "bisaccia davanti" è diventata uno schermo luminoso su cui scorrono incessantemente gli errori altrui, amplificando la nostra tendenza a giudicare senza mai rivolgere lo sguardo alla nostra "bisaccia posteriore".
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            In psicologia moderna, questo concetto si avvicina al "bias di auto-compiacimento" o "errore fondamentale di attribuzione": la tendenza a giudicare i comportamenti negativi degli altri come frutto del loro carattere, giustificando i nostri stessi difetti come mere conseguenze di circostanze esterne. Siamo chiamati a sfidare questa gravità invisibile, invitandoci a un'analisi più onesta, sia del mondo che di noi stessi.
                        </p>
                    </>
                ) : (
                    <>
                        <p style={{ marginBottom: '1.5rem' }}>
                            "This is an excellent and timeless quote, taken from Phaedrus' Fables (Book IV, Fable 10), which in turn draws upon a theme already treated by Aesop. It is one of the most powerful and visual metaphors ever written on human nature, hypocrisy, and the lack of self-criticism."
                        </p>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>Analysis of the Metaphor: Two Saddlebags, Two Visions</h3>
                        <p style={{ marginBottom: '1rem' }}>
                            The image created by Phaedrus is simple yet brilliant in its efficacy, a veritable architecture of human perception established by the divine architect, Jupiter:
                        </p>
                        <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem', listStyle: 'disc' }}>
                            <li style={{ marginBottom: '0.5rem' }}><strong>The front saddlebag (on the chest):</strong> Contains the faults of others. Always in our field of vision, requiring no effort. Others' faults constantly "hit us in the face".</li>
                            <li><strong>The back saddlebag (on the back):</strong> Contains our own faults. It is the blind spot par excellence. To see its contents, we would have to perform an unnatural, uncomfortable movement, twisting ourselves to look behind us.</li>
                        </ul>
                        <p style={{ marginBottom: '1.5rem' }}>
                            The profound meaning of this fable is a bitter but realistic observation of human psychology: we are biologically predisposed to immediately notice the errors and vices of those around us, while self-criticism remains a rare and difficult practice, almost against nature.
                        </p>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>Phaedrus: A Disenchanted Voice from Antiquity</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Gaius Julius Phaedrus (c. 15 BC – 50 AD) was a Thracian slave freed by Emperor Augustus. His status as an "outsider" allowed him to develop a disenchanted perspective on society and power dynamics. His fables, written in Latin verse, often used allegories and animals to mask a biting satire of human vices and the injustices of Imperial Rome.
                        </p>

                        <h3 className={styles.sectionTitle} style={{ marginTop: '3rem' }}>Gravitational Relevance in the Digital Age</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Today, Phaedrus' fable is more relevant than ever. In the era of social media, the "front saddlebag" has become a luminous screen where others' errors scroll incessantly, amplifying our tendency to judge without ever turning our gaze to our "back saddlebag".
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            In modern psychology, this concept approaches the "self-serving bias" or "fundamental attribution error": the tendency to judge others' negative behaviors as a result of their character, while justifying our own faults as mere consequences of external circumstances. We are called to challenge this invisible gravity, inviting us to a more honest analysis, both of the world and of ourselves.
                        </p>
                    </>
                )}
            </div>
        </article>
    );
}
