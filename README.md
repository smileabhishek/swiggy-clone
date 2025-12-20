# swiggy-clone

## Overview

This project aims to replicate the core functionality of Swiggy’s online food ordering platform.  
At present, the scope is focused solely on the food ordering workflow. Features like Swiggy Dine-in, Instamart, and other services are intentionally out of scope for now but may be considered in future enhancements.

## Tech Stack

-   React (Vite)
-   JavaScript (ES6+)
-   CSS Modules for component-scoped styling
-   React Router for client-side routing
-   Public / mock APIs for data fetching
-   Browser CORS extension (development-only, if required)

## Project Structure

```txt
src/
├─ main.jsx
├─ App.jsx
├─ index.css
├─ components/
│ ├─ Header/
│ │ ├─ Header.jsx
│ │ └─ Header.module.css
│ └─ Footer/
│ ├─ Footer.jsx
│ └─ Footer.module.css
├─ pages/
│ └─ Home.jsx
├─ layouts/
│ └─ MainLayout.jsx
```

### Folder & File Responsibilities

#### main.jsx

-   Application entry point. Boots React and mounts the app to the DOM.

#### App.jsx

-   Top-level application composition. Responsible for routing and layout orchestration.

#### index.css

-   Global styles such as CSS resets, typography, and CSS variables.

#### components/

-   Reusable, presentational UI components.
-   Each component is colocated with its styles using CSS Modules.

#### pages/

-   Route-level components representing full screens or views.
-   These components compose reusable UI components but are not reused themselves.

#### layouts/

-   Layout components responsible for structuring pages (header, footer, main content).
-   Layouts focus on composition rather than UI detail.

### Design Principles

-   Separation of concerns between infrastructure, layout, and UI
-   Component-based architecture
-   Colocation of styles and components
-   Clear distinction between reusable components and route-level views

## Development

### Prerequisites

-   Node.js (v18+ recommended)
-   npm or yarn

### Setup

```bash
npm install
npm run dev
```

## Git Workflow

-   The `main` branch represents stable, production-ready code.
-   New features are developed in isolated feature branches (e.g. `feature/header`, `feature/footer`).
-   Feature branches are kept up to date by rebasing onto the latest `main`.
-   Changes are merged into `main` via pull requests after review.
