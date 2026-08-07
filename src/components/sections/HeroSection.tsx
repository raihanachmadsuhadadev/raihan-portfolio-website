import Image from "next/image";
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
    <section className="relative overflow-hidden px-4 pb-8 pt-28 sm:pb-10 sm:pt-32 md:pb-12 md:pt-36">
      <div className="absolute left-1/2 top-24 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-200/40 blur-3xl dark:bg-blue-500/10" />
      <div className="absolute right-0 top-48 -z-10 h-64 w-64 rounded-full bg-slate-300/40 blur-3xl dark:bg-slate-500/10" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <div className="text-center md:text-left">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-medium text-slate-600 shadow-sm backdrop-blur dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-300">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Available for collaboration
          </div>

          <h1 className="mx-auto max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-4xl md:mx-0 md:text-5xl dark:text-white">
            Building digital systems with clean code and clear direction.
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 md:mx-0 md:text-lg dark:text-slate-300">
            I&apos;m {profile.name}, the person behind LUMENIX. I focus on web
            development, mobile development, AI-assisted workflows, project
            management, and DevOps fundamentals.
          </p>

          <div className="mx-auto mt-5 flex max-w-xl flex-wrap justify-center gap-2 md:mx-0 md:justify-start">
            {heroHighlights.map((item) => (
              <span
                key={item}
                className="rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-xs font-medium text-slate-600 shadow-sm dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-300"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-7 flex justify-center md:justify-start">
            <SocialLinks />
          </div>
        </div>

        <div className="relative flex justify-center md:justify-end">
          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-full bg-blue-300/30 blur-3xl dark:bg-blue-500/20" />

            <div className="relative h-[250px] w-[250px] overflow-hidden rounded-full border-[7px] border-white/80 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.18)] sm:h-[290px] sm:w-[290px] md:h-[340px] md:w-[340px] lg:h-[360px] lg:w-[360px] dark:border-slate-800 dark:bg-slate-900">
              <Image
                src="/images/raihan-profile.png"
                alt="Raihan Achmad Suhada"
                fill
                className="object-cover object-top"
                priority
              />
            </div>

            <div className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-slate-200/60 dark:ring-slate-700/70" />

            <div className="absolute -bottom-5 left-1/2 z-10 w-[230px] -translate-x-1/2 rounded-2xl border border-slate-200 bg-white px-5 py-4 text-left shadow-xl sm:w-max md:-bottom-6 md:left-auto md:right-[-28px] md:translate-x-0 dark:border-slate-700 dark:bg-slate-900">
              <p className="text-sm font-semibold text-slate-950 dark:text-white">
                Project-minded Developer
              </p>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                Code · Docs · Delivery
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}