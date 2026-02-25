import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Markdown } from "@/components/markdown"
import type { ResearchContent, SectionContent } from "@/lib/content"
import { Activity, BrainCircuit, CircuitBoard, Cpu, Database, Shield, Sparkles } from "lucide-react"

const iconMap = { Activity, BrainCircuit, CircuitBoard, Cpu, Database, Shield, Sparkles }

type ResearchSectionProps = {
  content: SectionContent<ResearchContent>
}

export function ResearchSection({ content }: ResearchSectionProps) {
  const { data, html } = content

  return (
    <section id="research" className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-primary">
            {data.eyebrow}
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            {data.title}
          </p>
          <Markdown
            html={html}
            className="mt-4 text-lg text-muted-foreground text-pretty"
          />
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.areas.map((area) => {
            const Icon = iconMap[area.icon as keyof typeof iconMap] ?? Cpu

            return (
              <Card
                key={area.title}
                className="group transition-all hover:border-primary/50 bg-card"
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    {area.catchPhrase ? (
                      <span className="text-xs uppercase tracking-[0.2em] text-primary font-mono">
                        {area.catchPhrase}
                      </span>
                    ) : null}
                  </div>
                  <CardTitle className="text-foreground">{area.title}</CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {area.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {area.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
