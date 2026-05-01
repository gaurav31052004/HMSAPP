# 📦 Submission

- **Live URL**: *(Update this once deployed on Render)*
- **GitHub repo**: https://github.com/gaurav31052004/HMSAPP

---

# Hospital Management System (MERN)

A full-stack hospital management system built with MongoDB, Express, React, and Node.js.

## Features

- Dashboard with live hospital stats
- Patient registration and status tracking
- Doctor directory management
- Appointment scheduling
- Billing and payment status management
- MongoDB seed script with sample data

## Project Structure

```text
hospital-management-system/
├── client/   # React + Vite frontend
├── server/   # Express + MongoDB backend
└── package.json
```

## Setup

1. Install dependencies:

```bash
npm run install:all
```

2. Create a backend environment file:

```bash
copy server\.env.example server\.env
```

3. Start MongoDB locally (or provide a remote MongoDB URI in your `.env`) and seed sample data:

```bash
npm --workspace server run seed
```

4. Start the backend:

```bash
npm run dev:server
```

5. Start the frontend in another terminal:

```bash
npm run dev:client
```

## API Endpoints

- `GET /api/dashboard`
- `GET/POST /api/patients`
- `GET/POST /api/doctors`
- `GET/POST /api/appointments`
- `GET/POST /api/bills`

## Notes

- Frontend expects backend at `http://localhost:5000/api` by default.
- Default Vite frontend runs on `http://localhost:5173`.
- Update the `VITE_API_URL` environment variable if your backend URL changes in production.
