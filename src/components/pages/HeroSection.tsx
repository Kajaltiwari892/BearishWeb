"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import HeroBannerImg from "@/assets/images/HeroBanner.png";
import Navbar from "../layout/Navbar";
import { useTranslations } from "@/lib/i18n";

interface HeroSectionProps {
  title?: string;
  description?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title = "Everything for work, all in one place.",
  description = "Replace scattered tools with one intelligent workspace. BEBA, your AI agent, saves hours daily by handling the busy work.",
}) => {
  const translations = useTranslations();
  const [isProductOpen, setIsProductOpen] = useState(false);
  const productRef = useRef<HTMLDivElement>(null);

  const companyLogos = [
    {
      name: "New York Life",
      fontFamily: "Suez One",
    },
    {
      name: "Securitz AI",
      fontFamily: "Syne Mono", 
    },
    {
      name: "COINS",
      fontFamily: "Superclarendon",
      className: "italic font-light",
    },
    {
      name: "Hilton",
      fontFamily: "Tilt Warp",
    },
    {
      name: "Phantom Io",
      fontFamily: "Titan one",
    },
    {
      name: "Nestle",
      fontFamily: "Trykker",
    },
    {
      name: "Alpines",
      fontFamily: "Ubuntu Condensed",
    },
  ];

  return (
    <div className="relative w-full overflow-hidden" style={{ height: '100vh' }}>
      {/* Hero background image - Fixed positioning */}
      <div className="inset-0 z-0">
        <Image
          src={HeroBannerImg}
          alt="Hero Banner"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* Navbar */}
      <div className="relative z-50">
        <Navbar />
      </div>

      {/* Main content - Optimized layout */}
      <div className="relative z-20 flex flex-col" style={{ height: 'calc(100vh - 80px)' }}>
        
        {/* Hero content - Flexible space */}
        <div className="flex flex-col justify-center items-center text-center px-4 mt-24">
          <div className="w-[90%] max-w-none space-y-4">
            
            {/* Title */}
            <h1 
              className="text-[#F4F1EB] font-normal leading-tight mx-auto relative cursor-pointer"
              style={{ 
                fontFamily: "Suez One",
                fontSize: 'clamp(1.5rem, 4vw, 3.75rem)'
              }}
              onClick={() => setIsProductOpen(!isProductOpen)}
              ref={productRef}
            >
              {translations?.hero.title || title}
            </h1>

            {/* Description */}
            <p 
              className="text-[#F4F1EB] font-normal leading-normal mx-auto w-[85%]"
              style={{ 
                fontFamily: "Source Sans Pro, sans-serif",
                fontSize: 'clamp(0.875rem, 2vw, 1.5rem)'
              }}
            >
              {translations?.hero.description || description}
            </p>

            {/* CTA Button */}
            <div className="pt-2">
              <button
                className="inline-flex items-center justify-center px-6 py-2 
                         bg-[#6B8E23] hover:bg-[#9bb26c] rounded-lg text-[#F0ECE7] 
                         border border-[#9D9388] transition-colors duration-200 cursor-pointer
                         font-normal"
                style={{ 
                  fontFamily: "Averia Serif Libre, serif",
                  borderWidth: "1.5px",
                  fontSize: 'clamp(0.875rem, 1.5vw, 1.125rem)',
                  minWidth: 'clamp(240px, 30vw, 280px)'
                }}
              >
                {translations?.hero.cta || 'Start in minutes. Save millions.'}
              </button>
            </div>
          </div>
        </div>

        {/* Company Logos Section - Fixed bottom space */}
        <div className="flex-shrink-0  px-4 pb-4 mt-48">
          <div className="w-[90%] max-w-none mx-auto">
            
            {/* Heading */}
            <h3
              className="text-[#F4F1EB] font-normal mb-2"
              style={{ 
                fontFamily: "Suez One",
                fontSize: 'clamp(1rem, 2.5vw, 1.625rem)'
              }}
            >
              {translations?.hero.trusted || "Trusted by the world's top teams"}
            </h3>

            {/* Paragraph */}
            <p
              className="text-[#F4F1EB] font-light mb-3 w-[50%] mt-4"
              style={{ 
                fontFamily: "Averia Serif Libre, serif",
                fontSize: 'clamp(0.75rem, 1.5vw, 1.125rem)'
              }}
            >
              {translations?.hero.trustedDescription || 'From Fortune 500s to fast-growing startups, Bearish OS is the backbone of modern teams looking for seamless, intelligent productivity.'}
            </p>

            {/* Company logos - Responsive grid */}
            <div className="grid gap-2  items-center opacity-80 mt-4" 
                 style={{
                   gridTemplateColumns: 'repeat(auto-fit, minmax(80px, 1fr))',
                   maxWidth: '100%'
                 }}>
              {companyLogos.map((logo) => (
                <div
                  key={logo.name}
                  className="flex items-center justify-center text-center min-h-[20px]"
                >
                  <span
                    className={`text-[#F4F1EB] leading-tight ${logo.className || ''}`}
                    style={{ 
                      fontFamily: logo.fontFamily,
                      fontSize: 'clamp(0.75rem, 1.8vw, 2.3rem)'
                    }}
                  >
                    {logo.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;