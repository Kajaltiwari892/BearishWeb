"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import BearishLogo from "@/assets/images/BearishLogo.png";
import LanguageDropdown from "@/components/LanguageDropdown";
import ProductModal from "@/components/modals/ProductModal";
import { useTranslations } from "@/lib/i18n";

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className = "" }) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const productRef = useRef<HTMLDivElement>(null);
  const translations = useTranslations();

  const handleProductHover = () => {
    setIsProductModalOpen(true);
  };

  const handleProductLeave = () => {
    setIsProductModalOpen(false);
  };

  const toggleDropdown = (label: string) => {
    setOpenDropdown((prev) => (prev === label ? null : label));
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Show loading state if translations aren't loaded yet
  if (!translations) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <nav className={`sticky z-[9998] top-0 overflow-visible ${className}`}>
        <div className="flex items-center justify-between px-4 sm:px-5 lg:px-[20px] py-3 lg:py-[20px]">
          {/* Left Side */}
          <div className="flex items-center">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center mr-4 sm:mr-6 lg:mr-[24px]"
            >
              <Image
                src="/icons/arrows/BearishLogo.png"
                alt="Bearish Logo"
                width={43}
                height={43}
                className="w-8 h-8 sm:w-10 sm:h-10 lg:w-[43px] lg:h-[43px]"
              />
            </Link>

            {/* Divider - Hidden on mobile */}
            <div className="hidden sm:block bg-[#B3A89A] w-[2px] h-[24px]" />

            {/* Desktop Nav Items */}
            <div className="hidden lg:flex items-center text-[#F4F1EB] ml-6 space-x-6 xl:space-x-8">
              {/* Product */}
              <div
                ref={productRef}
                className="flex items-center text-lg xl:text-[20px] font-suez cursor-pointer whitespace-nowrap"
                onMouseEnter={handleProductHover}
                onMouseLeave={handleProductLeave}
                style={{ fontFamily: "Suez one" }}
              >
                <span>{translations.nav.product}</span>
                <Image
                  src="/icons/arrows/ArrowSquareUp.svg"
                  alt="Arrow"
                  width={16}
                  height={16}
                  className={`w-4 h-4 ml-1 transform transition-transform ${
                    isProductModalOpen ? "rotate-180" : ""
                  }`}
                />
              </div>

              {/* Solutions */}
              <div
                className="flex items-center text-lg xl:text-[20px] font-suez cursor-pointer whitespace-nowrap"
                onClick={() => toggleDropdown("Solutions")}
                style={{ fontFamily: "Suez one" }}
              >
                <span>{translations.nav.solutions}</span>
                <Image
                  src="/icons/arrows/ArrowSquareUp.svg"
                  alt="Arrow"
                  width={16}
                  height={16}
                  className={`w-4 h-4 ml-1 transform transition-transform ${
                    openDropdown === "Solutions" ? "rotate-180" : ""
                  }`}
                />
              </div>

              {/* Pricing */}
              <Link
                href="/pricing"
                className="text-[var(--bearish-colors-warm-off-white-light)] text-lg xl:text-[20px] font-suez leading-normal whitespace-nowrap"
                style={{ fontFamily: "Suez one" }}
              >
                {translations.nav.pricing}
              </Link>

              {/* Resources */}
              <div
                className="flex items-center text-lg xl:text-[20px] font-suez cursor-pointer whitespace-nowrap"
                onClick={() => toggleDropdown("Resources")}
                style={{ fontFamily: "Suez one" }}
              >
                <span>{translations.nav.resources}</span>
                <Image
                  src="/icons/arrows/ArrowSquareUp.svg"
                  alt="Arrow"
                  width={16}
                  height={16}
                  className={`w-4 h-4 ml-1 transform transition-transform ${
                    openDropdown === "Resources" ? "rotate-180" : ""
                  }`}
                />
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center text-[#F4F1EB] font-suez">
            {/* Demo Link - Hidden on mobile */}
            <Link
              href="/demo"
              className="hidden sm:block text-base lg:text-lg xl:text-[20px] font-normal hover:text-gray-200 transition-colors mr-3 sm:mr-4 lg:mr-[20px] whitespace-nowrap"
              style={{ fontFamily: "Suez one" }}
            >
              {translations.nav.demo}
            </Link>

            {/* Language Dropdown - Hidden on mobile */}
            <div className="hidden sm:block mr-2 sm:mr-3 lg:mr-[12px]">
              <LanguageDropdown />
            </div>

            {/* CTA Button - Responsive sizing */}
            <button
              className="flex items-center justify-center  bg-[#6B8E23] hover:bg-[#9bb26c] rounded-md border border-[#9D9388] text-[#F0ECE7] font-bold font-averia transition-colors duration-200 cursor-pointer whitespace-nowrap 
                             px-2 py-1 text-xs h-6 min-w-[100px]
                             sm:px-3 sm:py-1.5 sm:text-sm sm:h-7 sm:min-w-[120px]
                             lg:px-4 lg:py-1.5 lg:text-sm lg:h-[28px] lg:min-w-[130px]
                             xl:text-[14px]"
            >
              {translations.nav.cta}{" "}
            </button>

            {/* Mobile menu button */}
            <button
              className="lg:hidden ml-2 sm:ml-3 text-white hover:text-gray-200 transition-colors"
              onClick={toggleMobileMenu}
            >
              <Image
                src="/icons/arrows/ArrowSquareUp.svg"
                alt="Menu"
                width={24}
                height={24}
                className={`w-5 h-5 sm:w-6 sm:h-6 transform transition-transform ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed top-[80px] left-0 right-0  backdrop-blur-sm z-[9997] border-t border-[#B3A89A]/30">
          <div className="px-4 py-6 space-y-4">
            {/* Mobile Nav Items */}
            <div className="space-y-4 text-[#F4F1EB] font-suez">
              {/* Product */}
              <div
                className="flex items-center justify-between text-lg cursor-pointer py-2"
                onTouchStart={() => {
                  setIsProductModalOpen(true);
                  setIsMobileMenuOpen(false);
                }}
              >
                <span>Product</span>
                <Image
                  src="/icons/arrows/ArrowSquareUp.svg"
                  alt="Arrow"
                  width={16}
                  height={16}
                  className={`w-4 h-4 transform transition-transform ${
                    isProductModalOpen ? "rotate-180" : ""
                  }`}
                />
              </div>

              {/* Solutions */}
              <div
                className="flex items-center justify-between text-lg cursor-pointer py-2"
                onClick={() => toggleDropdown("Solutions")}
              >
                <span>Solutions</span>
                <Image
                  src="/icons/arrows/ArrowSquareUp.svg"
                  alt="Arrow"
                  width={16}
                  height={16}
                  className={`w-4 h-4 transform transition-transform ${
                    openDropdown === "Solutions" ? "rotate-180" : ""
                  }`}
                />
              </div>

              {/* Pricing */}
              <Link
                href="/pricing"
                className="block text-lg py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </Link>

              {/* Resources */}
              <div
                className="flex items-center justify-between text-lg cursor-pointer py-2"
                onClick={() => toggleDropdown("Resources")}
              >
                <span>Resources</span>
                <Image
                  src="/icons/arrows/ArrowSquareUp.svg"
                  alt="Arrow"
                  width={16}
                  height={16}
                  className={`w-4 h-4 transform transition-transform ${
                    openDropdown === "Resources" ? "rotate-180" : ""
                  }`}
                />
              </div>

              {/* Demo */}
              <Link
                href="/demo"
                className="block text-lg py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Demo
              </Link>
            </div>

            {/* Mobile Language Dropdown */}
            <div className="pt-4 border-t border-[#B3A89A]/30">
              <LanguageDropdown />
            </div>
          </div>
        </div>
      )}

      {/* Product Modal */}
      <ProductModal isOpen={isProductModalOpen} triggerRef={productRef} />
    </>
  );
};

export default Navbar;