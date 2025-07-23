"use client";

import React, { useState, useRef, useEffect } from "react";
import ArrowSquareUp from "@/icons/arrows/ArrowSquareUp.svg";
import TickCircle from "@/icons/arrows/tick-circle.svg";

// SVGR‑imported flags
import EnFlag from "@/icons/flags/ES.svg";
import JaFlag from "@/icons/flags/JP.svg";
import ArFlag from "@/icons/flags/JO.svg";
import EsFlag from "@/icons/flags/ES.svg";
import ItFlag from "@/icons/flags/IT.svg";
import FrFlag from "@/icons/flags/FR.svg";
import KoFlag from "@/icons/flags/KR.svg";

interface Lang {
  code: string;
  label: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

const LANGUAGES: Lang[] = [
  { code: "en", label: "English", Icon: EnFlag },
  { code: "ja", label: "Japanese", Icon: JaFlag },
  { code: "ar", label: "Arabic", Icon: ArFlag },
  { code: "es", label: "Spanish", Icon: EsFlag },
  { code: "it", label: "Italian", Icon: ItFlag },
  { code: "fr", label: "French", Icon: FrFlag },
  { code: "ko", label: "Korean", Icon: KoFlag },
];

export default function LanguageDropdown() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Lang>(LANGUAGES[0]);
  const ref = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <div className="relative inline-block  text-left" ref={ref}>
      {/* Toggle button */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-1 text-[#F4F1EB] text-[20px] font-suez"
      >
        <selected.Icon className="w-[15px]  h-[15px] " />
        <span className="">{selected.label.slice(0, 2).toUpperCase()}</span>
        <ArrowSquareUp
          className={`w-4 h-4 cursor-pointer fill-current transform transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown panel */}
      {open && (
        <div className=" border border-[#B3A89A] absolute right-0 mt-1 w-[174px] h-[316px] bg-[#F8F7F4] rounded-md shadow-lg overflow-y-auto z-[9999]">
          {LANGUAGES.map((lang) => (
            <div
              key={lang.code}
              onClick={() => {
                setSelected(lang);
                setOpen(false);
              }}
              className="flex items-center  text-[#3C3C3C] h-[44px] px-3 cursor-pointer hover:bg-[#F4F1EB] "
              style={{ fontStyle: "normal", fontFamily: "Inria Serif" ,fontSize:"16px" , fontWeight:"400px"}}
            >
              <lang.Icon className="w-[20px] h-[20px] mr-2" />
              <span className="flex-1">{lang.label}</span>
              {selected.code === lang.code && (
                <TickCircle className="w-[20px] h-[20px] fill-current text-[#ffffff90]" />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
