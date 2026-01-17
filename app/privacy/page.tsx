import React from 'react';
import styles from './privacy.module.css';

export default function PrivacyPolicy() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Privacy Policy</h1>

            <div className={styles.content}>
                <section className={`${styles.section} glass`}>
                    <h2>1. Informazioni Generali</h2>
                    <p>
                        La presente Privacy Policy descrive come raccogliamo, utilizziamo e proteggiamo i tuoi dati personali quando visiti il sito "Antigravity" di Messinese Salvatore.
                    </p>
                </section>

                <section className={`${styles.section} glass`}>
                    <h2>2. Cookie di Google AdSense</h2>
                    <p>
                        Questo sito utilizza Google AdSense per la visualizzazione di annunci pubblicitari. Google utilizza i cookie per pubblicare annunci basati sulle tue precedenti visite a questo o ad altri siti web.
                    </p>
                    <p>
                        L'utilizzo dei cookie per la pubblicità da parte di Google consente a Google e ai suoi partner di pubblicare annunci per i tuoi utenti in base alla loro visita ai tuoi siti e/o ad altri siti su Internet.
                    </p>
                    <p>
                        Puoi scegliere di disattivare la pubblicità personalizzata visitando le <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">Impostazioni annunci di Google</a>.
                    </p>
                </section>

                <section className={`${styles.section} glass`}>
                    <h2>3. Dati Raccolti</h2>
                    <p>
                        Raccogliamo informazioni in vari modi:
                    </p>
                    <ul>
                        <li><strong>Dati di navigazione:</strong> Indirizzi IP, tipo di browser, provider di servizi Internet (ISP), pagine di riferimento/uscita, tipo di piattaforma, timbro data/ora e numero di clic per analizzare le tendenze e amministrare il sito.</li>
                        <li><strong>Dati forniti volontariamente:</strong> Informazioni inviate tramite il modulo di suggerimento ("Suggest") o iscrizioni future.</li>
                    </ul>
                </section>

                <section className={`${styles.section} glass`}>
                    <h2>4. Finalità del Trattamento</h2>
                    <p>
                        I dati vengono utilizzati per:
                    </p>
                    <ul>
                        <li>Migliorare l'esperienza dell'utente sul sito.</li>
                        <li>Analizzare il traffico e il comportamento degli utenti.</li>
                        <li>Visualizzare annunci pubblicitari pertinenti tramite partner terzi come Google.</li>
                    </ul>
                </section>

                <section className={`${styles.section} glass`}>
                    <h2>5. Contatti</h2>
                    <p>
                        Per qualsiasi domanda riguardante questa Privacy Policy, puoi contattarmi tramite il modulo di suggerimento presente sul sito.
                    </p>
                </section>

                <p style={{ textAlign: 'center', fontSize: '0.8rem', color: 'hsl(var(--text-secondary))', marginTop: '2rem' }}>
                    Ultimo aggiornamento: 17 Gennaio 2026
                </p>
            </div>
        </div>
    );
}
