import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";

export function ProjectsSection() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-20">
      <SectionHeading
        label="Projects"
        title="Selected projects and development work."
        description="A collection of web applications, business systems, admin dashboards, APIs, and company profile projects."
      />

      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="flex flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-blue-600">
              {project.category}
            </p>

            <h3 className="text-xl font-semibold text-slate-950">
              {project.title}
            </h3>

            <p className="mt-4 flex-1 leading-7 text-slate-600">
              {project.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href={project.repositoryUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex text-sm font-semibold text-slate-950 transition hover:text-blue-600"
            >
              View Repository →
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}