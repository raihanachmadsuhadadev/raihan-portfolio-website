# LUMENIX Portfolio Website

Personal portfolio website of **Raihan Achmad Suhada** under the **LUMENIX** identity.

LUMENIX represents my personal brand identity for building digital products with clean execution, structured workflow, and practical delivery.

## Live Demo

The portfolio website is live at:

[https://raihan-portfolio-website-eight.vercel.app/](https://raihan-portfolio-website-eight.vercel.app/)

## Overview

This website is built as a professional portfolio to present my profile, skills, experience, selected projects, and contact information.

The website uses a clean, modern, responsive interface with light mode and dark mode support. It is designed to represent both my personal profile and the LUMENIX visual identity.

## Features

- Responsive landing page
- Light and dark mode support
- Smooth page transitions and section animations
- Intro loading screen with LUMENIX branding
- Personal profile hero section
- About section with personal brand explanation
- Skills overview
- Experience timeline
- Selected projects preview
- Complete projects page
- Contact section with email and WhatsApp access
- Custom favicon and brand assets

## Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- Framer Motion
- React Icons
- Lucide React
- PNPM

## Screenshots

### Home - Light Mode

![Home Light](public/screenshots/home-light.png)

### Home - Dark Mode

![Home Dark](public/screenshots/home-dark.png)

### Projects - Light Mode

![Projects Light](public/screenshots/projects-light.png)

### Projects - Dark Mode

![Projects Dark](public/screenshots/projects-dark.png)

## Getting Started

Clone this repository:

```bash
git clone https://github.com/raihanachmadsuhadadev/raihan-portfolio-website.git
```

Move into the project directory:

```bash
cd raihan-portfolio-website
```

Install dependencies:

```bash
pnpm install
```

Run the development server:

```bash
pnpm dev
```

Open the local development URL:

```text
http://localhost:3000
```

## Build

To create a production build:

```bash
pnpm build
```

To start the production server locally:

```bash
pnpm start
```

## Project Structure

```text
src/
├── app/
│   ├── globals.css
│   ├── icon.png
│   ├── layout.tsx
│   ├── loading.tsx
│   ├── page.tsx
│   ├── template.tsx
│   └── projects/
│       └── page.tsx
├── components/
│   ├── cards/
│   │   └── ProjectCard.tsx
│   ├── layout/
│   │   ├── Footer.tsx
│   │   └── Navbar.tsx
│   ├── sections/
│   │   ├── AboutSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── HeroSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   └── SkillsSection.tsx
│   └── ui/
│       ├── BackToTopButton.tsx
│       ├── IntroLoader.tsx
│       ├── Reveal.tsx
│       ├── SectionHeading.tsx
│       ├── SocialLinks.tsx
│       └── ThemeToggle.tsx
├── data/
│   ├── experience.ts
│   ├── profile.ts
│   ├── projects.ts
│   ├── skills.ts
│   └── socialLinks.ts
├── lib/
│   └── utils.ts
└── types/
    └── index.ts

public/
├── brand/
│   ├── lumenix-icon.png
│   └── lumenix-logo.png
├── images/
│   └── raihan-profile.png
└── screenshots/
    ├── home-dark.png
    ├── home-light.png
    ├── projects-dark.png
    └── projects-light.png
```

## Deployment

This project is deployed on Vercel.

Recommended deployment configuration:

```text
Framework Preset: Next.js
Install Command: pnpm install
Build Command: pnpm build
Output Directory: Default
```

## Author

**Raihan Achmad Suhada**

- GitHub: [raihanachmadsuhadadev](https://github.com/raihanachmadsuhadadev)
- Portfolio: [LUMENIX Portfolio](https://raihan-portfolio-website-eight.vercel.app/)
- Email: Available through the portfolio contact section

## License

This project is created for personal portfolio and branding purposes.