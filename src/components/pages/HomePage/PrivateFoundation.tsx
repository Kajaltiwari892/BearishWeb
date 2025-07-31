"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "@/lib/i18n";

const PrivateFoundation: React.FC = () => {
  const translations = useTranslations();
  if (!translations) return null;

  return (
    <section
      className="w-full px-4 sm:px-6 cursor-default lg:px-4 py-8 sm:py-12 lg:py-20 flex flex-col lg:flex-row items-start gap-6 sm:gap-8 lg:gap-10 bg-[#F8F7F4]"
    >
      {/* Left Content */}
      <div className="flex-1 max-w-full lg:pl-12 px-2 sm:px-4 lg:px-0">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-xl font-normal text-[#3C3C3C] mb-4 leading-normal text-center sm:text-center lg:text-left"
          style={{
            fontFamily: "Suez One",
            fontSize: "clamp(1.8rem, 4vw, 3.75rem)",
          }}
        >
          {translations.privateFoundation.heading}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-[#3C3C3C] mt-13 font-light w-full sm:w-[95%] lg:w-[88%] text-base sm:text-lg md:text-xl lg:text-[1.75rem] mb-6 leading-normal text-center sm:text-center lg:text-left"
          style={{ fontFamily: "var(--font-source)" }}
        >
          {translations.privateFoundation.paragraph}
        </motion.p>

        {/* Features */}
        <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8 w-full mb-8 sm:mb-10 lg:mb-12 text-[#3C3C3C]">
          {translations.privateFoundation.features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: 0.4 + index * 0.1,
              }}
              className="flex flex-col sm:flex-col lg:flex-row mt-6 sm:mt-8 lg:mt-10 gap-2 sm:gap-4 lg:gap-10 items-start sm:items-center lg:items-start"
            >
              <h3
                className="font-[600] text-[#3C3C3C] text-lg sm:text-xl lg:text-[1.5rem] sm:min-w-0 lg:min-w-[240px] text-center sm:text-center lg:text-left"
                style={{ fontFamily: "var(--font-source)" }}
              >
                {feature.title}
              </h3>
              <p
                className="leading-normal w-full sm:w-full lg:w-[410px] sm:max-w-none lg:max-w-md text-[#3C3C3C] text-base ml-0 sm:ml-0 lg:ml-25 sm:text-lg lg:text-[1.5rem] text-center sm:text-center lg:text-left"
                style={{ fontFamily: "var(--font-source)" }}
              >
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
          className="flex flex-wrap gap-4 sm:gap-6 lg:gap-7 mb-6 justify-center sm:justify-center lg:justify-start"
        >
          {[
            {
              src: "/images/PrivateFoundation/SOCO2.png",
              alt: translations.privateFoundation.iconsAlt[0],
            },
            {
              src: "/images/PrivateFoundation/ISO.png",
              alt: translations.privateFoundation.iconsAlt[1],
            },
            {
              src: "/images/PrivateFoundation/GDPR.png",
              alt: translations.privateFoundation.iconsAlt[2],
            },
            {
              src: "/images/PrivateFoundation/CGPA.png",
              alt: translations.privateFoundation.iconsAlt[3],
            },
          ].map((icon, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: 0.9 + index * 0.1,
              }}
              className="flex flex-col items-center sm:items-center lg:items-start justify-center"
            >
              <Image
                src={icon.src}
                alt={icon.alt}
                width={248}
                height={148}
                className="object-contain w-[8rem] h-[8rem] sm:w-[9rem] sm:h-[9rem] lg:w-[10.25rem] lg:h-[10.25rem]"
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
          className="text-sm sm:text-base lg:text-[1rem] text-[#3C3C3C] max-w-3xl leading-normal text-center sm:text-center lg:text-left"
          style={{ fontFamily: "var(--font-source)" }}
        >
          {translations.privateFoundation.footerNote
            .split("{0}")
            .map((part, idx) => (
              <React.Fragment key={idx}>
                {part}
                {idx === 0 && (
                  <Link
                    href="#"
                    className="text-[#4d7985] hover:text-[#386a7b]"
                  >
                    {translations.privateFoundation.footerLinks[0]}
                  </Link>
                )}
                {idx === 1 && (
                  <>
                    {" "}
                    and{" "}
                    <Link
                      href="#"
                      className="text-[#4d7985] hover:text-[#386a7b]"
                    >
                      {translations.privateFoundation.footerLinks[1]}
                    </Link>
                  </>
                )}
              </React.Fragment>
            ))}{" "}
          policies here.
        </motion.p>
      </div>

      {/* Right Image with Animation */}
      <div className="flex-1 max-w-full sm:max-w-md lg:max-w-2xl mr-0 sm:mr-0 lg:mr-10 flex items-start justify-center sm:justify-center lg:justify-end px-2 sm:px-4 lg:px-0">
        <motion.div
          initial={{ opacity: 0, x: 80, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 1.2,
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: 0.3,
          }}
          className="w-full max-w-[300px] sm:max-w-[350px] lg:max-w-[460px] relative"
        >
          <Image
            src="/images/PrivateFoundation/verticalImg.png"
            alt="Secure Private Foundation"
            width={410}
            height={1104}
            className="rounded-3xl w-full h-[40rem] sm:h-[50rem] lg:h-[81rem] object-top"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default PrivateFoundation;
