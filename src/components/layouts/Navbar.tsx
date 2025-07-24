"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ArrowSquareUp from "@/icons/arrows/ArrowSquareUp.svg";
import BearishLogo from "@/assets/images/BearishLogo.png";
import LanguageDropdown from "@/components/LanguageDropdown";

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className = "" }) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (label: string) => {
    setOpenDropdown((prev) => (prev === label ? null : label));
  };

  return (
    <nav
      className={`sticky  z-[9998] top-0  overflow-visible flex items-center justify-between ${className}`}
    >
      {/* Left Side */}
      <div className="flex items-center m-[20px]">
        {/* Logo */}
        <Link href="/" className="flex items-center mr-[24px]">
          <Image src={BearishLogo} alt="Bearish Logo" width={43} height={43} />
        </Link>

        {/* Divider */}
        <div className="bg-[#B3A89A] w-[2px] h-[24px]" />

        {/* Nav Items */}
        <div className="hidden md:flex items-center text-[#F4F1EB] ml-6 space-x-8">
          {/* Product */}
          <div
            className="flex items-center text-[20px] font-suez cursor-pointer"
            onClick={() => toggleDropdown("Product")}
          >
            <span>Product</span>
            <ArrowSquareUp
              className={`w-4 h-4 ml-1 fill-current transform transition-transform ${
                openDropdown === "Product" ? "rotate-180" : ""
              }`}
            />
          </div>

          {/* Solutions */}
          <div
            className="flex items-center text-[20px] font-suez cursor-pointer"
            onClick={() => toggleDropdown("Solutions")}
          >
            <span>Solutions</span>
            <ArrowSquareUp
              className={`w-4 h-4 ml-1 fill-current transform transition-transform ${
                openDropdown === "Solutions" ? "rotate-180" : ""
              }`}
            />
          </div>

          {/* Pricing */}
          <Link
            href="/pricing"
            className="text-[var(--bearish-colors-warm-off-white-light)] text-[20px] font-suez leading-normal"
          >
            Pricing
          </Link>

          {/* Resources */}
          <div
            className="flex items-center text-[20px] font-suez cursor-pointer"
            onClick={() => toggleDropdown("Resources")}
          >
            <span>Resources</span>
            <ArrowSquareUp
              className={`w-4 h-4 ml-1 fill-current transform transition-transform ${
                openDropdown === "Resources" ? "rotate-180" : ""
              }`}
            />
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center text-[#F4F1EB] font-suez text-[20px] font-normal mr-[20px]">
        <Link
          href="/demo"
          className="w-[57px] h-[26px] hover:text-gray-200 transition-colors mr-[20px]"
        >
          Demo
        </Link>

        {/* Language Dropdown */}
        <div className="mr-[12px] ">
          <LanguageDropdown />
        </div>

        {/* Button */}
        <button className="w-[130px] h-[28px] bg-[#6B8E23] hover:bg-[#9bb26c] rounded-md border border-[#9D9388] text-[#F0ECE7] text-[14px] font-bold leading-[20px] text-center font-averia transition-colors duration-200 cursor-pointer">
          Start Saving Now
        </button>
      </div>

      {/* Mobile menu icon */}
      <div className="md:hidden">
        <button className="text-white hover:text-gray-200 transition-colors">
          <ArrowSquareUp className="w-6 h-6 fill-current" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;