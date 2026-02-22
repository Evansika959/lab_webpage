import Link from "next/link"
import { Github, Linkedin, Twitter } from "lucide-react"

const footerLinks = {
  research: [
    { name: "Embedded Systems", href: "#" },
    { name: "Signal Processing", href: "#" },
    { name: "ML Hardware", href: "#" },
    { name: "Power Electronics", href: "#" },
  ],
  resources: [
    { name: "Publications", href: "#publications" },
    { name: "Facilities", href: "#facilities" },
    { name: "Open Positions", href: "#" },
    { name: "News & Events", href: "#" },
  ],
  connect: [
    { name: "Contact Us", href: "#contact" },
    { name: "Industry Partners", href: "#" },
    { name: "Alumni Network", href: "#" },
    { name: "Newsletter", href: "#" },
  ],
}

const socialLinks = [
  { name: "Twitter", href: "#", icon: Twitter },
  { name: "LinkedIn", href: "#", icon: Linkedin },
  { name: "GitHub", href: "#", icon: Github },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <span className="text-xl font-bold tracking-tight text-foreground">
                <span className="text-primary">ECE</span> Lab
              </span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              Advancing the frontiers of electrical and computer engineering through innovative research and education.
            </p>
            <div className="mt-6 flex gap-4">
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <link.icon className="h-5 w-5" />
                  <span className="sr-only">{link.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-3 gap-8 lg:col-span-3">
            <div>
              <h3 className="text-sm font-semibold text-foreground">Research</h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.research.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground">Resources</h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground">Connect</h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.connect.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Advanced ECE Lab. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
