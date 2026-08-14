import type { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "Employee Compensation Decision Support System",
    description:
      "A web-based decision support system for employee KPI evaluation, AHP weighting, peer assessment, leaderboard, salary increase recommendation, and bonus recommendation.",
    techStack: [
      "Laravel",
      "PHP",
      "PostgreSQL",
      "Blade",
      "Vite",
      "Tailwind CSS",
      "Bootstrap",
    ],
    repositoryUrl:
      "https://github.com/raihanachmadsuhadadev/employee-compensation-decision-support-system",
    category: "Decision Support System",
    group: "education",
    type: "featured",
    role: "Fullstack Developer",
    status: "Completed",
    highlights: [
      "Implemented KPI evaluation and compensation recommendation workflow",
      "Built role-based dashboards for HR, Leader, Employee, and Management",
      "Documented application flow, screenshots, and setup instructions",
    ],
  },
  {
    title: "Grocery Delivery Apps",
    description:
      "A grocery and food delivery web application with customer app, admin panel, Express.js REST API, MongoDB, cart, checkout, orders, and product management.",
    techStack: [
      "React",
      "Vite",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
    ],
    repositoryUrl:
      "https://github.com/raihanachmadsuhadadev/grocery-delivery-apps",
    category: "Delivery Application",
    group: "education",
    type: "featured",
    role: "Fullstack Developer",
    status: "Completed",
    highlights: [
      "Built separated customer frontend, admin panel, and backend API",
      "Implemented cart, checkout demo mode, product management, and order tracking",
      "Added admin authentication and protected admin endpoints",
    ],
  },
  {
    title: "Inventory Control System",
    description:
      "A web-based inventory control system for managing products, suppliers, stock transactions, stock monitoring, EOQ and ROP calculations, purchase recommendations, reports, and Excel import.",
    techStack: ["Laravel API", "React", "Vite", "PostgreSQL", "Tailwind CSS"],
    repositoryUrl:
      "https://github.com/raihanachmadsuhadadev/inventory-control-system",
    category: "Inventory System",
    group: "freelance",
    type: "featured",
    role: "Fullstack Developer",
    status: "Completed",
    highlights: [
      "Developed inventory, supplier, hub, and stock transaction modules",
      "Implemented EOQ and ROP stock planning calculations",
      "Built role-based frontend workflow and reporting features",
    ],
  },
  {
    title: "Workshop Insight",
    description:
      "A web-based workshop management system for service transactions, spare parts, stock, reports, transaction pattern analysis, and service package recommendations.",
    techStack: [
      "Laravel API",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Flask",
      "Python",
    ],
    repositoryUrl: "https://github.com/raihanachmadsuhadadev/workshop-insight",
    category: "Workshop Management",
    group: "freelance",
    type: "featured",
    role: "Fullstack Developer",
    status: "Completed",
    highlights: [
      "Built backend, frontend, and analysis service separation",
      "Integrated Flask analysis service for transaction pattern analysis",
      "Developed workshop transaction, stock, recommendation, and report modules",
    ],
  },
  {
    title: "Cake Shop POS System",
    description:
      "A web-based POS and pre-order system for cake shop products, orders, payment proof upload, ingredient stock, FIFO usage, production queue, and reports.",
    techStack: [
      "Laravel API",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    repositoryUrl:
      "https://github.com/raihanachmadsuhadadev/cake-shop-pos-system",
    category: "POS System",
    group: "freelance",
    type: "featured",
    role: "Fullstack Developer",
    status: "Completed",
    highlights: [
      "Developed public pre-order flow and role-based dashboard",
      "Implemented FIFO ingredient usage and production queue workflow",
      "Built reports for order, payment, stock, FIFO, and production monitoring",
    ],
  },
  {
    title: "Public Service Report Classification System",
    description:
      "A public service report classification system with citizen report submission, admin management, status tracking, and SVM-based priority recommendation.",
    techStack: [
      "Laravel API",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Flask",
      "Python",
      "scikit-learn",
    ],
    repositoryUrl:
      "https://github.com/raihanachmadsuhadadev/public-service-report-classification-system",
    category: "Machine Learning",
    group: "freelance",
    type: "featured",
    role: "Fullstack Developer",
    status: "Completed",
    highlights: [
      "Built citizen and admin report workflow",
      "Integrated Flask ML service with Laravel API",
      "Implemented SVM-based report priority recommendation",
    ],
  },
  {
    title: "HARZNET Company Profile",
    description:
      "A company profile website for HARZNET focused on presenting business information, internet services, service coverage, contact access, and brand identity through a modern responsive public website.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    repositoryUrl:
      "https://github.com/raihanachmadsuhadadev/harznet-company-profile",
    category: "Company Profile",
    group: "freelance",
    type: "featured",
    role: "Frontend Developer",
    status: "Completed",
    highlights: [
      "Built responsive public company profile website",
      "Structured service pages, company information, contact, and supporting pages",
      "Prepared screenshot documentation and project README",
    ],
  },

  // Mini Project Portfolio

  {
    title: "Simple Expense Tracker",
    description:
      "A beginner Vanilla JavaScript mini project for recording daily expenses, organizing them by category, calculating total spending, and persisting data using Local Storage.",
    techStack: ["HTML", "CSS", "JavaScript"],
    repositoryUrl:
      "https://github.com/raihanachmadsuhadadev/simple-expense-tracker-js",
    category: "Frontend Fundamentals",
    group: "mini",
    type: "additional",
    role: "Frontend Developer",
    status: "Completed",
    highlights: [
      "Practiced DOM manipulation, event handling, and form validation",
      "Implemented Local Storage persistence",
      "Built responsive desktop and mobile layout",
    ],
  },
  {
    title: "Task Board",
    description:
      "A beginner TypeScript task board application for organizing tasks across Todo, In Progress, and Done columns using typed frontend state.",
    techStack: ["HTML", "CSS", "TypeScript", "Vite"],
    repositoryUrl:
      "https://github.com/raihanachmadsuhadadev/task-board-typescript",
    category: "Frontend Fundamentals",
    group: "mini",
    type: "additional",
    role: "Frontend Developer",
    status: "Completed",
    highlights: [
      "Practiced TypeScript interfaces, union types, and typed DOM handling",
      "Implemented task status workflow and Local Storage persistence",
      "Built responsive task board layout",
    ],
  },
  {
    title: "Contact Manager CRUD",
    description:
      "A beginner PHP Native mini project for managing contacts with database CRUD, PDO, MySQL, server-side validation, sessions, and safe output escaping.",
    techStack: ["PHP", "MySQL", "HTML", "CSS"],
    repositoryUrl:
      "https://github.com/raihanachmadsuhadadev/contact-manager-php",
    category: "Backend API",
    group: "mini",
    type: "additional",
    role: "Backend Developer",
    status: "Completed",
    highlights: [
      "Practiced PHP Native CRUD fundamentals",
      "Implemented PDO prepared statements and server-side validation",
      "Built session-based flash messages and safe output escaping",
    ],
  },
  {
    title: "Data Cleaner CLI",
    description:
      "A beginner Python CLI mini project for cleaning CSV files, normalizing text values, removing duplicate rows, and generating cleaned output files.",
    techStack: ["Python"],
    repositoryUrl:
      "https://github.com/raihanachmadsuhadadev/data-cleaner-python",
    category: "Data Processing",
    group: "mini",
    type: "additional",
    role: "Python Developer",
    status: "Completed",
    highlights: [
      "Practiced Python Standard Library CSV processing",
      "Implemented command-line arguments and file handling",
      "Added cleaning summary and unit testing",
    ],
  },
  {
    title: "Simple URL Shortener API",
    description:
      "A beginner Go REST API mini project for creating short URLs, retrieving stored URL information, redirecting short codes, and persisting data to a JSON file.",
    techStack: ["Go"],
    repositoryUrl:
      "https://github.com/raihanachmadsuhadadev/simple-url-shortener-go",
    category: "Backend API",
    group: "mini",
    type: "additional",
    role: "Backend Developer",
    status: "Completed",
    highlights: [
      "Practiced Go HTTP handlers and REST endpoint structure",
      "Implemented JSON persistence and URL validation",
      "Added API tests with httptest",
    ],
  },
  {
    title: "Console Habit Tracker",
    description:
      "A beginner Dart console mini project for managing daily habits, completing habits once per day, and saving habit data locally as JSON.",
    techStack: ["Dart"],
    repositoryUrl:
      "https://github.com/raihanachmadsuhadadev/console-habit-tracker-dart",
    category: "Mobile Development",
    group: "mini",
    type: "additional",
    role: "Dart Developer",
    status: "Completed",
    highlights: [
      "Practiced Dart classes, lists, maps, and null safety",
      "Implemented terminal menu and JSON file persistence",
      "Added input validation and simple habit progress summary",
    ],
  },
  {
    title: "Simple Notes App",
    description:
      "A beginner Kotlin Android mini project for managing local notes using native Android fundamentals, XML layouts, RecyclerView, ViewBinding, and JSON persistence.",
    techStack: ["Kotlin"],
    repositoryUrl:
      "https://github.com/raihanachmadsuhadadev/simple-notes-kotlin",
    category: "Mobile Development",
    group: "mini",
    type: "additional",
    role: "Android Developer",
    status: "Completed",
    highlights: [
      "Practiced Kotlin and native Android fundamentals",
      "Implemented notes CRUD with local JSON persistence",
      "Built RecyclerView-based note list and editor screens",
    ],
  },
  {
    title: "Task Management API",
    description:
      "An intermediate Laravel REST API mini project demonstrating Sanctum authentication, user-owned task CRUD, authorization, validation, filtering, pagination, and feature testing.",
    techStack: ["Laravel", "PHP", "MySQL"],
    repositoryUrl:
      "https://github.com/raihanachmadsuhadadev/task-management-api-laravel",
    category: "Backend API",
    group: "mini",
    type: "additional",
    role: "Backend Developer",
    status: "Completed",
    highlights: [
      "Implemented Laravel Sanctum authentication",
      "Built user-owned task CRUD with policy authorization",
      "Added filtering, pagination, seeding, and feature tests",
    ],
  },
  {
    title: "Notes REST API with JWT",
    description:
      "An intermediate Node.js and Express.js mini project demonstrating JWT authentication, MongoDB persistence, user-owned notes, query features, centralized errors, and automated API testing.",
    techStack: ["Node.js", "Express.js", "MongoDB", "Mongoose"],
    repositoryUrl:
      "https://github.com/raihanachmadsuhadadev/notes-rest-api-express",
    category: "Backend API",
    group: "mini",
    type: "additional",
    role: "Backend Developer",
    status: "Completed",
    highlights: [
      "Implemented JWT authentication and password hashing",
      "Built user-owned notes CRUD with search, tag, and archive filters",
      "Added centralized error handling and automated API tests",
    ],
  },
  {
    title: "Product Catalog Dashboard",
    description:
      "An intermediate React mini project for product listing, reusable component architecture, search, filtering, sorting, responsive UI, and behavior-focused automated testing.",
    techStack: ["React", "Vite", "JavaScript"],
    repositoryUrl:
      "https://github.com/raihanachmadsuhadadev/product-catalog-react",
    category: "Frontend Fundamentals",
    group: "mini",
    type: "additional",
    role: "Frontend Developer",
    status: "Completed",
    highlights: [
      "Practiced reusable React component architecture",
      "Implemented search, category filtering, and price sorting",
      "Added automated UI behavior tests",
    ],
  },
  {
    title: "Knowledge Journal",
    description:
      "An intermediate Next.js and TypeScript mini project for a content-focused editorial website with typed local articles, search, filtering, static article generation, and dynamic metadata.",
    techStack: ["Next.js", "React", "TypeScript"],
    repositoryUrl:
      "https://github.com/raihanachmadsuhadadev/knowledge-journal-nextjs",
    category: "Frontend Fundamentals",
    group: "mini",
    type: "additional",
    role: "Frontend Developer",
    status: "Completed",
    highlights: [
      "Practiced Next.js App Router and dynamic routes",
      "Implemented typed local content architecture",
      "Added article search, category filtering, and static generation",
    ],
  },
  {
    title: "Stockroom Inventory",
    description:
      "A beginner to intermediate Vue 3 mini project for practicing reactive inventory state, Composition API, Local Storage persistence, reusable components, and automated UI testing.",
    techStack: ["Vue.js", "Vite", "JavaScript"],
    repositoryUrl:
      "https://github.com/raihanachmadsuhadadev/stockroom-inventory-vue",
    category: "Frontend Fundamentals",
    group: "mini",
    type: "additional",
    role: "Frontend Developer",
    status: "Completed",
    highlights: [
      "Practiced Vue 3 Composition API and reactive state",
      "Implemented inventory search, category filter, and stock controls",
      "Added Local Storage persistence and UI tests",
    ],
  },
  {
    title: "Expense Tracker API",
    description:
      "An intermediate Flask REST API mini project focused on expense CRUD, ORM persistence, filtering, database aggregation, validation, centralized JSON errors, and automated testing.",
    techStack: ["Python", "Flask", "SQLite"],
    repositoryUrl:
      "https://github.com/raihanachmadsuhadadev/expense-tracker-api-flask",
    category: "Backend API",
    group: "mini",
    type: "additional",
    role: "Backend Developer",
    status: "Completed",
    highlights: [
      "Built Flask REST API with SQLAlchemy persistence",
      "Implemented category and date-range filtering",
      "Added summary aggregation and automated API tests",
    ],
  },
  {
    title: "Pocket Notes",
    description:
      "A beginner Flutter and Dart mini project for practicing mobile UI, local state, navigation, form handling, model serialization, persistence, and automated testing.",
    techStack: ["Flutter", "Dart"],
    repositoryUrl:
      "https://github.com/raihanachmadsuhadadev/pocket-notes-flutter",
    category: "Mobile Development",
    group: "mini",
    type: "additional",
    role: "Mobile Developer",
    status: "Completed",
    highlights: [
      "Built note list, editor, delete confirmation, and empty state",
      "Implemented Shared Preferences local persistence",
      "Added unit and widget tests",
    ],
  },
  {
    title: "Focus Queue",
    description:
      "A beginner React Native and Expo mini project focused on task list management, modal interaction, task filtering, conditional rendering, and automated UI testing.",
    techStack: ["React Native", "JavaScript"],
    repositoryUrl:
      "https://github.com/raihanachmadsuhadadev/focus-queue-react-native",
    category: "Mobile Development",
    group: "mini",
    type: "additional",
    role: "Mobile Developer",
    status: "Completed",
    highlights: [
      "Built task list, add task modal, completion toggle, and filters",
      "Practiced React Native component fundamentals",
      "Added automated UI tests with React Native Testing Library",
    ],
  },
  {
    title: "Student Score Predictor",
    description:
      "A beginner machine learning mini project using Python and scikit-learn to demonstrate a reproducible regression workflow from CSV loading to evaluation and saved result artifacts.",
    techStack: ["Python", "scikit-learn"],
    repositoryUrl:
      "https://github.com/raihanachmadsuhadadev/student-score-prediction-sklearn",
    category: "Machine Learning",
    group: "mini",
    type: "additional",
    role: "Machine Learning Developer",
    status: "Completed",
    highlights: [
      "Built script-first regression workflow",
      "Implemented preprocessing, train/test split, and Linear Regression",
      "Saved metrics, prediction output, and evaluation artifacts",
    ],
  },
  {
    title: "Report Priority Classifier API",
    description:
      "An intermediate AI/ML mini project that integrates a trained scikit-learn text classifier with a Flask REST API for synthetic Indonesian report priority classification.",
    techStack: ["Python", "Flask", "scikit-learn"],
    repositoryUrl:
      "https://github.com/raihanachmadsuhadadev/report-priority-classifier-api",
    category: "Machine Learning",
    group: "mini",
    type: "additional",
    role: "AI/ML Backend Developer",
    status: "Completed",
    highlights: [
      "Built TF-IDF and Logistic Regression classification pipeline",
      "Served trained model through Flask REST API",
      "Separated training lifecycle from serving lifecycle",
    ],
  },
  {
    title: "Machine Maintenance Predictor",
    description:
      "An intermediate AI/ML and web integration mini project combining a persisted scikit-learn model, Flask backend, Jinja template, and interactive Vanilla JavaScript dashboard.",
    techStack: ["Python", "Flask", "scikit-learn", "JavaScript"],
    repositoryUrl:
      "https://github.com/raihanachmadsuhadadev/machine-maintenance-prediction-dashboard",
    category: "Machine Learning",
    group: "mini",
    type: "additional",
    role: "AI/ML Web Developer",
    status: "Completed",
    highlights: [
      "Built Random Forest machine maintenance classifier",
      "Integrated model prediction with Flask dashboard",
      "Displayed prediction result, confidence, and temporary history",
    ],
  },
  {
    title: "AI Chat Assistant",
    description:
      "An advanced AI integration mini project demonstrating secure AI API integration through a Next.js server-side route handler with chat UI, prompt template, context handling, validation, and error states.",
    techStack: ["Next.js", "React", "TypeScript"],
    repositoryUrl:
      "https://github.com/raihanachmadsuhadadev/ai-chat-assistant-nextjs",
    category: "AI Integration",
    group: "mini",
    type: "additional",
    role: "AI Integration Developer",
    status: "Completed",
    highlights: [
      "Integrated AI provider API through server-side route handler",
      "Built chat UI with loading, error state, and clear chat behavior",
      "Implemented prompt template and validation layer",
    ],
  },
  {
    title: "OpsDesk — Inventory & Procurement Mini ERP",
    description:
      "An advanced fullstack mini project demonstrating a Laravel REST API integrated with a responsive Next.js operations dashboard for inventory and procurement workflows.",
    techStack: ["Laravel API", "Next.js", "TypeScript", "PostgreSQL"],
    repositoryUrl:
      "https://github.com/raihanachmadsuhadadev/mini-erp-laravel-nextjs",
    category: "Fullstack Application",
    group: "mini",
    type: "additional",
    role: "Fullstack Developer",
    status: "Completed",
    highlights: [
      "Built Laravel API and Next.js dashboard integration",
      "Implemented supplier, inventory, purchase order, and stock movement workflows",
      "Added backend and frontend automated tests",
    ],
  },
  {
    title: "SpendLog — Mobile Expense Tracker",
    description:
      "An advanced mobile and backend mini project for recording and reviewing personal expenses through a Flutter Android client integrated with an authenticated Laravel REST API.",
    techStack: ["Flutter", "Dart", "Laravel API", "PostgreSQL"],
    repositoryUrl:
      "https://github.com/raihanachmadsuhadadev/mobile-expense-flutter-api",
    category: "Mobile Development",
    group: "mini",
    type: "additional",
    role: "Mobile Fullstack Developer",
    status: "Completed",
    highlights: [
      "Built Flutter expense app integrated with Laravel API",
      "Implemented authentication, expense CRUD, summary, filters, and pagination",
      "Stored authentication token securely on mobile client",
    ],
  },
  {
    title: "SubTrack — Subscription Management API",
    description:
      "An intermediate to advanced Go backend mini project using Chi, pgx, PostgreSQL, and raw SQL to manage subscription plans, customers, subscription lifecycle rules, and recurring-revenue summary.",
    techStack: ["Go", "PostgreSQL"],
    repositoryUrl:
      "https://github.com/raihanachmadsuhadadev/subscription-api-go-postgresql",
    category: "Backend API",
    group: "mini",
    type: "additional",
    role: "Backend Developer",
    status: "Completed",
    highlights: [
      "Built REST API with Go, Chi, pgx, PostgreSQL, and raw SQL",
      "Implemented subscription lifecycle and business validation rules",
      "Added summary endpoint and automated service/HTTP tests",
    ],
  },
  {
    title: "HelpPulse — Real-time Helpdesk",
    description:
      "An advanced real-time mini project combining Express REST API, PostgreSQL persistence, raw WebSocket communication, ticket-scoped chat rooms, and a lightweight Vanilla JavaScript support console.",
    techStack: ["Node.js", "Express.js", "PostgreSQL", "JavaScript"],
    repositoryUrl:
      "https://github.com/raihanachmadsuhadadev/realtime-helpdesk-node-websocket",
    category: "Real-time Application",
    group: "mini",
    type: "additional",
    role: "Backend Realtime Developer",
    status: "Completed",
    highlights: [
      "Built REST API and raw WebSocket communication",
      "Implemented ticket lifecycle, room-based chat, and persistence-before-broadcast behavior",
      "Added automated HTTP and WebSocket tests",
    ],
  },
];
