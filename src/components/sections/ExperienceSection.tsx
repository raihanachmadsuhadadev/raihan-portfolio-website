import { SectionHeading } from "@/components/ui/SectionHeading";
import { experiences } from "@/data/experience";
import { BriefcaseBusiness, CalendarDays, MapPin } from "lucide-react";
import { RevealItem, StaggerReveal } from "@/components/ui/Reveal";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-6xl px-4 pb-16 pt-4 md:pb-20 md:pt-6"
    >
      <SectionHeading
        label="Experience"
        title="Professional experience across development, project management, and IT operations."
        description="A summary of my experience in managing development work, building digital systems, preparing documentation, and supporting technical operations."
        align="center"
      />

      <div className="relative mx-auto max-w-5xl">
        <div className="absolute left-4 top-0 h-full w-px bg-slate-200 md:left-1/2 md:-translate-x-1/2" />

        <StaggerReveal className="space-y-6">
          {experiences.map((experience, index) => {
            const isLeft = index % 2 === 0;

            return (
              <RevealItem
                key={`${experience.role}-${experience.company}`}
                className="relative grid gap-4 pl-12 md:grid-cols-[1fr_72px_1fr] md:items-start md:gap-0 md:pl-0"
              >
                <div className="absolute left-0 top-7 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-xs font-semibold text-slate-950 shadow-sm md:left-1/2 md:h-11 md:w-11 md:-translate-x-1/2">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {isLeft ? (
                  <>
                    <ExperienceCard experience={experience} />
                    <div className="hidden md:block" />
                    <div className="hidden md:block" />
                  </>
                ) : (
                  <>
                    <div className="hidden md:block" />
                    <div className="hidden md:block" />
                    <ExperienceCard experience={experience} />
                  </>
                )}
              </RevealItem>
            );
          })}
        </StaggerReveal>
      </div>
    </section>
  );
}

function ExperienceCard({
  experience,
}: {
  experience: (typeof experiences)[number];
}) {
  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
            <BriefcaseBusiness className="h-3.5 w-3.5" />
            {experience.type}
          </p>

          <h3 className="mt-4 text-xl font-semibold tracking-tight text-slate-950">
            {experience.role}
          </h3>

          <p className="mt-1 text-sm font-medium text-slate-600">
            {experience.company}
          </p>
        </div>
      </div>

      <div className="mt-5 grid gap-2 text-sm text-slate-500">
        <p className="inline-flex items-center gap-2">
          <CalendarDays className="h-4 w-4" />
          {experience.period}
        </p>

        <p className="inline-flex items-center gap-2">
          <MapPin className="h-4 w-4" />
          {experience.location}
        </p>
      </div>

      <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-600">
        {experience.description.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-950" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
