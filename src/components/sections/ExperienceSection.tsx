import { SectionHeading } from "@/components/ui/SectionHeading";
import { experiences } from "@/data/experience";

export function ExperienceSection() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-4 py-20">
      <SectionHeading
        label="Experience"
        title="Work experience and professional activities."
        description="A short overview of my experience in software development, project work, and IT/network operations."
      />

      <div className="space-y-5">
        {experiences.map((experience) => (
          <article
            key={`${experience.role}-${experience.company}`}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
              <div>
                <h3 className="text-xl font-semibold text-slate-950">
                  {experience.role}
                </h3>
                <p className="mt-1 text-sm font-medium text-slate-600">
                  {experience.company} · {experience.type}
                </p>
              </div>

              <div className="text-sm text-slate-500 md:text-right">
                <p>{experience.period}</p>
                <p>{experience.location}</p>
              </div>
            </div>

            <ul className="mt-5 space-y-2 text-sm leading-6 text-slate-600">
              {experience.description.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}