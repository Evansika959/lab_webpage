import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ResearchSection } from "@/components/research-section"
import { TeamSection } from "@/components/team-section"
import { PublicationsSection } from "@/components/publications-section"
import { FacilitiesSection } from "@/components/facilities-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AboutSection />
      <ResearchSection />
      <TeamSection />
      <PublicationsSection />
      <FacilitiesSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
