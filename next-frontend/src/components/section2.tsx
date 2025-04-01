"use client"

import { ChevronRight } from "lucide-react"
import { FiCode, FiPenTool, FiTool, FiUsers, FiSearch, FiBarChart2, FiImage, FiGlobe } from "react-icons/fi"
import { Button } from "@/components/ui/button"
import { SectionContainer } from "./section-container"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

/**
 * Section2 component 
 * Clean, professional section with grid layout based on reference design
 */
export function Section2() {
  return (
    <SectionContainer className="bg-gray-50">
      <div>
        {/* Header area */}
        <div className="mb-12 max-w-3xl">
          <div className="inline-block px-4 py-1 rounded-full bg-blue-100 text-[#0099ff] text-xs font-medium tracking-wider mb-5 border border-[#0099ff]/30">
            VÅRA SPECIALISTKOMPETENSER
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1a2238] mb-6 leading-tight">
            Lär känna Siteflow
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Vi erbjuder en komplett portfölj av digitala tjänster för att hjälpa ditt företag
            att maximera sin närvaro och effektivitet på webben.
          </p>
        </div>

        {/* Grid layout for features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Service cards */}
          {[
            {
              title: "Webbutveckling",
              description: "Skräddarsydda webbplatser med senaste tekniken.",
              icon: <FiCode className="w-5 h-5" />,
              color: "#0099ff"
            },
            {
              title: "UI/UX Design",
              description: "Användarvänliga gränssnitt som inspirerar.",
              icon: <FiPenTool className="w-5 h-5" />,
              color: "#20c997"
            },
            {
              title: "Underhåll",
              description: "Kontinuerlig support och uppdatering av din sajt.",
              icon: <FiTool className="w-5 h-5" />,
              color: "#9061f9"
            },
            {
              title: "Kundportal",
              description: "Personliga inloggningar för bättre kundservice.",
              icon: <FiUsers className="w-5 h-5" />,
              color: "#f59e0b"
            },
            {
              title: "SEO",
              description: "Optimering för att synas högre i sökresultaten.",
              icon: <FiSearch className="w-5 h-5" />,
              color: "#f97316"
            },
            {
              title: "Marknadsföring",
              description: "Digitala kampanjer som levererar resultat.",
              icon: <FiBarChart2 className="w-5 h-5" />,
              color: "#ef4444"
            },
            {
              title: "Logotyp Design",
              description: "Varumärkesidentitet som får dig att sticka ut.",
              icon: <FiImage className="w-5 h-5" />,
              color: "#ec4899"
            },
            {
              title: "Specialintegrationer",
              description: "Anslut dina system för sömlöst arbetsflöde.",
              icon: <FiGlobe className="w-5 h-5" />,
              color: "#6366f1"
            }
          ].map((service, index) => (
            <Card 
              key={index} 
              className="border border-[#0099ff]/10 shadow-sm hover:shadow-md transition-all duration-300 bg-white overflow-hidden group relative"
            >
              <div 
                className="absolute top-0 left-0 w-1 h-full" 
                style={{ backgroundColor: service.color }}
              />
              <CardContent className="p-6 flex items-start">
                <div className="mr-4">
                  <div 
                    className="w-12 h-12 flex items-center justify-center rounded-md text-white" 
                    style={{ backgroundColor: service.color }}
                  >
                    {service.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <Badge 
                    variant="outline" 
                    className="mb-2 font-medium bg-white/80" 
                    style={{ borderColor: service.color, color: service.color }}
                  >
                    {service.title}
                  </Badge>
                  <div className="text-[#1a2238] font-medium mb-1">{service.description}</div>
                </div>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="group-hover:-translate-y-px transition-transform" 
                  style={{ color: service.color }}
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </SectionContainer>
  )
}
