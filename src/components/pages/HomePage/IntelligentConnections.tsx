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
    additionalContent,
  } = translations.intelligentConnections;

  // Static image paths (order must match translation cards)
  const imagePaths = [
    "/images/IntelligentConnections/WordScattered.png",
    "/images/IntelligentConnections/FlowState.png",
    "/images/IntelligentConnections/ElegantlyCrafted.png",
  ];

  return (
    <section className="w-full bg-[#F8F7F4] py-16 px-4 flex flex-col items-center">
      <div className="max-w-5xl mx-auto w-full">
        {/* Section Title */}
        <h2
          className="text-center  text-[#3C3C3C] mb-12"
          style={{
            fontFamily: "Averia Sans Libre, serif",
            fontSize: "clamp(1.75rem, 4vw, 2.9rem)",
          }}
        >
          {sectionTitle}
        </h2>

        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mx-auto">
          {translatedCards.map((card, index) => (
            <div
              key={index}
              className="bg-[#F4F1EB] rounded-lg p-4 flex flex-col items-center text-center border border-[#b3a89a70]"
            >
              <h3
                className="text-[#3C3C3C] mb-4 w-[80%]"
                style={{
                  fontFamily: "Averia Serif Libre",
                  fontSize: "clamp(1.25rem, 2vw, 2.5rem)",
                }}
              >
                {card.title}
              </h3>

              <div className="w-40 h-40 sm:w-48 sm:h-48 relative mb-6 rounded-lg flex items-center justify-center p-2">
                <Image
                  src={imagePaths[index]}
                  alt={card.title}
                  width={200}
                  height={200}
                  className="object-contain"
                />
              </div>

              <p
                className="text-[#3C3C3C] w-[80%]"
                style={{
                  fontFamily: "Averia Serif Libre",
                  fontSize: "clamp(1rem, 1.5vw, 2rem)",
                }}
              >
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Productivity Agent Section - Similar to BEBA design */}
        <div className="w-full bg-[#F4F1EB] mt-16 rounded-2xl border border-[#b3a89a68] p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Left side - Bear paw icon */}
            <div className="flex-shrink-0">
              <div className="w-28  h-28 md:w-46 md:h-44 relative">
                <Image
                  src="/images/IntelligentConnections/BearClaws.png"
                  alt="BEBA Productivity Agent"
                  width={474}
                  height={174}
                  className="object-contain "
                />
              </div>
            </div>

            {/* Right side - Content */}
            <div className="flex-1 text-center md:ml-10  md:text-left">
              <h2
                className="text-[#3C3C3C] mb-3"
                style={{
                  fontFamily: "Suez One",
                   fontSize: "clamp(1.4rem, 2.8vw, 2.5rem",
                   lineHeight: "1.2",
                 
                }}
              >
                BEBA. The #1 Productivity Agent
              </h2>
              <h3
                className="text-[#3C3C3C] mb-4"
                style={{
                  fontFamily: "Suez One",
                  fontSize: "clamp(1.1rem, 2.5vw, 2.5rem)",
                  fontWeight: "normal",
                  lineHeight: "1.3",
                }}
              >
                for busy knowledge workers.
              </h3>
              <p
                className="text-[#3C3C3C] max-w-3xl"
                style={{
                  fontFamily: "Averia Serif Libre",

                  fontSize: "clamp(1.1rem, 1.6vw, 2.5rem)",
                  lineHeight: "1.5",
                }}
              >
                BEBA empowers knowledge workers to achieve exponentially more.
                Purpose-built to handle complex workflows, take proactive
                action, and eliminate the busy work that slows teams down.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntelligentConnections;
