"use client";
import React from "react";

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
      
      // Responsive modal dimensions
      const modalWidth = viewportWidth < 640 ? Math.min(viewportWidth - 32, 350) : 
                        viewportWidth < 1024 ? 500 : 600;
      const modalHeight = viewportWidth < 640 ? 300 : 400;
      
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
        top = rect.top - modalHeight - 8; // Show above trigger
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
    return { 
      top: 80, 
      left: 20, 
      width: window.innerWidth < 640 ? Math.min(window.innerWidth - 32, 350) : 600,
      height: window.innerWidth < 640 ? 300 : 400
    };
  };

  const position = getModalPosition();

  return (
    <div 
      className="fixed z-[10000] bg-white shadow-lg border border-gray-200"
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
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 font-suez">
              Work OS
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              Enterprice power, startup simplicity. The intelligent workspace that grows and protects your business.
            </p>
          </div>

          {/* Second Product Section */}
          <div className="space-y-1 sm:space-y-2">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 font-suez">
              BEBA Agent
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              Smart Automation, effortless control. The AI Agent that anticipates needs and eliminates routine work.
            </p>
          </div>
        </div>

        {/* Horizontal Divider for Mobile, Vertical for Desktop */}
        <div className="h-px bg-gray-300 my-3 sm:hidden"></div>
        <div className="hidden sm:block w-px bg-gray-300 mx-2"></div>

        {/* Right Side - Features */}
        <div className="flex-1 sm:pl-4">
          <h3 className="text-base sm:text-lg font-semibold text-gray-800 font-suez mb-2 sm:mb-4">
            Features
          </h3>
          <div className="space-y-1 sm:space-y-2">
            <h4 className="text-lg sm:text-xl font-medium text-gray-700 font-suez">
              Work OS
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
