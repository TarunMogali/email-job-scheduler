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
import type { InboxEmail } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Inbox } from 'lucide-react';
import { format, parseISO } from 'date-fns';
import { cn } from '@/lib/utils';

export function InboxClient({ emails }: { emails: InboxEmail[] }) {
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
                    <CardTitle>Inbox</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {[...Array(5)].map((_, i) => (
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
        <Inbox className="w-16 h-16 text-muted-foreground mb-4" />
        <h3 className="text-xl font-semibold">Your Inbox is Empty</h3>
        <p className="text-muted-foreground">
          No new messages.
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
              <TableHead className="w-[200px]">From</TableHead>
              <TableHead>Subject</TableHead>
              <TableHead className="hidden text-right md:table-cell w-[180px]">Received</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {emails.map((email) => (
              <TableRow key={email.id} className={cn(!email.read && "font-bold", "cursor-pointer")}>
                <TableCell>
                    <div className="flex items-center gap-3">
                        {!email.read && <span className="flex h-2 w-2 rounded-full bg-primary" />}
                        <span className="truncate">{email.from}</span>
                    </div>
                </TableCell>
                <TableCell className="truncate">{email.subject}</TableCell>
                <TableCell className="hidden text-right text-muted-foreground md:table-cell">
                  {format(parseISO(email.receivedAt), "MMM d, yyyy")}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
