"use client"

import { SectionContainer } from "./section-container"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { FiMail, FiPhone } from "react-icons/fi"
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa"

/**
 * Section5 component 
 * Contact section with form and contact information
 */
export function Section5() {
  return (
    <SectionContainer className="bg-gray-50">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left side - Text and contact info */}
        <div>
          <h2 className="text-4xl font-bold leading-tight mb-4">
            Låt oss göra <span className="text-[#0099ff]">din vision</span> till verklighet
          </h2>
          
          <p className="text-gray-600 mb-10">
            Våra experter är redo att hjälpa dig skapa en webbplats som
            överträffar dina konkurrenter och driver resultat.
          </p>
          
          {/* Contact Information */}
          <div className="space-y-4 mb-8">
            <div className="flex items-center p-4 bg-white rounded-lg shadow-sm border border-gray-100">
              <div className="w-10 h-10 flex items-center justify-center bg-blue-50 rounded-full mr-4">
                <FiMail className="text-[#0099ff] w-5 h-5" />
              </div>
              <div>
                <div className="text-sm text-gray-500 font-medium">Maila oss</div>
                <div className="text-[#1a2238]">contact@bestpraktik.se</div>
              </div>
            </div>
            
            <div className="flex items-center p-4 bg-white rounded-lg shadow-sm border border-gray-100">
              <div className="w-10 h-10 flex items-center justify-center bg-blue-50 rounded-full mr-4">
                <FiPhone className="text-[#0099ff] w-5 h-5" />
              </div>
              <div>
                <div className="text-sm text-gray-500 font-medium">Ring oss</div>
                <div className="text-[#1a2238]">+46 (0)8-123 45 67</div>
              </div>
            </div>
          </div>
          
          {/* Social Media */}
          <div className="flex space-x-4">
            <a 
              href="#" 
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-[#0099ff] hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <FaFacebookF className="w-4 h-4" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-[#0099ff] hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <FaTwitter className="w-4 h-4" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-[#0099ff] hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram className="w-4 h-4" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-[#0099ff] hover:text-white transition-colors"
              aria-label="YouTube"
            >
              <FaYoutube className="w-4 h-4" />
            </a>
          </div>
        </div>
        
        {/* Right side - Contact form */}
        <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
          <h3 className="text-2xl font-bold mb-6 text-[#1a2238]">
            Ta kontakt för kostnadsfri rådgivning
          </h3>
          
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Ditt namn
              </label>
              <Input 
                id="name" 
                placeholder="John Doe" 
                className="w-full focus:ring-[#0099ff] focus:border-[#0099ff]"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                E-postadress
              </label>
              <Input 
                id="email" 
                type="email" 
                placeholder="john@example.com" 
                className="w-full focus:ring-[#0099ff] focus:border-[#0099ff]"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Ditt meddelande
              </label>
              <Textarea 
                id="message" 
                placeholder="Berätta om ditt projekt..." 
                className="w-full min-h-[120px] focus:ring-[#0099ff] focus:border-[#0099ff]"
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-[#0099ff] hover:bg-[#007acc] text-white py-3 font-medium"
            >
              Skicka meddelande
            </Button>
          </form>
          
          <p className="text-sm text-gray-500 mt-4 text-center">
            Genom att kontakta oss godkänner du vår sekretesspolicy.
          </p>
        </div>
      </div>
    </SectionContainer>
  )
}
