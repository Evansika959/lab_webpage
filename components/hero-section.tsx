import { Button } from "@/components/ui/button"
import { Markdown } from "@/components/markdown"
import { ArrowRight, Github } from "lucide-react"
import type { HeroContent, SectionContent } from "@/lib/content"
import Link from "next/link"

type HeroSectionProps = {
  content: SectionContent<HeroContent>
}

export function HeroSection({ content }: HeroSectionProps) {
  const { data, html } = content

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a2e_1px,transparent_1px),linear-gradient(to_bottom,#1a1a2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl text-balance">
          <span className="text-primary">{data.titleHighlight}</span> {data.titleLineOne}
          <br />
          {data.titleLineTwo}
        </h1>

        <Markdown
          html={html}
          className="mt-6 text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto text-pretty"
        />
        
        <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">
          <Button size="lg" className="gap-2" asChild>
            <Link href="#research">
              {data.primaryButton}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/publications">{data.secondaryButton}</Link>
          </Button>
        </div>
        <div className="mt-4 flex items-center justify-center">
          <Button
            size="lg"
            className="gap-2 bg-[#24292f] text-white hover:bg-[#1f2328]"
            asChild
          >
            <Link href="https://github.com/ReaLLMASIC" target="_blank" rel="noreferrer">
              <Github className="h-4 w-4" />
              Check Our Group Repo
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
