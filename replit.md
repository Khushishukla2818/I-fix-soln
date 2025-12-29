# i-Fix Solutions

## Overview
A phone repair service web application that allows users to request doorstep phone repairs. Built with React (frontend) and Express (backend) in a full-stack TypeScript setup.

## Project Architecture
- **Frontend**: React 18 with TypeScript, Vite bundler, Tailwind CSS, Radix UI components
- **Backend**: Express.js server serving both API and static files
- **Database**: PostgreSQL via Neon serverless (Drizzle ORM)
- **Routing**: Wouter for client-side routing

## Project Structure
```
├── client/          # Frontend React application
│   ├── src/
│   │   ├── components/ui/  # UI components (Radix-based)
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # Custom React hooks
│   │   ├── lib/           # Utilities
│   │   └── data/          # Static data
│   └── public/            # Static assets
├── server/          # Backend Express server
│   ├── index.ts     # Server entry point
│   ├── routes.ts    # API routes
│   ├── storage.ts   # Data storage layer
│   └── vite.ts      # Vite dev server integration
├── shared/          # Shared types/schemas
└── attached_assets/ # Asset files
```

## Development Commands
- `npm run dev` - Start development server (port 5000)
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run db:push` - Push database schema changes

## Key Features
- Phone repair request form with modal
- Phone model search API
- Banner carousel
- Responsive design with Tailwind CSS

## Recent Changes
- 2025-12-29: Initial import and Replit environment setup
  - Fixed import paths for RepairModal and SuccessModal components
  - Moved CSS files to correct locations
  - Configured server to bind to 0.0.0.0:5000
  - Set up PostgreSQL database
