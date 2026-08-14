import { BackToTopButton } from "@/components/ui/BackToTopButton";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { ProjectsExplorer } from "@/components/sections/ProjectsExplorer";
import { Reveal } from "@/components/ui/Reveal";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950 dark:bg-slate-950 dark:text-white">
      <Navbar />

      <section className="px-4 pb-10 pt-32 md:pt-36">
        <Reveal className="mx-auto max-w-6xl" y={24}>
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
            Projects
          </p>

          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl dark:text-white">
            Selected works and technical projects.
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600 md:text-lg dark:text-slate-300">
            A curated collection of academic projects, freelance projects, and
            technical explorations across web development, backend APIs, mobile
            development, AI, and business systems.
          </p>
        </Reveal>
      </section>

      <ProjectsExplorer />

      <Footer />
      <BackToTopButton />
    </main>
  );
}
