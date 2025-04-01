"use client"

import Link from "next/link"

/**
 * Footer component for the Siteflow website
 * Uses semantic HTML and accessibility best practices
 */
export function Footer() {
  return (
    <div className="container flex flex-col gap-4 py-10 md:flex-row md:gap-8">
      <div className="flex-1 space-y-2">
        <h2 className="text-xl font-bold">
          <span className="text-[#0099ff]">Site</span>
          <span className="text-[#1a2238]">flow</span>
        </h2>
        <p className="text-sm text-muted-foreground">
          Professionell webbutveckling enligt best practice.
        </p>
      </div>
      <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-4">
        <div className="space-y-2">
          <h3 className="text-sm font-medium">Företag</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <Link href="#om-oss" className="text-muted-foreground hover:text-[#0099ff] transition-colors">
                Om oss
              </Link>
            </li>
            <li>
              <Link href="#kontakt" className="text-muted-foreground hover:text-[#0099ff] transition-colors">
                Kontakt
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-2">
          <h3 className="text-sm font-medium">Tjänster</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <Link href="#tjanster" className="text-muted-foreground hover:text-[#0099ff] transition-colors">
                Webbutveckling
              </Link>
            </li>
            <li>
              <Link href="#tjanster" className="text-muted-foreground hover:text-[#0099ff] transition-colors">
                UI/UX Design
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
