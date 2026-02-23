import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ResearchSection } from "@/components/research-section"
import { TeamSection } from "@/components/team-section"
import { PublicationsSection } from "@/components/publications-section"
import { FacilitiesSection } from "@/components/facilities-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { getPageContent } from "@/lib/content"

export default async function Home() {
  const content = await getPageContent()

  return (
    <main className="min-h-screen bg-background">
      <Header content={content.header.data} />
      <HeroSection content={content.hero} />
      <AboutSection content={content.about} />
      <ResearchSection content={content.research} />
      <TeamSection content={content.team} />
      <PublicationsSection content={content.publications} />
      <FacilitiesSection content={content.facilities} />
      <ContactSection content={content.contact} />
      <Footer content={content.footer.data} />
    </main>
  )
}
