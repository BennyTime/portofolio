# Portfolio — Bernardo Borges

## Problem Statement
Create a portfolio website. Formal, professional, focused on software engineering.

## User
Bernardo Borges, College Graduate in Software Engineering (University of Aveiro).

## Core Requirements
- Single-page portfolio with sections: Hero, About, Skills, Experience, Projects, Education, Contact
- Dark professional aesthetic (Editorial Dark — Cormorant Garamond + Inter + JetBrains Mono)
- Contact form persists to MongoDB
- 4 featured projects: Taça UA, Secure Document Repository, AstraTD, EVSync

## Architecture
- Backend: FastAPI + MongoDB (motor), endpoints under `/api`
  - GET `/api/` health
  - POST `/api/contact` — create message (Pydantic validated, stored in `contact_messages`)
  - GET `/api/contact` — list messages
- Frontend: React 19 + Tailwind + shadcn primitives + sonner (toasts)
- Hot reload, supervisor managed

## Implemented (2026-06-23)
- Dark editorial design system (sharp corners, serif/mono pairing)
- Sticky glass navigation with smooth scroll
- Hero with background image, name, title, tagline, dual CTAs
- About section with editorial column + meta dl
- Skills grid (5 categories)
- Experience timeline (vertical line + nodes)
- Projects asymmetric grid (wide/narrow span) with hover grayscale-to-color
- Education section
- Contact form (inputs with bottom-border style) + GitHub/LinkedIn/Email links
- Sonner toast notifications
- Footer
- All interactive elements have data-testid
- Backend: contact CRUD with email validation
- Tested: 100% backend, 100% frontend (iteration_1)

## Backlog / Future
- P1: Admin route to view contact submissions (read /api/contact)
- P1: Email notification on contact submit (Resend/SendGrid integration)
- P2: Project detail pages / case studies
- P2: Blog/Writing section
- P2: Resume PDF download
- P2: Analytics integration
- P2: SEO meta tags + Open Graph preview
