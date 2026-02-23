import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Markdown } from "@/components/markdown"
import type { FacilitiesContent, SectionContent } from "@/lib/content"
import { Microscope, Server, Wrench, Laptop } from "lucide-react"

const iconMap = { Microscope, Server, Wrench, Laptop }

type FacilitiesSectionProps = {
  content: SectionContent<FacilitiesContent>
}

export function FacilitiesSection({ content }: FacilitiesSectionProps) {
  const { data, html } = content

  return (
    <section id="facilities" className="py-24 bg-secondary/30">
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

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {data.items.map((facility) => {
            const Icon = iconMap[facility.icon as keyof typeof iconMap] ?? Microscope

            return (
              <Card
                key={facility.title}
                className="group transition-all hover:border-primary/50 bg-card overflow-hidden"
              >
                <div className="aspect-video bg-secondary/50 flex items-center justify-center">
                  <Icon className="h-16 w-16 text-primary/40" />
                </div>
                <CardHeader>
                  <CardTitle className="text-foreground">{facility.title}</CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {facility.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {facility.specs.map((spec) => (
                      <span
                        key={spec}
                        className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary"
                      >
                        {spec}
                      </span>
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
