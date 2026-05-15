<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:1a1a2e,50:e94560,100:0f3460&height=200&section=header&text=FitZone%20🏋️&fontSize=60&fontColor=ffffff&animation=fadeIn&fontAlignY=38&desc=Smart%20Gym%20Management%20System&descAlignY=58&descSize=18&descColor=f5a623" width="100%"/>

<br/>

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org)
[![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://mongodb.com)
[![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white)](https://cloudinary.com)
[![OpenAI](https://img.shields.io/badge/OpenAI-412991?style=for-the-badge&logo=openai&logoColor=white)](https://openai.com)
[![Google OAuth](https://img.shields.io/badge/Google_OAuth-4285F4?style=for-the-badge&logo=google&logoColor=white)](https://developers.google.com)

<br/>

> **A full-stack gym management web application with AI chatbot, Google OAuth, membership plans, trainer profiles, BMI calculator, and a powerful admin dashboard.**

<br/>

[🚀 Live Demo](https://fitzone-premium.onrender.com/) &nbsp;·&nbsp; [🐛 Report Bug](mailto:vashishthafalguni@gmail.com?subject=🐛%20Bug%20Report%20-%20FitZone&body=Hi%20Falguni,%0A%0A**Describe%20the%20bug:**%0A%0A**Steps%20to%20reproduce:**%0A1.%20%0A2.%20%0A3.%20%0A%0A**Expected%20behavior:**%0A%0A**Screenshots%20(if%20any):**%0A%0AThanks!) &nbsp;·&nbsp; [💡 Request Feature](mailto:vashishthafalguni@gmail.com?subject=💡%20Feature%20Request%20-%20FitZone&body=Hi%20Falguni,%0A%0A**Feature%20idea:**%0A%0A**Why%20it%20would%20be%20useful:**%0A%0A**Any%20examples%20or%20references:**%0A%0AThanks!)

</div>

---

## 🌐 Live Demo

> 🔗 **[https://fitzone-premium.onrender.com](https://fitzone-premium.onrender.com/)**

> ⚠️ **Note:** Hosted on Render free tier — may take **30–60 seconds** to wake up on first visit.

---

## ✨ Features

### 👤 Member Side
- 🔐 **Google OAuth 2.0** login — one-click secure authentication
- 🏅 **Membership Plans** — view, purchase & manage plans
- 👨‍💼 **Trainer Profiles** — browse male & female certified trainers with ratings
- ⚖️ **BMI Calculator** — instant health metric tool
- 🤖 **FitZone AI Chatbot** — OpenAI-powered assistant (with usage limits)
- 🖼️ **Profile Management** — upload avatar via Cloudinary
- 📞 **Contact & Feedback** — submit reviews and feedback
- 📊 **Personal Dashboard** — track memberships & activity

### 🛡️ Admin Side
- 🔒 **Secure Admin Login** — separate authentication layer
- 📋 **Member Management** — view, update, delete members
- 📈 **Dashboard Analytics** — membership stats at a glance
- 💬 **Feedback Viewer** — read all submitted feedback
- 🎨 **EJS Templating** — fast server-side rendered admin UI

### 🤖 AI Chatbot
- Powered by **OpenAI GPT API**
- Knows all trainers, plans & gym info
- Per-user **chat limits** with history tracking
- Persistent **chat history** in MongoDB

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | HTML5, CSS3, Vanilla JavaScript |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB (Mongoose ODM) |
| **Authentication** | Google OAuth 2.0 (Passport.js) |
| **File Storage** | Cloudinary (avatar uploads) |
| **AI** | OpenAI API (GPT chatbot) |
| **Sessions** | express-session + connect-mongo |
| **Admin DB** | MySQL + EJS views |
| **Deployment** | Render |

---

## 📁 Project Structure

```
gym-management/
│
├── frontend/                   # Client-side files
│   ├── index.html              # Home page
│   ├── login.html              # Login page
│   ├── dashboard.html          # Member dashboard
│   ├── membership.html         # Membership plans
│   ├── trainers.html           # Trainer profiles
│   ├── bmi.html                # BMI calculator
│   ├── contact.html            # Contact & feedback
│   ├── profile.html            # User profile
│   ├── css/style.css           # Global styles
│   └── js/
│       ├── script.js           # Main app logic
│       └── chatbot.js          # AI chatbot UI
│
├── backend/                    # Express server
│   ├── server.js               # Entry point
│   ├── models/
│   │   ├── User.js             # User schema
│   │   ├── Membership.js       # Membership schema
│   │   ├── Feedback.js         # Feedback schema
│   │   ├── ChatHistory.js      # Chat history schema
│   │   └── ChatUsage.js        # Chat usage/limits
│   └── routes/
│       ├── members.js          # Member API routes
│       └── chat.js             # AI chatbot routes
│
├── admin/                      # Admin panel (MySQL + EJS)
│   ├── server.js               # Admin server
│   ├── routes/admin.js         # Admin routes
│   ├── views/
│   │   ├── dashboard.ejs       # Admin dashboard
│   │   └── login.ejs           # Admin login
│   └── models/                 # Admin-side models
│
├── .env.example                # Environment variables template
├── database.sql                # MySQL schema
└── package.json
```

---

## ⚙️ Installation & Setup

### Prerequisites

Make sure you have these installed:
- [Node.js](https://nodejs.org) v16+
- [MongoDB](https://mongodb.com) (local or Atlas)
- [MySQL](https://mysql.com) (for admin panel)

### 1. Clone the Repository

```bash
git clone https://github.com/Falguni02V/FitZone.git
cd FitZone
```

### 2. Install Dependencies

```bash
# Backend dependencies
cd backend
npm install

# Admin dependencies
cd ../admin
npm install
```

### 3. Configure Environment Variables

Copy the example env file and fill in your credentials:

```bash
cp .env.example .env
```

Open `.env` and update:

```env
PORT=3000

# MongoDB
MONGO_URI=mongodb://localhost:27017/gym_management

# Express Session
SESSION_SECRET=your_super_secret_key_here

# Google OAuth (get from Google Cloud Console)
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
CLIENT_URL=http://localhost:3000

# Cloudinary (get from cloudinary.com)
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# OpenAI (get from platform.openai.com)
OPENAI_API_KEY=sk-...
```

### 4. Setup MySQL Database (Admin Panel)

```bash
mysql -u root -p < database.sql
```

Update `admin/.env` with your MySQL credentials:

```env
DB_HOST=localhost
DB_USER=root
DB_PASS=your_password
DB_NAME=gym_management
```

### 5. Run the Application

```bash
# Start backend server (from /backend)
cd backend
node server.js

# Start admin server (from /admin, in a new terminal)
cd admin
node server.js
```

### 6. Open in Browser

| Service | URL |
|---------|-----|
| 🌐 Main App | http://localhost:3000 |
| 🛡️ Admin Panel | http://localhost:4000 |

---

## 🔑 Google OAuth Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project → Enable **Google+ API**
3. Go to **Credentials** → Create **OAuth 2.0 Client ID**
4. Set Authorized redirect URI to:
   ```
   http://localhost:3000/auth/google/callback
   ```
5. Copy `Client ID` and `Client Secret` into your `.env`

---

## ☁️ Cloudinary Setup

1. Sign up at [cloudinary.com](https://cloudinary.com) (free tier available)
2. From your dashboard copy: Cloud Name, API Key, API Secret
3. Paste into your `.env` file

---

## 🤖 AI Chatbot Setup

1. Get an API key from [platform.openai.com](https://platform.openai.com)
2. Add to `.env`: `OPENAI_API_KEY=sk-...`
3. Usage limits per user are configurable in `routes/chat.js`

---

## 🚀 Deployment (Render)

1. Push your code to GitHub
2. Go to [render.com](https://render.com) → New Web Service
3. Connect your repo
4. Set **Build Command**: `npm install`
5. Set **Start Command**: `node backend/server.js`
6. Add all environment variables from your `.env`
7. Deploy! 🎉

---

## 📡 API Reference

### Auth Routes
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/auth/google` | Initiate Google OAuth |
| `GET` | `/auth/google/callback` | OAuth callback |
| `GET` | `/auth/logout` | Logout user |
| `GET` | `/api/me` | Get current user |

### Member Routes
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/trainers` | Get all trainers |
| `GET` | `/api/membership` | Get user's membership |
| `POST` | `/api/membership` | Purchase membership |
| `POST` | `/api/feedback` | Submit feedback |
| `POST` | `/api/upload-avatar` | Upload profile picture |

### Chatbot Routes
| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/chat` | Send message to AI |
| `GET` | `/api/chat/history` | Get chat history |
| `GET` | `/api/chat/usage` | Get remaining chat limit |

---

## 🤝 Contributing

```bash
git checkout -b feature/AmazingFeature
git commit -m 'Add some AmazingFeature'
git push origin feature/AmazingFeature
# Then open a Pull Request
```

---

## 🐛 Report a Bug / 💡 Suggest a Feature

Found something broken? Have a brilliant idea? Reach out directly — every message is read!

| Type | Action | What to include |
|------|--------|----------------|
| 🐛 **Bug Report** | [Click to Email](mailto:vashishthafalguni@gmail.com?subject=🐛%20Bug%20Report%20-%20FitZone&body=Hi%20Falguni,%0A%0A**Describe%20the%20bug:**%0A%0A**Steps%20to%20reproduce:**%0A1.%20%0A2.%20%0A3.%20%0A%0A**Expected%20behavior:**%0A%0A**Screenshots%20(if%20any):**%0A%0AThanks!) | What happened, steps to reproduce, screenshots |
| 💡 **Feature Request** | [Click to Email](mailto:vashishthafalguni@gmail.com?subject=💡%20Feature%20Request%20-%20FitZone&body=Hi%20Falguni,%0A%0A**Feature%20idea:**%0A%0A**Why%20it%20would%20be%20useful:**%0A%0A**Any%20examples%20or%20references:**%0A%0AThanks!) | Your idea, why it's useful, any examples |
| 💬 **General Feedback** | [Click to Email](mailto:vashishthafalguni@gmail.com?subject=💬%20Feedback%20-%20FitZone&body=Hi%20Falguni,%0A%0AYour%20feedback%20here...%0A%0AThanks!) | Anything on your mind |

📧 **Direct email:** [vashishthafalguni@gmail.com](mailto:vashishthafalguni@gmail.com)

> Clicking any link above opens your email app with the subject & template **pre-filled** — just type your message and send!

---

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 👨‍💻 Author

**Falguni02V**

[![GitHub](https://img.shields.io/badge/GitHub-Falguni02V-181717?style=for-the-badge&logo=github)](https://github.com/Falguni02V)
[![Live Site](https://img.shields.io/badge/Live_Site-FitZone-e94560?style=for-the-badge&logo=render&logoColor=white)](https://fitzone-premium.onrender.com/)
[![Email](https://img.shields.io/badge/Email-vashishthafalguni@gmail.com-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:vashishthafalguni@gmail.com)

---

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0f3460,50:e94560,100:1a1a2e&height=120&section=footer&text=Built%20with%20❤️%20for%20FitZone&fontSize=16&fontColor=ffffff&animation=twinkling&fontAlignY=65" width="100%"/>

⭐ **Star this repo if you found it helpful!** ⭐

</div>
