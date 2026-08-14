import { GraduationCap, MapPin } from "lucide-react";
import { education } from "@/data/education";
import { Reveal, RevealItem, StaggerReveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function EducationSection() {
  return (
    <section id="education" className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            label="Education"
            title="Academic background"
            description="My formal education background that supports my foundation in software development, system analysis, and technology-based problem solving."
          />
        </Reveal>

        <StaggerReveal className="mt-10 grid gap-6">
          {education.map((item) => (
            <RevealItem key={item.institution}>
              <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-slate-700 dark:bg-slate-900">
                <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-white dark:bg-white dark:text-slate-950">
                      <GraduationCap className="h-5 w-5" />
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-slate-950 dark:text-white">
                        {item.degree}
                      </h3>

                      <p className="mt-1 text-base font-medium text-slate-700 dark:text-slate-300">
                        {item.institution}
                      </p>

                      <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
                        <span>{item.period}</span>

                        <span className="inline-flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {item.location}
                        </span>
                      </div>

                      <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-600 dark:text-slate-300">
                        {item.description}
                      </p>

                      <ul className="mt-5 grid gap-2">
                        {item.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="flex gap-2 text-sm text-slate-600 dark:text-slate-300"
                          >
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-950 dark:bg-white" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            </RevealItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
