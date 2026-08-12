import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const navItems = [
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Experience", href: "/#experience" },
  { label: "Certificates", href: "/certificates" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/#contact" },
];

const whatsappNumber = "6285171226279";
const whatsappUrl = `https://wa.me/${whatsappNumber}`;

export function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-3 z-50 px-3 md:top-4 md:px-4">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 rounded-full border border-white/70 bg-white/85 px-3 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-slate-700/70 dark:bg-slate-950/85 sm:px-4 md:h-[72px] md:px-5"
      >
        <Link
          href="/"
          className="flex min-w-0 shrink-0 items-center"
          aria-label="Go to homepage"
        >
          <Image
            src="/brand/lumenix-logo.png"
            alt="LUMENIX"
            width={420}
            height={140}
            priority
            className="h-10 w-auto object-contain sm:h-11 md:h-[52px]"
          />
        </Link>

        <div className="hidden items-center gap-1 rounded-full bg-slate-100/80 p-1 md:flex dark:bg-slate-900/80">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-white hover:text-slate-950 hover:shadow-sm dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex shrink-0 items-center gap-2 md:hidden">
          <Link
            href="/projects"
            className="rounded-full px-3 py-2 text-xs font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
          >
            Work
          </Link>

          <ThemeToggle />

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-slate-950 px-3 py-2 text-xs font-semibold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100"
          >
            Contact
          </a>
        </div>

        <div className="hidden shrink-0 items-center gap-2 md:flex">
          <ThemeToggle />

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100"
          >
            Contact Me
          </a>
        </div>
      </nav>
    </header>
  );
}
