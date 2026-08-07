import { SectionHeading } from "@/components/ui/SectionHeading";
import { experiences } from "@/data/experience";

export function ExperienceSection() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <SectionHeading
        label="Experience"
        title="Professional experience across development, documentation, and IT operations."
        description="A short overview of my work activities, combining software development, project documentation, and technical operations experience."
      />

      <div className="relative">
        <div className="absolute left-4 top-0 hidden h-full w-px bg-slate-200 md:block" />

        <div className="space-y-5">
          {experiences.map((experience, index) => (
            <article
              key={`${experience.role}-${experience.company}`}
              className="relative rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(15,23,42,0.08)] md:ml-12"
            >
              <div className="absolute -left-[3.75rem] top-8 hidden h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-sm font-semibold text-slate-950 shadow-sm md:flex">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="mb-3 inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                    {experience.type}
                  </p>

                  <h3 className="text-2xl font-semibold tracking-tight text-slate-950">
                    {experience.role}
                  </h3>

                  <p className="mt-2 text-sm font-medium text-slate-600">
                    {experience.company}
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-500 md:text-right">
                  <p>{experience.period}</p>
                  <p>{experience.location}</p>
                </div>
              </div>

              <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-600">
                {experience.description.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-blue-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}