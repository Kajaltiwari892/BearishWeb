"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import HeroBannerImg from "@/assets/images/HeroBanner.png";
import Navbar from "../../layout/Navbar";
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
    { name: "New York Life", fontFamily: "Suez One" },
    { name: "Securitz AI", fontFamily: "Syne Mono" },
    {
      name: "COINS",
      fontFamily: "Superclarendon",
      className: "italic font-light",
    },
    { name: "Hilton", fontFamily: "Tilt Warp" },
    { name: "Phantom Io", fontFamily: "Titan one" },
    { name: "Nestle", fontFamily: "Trykker" },
    { name: "Alpines", fontFamily: "Ubuntu Condensed" },
  ];

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ height: "100vh", minHeight: "100vh" }}
    >
      <div className="inset-0 z-0">
        <Image
          src={HeroBannerImg}
          alt="Hero Banner"
          fill
          className="object-cover object-center"
          priority
        />
      </div>
      <div className="relative z-50">
        <Navbar />
      </div>
      <div
        className="relative z-20 flex flex-col justify-between min-h-full"
        style={{
          height: "calc(100vh - 80px)",
          minHeight: "calc(100vh - 80px)",
        }}
      >
        {/* Main content section - moved up with less padding */}
        <div className="flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-4 flex-grow pt-8">
          <div className="w-[95%] sm:w-[90%] md:w-[90%] max-w-none space-y-2 sm:space-y-3  mt-[-150]  md:space-y-3">
            <h1
              className="text-[#F4F1EB] font-normal  leading-normal mx-auto relative cursor-default
"
              style={{
                fontFamily: "Suez One",
                fontSize: "clamp(1.8rem, 7vw, 4rem)",
              }}
              onClick={() => setIsProductOpen(!isProductOpen)}
              ref={productRef}
            >
              {translations?.hero.title || title}
            </h1>
            <p
              className="text-[#F4F1EB] font-normal cursor-default
 leading-normal mx-auto w-[95%] sm:w-[93%] md:w-[93%]"
              style={{
                fontFamily: "var(--font-source)",
                fontSize: "clamp(1rem, 3.5vw, 2rem)",
              }}
            >
              {translations?.hero.description || description}
            </p>
            <div className="pt-1">
              <button
                className="inline-flex items-center justify-center px-4 sm:px-6 md:px-6 py-2 bg-[#6B8E23] hover:bg-[#9bb26c] rounded-lg text-[#F0ECE7]  border border-[#9D9388] transition-colors duration-200 cursor-pointer font-normal"
                style={{
                  fontFamily: "Averia Serif Libre, serif",
                  borderWidth: "1.5px",
                  fontSize: "clamp(0.875rem, 1.5vw, 1.25rem)",
                  minWidth: "clamp(200px, 30vw, 280px)",
                }}
              >
                {translations?.hero.cta || "Start in minutes. Save millions."}
              </button>
            </div>
          </div>
        </div>

        {/* Trusted by section - moved up with reduced spacing */}
        <div className="flex-shrink-0 px-4 sm:px-6 md:px-4 pb-8 -mt-4 sm:-mt-6 md:-mt-8">
          <div
            className="w-[95%] sm:w-[90%] md:w-[90%] cursor-default
 max-w-none mx-auto"
          >
            <h3
              className="text-[#F4F1EB] font-normal mb-1 "
              style={{
                fontFamily: "Suez One",
                fontSize: "clamp(0.9rem, 2.2vw, 2rem)",
              }}
            >
              {translations?.hero.trusted || "Trusted by the world's top teams"}
            </h3>
            <p
              className="text-[#F4F1EB] font-light mb-2 w-[90%] sm:w-[70%] md:w-[44%] mt-2"
              style={{
                fontFamily: "Averia Serif Libre, serif",
                fontSize: "clamp(0.7rem, 1.3vw, 1.25rem)",
              }}
            >
              {translations?.hero.trustedDescription ||
                "From Fortune 500s to fast-growing startups, Bearish OS is the backbone of modern teams looking for seamless, intelligent productivity."}
            </p>
            {/* company logo - reduced font size and spacing */}
            <div
              className="flex items-center justify-center sm:justify-center md:justify-between flex-wrap gap-x-2 sm:gap-x-3 md:gap-x-3 gap-y-1 opacity-80 mt-2 w-full overflow-visible"
              style={{
                maxWidth: "100%",
              }}
            >
              {companyLogos.map((logo) => (
                <div
                  key={logo.name}
                  className="flex items-center justify-center text-center flex-shrink-0"
                >
                  <span
                    className={`text-[#F4F1EB] leading-normal whitespace-nowrap ${
                      logo.className || ""
                    }`}
                    style={{
                      fontFamily: logo.fontFamily,
                      fontSize: "clamp(1.2rem, 2.5vw, 1.8rem)",
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
};

export default HeroSection;