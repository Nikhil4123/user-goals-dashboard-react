# User Goals Dashboard

A React-based dashboard for managing users and their goals, built with Vite, React Router, and TailwindCSS.

## 🚀 Features

- User Management
  - Add new users
  - Search and sort users
  - View user details
- Goal Tracking
  - Add goals for users
  - Update goal status
  - Delete goals
  - Track completion rates
- Dashboard Analytics
  - Total users overview
  - Goal completion statistics
  - User activity tracking
- Responsive Design
  - Mobile-friendly interface
  - Adaptive layouts
  - Accessible components

## 🛠️ Technologies

- React 18
- Vite
- React Router v6
- TailwindCSS
- Context API for state management
- Jest for testing

## 📋 Prerequisites

- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

## 🔧 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/user-goals-dashboard-react.git
cd user-goals-dashboard-react
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add environment variables:
```env
VITE_APP_TITLE=User Goals Dashboard
VITE_API_URL=http://localhost:5173
VITE_API_TIMEOUT=5000
VITE_MAX_USERS=100
VITE_MAX_GOALS_PER_USER=20
```

4. Start the development server:
```bash
npm run dev