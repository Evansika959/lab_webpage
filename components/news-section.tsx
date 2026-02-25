import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Markdown } from "@/components/markdown"
import type { NewsContent, SectionContent } from "@/lib/content"
import { ExternalLink, MapPin, Mic } from "lucide-react"

type NewsSectionProps = {
  content: SectionContent<NewsContent>
}

export function NewsSection({ content }: NewsSectionProps) {
  const { data, html } = content

  return (
    <section id="news" className="py-24 bg-secondary/20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            {data.eyebrow}
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            {data.title}
          </h2>
          <Markdown
            html={html}
            className="mt-4 text-lg text-muted-foreground text-pretty"
          />
        </div>

        <div className="mt-12 grid gap-6">
          {data.items.map((item) => (
            <Card key={`${item.title}-${item.date}`} className="bg-card/80">
              <CardHeader className="space-y-3">
                <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-wide text-muted-foreground">
                  <time className="font-semibold text-foreground/80">{item.date}</time>
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-2 py-1 text-[11px] font-semibold text-primary">
                    {item.category}
                  </span>
                </div>
                <CardTitle className="text-foreground text-2xl">{item.title}</CardTitle>
                <CardDescription className="text-muted-foreground text-base leading-relaxed">
                  {item.summary}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                {item.location && (
                  <span className="inline-flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    {item.location}
                  </span>
                )}
                {item.speaker && (
                  <span className="inline-flex items-center gap-2">
                    <Mic className="h-4 w-4" />
                    {item.speaker}
                  </span>
                )}
                {item.link && (
                  <a
                    className="inline-flex items-center gap-2 font-semibold text-primary hover:text-primary/80"
                    href={item.link.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.link.label}
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
