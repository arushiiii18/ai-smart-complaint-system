# AI Smart Complaint Management System

An AI-powered MERN Stack application that enables users to register and track complaints online. The system integrates OpenRouter AI to analyze complaints, determine urgency, recommend the responsible department, summarize complaints, and generate automated responses.

---

## Features

### Authentication

- User Signup
- User Login
- JWT Authentication
- bcrypt Password Encryption
- Protected Complaint Registration API

---

### Complaint Management

- Register Complaint
- View All Complaints
- Search by Location
- Update Complaint Status
- Delete Complaint
- MongoDB Storage

---

### AI Integration

The application integrates OpenRouter AI to:

- Detect Complaint Priority
- Recommend Concerned Department
- Generate Complaint Summary
- Generate Automated User Response

---

## Tech Stack

### Frontend

- React (Vite)
- React Router DOM
- Axios
- CSS

### Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT
- bcrypt
- OpenRouter AI API

---

## Folder Structure

```
frontend/
backend/
```

Backend

```
controllers/
middleware/
models/
routes/
server.js
```

Frontend

```
src/
services/
App.jsx
main.jsx
```

---

## API Endpoints

### Authentication

```
POST /api/auth/signup

POST /api/auth/login
```

### Complaints

```
POST /api/complaints

GET /api/complaints

PUT /api/complaints/:id

DELETE /api/complaints/:id

GET /api/complaints/search/location?location=Delhi
```

### AI

```
POST /api/ai/analyze
```

---

## Installation

### Backend

```bash
cd backend

npm install

npm run dev
```

### Frontend

```bash
cd frontend

npm install

npm run dev
```

---

## Environment Variables

Backend

```
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

OPENROUTER_API_KEY=your_api_key
```

Frontend

```
VITE_API_URL=http://localhost:5000/api
```

---

## Future Enhancements

- Complaint Categories Dashboard
- Email Notifications
- Admin Panel
- Image Uploads
- Complaint Analytics
- Role-based Access Control

---
