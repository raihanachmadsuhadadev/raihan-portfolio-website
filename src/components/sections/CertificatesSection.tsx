import Image from "next/image";
import Link from "next/link";
import { Award, FileText, ImageIcon } from "lucide-react";
import { certificates } from "@/data/certificates";
import { Reveal, RevealItem, StaggerReveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const previewCertificates = certificates.slice(0, 3);

export function CertificatesSection() {
  return (
    <section id="certificates" className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            label="Certificates"
            title="Certificates and learning records."
            description="A collection of certificates that support my technical learning journey in programming, backend development, API, and web development."
            align="center"
          />
        </Reveal>

        <StaggerReveal className="mt-10 grid gap-6 md:grid-cols-3">
          {previewCertificates.map((certificate) => (
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

                  <h3 className="text-lg font-semibold tracking-tight text-slate-950 dark:text-white">
                    {certificate.title}
                  </h3>

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

        <Reveal className="mt-10 flex justify-center">
          <Link
            href="/certificates"
            className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-950 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-slate-500 dark:hover:text-white"
          >
            View All Certificates
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
