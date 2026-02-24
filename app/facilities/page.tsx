import { FacilitiesSection } from "@/components/facilities-section"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { getPageContent } from "@/lib/content"

export default async function FacilitiesPage() {
  const content = await getPageContent()

  return (
    <main className="min-h-screen bg-background">
      <Header content={content.header.data} />
      <FacilitiesSection content={content.facilities} />
      <Footer content={content.footer.data} />
    </main>
  )
}
