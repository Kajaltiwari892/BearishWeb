"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const PrivateFoundation: React.FC = () => {
  return (
    <section className="w-full px-4 sm:px-6 py-8 sm:py-12 md:py-20 flex flex-col md:flex-row items-start gap-6 sm:gap-8 md:gap-10 bg-[#F8F7F4]">
      {/* Left Content */}
      <div className="flex-1 max-w-full md:pl-8 lg:pl-12 xl:pl-20">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-5xl max-w-xl font-extrabold text-[#3C3C3C] mb-4 sm:mb-6 leading-tight md:ml-4 lg:ml-8"
          style={{ fontFamily: "Suez One" }}
        >
          Built on a secure and private foundation
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-[#666666] font-light w-full sm:w-[95%] md:w-[90%] text-base sm:text-lg md:text-xl lg:text-[1.75rem] mb-6 sm:mb-8 md:mb-10 leading-normal md:ml-4 lg:ml-8"
          style={{ fontFamily: "Source Serif Pro" }}
        >
          What feels like natural work flow is actually advanced AI
          orchestration. Bearish OS transforms enterprise complexity into
          effortless productivity you focus on results while intelligent systems
          handle everything else.
        </motion.p>

        {/* Features */}
        <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 w-full md:w-[120%] mb-8 sm:mb-10 md:mb-12 text-gray-700 md:ml-4 lg:ml-8">
          {[
            {
              title: "Bearish Paths Engine",
              description: "Lightning-fast responses across every app your workflow moves at the speed of thought"
            },
            {
              title: "Built to scale",
              description: "From solo teams to Fortune 500s unlock features and use cases as your business scales"
            },
            {
              title: "Enterprise Security",
              description: "Enterprise-level protection for every teams your data stays 100% private with industry leading standards"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 + (index * 0.1) }}
              className="flex flex-col sm:flex-row gap-2 sm:gap-6 md:gap-10 items-start"
            >
              <h3 className="font-bold text-[#3C3C3C] text-lg sm:text-xl md:text-[1.5rem] sm:min-w-[200px] md:min-w-[240px]">
                {feature.title}
              </h3>
              <p className="leading-normal max-w-full sm:max-w-md md:max-w-xs text-[#666666] text-base sm:text-lg md:text-[1.5rem] md:ml-[7rem]">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
          className="flex gap-4 mb-6 md:ml-4 lg:ml-8"
        >
          {[
            { src: "/images/PrivateFoundation/SOCO2.png", alt: "SOC2" },
            { src: "/images/PrivateFoundation/ISO.png", alt: "ISO" },
            { src: "/images/PrivateFoundation/GDPR.png", alt: "GDPR" },
            { src: "/images/PrivateFoundation/CGPA.png", alt: "CCPA" }
          ].map((icon, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.9 + (index * 0.1) }}
              className="flex flex-col items-center justify-center"
            >
              <Image
                src={icon.src}
                alt={icon.alt}
                width={148}
                height={148}
                className="w-[9.25rem] h-[9.25rem] object-contain"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Footer Note */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 1.3 }}
          className="text-sm sm:text-base md:text-[1rem] text-[#888888] max-w-xl leading-normal md:ml-4 lg:ml-8"
        >
          Bearish OS is in compliance with SOC2 and ISO guidelines and is
          currently undergoing certification audits...Read our{" "}
          <Link href="#" className="text-[#4d7985] hover:text-gray-700">
            Open Security
          </Link>{" "}
          and{" "}
          <Link href="#" className="text-[#4d7985] hover:text-gray-700">
            Open Privacy
          </Link>{" "}
          policies here.
        </motion.p>
      </div>

      {/* Right Image with Animation */}
      <div className="flex-1 max-w-full sm:max-w-md md:max-w-lg lg:max-w-2xl items-center justify-center flex mt-6 md:mt-0">
        <motion.div
          initial={{ opacity: 0, x: 80, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ 
            duration: 1.2, 
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: 0.3
          }}
          className="w-full max-w-[410px] relative"
        >
          <Image
            src="/images/PrivateFoundation/verticalImg.png"
            alt="Secure Private Foundation"
            width={410}
            height={1104}
            className="rounded-3xl w-full h-[69rem]"
          />
        </motion.div>
      </div>
    </section>
  );
};
export default PrivateFoundation;