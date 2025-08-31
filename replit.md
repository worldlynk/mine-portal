# Overview

This is a full-stack web application for BlueHawk Group, a quartz mining company in India. The application serves as a corporate website showcasing the company's mining operations, featuring mine information, company details, and customer inquiry functionality. It's built as a single-page application with a modern, responsive design and includes an animated loading screen with a door-opening effect.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: Shadcn/ui component library with Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **State Management**: TanStack Query (React Query) for server state management
- **Form Handling**: React Hook Form with Zod validation
- **Design System**: Dark theme with gold accent colors, custom animations and scroll reveals

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API with JSON responses
- **Data Storage**: In-memory storage with interface abstraction for future database integration
- **Validation**: Zod schemas shared between frontend and backend
- **Development**: Vite integration for seamless development experience with HMR

## Database Design
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema**: Three main entities - users, mines, and inquiries
- **Data Models**:
  - Users: Basic authentication structure
  - Mines: Location, category, purity, and image information
  - Inquiries: Customer contact and requirements data
- **Validation**: Drizzle-Zod integration for type-safe schema validation

## Key Features
- **Mine Showcase**: Interactive filtering by state/region with animated transitions
- **Inquiry System**: Customer contact form with form validation and submission
- **Responsive Design**: Mobile-first approach with adaptive layouts
- **Loading Experience**: Custom animated loading screen with door opening effect
- **Scroll Animations**: Intersection Observer-based reveal animations
- **Image Optimization**: Unsplash integration for high-quality mining imagery

# External Dependencies

## Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Hook Form, TanStack Query
- **Build Tools**: Vite, TypeScript, PostCSS, Autoprefixer
- **Routing**: Wouter for lightweight client-side routing

## UI and Styling
- **Component Library**: Radix UI primitives (@radix-ui/react-*)
- **Styling**: Tailwind CSS with custom configuration
- **Utility Libraries**: clsx, class-variance-authority for conditional styling
- **Icons**: Lucide React, React Icons (Font Awesome)

## Backend Infrastructure
- **Server**: Express.js with TypeScript support via tsx
- **Database**: Drizzle ORM with @neondatabase/serverless driver
- **Validation**: Zod for schema validation and type safety
- **Development**: Replit-specific plugins for enhanced development experience

## Development Tools
- **Type Safety**: TypeScript with strict configuration
- **Database Management**: Drizzle Kit for migrations and schema management
- **Build Process**: ESBuild for production builds
- **Development Server**: Vite with Express integration for full-stack development