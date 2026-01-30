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
