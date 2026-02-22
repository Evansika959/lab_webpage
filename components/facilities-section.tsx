import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Microscope, Server, Wrench, Laptop } from "lucide-react"

const facilities = [
  {
    icon: Microscope,
    title: "Cleanroom Facility",
    description:
      "1,500 sq ft ISO Class 6 cleanroom with photolithography, thin-film deposition, and etching equipment for semiconductor fabrication.",
    specs: ["ISO Class 6", "Photolithography", "Thin-film Deposition", "Etching"],
  },
  {
    icon: Server,
    title: "High-Performance Computing",
    description:
      "Cluster with 500+ cores and multiple GPUs for machine learning, simulation, and large-scale data processing.",
    specs: ["500+ CPU Cores", "8x NVIDIA A100", "100TB Storage", "InfiniBand"],
  },
  {
    icon: Wrench,
    title: "Electronics Lab",
    description:
      "State-of-the-art test and measurement equipment including oscilloscopes, spectrum analyzers, and network analyzers up to 67 GHz.",
    specs: ["67 GHz Analyzers", "Mixed-signal Scopes", "Power Supplies", "Soldering Stations"],
  },
  {
    icon: Laptop,
    title: "Design Center",
    description:
      "Workstations with industry-standard EDA tools including Cadence, Synopsys, Xilinx Vivado, and MATLAB licenses.",
    specs: ["Cadence", "Synopsys", "Xilinx Vivado", "MATLAB"],
  },
]

export function FacilitiesSection() {
  return (
    <section id="facilities" className="py-24 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-primary">
            Facilities
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            World-Class Research Infrastructure
          </p>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Our lab is equipped with cutting-edge facilities and equipment to support research across all domains of electrical and computer engineering.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {facilities.map((facility) => (
            <Card
              key={facility.title}
              className="group transition-all hover:border-primary/50 bg-card overflow-hidden"
            >
              <div className="aspect-video bg-secondary/50 flex items-center justify-center">
                <facility.icon className="h-16 w-16 text-primary/40" />
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
          ))}
        </div>
      </div>
    </section>
  )
}
