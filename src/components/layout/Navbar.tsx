import Image from "next/image";
import Link from "next/link";

const navItems = [
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Experience", href: "/#experience" },
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
        className="mx-auto flex h-[72px] max-w-6xl items-center justify-between gap-4 rounded-full border border-white/70 bg-white/85 px-5 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl"
      >
        <Link href="/" className="flex h-14 w-[210px] shrink-0 items-center">
          <Image
            src="/brand/lumenix-logo.png"
            alt="LUMENIX"
            width={420}
            height={140}
            priority
            className="h-[52px] w-auto object-contain"
          />
        </Link>

        <div className="hidden items-center gap-1 rounded-full bg-slate-100/80 p-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-white hover:text-slate-950 hover:shadow-sm"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <Link
            href="/projects"
            className="rounded-full px-3 py-2 text-xs font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-slate-950"
          >
            Work
          </Link>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-slate-950 px-3 py-2 text-xs font-semibold text-white transition hover:bg-slate-800"
          >
            Contact
          </a>
        </div>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="hidden rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800 md:inline-flex"
        >
          Contact Me
        </a>
      </nav>
    </header>
  );
}