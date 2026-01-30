# **App Name**: Outbox

## Core Features:

- Email Scheduling: Accepts email send requests via API and schedules them to be sent at a specific time.
- Job Queue Management: Uses BullMQ and Redis as a persistent job scheduler to manage email sending tasks.
- Email Sending via Ethereal Email: Sends emails using Ethereal Email's fake SMTP server for testing purposes.
- Persistence and Reliability: Ensures that scheduled emails are not lost during server restarts and prevents duplicate sending.
- Frontend Dashboard: Provides a user interface to schedule new emails, view scheduled emails, and view sent emails.
- User Authentication: Implements Google OAuth login to authenticate users and manage access to the dashboard.
- Rate Limiting and Concurrency: Manages email throughput by implementing rate limiting and concurrency controls to mimic real-world email system behavior under load.

## Style Guidelines:

- Primary color: A vibrant blue (#29ABE2) reflecting reliability and innovation.
- Background color: A light gray (#F5F7FA), desaturated from the primary hue, ensuring a clean and professional look.
- Accent color: A complementary orange (#F2994A) to highlight key actions and information, creating visual interest and a sense of urgency.
- Body and headline font: 'Inter', a grotesque-style sans-serif, for a modern, machined, objective, neutral look, suitable for both headlines and body text.
- Use clear and consistent icons to represent email status and actions.
- Follow the layout and styling of the provided Figma design to create a clean and intuitive user experience.
- Implement subtle loading animations and transitions to enhance the user experience.