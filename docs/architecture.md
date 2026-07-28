# Project Horizon - System Architecture

## Overview

Project Horizon is a frontend application built with **React**, **TypeScript**, and **Vite** following a modular and scalable architecture. The application uses **Redux Toolkit** for global state management, **Axios** for API communication, and **MSW (Mock Service Worker)** to simulate backend APIs during development.

The project is structured to separate UI components, business logic, API communication, and global state, making the codebase easier to maintain and extend.

---

# Technology Stack

| Layer            | Technology                |
| ---------------- | ------------------------- |
| Frontend         | React 19 + TypeScript     |
| Build Tool       | Vite                      |
| Styling          | Tailwind CSS v4           |
| Routing          | React Router DOM          |
| State Management | Redux Toolkit             |
| HTTP Client      | Axios                     |
| Mock Backend     | MSW (Mock Service Worker) |
| Formatting       | Prettier                  |
| Linting          | ESLint                    |

---

# Project Structure

```
src
├── api/                # Axios client configuration
├── assets/             # Static assets
├── components/         # Reusable UI components
├── data/               # Static/mock data
├── hooks/              # Custom React hooks
├── layout/             # Shared layouts
├── mocks/              # MSW handlers and mock data
├── pages/              # Route pages
├── services/           # API service layer
├── store/              # Redux store and slices
├── types/              # TypeScript interfaces
└── main.tsx
```

---

# Routing

Routing is handled using **React Router DOM**.

Current application routes:

| Route     | Component |
| --------- | --------- |
| /         | Dashboard |
| /projects | Projects  |
| /reports  | Reports   |
| /profile  | Profile   |
| /settings | Settings  |

All pages are rendered inside a shared `MainLayout`.

---

# Global State Management

Redux Toolkit is used for application-wide state.

Current store structure:

```
Store
├── ui
├── workspace
├── profile
└── projects
```

Each slice manages its own state while keeping business logic isolated.

---

# API Architecture

API communication follows a layered approach.

```
Component
      │
      ▼
Service Layer
      │
      ▼
Axios Client
      │
      ▼
MSW
      │
      ▼
Mock JSON
```

### Axios Client

The centralized Axios client is responsible for:

- Base URL configuration
- Request timeout
- Authorization header injection
- Global request interceptor
- Global response interceptor
- Error handling

---

# Mock Backend

MSW intercepts requests at the **Service Worker** level.

Available endpoints include:

- GET /dashboard
- GET /projects
- GET /reports
- GET /profile
- GET /settings
- GET /workspace

The mock server can simulate:

- Successful responses
- 401 Unauthorized
- 403 Forbidden
- 404 Not Found
- 500 Internal Server Error
- Network failure
- Request timeout

---

# Custom Hooks

The project includes reusable custom hooks to keep business logic separate from UI.

| Hook              | Purpose                                  |
| ----------------- | ---------------------------------------- |
| useDebounce       | Delays rapid state updates during typing |
| useThrottle       | Limits repeated state updates            |
| useProjectFilters | Centralizes project filtering logic      |

---

# Performance Optimizations

The application includes several optimizations:

- Debounced search input
- Reusable custom hooks
- Centralized API handling
- Minimal Redux state updates
- Component-level state where appropriate
- Automatic tree shaking through Vite production builds

---

# Error Handling

Error handling is centralized using Axios interceptors.

Supported scenarios:

- Unauthorized (401)
- Forbidden (403)
- Not Found (404)
- Internal Server Error (500)
- Network failures
- Timeout handling

Global notifications are managed through the Redux UI store.

---

# Production Build

Production builds are generated using:

```bash
npm run build
```

The build process includes:

- TypeScript compilation
- Vite production bundling
- Tree shaking
- Asset optimization

---

# Development Workflow

Development follows the following flow:

1. Create or update feature branch.
2. Implement changes.
3. Test using MSW.
4. Verify with ESLint.
5. Verify production build.
6. Push changes.
7. Open or update Pull Request.
8. Review and merge.
