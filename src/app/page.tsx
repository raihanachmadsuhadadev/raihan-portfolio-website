import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { BackToTopButton } from "@/components/ui/BackToTopButton";
import { Reveal } from "@/components/ui/Reveal";
import { CertificatesSection } from "@/components/sections/CertificatesSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,#dbeafe_0,#f8fafc_35%,#f8fafc_100%)] text-slate-950 dark:bg-[radial-gradient(circle_at_top,#0f172a_0,#020617_45%,#020617_100%)] dark:text-slate-50">
      <Navbar />

      <Reveal y={16}>
        <HeroSection />
      </Reveal>

      <Reveal>
        <AboutSection />
      </Reveal>

      <Reveal>
        <SkillsSection />
      </Reveal>

      <Reveal>
        <ExperienceSection />
      </Reveal>

      <Reveal>
        <CertificatesSection />
      </Reveal>

      <Reveal>
        <ProjectsSection />
      </Reveal>

      <Reveal>
        <ContactSection />
      </Reveal>

      <Footer />
      <BackToTopButton />
    </main>
  );
}
