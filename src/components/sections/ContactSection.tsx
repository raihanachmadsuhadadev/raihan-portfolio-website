import { SectionHeading } from "@/components/ui/SectionHeading";
import { profile } from "@/data/profile";

const contactFocus = [
  "Web Application Development",
  "Admin Dashboard",
  "Business Information System",
  "API Development",
  "Project Documentation",
  "Technical Collaboration",
];

export function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-24">
      <div className="overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-950 shadow-[0_30px_90px_rgba(15,23,42,0.22)]">
        <div className="grid gap-8 p-8 md:grid-cols-[1.1fr_0.9fr] md:p-12">
          <div>
            <SectionHeading
              label="Contact"
              title="Let's connect and discuss possible collaboration."
              description="I am open to discussing web applications, admin dashboards, business systems, project documentation, and technical collaboration."
              theme="dark"
            />

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
              >
                View GitHub
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/20 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-slate-400">
              Open To
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {contactFocus.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm font-semibold text-white">
                Based in {profile.location}
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Available for remote collaboration, project discussion, and
                structured development work.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 px-8 py-5 md:px-12">
          <p className="text-sm text-slate-400">
            Clean code, structured documentation, and practical project
            execution.
          </p>
        </div>
      </div>
    </section>
  );
}