"use client";

import React from "react";
import Image from "next/image";

interface ProductModalProps {
  isOpen: boolean;
  triggerRef?: React.RefObject<HTMLDivElement | null>;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({
  isOpen,
  triggerRef,
  onMouseEnter,
  onMouseLeave,
}) => {
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

      // Reduced modal width slightly
      const modalWidth =
        viewportWidth < 640
          ? Math.min(viewportWidth * 0.9, 380) // Reduced from 0.95 to 0.9 and 400 to 380
          : viewportWidth < 1024
          ? Math.min(viewportWidth * 0.7, 650) // Reduced from 0.75 to 0.7 and 700 to 650
          : Math.min(viewportWidth * 0.5, 700); // Reduced from 0.55 to 0.5 and 750 to 700

      // Dynamic height based on content and viewport
      const baseHeight = viewportWidth < 640 ? 340 : 440; // Slightly increased height
      const modalHeight = Math.min(baseHeight, viewportHeight * 0.8);

      let left = rect.left;
      let top = rect.bottom + 8 * scaleFactor;

      // Enhanced boundary checking with better margins
      const horizontalMargin = Math.max(16, viewportWidth * 0.02);
      const verticalMargin = Math.max(16, viewportHeight * 0.02);

      // Ensure modal doesn't go off-screen horizontally
      if (left + modalWidth > viewportWidth - horizontalMargin) {
        left = viewportWidth - modalWidth - horizontalMargin;
      }
      if (left < horizontalMargin) {
        left = horizontalMargin;
      }

      // Ensure modal doesn't go off-screen vertically
      if (top + modalHeight > viewportHeight - verticalMargin) {
        top = rect.top - modalHeight - 8 * scaleFactor;
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
        ? Math.min(viewportWidth * 0.9, 380) // Reduced from 0.95 to 0.9 and 400 to 380
        : Math.min(viewportWidth * 0.6, 700); // Reduced from 0.65 to 0.6 and 750 to 700

    const defaultHeight = Math.min(
      viewportWidth < 640 ? 340 : 440,
      viewportHeight * 0.8
    );

    return {
      top: Math.max(80, viewportHeight * 0.1),
      left: Math.max(20, (viewportWidth - defaultWidth) / 2),
      width: defaultWidth,
      height: defaultHeight,
    };
  };

  const position = getModalPosition();

  return (
    <div
      className="fixed z-[10000] rounded-lg bg-[#FDFDFC] shadow-lg border border-[#B3A89A]
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
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Modal Content */}
      <div
        className="p-3 sm:p-4 h-full flex flex-col sm:flex-row overflow-hidden
                      text-rendering-optimize-legibility antialiased"
      >
        {/* Left Side - Products - Adjusted width for better text wrapping */}
        <div
          className="flex-1 sm:pr-3 mb-4 sm:mb-0 max-w-[50%]"
          style={{ fontFamily: "Averia Serif Libre" }}
        >
          {/* First Product Section */}
          <div className="space-y-1 hover:rounded-md hover:bg-[#f7f3ef] sm:space-y-1.5 mb-3 sm:mb-4 p-2 -m-2">
            <div className="flex items-center">
              <Image
                src="/icons/arrows/WorkOS.svg"
                alt="Work OS Icon"
                width={36}
                height={36}
              />
              <h3
                className="text-lg sm:text-xl font-semibold text-gray-800 ml-2
                           leading-tight tracking-tight"
              >
                Work OS
              </h3>
            </div>
            <p
              className="text-[#3C3C3C] text-[0.95rem] sm:text-[1.05rem] leading-[1.25]
                         font-medium tracking-normal"
            >
              Enterprise power, startup simplicity. The intelligent workspace
              that grows and protects your business.
            </p>
          </div>

          {/* Second Product Section */}
          <div className="space-y-1 hover:rounded-md hover:bg-[#f7f3ef] sm:space-y-1.5 mb-3 sm:mb-4 p-2 -m-2">
            <div className="flex items-center">
              <Image
                src="/icons/arrows/BebaAIIcon.svg"
                alt="BEBA Agent Icon"
                width={36}
                height={36}
              />
              <h3
                className="text-lg sm:text-xl font-semibold text-[#3C3C3C] ml-2
                           leading-tight tracking-tight"
              >
                BEBA Agent
              </h3>
            </div>
            <p
              className="text-[#3C3C3C] text-[0.95rem] sm:text-[1.05rem] leading-[1.25]
                         font-medium tracking-normal"
            >
              Smart automation, effortless control. The AI agent that
              anticipates needs and eliminates routine work.
            </p>
          </div>

          {/* Third Product Section - Privacy & Security */}
          <div className="space-y-1 hover:rounded-md hover:bg-[#f7f3ef] sm:space-y-1.5 p-2 -m-2">
            <div className="flex items-center">
              <Image
                src="/icons/arrows/securityPrivacy.svg"
                alt="Privacy & Security Icon"
                width={36}
                height={36}
              />
              <h3
                className="text-lg sm:text-xl font-semibold text-[#3C3C3C] ml-2
                           leading-tight tracking-tight"
              >
                Privacy & Security
              </h3>
            </div>
            <p
              className="text-[#3C3C3C] text-[0.95rem] sm:text-[1.05rem] leading-[1.25]
                         font-medium tracking-normal"
            >
              Not added later—woven into every layer. Bearish scales your
              security and compliance as you grow.
            </p>
          </div>
        </div>

        {/* Vertical Divider - Solid with spacing */}
        <div className="h-px bg-gray-300 my-3 sm:hidden opacity-60 mx-auto w-11/12"></div>
        <div
          className="hidden sm:block w-px bg-gray-300 mx-2 opacity-70"
          style={{
            marginTop: "20px",
            marginBottom: "20px",
            height: "calc(100% - 40px)",
          }}
        ></div>

        {/* Right Side - Features */}
        <div
          className="flex-1"
          style={{ fontFamily: "Averia Serif Libre", flex: "0.6" }} // COMMIT: Increased right side width from 0.4 to 0.6 to balance left side reduction
        >
          <h3
            className="text-lg sm:text-xl font-semibold text-[#3C3C3C] font-suez mb-2 sm:mb-3
                       leading-tight tracking-tight"
          >
            Features
          </h3>

          {/* Intelligent Connections */}
          <div className="mb-2 hover:rounded-md hover:bg-[#f7f3ef] p-2 -m-2">
            <div className="flex items-center">
              <div className="flex items-center justify-center w-8 h-8">
                <Image
                  src="/icons/arrows/intelligentConnections.svg"
                  alt="Intelligent Connections Icon"
                  width={36}
                  height={36}
                />
              </div>
              <div className="ml-2 flex-1">
                <h4
                  className="text-sm sm:text-base font-semibold text-gray-800
                             leading-tight tracking-tight whitespace-nowrap"
                >
                  Intelligent Connections
                </h4>
                <p
                  className="text-gray-600 text-sm sm:text-base leading-tight
                             font-medium tracking-normal whitespace-nowrap"
                >
                  All the apps you love working together
                </p>
              </div>
            </div>
          </div>

          {/* Connected Communications */}
          <div className="mb-2 hover:rounded-md hover:bg-[#f7f3ef] p-2 -m-2 mt-1">
            <div className="flex items-center">
              <div className="flex items-center justify-center w-8 h-8">
                <Image
                  src="/icons/arrows/ConnectedCommunications.svg"
                  alt="Connected Communications Icon"
                  width={36}
                  height={36}
                />
              </div>
              <div className="ml-2 flex-1">
                <h4
                  className="text-sm sm:text-base font-semibold text-gray-800
                             leading-tight tracking-tight whitespace-nowrap"
                >
                  Connected Communications
                </h4>
                <p
                  className="text-gray-600 text-sm sm:text-base leading-tight
                             font-medium tracking-normal whitespace-nowrap"
                >
                  Email, messaging, & video in harmony
                </p>
              </div>
            </div>
          </div>

          {/* Smart Project & Scheduling */}
          <div className="mb-2 hover:rounded-md hover:bg-[#f7f3ef] p-2 -m-2 mt-1">
            <div className="flex items-center">
              <div className="flex items-center justify-center w-8 h-8">
                <Image
                  src="/icons/arrows/smartProjects.svg"
                  alt="Smart Project & Scheduling Icon"
                  width={36}
                  height={36}
                />
              </div>
              <div className="ml-2 flex-1">
                <h4
                  className="text-sm sm:text-base font-semibold text-gray-800
                             leading-tight tracking-tight whitespace-nowrap"
                >
                  Smart Project & Scheduling
                </h4>
                <p
                  className="text-gray-600 text-sm sm:text-base leading-tight
                             font-medium tracking-normal whitespace-nowrap"
                >
                  Tasks, deadlines, and calendar unified
                </p>
              </div>
            </div>
          </div>

          {/* Unified Document Hub */}
          <div className="mb-2 hover:rounded-md hover:bg-[#f7f3ef] p-2 -m-2 mt-1">
            <div className="flex items-center">
              <div className="flex items-center justify-center w-8 h-8">
                <Image
                  src="/icons/arrows/unifiedDocumentHub.svg"
                  alt="Unified Document Hub Icon"
                  width={36}
                  height={36}
                />
              </div>
              <div className="ml-2 flex-1">
                <h4
                  className="text-sm sm:text-base font-semibold text-gray-800
                             leading-tight tracking-tight whitespace-nowrap"
                >
                  Unified Document Hub
                </h4>
                <p
                  className="text-gray-600 text-sm sm:text-base leading-tight
                             font-medium tracking-normal whitespace-nowrap"
                >
                  Files that flow where you need them
                </p>
              </div>
            </div>
          </div>

          {/* Relationship Intelligence */}
          <div className="mb-2 hover:rounded-md hover:bg-[#f7f3ef] p-2 -m-2 mt-1">
            <div className="flex items-center">
              <div className="flex items-center justify-center w-8 h-8">
                <Image
                  src="/icons/arrows/RelationshipIntelligence.svg"
                  alt="Relationship Intelligence Icon"
                  width={36}
                  height={36}
                />
              </div>
              <div className="ml-2 flex-1">
                <h4
                  className="text-sm sm:text-base font-semibold text-gray-800
                             leading-tight tracking-tight whitespace-nowrap"
                >
                  Relationship Intelligence
                </h4>
                <p
                  className="text-gray-600 text-sm sm:text-base leading-tight
                             font-medium tracking-normal whitespace-nowrap"
                >
                  CRM that connects your workflow
                </p>
              </div>
            </div>
          </div>

          {/* Business Analytics */}
          <div className="hover:rounded-md hover:bg-[#f7f3ef] p-2 -m-2 mt-1">
            <div className="flex items-center">
              <div className="flex items-center justify-center w-8 h-8">
                <Image
                  src="/icons/arrows/BusinessAnalytics.svg"
                  alt="Business Analytics Icon"
                  width={36}
                  height={36}
                />
              </div>
              <div className="ml-2 flex-1">
                <h4
                  className="text-sm sm:text-base font-semibold text-gray-800
                             leading-tight tracking-tight whitespace-nowrap"
                >
                  Business Analytics
                </h4>
                <p
                  className="text-gray-600 text-sm sm:text-base leading-tight
                             font-medium tracking-normal whitespace-nowrap"
                >
                  Insights across all aspects of your work
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;