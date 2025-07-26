"use client";

import React from "react";
import Image from "next/image";

interface ProductModalProps {
  isOpen: boolean;
  triggerRef?: React.RefObject<HTMLDivElement | null>;
}

const ProductModal: React.FC<ProductModalProps> = ({ isOpen, triggerRef }) => {
  if (!isOpen) return null;

  // Calculate position based on trigger element with cross-platform compatibility
  const getModalPosition = () => {
    if (triggerRef?.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      
      // Get device pixel ratio for better cross-platform scaling
      const devicePixelRatio = window.devicePixelRatio || 1;
      const scaleFactor = Math.min(devicePixelRatio, 2);

      // Increased modal width to accommodate single-line feature titles
      const modalWidth =
        viewportWidth < 640
          ? Math.min(viewportWidth * 0.95, 380) // 95% of viewport width, max 380px
          : viewportWidth < 1024
          ? Math.min(viewportWidth * 0.7, 650) // 70% of viewport width, max 650px
          : Math.min(viewportWidth * 0.5, 650); // 50% of viewport width, max 750px
      
      // Dynamic height based on content and viewport
      const baseHeight = viewportWidth < 640 ? 320 : 420;
      const modalHeight = Math.min(baseHeight, viewportHeight * 0.8); // Max 80% of viewport height

      let left = rect.left;
      let top = rect.bottom + (8 * scaleFactor);

      // Enhanced boundary checking with better margins
      const horizontalMargin = Math.max(16, viewportWidth * 0.02); // 2% of viewport or 16px minimum
      const verticalMargin = Math.max(16, viewportHeight * 0.02); // 2% of viewport or 16px minimum

      // Ensure modal doesn't go off-screen horizontally
      if (left + modalWidth > viewportWidth - horizontalMargin) {
        left = viewportWidth - modalWidth - horizontalMargin;
      }
      if (left < horizontalMargin) {
        left = horizontalMargin;
      }

      // Ensure modal doesn't go off-screen vertically
      if (top + modalHeight > viewportHeight - verticalMargin) {
        top = rect.top - modalHeight - (8 * scaleFactor);
      }
      if (top < verticalMargin) {
        top = verticalMargin;
      }

      return {
        top,
        left,
        width: modalWidth,
        height: modalHeight,
      };
    }

    // Default position if no triggerRef with better responsive defaults
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    
    const defaultWidth =
      viewportWidth < 640
        ? Math.min(viewportWidth * 0.95, 380)
        : Math.min(viewportWidth * 0.6, 750);
    const defaultHeight = Math.min(
      viewportWidth < 640 ? 320 : 420,
      viewportHeight * 0.8
    );

    return {
      top: Math.max(80, viewportHeight * 0.1), // 10% from top or 80px minimum
      left: Math.max(20, (viewportWidth - defaultWidth) / 2), // Center horizontally
      width: defaultWidth,
      height: defaultHeight,
    };
  };

  const position = getModalPosition();

  return (
    <div
      className="fixed z-[10000] rounded-sm bg-[#FDFDFC] shadow-lg border border-[#B3A89A]
                 backdrop-blur-sm transition-all duration-200 ease-out"
      style={{
        top: `${position.top}px`,
        left: `${position.left}px`,
        width: `${position.width}px`,
        height: `${position.height}px`,
        boxShadow:
          "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
        textRendering: "optimizeLegibility",
      }}
    >
      {/* Modal Content */}
      <div
        className="p-3 sm:p-4 h-full flex flex-col sm:flex-row overflow-hidden
                      text-rendering-optimize-legibility antialiased"
      >
        {/* Left Side - Products */}
        <div
          className="flex-1 sm:pr-4 mb-4 sm:mb-0"
          style={{ fontFamily: "Averia Serif Libre" }}
        >
          {/* First Product Section */}
          <div className="space-y-1 sm:space-y-1.5 mb-3 sm:mb-4">
            {" "}
            {/* Reduced margin */}
            <div className="flex items-center">
              <Image
                src="/icons/arrows/WorkOS.svg"
                alt="Work OS Icon"
                width={26}
                height={26}
              />
              <h3
                className="text-base sm:text-lg font-semibold text-gray-800  ml-2
                           leading-tight tracking-tight"
              >
                Work OS
              </h3>
            </div>
            <p
              className="text-[#3C3C3C]  text-xs sm:text-sm leading-relaxed
                         font-medium tracking-normal"
            >
              Enterprise power, startup simplicity. The intelligent workspace
              that grows and protects your business.
            </p>
          </div>

          {/* Second Product Section */}
          <div className="space-y-1  sm:space-y-1.5 mb-3 sm:mb-4">
            {" "}
            {/* Reduced margin */}
            <div className="flex items-center">
              <Image
                src="/icons/arrows/BebaAIIcon.svg"
                alt="BEBA Agent Icon"
                width={26}
                height={26}
              />
              <h3
                className="text-base sm:text-lg font-semibold text-[#3C3C3C]  ml-2
                           leading-tight tracking-tight"
              >
                BEBA Agent
              </h3>
            </div>
            <p
              className="text-[#3C3C3C]  text-xs sm:text-sm leading-relaxed
                         font-medium tracking-normal"
            >
              Smart automation, effortless control. The AI agent that
              anticipates needs and eliminates routine work.
            </p>
          </div>

          {/* Third Product Section - Privacy & Security */}
          <div className="space-y-1 sm:space-y-1.5">
            <div className="flex items-center">
              <Image
                src="/icons/arrows/securityPrivacy.svg"
                alt="Privacy & Security Icon"
                width={26}
                height={26}
              />
              <h3
                className="text-base sm:text-lg font-semibold text-gray-800 ml-2
                           leading-tight tracking-tight"
              >
                Privacy & Security
              </h3>
            </div>
            <p
              className="text-[#3C3C3C] text-xs sm:text-sm leading-relaxed
                         font-medium tracking-normal"
            >
              Not added later—woven into every layer. Bearish scales your
              security and compliance as you grow.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-300 my-3 sm:hidden opacity-60"></div>
        <div className="hidden sm:block w-px bg-gray-300 mx-2 opacity-60"></div>

        {/* Right Side - Features */}
        <div
          className="flex-1 sm:pl-4"
          style={{ fontFamily: "Averia Serif Libre" }}
        >
          <h3
            className="text-base sm:text-lg font-semibold text-gray-800 font-suez mb-2 sm:mb-3
                       leading-tight tracking-tight"
          >
            Features
          </h3>

          {/* Intelligent Connections */}
          <div className="mb-2">
            <div className="flex items-center">
              <Image
                src="/icons/arrows/intelligentConnections.svg"
                alt="Intelligent Connections Icon"
                width={20}
                height={20}
              />
              <h4
                className="text-xs sm:text-sm font-semibold text-gray-800 ml-2
                           leading-tight tracking-tight whitespace-nowrap"
              >
                Intelligent Connections
              </h4>
            </div>
            <p
              className="text-gray-600 ml-7 text-xs sm:text-sm leading-relaxed
                         font-medium tracking-normal"
            >
              All the apps you love working together
            </p>
          </div>

          {/* Connected Communications */}
          <div className="mb-2">
            <div className="flex items-center">
              <Image
                src="/icons/arrows/ConnectedCommunications.svg"
                alt="Connected Communications Icon"
                width={20}
                height={20}
              />
              <h4
                className="text-xs sm:text-sm font-semibold text-gray-800 ml-2
                           leading-tight tracking-tight whitespace-nowrap"
              >
                Connected Communications
              </h4>
            </div>
            <p
              className="text-gray-600 ml-7 text-xs sm:text-sm leading-relaxed
                         font-medium tracking-normal"
            >
              Email, messaging, & video in harmony
            </p>
          </div>

          {/* Smart Project & Scheduling */}
          <div className="mb-2">
            <div className="flex items-center">
              <Image
                src="/icons/arrows/smartProjects.svg"
                alt="Smart Project & Scheduling Icon"
                width={20}
                height={20}
              />
              <h4
                className="text-xs sm:text-sm font-semibold text-gray-800 ml-2
                           leading-tight tracking-tight whitespace-nowrap"
              >
                Smart Project & Scheduling
              </h4>
            </div>
            <p
              className="text-gray-600 ml-7 text-xs sm:text-sm leading-relaxed
                         font-medium tracking-normal"
            >
              Tasks, deadlines, and calendar unified
            </p>
          </div>

          {/* Unified Document Hub */}
          <div className="mb-2">
            <div className="flex items-center">
              <Image
                src="/icons/arrows/unifiedDocumentHub.svg"
                alt="Unified Document Hub Icon"
                width={20}
                height={20}
              />
              <h4
                className="text-xs sm:text-sm font-semibold text-gray-800 ml-2
                           leading-tight tracking-tight whitespace-nowrap"
              >
                Unified Document Hub
              </h4>
            </div>
            <p
              className="text-gray-600 ml-7 text-xs sm:text-sm leading-relaxed
                         font-medium tracking-normal"
            >
              Files that flow where you need them
            </p>
          </div>

          {/* Relationship Intelligence */}
          <div className="mb-2">
            <div className="flex items-center">
              <Image
                src="/icons/arrows/RelationshipIntelligence.svg"
                alt="Relationship Intelligence Icon"
                width={20}
                height={20}
              />
              <h4
                className="text-xs sm:text-sm font-semibold text-gray-800 ml-2
                           leading-tight tracking-tight whitespace-nowrap"
              >
                Relationship Intelligence
              </h4>
            </div>
            <p
              className="text-gray-600 ml-7 text-xs sm:text-sm leading-relaxed
                         font-medium tracking-normal"
            >
              CRM that connects your workflow
            </p>
          </div>

          {/* Business Analytics */}
          <div className="mb-2">
            <div className="flex items-center">
              <Image
                src="/icons/arrows/BusinessAnalytics.svg"
                alt="Business Analytics Icon"
                width={20}
                height={20}
              />
              <h4
                className="text-xs sm:text-sm font-semibold text-gray-800 ml-2
                           leading-tight tracking-tight whitespace-nowrap"
              >
                Business Analytics
              </h4>
            </div>
            <p
              className="text-gray-600 ml-7 text-xs sm:text-sm leading-relaxed
                         font-medium tracking-normal"
            >
              Insights across all aspects of your work
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
