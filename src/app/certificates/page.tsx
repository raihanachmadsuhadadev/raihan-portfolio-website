import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { certificates } from "@/data/certificates";
import { ArrowUpRight, Award, FileText } from "lucide-react";
import { Reveal, RevealItem, StaggerReveal } from "@/components/ui/Reveal";

export default function CertificatesPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,#dbeafe_0,#f8fafc_35%,#f8fafc_100%)] text-slate-950 dark:bg-[radial-gradient(circle_at_top,#0f172a_0,#020617_45%,#020617_100%)] dark:text-slate-50">
      <Navbar />

      <section className="mx-auto max-w-6xl px-4 pb-10 pt-28 md:pb-12 md:pt-36">
        <Link
          href="/"
          className="mb-8 inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 shadow-sm transition hover:border-slate-300 hover:text-slate-950 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-slate-600 dark:hover:text-white"
        >
          ← Back to Home
        </Link>

        <Reveal className="max-w-3xl" y={24}>
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
            Certificates
          </p>

          <h1 className="text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl dark:text-white">
            Certificate collection.
          </h1>

          <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
            A collection of certificates that support my learning journey in
            programming fundamentals, backend development, API development,
            database usage, and web development.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 md:pb-20">
        <StaggerReveal className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((certificate, index) => (
            <RevealItem key={certificate.title}>
            <article
              className="group flex h-full flex-col rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_20px_60px_rgba(15,23,42,0.08)] dark:border-slate-700 dark:bg-slate-900 dark:hover:border-slate-600"
            >
              <div className="mb-5 flex items-start justify-between gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200">
                  <FileText className="h-6 w-6" />
                </div>

                <span className="text-sm font-semibold text-slate-400">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="mb-4">
                <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                  <Award className="h-3.5 w-3.5" />
                  Certificate
                </span>
              </div>

              <h3 className="text-lg font-semibold tracking-tight text-slate-950 dark:text-white">
                {certificate.title}
              </h3>

              <p className="mt-2 text-sm font-medium text-slate-600 dark:text-slate-300">
                {certificate.issuer}
              </p>

              <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-5 dark:border-slate-700">
                <span className="text-sm text-slate-500 dark:text-slate-400">
                  {certificate.year}
                </span>

                <a
                  href={certificate.certificateUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100"
                >
                  View PDF
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </article>
            </RevealItem>
          ))}
        </StaggerReveal>
      </section>

      <Footer />
    </main>
  );
}
