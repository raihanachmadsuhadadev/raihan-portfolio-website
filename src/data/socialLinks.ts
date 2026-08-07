import { profile } from "@/data/profile";
import type { SocialLink } from "@/types";

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: profile.github,
    description: "View repositories and development work.",
    type: "github",
  },
  {
    label: "LinkedIn",
    href: profile.linkedin,
    description: "Connect for professional opportunities.",
    type: "linkedin",
  },
  {
    label: "Email",
    href: `mailto:${profile.email}`,
    description: "Send a direct email for collaboration.",
    type: "email",
  },
];

export const resumeLink: SocialLink | null = profile.resumeUrl
  ? {
      label: "Resume",
      href: profile.resumeUrl,
      description: "Download resume/CV.",
      type: "resume",
    }
  : null;