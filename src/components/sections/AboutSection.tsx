import { SectionHeading } from "@/components/ui/SectionHeading";
import { profile } from "@/data/profile";

const focusItems = [
  "Web Developer",
  "Mobile Developer",
  "AI Enthusiast",
  "Project Manager",
  "DevOps",
];

const workingValues = [
  {
    title: "Technical Execution",
    description:
      "Building applications with structured frontend, backend, API, and database foundations.",
  },
  {
    title: "Project Direction",
    description:
      "Breaking down requirements, organizing tasks, and keeping development work clear.",
  },
  {
    title: "Continuous Growth",
    description:
      "Improving across mobile development, AI-assisted workflow, DevOps, and security fundamentals.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 pb-16 pt-6 md:pb-20 md:pt-8">
      <SectionHeading
        label="About"
        title="A developer with technical execution and project direction."
        description="I focus on building digital products with a balance between clean development, structured documentation, and practical project delivery."
      />

      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm md:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-slate-500">
            About Me
          </p>

          <h3 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
            I build web applications, business systems, and structured digital
            products.
          </h3>

          <div className="mt-5 space-y-4 text-base leading-8 text-slate-600">
            <p>
              I am a Fullstack Developer and Project Manager focused on web
              applications, admin dashboards, APIs, and database-driven systems.
              I enjoy turning ideas and requirements into structured
              applications that are clear, usable, and easier to maintain.
            </p>

            <p>
              Beyond coding, I also pay attention to project flow, requirement
              breakdown, technical documentation, and delivery planning. My
              current growth direction includes mobile development,
              AI-assisted workflows, DevOps fundamentals, and cybersecurity
              basics.
            </p>
          </div>
        </div>

        <aside className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm md:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-slate-500">
            Profile
          </p>

          <div className="mt-5">
            <h3 className="text-2xl font-semibold text-slate-950">
              {profile.name}
            </h3>

            <p className="mt-2 text-sm font-medium text-slate-600">
              {profile.role}
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-500">
              Based in {profile.location}. Focused on building practical
              digital products with code, documentation, and project clarity.
            </p>
          </div>

          <div className="mt-6 border-t border-slate-200 pt-6">
            <p className="text-sm font-semibold text-slate-950">
              Current Roles & Direction
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {focusItems.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {workingValues.map((item) => (
          <div
            key={item.title}
            className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm"
          >
            <h3 className="text-base font-semibold text-slate-950">
              {item.title}
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}