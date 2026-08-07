import Link from "next/link";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { projects } from "@/data/projects";

const educationProjects = projects.filter(
  (project) => project.group === "education",
);

const freelanceProjects = projects.filter(
  (project) => project.group === "freelance",
);

function ProjectGroupSection({
  title,
  description,
  items,
}: {
  title: string;
  description: string;
  items: typeof projects;
}) {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-12">
      <div className="mb-6">
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-slate-500">
          Project Category
        </p>

        <h2 className="mt-2 text-2xl font-semibold text-slate-950">
          {title}
        </h2>

        <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500">
          {description}
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {items.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            index={index}
            variant="compact"
          />
        ))}
      </div>
    </section>
  );
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,#dbeafe_0,#f8fafc_35%,#f8fafc_100%)] text-slate-950">
      <Navbar />

      <section className="mx-auto max-w-6xl px-4 pb-10 pt-28 md:pb-12 md:pt-36">
        <Link
          href="/"
          className="mb-8 inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 shadow-sm transition hover:border-slate-300 hover:text-slate-950"
        >
          ← Back to Home
        </Link>

        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-slate-500">
            Projects
          </p>

          <h1 className="text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
            Complete project collection.
          </h1>

          <p className="mt-4 text-base leading-7 text-slate-600">
            A complete collection of my education and freelance projects,
            including decision support systems, inventory systems, workshop
            management, POS applications, report classification, delivery apps,
            and company profile websites.
          </p>
        </div>
      </section>

      <ProjectGroupSection
        title="Education Projects"
        description="Projects developed through campus, academic learning, capstone work, and structured education-based development."
        items={educationProjects}
      />

      <ProjectGroupSection
        title="Freelance Projects"
        description="Projects developed for practical application needs, business workflows, system prototypes, and client-oriented website work."
        items={freelanceProjects}
      />

      <Footer />
    </main>
  );
}