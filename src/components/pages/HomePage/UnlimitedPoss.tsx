"use client";
import React from "react";
import Image from "next/image";
import { useTranslations } from "@/lib/i18n";

const UnlimitedPoss: React.FC = () => {
  const t = useTranslations();

  if (!t) {
    return null; 
  }

  return (
    <section className="relative w-full cursor-default h-auto md:h-screen overflow-hidden">
      {/* Background */}
      <Image
        src="/images/others/BearishUnliPoss.png"
        alt={t.unlimitedPoss?.title || ""}
        fill
        className="object-cover"
        priority
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-[#F8F7F4] px-4 py-12 sm:py-16 md:py-20 min-h-[80vh] md:min-h-screen">
        <h1
          className="
            text-3xl       /* mobile */
            sm:text-4xl    /* tablet */
            md:text-[4.5rem]  /* desktop unchanged */
            leading-normal max-w-4xl
          "
          style={{ fontFamily: "Suez One" }}
        >
          {t.unlimitedPoss?.titleLine1 || ""}
          <br />
          {t.unlimitedPoss?.titleLine2 || ""}
        </h1>

        <p
          className="
              mt-4
              text-lg        /* mobile */
              sm:text-xl     /* tablet */
              md:text-[2rem] /* desktop unchanged */
              font-bold
            "
          style={{ fontFamily: "var(--font-source)" }}
        >
          {t.unlimitedPoss?.pricingInfo || ""}
        </p>

        <p
          className="
              mt-2 italic
              text-base      /* mobile */
              sm:text-lg     /* tablet */
              md:text-[1.25rem] /* desktop unchanged */
              max-w-xl 
              font-bold
             
            "
          style={{ fontFamily: "var(--font-source)" }}
        >
          {t.unlimitedPoss?.pricingCalculatorInfo || ""}
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-col  sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
          <button
            className="
              bg-[#6B8E23] hover:bg-[#a4be6e]
              text-white font-medium cursor-pointer
              py-2 px-4 sm:px-6
              rounded-lg border border-[#B3A89A]
              transition
              text-base      /* mobile */
              sm:text-lg     /* tablet */
              md:text-[1.25rem] /* desktop unchanged */
            "
            style={{ fontFamily: "Averia Serif Libre" }}
          >
            {t.unlimitedPoss?.viewPricingButton || ""}
          </button>
          <button
            className="
              bg-[#E0D8CF] cursor-pointer border border-[#B3A89A] hover:bg-[#f1f0ef]
              text-gray-900 font-medium
              py-2 px-4 sm:px-6
              rounded-lg transition
              text-base      /* mobile */
              sm:text-lg     /* tablet */
              md:text-[1.25rem] /* desktop unchanged */
            "
            style={{ fontFamily: "Averia Serif Libre" }}
          >
            {t.unlimitedPoss?.startFreeButton || ""}
          </button>
        </div>
      </div>
    </section>
  );
};

export default UnlimitedPoss;
