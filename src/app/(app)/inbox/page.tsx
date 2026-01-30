import { getInboxEmails } from '@/lib/data';
import { InboxClient } from './inbox-client';

export default async function InboxPage() {
    const emails = await getInboxEmails();
    
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold tracking-tight">Inbox</h1>
                <p className="text-muted-foreground">
                    You have {emails.filter(e => !e.read).length} unread messages.
                </p>
            </div>
            <InboxClient emails={emails} />
        </div>
    );
}
