"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Markdown } from "@/components/markdown"
import type { PublicationsContent, SectionContent } from "@/lib/content"
import { ExternalLink, FileText, Plus } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

type PublicationsSectionProps = {
  content: SectionContent<PublicationsContent>
}

export function PublicationsSection({ content }: PublicationsSectionProps) {
  const { data, html } = content
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleItem = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index))
  }

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
                  <Button
                    variant="outline"
                    size="icon"
                    className="shrink-0"
                    onClick={() => toggleItem(index)}
                    aria-expanded={openIndex === index}
                    aria-label={`Toggle details for ${pub.title}`}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  <span className="font-medium text-foreground/80">{pub.authors}</span>
                  <br />
                  <span className="italic">{pub.venue}</span>
                </CardDescription>

                {openIndex === index && (
                  <div className="mt-6 border-t border-border pt-6 grid gap-6 lg:grid-cols-[160px,1fr]">
                    {pub.thumbnail && (
                      <img
                        src={pub.thumbnail}
                        alt={`${pub.title} thumbnail`}
                        className="w-full max-w-[200px] rounded-md border border-border object-cover"
                      />
                    )}
                    <div className="space-y-4">
                      {pub.summary && (
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {pub.summary}
                        </p>
                      )}
                      {pub.links && pub.links.length > 0 && (
                        <div className="flex flex-wrap gap-3">
                          {pub.links.map((link) => (
                            <Button
                              key={link.label}
                              variant="outline"
                              size="sm"
                              className="gap-2 bg-transparent"
                              asChild
                            >
                              <Link href={link.href}>
                                <ExternalLink className="h-4 w-4" />
                                {link.label}
                              </Link>
                            </Button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}
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
