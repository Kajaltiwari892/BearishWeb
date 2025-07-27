
"use client";

import { useState } from "react";
import Image from "next/image";

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

const businessGrowthData: Record<string, BusinessGrowthSection> = {
  "relationship-intelligence": {
    screenshot: "/images/BusinessGrwothSection/RelationshipIntelli.png",
    color: "text-[#7B8C9F]",
    tabColor: "text-[#7B8C9F]",
    cards: [
      {
        icon: iconMap.relationshipIntell,
        title: "Auto-Capture every Touchpoint",
        description:
          "Never update your CRM again, BEBA logs emails, calls, meetings, tasks and interactions automatically",
        color: "text-[#7B8C9F]",
      },
      {
        icon: iconMap.messages,
        title: "Automated follow-up sequences",
        description:
          "BEBA schedules timed outreach based on customer behavior, scores prospects and gives you the script to close",
        color: "text-[#7B8C9F]",
      },
      {
        icon: iconMap.documentGrey,
        title: "Complete interaction history",
        description:
          "Every conversation, document, and project connected to each contact so you never lose anything again",
        color: "text-[#7B8C9F]",
      },
    ],
  },
  "project-orchestration": {
    screenshot: "/images/BusinessGrwothSection/ProjectOrch.png",
    color: "text-[#C96F53]",
    tabColor: "text-[#C96F53]",
    cards: [
      {
        icon: iconMap.intelligentTask,
        title: "Intelligent task creation",
        description:
          "Create your own tasks or let BEBA convert ideas into structured projects with smart task breakdowns",
        color: "text-[#C96F53]",
      },
      {
        icon: iconMap.seamless,
        title: "Seamless collaboration",
        description:
          "Tasks, docs, grids, files, and updates flow effortlessly—keeping every stakeholder perfectly in sync.",
        color: "text-[#C96F53]",
      },
      {
        icon: iconMap.status,
        title: "Automated progress tracking",
        description:
          "Real-time updates across teams without manual status reports, instant notifications & so much more.",
        color: "text-[#C96F53]",
      },
    ],
  },
  "streamline-communications": {
    screenshot: "/images/BusinessGrwothSection/Streamline.png",
    color: "text-[#8368A5]",
    tabColor: "text-[#8368A5]",
    cards: [
      {
        icon: iconMap.messagesPurple,
        title: "Unified communication hub",
        description:
          "All emails, messages, and calls on one interface. From Slack to Teams and WhatsApp and those in between",
        color: "text-[#8368A5]",
      },
      {
        icon: iconMap.contextAware,
        title: "Context-aware conversations",
        description:
          "BEBA automatically links discussions to relevant projects and contacts to ensure the project moves seamlessly forward",
        color: "text-[#8368A5]",
      },
      {
        icon: iconMap.documentPurple,
        title: "Smart message routing",
        description:
          "AI prioritizes urgent communications and suggests optimal response timing to ensure the best results",
        color: "text-[#8368A5]",
      },
    ],
  },
  "growth-analytics": {
    screenshot: "/images/BusinessGrwothSection/GrwothAnalytics.png",
    color: "text-[#6B8E23]",
    tabColor: "text-[#6B8E23]",
    cards: [
      {
        icon: iconMap.crossPlatform,
        title: "Cross-platform insights",
        description:
          "Unified reporting across all business functions and data sources. Manage human resources from end to end.",
        color: "text-[#6B8E23]",
      },
      {
        icon: iconMap.performanceOpti,
        title: "Performance optimization",
        description:
          "Identify what's working and automatically suggest improvements based on real insights",
        color: "text-[#6B8E23]",
      },
      {
        icon: iconMap.surfacedAI,
        title: "Surfaced AI Insights",
        description:
          "BEBA automatically keeps tabs on whats happening delivering insights you didn't even know to look for",
        color: "text-[#6B8E23]",
      },
    ],
  },
};

const tabs = [
  { id: "relationship-intelligence", label: "Relationship Intelligence" },
  { id: "project-orchestration", label: "Project Orchestration" },
  { id: "streamline-communications", label: "Streamline Communications" },
  { id: "growth-analytics", label: "Growth Analytics" },
];

export default function BusinessGrowth() {
  const [activeTab, setActiveTab] = useState<string>(
    "relationship-intelligence"
  );
  const current: BusinessGrowthSection = businessGrowthData[activeTab];

  return (
    <section className="py-16 px-4 bg-[#F8F6F2]">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="mb-10 ml-0 lg:ml-18">
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#23272E] mb-8 text-center sm:text-left leading-tight"
            style={{ fontFamily: "Suez One" }}
          >
            From First Contact
            <br />
            to Business Growth
          </h2>
        </div>

        {/* Main Content - Tabs and Image */}
        <div className="flex flex-col lg:flex-row gap-12 items-start mb-12">
          {/* Left Side - Tabs */}
          <div className="flex-shrink-0 w-full lg:w-80 ml-0 lg:ml-20">
            {/* Mobile/Tablet - Horizontal scrollable tabs */}
            <div className="lg:hidden">
              <div
                className="flex gap-2 overflow-x-auto pb-2"
                style={{ fontFamily: "Averia Serif Libre" }}
              >
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`cursor-pointer flex items-center gap-2 text-sm whitespace-nowrap transition-all duration-200 px-3 py-2 rounded-lg border flex-shrink-0 ${
                      activeTab === tab.id
                        ? `${current.tabColor} opacity-100 bg-white shadow-sm border-current`
                        : "text-[#B3A89A] opacity-60 hover:opacity-80 border-[#B3A89A] bg-white/50"
                    }`}
                  >
                    <img
                      src={tabIconMap[tab.id]}
                      alt="tab icon"
                      className="w-4 h-4 flex-shrink-0"
                    />
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Desktop - Vertical tabs (exactly as original) */}
            <div
              className="hidden lg:flex flex-col gap-4"
              style={{ fontFamily: "Averia Serif Libre" }}
            >
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`cursor-pointer flex items-center gap-3 text-left text-2xl transition-all duration-200 p-3 w-[114%] rounded-lg ${
                    activeTab === tab.id
                      ? `${current.tabColor} opacity-100 shadow-sm`
                      : "text-[#B3A89A] opacity-45 hover:opacity-75"
                  }`}
                  style={{ letterSpacing: "0.01em" }}
                >
                  <img
                    src={tabIconMap[tab.id]}
                    alt="tab icon"
                    className="w-5 h-5 flex-shrink-0"
                  />
                  <span className="whitespace-nowrap">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Right Side - Screenshot */}
          <div className="flex-1 w-full flex justify-center lg:justify-start">
            <div className="overflow-hidden w-full sm:w-auto lg:w-166 lg:h-auto lg:ml-16 lg:-mt-18">
              <Image
                src={current.screenshot}
                alt="Business Growth Screenshot"
                width={600}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* Cards Section - Aligned with tabs and image */}
        <div className="ml-0 lg:ml-20">
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 lg:gap-2">
            {current.cards.map((card: FeatureCard, idx: number) => (
              <div
                key={idx}
                className="flex flex-col w-full sm:w-[48%] md:w-[42%] lg:w-[30%] border border-[#B3A89A] items-start bg-[#F4F1EB] rounded-lg p-3 hover:shadow-lg transition-shadow duration-300 mr-0 sm:mr-2 mb-2"
              >
                {/* Icon and Title in one line */}
                <div className="flex  items-center gap-2.5 mb-2.5">
                  <div className="flex-shrink-0">
                    <img src={card.icon} alt="icon" className="w-7 h-7" />
                  </div>
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
                    className={`${card.color}  w-[95%] text-[1.1rem] leading-relaxed`}
                    style={{ fontFamily: "Averia Serif Libre" }}
                  >
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}