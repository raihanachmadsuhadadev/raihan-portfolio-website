import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";

const featuredProjects = projects.filter(
  (project) => project.category !== "Company Profile",
);

const additionalProjects = projects.filter(
  (project) => project.category === "Company Profile",
);

export function ProjectsSection() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-24">
      <SectionHeading
        label="Projects"
        title="Selected projects built around real application needs."
        description="A collection of web applications, business systems, admin dashboards, APIs, and supporting company profile projects."
        align="center"
      />

      <div className="mb-8 flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-blue-600">
            Featured Work
          </p>
          <h3 className="mt-2 text-2xl font-semibold text-slate-950">
            Main Projects
          </h3>
        </div>

        <p className="hidden max-w-sm text-right text-sm leading-6 text-slate-500 md:block">
          Projects focused on business process, dashboard, API, database, and
          system-oriented development.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {featuredProjects.map((project, index) => (
          <article
            key={project.title}
            className="group flex min-h-[360px] flex-col rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_25px_70px_rgba(15,23,42,0.1)]"
          >
            <div className="flex items-start justify-between gap-4">
              <p className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
                {project.category}
              </p>

              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-sm font-semibold text-white">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            <h3 className="mt-6 text-2xl font-semibold tracking-tight text-slate-950">
              {project.title}
            </h3>

            <p className="mt-4 flex-1 leading-7 text-slate-600">
              {project.description}
            </p>

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

            <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-5">
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
        ))}
      </div>

      {additionalProjects.length > 0 ? (
        <div className="mt-16">
          <div className="mb-8">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-blue-600">
              Additional Projects
            </p>
            <h3 className="mt-2 text-2xl font-semibold text-slate-950">
              Supporting Work
            </h3>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500">
              Additional projects that support frontend, landing page, and
              company profile development experience.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {additionalProjects.map((project) => (
              <article
                key={project.title}
                className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
              >
                <p className="mb-4 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600 w-fit">
                  {project.category}
                </p>

                <h3 className="text-xl font-semibold text-slate-950">
                  {project.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600"
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
        </div>
      ) : null}
    </section>
  );
}