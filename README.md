# PlacePicker

A React + TypeScript single-page app for building your personal collection of places you would like to visit — or have already visited.

## Features

- **Build a personal collection** — pick any place from the catalog and add it to your "I'd like to visit ..." list.
- **18 curated places** — each with a high-quality image, a short description, and geographic coordinates.
- **Duplicate protection** — a place can only be added to your collection once.
- **Remove with confirmation** — clicking a place in your collection opens a native modal asking for confirmation before it's removed.
- **Native dialog + portal** — the confirmation modal is built with the built-in `<dialog>` element, exposed through a ref-based imperative handle (`ModalHandle`) and rendered via `createPortal`.
- **Empty-state fallback** — the collection shows a friendly hint when no places have been picked yet.
- **Distance utility** — `sortPlacesByDistance()` computes distances between coordinates using the haversine formula (available for future use).
- **Fully typed** — all props, state, refs and data are typed via shared TypeScript types in `src/utils/types.ts`.
- **Asset handling with Vite** — all place images are loaded automatically with `import.meta.glob`, so new images dropped into `src/assets` are picked up with no extra imports.

## Tech Stack

- **React 19** — components, hooks (`useState`, `useRef`, `forwardRef`, `useImperativeHandle`)
- **TypeScript** — strict mode, shared type definitions
- **Vite** — fast dev server and optimized production builds

## Project Structure

```
src/
├── App.tsx                  # Main app component (state + handlers)
├── main.tsx                 # React entry point
├── data.ts                  # Place catalog (18 places)
├── index.css                # Global styles
├── vite-env.d.ts            # Vite/client type declarations
├── assets/                  # Place images + logo
├── components/
│   ├── Places.tsx           # Reusable place list (collection & catalog)
│   ├── Modal.tsx            # Portal-rendered native dialog
│   └── DeleteConfirmation.tsx # Confirmation UI
└── utils/
    ├── types.ts             # Shared TypeScript types
    └── loc.ts               # Distance calculation utilities
```

## Getting Started

### Prerequisites

- Node.js (18+) or Bun

### Installation

```bash
bun install   # or: npm install
```

### Development

```bash
bun run dev   # or: npm run dev
```

Open `http://localhost:5173` in your browser.

### Build for production

```bash
bun run build   # or: npm run build
```

### Type checking

```bash
bun run typecheck   # or: npm run typecheck
```
