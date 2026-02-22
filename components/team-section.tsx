import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Linkedin, Mail } from "lucide-react"
import Link from "next/link"

const teamMembers = [
  {
    name: "Dr. Sarah Chen",
    role: "Lab Director & Professor",
    specialty: "Embedded Systems, VLSI Design",
    image: "/placeholder.svg?height=200&width=200",
    initials: "SC",
  },
  {
    name: "Dr. Michael Roberts",
    role: "Associate Professor",
    specialty: "Signal Processing, Machine Learning",
    image: "/placeholder.svg?height=200&width=200",
    initials: "MR",
  },
  {
    name: "Dr. Aisha Patel",
    role: "Assistant Professor",
    specialty: "Power Electronics, Renewable Energy",
    image: "/placeholder.svg?height=200&width=200",
    initials: "AP",
  },
  {
    name: "Dr. James Liu",
    role: "Research Scientist",
    specialty: "Hardware Security, Cryptography",
    image: "/placeholder.svg?height=200&width=200",
    initials: "JL",
  },
  {
    name: "Emily Watson",
    role: "PhD Candidate",
    specialty: "ML Accelerators, Edge Computing",
    image: "/placeholder.svg?height=200&width=200",
    initials: "EW",
  },
  {
    name: "David Kim",
    role: "PhD Candidate",
    specialty: "Wireless Systems, 5G Networks",
    image: "/placeholder.svg?height=200&width=200",
    initials: "DK",
  },
]

export function TeamSection() {
  return (
    <section id="team" className="py-24 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-primary">
            Our Team
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Meet the Researchers
          </p>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Our diverse team of faculty, researchers, and students brings together expertise from various domains to tackle complex engineering challenges.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <Card
              key={member.name}
              className="group transition-all hover:border-primary/50 bg-card"
            >
              <CardHeader className="text-center">
                <Avatar className="h-24 w-24 mx-auto mb-4">
                  <AvatarImage src={member.image || "/placeholder.svg"} alt={member.name} />
                  <AvatarFallback className="bg-primary/10 text-primary text-lg">
                    {member.initials}
                  </AvatarFallback>
                </Avatar>
                <CardTitle className="text-foreground">{member.name}</CardTitle>
                <CardDescription className="text-primary font-medium">
                  {member.role}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  {member.specialty}
                </p>
                <div className="flex justify-center gap-3">
                  <Link
                    href="#"
                    className="p-2 rounded-full bg-secondary hover:bg-primary/20 transition-colors"
                  >
                    <Mail className="h-4 w-4 text-muted-foreground hover:text-primary" />
                    <span className="sr-only">Email {member.name}</span>
                  </Link>
                  <Link
                    href="#"
                    className="p-2 rounded-full bg-secondary hover:bg-primary/20 transition-colors"
                  >
                    <Linkedin className="h-4 w-4 text-muted-foreground hover:text-primary" />
                    <span className="sr-only">{member.name} on LinkedIn</span>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
