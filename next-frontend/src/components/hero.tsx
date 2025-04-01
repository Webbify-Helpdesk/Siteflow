"use client"

import { StarIcon } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SectionContainer } from "./section-container"

export function Hero() {
  return (
    <SectionContainer className="overflow-hidden relative">
      {/* Decorative floating elements */}
      <div className="absolute top-0 -right-[20%] w-96 h-96 bg-[#0099ff]/5 rounded-full blur-xl animate-float-slow" />
      <div className="absolute top-0 -left-[20%] w-72 h-72 bg-[#0099ff]/10 rounded-full blur-lg animate-float-medium" />
      <div className="absolute -bottom-20 right-1/4 w-64 h-64 bg-[#007acc]/10 rounded-full blur-xl animate-float-reverse" />
      
      {/* Subtle background elements */}
      <div className="absolute top-40 -right-[10%] w-64 h-64 bg-blue-100 rounded-full opacity-20 blur-3xl" />
      <div className="absolute top-20 -left-[10%] w-40 h-40 bg-blue-100 rounded-full opacity-20 blur-3xl" />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 items-center z-10 relative">
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-[#0099ff] font-semibold text-lg md:text-xl mb-2">
              <svg width="24" height="15" viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg">
                <rect width="640" height="400" fill="#006AA7"/>
                <rect width="160" height="400" x="160" fill="#FECC00"/>
                <rect width="640" height="100" y="150" fill="#FECC00"/>
              </svg>
              <span>Sveriges bästa webbyrå</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#1a2238]">
              Tid är pengar.<br />
              <span className="text-[#0099ff]">Spara båda.</span>
            </h1>
            <p className="text-gray-600 max-w-[600px] text-lg md:text-xl">
              Vi tar hand om allt - utveckling, planering och underhåll till ett
              konkurrenskraftigt pris. Vi hjälper ditt företag att flöda i den digitala
              världen.
            </p>
          </div>
          
          <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-4">
            <div className="relative w-full max-w-md">
              <Input
                type="email"
                placeholder="Din e-postadress"
                className="w-full px-5 py-4 text-base border-gray-200 focus:ring-[#0099ff]"
              />
              <Button 
                className="mt-2 sm:mt-0 sm:absolute sm:right-0 sm:top-0 sm:h-full text-base font-medium bg-[#0099ff] hover:bg-[#007acc]"
              >
                Kom igång
              </Button>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="flex text-yellow-400">
              {[1, 2, 3, 4, 5].map((_, index) => (
                <StarIcon key={index} size={20} fill="currentColor" />
              ))}
            </div>
            <span className="text-base font-medium">4.9 (43+ omdömen)</span>
          </div>
          
          {/* Logo placeholders */}
          <div className="flex items-center gap-8 mt-6">
            <Image 
              src="/gap.png"
              alt="GAP logotyp"
              width={120}
              height={120}
              className="w-24 h-auto object-contain"
              quality={100}
            />
            <Image 
              src="/lvl3react.svg"
              alt="LVL3 React logotyp"
              width={120}
              height={120}
              className="w-24 h-auto object-contain"
              quality={100}
            />
            <Image 
              src="/Platinum.webp"
              alt="Platinum logotyp"
              width={120}
              height={120}
              className="w-24 h-auto object-contain"
              quality={100}
            />
          </div>
        </div>
        
        <div className="flex flex-col justify-center lg:justify-end lg:-mt-12">
          <Image 
            src="/Blue And White Modern Responsive Website Development Services Instagram Post (Logotyp).svg"
            alt="Laptop visande webbdesign"
            width={800}
            height={600}
            className="w-full max-w-2xl h-auto object-contain transform lg:scale-100"
          />
        </div>
      </div>
    </SectionContainer>
  )
}
