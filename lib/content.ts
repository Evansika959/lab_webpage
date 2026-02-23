import fs from "node:fs/promises"
import path from "node:path"
import { marked } from "marked"
import YAML from "yaml"

export type HeroContent = {
  titleHighlight: string
  titleLineOne: string
  titleLineTwo: string
  primaryButton: string
  secondaryButton: string
  description: string
  stats: { value: string; label: string }[]
}

export type AboutContent = {
  eyebrow: string
  title: string
  description: string
  features: { icon: string; title: string; description: string }[]
}

export type ResearchContent = {
  eyebrow: string
  title: string
  description: string
  areas: { icon: string; title: string; description: string; tags: string[] }[]
}

export type TeamContent = {
  eyebrow: string
  title: string
  description: string
  members: {
    name: string
    role: string
    specialty: string
    image?: string
    initials: string
    email?: string
    linkedin?: string
  }[]
}

export type PublicationsContent = {
  eyebrow: string
  title: string
  description: string
  buttonLabel: string
  items: {
    title: string
    authors: string
    venue: string
    year: string
    type: string
    url?: string
  }[]
}

export type FacilitiesContent = {
  eyebrow: string
  title: string
  description: string
  items: {
    icon: string
    title: string
    description: string
    specs: string[]
  }[]
}

export type ContactContent = {
  eyebrow: string
  title: string
  description: string
  formTitle: string
  formDescription: string
  labels: {
    firstName: string
    lastName: string
    email: string
    subject: string
    message: string
    submit: string
  }
  info: { icon: string; title: string; details: string[] }[]
}

export type HeaderContent = {
  brand: string
  brandAccent: string
  cta: string
  links: { name: string; href: string }[]
}

export type FooterContent = {
  brand: string
  brandAccent: string
  description: string
  columns: { title: string; links: { name: string; href: string }[] }[]
  social: { name: string; href: string; icon: string }[]
}

export type SectionContent<T> = {
  data: T
  html: string
}

const contentDir = path.join(process.cwd(), "content")

async function readYaml<T extends { description?: string }>(
  slug: string,
): Promise<SectionContent<T>> {
  const filePath = path.join(contentDir, `${slug}.yaml`)
  const raw = await fs.readFile(filePath, "utf8")
  const data = YAML.parse(raw) as T
  const description = data.description?.trim() ?? ""
  const html = description ? await marked.parse(description) : ""
  return { data, html }
}

export async function getPageContent() {
  const [
    header,
    hero,
    about,
    research,
    team,
    publications,
    facilities,
    contact,
    footer,
  ] = await Promise.all([
    readYaml<HeaderContent>("header"),
    readYaml<HeroContent>("hero"),
    readYaml<AboutContent>("about"),
    readYaml<ResearchContent>("research"),
    readYaml<TeamContent>("team"),
    readYaml<PublicationsContent>("publications"),
    readYaml<FacilitiesContent>("facilities"),
    readYaml<ContactContent>("contact"),
    readYaml<FooterContent>("footer"),
  ])

  return {
    header,
    hero,
    about,
    research,
    team,
    publications,
    facilities,
    contact,
    footer,
  }
}
