import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Markdown } from "@/components/markdown"
import type { PublicationsContent, SectionContent } from "@/lib/content"
import { ExternalLink, FileText } from "lucide-react"
import Link from "next/link"

type PublicationsSectionProps = {
  content: SectionContent<PublicationsContent>
}

export function PublicationsSection({ content }: PublicationsSectionProps) {
  const { data, html } = content

  return (
    <section id="publications" className="py-24">
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

        <div className="mt-16 space-y-4">
          {data.items.map((pub, index) => (
            <Card
              key={index}
              className="group transition-all hover:border-primary/50 bg-card"
            >
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge
                        variant={pub.type === "Journal" ? "default" : "secondary"}
                        className="text-xs"
                      >
                        {pub.type}
                      </Badge>
                      <span className="text-sm text-muted-foreground">
                        {pub.year}
                      </span>
                    </div>
                    <CardTitle className="text-lg text-foreground group-hover:text-primary transition-colors">
                      {pub.title}
                    </CardTitle>
                  </div>
                  <Button variant="ghost" size="icon" className="shrink-0" asChild>
                    <Link href={pub.url || "#"}>
                      <ExternalLink className="h-4 w-4" />
                      <span className="sr-only">View publication</span>
                    </Link>
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  <span className="font-medium text-foreground/80">{pub.authors}</span>
                  <br />
                  <span className="italic">{pub.venue}</span>
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" className="gap-2 bg-transparent">
            <FileText className="h-4 w-4" />
            {data.buttonLabel}
          </Button>
        </div>
      </div>
    </section>
  )
}
