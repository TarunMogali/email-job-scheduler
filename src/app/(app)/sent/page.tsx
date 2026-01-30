import { getSentEmails } from '@/lib/data';
import { SentEmailsClient } from './sent-emails-client';

export default async function SentPage() {
    const emails = await getSentEmails();
    
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold tracking-tight">Sent Emails</h1>
                <p className="text-muted-foreground">
                    A log of all emails that have been sent or have failed.
                </p>
            </div>
            <SentEmailsClient emails={emails} />
        </div>
    );
}
