"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface CardProps {
  title: string;
  description: string;
  imageSrc?: string;
}

const cards: CardProps[] = [
  {
    title: "Client Project Delivery",
    description:
      "For agencies, consultancies, and professional services. Manage every client from first contact to final payment in one unified workspace.",
  },
  {
    title: "Product Development",
    description:
      "For tech companies and innovative startups. Coordinate your entire team from planning to successful product launch, customer support & beyond.",
    imageSrc: "/images/CompleteWorkflow/ProductDevelopement.png",
  },
  {
    title: "Sales & Customer Success",
    description:
      "For businesses that want to grow revenue. Turn leads into loyal customers with seamless sales and relationship management.",
  },
  {
    title: "Remote Team Operations",
    description:
      "For distributed teams and global organizations. Keep teams aligned and productive across time zones and projects.",
  },
  {
    title: "Marketing & Content",
    description:
      "For marketing teams, content creators, and growth-focused companies. Plan campaigns, create content, manage socials, and track performance all in one place",
  },
  {
    title: "Operations & Compliance",
    description:
      "For finance, HR, and operations teams. Streamline internal processes, manage compliance, and keep  operations running smoothly.",
  },
];

function chunkArray<T>(arr: T[], size: number): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}

const CompleteWorkflow: React.FC = () => {
  const groups = chunkArray(cards, 3);
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(groups.length - 1, c + 1));

  const slideVariants = {
    animate: (index: number) => ({ x: `-${index * 100}%` }),
  };

  return (
    <section className="relative w-full py-16 px-4 sm:px-6 lg:px-8">
      {/* Background + overlay */}
      <Image
        src="/images/CompleteWorkflow/workflowBackgroundImg.png"
        alt="Workflow Background"
        fill
        className="absolute inset-0 object-cover z-0"
      />
      <div className="absolute inset-0 bg-black opacity-20 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto text-[#2B2B2B]">
        <h2
          className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-12 text-[#3C3C3C] text-left"
          style={{ fontFamily: "Suez One" }}
        >
          Solutions: Complete Workflows,
          <br /> Not Scattered Tools
        </h2>

        {/* Slider container */}
        <div className="relative">
          {/* Cards viewport */}
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              custom={current}
              variants={slideVariants}
              animate="animate"
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
            >
              {groups.map((group, gi) => (
                <div
                  key={gi}
                  className="flex-shrink-0 w-full flex justify-center gap-6"
                >
                  {group.map((card, idx) => (
                    <div
                      key={idx}
                      className="
                        bg-[#F4F1EB]/70 rounded-xl p-6 text-left shadow-md
                        transition-transform duration-200 hover:scale-95
                        border-2 border-[#B3A89A]
                        flex-1
                      "
                    >
                      <h3
                        className="text-[1.5rem] lg:text-[1.75rem] text-[#3C3C3C] mb-3"
                        style={{ fontFamily: "Suez One" }}
                      >
                        {card.title}
                      </h3>
                      <p
                        className="text-base lg:text-xl text-[#3C3C3C] mb-4"
                        style={{ fontFamily: "var(--font-source)" }}
                      >
                        {card.description}
                      </p>
                      {card.imageSrc && (
                        <div className="w-full h-auto">
                          <Image
                            src={card.imageSrc}
                            alt={card.title}
                            width={400}
                            height={200}
                            className="rounded-md w-full object-contain"
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Prev/Next buttons */}
          <button
            onClick={prev}
            disabled={current === 0}
            className="absolute left-[-30] cursor-pointer top-1/2 -translate-y-1/2 bg-white bg-opacity-80 p-2 rounded-full shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
          >
            ‹
          </button>
          <button
            onClick={next}
            disabled={current === groups.length - 1}
            className="absolute right-[-30] cursor-pointer top-1/2 -translate-y-1/2 bg-white bg-opacity-80 p-2 rounded-full shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
          >
            ›
          </button>
        </div>

        {/* Navigation hint */}
        <div className="text-center mt-4">
          <p
            className="text-sm text-[white]/60"
            style={{ fontFamily: "var(--font-source)" }}
          >
            Use the arrows to see more solutions →
          </p>
        </div>
      </div>
    </section>
  );
};

export default CompleteWorkflow;
