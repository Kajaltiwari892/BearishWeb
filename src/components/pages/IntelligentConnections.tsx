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
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Title */}
        <h2
          className="text-center text-[#3C3C3C] mb-12"
          style={{
            fontFamily: "Averia Sans Libre, serif",
            fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
          }}
        >
          {sectionTitle}
        </h2>

        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mx-auto">
          {translatedCards.map((card, index) => (
            <div
              key={index}
              className="bg-[#F4F1EB] rounded-lg p-4 flex flex-col items-center text-center border border-[#b3a89a70] mx-auto max-w-xs"
            >
              {/* Card Title */}
              <h3
                className="text-[#3C3C3C] mb-4 w-[80%]"
                style={{
                  fontFamily: "Averia Sans Libre",
                  fontSize: "clamp(1.25rem, 2vw, 1.5rem)",
                }}
              >
                {card.title}
              </h3>

              {/* Card Image */}
              <div className="w-40 h-40 sm:w-48 sm:h-48 relative mb-6 rounded-lg flex items-center justify-center p-2">
                <Image
                  src={imagePaths[index]}
                  alt={card.title}
                  width={200}
                  height={200}
                  className="object-contain"
                />
              </div>

              {/* Card Description */}
              <p
                className="text-[#3C3C3C] w-[70%]"
                style={{
                  fontFamily: "Averia Sans Libre",
                  fontSize: "clamp(1rem, 1.3vw, 2rem)",
                }}
              >
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Dummy Horizontal Div */}
        <div className="w-full h-32 bg-[#F0ECE7] mt-12 rounded-lg flex items-center justify-center">
          <p className="text-[#555555] text-sm">
            {" "}
            Additional content will go here. 
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntelligentConnections;
