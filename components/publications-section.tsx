import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, FileText } from "lucide-react"

const publications = [
  {
    title: "Energy-Efficient Neural Network Accelerator for Edge Devices",
    authors: "S. Chen, E. Watson, M. Roberts",
    venue: "IEEE Transactions on VLSI Systems",
    year: "2025",
    type: "Journal",
  },
  {
    title: "A Novel Approach to Side-Channel Attack Mitigation in IoT Devices",
    authors: "J. Liu, S. Chen",
    venue: "ACM Conference on Computer and Communications Security",
    year: "2025",
    type: "Conference",
  },
  {
    title: "High-Efficiency GaN-Based DC-DC Converter for Electric Vehicles",
    authors: "A. Patel, D. Kim",
    venue: "IEEE Transactions on Power Electronics",
    year: "2024",
    type: "Journal",
  },
  {
    title: "Deep Learning-Based Channel Estimation for Massive MIMO Systems",
    authors: "M. Roberts, D. Kim",
    venue: "IEEE International Conference on Communications",
    year: "2024",
    type: "Conference",
  },
  {
    title: "FPGA Implementation of Real-Time Object Detection Using YOLO",
    authors: "E. Watson, S. Chen",
    venue: "ACM/SIGDA International Symposium on FPGAs",
    year: "2024",
    type: "Conference",
  },
]

export function PublicationsSection() {
  return (
    <section id="publications" className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-primary">
            Publications
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Recent Research Output
          </p>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Our research is published in top-tier journals and conferences. Here are some of our recent publications.
          </p>
        </div>

        <div className="mt-16 space-y-4">
          {publications.map((pub, index) => (
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
                  <Button variant="ghost" size="icon" className="shrink-0">
                    <ExternalLink className="h-4 w-4" />
                    <span className="sr-only">View publication</span>
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
            View All Publications
          </Button>
        </div>
      </div>
    </section>
  )
}
