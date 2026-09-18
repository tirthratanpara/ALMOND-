# ALMOND - Premium E-Commerce Platform

A full-stack MERN (MongoDB, Express, React, Node.js) e-commerce web application featuring modern UI aesthetics, dynamic product filtering, shopping cart functionality, user authentication, and RESTful API backend.

---

## 🏗️ Project Architecture

```
ALMOND-/
├── backend/            # Express.js REST API & MongoDB models
│   ├── models/         # Mongoose Schemas (User, Product)
│   ├── .env.example    # Environment variables template
│   ├── seed.js         # Initial database seeding script
│   └── server.js       # API Server entry point
├── frontend/           # React + Vite application
│   ├── src/            # Components, Pages & UI state
│   ├── public/         # Static assets
│   └── vite.config.js  # Vite configuration
├── package.json        # Root workspace configuration
└── README.md
```

---

## ⚡ Getting Started

### Prerequisites
- **Node.js**: v18.x or higher
- **MongoDB Atlas** database account or local MongoDB instance

---

### 1. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend/` directory (refer to `.env.example`):
```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

To seed initial sample products:
```bash
node seed.js
```

Start the backend server:
```bash
# Development mode
npm run dev

# Production mode
npm start
```
The server will run on `http://localhost:5000`.

---

### 2. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The application UI will run at `http://localhost:5173`.

---

## 🚀 Tech Stack

- **Frontend**: React, Vite, CSS Modules / Custom CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB & Mongoose
- **Authentication**: JWT & bcryptjs