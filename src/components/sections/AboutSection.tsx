import { SectionHeading } from "@/components/ui/SectionHeading";

export function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-20">
      <SectionHeading
        label="About"
        title="Building practical digital systems with a developer and project mindset."
        description="I focus on creating web applications, admin dashboards, APIs, and database-driven systems while also paying attention to requirements, documentation, and delivery process."
      />

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h3 className="text-xl font-semibold text-slate-950">
            Who I Am
          </h3>
          <p className="mt-4 leading-7 text-slate-600">
            I am a Fullstack Developer and Project Manager with interest in
            business applications, information systems, technical documentation,
            and structured project execution.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h3 className="text-xl font-semibold text-slate-950">
            My Approach
          </h3>
          <p className="mt-4 leading-7 text-slate-600">
            I like to break down complex ideas into clear requirements,
            manageable tasks, clean interfaces, structured APIs, and maintainable
            project documentation.
          </p>
        </div>
      </div>
    </section>
  );
}