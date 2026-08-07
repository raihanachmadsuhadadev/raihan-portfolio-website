import type { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "Employee Compensation Decision Support System",
    description:
      "Web-based decision support system for employee KPI evaluation, AHP weighting, peer assessment, leaderboard, salary increase recommendation, and bonus recommendation.",
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
  },
  {
    title: "Inventory Control System",
    description:
      "Web-based inventory control system for managing products, suppliers, stock transactions, stock monitoring, purchase recommendations, reports, and Excel import.",
    techStack: ["Laravel API", "React", "Vite", "PostgreSQL", "Laravel Sanctum"],
    repositoryUrl:
      "https://github.com/raihanachmadsuhadadev/inventory-control-system",
    category: "Inventory System",
  },
  {
    title: "Workshop Insight",
    description:
      "Web-based workshop management system for service transactions, spare parts, stock, reports, transaction pattern analysis, and service package recommendations.",
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
  },
  {
    title: "Cake Shop POS System",
    description:
      "Web-based POS and pre-order system for cake shop products, orders, payment proof upload, ingredient stock, FIFO usage, production queue, and reports.",
    techStack: ["Laravel API", "Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    repositoryUrl:
      "https://github.com/raihanachmadsuhadadev/cake-shop-pos-system",
    category: "POS System",
  },
  {
    title: "Public Service Report Classification System",
    description:
      "Web-based public service report classification system with citizen report submission, admin management, status tracking, and SVM-based priority recommendation.",
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
  },
  {
    title: "Grocery Delivery Apps",
    description:
      "Grocery delivery web application with customer app, admin panel, Express.js REST API, MongoDB, cart, checkout, orders, and product management.",
    techStack: ["React", "Vite", "Node.js", "Express.js", "MongoDB", "Mongoose"],
    repositoryUrl:
      "https://github.com/raihanachmadsuhadadev/grocery-delivery-apps",
    category: "Delivery Application",
  },
  {
    title: "HARZNET Company Profile",
    description:
      "Company profile website for HARZNET built with Next.js, focused on presenting business information, services, coverage, contact, and brand identity.",
    techStack: ["Next.js", "React"],
    repositoryUrl:
      "https://github.com/raihanachmadsuhadadev/harznet-company-profile",
    category: "Company Profile",
  },
];