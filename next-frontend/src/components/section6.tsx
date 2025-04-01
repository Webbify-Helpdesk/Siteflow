"use client"

import { useState } from "react"
import { SectionContainer } from "./section-container"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FiCheckCircle, FiCode, FiServer, FiShield, FiZap } from "react-icons/fi"

/**
 * Section6 component 
 * Technical Excellence section with performance metrics
 */
export function Section6() {
  const [activeTab, setActiveTab] = useState("webbprestanda")
  
  // Performance metrics data with explanations for non-technical users
  const performanceMetrics = {
    webbprestanda: [
      { 
        metric: "Laddningstid", 
        value: "0.8s", 
        target: "<2s", 
        status: "excellent", 
        explanation: "Tiden det tar för hela sidan att ladda. Som att vänta på att kaffet ska bryggas."
      },
      { 
        metric: "Första visuella elementet", 
        value: "0.6s", 
        target: "<1s", 
        status: "excellent", 
        explanation: "Hur snabbt användaren ser första innehållet. Snabbare än ett ögonblick!"
      },
      { 
        metric: "Interaktiv sida", 
        value: "1.2s", 
        target: "<3s", 
        status: "excellent", 
        explanation: "När kunden kan börja använda webbplatsen. Som att slå på en TV."
      },
    ],
    tillgänglighet: [
      { 
        metric: "Tillgänglighet", 
        value: "AA+", 
        target: "AA", 
        status: "excellent", 
        explanation: "Hur lätt sidan är att använda för alla. Som att ha en ramp och en trappa."
      },
      { 
        metric: "Kontrast", 
        value: "5.2:1", 
        target: ">4.5:1", 
        status: "excellent", 
        explanation: "Hur lätt det är att läsa texten mot bakgrunden. Som tydliga vägskyltar."
      },
      { 
        metric: "Tangentbord", 
        value: "100%", 
        target: "100%", 
        status: "excellent", 
        explanation: "Kan användas utan mus, bara med tangentbord. Perfekt för alla."
      },
    ],
    seo: [
      { 
        metric: "Sökmotorscore", 
        value: "98/100", 
        target: ">90", 
        status: "excellent", 
        explanation: "Hur bra Google hittar din sida. Som en fyrbåk för kunder."
      },
      { 
        metric: "Sidstruktur", 
        value: "Perfekt", 
        target: "Bra", 
        status: "excellent", 
        explanation: "Hur välorganiserad sidan är. Som ett välorganiserat kontor."
      },
      { 
        metric: "Sidbeskrivningar", 
        value: "100%", 
        target: "100%", 
        status: "excellent", 
        explanation: "Text som beskriver sidan för Google. Som ditt företagskort."
      },
    ],
    säkerhet: [
      { 
        metric: "Kryptering", 
        value: "A+", 
        target: "A", 
        status: "excellent", 
        explanation: "Skyddar information på din sajt. Som ett högsäkerhetslås."
      },
      { 
        metric: "Säkerhetsinställningar", 
        value: "100%", 
        target: ">90%", 
        status: "excellent", 
        explanation: "Skyddsbarriärer mot hackers. Som ett avancerat larmsystem."
      },
      { 
        metric: "Innehållsskydd", 
        value: "Högsta", 
        target: "Bra", 
        status: "excellent", 
        explanation: "Skyddar ditt innehåll från obehöriga. Som en vakthund."
      },
    ],
  }

  // Technology stack with detailed expertise levels
  const techStack = [
    { 
      name: "Modern webb", 
      icon: <FiCode />, 
      level: 95, 
      years: 8,
      details: "Vi bygger moderna hemsidor som laddar snabbt och ser bra ut på alla enheter.",
      businessValue: "Fler kunder stannar kvar och blir till affärer."
    },
    { 
      name: "Servrar", 
      icon: <FiServer />, 
      level: 92, 
      years: 7,
      details: "Vi skapar kraftfulla system som klarar många besökare samtidigt.",
      businessValue: "Din sajt fungerar även under Black Friday och stora kampanjer."
    },
    { 
      name: "Snabbhet", 
      icon: <FiZap />, 
      level: 98, 
      years: 10,
      details: "Vi optimerar varje del av webbplatsen för att ladda blixtsnabbt.",
      businessValue: "Dubbelt så snabb sajt ger ofta 20% fler konverteringar."
    },
    { 
      name: "Säkerhet", 
      icon: <FiShield />, 
      level: 96, 
      years: 9,
      details: "Vi skyddar din webbplats mot alla vanliga hot och säkerhetsproblem.",
      businessValue: "Trygghet för dig och dina kunder, inga obehagliga överraskningar."
    },
  ]

  return (
    <SectionContainer className="bg-gradient-to-r from-[#0080e5] to-[#00b2ff] relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute top-40 -right-16 w-64 h-64 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute top-20 -left-20 w-40 h-40 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
      
      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1 rounded-full bg-white/10 text-white text-xs font-medium tracking-wider mb-4">
            TEKNISK EXCELLENCE
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Sajter som <span className="text-blue-200">ger resultat</span>
          </h2>
          
          <p className="text-blue-100 max-w-2xl mx-auto text-lg">
            Vi bygger snabba, säkra och användarvänliga webbplatser som får dina kunder att stanna längre
            och genomföra fler köp. Det tekniska är vårt jobb - dina affärer är resultatet.
          </p>
        </div>
        
        {/* Main content */}
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 relative">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Left column - Tech stack */}
            <div className="w-full md:w-1/3">
              <h3 className="text-lg font-bold text-[#1a2238] mb-4">Teknisk expertis</h3>
              
              {/* Tech level bars */}
              <div className="space-y-6 mb-8">
                {techStack.map((tech, index) => (
                  <div key={index} className="relative">
                    <div className="cursor-pointer">
                      <div className="flex justify-between items-center mb-1">
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center text-[#0099ff] mr-2 shadow-sm">
                            {tech.icon}
                          </div>
                          <div>
                            <span className="text-sm font-medium block">{tech.name}</span>
                            <span className="text-xs text-gray-500">{tech.years} års erfarenhet</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-sm font-bold block">{tech.level}%</span>
                          <span className="text-xs text-gray-500">expertis</span>
                        </div>
                      </div>
                      <div className="relative">
                        <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden shadow-inner">
                          <div 
                            className="h-full bg-gradient-to-r from-blue-500 to-[#0099ff] rounded-full"
                            style={{ width: `${tech.level}%` }}
                          />
                        </div>
                        {/* Level markers */}
                        <div className="w-full flex justify-between px-1 mt-1">
                          <div className="text-[8px] text-gray-400">Novice</div>
                          <div className="text-[8px] text-gray-400">Standard</div>
                          <div className="text-[8px] text-gray-400">Expert</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right column - Performance metrics */}
            <div className="w-full md:w-2/3">
              <div className="flex justify-between items-center mb-5">
                <h3 className="text-lg font-bold text-[#1a2238]">Prestandamätningar</h3>

                <div className="flex bg-gray-100 rounded-lg p-1">
                  {Object.keys(performanceMetrics).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-3 py-1 text-sm rounded-md transition-colors ${
                        activeTab === tab 
                          ? 'bg-[#0099ff] text-white' 
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Performance metrics cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {performanceMetrics[activeTab as keyof typeof performanceMetrics].map((item, index) => (
                  <Card key={index} className="border border-gray-100 overflow-hidden group hover:shadow-md transition-all duration-300">
                    <div className={`h-1 w-full ${item.status === "excellent" ? "bg-green-500" : item.status === "good" ? "bg-yellow-500" : "bg-red-500"}`}></div>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-sm font-medium">{item.metric}</h4>
                        <Badge className={`${item.status === "excellent" ? "bg-green-100 text-green-800" : item.status === "good" ? "bg-yellow-100 text-yellow-800" : "bg-red-100 text-red-800"}`}>
                          {item.status === "excellent" ? "Utmärkt" : item.status === "good" ? "Bra" : "Behöver förbättras"}
                        </Badge>
                      </div>
                      <div className="flex justify-between items-baseline mb-1">
                        <div>
                          <span className="text-2xl font-bold">{item.value}</span>
                        </div>
                        <div className="text-xs text-gray-500">
                          Mål: {item.target}
                        </div>
                      </div>
                      <div className="mt-2 text-xs text-gray-600 bg-gray-50 p-2 rounded border-l-2 border-blue-300">
                        {item.explanation}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-12 text-center">
          <Button className="bg-white text-[#0099ff] hover:bg-blue-50 hover:text-[#0088ee] shadow-md">
            <FiCheckCircle className="mr-2" /> Få gratis sajtkontroll
          </Button>
          
          <div className="mt-6 text-blue-100 text-sm max-w-md mx-auto">
            Vi gör en kostnadsfri analys av din nuvarande sajt och visar hur 
            mycket bättre resultat du kan få med våra lösningar
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}
