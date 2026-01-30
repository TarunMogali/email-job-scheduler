'use client';

import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useToast } from '@/hooks/use-toast';
import { FileUp, Clock } from 'lucide-react';

const formSchema = z.object({
  subject: z.string().min(1, 'Subject is required'),
  body: z.string().min(1, 'Body is required'),
  leadsFile: z.any().refine((files) => files?.length > 0, 'Leads file is required.'),
  startTime: z.string().min(1, 'Start time is required'),
  delay: z.coerce.number().min(1, 'Delay must be at least 1 second'),
  hourlyLimit: z.coerce.number().min(1, 'Hourly limit must be at least 1'),
});

type FormData = z.infer<typeof formSchema>;

export function ComposeDialog({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [detectedEmails, setDetectedEmails] = useState(0);
  const { toast } = useToast();

  const {
    control,
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        subject: '',
        body: '',
        startTime: new Date(Date.now() + 60000).toISOString().substring(0, 16),
        delay: 2,
        hourlyLimit: 200,
    }
  });

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const text = await file.text();
      const emails = text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi);
      setDetectedEmails(emails?.length || 0);
    }
  };
  
  const onSubmit = (data: FormData) => {
    console.log('Scheduled email data:', data);
    toast({
      title: 'Emails Scheduled!',
      description: `Your campaign with ${detectedEmails} emails has been scheduled successfully.`,
    });
    setOpen(false);
    reset();
    setDetectedEmails(0);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-2xl">
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogHeader>
            <DialogTitle>Compose New Email Campaign</DialogTitle>
            <DialogDescription>
              Fill out the details below to schedule a new email campaign.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-6 py-6">
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" {...register('subject')} placeholder="Your email subject" />
              {errors.subject && <p className="text-sm text-destructive">{errors.subject.message}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="body">Body</Label>
              <Textarea id="body" {...register('body')} placeholder="Write your email content here..." className="min-h-[150px]" />
              {errors.body && <p className="text-sm text-destructive">{errors.body.message}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="leadsFile">Leads (CSV/text file)</Label>
              <div className="relative">
                <Input id="leadsFile" type="file" accept=".csv,.txt" {...register('leadsFile', { onChange: handleFileChange })} className="pl-12"/>
                <FileUp className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              </div>
              {detectedEmails > 0 && (
                <p className="text-sm text-muted-foreground">{detectedEmails} email addresses detected.</p>
              )}
              {errors.leadsFile && <p className="text-sm text-destructive">{errors.leadsFile.message?.toString()}</p>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="startTime">Start Time</Label>
                    <div className="relative">
                        <Input id="startTime" type="datetime-local" {...register('startTime')} className="pl-10"/>
                        <Clock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    </div>
                     {errors.startTime && <p className="text-sm text-destructive">{errors.startTime.message}</p>}
                </div>
                <div className="space-y-2">
                    <Label htmlFor="delay">Delay (seconds)</Label>
                    <Input id="delay" type="number" {...register('delay')} placeholder="e.g., 2"/>
                    {errors.delay && <p className="text-sm text-destructive">{errors.delay.message}</p>}
                </div>
                <div className="space-y-2">
                    <Label htmlFor="hourlyLimit">Hourly Limit</Label>
                    <Input id="hourlyLimit" type="number" {...register('hourlyLimit')} placeholder="e.g., 200"/>
                    {errors.hourlyLimit && <p className="text-sm text-destructive">{errors.hourlyLimit.message}</p>}
                </div>
            </div>
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
            <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Scheduling...' : 'Schedule Campaign'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
