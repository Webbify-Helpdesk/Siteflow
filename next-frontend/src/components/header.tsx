"use client"

import Link from "next/link"

/**
 * Header component for the Siteflow website
 * Uses semantic HTML and follows accessibility best practices
 */
export function Header() {
  return (
    <div className="container flex h-16 items-center justify-between py-4">
      <div className="flex items-center gap-2">
        <span className="text-xl font-bold">
          <span className="text-[#0099ff]">Site</span>
          <span className="text-[#1a2238]">flow</span>
        </span>
      </div>
      <nav className="hidden md:flex gap-6">
        <Link href="#funktioner" className="text-sm font-medium hover:text-[#0099ff] transition-colors">
          Funktioner
        </Link>
        <Link href="#priser" className="text-sm font-medium hover:text-[#0099ff] transition-colors">
          Priser
        </Link>
        <Link href="#omdomen" className="text-sm font-medium hover:text-[#0099ff] transition-colors">
          Omdömen
        </Link>
        <Link href="#kontakt" className="text-sm font-medium hover:text-[#0099ff] transition-colors">
          Kontakt
        </Link>
      </nav>
      <div>
        <Link 
          href="#kom-igang" 
          className="rounded-md bg-[#0099ff] px-4 py-2 text-sm font-medium text-white hover:bg-[#007acc] transition-colors"
        >
          Kom igång
          <span className="ml-1">→</span>
        </Link>
      </div>
    </div>
  )
}
