import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Cpu, Radio, BrainCircuit, Battery, Wifi, Shield } from "lucide-react"

const researchAreas = [
  {
    icon: Cpu,
    title: "Embedded Systems",
    description:
      "Designing low-power, high-performance embedded processors and SoCs for IoT and edge computing applications.",
    tags: ["FPGA", "ARM", "RISC-V", "Real-time"],
  },
  {
    icon: Radio,
    title: "Signal Processing",
    description:
      "Advanced algorithms for audio, image, and communication signal processing with real-time implementation.",
    tags: ["DSP", "Filters", "Compression", "ML"],
  },
  {
    icon: BrainCircuit,
    title: "Machine Learning Hardware",
    description:
      "Custom accelerators and architectures optimized for neural network inference at the edge.",
    tags: ["Neural Networks", "Accelerators", "Quantization"],
  },
  {
    icon: Battery,
    title: "Power Electronics",
    description:
      "Efficient power conversion systems, renewable energy integration, and battery management solutions.",
    tags: ["Converters", "Inverters", "EV", "Solar"],
  },
  {
    icon: Wifi,
    title: "Wireless Communications",
    description:
      "Next-generation wireless systems, antenna design, and RF circuit development for 5G and beyond.",
    tags: ["5G", "MIMO", "RF Design", "Antennas"],
  },
  {
    icon: Shield,
    title: "Hardware Security",
    description:
      "Secure hardware design, cryptographic implementations, and protection against side-channel attacks.",
    tags: ["Crypto", "PUF", "Side-channel", "Secure Boot"],
  },
]

export function ResearchSection() {
  return (
    <section id="research" className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-primary">
            Research Areas
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Exploring the Frontiers of Technology
          </p>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Our research spans multiple domains within electrical and computer engineering, with a focus on practical applications and real-world impact.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {researchAreas.map((area) => (
            <Card
              key={area.title}
              className="group transition-all hover:border-primary/50 bg-card"
            >
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                  <area.icon className="h-6 w-6 text-primary" />
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
          ))}
        </div>
      </div>
    </section>
  )
}
