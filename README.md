# Ravion Portfolio Website

Personal portfolio website of **Raihan Achmad Suhada** under the **Ravion** identity.

**Ravion** stands for **Raihan Innovation & Technology**. It represents my personal brand identity for building digital products with clean execution, structured workflow, practical delivery, and continuous improvement.

## Live Demo

The portfolio website is live at:

https://raihan-portfolio-website-eight.vercel.app/

## Overview

This website is built as a professional portfolio to present my profile, skills, experience, education, certificates, selected projects, mini projects, and contact information.

The website uses a clean, modern, responsive interface with light mode and dark mode support. It is designed to represent my professional profile as a Fullstack Developer, Project Manager, Mobile Development Learner, AI Enthusiast, and DevOps learner under the Ravion identity.

## Features

- Responsive landing page
- Light and dark mode support
- Light mode as default first visit
- Smooth page transitions and section animations
- Intro loading screen with Ravion branding
- Personal profile hero section
- About section with Ravion brand explanation
- Skills overview
- Experience timeline
- Education section
- Certificates preview and full certificate page
- Featured project preview
- Full projects page
- Project search feature
- Project category filter:
  - Education
  - Mini Project
  - Freelance Project
- 23 mini projects included in the project portfolio
- Contact section with social links
- Back to top button
- SEO metadata
- Custom Ravion favicon and brand icon support

## Tech Stack

- Next.js
- TypeScript
- React
- Tailwind CSS
- Framer Motion
- Lucide React
- React Icons
- pnpm

## Main Sections

### Hero

The hero section introduces Raihan Achmad Suhada as the person behind Ravion, with a professional profile image, social links, and role highlights.

### About

The about section explains the professional background, working style, technical focus, and the purpose of Ravion as a personal brand identity.

### Skills

The skills section presents technical skills across frontend development, backend development, mobile development, database, API integration, DevOps fundamentals, security basics, AI tools, machine learning fundamentals, and development tools.

### Experience

The experience section presents professional and project-based experience.

### Education

The education section presents academic background and learning foundation.

### Certificates

The certificates section presents selected certificates on the homepage and a full certificate collection page.

### Projects

The projects section presents selected education projects, freelance projects, and mini projects.

The full projects page includes:

- Project grouping
- Search input
- Clickable project category filters
- Education projects
- Mini projects
- Freelance projects

### Contact

The contact section provides ways to connect through GitHub, LinkedIn, email, and WhatsApp.

## Project Categories

### Education Projects

Academic and learning-based projects developed to strengthen technical fundamentals and software development practice.

### Mini Projects

Focused practice projects built to demonstrate specific technical skills across frontend, backend, mobile, AI, machine learning, API development, and real-time application development.

### Freelance Projects

Projects developed for practical application needs, business workflows, system prototypes, and client-oriented website work.

## Included Main Projects

### Employee Compensation Decision Support System

A web-based decision support system for employee KPI evaluation, AHP weighting, peer assessment, leaderboard, salary increase recommendation, and bonus recommendation.

### Grocery Delivery Apps

A grocery and food delivery web application with customer app, admin panel, Express.js REST API, MongoDB, cart, checkout, orders, and product management.

### Inventory Control System

A web-based inventory control system for managing products, suppliers, stock transactions, stock monitoring, EOQ and ROP calculations, purchase recommendations, reports, and Excel import.

### Workshop Insight

A web-based workshop management system for service transactions, spare parts, stock, reports, transaction pattern analysis, and service package recommendations.

### Cake Shop POS System

A web-based POS and pre-order system for cake shop products, orders, payment proof upload, ingredient stock, FIFO usage, production queue, and reports.

### Public Service Report Classification System

A public service report classification system with citizen report submission, admin management, status tracking, and machine learning based priority recommendation.

### HARZNET Company Profile

A company profile website for HARZNET focused on presenting business information, internet services, service coverage, contact access, and brand identity through a modern responsive public website.

## Mini Project Portfolio

This portfolio includes 23 mini projects covering:

- JavaScript
- TypeScript
- PHP
- Python
- Go
- Dart
- Kotlin
- Laravel
- Express.js
- React
- Next.js
- Vue.js
- Flask
- Flutter
- React Native
- scikit-learn
- AI API integration
- WebSocket
- PostgreSQL
- MongoDB
- REST API development

These projects are built as practice projects and technical explorations to validate hands-on skills across multiple languages, frameworks, and application types.

## Screenshots

### Home Page - Light Mode

![Home Light](public/screenshots/home-light.png)

### Home Page - Dark Mode

![Home Dark](public/screenshots/home-dark.png)

### Projects Page - Light Mode

![Projects Light](public/screenshots/projects-light.png)

### Projects Page - Dark Mode

![Projects Dark](public/screenshots/projects-dark.png)

## Project Structure

```text
raihan-portfolio-website/
├── public/
│   ├── brand/
│   ├── certificates/
│   ├── images/
│   └── screenshots/
├── src/
│   ├── app/
│   │   ├── certificates/
│   │   ├── projects/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── loading.tsx
│   │   ├── page.tsx
│   │   └── template.tsx
│   ├── components/
│   │   ├── cards/
│   │   ├── layout/
│   │   ├── sections/
│   │   └── ui/
│   ├── data/
│   ├── lib/
│   └── types/
├── package.json
├── pnpm-lock.yaml
├── next.config.ts
├── tsconfig.json
└── README.md
```

## Getting Started

Clone the repository:

```bash
git clone https://github.com/raihanachmadsuhadadev/raihan-portfolio-website.git
cd raihan-portfolio-website
```

Install dependencies:

```bash
pnpm install
```

Run development server:

```bash
pnpm dev
```

Open the website:

```text
http://localhost:3000
```

## Build

Run production build:

```bash
pnpm build
```

Run production server:

```bash
pnpm start
```

## Development Notes

This project uses:

- App Router from Next.js
- Typed project and profile data
- Reusable section components
- Reusable project cards
- Search and filter logic for project listing
- Framer Motion for scroll reveal and stagger animation
- Tailwind CSS for responsive styling
- Local asset management for brand icons, certificates, profile image, and screenshots

## Author

**Raihan Achmad Suhada**

- GitHub: https://github.com/raihanachmadsuhadadev
- LinkedIn: https://www.linkedin.com/in/raihan-a-suhada
- Portfolio: https://raihan-portfolio-website-eight.vercel.app/

## Status

Completed and actively maintained as a personal portfolio website.
