# Library Management System (MERN Stack)

## Project Overview
This is a Library Management System developed using the MERN stack.
The project covers core library operations such as book management,
issue and return of books, and fine calculation.

The frontend is built using React with role-based login (Admin/User),
and the backend is built using Node.js, Express, and MongoDB.

## Technology Stack
- Frontend: React.js
- Backend: Node.js, Express.js
- Database: MongoDB
- API Testing: Postman

## Features Implemented
- Role selection (Admin / User)
- Admin Login and User Login
- Add Book (Admin)
- View Books
- Issue Book
- Return Book with fine calculation
- Logout functionality

## Dummy Login Credentials
### Admin
- User ID: adm
- Password: adm

### User
- User ID: user
- Password: user

## API Endpoints
- POST /api/books/add
- GET /api/books/all
- POST /api/issues/issue
- POST /api/issues/return/:id

## How to Run the Project
### Backend
cd backend  
node server.js  

### Frontend
cd frontend
npm install
npm start 

## Note
This project focuses on core transaction workflows.
Advanced features like authentication, membership management,
and reports can be added as future enhancements.
