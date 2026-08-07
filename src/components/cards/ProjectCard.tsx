import type { Project } from "@/types";
import { ArrowUpRight, CheckCircle2, Code2, Layers3 } from "lucide-react";

type ProjectCardProps = {
  project: Project;
  index?: number;
  variant?: "featured" | "compact";
};

export function ProjectCard({
  project,
  index,
  variant = "featured",
}: ProjectCardProps) {
  const isCompact = variant === "compact";

  return (
    <article
      className={`group relative flex flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_25px_70px_rgba(15,23,42,0.1)] ${
        isCompact ? "" : "min-h-[430px]"
      }`}
    >
      <div className="absolute right-0 top-0 h-28 w-28 rounded-bl-full bg-blue-50 opacity-70 transition group-hover:bg-blue-100" />

      <div className="relative flex items-start justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          <p className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
            <Layers3 className="h-3.5 w-3.5" />
            {project.category}
          </p>

          <p className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
            {project.status}
          </p>
        </div>

        {typeof index === "number" ? (
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-950 text-sm font-semibold text-white shadow-sm">
            {String(index + 1).padStart(2, "0")}
          </span>
        ) : null}
      </div>

      <div className="relative">
        <h3 className="mt-6 text-2xl font-semibold tracking-tight text-slate-950">
          {project.title}
        </h3>

        <p className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-slate-500">
          <Code2 className="h-4 w-4" />
          {project.role}
        </p>

        <p className="mt-4 leading-7 text-slate-600">
          {project.description}
        </p>

        <div className="mt-6">
          <p className="text-sm font-semibold text-slate-950">
            Key Highlights
          </p>

          <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
            {project.highlights.map((item) => (
              <li key={item} className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600 transition group-hover:border-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="relative mt-auto flex items-center justify-between border-t border-slate-100 pt-5">
        <span className="text-sm text-slate-500">Repository</span>

        <a
          href={project.repositoryUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-950 transition hover:text-blue-600"
        >
          View Project
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </article>
  );
}