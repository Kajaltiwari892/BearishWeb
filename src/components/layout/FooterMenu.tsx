"use client";
import React from "react";
import Image from "next/image";

interface MenuSection {
  title: string;
  items: string[];
}

const FooterMenu: React.FC = () => {
  const menuSections: MenuSection[] = [
    {
      title: "Products",
      items: [
        "Work OS",
        "BEBA AI",
        "Privacy and Security",
        "Intelligent Connections",
        "Connected Communications",
        "Smart Projects & Scheduling",
        "Unified Document Hub",
        "Relationship Intelligence",
        "Business Analytics",
        "Pricing",
      ],
    },
    {
      title: "Solutions",
      items: [
        "Startups",
        "Midsized Companies",
        "Enterprises",
        "Remote & Hybrid",
        "Sales & Revenue Ops",
        "HR & People Teams",
        "Project Management",
        "Workflow Automation",
      ],
    },
    {
      title: "Resources",
      items: [
        "Help Center",
        "Getting Started",
        "Video Tutorials",
        "Demos",
        "Blog",
      ],
    },
    {
      title: "Company",
      items: [
        "About",
        "Careers",
        "Design",
        "Brand",
        "Privacy Policy",
        "Terms of Service",
        "EU DPA",
      ],
    },
  ];

  return (
    <div
      className="w-full min-h-screen bg-cover bg-center relative overflow-x-auto"
      style={{ backgroundImage: "url('/images/others/Frozen Mountains.png')" }}
    >
      {/* Main Content Container */}
      <div className="w-full min-h-full">
        {/* Logo positioned separately */}
        <div className="absolute z-10 left-4 top-4 sm:left-6 sm:top-6 md:left-8 md:top-8 lg:left-10 lg:top-10 xl:left-[2.63rem] xl:top-[2.38rem]">
          <Image
            src="/icons/arrows/BearishLogo.png"
            alt="Company Logo"
            width={32}
            height={32}
            className="object-contain mt-2 sm:mt-3 md:mt-4 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-[48px] lg:h-[48px]"
          />
        </div>

        {/* Menu Columns Container */}
        <div className="pt-20 sm:pt-24 md:pt-28 lg:pt-32 xl:pt-[2.38rem] px-4 sm:px-6 md:px-8 lg:px-10 xl:pl-[calc(2.63rem+11.25rem)] xl:pr-8">
          {/* Mobile: Single column stack */}
          <div className="block sm:hidden space-y-8">
            {menuSections.map((section: MenuSection) => (
              <div key={section.title} className="min-w-max">
                {/* Column Title */}
                <h3
                  className="text-xl font-bold text-[#3C3C3C] whitespace-nowrap mb-4"
                  style={{ fontFamily: "Suez One" }}
                >
                  {section.title}
                </h3>

                {/* Column Items */}
                <ul
                  className="space-y-3 text-[#3C3C3C] text-base font-semibold"
                  style={{ fontFamily: "var(--font-source)" }}
                >
                  {section.items.map((item: string, index: number) => (
                    <li
                      key={index}
                      className="cursor-pointer hover:opacity-80 transition-opacity whitespace-nowrap"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Tablet: 2 columns */}
          <div className="hidden sm:block md:hidden">
            <div className="grid grid-cols-2 gap-8">
              {menuSections.map((section: MenuSection) => (
                <div key={section.title} className="min-w-max">
                  {/* Column Title */}
                  <h3
                    className="text-xl font-bold text-[#3C3C3C] whitespace-nowrap mb-6"
                    style={{ fontFamily: "Suez One" }}
                  >
                    {section.title}
                  </h3>

                  {/* Column Items */}
                  <ul
                    className="space-y-4 text-[#3C3C3C] text-lg font-semibold"
                    style={{ fontFamily: "var(--font-source)" }}
                  >
                    {section.items.map((item: string, index: number) => (
                      <li
                        key={index}
                        className="cursor-pointer hover:opacity-80 transition-opacity whitespace-nowrap"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Medium screens: 4 columns with adjusted spacing */}
          <div className="hidden md:block lg:hidden">
            <div className="grid grid-cols-4 gap-6">
              {menuSections.map((section: MenuSection) => (
                <div key={section.title} className="min-w-max">
                  {/* Column Title */}
                  <h3
                    className="text-xl font-bold text-[#3C3C3C] whitespace-nowrap mb-6"
                    style={{ fontFamily: "Suez One" }}
                  >
                    {section.title}
                  </h3>

                  {/* Column Items */}
                  <ul
                    className="space-y-4 text-[#3C3C3C] text-lg font-semibold"
                    style={{ fontFamily: "var(--font-source)" }}
                  >
                    {section.items.map((item: string, index: number) => (
                      <li
                        key={index}
                        className="cursor-pointer hover:opacity-80 transition-opacity whitespace-nowrap"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Large screens: 4 columns with more spacing */}
          <div className="hidden lg:block xl:hidden">
            <div className="grid grid-cols-4 gap-8">
              {menuSections.map((section: MenuSection) => (
                <div key={section.title} className="min-w-max">
                  {/* Column Title */}
                  <h3
                    className="text-2xl font-bold text-[#3C3C3C] whitespace-nowrap mb-7"
                    style={{ fontFamily: "Suez One" }}
                  >
                    {section.title}
                  </h3>

                  {/* Column Items */}
                  <ul
                    className="space-y-4 text-[#3C3C3C] text-xl font-semibold"
                    style={{ fontFamily: "var(--font-source)" }}
                  >
                    {section.items.map((item: string, index: number) => (
                      <li
                        key={index}
                        className="cursor-pointer hover:opacity-80 transition-opacity whitespace-nowrap"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Extra Large screens and above: Original layout */}
          <div className="hidden xl:block">
            <div className="grid grid-cols-4 gap-12">
              {menuSections.map((section: MenuSection) => (
                <div key={section.title} className="min-w-max mt-4 ml-10">
                  {/* Column Title */}
                  <h3
                    className="text-2xl font-bold text-[#3C3C3C] whitespace-nowrap mb-8"
                    style={{ fontFamily: "Suez One" }}
                  >
                    {section.title}
                  </h3>

                  {/* Column Items */}
                  <ul
                    className="space-y-5 mt-13 text-[#3C3C3C] text-xl font-semibold"
                    style={{ fontFamily: "var(--font-source)" }}
                  >
                    {section.items.map((item: string, index: number) => (
                      <li
                        key={index}
                        className="cursor-pointer hover:opacity-80 transition-opacity whitespace-nowrap"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterMenu;