"use client";
import React from "react";

import Image from "next/image";
import HeroBannerImg from "@/assets/images/HeroBanner.png";
// import Navbar from "../layout/Navbar";

interface HeroSectionProps {
  title?: string;
  description?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title = "Everything for work, all in one place.",
  description = "Replace scattered tools with one intelligent workspace. BEBA, your AI agent, saves hours daily by handling the busy work.",
}) => {
  const companyLogos = [
    {
      name: "New York Life",
      width: "208px",
      height: "42px",
      fontFamily: "Suez One",
      fontSize: "32px",
      fontStyle: "normal",
      fontWeight: 400,
    },
    {
      name: "Securitz AI",
      width: "218px",
      height: "42px",
      fontFamily: "Syne Mono",
      fontSize: "36px",
      fontStyle: "normal",
      fontWeight: 400,
    },
    {
      name: "COINS",
      width: "120px",
      height: "42px",
      fontFamily: "Superclarendon",
      fontSize: "33px",
      fontStyle: "italic",
      fontWeight: 300,
    },
    {
      name: "Hilton",
      width: "92px",
      height: "42px",
      fontFamily: "Tilt Warp",
      fontSize: "33px",
      fontStyle: "normal",
      fontWeight: 400,
    },
    {
      name: "Phantom Io",
      width: "203px",
      height: "38px",
      fontFamily: "Titan one",
      fontSize: "33px",
      fontStyle: "normal",
      fontWeight: 400,
    },
    {
      name: "Nestle",
      width: "100px",
      height: "42px",
      fontFamily: "Trykker",
      fontSize: "33px",
      fontStyle: "normal",
      fontWeight: 400,
    },
    {
      name: "Alpines",
      width: "90px",
      height: "42px",
      fontFamily: "Ubuntu Condensed",
      fontSize: "33px",
      fontStyle: "normal",
      fontWeight: 400,
    },
  ];

  return (
    <div className="relative w-[1290px] h-[864px]  mx-auto">
      {/* 1. Hero background image */}
      <Image
        src={HeroBannerImg}
        alt="Hero Banner"
        fill
        className="object-cover"
        priority
      />

      {/* 2. Black transparent overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* 3. Navbar */}
      {/* <div className="sticky top-0 left-0 right-0 z-10">
        <Navbar />
      </div> */}

      {/* 4. Main Hero content */}
      <div className="relative text-center px-5">
        {/* Title positioned with mt-[171px] */}
        <h1
          className="absolute left-1/2 transform -translate-x-1/2 text-white font-normal text-[64px] mt-[171px] leading-tight"
          style={{
            fontFamily: "Suez One",
            color: "#F4F1EB",
            width: "1120px",
            height: "84px",
            top: 0,
          }}
        >
          {title}
        </h1>

        {/* Description positioned in the middle area */}
        <p
          className="absolute left-1/2 transform -translate-x-1/2 text-[#F4F1EB] text-[32px] font-[400] leading-normal text-center font-source w-[1093px] mt-[-50px]"
          style={{
            top: "320px", // from Figma
          }}
        >
          {description}
        </p>

        {/* Button positioned 28px below description */}
        <button
          className="absolute left-1/2 transform -translate-x-1/2 font-[400px] text-lg w-[318px] h-[36px] transition-colors font-averia duration-200  bg-[#6B8E23] hover:bg-[#9bb26c] rounded-sm text-[20px] border  border-[#9D9388] text-[#F0ECE7] cursor-pointer"
          style={{
            top: "388px",
            borderWidth: "1.5px",
          }}
        >
          Start in minutes. Save millions.
        </button>
      </div>

      {/* 5. Company Logos Section - Fixed styling and positioning */}
      <div className="absolute bottom-0 left-0 right-0 z-10 px-8 pb-8">
        {/* Heading with correct Figma styles */}
        <h3
          className="mb-4"
          style={{
            color: "#F4F1EB",
            fontFamily: "Suez One",
            fontSize: "32px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "normal",
          }}
        >
          Trusted by the world's top teams
        </h3>

        {/* Paragraph with correct Figma styles */}
        <p
          className="mb-8 max-w-lg"
          style={{
            color: "#F4F1EB",
            fontFamily: "Averia Serif Libre",
            fontSize: "20px",
            fontStyle: "normal",
            fontWeight: 300,
            lineHeight: "normal",
          }}
        >
          From Fortune 500s to fast‑growing startups, Bearish OS is the backbone
          of modern teams looking for seamless, intelligent productivity.
        </p>

        {/* Company logos with 32px gap */}
        <div className="flex flex-wrap items-center gap-8 opacity-80">
          {companyLogos.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center justify-center"
              style={{
                width: logo.width,
                height: logo.height,
                minWidth: logo.width,
                minHeight: logo.height,
              }}
            >
              <span
                className="text-center leading-tight"
                style={{
                  color: "#F4F1EB",
                  fontFamily: logo.fontFamily,
                  fontSize: logo.fontSize,
                  fontStyle: logo.fontStyle,
                  fontWeight: logo.fontWeight,
                  lineHeight: "normal",
                  display: "block",
                  width: "100%",
                }}
              >
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
