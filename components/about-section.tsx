import { Target, Lightbulb, Award } from "lucide-react"

const features = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To advance the frontiers of electrical and computer engineering through innovative research, exceptional education, and meaningful industry collaboration.",
  },
  {
    icon: Lightbulb,
    title: "Our Vision",
    description:
      "To be a world-leading research center that shapes the future of intelligent systems, sustainable electronics, and transformative computing technologies.",
  },
  {
    icon: Award,
    title: "Our Impact",
    description:
      "Our research has led to breakthrough technologies adopted by industry leaders, numerous patents, and graduates who are shaping the tech landscape globally.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-primary">
            About Us
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Pioneering the Future of ECE
          </p>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Established in 2005, the Advanced ECE Lab has been at the forefront of electrical and computer engineering research, pushing boundaries and training the next generation of innovators.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="relative rounded-lg border border-border bg-card p-8 transition-all hover:border-primary/50"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-6">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
