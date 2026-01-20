import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    if (!process.env.RESEND_API_KEY) {
        console.error('RESEND_API_KEY is missing');
        return NextResponse.json({ error: 'Configurazione server incompleta (API Key mancante)' }, { status: 500 });
    }

    try {
        const { name, type, suggestion } = await request.json();

        const { data, error } = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: ['messinesetsrm@gmail.com'],
            subject: `Nuovo Suggerimento: ${type}`,
            html: `
                <h2>Nuovo Suggerimento Ricevuto</h2>
                <p><strong>Nome:</strong> ${name}</p>
                <p><strong>Tipo:</strong> ${type}</p>
                <p><strong>Suggerimento:</strong></p>
                <div style="padding: 15px; background: #f5f5f5; border-radius: 8px;">
                    ${suggestion}
                </div>
            `,
        });

        if (error) {
            console.error('Errore Resend:', error);
            return NextResponse.json({ error: error.message || 'Errore durante l\'invio' }, { status: 500 });
        }

        return NextResponse.json({ success: true, data });
    } catch (err: any) {
        console.error('Eccezione API:', err);
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
