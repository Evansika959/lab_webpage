import { Button } from "@/components/ui/button"
import { ArrowRight, Cpu, Zap, CircuitBoard } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a2e_1px,transparent_1px),linear-gradient(to_bottom,#1a1a2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <div className="flex justify-center gap-4 mb-8">
          <div className="p-3 rounded-lg bg-secondary/50 border border-border">
            <Cpu className="h-6 w-6 text-primary" />
          </div>
          <div className="p-3 rounded-lg bg-secondary/50 border border-border">
            <Zap className="h-6 w-6 text-primary" />
          </div>
          <div className="p-3 rounded-lg bg-secondary/50 border border-border">
            <CircuitBoard className="h-6 w-6 text-primary" />
          </div>
        </div>

        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl text-balance">
          <span className="text-primary">Advanced</span> Electrical &
          <br />
          Computer Engineering Lab
        </h1>
        
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto text-pretty">
          Pioneering research at the intersection of hardware and software. We develop next-generation systems for embedded computing, signal processing, and intelligent electronics.
        </p>
        
        <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">
          <Button size="lg" className="gap-2">
            Explore Our Research
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg">
            View Publications
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 gap-8 sm:grid-cols-4 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">25+</div>
            <div className="text-sm text-muted-foreground mt-1">Active Researchers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">150+</div>
            <div className="text-sm text-muted-foreground mt-1">Publications</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">$5M+</div>
            <div className="text-sm text-muted-foreground mt-1">Research Funding</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">12</div>
            <div className="text-sm text-muted-foreground mt-1">Industry Partners</div>
          </div>
        </div>
      </div>
    </section>
  )
}
