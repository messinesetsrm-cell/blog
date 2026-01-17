import React from 'react';
import styles from './terms.module.css';

export default function TermsOfService() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Termini di Servizio</h1>

            <div className={styles.content}>
                <section className={`${styles.section} glass`}>
                    <h2>1. Accettazione dei Termini</h2>
                    <p>
                        Accedendo e utilizzando questo sito web, accetti di essere vincolato dai presenti Termini di Servizio e da tutte le leggi e i regolamenti applicabili. Se non accetti uno di questi termini, ti è vietato l'uso o l'accesso a questo sito.
                    </p>
                </section>

                <section className={`${styles.section} glass`}>
                    <h2>2. Licenza d'Uso</h2>
                    <p>
                        Il contenuto di questo sito (testi, immagini, video) è di proprietà di Messinese Salvatore, salvo dove diversamente indicato. È permesso visualizzare e scaricare temporaneamente una copia dei materiali per uso personale e non commerciale.
                    </p>
                    <p>
                        Questa è la concessione di una licenza, non un trasferimento di titolo, e sotto questa licenza non è possibile:
                    </p>
                    <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                        <li>Modificare o copiare i materiali per scopi commerciali.</li>
                        <li>Rimuovere qualsiasi copyright o altre annotazioni proprietarie dai materiali.</li>
                    </ul>
                </section>

                <section className={`${styles.section} glass`}>
                    <h2>3. Esclusione di Responsabilità</h2>
                    <p>
                        I materiali su questo sito sono forniti "così come sono". Messinese Salvatore non fornisce alcuna garanzia, espressa o implicita, e con la presente declina e nega tutte le altre garanzie, incluse, senza limitazioni, garanzie implicite di commerciabilità o idoneità per un particolare scopo.
                    </p>
                    <p>
                        In particolare, i dati di mercato visualizzati nella sezione "Market" sono forniti da terze parti (TradingView) e non costituiscono in alcun modo consulenza finanziaria.
                    </p>
                </section>

                <section className={`${styles.section} glass`}>
                    <h2>4. Limitazioni</h2>
                    <p>
                        In nessun caso Messinese Salvatore o i suoi fornitori saranno responsabili per eventuali danni (inclusi, senza limitazioni, danni per perdita di dati o profitti, o per interruzione dell'attività) derivanti dall'uso o dall'impossibilità di usare i materiali presenti sul sito.
                    </p>
                </section>

                <section className={`${styles.section} glass`}>
                    <h2>5. Legge Applicabile</h2>
                    <p>
                        Qualsiasi reclamo relativo al sito sarà regolato dalle leggi dello Stato Italiano senza riguardo alle sue disposizioni in materia di conflitto di leggi.
                    </p>
                </section>

                <p style={{ textAlign: 'center', fontSize: '0.8rem', color: 'hsl(var(--text-secondary))', marginTop: '2rem' }}>
                    Ultimo aggiornamento: 17 Gennaio 2026
                </p>
            </div>
        </div>
    );
}
