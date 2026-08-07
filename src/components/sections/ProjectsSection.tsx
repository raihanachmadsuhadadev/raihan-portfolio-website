import { ProjectCard } from "@/components/cards/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";

const featuredProjects = projects.filter(
  (project) => project.type === "featured",
);

const additionalProjects = projects.filter(
  (project) => project.type === "additional",
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
          <ProjectCard
            key={project.title}
            project={project}
            index={index}
            variant="featured"
          />
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
              <ProjectCard
                key={project.title}
                project={project}
                variant="compact"
              />
            ))}
          </div>
        </div>
      ) : null}
    </section>
  );
}