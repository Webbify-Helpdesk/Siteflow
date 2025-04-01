import { Hero } from "@/components/hero"
import { Section2Bar } from "@/components/section2-bar"
import { Section2 } from "@/components/section2"
import { Section3 } from "@/components/section3"
import { Section4 } from "@/components/section4"
import { Section5 } from "@/components/section5"
import { Section6 } from "@/components/section6"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <Header />
      </header>
      
      <main className="flex-1">
        <Hero />
        <Section2Bar />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section6 />
        <Section5 />
      </main>
      
      <footer className="border-t bg-background">
        <Footer />
      </footer>
    </div>
  )
}
