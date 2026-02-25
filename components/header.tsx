"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { Menu, Moon, Sun, X } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import type { HeaderContent } from "@/lib/content"

type HeaderProps = {
  content: HeaderContent
}

export function Header({ content }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, resolvedTheme, setTheme } = useTheme()
  const showAccent = content.brand.includes(content.brandAccent)
  const brandRemainder = showAccent
    ? content.brand.replace(content.brandAccent, "").trim()
    : content.brand
  const isDark =
    mounted && (theme === "dark" || (theme === "system" && resolvedTheme === "dark"))

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    if (!mounted) return
    setTheme(isDark ? "light" : "dark")
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-3">
            <img
              src="/images/lab_logo.png"
              alt="ReaLLM of ASIC Lab logo"
              className="h-10 w-auto"
            />
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
        </div>
        <div className="flex lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          {content.links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDark ? (
              <Sun className="h-5 w-5 transition-transform duration-300 ease-out hover:rotate-12" />
            ) : (
              <Moon className="h-5 w-5 transition-transform duration-300 ease-out hover:-rotate-12" />
            )}
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="space-y-1 px-6 pb-4">
            {content.links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block py-2 text-base font-medium text-muted-foreground transition-colors hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              className="mt-4"
            >
              {isDark ? (
                <Sun className="h-5 w-5 transition-transform duration-300 ease-out hover:rotate-12" />
              ) : (
                <Moon className="h-5 w-5 transition-transform duration-300 ease-out hover:-rotate-12" />
              )}
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
