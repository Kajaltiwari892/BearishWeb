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
      const modalHeight = viewportWidth < 640 ? 260 : 340;

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
    const defaultHeight = window.innerWidth < 640 ? 260 : 360; 

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
      className="fixed z-[10000] rounded-sm bg-white shadow-lg border border-gray-200"
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
          <div className="space-y-1 sm:space-y-2 mb-4 sm:mb-6">
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
            <p className="text-gray-600 text-xs sm:text-base">
              Enterprise power, startup simplicity. The intelligent workspace
              that grows and protects your business.
            </p>
          </div>

          {/* Second Product Section */}
          <div className="space-y-1 sm:space-y-2">
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
            <p className="text-gray-600 text-xs sm:text-base">
              Smart Automation, effortless control. The AI Agent that
              anticipates needs and eliminates routine work.
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
          <div className="flex items-center">
            <Image
              src="/icons/arrows/WorkOS.svg"
              alt="Work OS Icon"
              width={26}
              height={26}
            />
            <h3 className="text-lg sm:text-base font-semibold text-gray-800 ml-2">
              Work OS
            </h3>
          </div>
          <p className="text-gray-600 ml-6 text-xs sm:text-base">
            Work OS
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
