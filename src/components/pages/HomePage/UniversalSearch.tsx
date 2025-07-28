"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import PrivateFoundation from "./PrivateFoundation";

const UniversalSearch: React.FC = () => {
  const videoRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(videoRef, { once: true, margin: "-100px" });

  return (
    <>
      <section className="w-full bg-[#F8F7F4] py-6 sm:py-8 md:py-10 px-4 md:px-10 flex flex-col-reverse lg:flex-row items-center lg:items-start justify-center gap-6 sm:gap-8 md:gap-10">
        {/* Text Content */}
        <div className="w-full lg:w-1/2 mt-4 sm:mt-6 lg:mt-7 lg:ml-16 xl:lg:ml-25">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[4.25rem] font-normal leading-none text-[#2C2C2C]"
            style={{ fontFamily: "Suez One" }}
          >
            Universal Search
          </h2>
          <p
            className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[1.75rem] w-full sm:w-[90%] md:w-[85%] lg:w-[80%] font-light text-[#666666] leading-normal"
            style={{ fontFamily: "Source Serif Pro" }}
          >
            Never hunt for that document you know for sure you sent to your boss
            again. From receipts to images to tasks no matter what you're
            hunting for it's in Bearish.
          </p>
        </div>

        {/* Video Card with animation */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <motion.div
            ref={videoRef}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mt-3 sm:mt-4 md:mt-5 relative bg-[#F8F7F4] rounded-xl shadow-lg overflow-hidden"
            style={{
              width: "min(90vw, 30.0625rem)",
              height: "min(90vw, 30.0625rem)",
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
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Divider Line */}
      <section className="w-full bg-[#F8F7F4]">
        <div className="px-4 md:px-10">
          <div className="w-[80%] mx-auto border-t-[2.5px] border-[#B3A89A]" />
        </div>
        <PrivateFoundation />
      </section>
    </>
  );
};

export default UniversalSearch;
