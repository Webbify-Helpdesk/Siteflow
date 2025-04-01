"use client"

import { useState } from "react"
import { SectionContainer } from "./section-container"
import { Check } from "lucide-react"

/**
 * Section4 component 
 * Displays pricing options with feature comparison
 */
export function Section4() {
  // State for the selected pricing period
  const [selectedPeriod, setSelectedPeriod] = useState<'onetime' | 'monthly'>('onetime')

  // Define the pricing data for different periods
  const pricingData = {
    onetime: [
    {
      name: "Startup",
      price: "14 999",
      description: "Perfekt för nya företag som vill äga sin hemsida direkt",
      features: [
        "Responsiv webbdesign",
        "5 sidor",
        "SEO-optimering",
        "Kontaktformulär",
        "Anpassning av företagsfärger",
        "1 månads support",
        "Äganderätt till hemsidan",
      ],
      featured: false,
      cta: "Välj paket",
    },
    {
      name: "Business",
      price: "29 990",
      description: "För etablerade företag som vill äga en mer avancerad hemsida",
      features: [
        "Allt i Startup",
        "Upp till 10 sidor",
        "E-handel integration",
        "Nyhetsbrev",
        "Avancerad SEO-optimering",
        "CMS-integration",
        "3 månaders support",
        "Hastighetsoptimering",
        "Äganderätt till hemsidan",
      ],
      featured: true,
      cta: "Populäraste valet",
    },
    {
      name: "Enterprise",
      price: "",
      description: "Skräddarsydd lösning för större företag med specifika behov",
      features: [
        "Allt i Business",
        "Obegränsat antal sidor",
        "Anpassade appar & verktyg",
        "API-integrationer",
        "Avancerad säkerhet",
        "Prestandaoptimering",
        "6 månaders support",
        "Dedikerad projektledare",
        "Äganderätt till hemsidan",
      ],
      featured: false,
      cta: "Kontakta oss för pris",
    },
  ],
    monthly: [
      {
        name: "Startup",
        price: "990",
        description: "Perfekt för nya företag som vill slippa underhåll och drift",
        features: [
          "Responsiv webbdesign",
          "5 sidor",
          "SEO-optimering",
          "Kontaktformulär",
          "Anpassning av företagsfärger",
          "Kontinuerlig support",
          "Vi hanterar all drift och underhåll",
          "Regelbundna säkerhetsuppdateringar",
          "Ingen bindningstid",
        ],
        featured: false,
        cta: "Välj paket",
      },
      {
        name: "Business",
        price: "1 990",
        description: "För etablerade företag som behöver en komplett lösning",
        features: [
          "Allt i Startup",
          "Upp till 10 sidor",
          "E-handel integration",
          "Nyhetsbrev",
          "Avancerad SEO-optimering",
          "CMS-integration",
          "Prioriterad support",
          "Hastighetsoptimering",
          "Vi hanterar all drift och underhåll",
          "Månadsvis prestationsrapport",
        ],
        featured: true,
        cta: "Populäraste valet",
      },
      {
        name: "Enterprise",
        price: "",
        description: "Skräddarsydd lösning med premium hantering och support",
        features: [
          "Allt i Business",
          "Obegränsat antal sidor",
          "Anpassade appar & verktyg",
          "API-integrationer",
          "Avancerad säkerhet",
          "Prestandaoptimering",
          "Direktsupport dygnet runt",
          "Dedikerad projektledare",
          "Vi hanterar all drift och underhåll",
          "Garanterad upptid",
        ],
        featured: false,
        cta: "Kontakta oss för pris",
      },
    ],
  }

  // Get the current pricing tiers based on selected period
  const pricingTiers = pricingData[selectedPeriod]

  return (
    <SectionContainer className="bg-gray-50">
      <div>
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-4xl font-bold mb-4">
            Prispaket
          </h2>
          
          {/* Pricing period selector */}
          <div className="flex flex-col items-center justify-center mb-8 mt-6">
            <div className="inline-flex p-1 bg-gray-100 rounded-lg">
              <button 
                onClick={() => setSelectedPeriod('onetime')} 
                className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${selectedPeriod === 'onetime' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-500 hover:text-gray-900'}`}
              >
                Engångspris
              </button>
              <button 
                onClick={() => setSelectedPeriod('monthly')} 
                className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${selectedPeriod === 'monthly' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-500 hover:text-gray-900'}`}
              >
                Månadsvis
              </button>
            </div>
            <div className="mt-4 max-w-xl text-sm text-gray-500">
              {selectedPeriod === 'onetime' ? 
                'Med engångspris köper du din hemsida och äger den helt själv. Support och hantering ingår under den initiala perioden.' : 
                'Med månadsvis betalning sköter vi all hantering, uppdateringar och support så länge du är kund, utan bindningstid.'}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <div 
              key={index}
              className={`rounded-xl transition-all duration-300 hover:shadow-xl relative
                ${tier.featured 
                  ? 'border-2 border-[#0099ff] shadow-lg relative' 
                  : 'border border-gray-200 hover:border-gray-300'}`}
            >
              {tier.featured && (
                <div className="absolute top-0 inset-x-0 flex items-center justify-center transform -translate-y-1/2 z-50">
                  <span className="bg-[#0099ff] text-white text-xs font-semibold px-4 py-1 rounded-full shadow-sm">
                    Rekommenderat
                  </span>
                </div>
              )}
              
              <div className={`p-4 ${tier.featured ? 'bg-blue-50' : 'bg-white'} rounded-t-xl`}>
                <h3 className="text-lg font-bold mb-1 text-gray-900">{tier.name}</h3>
                <div className="flex items-baseline mb-2">
                  {tier.price ? (
                    <>
                      <span className="text-3xl font-extrabold text-gray-900">{tier.price}</span>
                      <span className="ml-1 text-lg font-semibold text-gray-500">kr{selectedPeriod === 'monthly' ? '/mån' : ''}</span>
                    </>
                  ) : (
                    <span className="text-3xl font-extrabold text-gray-900">Kontakta oss</span>
                  )}
                </div>
                <p className="text-gray-600 mb-3 text-sm">{tier.description}</p>
              </div>
              
              <div className="p-4 border-t border-gray-200 bg-white rounded-b-xl">
                <ul className="space-y-2 mb-4">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className="flex-shrink-0 w-4 h-4 text-[#0099ff]">
                        <Check size={14} className="stroke-[#0099ff]" />
                      </div>
                      <span className="ml-2 text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button 
                  className={`w-full py-3 px-6 rounded-md text-center font-medium transition-colors 
                    ${tier.featured 
                      ? 'bg-[#0099ff] text-white hover:bg-[#0088ee]' 
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}
                >
                  {tier.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            Alla priser är exklusive moms. {selectedPeriod === 'onetime' ? 'Med engångspriset äger du hemsidan helt utan extra kostnader.' : 'Månadsvis fakturering utan bindningstid, vi hanterar allt åt dig.'} Kontakta oss för att diskutera skräddarsydda lösningar.
          </p>
        </div>
      </div>
    </SectionContainer>
  )
}
