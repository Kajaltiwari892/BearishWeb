import React from "react";
import Link from "next/link";
import Image from "next/image";

const PrivateFoundation: React.FC = () => {
  return (
    <section className="w-full px-4 sm:px-6 py-8 sm:py-12 md:py-20 flex flex-col md:flex-row items-start gap-6 sm:gap-8 md:gap-10 bg-[#F8F7F4]">
      {/* Left Content */}
      <div className="flex-1 max-w-full md:pl-8 lg:pl-12 xl:pl-20">
        <h2
          className="text-3xl sm:text-4xl md:text-5xl max-w-xl font-extrabold text-[#3C3C3C] mb-4 sm:mb-6 leading-tight md:ml-4 lg:ml-8"
          style={{ fontFamily: "Suez One" }}
        >
          Built on a secure and private foundation
        </h2>
        <p
          className="text-[#666666] font-light w-full sm:w-[95%] md:w-[90%] text-base sm:text-lg md:text-xl lg:text-[1.75rem] mb-6 sm:mb-8 md:mb-10 leading-normal md:ml-4 lg:ml-8"
          style={{ fontFamily: "Source Serif Pro" }}
        >
          What feels like natural work flow is actually advanced AI
          orchestration. Bearish OS transforms enterprise complexity into
          effortless productivity you focus on results while intelligent systems
          handle everything else.
        </p>

        {/* Features */}
        <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 w-full md:w-[120%] mb-8 sm:mb-10 md:mb-12 text-gray-700 md:ml-4 lg:ml-8">
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 md:gap-10 items-start">
            <h3 className="font-bold text-[#3C3C3C] text-lg sm:text-xl md:text-[1.5rem] sm:min-w-[200px] md:min-w-[240px]"
            >
              Bearish Paths Engine
            </h3>
            <p className="leading-normal max-w-full sm:max-w-md md:max-w-xs text-[#666666] text-base sm:text-lg md:text-[1.5rem] md:ml-[7rem]"
            >
              Lightning-fast responses across every app your workflow moves at
              the speed of thought
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 md:gap-8 items-start">
            <h3 className="font-bold text-[#3C3C3C] text-lg sm:text-xl md:text-[1.5rem] sm:min-w-[200px] md:min-w-[240px]">
              Built to scale
            </h3>
            <p className="leading-normal text-[#666666] text-base sm:text-lg md:text-[1.5rem] max-w-full sm:max-w-md md:max-w-xs md:ml-[7rem]">
              From solo teams to Fortune 500s unlock features and use cases as
              your business scales
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 md:gap-8 items-start">
            <h3 className="font-bold text-[#333333] text-lg sm:text-xl md:text-[1.5rem] sm:min-w-[200px] md:min-w-[240px]">
              Enterprise Security
            </h3>
            <p className="leading-normal text-[#666666] text-base sm:text-lg md:text-[1.5rem] max-w-full sm:max-w-md md:max-w-xs md:ml-[7rem]">
              Enterprise-level protection for every teams your data stays 100%
              private with industry leading standards
            </p>
          </div>
        </div>

        {/* Icons */}
        <div className="flex gap-4 mb-6 md:ml-4 lg:ml-8">
          <div className="flex flex-col items-center justify-center">
            <Image
              src="/images/PrivateFoundation/SOCO2.png"
              alt="SOC2"
              width={148}
              height={148}
              className="w-[9.25rem] h-[9.25rem] object-contain"
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <Image
              src="/images/PrivateFoundation/ISO.png"
              alt="ISO"
              width={148}
              height={148}
              className="w-[9.25rem] h-[9.25rem] object-contain"
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <Image
              src="/images/PrivateFoundation/GDPR.png"
              alt="GDPR"
              width={148}
              height={148}
              className="w-[9.25rem] h-[9.25rem] object-contain"
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <Image
              src="/images/PrivateFoundation/CGPA.png"
              alt="CCPA"
              width={148}
              height={148}
              className="w-[9.25rem] h-[9.25rem] object-contain"
            />
          </div>
        </div>

        {/* Footer Note */}
        <p className="text-sm sm:text-base md:text-[1rem] text-[#888888] max-w-xl leading-normal md:ml-4 lg:ml-8">
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
        </p>
      </div>

      {/* Right Image */}
      <div className="flex-1 max-w-full sm:max-w-md md:max-w-lg lg:max-w-2xl items-center justify-center flex mt-6 md:mt-0">
        <div className="w-full max-w-[410px] relative">
          <Image
            src="/images/PrivateFoundation/verticalImg.png"
            alt="Secure Private Foundation"
            width={410}
            height={1104}
            className="rounded-3xl w-full h-[69rem]"
          />
        </div>
      </div>
    </section>
  );
};

export default PrivateFoundation;