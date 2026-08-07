import type { Project } from "@/types";

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
      className={`group flex flex-col rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_25px_70px_rgba(15,23,42,0.1)] ${
        isCompact ? "" : "min-h-[420px]"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          <p className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
            {project.category}
          </p>

          <p className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
            {project.status}
          </p>
        </div>

        {typeof index === "number" ? (
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-950 text-sm font-semibold text-white">
            {String(index + 1).padStart(2, "0")}
          </span>
        ) : null}
      </div>

      <h3 className="mt-6 text-2xl font-semibold tracking-tight text-slate-950">
        {project.title}
      </h3>

      <p className="mt-2 text-sm font-medium text-slate-500">
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
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-5">
        <span className="text-sm text-slate-500">Repository</span>

        <a
          href={project.repositoryUrl}
          target="_blank"
          rel="noreferrer"
          className="text-sm font-semibold text-slate-950 transition hover:text-blue-600"
        >
          View Project →
        </a>
      </div>
    </article>
  );
}