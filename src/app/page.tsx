import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { Reveal } from "@/components/ui/Reveal";

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,#dbeafe_0,#f8fafc_35%,#f8fafc_100%)] text-slate-950">
      <Navbar />

      <Reveal y={16}>
        <HeroSection />
      </Reveal>

      <Reveal>
        <AboutSection />
      </Reveal>

      <Reveal>
        <ExperienceSection />
      </Reveal>

      <Reveal>
        <SkillsSection />
      </Reveal>

      <Reveal>
        <ProjectsSection />
      </Reveal>

      <Reveal>
        <ContactSection />
      </Reveal>

      <Footer />
    </main>
  );
}