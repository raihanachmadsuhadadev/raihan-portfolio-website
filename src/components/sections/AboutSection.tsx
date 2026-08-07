import { SectionHeading } from "@/components/ui/SectionHeading";
import { profile } from "@/data/profile";

const focusItems = [
  "Web Applications",
  "Admin Dashboards",
  "Business Systems",
  "API Development",
  "Project Documentation",
  "Technical Planning",
];

const stats = [
  { label: "Main Role", value: "Fullstack" },
  { label: "Focus", value: "Business Apps" },
  { label: "Workflow", value: "Code + Docs" },
];

export function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-24">
      <SectionHeading
        label="About"
        title="I build digital products with clear structure, practical execution, and business context."
        description="My work combines fullstack development, project management, system analysis, and documentation to create applications that are not only functional, but also easier to understand, maintain, and improve."
      />

      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2rem] border border-white/70 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
          <div className="rounded-[1.5rem] bg-slate-950 p-8 text-white">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
              {profile.shortName}
            </p>

            <h3 className="mt-6 text-3xl font-semibold">
              {profile.name}
            </h3>

            <p className="mt-3 text-slate-300">
              {profile.role}
            </p>

            <div className="mt-8 space-y-4">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                    {item.label}
                  </p>
                  <p className="mt-1 text-lg font-semibold text-white">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-6">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-slate-950">
              Developer with a project mindset.
            </h3>

            <p className="mt-4 leading-8 text-slate-600">
              I enjoy transforming ideas and requirements into structured
              applications. My focus is not only writing code, but also
              understanding the workflow, defining the data structure, preparing
              documentation, and making sure the project can be delivered
              clearly.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              I am currently strengthening my fullstack foundation while
              expanding into mobile development, AI-assisted workflow, DevOps,
              and cybersecurity fundamentals.
            </p>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-950">
              Current Focus
            </h3>

            <div className="mt-5 flex flex-wrap gap-3">
              {focusItems.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-600"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}