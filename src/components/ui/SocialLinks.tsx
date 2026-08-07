import { socialLinks } from "@/data/socialLinks";
import { Mail, FileText } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

type SocialLinksProps = {
  variant?: "light" | "dark";
};

const iconMap = {
  github: FaGithub,
  linkedin: FaLinkedin,
  email: Mail,
  resume: FileText,
};

export function SocialLinks({ variant = "light" }: SocialLinksProps) {
  const isDark = variant === "dark";

  return (
    <div className="flex flex-wrap gap-3">
      {socialLinks.map((link) => {
        const Icon = iconMap[link.type];

        return (
          <a
            key={link.label}
            href={link.href}
            target={link.type === "email" ? undefined : "_blank"}
            rel={link.type === "email" ? undefined : "noreferrer"}
            className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition ${
              isDark
                ? "border-white/10 bg-white/5 text-white hover:bg-white/10"
                : "border-slate-200 bg-white text-slate-950 shadow-sm hover:border-slate-300 hover:bg-slate-50"
            }`}
          >
            <Icon className="h-4 w-4" />
            {link.label}
          </a>
        );
      })}
    </div>
  );
}