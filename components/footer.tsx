import Link from "next/link"
import type { FooterContent } from "@/lib/content"
import { Github, Linkedin, Twitter } from "lucide-react"

const iconMap = { Twitter, Linkedin, Github }

type FooterProps = {
  content: FooterContent
}

export function Footer({ content }: FooterProps) {
  const showAccent = content.brand.includes(content.brandAccent)
  const brandRemainder = showAccent
    ? content.brand.replace(content.brandAccent, "").trim()
    : content.brand

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <span className="text-xl font-bold tracking-tight text-foreground">
                {showAccent ? (
                  <>
                    <span className="text-primary">{content.brandAccent}</span>{" "}
                    {brandRemainder}
                  </>
                ) : (
                  content.brand
                )}
              </span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              {content.description}
            </p>
            <div className="mt-6 flex gap-4">
              {content.social.map((link) => {
                const Icon = iconMap[link.icon as keyof typeof iconMap] ?? Twitter

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Icon className="h-5 w-5" />
                    <span className="sr-only">{link.name}</span>
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-3 gap-8 lg:col-span-3">
            {content.columns.map((column) => (
              <div key={column.title}>
                <h3 className="text-sm font-semibold text-foreground">{column.title}</h3>
                <ul className="mt-4 space-y-3">
                  {column.links.map((link) => (
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
            ))}
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
