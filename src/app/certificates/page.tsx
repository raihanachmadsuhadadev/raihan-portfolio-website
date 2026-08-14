import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Award, FileText, ImageIcon } from "lucide-react";
import { BackToTopButton } from "@/components/ui/BackToTopButton";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { certificates } from "@/data/certificates";
import { Reveal, RevealItem, StaggerReveal } from "@/components/ui/Reveal";

export default function CertificatesPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950 dark:bg-slate-950 dark:text-white">
      <Navbar />

      <section className="px-4 pb-10 pt-32 md:pt-36">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <Link
              href="/"
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 transition hover:border-slate-300 hover:text-slate-950 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-slate-500 dark:hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>

            <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
              Certificates
            </p>

            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl dark:text-white">
              Certificate collection.
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600 md:text-lg dark:text-slate-300">
              A collection of certificates and learning records that support my
              technical growth in programming, backend development, API, and web
              development.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20">
        <StaggerReveal className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certificates.map((certificate) => (
            <RevealItem key={certificate.title}>
              <article className="flex h-full flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_20px_60px_rgba(15,23,42,0.08)] dark:border-slate-700 dark:bg-slate-900 dark:hover:border-slate-600">
                {certificate.type === "image" ? (
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                    <Image
                      src={certificate.certificateUrl}
                      alt={certificate.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="flex aspect-[4/3] w-full items-center justify-center bg-slate-100 dark:bg-slate-800">
                    <FileText className="h-14 w-14 text-slate-400 dark:text-slate-500" />
                  </div>
                )}

                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-white dark:bg-white dark:text-slate-950">
                      {certificate.type === "image" ? (
                        <ImageIcon className="h-5 w-5" />
                      ) : (
                        <Award className="h-5 w-5" />
                      )}
                    </div>

                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-500 dark:bg-slate-800 dark:text-slate-300">
                      {certificate.year}
                    </span>
                  </div>

                  <h2 className="text-lg font-semibold tracking-tight text-slate-950 dark:text-white">
                    {certificate.title}
                  </h2>

                  <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                    {certificate.issuer}
                  </p>

                  <div className="mt-auto pt-6">
                    <a
                      href={certificate.certificateUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex w-full items-center justify-center rounded-full bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100"
                    >
                      View Certificate
                    </a>
                  </div>
                </div>
              </article>
            </RevealItem>
          ))}
        </StaggerReveal>
      </section>

      <Footer />
      <BackToTopButton />
    </main>
  );
}
