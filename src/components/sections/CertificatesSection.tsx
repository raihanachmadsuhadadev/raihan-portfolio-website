import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { certificates } from "@/data/certificates";
import { ArrowUpRight, Award, FileText } from "lucide-react";

const previewCertificates = certificates.slice(0, 3);

export function CertificatesSection() {
  return (
    <section
      id="certificates"
      className="mx-auto max-w-6xl px-4 pb-16 pt-4 md:pb-20 md:pt-6"
    >
      <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <SectionHeading
          label="Certificates"
          title="Professional certificates and learning achievements."
          description="A short preview of certificates that support my learning journey, technical growth, and professional development."
        />

        <Link
          href="/certificates"
          className="inline-flex w-fit items-center gap-2 rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100"
        >
          View All Certificates
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {previewCertificates.map((certificate, index) => (
          <article
            key={certificate.title}
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
        ))}
      </div>
    </section>
  );
}
