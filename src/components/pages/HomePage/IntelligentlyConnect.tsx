import React from "react";
import Image from "next/image";

const IntelligentlyConnect: React.FC = () => {
  return (
    <section className="w-full bg-[#F8F7F4] py-8 px-2 sm:py-12 sm:px-4 flex flex-col items-center">
      {/* Header */}
      <div className="max-w-4xl w-full mb-8">
        <h1
          className="text-[#3C3C3C] font-bold mb-4 text-left"
          style={{
            fontFamily: "Suez One",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            lineHeight: 1.1,
          }}
        >
          Intelligently Connect
        </h1>
        <p
          className="text-[#3C3C3C] font-normal mb-8 text-left"
          style={{
            fontFamily: "Averia Serif Libre",
            fontSize: "clamp(1rem, 2vw, 1.35rem)",
          }}
        >
          End the app jumping - bring Jira, Teams, Google Suite & 50+ other
          enterprise apps together, all working as one unified workspace, saving
          3+ hours per user per day minimum.
        </p>
      </div>

      {/* Main Video Illustration - no container, just the video */}

      <video
          src="/videos/InteligentlyVid.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="object-cover rounded-xl w-full  max-w-4xl  mb-10"
          style={{ height: "clamp(180px, 35vw, 400px)" }}
        />
      

      {/* Two-Column Section with Vertical Divider */}
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 mt-4 pt-8 relative">
        {/* Top horizontal line - only extends to text width */}
        <div
          className="absolute top-0 left-0 w-[95%] h-px bg-[#d6d1c7]"
          style={{ maxWidth: "95%" }}
        ></div>

        {/* Left Card */}
        <div className="flex flex-col items-start text-left px-1 sm:px-2 z-10">
          <h2
            className="text-[#3C3C3C] mb-2"
            style={{
              fontFamily: "Suez One",
              fontSize: "clamp(1.1rem, 2vw, 2rem)",
            }}
          >
            Replace the single apps
          </h2>
          <p
            className="text-[#3C3C3C] w-[88%] mb-4"
            style={{
              fontFamily: "Averia Serif Libre",
              fontSize: "clamp(0.95rem, 1.2vw, 1.15rem)",
            }}
          >
            Replace single-feature apps with one powerful platform—cut $3,000+
            monthly and gain far more capability.
          </p>
          <div className="w-full flex mb-5 justify-center">
            <Image
              src="/images/IntelligentConnections/ReplaceSingleApp.png"
              alt="Replace Single App"
              width={190}
              height={190}
              className="object-contain rounded-lg"
            />
          </div>
        </div>
        {/* Vertical Divider for md+ screens */}
        <div
          className="hidden md:block absolute top-0 bottom-0 left-1/2 w-px bg-[#d6d1c7] z-0"
          style={{ transform: "translateX(-50%)" }}
        />
        {/* Right Card */}
        <div className="flex flex-col items-start text-left px-1 sm:px-2 z-10">
          <h2
            className="text-[#3C3C3C] mb-2"
            style={{
              fontFamily: "Suez One",
              fontSize: "clamp(1.1rem, 2vw, 2rem)",
            }}
          >
            Automate the Rest
          </h2>
          <p
            className="text-[#3C3C3C] w-[88%] mb-4"
            style={{
              fontFamily: "Averia Serif Libre",
              fontSize: "clamp(0.95rem, 1.2vw, 1.15rem)",
            }}
          >
            Let BEBA handle tasks, emails, next steps, CRM updates, and
            workflows—fully autonomously or perfectly in sync with you.
          </p>
          <div className="w-full flex mb-5 justify-center">
            <Image
              src="/images/IntelligentConnections/AutomateRest.png"
              alt="Automate the Rest"
              width={190}
              height={190}
              className="object-contain rounded-lg"
            />
          </div>
        </div>

        {/* Bottom horizontal line - match top line width and alignment */}
        <div
          className="absolute bottom-0 left-0 w-[95%] h-px bg-[#d6d1c7]"
          style={{ maxWidth: "95%" }}
        ></div>
      </div>
    </section>
  );
};

export default IntelligentlyConnect;
