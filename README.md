# 🏥 PH Healthcare — Frontend

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=rect&color=0:0F172A,100:0D9488&height=180&section=header&text=PH%20Healthcare&fontSize=42&fontColor=FFFFFF&animation=fadeIn&fontAlignY=42&desc=Modern%20Healthcare%20Management%20Interface&descAlignY=68&descSize=16" alt="PH Healthcare Banner" width="100%" />
</p>

<p align="center">
  A modern healthcare frontend application built with Next.js, React, TypeScript, Material UI, and Redux Toolkit.
</p>

---

## 📑 Table of Contents

- [Introduction](#-introduction)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Available Scripts](#-available-scripts)
- [Project Structure](#-project-structure)
- [Environment Variables](#-environment-variables)
- [Deployment](#-deployment)
- [Future Improvements](#-future-improvements)
- [Contact](#-contact)

## 🚀 Introduction

**PH Healthcare** is a healthcare-focused frontend project designed to provide a modern and user-friendly interface for healthcare management workflows.

Built with Next.js and React, the application uses Material UI for interface components, Redux Toolkit for state management, and Axios for HTTP communication with backend services.

The project also incorporates form validation, authentication-related utilities, data tables, and date pickers to support structured application workflows.

## ✨ Features

- ⚛️ Component-based UI using React
- 🚀 Next.js application framework
- 🎨 Modern UI components with Material UI
- 📊 Data tables using MUI X Data Grid
- 🗓️ Date selection with MUI X Date Pickers
- 🔄 Global state management with Redux Toolkit
- 🌐 API communication using Axios
- 📝 Form management with React Hook Form
- ✅ Schema-based validation with Zod
- 🔐 JWT decoding utilities
- 🔔 Toast notifications with Sonner
- 📱 Responsive interface components
- 📅 Date handling with Day.js

*The final feature list should match the functionality implemented in your application.*

## 🧰 Tech Stack

### Frontend

| Technology | Purpose |
|---|---|
| Next.js 14 | React framework and application routing |
| React 18 | Building interactive user interfaces |
| TypeScript 5 | Static typing and maintainable code |
| Material UI 5 | UI components and styling |
| MUI X Data Grid | Data tables and grid interfaces |
| MUI X Date Pickers | Date and time selection |
| Redux Toolkit | Global state management |
| React Redux | Connecting React components to Redux |

### Forms and Data Handling

- **React Hook Form** — Form state management
- **Zod** — Schema validation
- **Hook Form Resolvers** — Connecting validation schemas to forms
- **Axios** — HTTP requests to backend APIs
- **JWT Decode** — Decoding JSON Web Tokens
- **Day.js** — Date manipulation and formatting
- **Sonner** — Toast notifications

### Styling and Development Tools

- **Emotion** — CSS-in-JS styling engine
- **Tailwind CSS 3** — Utility-first CSS framework
- **PostCSS** — CSS transformation
- **Autoprefixer** — CSS vendor prefixing
- **ESLint** — Code quality checks

## ⚙️ Getting Started

### Prerequisites

Install the following tools:

- [Node.js](https://nodejs.org/)
- npm
- [Git](https://git-scm.com/)
- [Visual Studio Code](https://code.visualstudio.com/) or another code editor

### Installation

**1. Clone the repository**

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

**2. Navigate to the project directory**

```bash
cd ph-healthcare-frontend
```

**3. Install dependencies**

```bash
npm install
```

**4. Configure environment variables**

Create a `.env.local` file in the project root if your application requires environment variables.

For example:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

Replace the example URL with your actual backend API endpoint. Use this variable name only if your source code is configured to read it.

**5. Start the development server**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the Next.js development server |
| `npm run build` | Builds the application for production |
| `npm run start` | Starts the production server after building |
| `npm run lint` | Runs the configured Next.js lint command |

### Production Build

```bash
npm run build
npm run start
```

The application will run in production mode after a successful build.

**Note:** The `next lint` command in your scripts may require adjustment because it was removed from newer Next.js versions. Your project uses Next.js 14, so verify the command against your installed version if linting fails.

## 📁 Project Structure

A typical Next.js project may follow this structure:

```text
ph-healthcare-frontend/
├── public/                  # Static assets
├── src/
│   ├── app/                 # App Router pages (if used)
│   ├── components/          # Reusable UI components
│   ├── features/             # Feature-specific modules
│   ├── hooks/                # Custom React hooks
│   ├── lib/                  # Utilities and configurations
│   ├── store/                # Redux store and slices
│   └── types/                # TypeScript types
├── .env.local                # Local environment variables
├── next.config.js            # Next.js configuration
├── package.json              # Dependencies and scripts
├── tailwind.config.js        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
└── README.md                 # Project documentation
```

*Adapt this example to your actual folder structure. Your project may use the Pages Router instead of the App Router.*

## 🔐 Environment Variables

If the frontend connects to a backend, configure the required API endpoint through environment variables.

Example:

```env
NEXT_PUBLIC_API_URL=your_backend_api_url
```

- Use the exact variable names expected by your source code.
- Never commit private credentials or secrets to GitHub.
- Remember that variables prefixed with `NEXT_PUBLIC_` are exposed to the browser.

## ☁️ Deployment

You can deploy this Next.js application using:

- [Vercel](https://vercel.com/) — A convenient option for Next.js applications
- [Netlify](https://www.netlify.com/) — Hosting with appropriate Next.js support
- [AWS](https://aws.amazon.com/) — Cloud deployment options

For a standard Node.js deployment, run `npm run build` and then `npm run start` on your hosting environment.

If your application uses server-side rendering or Next.js API routes, ensure the hosting platform supports those features.

## 🔮 Future Improvements

- Enhance dashboard and healthcare data visualization.
- Improve form validation and error handling.
- Add comprehensive loading and empty states.
- Improve accessibility and mobile responsiveness.
- Strengthen authentication and authorization workflows.
- Add automated tests and CI/CD integration.
- Optimize application performance.

## 📬 Contact

**Saiful Islam** — Web Developer

- GitHub: [saiful-islam-dev](https://github.com/saiful-islam-dev)
- Email: saifulislamx264@gmail.com

---

<p align="center">
  ⭐ If you find this project interesting, consider giving the repository a star!
</p>

<p align="center">
  Built with ❤️ by Saiful Islam
</p>
