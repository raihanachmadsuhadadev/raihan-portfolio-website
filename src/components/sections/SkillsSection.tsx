import { SectionHeading } from "@/components/ui/SectionHeading";
import { skillGroups } from "@/data/skills";
import type { SkillGroup } from "@/types";
import { Layers3 } from "lucide-react";
import { createElement } from "react";
import type { IconType } from "react-icons";
import * as SiIcons from "react-icons/si";

const skillIconMap: Record<string, string> = {
  HTML: "SiHtml5",
  CSS: "SiCss3",
  JavaScript: "SiJavascript",
  TypeScript: "SiTypescript",
  "React.js": "SiReact",
  "Next.js": "SiNextdotjs",
  "Vue.js": "SiVuedotjs",
  "Tailwind CSS": "SiTailwindcss",
  Bootstrap: "SiBootstrap",
  Vite: "SiVite",

  PHP: "SiPhp",
  Laravel: "SiLaravel",
  "Node.js": "SiNodedotjs",
  "Express.js": "SiExpress",
  Golang: "SiGo",

  Flutter: "SiFlutter",
  Dart: "SiDart",
  "React Native": "SiReact",
  Kotlin: "SiKotlin",

  PostgreSQL: "SiPostgresql",
  MySQL: "SiMysql",
  MongoDB: "SiMongodb",
  Mongoose: "SiMongoose",

  "REST API": "SiOpenapiinitiative",
  "JSON API": "SiJson",
  "Laravel Sanctum": "SiLaravel",
  "JWT Authentication": "SiJsonwebtokens",
  "Basic OAuth Concepts": "SiAuth0",
  Insomnia: "SiInsomnia",
  Postman: "SiPostman",

  Git: "SiGit",
  GitHub: "SiGithub",
  "GitHub Actions": "SiGithubactions",
  Docker: "SiDocker",
  "Docker Compose": "SiDocker",
  "Linux Fundamentals": "SiLinux",
  Nginx: "SiNginx",
  "SSL Configuration": "SiLetsencrypt",
  "CI/CD Fundamentals": "SiGithubactions",

  "OWASP Top 10": "SiOwasp",
  "Burp Suite": "SiBurpsuite",
  Nmap: "SiNmap",
  "Kali Linux Basics": "SiKalilinux",

  ChatGPT: "SiOpenai",
  Claude: "SiAnthropic",
  "OpenAI Codex": "SiOpenai",
  Cursor: "SiCursor",
  "Claude Code": "SiAnthropic",
  "Claude Design": "SiAnthropic",

  "VS Code": "SiVisualstudiocode",
  Composer: "SiComposer",
  NPM: "SiNpm",
  PNPM: "SiPnpm",
  "Docker Desktop": "SiDocker",
  DBeaver: "SiDbeaver",
  PGAdmin4: "SiPostgresql",
  "MongoDB Atlas": "SiMongodb",
  Figma: "SiFigma",
  "Android Studio": "SiAndroidstudio",
};

function getSkillIcon(skill: string): IconType | null {
  const iconName = skillIconMap[skill];

  if (!iconName) {
    return null;
  }

  const icons = SiIcons as Record<string, IconType | undefined>;
  return icons[iconName] ?? null;
}

function SkillBadge({ skill }: { skill: string }) {
  const Icon = getSkillIcon(skill);

  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600 transition hover:border-slate-300 hover:bg-white">
      {Icon
        ? createElement(Icon, {
            className: "h-3.5 w-3.5 shrink-0",
            "aria-hidden": true,
          })
        : null}
      {skill}
    </span>
  );
}

function SkillTimelineCard({
  group,
  index,
}: {
  group: SkillGroup;
  index: number;
}) {
  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
            <Layers3 className="h-3.5 w-3.5" />
            Skill Group
          </p>

          <h3 className="text-xl font-semibold tracking-tight text-slate-950">
            {group.category}
          </h3>
        </div>

        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-500">
          {group.skills.length}
        </span>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <SkillBadge key={skill} skill={skill} />
        ))}
      </div>

      <p className="mt-5 text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
        #{String(index + 1).padStart(2, "0")}
      </p>
    </div>
  );
}

function TimelinePoint({ index }: { index: number }) {
  return (
    <div className="relative z-10 hidden items-center justify-center lg:flex">
      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-sm font-semibold text-slate-950 shadow-sm">
        {String(index + 1).padStart(2, "0")}
      </div>
    </div>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <SectionHeading
        label="Skills"
        title="A growing technical stack for building modern digital products."
        description="My current skill set covers frontend, backend, database, API integration, deployment fundamentals, security basics, AI-assisted workflow, and development tools."
        align="center"
      />

      <div className="relative">
        <div className="absolute left-4 top-0 h-full w-px bg-slate-200 lg:left-1/2 lg:-translate-x-1/2" />

        <div className="space-y-6">
          {skillGroups.map((group, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={group.category}
                className="relative grid gap-4 pl-12 lg:grid-cols-[1fr_80px_1fr] lg:items-center lg:gap-0 lg:pl-0"
              >
                <div className="absolute left-0 top-8 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-xs font-semibold text-slate-950 shadow-sm lg:hidden">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {isLeft ? (
                  <>
                    <div className="lg:col-start-1">
                      <SkillTimelineCard group={group} index={index} />
                    </div>

                    <TimelinePoint index={index} />

                    <div className="hidden lg:block" />
                  </>
                ) : (
                  <>
                    <div className="hidden lg:block" />

                    <TimelinePoint index={index} />

                    <div className="lg:col-start-3">
                      <SkillTimelineCard group={group} index={index} />
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-8 rounded-[2rem] border border-slate-200 bg-white p-6 text-center shadow-sm">
        <p className="text-sm leading-7 text-slate-600">
          I keep improving my technical foundation through real projects,
          documentation, deployment practice, and AI-assisted development
          workflow.
        </p>
      </div>
    </section>
  );
}