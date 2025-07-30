"use client";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "@/lib/i18n";

interface CardProps {
  title: string;
  description: string;
  imageSrc?: string;
}

const CompleteWorkflow: React.FC = () => {
  const t = useTranslations();
  const cards: CardProps[] = t?.completeWorkflow?.cards || [];
  const [chunkSize, setChunkSize] = useState(3);
  const groups = chunkArray(cards, chunkSize);
  const [current, setCurrent] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isScrollingRef = useRef(false);

  function chunkArray<T>(arr: T[], size: number): T[][] {
    const chunks: T[][] = [];
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size));
    }
    return chunks;
  }

  const goToSlide = (index: number) => {
    const newIndex = Math.max(0, Math.min(groups.length - 1, index));
    setCurrent(newIndex);
  };

  React.useEffect(() => {
    function updateChunkSize() {
      const width = window.innerWidth;
      if (width < 640) {
        setChunkSize(1); // mobile
      } else if (width < 1024) {
        setChunkSize(2); // tablet
      } else {
        setChunkSize(3); // desktop
      }
    }
    updateChunkSize();
    window.addEventListener("resize", updateChunkSize);
    return () => window.removeEventListener("resize", updateChunkSize);
  }, []);

  // Handle wheel scroll
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      const deltaX = Math.abs(e.deltaX);
      const deltaY = Math.abs(e.deltaY);
      
      // Only handle horizontal scrolling or when horizontal movement is dominant
      // Allow vertical scrolling to pass through normally
      const isHorizontalScroll = deltaX > deltaY || deltaX > 20;
      
      if (!isHorizontalScroll) {
        // This is vertical scrolling, let it pass through normally
        return;
      }
      
      // Prevent default only for horizontal scrolling
      e.preventDefault();
      
      // Debounce rapid scroll events
      if (isScrollingRef.current) return;
      isScrollingRef.current = true;

      // Use deltaX for horizontal scroll, fallback to deltaY if needed
      const delta = e.deltaX !== 0 ? e.deltaX : e.deltaY;
      
      if (Math.abs(delta) > 10) { // Minimum threshold for scroll sensitivity
        if (delta > 0) {
          // Scroll right (next slide)
          goToSlide(current + 1);
        } else {
          // Scroll left (previous slide)
          goToSlide(current - 1);
        }
      }

      // Reset debounce after a short delay
      setTimeout(() => {
        isScrollingRef.current = false;
      }, 150);
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    
    return () => {
      container.removeEventListener('wheel', handleWheel);
    };
  }, [current, groups.length]);

  // Handle touch events for mobile swipe
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let startX = 0;
    let startY = 0;
    let isDragging = false;

    const handleTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
      isDragging = true;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging) return;
      
      const currentX = e.touches[0].clientX;
      const currentY = e.touches[0].clientY;
      const diffX = startX - currentX;
      const diffY = startY - currentY;

      // Only handle horizontal swipes (ignore vertical scrolling)
      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
        e.preventDefault();
        
        if (diffX > 0) {
          // Swipe left (next slide)
          goToSlide(current + 1);
        } else {
          // Swipe right (previous slide)
          goToSlide(current - 1);
        }
        
        isDragging = false;
      }
    };

    const handleTouchEnd = () => {
      isDragging = false;
    };

    container.addEventListener('touchstart', handleTouchStart, { passive: true });
    container.addEventListener('touchmove', handleTouchMove, { passive: false });
    container.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('touchend', handleTouchEnd);
    };
  }, [current, groups.length]);

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
          className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-12 text-[#3C3C3C] text-left leading-normal"
          style={{ fontFamily: "Suez One" }}
        >
          {t?.completeWorkflow?.sectionTitle
            .split("\n")
            .map((line: string, index: number, arr: string[]) => (
              <React.Fragment key={index}>
                {line}
                {index < arr.length - 1 && <br />}
              </React.Fragment>
            ))}
        </h2>

        {/* Slider container */}
        <div className="relative" ref={containerRef}>
          {/* Cards viewport */}
          <div className="overflow-hidden cursor-grab active:cursor-grabbing">
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

          {/* Pagination dots */}
          <div className="flex justify-center mt-6 gap-2">
            {groups.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`
                  w-2 h-2 rounded-full transition-all duration-200
                  ${current === index 
                    ? 'bg-white scale-110' 
                    : 'bg-white/40 hover:bg-white/60'
                  }
                `}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompleteWorkflow;