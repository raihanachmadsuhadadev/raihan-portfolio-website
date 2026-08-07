import { profile } from "@/data/profile";

export function HeroSection() {
  return (
    <section className="mx-auto flex min-h-[80vh] max-w-6xl items-center px-4 py-20">
      <div className="max-w-4xl">
        <p className="mb-5 inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm">
          {profile.role}
        </p>

        <h1 className="text-5xl font-semibold tracking-tight text-slate-950 md:text-7xl">
          Hi, I&apos;m {profile.name}
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">
          {profile.summary}
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#projects"
            className="rounded-full bg-slate-950 px-6 py-3 text-center text-sm font-medium text-white transition hover:bg-slate-800"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="rounded-full border border-slate-300 bg-white px-6 py-3 text-center text-sm font-medium text-slate-950 transition hover:border-slate-400"
          >
            Contact Me
          </a>
        </div>

        <p className="mt-8 text-sm text-slate-500">{profile.location}</p>
      </div>
    </section>
  );
}