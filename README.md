PROJECT: Email Job Scheduler

REQUIRED DOWNLOADS:
- Node.js (v18 or higher)
- Redis
- Database (MongoDB / PostgreSQL / MySQL)
- Git
- Web Browser (Chrome / Edge / Firefox)

BACKEND SETUP (Express + Redis + DB + BullMQ):
1. Start Redis:
   redis-server
2. Go to backend folder and install dependencies:
   cd backend
   npm install
3. Create backend/.env file:
   PORT=5000
   REDIS_HOST=127.0.0.1
   REDIS_PORT=6379
   DB_URL=your_database_connection_string
   ETHEREAL_EMAIL=your_ethereal_email
   ETHEREAL_PASSWORD=your_ethereal_password
4. Start backend server:
   npm run dev
5. Start BullMQ worker (new terminal):
   npm run worker

FRONTEND SETUP (React):
1. Go to frontend folder and install dependencies:
   cd frontend
   npm install
2. Create frontend/.env file:
   REACT_APP_API_BASE_URL=http://localhost:5000
3. Start frontend:
   npm start
4. Open browser:
   http://localhost:3000

ETHEREAL EMAIL SETUP:
- Go to https://ethereal.email
- Create a test account
- Copy email and password
- Add them to backend .env
- Email preview links appear in backend logs

ARCHITECTURE OVERVIEW:
Frontend (React)
→ Backend API (Express)
→ Database (email metadata & users)
→ BullMQ Queue (Redis)
→ Worker
→ Email Service (Nodemailer + Ethereal)

SCHEDULING:
- Emails are scheduled using BullMQ delayed jobs
- Delay is calculated from scheduled time
- Jobs execute automatically when delay expires

PERSISTENCE ON RESTART:
- Jobs are stored in Redis
- Email data is stored in database
- Jobs resume automatically after server/worker restart

RATE LIMITING & CONCURRENCY:
- Rate limiting implemented using BullMQ limiter
- Controls number of emails per time window
- Worker concurrency limits parallel job execution

FEATURES IMPLEMENTED:

BACKEND:
- Email scheduling (BullMQ)
- Persistence (Redis + Database)
- Rate limiting
- Concurrency control
- Email sending (Nodemailer + Ethereal)
- Job status tracking (Pending / Sent / Failed)

FRONTEND:
- Login
- Dashboard
- Compose email
- Email list tables
- Status tracking (Pending / Sent / Failed)
- Clean UI
