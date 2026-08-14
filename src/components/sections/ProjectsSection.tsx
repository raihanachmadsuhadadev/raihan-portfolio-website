import { ProjectCard } from "@/components/cards/ProjectCard";
import { projects } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { RevealItem, StaggerReveal } from "@/components/ui/Reveal";

const educationProjects = projects
  .filter((project) => project.group === "education")
  .slice(0, 2);

const freelanceProjects = projects
  .filter((project) => project.group === "freelance")
  .slice(0, 2);

function ProjectPreviewGroup({
  title,
  description,
  items,
  startIndex = 0,
}: {
  title: string;
  description: string;
  items: typeof projects;
  startIndex?: number;
}) {
  return (
    <div>
      <div className="mb-5">
        <h3 className="text-xl font-semibold text-slate-950">{title}</h3>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
          {description}
        </p>
      </div>

      <StaggerReveal className="grid gap-5 md:grid-cols-2">
        {items.map((project, index) => (
          <RevealItem key={project.title}>
          <ProjectCard
            project={project}
            index={startIndex + index}
            variant="compact"
          />
          </RevealItem>
        ))}
      </StaggerReveal>
    </div>
  );
}

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl px-4 pb-16 pt-4 md:pb-20 md:pt-6"
    >
      <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-slate-500">
            Projects
          </p>

          <h2 className="text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
            Selected project work.
          </h2>

          <p className="mt-3 text-base leading-7 text-slate-600">
            A short selection of education and freelance projects that represent
            my work in web applications, admin dashboards, APIs, and
            database-driven systems.
          </p>
        </div>

        <Link
          href="/projects"
          className="inline-flex w-fit items-center gap-2 rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          View All Projects
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="space-y-10">
        <ProjectPreviewGroup
          title="Education Projects"
          description="Projects developed through campus, academic learning, capstone work, and structured education-based development."
          items={educationProjects}
          startIndex={0}
        />

        <ProjectPreviewGroup
          title="Freelance Projects"
          description="Projects developed for practical application needs, business workflows, system prototypes, and client-oriented website work."
          items={freelanceProjects}
          startIndex={educationProjects.length}
        />
      </div>
    </section>
  );
}
