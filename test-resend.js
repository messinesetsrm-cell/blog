const { Resend } = require('resend');
require('dotenv').config({ path: '.env.local' });

const apiKey = process.env.RESEND_API_KEY;

if (!apiKey) {
    console.error('❌ Errore: RESEND_API_KEY non trovata nel file .env.local');
    process.exit(1);
}

console.log('--- Test Resend API ---');
console.log('Chiave trovata (prime 5 cifre):', apiKey.substring(0, 5) + '...');

const resend = new Resend(apiKey);

async function testEmail() {
    console.log('Tentativo di invio email di test...');
    try {
        const { data, error } = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'messinesetsrm@gmail.com',
            subject: 'Test Antigravity Configurazione',
            html: '<p>Se ricevi questa email, la configurazione Resend è corretta!</p>',
        });

        if (error) {
            console.error('❌ Errore da Resend:', error);
        } else {
            console.log('✅ Email inviata con successo! ID:', data.id);
        }
    } catch (err) {
        console.error('❌ Eccezione durante il test:', err.message);
    }
}

testEmail();
