"use client";

import React from "react";
import Image from "next/image";

interface ProductModalProps {
  isOpen: boolean;
  triggerRef?: React.RefObject<HTMLDivElement | null>;
}

const ProductModal: React.FC<ProductModalProps> = ({ isOpen, triggerRef }) => {
  if (!isOpen) return null;

  // Calculate position based on trigger element
  const getModalPosition = () => {
    if (triggerRef?.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      // Responsive modal dimensions (height slightly reduced)
      const modalWidth =
        viewportWidth < 640
          ? Math.min(viewportWidth - 32, 350)
          : viewportWidth < 1024
          ? 500
          : 600;
      const modalHeight = viewportWidth < 640 ? 280 : 380; // Increased height to fit all content

      let left = rect.left;
      let top = rect.bottom + 8;

      // Ensure modal doesn't go off-screen horizontally
      if (left + modalWidth > viewportWidth) {
        left = viewportWidth - modalWidth - 16;
      }
      if (left < 16) {
        left = 16;
      }

      // Ensure modal doesn't go off-screen vertically
      if (top + modalHeight > viewportHeight) {
        top = rect.top - modalHeight - 8;
      }
      if (top < 16) {
        top = 16;
      }

      return {
        top,
        left,
        width: modalWidth,
        height: modalHeight,
      };
    }

    // Default position if no triggerRef
    const defaultWidth =
      window.innerWidth < 640
        ? Math.min(window.innerWidth - 32, 350)
        : 600;
    const defaultHeight = window.innerWidth < 640 ? 280 : 380; // Increased height to fit all content

    return {
      top: 80,
      left: 20,
      width: defaultWidth,
      height: defaultHeight,
    };
  };

  const position = getModalPosition();

  return (
    <div
      className="fixed z-[10000] rounded-sm bg-[#FDFDFC] shadow-lg border border-[#B3A89A]"
      style={{
        top: `${position.top}px`,
        left: `${position.left}px`,
        width: `${position.width}px`,
        height: `${position.height}px`,
      }}
    >
      {/* Modal Content */}
      <div className="p-3 sm:p-4 h-full flex flex-col sm:flex-row overflow-hidden">
        {/* Left Side - Products */}
        <div className="flex-1 sm:pr-4 mb-4 sm:mb-0">
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
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 font-suez ml-2">
                Work OS
              </h3>
            </div>
            <p className="text-gray-600 text-[10px] sm:text-sm">
              {" "}
              {/* Smaller text */}
              Enterprise power, startup simplicity. The intelligent workspace
              that grows and protects your business.
            </p>
          </div>

          {/* Second Product Section */}
          <div className="space-y-1 sm:space-y-1.5 mb-3 sm:mb-4">
            {" "}
            {/* Reduced margin */}
            <div className="flex items-center">
              <Image
                src="/icons/arrows/BebaAIIcon.svg"
                alt="BEBA Agent Icon"
                width={26}
                height={26}
              />
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 ml-2">
                BEBA Agent
              </h3>
            </div>
            <p className="text-gray-600 text-[10px] sm:text-sm">
              {" "}
              {/* Smaller text */}
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
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 ml-2">
                Privacy & Security
              </h3>
            </div>
            <p className="text-gray-600 text-[10px] sm:text-sm">
              {" "}
              {/* Smaller text */}
              Not added later—woven into every layer. Bearish scales your
              security and compliance as you grow.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-300 my-3 sm:hidden"></div>
        <div className="hidden sm:block w-px bg-gray-300 mx-2"></div>

        {/* Right Side - Features */}
        <div className="flex-1 sm:pl-4">
          <h3 className="text-base sm:text-lg font-semibold text-gray-800 font-suez mb-2 sm:mb-4">
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
              <h4 className="text-sm sm:text-base font-semibold text-gray-800 ml-2">
                Intelligent Connections
              </h4>
            </div>
            <p className="text-gray-600 ml-7 text-xs sm:text-sm">
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
              <h4 className="text-sm sm:text-base font-semibold text-gray-800 ml-2">
                Connected Communications
              </h4>
            </div>
            <p className="text-gray-600 ml-7 text-xs sm:text-sm">
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
              <h4 className="text-sm sm:text-base font-semibold text-gray-800 ml-2">
                Smart Project & Scheduling
              </h4>
            </div>
            <p className="text-gray-600 ml-7 text-xs sm:text-sm">
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
              <h4 className="text-sm sm:text-base font-semibold text-gray-800 ml-2">
                Unified Document Hub
              </h4>
            </div>
            <p className="text-gray-600 ml-7 text-xs sm:text-sm">
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
              <h4 className="text-sm sm:text-base font-semibold text-gray-800 ml-2">
                Relationship Intelligence
              </h4>
            </div>
            <p className="text-gray-600 ml-7 text-xs sm:text-sm">
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
              <h4 className="text-sm sm:text-base font-semibold text-gray-800 ml-2">
                Business Analytics
              </h4>
            </div>
            <p className="text-gray-600 ml-7 text-xs sm:text-sm">
              Insights across all aspects of your work
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
