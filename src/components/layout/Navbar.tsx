import { profile } from "@/data/profile";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-3 z-50 px-3 md:top-4 md:px-4">
      <nav
  aria-label="Main navigation"
  className="mx-auto flex max-w-5xl items-center justify-between gap-3 rounded-full border border-white/70 bg-white/85 px-4 py-3 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl md:px-5"
>
        <a
          href="#"
          className="shrink-0 text-sm font-bold tracking-tight text-slate-950"
        >
          {profile.shortName}
        </a>

        <div className="hidden items-center gap-1 rounded-full bg-slate-100/80 p-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-white hover:text-slate-950 hover:shadow-sm"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <a
            href="#projects"
            className="rounded-full px-3 py-2 text-xs font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-slate-950"
          >
            Work
          </a>

          <a
            href="#contact"
            className="rounded-full bg-slate-950 px-3 py-2 text-xs font-semibold text-white transition hover:bg-slate-800"
          >
            Contact
          </a>
        </div>

        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="hidden rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800 md:inline-flex"
        >
          GitHub
        </a>
      </nav>
    </header>
  );
}