import { SectionHeading } from "@/components/ui/SectionHeading";
import { profile } from "@/data/profile";

export function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-20">
      <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-8 text-white shadow-sm md:p-12">
        <SectionHeading
  label="Contact"
  title="Let's connect and discuss possible collaboration."
  description="I am open to discussing web applications, admin dashboards, business systems, project documentation, and technical collaboration."
  theme="dark"
/>

        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-white px-6 py-3 text-center text-sm font-medium text-slate-950 transition hover:bg-slate-100"
          >
            GitHub
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/20 px-6 py-3 text-center text-sm font-medium text-white transition hover:bg-white/10"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}