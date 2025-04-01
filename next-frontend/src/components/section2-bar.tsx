"use client"

import { Award, Trophy, Users } from "lucide-react"
import { useEffect, useState } from "react"

/**
 * Section2Bar component 
 * Smal statbar med uppräkning av siffror och vita ikoner
 */
export function Section2Bar() {
  const [counts, setCounts] = useState({
    clients: 0,
    projects: 0,
    awards: 0
  })

  // Animera uppräkningen
  useEffect(() => {
    const duration = 3500 // Långsammare animation: 3.5 sekunder
    const targetCounts = {
      clients: 152, // Mer realistiska siffror
      projects: 314,
      awards: 8
    }
    
    // Starttid för animationen
    const startTime = Date.now()
    
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      // Easing-funktion för smidigare animering
      const easedProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
      
      setCounts({
        clients: Math.floor(easedProgress * targetCounts.clients),
        projects: Math.floor(easedProgress * targetCounts.projects),
        awards: Math.floor(easedProgress * targetCounts.awards)
      })
      
      if (progress === 1) {
        clearInterval(timer)
      }
    }, 16) // 60 FPS
    
    return () => clearInterval(timer)
  }, [])

  const stats = [
    {
      icon: <Users className="h-7 w-7 text-white" />,
      count: counts.clients,
      label: "Nöjda kunder"
    },
    {
      icon: <Trophy className="h-7 w-7 text-white" />,
      count: counts.projects,
      label: "Genomförda projekt"
    },
    {
      icon: <Award className="h-7 w-7 text-white" />,
      count: counts.awards,
      label: "Branschutmärkelser"
    }
  ]

  return (
    <section className="w-full py-5 bg-gradient-to-r from-[#0080e5] to-[#00b2ff] relative overflow-hidden">
      <div className="container relative z-10 max-w-5xl mx-auto">
        <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-between items-center gap-10 md:gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="flex-shrink-0 p-2 rounded-full bg-white/5"> {/* Minskad genomskinlighet */}
                {stat.icon}
              </div>
              <div>
                <div className="text-3xl font-bold text-white">{stat.count}+</div>
                <div className="text-sm text-white/80">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
