'use client';

import * as React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import type { ScheduledEmail } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileClock } from 'lucide-react';
import { format, parseISO } from 'date-fns';

export function ScheduledEmailsClient({ emails }: { emails: ScheduledEmail[] }) {
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        // Simulate initial loading. In a real app, this would be tied to data fetching state.
        const timer = setTimeout(() => setIsLoading(false), 300);
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return (
            <Card>
                <CardHeader>
                    <CardTitle>Scheduled Emails</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {[...Array(3)].map((_, i) => (
                            <div key={i} className="flex items-center space-x-4">
                                <div className="h-10 w-full rounded-md bg-muted animate-pulse" />
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        );
    }
    
  if (emails.length === 0) {
    return (
      <Card className="flex flex-col items-center justify-center py-20">
        <FileClock className="w-16 h-16 text-muted-foreground mb-4" />
        <h3 className="text-xl font-semibold">No Scheduled Emails</h3>
        <p className="text-muted-foreground">
          Compose a new email to get started.
        </p>
      </Card>
    );
  }

  return (
    <Card>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>To</TableHead>
              <TableHead>Subject</TableHead>
              <TableHead className="hidden md:table-cell">Scheduled At</TableHead>
              <TableHead className="text-right">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {emails.map((email) => (
              <TableRow key={email.id}>
                <TableCell className="font-medium">{email.to}</TableCell>
                <TableCell>{email.subject}</TableCell>
                <TableCell className="hidden md:table-cell">
                  {format(parseISO(email.scheduledAt), "MMM d, yyyy 'at' h:mm a")}
                </TableCell>
                <TableCell className="text-right">
                  <Badge variant={email.status === 'scheduled' ? 'secondary' : 'default'}>
                    {email.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
