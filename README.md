<div align="center">
  <img src="./frontend/src/assets/whop-logo.svg" alt="NowTalk Logo" width="120" height="120">
  
  # 💬 NowTalk
  
  <p align="center">
    <strong>Real-time chat application for seamless communication</strong>
  </p>
  
  <p align="center">
    Connect, chat, and collaborate in real-time with a modern, intuitive interface
  </p>

  <p align="center">
    <img src="https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" />
    <img src="https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Node.js-Latest-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
    <img src="https://img.shields.io/badge/Socket.io-4.8.3-010101?style=for-the-badge&logo=socket.io&logoColor=white" alt="Socket.io" />
    <img src="https://img.shields.io/badge/MongoDB-Latest-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
  </p>
</div>

---

## ✨ Features

- 🚀 **Real-time Messaging** - Instant message delivery with Socket.IO
- 🔐 **Secure Authentication** - JWT-based auth with passport.js
- 👥 **User Presence** - See who's online in real-time
- 💬 **Multiple Chats** - Support for one-on-one and group conversations
- 🎨 **Modern UI** - Beautiful interface built with Tailwind CSS v4 and Radix UI
- 🌓 **Dark Mode** - Seamless theme switching
- 📱 **Responsive Design** - Works perfectly on all devices
- 🔔 **Real-time Notifications** - Stay updated with toast notifications
- 📷 **Media Support** - Image uploads via Cloudinary
- ⚡ **Fast & Lightweight** - Optimized performance with Vite

---

## 🛠️ Tech Stack

### Frontend
- **Framework:** React 19.2.0 + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS v4
- **UI Components:** Radix UI
- **State Management:** Zustand
- **Form Handling:** React Hook Form + Zod
- **Routing:** React Router v7
- **Real-time:** Socket.IO Client
- **HTTP Client:** Axios
- **Icons:** Lucide React

### Backend
- **Runtime:** Node.js + Express 5
- **Language:** TypeScript
- **Database:** MongoDB + Mongoose
- **Authentication:** JWT + Passport.js
- **Real-time:** Socket.IO
- **Validation:** Zod
- **File Upload:** Cloudinary
- **Security:** Helmet, CORS, bcryptjs

---

## 📦 Project Structure

```
nowtalk/
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/           # Page components
│   │   ├── hooks/           # Custom React hooks
│   │   ├── lib/             # Utilities and helpers
│   │   ├── routes/          # Route configuration
│   │   └── types/           # TypeScript type definitions
│   └── public/              # Static assets
│
├── backend/                 # Node.js backend application
│   └── src/
│       ├── config/          # Configuration files
│       ├── controllers/     # Request handlers
│       ├── models/          # Database models
│       ├── routes/          # API routes
│       ├── services/        # Business logic
│       ├── middlewares/     # Custom middlewares
│       ├── validators/      # Request validation schemas
│       └── utils/           # Utility functions
│
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/nowtalk.git
   cd nowtalk
   ```

2. **Setup Backend**
   ```bash
   cd backend
   npm install
   ```

   Create a `.env` file in the backend directory:
   ```env
   NODE_ENV=development
   PORT=8000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   JWT_EXPIRES_IN=15m
   FRONTEND_ORIGIN=http://localhost:5173
   
   # Cloudinary (optional)
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   ```

3. **Setup Frontend**
   ```bash
   cd ../frontend
   npm install
   ```

   Create a `.env` file in the frontend directory:
   ```env
   VITE_API_URL=http://localhost:8000
   ```

4. **Run the application**

   **Backend:**
   ```bash
   cd backend
   npm run dev
   ```

   **Frontend:**
   ```bash
   cd frontend
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:5173` 🎉

---

## 🔧 Available Scripts

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Lint code

### Backend
- `npm run dev` - Start development server with nodemon
- `npm run build` - Compile TypeScript to JavaScript
- `npm start` - Run production server

---

## 🎯 API Endpoints

### Authentication
- `POST /api/auth/signup` - Register new user
- `POST /api/auth/signin` - Login user
- `POST /api/auth/logout` - Logout user
- `GET /api/auth/me` - Get current user

### Users
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID

### Chats
- `GET /api/chats` - Get user's chats
- `POST /api/chats` - Create new chat
- `GET /api/chats/:id` - Get chat by ID

---

## 👨‍💻 Author

**Your Name**

- GitHub: [@Yousuf-Wizdan](https://github.com/Yousuf-Wizdan)
- LinkedIn: [Yousuf Wizdan](https://www.linkedin.com/in/yousufwizdan/)

---

<div align="center">
  <p>Made with ❤️ and ☕</p>
  <p>⭐ Star this repo if you find it helpful!</p>
</div>
