"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import PrivateFoundation from "./PrivateFoundation";
import { useTranslations } from "@/lib/i18n";

const UniversalSearch: React.FC = () => {
  const videoRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(videoRef, { once: true, margin: "-100px" });

  const translations = useTranslations();
  if (!translations) return null;

  const { sectionTitle, description } = translations.universalSearch;

  return (
    <>
      <section
        className="w-full cursor-default bg-[#F8F7F4] py-6 sm:py-8 lg:py-10 px-4 sm:px-6 lg:px-10 flex flex-col-reverse lg:flex-row items-center lg:items-start justify-center gap-6 sm:gap-8 lg:gap-10"
      >
        {/* Text Content - moved slightly to the left */}
        <div className="w-full lg:w-1/2 mt-4 sm:mt-6 lg:mt-7 lg:ml-4 xl:ml-8 px-2 sm:px-4 lg:px-0">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-[4.5rem] font-normal leading-none text-[#2C2C2C] text-center sm:text-center lg:text-left"
            style={{ fontFamily: "Suez One" }}
          >
            {sectionTitle}
          </h2>
          <p
            className="mt-4 sm:mt-6 lg:mt-10 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[1.75rem] w-full sm:w-[95%] md:w-[90%] lg:w-[98%] font-light text-[#3C3C3C] leading-normal text-center sm:text-center lg:text-left"
            style={{ fontFamily: "var(--font-source)" }}
          >
            {description}
          </p>
        </div>

        {/* Video Card with animation - adjusted positioning */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start lg:ml-2 px-2 sm:px-4 lg:px-0">
          <motion.div
            ref={videoRef}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mt-3 sm:mt-4 lg:mt-5 relative bg-[#F8F7F4] rounded-xl mb-6 sm:mb-8 lg:mb-8 ml-0 sm:ml-0 lg:ml-29 shadow-lg overflow-hidden"
            style={{
              width: "min(85vw, 30.0625rem)",
              height: "min(85vw, 30.0625rem)",
              maxWidth: "30.0625rem",
              maxHeight: "30.0625rem",
              aspectRatio: "1 / 1",
              boxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.25)",
            }}
          >
            <video
              src="/videos/universalSearch.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full  object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Divider Line - made longer */}
      <section className="w-full bg-[#F8F7F4]">
        <div className="px-4 sm:px-6 lg:px-10">
          <div className="w-[95%] sm:w-[98%] lg:w-[98%] mx-auto border-t-[2.5px] border-[#b3a89a74]" />
        </div>
        <PrivateFoundation />
      </section>
    </>
  );
};

export default UniversalSearch;