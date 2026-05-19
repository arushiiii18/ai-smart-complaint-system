# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# AI Smart Complaint Management System

## Features
- User Signup & Login
- JWT Authentication
- Complaint Registration
- Complaint Tracking
- Complaint Status Update
- Complaint Delete
- Search by Location
- Filter by Category
- AI Complaint Analysis
- MongoDB Atlas Integration
- MERN Stack Application

## Tech Stack
- React.js
- Node.js
- Express.js
- MongoDB Atlas
- OpenRouter AI API

## Backend APIs
- POST /api/auth/signup
- POST /api/auth/login
- POST /api/complaints
- GET /api/complaints
- PUT /api/complaints/:id
- DELETE /api/complaints/:id
- GET /api/complaints/search/location
- POST /api/ai/analyze

## Deployment
- Frontend: Render
- Backend: Render
- Database: MongoDB Atlas