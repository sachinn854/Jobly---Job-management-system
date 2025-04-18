# Jobly - Job Search and Application Platform

## Overview
Jobly is a full-stack web application that serves as a job search and application platform. It allows users to browse companies, view job listings, and apply for positions. The platform includes user authentication, company and job search functionality, and a user profile management system.

## Features
- **User Authentication**
  - Secure signup and login system
  - JWT-based authentication
  - User profile management

- **Company Features**
  - Browse all companies
  - Search companies by name
  - View detailed company information
  - See available jobs at each company

- **Job Features**
  - Browse all available jobs
  - Search jobs by title
  - View job details including salary and equity
  - Apply for jobs with one click

- **User Dashboard**
  - View applied jobs
  - Update profile information
  - Track application status

## Tech Stack
- **Frontend**
  - React.js
  - React Bootstrap
  - React Router
  - Axios for API calls

- **Backend**
  - Node.js
  - Express.js
  - PostgreSQL database
  - JWT for authentication

## Database Schema
The application uses the following main tables:
- `users` - Stores user information and credentials
- `companies` - Contains company details
- `jobs` - Stores job listings
- `applications` - Tracks job applications

## Getting Started
1. Clone the repository
2. Install dependencies for both frontend and backend
3. Set up PostgreSQL database
4. Configure environment variables
5. Start the development servers

## Project Structure
```
jobly/
├── jobly-frontend/     # React frontend application
│   ├── public/         # Static files
│   └── src/            # React components and logic
│
└── jobly-backend/      # Node.js/Express backend
    ├── models/         # Database models
    ├── routes/         # API routes
    ├── schemas/        # JSON schemas
    └── middleware/     # Express middleware
```

## Security Features
- Password hashing using bcrypt
- JWT token-based authentication
- Protected API routes
- Input validation and sanitization

## Future Enhancements
- Email notifications for application status
- Advanced search filters
- Company reviews and ratings
- Job application tracking system
- Admin dashboard for company management

## Contributing
Feel free to contribute to this project by submitting pull requests or opening issues for bugs and feature requests.

## License
This project is open source and available under the MIT License. 