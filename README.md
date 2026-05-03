# Daily News Next.js

A modern **news portal** built with **Next.js 16**, **React 19**, **MongoDB**, and **better-auth**.  
It includes news category pages, article details, authentication, and shared UI components for the homepage and sidebars.

## Features

- News homepage with shared layout
- Category-based news listing
- News details pages
- Politics page
- Authentication:
  - Login
  - Register
  - Profile
- Google login support
- MongoDB-backed auth with `better-auth`
- Responsive UI with Tailwind CSS + DaisyUI

## Tech Stack

- **Next.js 16.2.4**
- **React 19.2.4**
- **MongoDB**
- **better-auth**
- **Tailwind CSS 4**
- **DaisyUI**
- **date-fns**
- **react-icons**
- **react-hook-form**
- **react-fast-marquee**

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Set environment variables

Create a `.env.local` file in the project root:

```env
MONGO_DB_URL=your_mongodb_connection_string
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Available Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Authentication

Authentication is configured in:

- `src/lib/auth.js`
- `src/app/api/auth/[...all]/route.js`

It uses **better-auth** with MongoDB as the database adapter.

## Project Structure

```text
daily-news-nextjs
├── .env
├── .gitignore
├── AGENTS.md
├── CLAUDE.md
├── README.md
├── eslint.config.mjs
├── jsconfig.json
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── public
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
└── src
    ├── app
    │   ├── (auth)
    │   │   ├── layout.js
    │   │   ├── login
    │   │   │   └── page.jsx
    │   │   ├── profile
    │   │   │   └── page.jsx
    │   │   └── register
    │   │       └── page.jsx
    │   ├── (main)
    │   │   ├── category
    │   │   │   └── [id]
    │   │   │       └── page.jsx
    │   │   ├── layout.js
    │   │   ├── news
    │   │   │   └── [id]
    │   │   │       └── page.jsx
    │   │   ├── page.js
    │   │   └── politics
    │   │       └── page.jsx
    │   ├── api
    │   │   └── auth
    │   │       └── [...all]
    │   │           └── route.js
    │   ├── favicon.ico
    │   ├── globals.css
    │   ├── layout.js
    │   ├── loading.js
    │   └── not-found.jsx
    ├── assets
    │   ├── bg.png
    │   ├── class.png
    │   ├── daily-news.png
    │   ├── demo-card-thumbnail.png
    │   ├── demo-user.png
    │   ├── fb.png
    │   ├── instagram.png
    │   ├── logo.png
    │   ├── nav-logo.png
    │   ├── playground.png
    │   ├── star.png
    │   ├── swimming.png
    │   ├── twitter.png
    │   └── user.png
    ├── components
    │   ├── GoogleLogin.jsx
    │   └── shared
    │       ├── BreakingNews.jsx
    │       ├── Footer.jsx
    │       ├── Header.jsx
    │       ├── NavLinks.jsx
    │       ├── Navbar.jsx
    │       └── homepage
    │           ├── NewsCard.jsx
    │           └── news
    │               ├── LeftSidebar.jsx
    │               ├── NoNews.jsx
    │               └── RightSidebar.jsx
    └── lib
        ├── auth-client.js
        ├── auth.js
        └── data.js
```

## Deployment

This project is ready to deploy on **Vercel**.

```bash
npm run build
```

Add the environment variables in the Vercel dashboard before deploying.
