import { siteConfig } from "@/config/site";

export default function HomePage() {
  return (
    <main className="flex-1 flex items-center justify-center gap-6">
      <header>
        <h1>{siteConfig.name}</h1>
        <span>{siteConfig.description}</span>
      </header>
    </main>
  )
}
