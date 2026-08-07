import { SectionHeading } from "@/components/ui/SectionHeading";
import { skillGroups } from "@/data/skills";

export function SkillsSection() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-24">
      <SectionHeading
        label="Skills"
        title="A growing technical stack for building modern digital products."
        description="My current skill set covers frontend, backend, database, API integration, deployment fundamentals, security basics, AI-assisted workflow, and development tools."
        align="center"
      />

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <div
            key={group.category}
            className="group rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-lg font-semibold text-slate-950">
                {group.category}
              </h3>

              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-500">
                {group.skills.length}
              </span>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600 transition group-hover:border-slate-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-[2rem] border border-slate-200 bg-white p-6 text-center shadow-sm">
        <p className="text-sm leading-7 text-slate-600">
          I keep improving my technical foundation through real projects,
          documentation, deployment practice, and AI-assisted development
          workflow.
        </p>
      </div>
    </section>
  );
}