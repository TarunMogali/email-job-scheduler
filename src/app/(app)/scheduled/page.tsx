import { getScheduledEmails } from '@/lib/data';
import { ScheduledEmailsClient } from './scheduled-emails-client';

export default async function ScheduledPage() {
    const emails = await getScheduledEmails();
    
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold tracking-tight">Scheduled Emails</h1>
                <p className="text-muted-foreground">
                    Here are the emails that are scheduled to be sent.
                </p>
            </div>
            <ScheduledEmailsClient emails={emails} />
        </div>
    );
}
