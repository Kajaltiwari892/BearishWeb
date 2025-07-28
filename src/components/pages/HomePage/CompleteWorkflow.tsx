
"use client";

import Image from "next/image";
import React from "react";

const CompleteWorkflow: React.FC = () => {
  return (
    <section className="relative w-full py-16 px-4 sm:px-6 lg:px-8">
      {/* Background Image */}
      <Image
        src="/images/Completeworkflow/workflowBackgroundImg.png"
        alt="Workflow Background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-20 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto text-[#2B2B2B]">
        <h2
          className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-12 text-[#3C3C3C] text-left"
          style={{ fontFamily: "Suez One" }}
        >
          Solutions: Complete Workflows,
          <br />
          Not Scattered Tools
        </h2>

        {/* Cards Container */}
        <div className="flex flex-wrap justify-between gap-6">
          {/* Card 1 */}
          <div className="bg-[#F4F1EB]/65 rounded-xl p-6 text-left shadow-md w-full sm:w-[48%] lg:w-[32%]">
            <h3
              className="text-[1.5rem] sm:text-[1.75rem] text-[#3C3C3C] mb-3"
              style={{ fontFamily: "Suez One" }}
            >
              Client Project Delivery
            </h3>
            <p className="text-base sm:text-xl text-[#555]">
              For agencies, consultancies, and professional services. Manage
              every client from first contact to final payment in one unified
              workspace.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#F4F1EB]/65 rounded-xl p-6 text-left shadow-md w-full sm:w-[48%] lg:w-[32%]">
            <h3
              className="text-[1.5rem] sm:text-[1.75rem] text-[#3C3C3C] mb-3"
              style={{ fontFamily: "Suez One" }}
            >
              Product Development
            </h3>
            <p className="text-base sm:text-xl text-[#555] mb-4">
              For tech companies and innovative startups. Coordinate your entire
              team from planning to successful product launch, customer support
              & beyond.
            </p>
            <div className="w-full h-auto">
              <Image
                src="/images/Completeworkflow/ProductDevelopement.png"
                alt="Product Development"
                width={400}
                height={200}
                className="rounded-md w-full object-contain"
              />
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#F4F1EB]/65 rounded-xl p-6 text-left shadow-md w-full sm:w-[48%] lg:w-[32%]">
            <h3
              className="text-[1.5rem] sm:text-[1.75rem] text-[#3C3C3C] mb-3"
              style={{ fontFamily: "Suez One" }}
            >
              Sales & Customer Success
            </h3>
            <p className="text-base sm:text-xl text-[#555]">
              For businesses that want to grow revenue. Turn leads into loyal
              customers with seamless sales and relationship management.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompleteWorkflow;
