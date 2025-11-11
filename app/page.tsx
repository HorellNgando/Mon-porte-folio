import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { WorksSection } from "@/components/works-section"
import { ExperienceEducation } from "@/components/experience-education"
import { SkillsSection } from "@/components/skills-section"
import ValeursPage from "@/components/valeurs"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-background">
      <Navbar />
      <HeroSection />

      <div className="bg-gradient-section">
        <ServicesSection />
      </div>

      <div className="bg-gradient-hero">
        <WorksSection />
      </div>

      <div className="bg-gradient-section">
        <ExperienceEducation />
      </div>

      <div className="bg-gradient-hero">
        <SkillsSection />
      </div>

      <div className="bg-gradient-section">
        <ValeursPage />
      </div>

      <div className="bg-gradient-hero">
        <Footer />
      </div>
    </main>
  )
}
