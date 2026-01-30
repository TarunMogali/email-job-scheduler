export type ScheduledEmail = {
  id: string;
  to: string;
  subject: string;
  scheduledAt: string;
  status: 'scheduled' | 'pending';
};

export type SentEmail = {
  id: string;
  to: string;
  subject: string;
  sentAt: string;
  status: 'sent' | 'failed';
};

export type InboxEmail = {
  id: string;
  from: string;
  fromEmail: string;
  subject: string;
  body: string;
  receivedAt: string;
  read: boolean;
};

const inboxEmails: InboxEmail[] = [
    {
        id: 'inbox1',
        from: 'Jane Doe',
        fromEmail: 'jane.doe@example.com',
        subject: 'Re: Project Update',
        body: 'Thanks for the update! Looks great.',
        receivedAt: '2024-08-15T14:30:00Z',
        read: true,
    },
    {
        id: 'inbox2',
        from: 'Another Company',
        fromEmail: 'contact@anothercompany.com',
        subject: 'Your recent inquiry',
        body: 'We have received your inquiry and will get back to you shortly.',
        receivedAt: '2024-08-15T12:00:00Z',
        read: false,
    },
    {
        id: 'inbox3',
        from: 'Internal System',
        fromEmail: 'noreply@outbox.com',
        subject: 'Your campaign has been scheduled',
        body: 'Your email campaign "Follow up" has been scheduled to start on August 16th.',
        receivedAt: '2024-08-15T09:15:00Z',
        read: true,
    },
     {
        id: 'inbox4',
        from: 'Support Team',
        fromEmail: 'support@outbox.com',
        subject: 'Welcome to Outbox!',
        body: 'Welcome! We are happy to have you on board.',
        receivedAt: '2024-08-14T10:00:00Z',
        read: false,
    },
    {
        id: 'inbox5',
        from: 'Marketing Weekly',
        fromEmail: 'newsletter@marketing.com',
        subject: 'This week\'s top marketing tips',
        body: 'Check out the latest trends in digital marketing.',
        receivedAt: '2024-08-13T18:00:00Z',
        read: true,
    },
];

const scheduledEmails: ScheduledEmail[] = [
  {
    id: '1',
    to: 'lead1@example.com',
    subject: 'Follow up on our previous conversation',
    scheduledAt: '2024-08-15T10:00:00Z',
    status: 'scheduled',
  },
  {
    id: '2',
    to: 'prospect2@example.com',
    subject: 'Quick question about your needs',
    scheduledAt: '2024-08-15T11:30:00Z',
    status: 'scheduled',
  },
  {
    id: '3',
    to: 'contact3@example.com',
    subject: 'Introduction from ReachInbox',
    scheduledAt: '2024-08-16T09:00:00Z',
    status: 'pending',
  },
    {
    id: '4',
    to: 'new-lead@example.com',
    subject: 'Your AI-powered growth partner',
    scheduledAt: '2024-08-17T14:00:00Z',
    status: 'scheduled',
  },
  {
    id: '5',
    to: 'potential-client@example.com',
    subject: 'Re: Your request for a demo',
    scheduledAt: '2024-08-18T16:00:00Z',
    status: 'scheduled',
  },
];

const sentEmails: SentEmail[] = [
  {
    id: 's1',
    to: 'client1@example.com',
    subject: 'Meeting Confirmation',
    sentAt: '2024-08-14T15:23:00Z',
    status: 'sent',
  },
  {
    id: 's2',
    to: 'partner2@example.com',
    subject: 'Partnership Proposal',
    sentAt: '2024-08-14T12:10:00Z',
    status: 'sent',
  },
  {
    id: 's3',
    to: 'invalid-email@example.com',
    subject: 'Important Update',
    sentAt: '2024-08-13T18:05:00Z',
    status: 'failed',
  },
  {
    id: 's4',
    to: 'subscriber4@example.com',
    subject: 'Your weekly newsletter',
    sentAt: '2024-08-12T08:00:00Z',
    status: 'sent',
  },
    {
    id: 's5',
    to: 'customer5@example.com',
    subject: 'Thank you for your purchase!',
    sentAt: '2024-08-11T20:45:00Z',
    status: 'sent',
  },
];

export const getInboxEmails = async (): Promise<InboxEmail[]> => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return inboxEmails.sort((a, b) => new Date(b.receivedAt).getTime() - new Date(a.receivedAt).getTime());
};

export const getScheduledEmails = async (): Promise<ScheduledEmail[]> => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return scheduledEmails;
};

export const getSentEmails = async (): Promise<SentEmail[]> => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return sentEmails;
};
