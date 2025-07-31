"use client";
import React from "react";
import Image from "next/image";
import { useTranslations } from "@/lib/i18n";

const IntelligentConnections: React.FC = () => {
  const translations = useTranslations();
  if (!translations) return null;

  const {
    sectionTitle,
    cards: translatedCards,
  } = translations.intelligentConnections;

  const {
    sectionTitle: bebaSectionTitle,
    description: bebaDescription,
    SecSectionTitle:bebaSecSectionTitle,
  } = translations.bebaSection;


  // Static image paths (order must match translation cards)
  const imagePaths = [
    "/images/IntelligentConnections/WordScattered.png",
    "/images/IntelligentConnections/FlowState.png",
    "/images/IntelligentConnections/ElegantlyCrafted.png",
  ];

  return (
    <section
      className="w-full bg-[#F8F7F4] py-8 cursor-default
 sm:py-12 md:py-16 px-4 sm:px-6 md:px-4 flex flex-col items-center"
    >
      <div className="max-w-7xl w-full mx-auto">
        {/* Section Title */}
        <h2
          className="text-center text-[#3C3C3C] mb-8 sm:mb-10 md:mb-12"
          style={{
            fontFamily: "Suez One",
            fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
          }}
        >
          {sectionTitle}
        </h2>

        {/* Cards Container - Enhanced width and height */}
        <div className="grid grid-cols-1 w-full md:grid-cols-3 gap-6 sm:gap-7 md:gap-8 mx-auto">
          {translatedCards.map((card, index) => (
            <div
              key={index}
              className="bg-[#F4F1EB] w-full rounded-lg p-6 sm:p-7 md:p-8 flex flex-col items-center font-semibold text-center border border-[#b3a89a70] min-h-[400px] sm:min-h-[440px] md:min-h-[520px]"
            >
              <h3
                className="text-[#3C3C3C] mb-6 sm:mb-7 md:mb-8 w-[90%] sm:w-[85%] md:w-[80%]"
                style={{
                  fontFamily: "var(--font-source)",
                  fontSize: "clamp(1.25rem, 2vw, 2.5rem)",
                }}
              >
                {card.title}
              </h3>

              <div className="w-[12rem] sm:w-[14rem] md:w-[15.625rem] relative mb-6 sm:mb-8 md:mb-10 rounded-lg flex items-center justify-center p-2">
                <Image
                  src={imagePaths[index]}
                  alt={card.title}
                  width={360}
                  height={260}
                  className="object-contain w-full h-auto"
                />
              </div>

              <p
                className="text-[#3C3C3C] w-[90%] sm:w-[85%] md:w-[80%] flex-grow flex items-center justify-center"
                style={{
                  fontFamily: "var(--font-source)",
                  fontSize: "clamp(1rem, 1.5vw, 1.75rem)",
                }}
              >
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Productivity Agent Section - Enhanced and aligned with cards */}
        <div className="w-full bg-[#F4F1EB] mt-10 sm:mt-12 md:mt-16 rounded-2xl border border-[#b3a89a68] p-6 sm:p-8 md:p-16 min-h-[280px] sm:min-h-[300px] md:min-h-[380px]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 md:gap-10 h-full">
            {/* Left side - Bear paw icon */}
            <div className="flex-shrink-0">
              <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-72 md:h-60 relative">
                <Image
                  src="/images/IntelligentConnections/BearClaws.png"
                  alt="BEBA Productivity Agent"
                  width={600}
                  height={220}
                  className="object-contain w-full h-auto"
                />
              </div>
            </div>

            {/* Right side - Content */}
            <div className="flex-1 text-center md:ml-16 md:text-left flex flex-col justify-center">
              <h2
                className="text-[#3C3C3C] mb-3 sm:mb-4 md:mb-5"
                style={{
                  fontFamily: "Suez One",
                  fontSize: "clamp(1.4rem, 2.8vw, 3rem)",
                  lineHeight: "normal",
                }}
              >
                {bebaSectionTitle}
              </h2>
              <h3
                className="text-[#3C3C3C] mb-4 sm:mb-5 md:mb-7"
                style={{
                  fontFamily: "Suez One",
                  fontSize: "clamp(1.1rem, 2.5vw, 3rem)",
                  lineHeight: "normal",
                }}
              >
                {bebaSecSectionTitle}
              </h3>
              <p
                className="text-[#3C3C3C] font-semibold max-w-5xl"
                style={{
                  fontFamily: "var(--font-source)",
                  fontSize: "clamp(1.1rem, 1.6vw, 1.5rem)",
                  lineHeight: "normal",
                }}
              >
                {bebaDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntelligentConnections;