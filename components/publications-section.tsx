"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Markdown } from "@/components/markdown"
import type { PublicationsContent, SectionContent } from "@/lib/content"
import { ExternalLink, FileText, Minus, Plus, ZoomIn, ZoomOut } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

type PublicationsSectionProps = {
  content: SectionContent<PublicationsContent>
}

export function PublicationsSection({ content }: PublicationsSectionProps) {
  const { data, html } = content
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [activeImage, setActiveImage] = useState<{ src: string; title: string } | null>(
    null,
  )
  const [zoom, setZoom] = useState(1)
  const [pan, setPan] = useState({ x: 0, y: 0 })
  const [drag, setDrag] = useState<{
    id: number
    startX: number
    startY: number
    originX: number
    originY: number
  } | null>(null)

  const toggleItem = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index))
  }

  const closeImage = () => {
    setActiveImage(null)
    setZoom(1)
    setPan({ x: 0, y: 0 })
  }

  const zoomIn = () => setZoom((current) => Math.min(current + 0.2, 2.5))
  const zoomOut = () =>
    setZoom((current) => {
      const next = Math.max(current - 0.2, 1)
      if (next === 1) {
        setPan({ x: 0, y: 0 })
      }
      return next
    })

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    event.currentTarget.setPointerCapture(event.pointerId)
    setDrag({
      id: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      originX: pan.x,
      originY: pan.y,
    })
  }

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!drag || drag.id !== event.pointerId) {
      return
    }
    const dx = event.clientX - drag.startX
    const dy = event.clientY - drag.startY
    setPan({ x: drag.originX + dx, y: drag.originY + dy })
  }

  const handlePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    if (drag && drag.id === event.pointerId) {
      event.currentTarget.releasePointerCapture(event.pointerId)
      setDrag(null)
    }
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
                    {openIndex === index ? (
                      <Minus className="h-4 w-4" />
                    ) : (
                      <Plus className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  <span className="font-medium text-foreground/80">{pub.authors}</span>
                  <br />
                  <span className="italic">{pub.venue}</span>
                </CardDescription>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-out ${
                    openIndex === index ? "max-h-[600px] opacity-100 mt-6" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="border-t border-border pt-6 grid gap-6 lg:grid-cols-[160px,1fr]">
                    {pub.thumbnail && (
                      <img
                        src={pub.thumbnail}
                        alt={`${pub.title} thumbnail`}
                        className="w-full aspect-[10/3] rounded-md border border-border object-contain bg-background cursor-zoom-in"
                        onClick={() =>
                          (setActiveImage({ src: pub.thumbnail as string, title: pub.title }),
                          setZoom(1),
                          setPan({ x: 0, y: 0 }))
                        }
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
                </div>
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

      <Dialog open={!!activeImage} onOpenChange={(open) => !open && closeImage()}>
        <DialogContent className="max-w-5xl">
          <DialogTitle className="sr-only">Publication image preview</DialogTitle>
          {activeImage && (
            <div className="space-y-4">
              <div className="flex items-center justify-end gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={zoomOut}
                  aria-label="Zoom out"
                >
                  <ZoomOut className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={zoomIn}
                  aria-label="Zoom in"
                >
                  <ZoomIn className="h-4 w-4" />
                </Button>
              </div>
              <div
                className={`h-[80vh] w-[80vw] max-w-[80vw] mx-auto rounded-md border border-border bg-background overflow-hidden flex items-center justify-center ${
                  drag ? "cursor-grabbing" : "cursor-grab"
                }`}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerCancel={handlePointerUp}
              >
                <img
                  src={activeImage.src}
                  alt={activeImage.title}
                  className="max-h-full max-w-full object-contain transition-transform duration-200 select-none"
                  style={{ transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})` }}
                  draggable={false}
                />
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
