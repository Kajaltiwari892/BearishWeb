"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useTranslations } from "@/lib/i18n";

interface FeatureCard {
  icon: string;
  title: string;
  description: string;
  color: string;
}

interface BusinessGrowthSection {
  screenshot: string;
  color: string;
  tabColor: string;
  cards: FeatureCard[];
}

const iconMap = {
  // Relationship Intelligence
  relationshipIntell: "/icons/BusinessGrowthIcons/finger-cricle-grey.svg",
  messages: "/icons/BusinessGrowthIcons/automatedFlow.svg",
  documentGrey: "/icons/BusinessGrowthIcons/document-grey.svg",
  // Project Orchestration
  intelligentTask: "/icons/BusinessGrowthIcons/IntelligentTask.svg",
  seamless: "/icons/BusinessGrowthIcons/Seamless.svg",
  status: "/icons/BusinessGrowthIcons/OrangeBlock.svg",
  // Streamline Communications
  messagesPurple: "/icons/BusinessGrowthIcons/finger-cricle-purple.svg",
  contextAware: "/icons/BusinessGrowthIcons/contextAware.svg",
  documentPurple: "/icons/BusinessGrowthIcons/document-purple.svg",
  // Growth Analytics
  crossPlatform: "/icons/BusinessGrowthIcons/Cross-platform.svg",
  performanceOpti: "/icons/BusinessGrowthIcons/performanceOpti.svg",
  surfacedAI: "/icons/BusinessGrowthIcons/surfacedAI.svg",
};

// Tab icons
const tabIconMap: Record<string, string> = {
  "relationship-intelligence":
    "/icons/BusinessGrowthIcons/relationshipIntell.svg",
  "project-orchestration": "/icons/BusinessGrowthIcons/status.svg",
  "streamline-communications": "/icons/BusinessGrowthIcons/messages-3.svg",
  "growth-analytics": "/icons/BusinessGrowthIcons/trend-up.svg",
};

// Function to generate business growth data with translations
const getBusinessGrowthData = (translations: any): Record<string, BusinessGrowthSection> => {
  const iconMaps = {
    "relationship-intelligence": [iconMap.relationshipIntell, iconMap.messages, iconMap.documentGrey],
    "project-orchestration": [iconMap.intelligentTask, iconMap.seamless, iconMap.status],
    "streamline-communications": [iconMap.messagesPurple, iconMap.contextAware, iconMap.documentPurple],
    "growth-analytics": [iconMap.crossPlatform, iconMap.performanceOpti, iconMap.surfacedAI],
  };

  const screenshots = {
    "relationship-intelligence": "/images/BusinessGrwothSection/RelationshipIntelli.png",
    "project-orchestration": "/images/BusinessGrwothSection/ProjectOrch.png",
    "streamline-communications": "/images/BusinessGrwothSection/Streamline.png",
    "growth-analytics": "/images/BusinessGrwothSection/GrwothAnalytics.png",
  };

  const colors = {
    "relationship-intelligence": "text-[#7B8C9F]",
    "project-orchestration": "text-[#C96F53]",
    "streamline-communications": "text-[#8368A5]",
    "growth-analytics": "text-[#6B8E23]",
  };

  const data: Record<string, BusinessGrowthSection> = {};

  Object.keys(translations.businessGrowth.cards).forEach((key) => {
    data[key] = {
      screenshot: screenshots[key as keyof typeof screenshots],
      color: colors[key as keyof typeof colors],
      tabColor: colors[key as keyof typeof colors],
      cards: translations.businessGrowth.cards[key].map((card: any, index: number) => ({
        icon: iconMaps[key as keyof typeof iconMaps][index],
        title: card.title,
        description: card.description,
        color: colors[key as keyof typeof colors],
      })),
    };
  });

  return data;
};

// Function to generate tabs with translations
const getTabs = (translations: any) => [
  { id: "relationship-intelligence", label: translations.businessGrowth.tabs[0] },
  { id: "project-orchestration", label: translations.businessGrowth.tabs[1] },
  { id: "streamline-communications", label: translations.businessGrowth.tabs[2] },
  { id: "growth-analytics", label: translations.businessGrowth.tabs[3] },
];

const imageVariants: Variants = {
  initial: {
    opacity: 0,
    x: 50,
    scale: 0.95,
  },
  animate: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
  exit: {
    opacity: 0,
    x: -30,
    scale: 0.98,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const cardContainerVariants: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.95,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export default function BusinessGrowth() {
  const [activeTab, setActiveTab] = useState<string>(
    "relationship-intelligence"
  );
  
  const translations = useTranslations();
  if (!translations) return null;

  // Generate dynamic data and tabs from translations
  const businessGrowthData = getBusinessGrowthData(translations);
  const tabs = getTabs(translations);
  const current: BusinessGrowthSection = businessGrowthData[activeTab];

  const handleTabClick = (tabId: string) => {
    if (tabId !== activeTab) {
      setActiveTab(tabId);
    }
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-[#F4F1EB] to-[#E4DBC8]">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.div
          className="mb-10 ml-0 lg:ml-18"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#23272E] mb-8 text-center sm:text-left leading-tight"
            style={{ fontFamily: "Suez One" }}
          >
            {translations.businessGrowth.sectionTitle.split('\n').map((line, index) => (
              <span key={index}>
                {line}
                {index < translations.businessGrowth.sectionTitle.split('\n').length - 1 && <br />}
              </span>
            ))}
          </h2>
        </motion.div>

        {/* Main Content - Tabs and Image */}
        <div className="flex flex-col lg:flex-row gap-12 items-start mb-12">
          {/* Left Side - Tabs */}
          <motion.div
            className="flex-shrink-0 w-full lg:w-80 ml-0 lg:ml-20"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Mobile/Tablet - Horizontal scrollable tabs */}
            <div className="lg:hidden">
              <div
                className="flex gap-2 overflow-x-auto pb-2"
                style={{ fontFamily: "Averia Serif Libre" }}
              >
                {tabs.map((tab, index) => (
                  <motion.button
                    key={tab.id}
                    onClick={() => handleTabClick(tab.id)}
                    className={`cursor-pointer flex items-center gap-2 text-sm whitespace-nowrap transition-all duration-200 px-3 py-2 rounded-lg border flex-shrink-0 ${
                      activeTab === tab.id
                        ? `${current.tabColor} opacity-100 bg-white shadow-sm border-current`
                        : "text-[#B3A89A] opacity-60 hover:opacity-80 border-[#B3A89A] bg-white/50"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <motion.img
                      src={tabIconMap[tab.id]}
                      alt="tab icon"
                      className="w-4 h-4 flex-shrink-0"
                      animate={
                        activeTab === tab.id
                          ? {
                              scale: [1, 1.1, 1],
                              transition: {
                                duration: 0.3,
                                ease: "easeInOut",
                              },
                            }
                          : { scale: 1 }
                      }
                    />
                    <span>{tab.label}</span>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Desktop - Vertical tabs */}
            <div
              className="hidden lg:flex flex-col gap-4"
              style={{ fontFamily: "Averia Serif Libre" }}
            >
              {tabs.map((tab, index) => (
                <motion.button
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id)}
                  className={`cursor-pointer flex items-center gap-3 text-left text-2xl transition-all duration-200 p-3 w-[114%] rounded-lg ${
                    activeTab === tab.id
                      ? `${current.tabColor} opacity-100 shadow-sm`
                      : "text-[#B3A89A] opacity-45 hover:opacity-75"
                  }`}
                  style={{ letterSpacing: "0.01em" }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <motion.img
                    src={tabIconMap[tab.id]}
                    alt="tab icon"
                    className="w-5 h-5 flex-shrink-0"
                    animate={
                      activeTab === tab.id
                        ? {
                            scale: [1, 1.1, 1],
                            transition: {
                              duration: 0.3,
                              ease: "easeInOut",
                            },
                          }
                        : { scale: 1 }
                    }
                  />
                  <span className="whitespace-nowrap">{tab.label}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Screenshot with AnimatePresence */}
          <div className="flex-1 w-full flex justify-center lg:justify-start">
            <div className="overflow-hidden w-full sm:w-auto lg:w-179 lg:h-auto  lg:ml-16 lg:-mt-30">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  variants={imageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <Image
                    src={current.screenshot}
                    alt="Business Growth Screenshot"
                    width={600}
                    height={600}
                    className="w-full  h-auto object-cover"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Cards Section with staggered animation */}
        <motion.div className="ml-0 lg:ml-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              className="flex flex-col sm:flex-row sm:flex-wrap gap-2 lg:gap-2"
              variants={cardContainerVariants}
              initial="initial"
              animate="animate"
            >
              {current.cards.map((card: FeatureCard, idx: number) => (
                <motion.div
                  key={`${activeTab}-${idx}`}
                  className="flex flex-col w-full sm:w-[48%] md:w-[42%] lg:w-[31%] border border-[#B3A89A] items-start bg-[#F4F1EB] rounded-lg p-3 hover:shadow-lg transition-shadow duration-300 mr-0 sm:mr-2 mb-2"
                  variants={cardVariants}
                  whileHover={{
                    scale: 1.02,
                    y: -2,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Icon and Title in one line */}
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <motion.div
                      className="flex-shrink-0"
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.3 }}
                    >
                      <img src={card.icon} alt="icon" className="w-7 h-7" />
                    </motion.div>
                    <h3
                      className={`text-[1.2rem] ${card.color}`}
                      style={{ fontFamily: "Suez One" }}
                    >
                      {card.title}
                    </h3>
                  </div>
                  {/* Description below */}
                  <div>
                    <p
                      className={`${card.color} w-[95%] text-[1.1rem] leading-relaxed`}
                      style={{ fontFamily: "Averia Serif Libre" }}
                    >
                      {card.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
