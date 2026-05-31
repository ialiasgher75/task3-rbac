# Task 3 - Role Based Access Control (RBAC)

A role-based access control system built with Node.js, Express, and MongoDB.

## Tech Stack
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT (jsonwebtoken)
- bcryptjs

## Roles
| Role | Permissions |
|------|-------------|
| Admin | All routes access |
| Moderator | Reports + Profile access |
| User | Profile access only |

## API Endpoints

| Method | Endpoint | Description | Allowed Roles |
|--------|----------|-------------|---------------|
| POST | /auth/register | Register user | All |
| POST | /auth/login | Login user | All |
| GET | /admin/dashboard | Admin dashboard | Admin only |
| GET | /admin/reports | View reports | Admin, Moderator |
| GET | /admin/profile | View profile | All roles |

## Setup

1. Clone the repository
   git clone https://github.com/ialiasgher75/task3-rbac.git

2. Install dependencies
   npm install

3. Create .env file
   PORT=5002
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret

4. Run the server
   npm run dev
