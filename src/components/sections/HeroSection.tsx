import { SocialLinks } from "@/components/ui/SocialLinks";
import { profile } from "@/data/profile";

const heroHighlights = [
  "Web Developer",
  "Mobile Developer",
  "AI Enthusiast",
  "Project Manager",
  "DevOps",
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-4 pb-12 pt-28 sm:pb-16 md:pt-36">
      <div className="absolute left-1/2 top-24 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-200/40 blur-3xl" />
      <div className="absolute right-10 top-48 -z-10 h-64 w-64 rounded-full bg-slate-300/40 blur-3xl" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1.15fr_0.85fr]">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-medium text-slate-600 shadow-sm backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Available for collaboration
          </div>

          <h1 className="max-w-3xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl md:text-5xl lg:text-6xl">
            Building digital systems with clean code and clear direction.
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
            I&apos;m {profile.name}, focused on web development, mobile
            development, AI-assisted workflows, project management, and DevOps
            fundamentals.
          </p>

          <div className="mt-5 flex flex-wrap gap-1.5 md:flex-nowrap">
            {heroHighlights.map((item) => (
              <span
                key={item}
                className="rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-xs font-medium text-slate-600 shadow-sm"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-7">
            <SocialLinks />
          </div>
        </div>

        <div className="relative">
          <div className="rounded-[2rem] border border-white/70 bg-white/80 p-4 shadow-[0_30px_80px_rgba(15,23,42,0.12)] backdrop-blur-xl">
            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-950 p-6 text-white">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
              </div>

              <div className="mt-8 space-y-4 font-mono text-sm">
                <p>
                  <span className="text-blue-300">const</span>{" "}
                  <span className="text-emerald-300">developer</span>{" "}
                  <span className="text-slate-400">=</span>{" "}
                  <span className="text-yellow-200">Raihan</span>
                </p>

                <p>
                  <span className="text-blue-300">roles</span>: Web Developer,
                  Mobile Developer
                </p>

                <p>
                  <span className="text-blue-300">focus</span>: AI-assisted
                  Workflow, Project Management
                </p>

                <p>
                  <span className="text-blue-300">tools</span>: Laravel,
                  Next.js, PostgreSQL
                </p>

                <p>
                  <span className="text-blue-300">workflow</span>: Code, Docs,
                  Delivery
                </p>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-xl md:block">
            <p className="text-sm font-semibold text-slate-950">
              Project-minded Developer
            </p>
            <p className="mt-1 text-xs text-slate-500">
              Code · Docs · Delivery
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}