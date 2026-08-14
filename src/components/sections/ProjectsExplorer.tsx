"use client";

import type { Project } from "@/types";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { projects } from "@/data/projects";
import { Reveal, RevealItem, StaggerReveal } from "@/components/ui/Reveal";

type FilterValue = "all" | "education" | "mini" | "freelance";

const filterOptions: {
  label: string;
  value: Exclude<FilterValue, "all">;
}[] = [
  {
    label: "Education",
    value: "education",
  },
  {
    label: "Mini Project",
    value: "mini",
  },
  {
    label: "Freelance Project",
    value: "freelance",
  },
];

export function ProjectsExplorer() {
  const [activeFilter, setActiveFilter] = useState<FilterValue>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = useMemo(() => {
    const normalizedSearch = searchQuery.trim().toLowerCase();

    return projects.filter((project) => {
      const matchesFilter =
        activeFilter === "all" || project.group === activeFilter;

      const searchableContent = [
        project.title,
        project.category,
        project.role,
        project.description,
        project.status,
        project.group,
        ...project.techStack,
      ]
        .join(" ")
        .toLowerCase();

      const matchesSearch =
        normalizedSearch.length === 0 ||
        searchableContent.includes(normalizedSearch);

      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, searchQuery]);

  const educationProjects = filteredProjects.filter(
    (project) => project.group === "education",
  );

  const miniProjects = filteredProjects.filter(
    (project) => project.group === "mini",
  );

  const freelanceProjects = filteredProjects.filter(
    (project) => project.group === "freelance",
  );

  const hasProjects = filteredProjects.length > 0;

  return (
    <section className="mx-auto max-w-6xl px-4 pb-20">
      <Reveal className="mb-10 rounded-3xl border border-slate-200 bg-white/80 p-5 shadow-sm backdrop-blur dark:border-slate-700 dark:bg-slate-900/80">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-xl font-semibold text-slate-950 dark:text-white">
              Explore Projects
            </h2>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-300">
              Filter projects by category or search by title, role, category,
              description, and technology stack.
            </p>
          </div>

          <div className="relative w-full lg:max-w-sm">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

            <input
              type="search"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search projects..."
              className="h-12 w-full rounded-full border border-slate-200 bg-white pl-11 pr-4 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:ring-4 focus:ring-slate-200/70 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200 dark:focus:border-slate-500 dark:focus:ring-slate-700/60"
            />
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {filterOptions.map((filter) => {
            const isActive = activeFilter === filter.value;

            return (
              <button
                key={filter.value}
                type="button"
                onClick={() => setActiveFilter(isActive ? "all" : filter.value)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? "border-slate-950 bg-slate-950 text-white dark:border-white dark:bg-white dark:text-slate-950"
                    : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-950 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-300 dark:hover:border-slate-500 dark:hover:text-white"
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>
      </Reveal>

      {!hasProjects ? (
        <div className="rounded-3xl border border-dashed border-slate-300 bg-white/70 p-10 text-center dark:border-slate-700 dark:bg-slate-900/70">
          <h3 className="text-lg font-semibold text-slate-950 dark:text-white">
            No projects found
          </h3>

          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            Try another keyword or choose a different project category.
          </p>
        </div>
      ) : (
        <div className="space-y-16">
          {educationProjects.length > 0 ? (
            <ProjectGroupSection
              title="Education Projects"
              description="Academic and learning-based projects developed to strengthen technical fundamentals and software development practice."
              projects={educationProjects}
            />
          ) : null}

          {miniProjects.length > 0 ? (
            <ProjectGroupSection
              title="Mini Projects"
              description="Focused practice projects built to demonstrate specific technical skills across frontend, backend, mobile, AI, and API development."
              projects={miniProjects}
            />
          ) : null}

          {freelanceProjects.length > 0 ? (
            <ProjectGroupSection
              title="Freelance Projects"
              description="Projects developed for practical application needs, business workflows, system prototypes, and client-oriented website work."
              projects={freelanceProjects}
            />
          ) : null}
        </div>
      )}
    </section>
  );
}

type ProjectGroupSectionProps = {
  title: string;
  description: string;
  projects: Project[];
};

function ProjectGroupSection({
  title,
  description,
  projects,
}: ProjectGroupSectionProps) {
  return (
    <div>
      <div className="mb-7">
        <h2 className="text-2xl font-semibold text-slate-950 dark:text-white">
          {title}
        </h2>

        <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600 dark:text-slate-300">
          {description}
        </p>
      </div>

      <StaggerReveal key={projects.map((project) => project.title).join("|")} className="grid gap-6 lg:grid-cols-2">
        {projects.map((project, index) => (
          <RevealItem key={project.title}>
          <ProjectCard key={project.title} project={project} index={index} />
          </RevealItem>
        ))}
      </StaggerReveal>
    </div>
  );
}
