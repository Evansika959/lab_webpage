import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Markdown } from "@/components/markdown"
import type { SectionContent, TeamContent } from "@/lib/content"
import { Linkedin, Mail } from "lucide-react"
import Link from "next/link"

type TeamSectionProps = {
  content: SectionContent<TeamContent>
}

function normalizeEmailLink(email?: string) {
  if (!email || email === "#") {
    return "#"
  }
  if (email.startsWith("mailto:") || email.startsWith("http")) {
    return email
  }
  return `mailto:${email}`
}

export function TeamSection({ content }: TeamSectionProps) {
  const { data, html } = content

  return (
    <section id="team" className="py-24 bg-secondary/30">
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

        <div className="mt-16 grid grid-cols-1 gap-6">
          <Card className="group transition-all hover:border-primary/50 bg-card">
            <CardHeader className="text-center">
              <Avatar className="h-32 w-32 mx-auto mb-4">
                <AvatarImage src={data.pi.image || "/placeholder.svg"} alt={data.pi.name} />
                <AvatarFallback className="bg-primary/10 text-primary text-xl">
                  {data.pi.initials}
                </AvatarFallback>
              </Avatar>
              <CardTitle className="text-foreground text-2xl">
                {data.pi.name}
              </CardTitle>
              <CardDescription className="text-primary font-medium">
                {data.pi.role}
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-base text-muted-foreground mb-4 max-w-2xl mx-auto">
                {data.pi.specialty}
              </p>
              <div className="flex justify-center gap-3">
                <Link
                  href={normalizeEmailLink(data.pi.email)}
                  className="p-2 rounded-full bg-secondary hover:bg-primary/20 transition-colors"
                >
                  <Mail className="h-4 w-4 text-muted-foreground hover:text-primary" />
                  <span className="sr-only">Email {data.pi.name}</span>
                </Link>
                <Link
                  href={data.pi.linkedin || "#"}
                  className="p-2 rounded-full bg-secondary hover:bg-primary/20 transition-colors"
                >
                  <Linkedin className="h-4 w-4 text-muted-foreground hover:text-primary" />
                  <span className="sr-only">{data.pi.name} on LinkedIn</span>
                </Link>
              </div>
            </CardContent>
          </Card>

          {data.groups.map((group) => {
            if (!group.members.length) {
              return null
            }

            return (
              <div key={group.title} className="space-y-6">
                <h3 className="text-lg font-semibold text-foreground text-center">
                  {group.title}
                </h3>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {group.members.map((member) => (
                    <Card
                      key={member.name}
                      className="group transition-all hover:border-primary/50 bg-card"
                    >
                      <CardHeader className="text-center">
                        <Avatar className="h-24 w-24 mx-auto mb-4">
                          <AvatarImage
                            src={member.image || "/placeholder.svg"}
                            alt={member.name}
                          />
                          <AvatarFallback className="bg-primary/10 text-primary text-lg">
                            {member.initials}
                          </AvatarFallback>
                        </Avatar>
                        <CardTitle className="text-foreground">{member.name}</CardTitle>
                        <CardDescription className="text-primary font-medium">
                          {member.role}
                          {member.started ? (
                            <span className="block text-xs text-muted-foreground mt-1">
                              Started {member.started}
                            </span>
                          ) : null}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="text-center">
                        <p className="text-sm text-muted-foreground mb-4">
                          {member.specialty}
                        </p>
                        <div className="flex justify-center gap-3">
                          <Link
                            href={normalizeEmailLink(member.email)}
                            className="p-2 rounded-full bg-secondary hover:bg-primary/20 transition-colors"
                          >
                            <Mail className="h-4 w-4 text-muted-foreground hover:text-primary" />
                            <span className="sr-only">Email {member.name}</span>
                          </Link>
                          <Link
                            href={member.linkedin || "#"}
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
            )
          })}
        </div>
      </div>
    </section>
  )
}
