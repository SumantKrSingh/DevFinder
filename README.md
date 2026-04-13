# DevFinder 🔍

A GitHub user search app built with React, TypeScript, Firebase Auth, Redux Toolkit, and MUI.

## Features

- 🔐 Google Authentication via Firebase
- 🔎 Search GitHub users instantly with debounced input
- 📊 View profile stats — repos, followers, following
- 🌙 Dark / Light theme toggle
- ⚡ Built with Vite for fast development

## Tech Stack

| Category         | Technology              |
| ---------------- | ----------------------- |
| Frontend         | React 18, TypeScript    |
| State Management | Redux Toolkit           |
| Authentication   | Firebase Auth           |
| HTTP Client      | Axios                   |
| UI Library       | Material UI (MUI)       |
| Build Tool       | Vite                    |
| Code Quality     | ESLint, Prettier, Husky |

## Getting Started

```bash
# Clone the repo
git clone https://github.com/SumantKrSingh/DevFinder.git
cd DevFinder/client

# Install dependencies
npm install

# Add environment variables
cp .env.example .env
# Fill in your Firebase config in .env

# Start development server
npm run dev
```

## Environment Variables

```env
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
```

## Live Demo

[devfinder-ts.netlify.app](github-devfinder-app.netlify.app)

## Author

**Sumant Kumar Singh**  
[GitHub](https://github.com/SumantKrSingh) · [LinkedIn](https://linkedin.com/in/sumantkrsingh)
