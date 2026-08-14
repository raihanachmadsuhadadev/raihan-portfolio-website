import type { Project } from "@/types";
import { ArrowUpRight } from "lucide-react";
import { createElement } from "react";
import type { IconType } from "react-icons";
import * as SiIcons from "react-icons/si";

type ProjectCardProps = {
  project: Project;
  index?: number;
  variant?: "featured" | "compact";
};

const groupLabel = {
  education: "Education Project",
  mini: "Mini Project",
  freelance: "Freelance Project",
};

const techIconMap: Record<string, string> = {
  Laravel: "SiLaravel",
  "Laravel API": "SiLaravel",
  PHP: "SiPhp",
  PostgreSQL: "SiPostgresql",
  Blade: "SiLaravel",
  Vite: "SiVite",
  "Tailwind CSS": "SiTailwindcss",
  Bootstrap: "SiBootstrap",

  React: "SiReact",
  "React.js": "SiReact",
  "Next.js": "SiNextdotjs",
  TypeScript: "SiTypescript",

  Flask: "SiFlask",
  Python: "SiPython",
  "scikit-learn": "SiScikitlearn",

  "Node.js": "SiNodedotjs",
  "Express.js": "SiExpress",
  MongoDB: "SiMongodb",
  Mongoose: "SiMongodb",
};

function getTechIcon(tech: string): IconType | null {
  const iconName = techIconMap[tech];

  if (!iconName) {
    return null;
  }

  const icons = SiIcons as Record<string, IconType | undefined>;
  return icons[iconName] ?? null;
}

function TechIcon({ tech }: { tech: string }) {
  const Icon = getTechIcon(tech);

  if (!Icon) {
    return null;
  }

  return (
    <span
      title={tech}
      aria-label={tech}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-600 transition hover:border-slate-300 hover:bg-white hover:text-slate-950 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-slate-500 dark:hover:bg-slate-700 dark:hover:text-white"
    >
      {createElement(Icon, {
        className: "h-4 w-4",
        "aria-hidden": true,
      })}
    </span>
  );
}

export function ProjectCard({
  project,
  index,
  variant = "featured",
}: ProjectCardProps) {
  const isCompact = variant === "compact";

  return (
    <article
      className={`group flex h-full flex-col rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_20px_60px_rgba(15,23,42,0.08)] dark:border-slate-700 dark:bg-slate-900 dark:hover:border-slate-600 ${
        isCompact ? "" : "min-h-[310px]"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
            {groupLabel[project.group]}
          </span>

          <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
            {project.status}
          </span>
        </div>

        {typeof index === "number" ? (
          <span className="text-sm font-semibold text-slate-400 dark:text-slate-500">
            {String(index + 1).padStart(2, "0")}
          </span>
        ) : null}
      </div>

      <div className="mt-5">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
          {project.category}
        </p>

        <h3 className="mt-3 text-xl font-semibold tracking-tight text-slate-950 dark:text-white">
          {project.title}
        </h3>

        <p className="mt-2 text-sm font-medium text-slate-500 dark:text-slate-400">
          {project.role}
        </p>

        <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
          {project.description}
        </p>
      </div>

      <div className="mt-6 flex flex-wrap gap-2 pb-6">
        {project.techStack.map((tech) => (
          <TechIcon key={tech} tech={tech} />
        ))}
      </div>

      <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-5 dark:border-slate-700">
        <span className="text-sm text-slate-500 dark:text-slate-400">
          Repository
        </span>

        <a
          href={project.repositoryUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-950 transition hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
        >
          View
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </article>
  );
}
