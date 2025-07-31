"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useTranslations } from "@/lib/i18n";

const IntelligentlyConnect: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const leftImageRef = useRef<HTMLDivElement>(null);
  const rightImageRef = useRef<HTMLDivElement>(null);

  const [videoVisible, setVideoVisible] = useState(false);
  const [leftImageVisible, setLeftImageVisible] = useState(false);
  const [rightImageVisible, setRightImageVisible] = useState(false);

  const translations = useTranslations();

  useEffect(() => {
    // Only set up observers if translations are available
    if (!translations || !translations.intelligentlyConnect) return;

    const observerOptions = {
      threshold: 0.3,
      rootMargin: "0px 0px -50px 0px",
    };

    const videoObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVideoVisible(true);
        }
      });
    }, observerOptions);

    const leftImageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setLeftImageVisible(true);
        }
      });
    }, observerOptions);

    const rightImageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setRightImageVisible(true);
        }
      });
    }, observerOptions);

    if (videoRef.current) {
      videoObserver.observe(videoRef.current);
    }
    if (leftImageRef.current) {
      leftImageObserver.observe(leftImageRef.current);
    }
    if (rightImageRef.current) {
      rightImageObserver.observe(rightImageRef.current);
    }

    return () => {
      videoObserver.disconnect();
      leftImageObserver.disconnect();
      rightImageObserver.disconnect();
    };
  }, [translations]);

  if (!translations || !translations.intelligentlyConnect) return null;

  const { sectionTitle, description, cards } =
    translations.intelligentlyConnect;

  return (
    <section className="w-full bg-[#F8F7F4] py-8 px-2 sm:py-12 sm:px-4 flex flex-col items-center">
      <style jsx>{`
        .fade-in-up {
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .fade-in-up.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .scale-in {
          opacity: 0;
          transform: scale(0.8);
          transition: all 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .scale-in.visible {
          opacity: 1;
          transform: scale(1);
        }

        .slide-in-left {
          opacity: 0;
          transform: translateX(-60px);
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .slide-in-left.visible {
          opacity: 1;
          transform: translateX(0);
        }

        .slide-in-right {
          opacity: 0;
          transform: translateX(60px);
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .slide-in-right.visible {
          opacity: 1;
          transform: translateX(0);
        }
      `}</style>

      {/* Header */}
      <div className="max-w-5xl w-full cursor-default ml-0 sm:ml-[-4rem] md:ml-[-15rem] mb-6 sm:mb-7 md:mb-8 px-4 sm:px-6 md:px-0">
        <h1
          className="text-[#3C3C3C] font-bold mb-4 text-left"
          style={{
            fontFamily: "Suez One",
            fontSize: "clamp(2rem, 5vw, 4.5rem)",
            lineHeight: 1.1,
          }}
        >
          {sectionTitle}
        </h1>
        <p
          className="text-[#3C3C3C] font-semibold leading-normal w-full sm:w-[95%] md:w-[87%] mb-4 sm:mb-5 md:mb-5 text-left"
          style={{
            fontFamily: "var(--font-source)",
            fontSize: "clamp(1.1rem, 2vw, 2rem)",
          }}
        >
          {description}
        </p>
      </div>

      {/* Main Video Illustration with Animation */}
      <video
        ref={videoRef}
        src="/videos/InteligentlyVid.mp4"
        autoPlay
        loop
        muted
        playsInline
        className={`object-cover rounded-xl w-full max-w-7xl mb-10 scale-in ${
          videoVisible ? "visible" : ""
        }`}
        style={{ height: "clamp(180px, 35vw, 400px)" }}
      />

      {/* Two-Column Section with Vertical Divider */}
      <div
        className="w-full cursor-default max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-8 mt-4 sm:mt-6 md:mt-4 pt-8 sm:pt-10 md:pt-8 relative px-4 sm:px-6 md:px-0"
      >
        {/* Top horizontal line - extends according to text positioning */}
        <div
          className="hidden md:block absolute border border-[#d6d1c7] top-0 w-full h-px bg-[#d6d1c7]"
          style={{ left: "-4rem", right: "-4rem", width: "calc(100% + 8rem)" }}
        ></div>

        {/* Left Card - moved more to the left with proper spacing */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left px-2 sm:px-4 md:px-1 z-10 ml-0 sm:ml-0 md:-ml-16">
          <h2
            className="text-[#3C3C3C] mb-2"
            style={{
              fontFamily: "Suez One",
              fontSize: "clamp(1.1rem, 2.4vw, 3rem)",
            }}
          >
            {translations.intelligentlyConnect.cards[0].title}
          </h2>
          <p
            className="text-[#3C3C3C] font-semibold w-full sm:w-full md:w-[95%] mb-4 sm:mb-5 md:mb-4"
            style={{
              fontFamily: "var(--font-source)",
              fontSize: "clamp(1.4rem, 1.5vw, 1.15rem)",
            }}
          >
            {translations.intelligentlyConnect.cards[0].description}
          </p>
          <div
            ref={leftImageRef}
            className={`w-full flex mb-6 sm:mb-8 md:mb-7 justify-center slide-in-left ${
              leftImageVisible ? "visible" : ""
            }`}
          >
            <Image
              src="/images/IntelligentConnections/ReplaceSingleApp.png"
              alt="Replace Single App"
              width={290}
              height={290}
              className="object-contain rounded-lg mt-4 sm:mt-5 md:mt-5 w-[14rem] sm:w-[16rem] md:w-[20rem]"
            />
          </div>
        </div>

        {/* Vertical Divider for md+ screens */}
        <div
          className="hidden md:block border border-[#d6d1c7] absolute top-0 bottom-0 left-1/2 w-px bg-[#d6d1c7] z-0"
          style={{ transform: "translateX(-50%)" }}
        />

        {/* Right Card - moved more to the right */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left px-2 sm:px-4 md:px-1 z-10 mr-0 sm:mr-0 md:-mr-16 ml-0 sm:ml-0 md:ml-10">
          <h2
            className="text-[#3C3C3C] mb-2"
            style={{
              fontFamily: "Suez One",
              fontSize: "clamp(1.1rem, 2.4vw, 3rem)",
            }}
          >
            {translations.intelligentlyConnect.cards[1].title}
          </h2>
          <p
            className="text-[#3C3C3C] font-semibold w-full mb-4 sm:mb-5 md:mb-4"
            style={{
              fontFamily: "var(--font-source)",
              fontSize: "clamp(1.4rem, 1.5vw, 1.15rem)",
            }}
          >
            {translations.intelligentlyConnect.cards[1].description}
          </p>
          <div
            ref={rightImageRef}
            className={`w-full flex mb-6 sm:mb-8 md:mb-7 justify-center slide-in-right ${
              rightImageVisible ? "visible" : ""
            }`}
          >
            <Image
              src="/images/IntelligentConnections/AutomateRest.png"
              alt="Automate the Rest"
              width={290}
              height={290}
              className="object-contain rounded-lg mt-4 sm:mt-5 md:mt-5 w-[14rem] sm:w-[16rem] md:w-[20rem]"
            />
          </div>
        </div>
        {/* Bottom horizontal line - extends according to text positioning */}
        <div
          className="hidden md:block absolute border border-[#d6d1c7] bottom-0 w-full h-px bg-[#d6d1c7]"
          style={{ left: "-4rem", right: "-4rem", width: "calc(100% + 8rem)" }}
        ></div>
      </div>
    </section>
  );
};
export default IntelligentlyConnect;
