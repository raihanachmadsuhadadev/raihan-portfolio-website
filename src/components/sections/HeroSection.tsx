import { profile } from "@/data/profile";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-4 pb-24 pt-36 md:pt-44">
      <div className="absolute left-1/2 top-24 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-200/40 blur-3xl" />
      <div className="absolute right-10 top-48 -z-10 h-64 w-64 rounded-full bg-slate-300/40 blur-3xl" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1.15fr_0.85fr]">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-medium text-slate-600 shadow-sm backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Available for collaboration
          </div>

          <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-slate-950 md:text-7xl">
            Building digital systems with clean code and clear direction.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
            I&apos;m {profile.name}, a {profile.role} focused on web
            applications, admin dashboards, APIs, database-driven systems, and
            business applications.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="rounded-full bg-slate-950 px-6 py-3 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-full border border-slate-300 bg-white px-6 py-3 text-center text-sm font-semibold text-slate-950 shadow-sm transition hover:border-slate-400"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-500">
            <span>{profile.location}</span>
            <span>•</span>
            <span>Fullstack Developer</span>
            <span>•</span>
            <span>Project Manager</span>
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
                  <span className="text-blue-300">role</span>: Fullstack
                  Developer
                </p>
                <p>
                  <span className="text-blue-300">focus</span>: Business
                  Systems
                </p>
                <p>
                  <span className="text-blue-300">tools</span>: Laravel,
                  Next.js, PostgreSQL
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