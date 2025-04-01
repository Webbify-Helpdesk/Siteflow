"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FiArrowRight } from "react-icons/fi"
import { SectionContainer } from "./section-container"
import Image from "next/image"

/**
 * Section3 component 
 * Showcasing company projects and portfolio items
 */
export function Section3() {
  // Sample project data
  const projects = [
    {
      id: 1,
      category: "E-handel",
      image: "https://images.unsplash.com/photo-1541560052-77ec1bbc09f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      title: "Skapa en e-handelsplattform som ökar försäljningen",
    },
    {
      id: 2,
      category: "Landing Page",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Effektiv landing page med hög konvertering",
    },
    {
      id: 3,
      category: "FAQ",
      image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Responsiv webbplats för medicinsk klinik",
    },
    {
      id: 4,
      category: "Tips",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
      title: "Navigation och UX för en effektiv B2B-portal",
    }
  ]
  
  // Project Card Component
  const ProjectCard = ({ project }: { project: typeof projects[0] }) => (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all border border-gray-100 h-full flex flex-col">
      <div className="relative overflow-hidden">
        <div className="absolute top-4 right-4 z-10">
          <Badge className="bg-white text-[#1a2238] font-medium border-none text-xs">
            {project.category}
          </Badge>
        </div>
        <div className="w-full aspect-[4/3] overflow-hidden">
          <Image 
            src={project.image} 
            alt={project.title}
            width={600}
            height={450}
            className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
          />
        </div>
      </div>
      
      <div className="p-4 flex flex-col">
        <h3 className="text-base font-bold text-[#1a2238] mb-1 line-clamp-2 hover:text-[#0099ff] transition-colors">
          {project.title}
        </h3>
      </div>
    </div>
  )

  return (
    <SectionContainer>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left column with headline */}
        <div className="lg:col-span-1">
          <Badge className="mb-4 px-3 py-1 bg-blue-100 text-[#0099ff] font-medium border-none hover:bg-blue-200">
            Projekt
          </Badge>
          
          <h2 className="text-4xl font-bold tracking-tight text-[#1a2238] mb-6">
            Vår webbplats blir din branschreferens
          </h2>
          
          <p className="text-gray-600 mb-8">
            Ta del av våra framgångsrika kundcase och se hur vi har hjälpt företag att uppnå
            sina digitala mål med precision och expertis.
          </p>
          
          <Button 
            className="bg-[#0099ff] hover:bg-[#007acc] flex items-center"
            variant="default"
          >
            Visa alla projekt
            <FiArrowRight className="ml-2" />
          </Button>
        </div>
        
        {/* Right column with projects */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.slice(0, 2).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </SectionContainer>
  )
}
