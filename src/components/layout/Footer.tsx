import { profile } from "@/data/profile";
import { socialLinks } from "@/data/socialLinks";
import { ArrowUpRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";

const whatsappNumber = "6285171226279";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-950">
            {profile.name}
          </p>
          <p className="mt-1 text-sm text-slate-500">{profile.role}</p>
        </div>

        <div className="flex flex-wrap gap-4 text-sm text-slate-500">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.type === "email" ? undefined : "_blank"}
              rel={link.type === "email" ? undefined : "noreferrer"}
              className="inline-flex items-center gap-1 transition hover:text-slate-950"
            >
              {link.label}
              {link.type !== "email" ? (
                <ArrowUpRight className="h-3.5 w-3.5" />
              ) : null}
            </a>
          ))}

          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 transition hover:text-slate-950"
          >
            WhatsApp
            <FaWhatsapp className="h-3.5 w-3.5" />
          </a>
        </div>

        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
}