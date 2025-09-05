# Medical Job Portal

A complete full-stack Medical Job Portal application built with React, TypeScript, Node.js, and MySQL.

## Features

### For Job Seekers
- Browse and search medical job opportunities
- Apply for jobs with cover letters
- Track application status
- Save favorite jobs
- Professional dashboard

### For Hospitals/Employers
- Post and manage job listings
- View and manage applications
- Analytics dashboard
- Subscription-based features

### Public Pages
- Homepage with company information
- Browse jobs (public access)
- About page
- Contact and help sections

## Technology Stack

- **Frontend**: React 18 with TypeScript
- **Backend**: Pure Node.js (no Express)
- **Database**: MySQL
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Authentication**: JWT with bcrypt

## Project Structure

```
├── server/
│   ├── config/
│   │   └── database.js          # MySQL connection setup
│   ├── controllers/
│   │   ├── authController.js    # Authentication logic
│   │   ├── jobController.js     # Job management
│   │   └── applicationController.js # Application handling
│   ├── middleware/
│   │   └── auth.js              # Authentication middleware
│   └── server.js                # Main server file
├── src/
│   ├── components/
│   │   ├── auth/                # Login/Signup components
│   │   ├── common/              # Header, Footer
│   │   ├── dashboard/           # Hospital & Job Seeker dashboards
│   │   └── pages/               # Public pages
│   ├── contexts/
│   │   └── AuthContext.tsx     # Global authentication state
│   ├── utils/
│   │   └── api.ts              # API utility functions
│   └── App.tsx                 # Main application component
```

## Database Schema

The application uses the following MySQL tables:

- **users**: Store user accounts (hospitals and job seekers)
- **jobs**: Job postings by hospitals
- **applications**: Job applications by seekers
- **subscriptions**: Subscription plans for users
- **saved_jobs**: Saved jobs by job seekers

## Setup Instructions

1. **Database Configuration**
   - Update `server/config/database.js` with your MySQL credentials:
   ```javascript
   const dbConfig = {
     host: 'your-mysql-host',
     user: 'your-mysql-username', 
     password: 'your-mysql-password',
     database: 'your-database-name'
   };
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start the Application**
   ```bash
   npm start
   ```
   This will start both the backend server (port 3001) and frontend development server (port 5173).

4. **Alternative: Start Separately**
   ```bash
   # Terminal 1: Start backend
   npm run server
   
   # Terminal 2: Start frontend  
   npm run dev
   ```

## API Endpoints

### Authentication
- `POST /api/auth/signup` - User registration
- `POST /api/auth/login` - User login

### Jobs
- `GET /api/jobs` - Get all jobs (with search)
- `POST /api/jobs` - Create job (hospital only)
- `GET /api/jobs/my` - Get hospital's jobs
- `GET /api/jobs/:id` - Get job details

### Applications  
- `POST /api/applications` - Apply for job
- `GET /api/applications/my` - Get user's applications
- `GET /api/jobs/:id/applications` - Get job applications (hospital)
- `PUT /api/applications/:id` - Update application status

## Authentication

The application uses JWT tokens for authentication:
- Tokens are stored in localStorage
- Protected routes require valid authentication
- Role-based access control for hospital vs job seeker features

## Environment Variables

No environment variables are required for basic setup. Update the database configuration directly in the code files.

## Production Deployment

1. Build the frontend:
   ```bash
   npm run build
   ```

2. Configure database credentials for production
3. Deploy the built files and Node.js server
4. Ensure MySQL database is accessible

## Security Notes

- Change JWT secret key in production (`server/middleware/auth.js`)
- Use environment variables for sensitive configuration in production
- Implement rate limiting and additional security measures as needed
- Ensure database connection uses SSL in production

## Contributing

This is a complete full-stack application ready for customization and extension. Key areas for enhancement:

- Email notifications
- File upload for resumes
- Advanced search filters  
- Payment integration for subscriptions
- Real-time notifications
- Admin panel