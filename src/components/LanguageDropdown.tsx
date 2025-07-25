"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useLocale } from "@/lib/hooks/useLocale";

// Regular image imports
const EnFlag = "/icons/flags/US.svg";
const JaFlag = "/icons/flags/JP.svg";
const ArFlag = "/icons/flags/JO.svg"; // Jordan for Arabic
const EsFlag = "/icons/flags/ES.svg"; // Spain for Spanish
const ItFlag = "/icons/flags/IT.svg"; // Italy for Italian
const FrFlag = "/icons/flags/FR.svg"; // France for French
const KoFlag = "/icons/flags/KR.svg"; // South Korea for Korean
const ArrowSquareUp = "/icons/arrows/ArrowSquareUp.svg";
const TickCircle = "/icons/arrows/tick-circle.svg";

// Flag mapping function
const getFlagForLanguage = (langCode: string) => {
  switch (langCode) {
    case "en": return EnFlag;
    case "ja": return JaFlag;
    case "ar": return ArFlag;
    case "es": return EsFlag;
    case "it": return ItFlag;
    case "fr": return FrFlag;
    case "ko": return KoFlag;
    default: return EnFlag;
  }
};

interface Lang {
  code: string;
  label: string;
}

const LANGUAGES: Lang[] = [
  { code: "en", label: "English" },
  { code: "ja", label: "Japanese" },
  { code: "ar", label: "Arabic" },
  { code: "es", label: "Spanish" },
  { code: "it", label: "Italian" },
  { code: "fr", label: "French" },
  { code: "ko", label: "Korean" },
];

export default function LanguageDropdown() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentLocale = useLocale();
  const [selected, setSelected] = useState<Lang>(
    LANGUAGES.find(lang => lang.code === currentLocale) || LANGUAGES[0]
  );

  // Update selected state when currentLocale changes
  useEffect(() => {
    const newSelected = LANGUAGES.find(lang => lang.code === currentLocale) || LANGUAGES[0];
    setSelected(newSelected);
  }, [currentLocale]);
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
        className="flex items-center gap-1 text-[#F4F1EB] text-[20px] "
        style={{ fontFamily: "Suez one" }}
      >
        <Image
          src={getFlagForLanguage(selected.code)}
          alt={selected.label}
          width={15}
          height={15}
          className="w-[15px] h-[15px]"
        />
        <span className="">{selected.label.slice(0, 2).toUpperCase()}</span>
        <Image
          src={ArrowSquareUp}
          alt="Dropdown arrow"
          width={16}
          height={16}
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
                // Remove any existing locale prefix and get the clean path
                let path = pathname;
                const locales = ["en", "ja", "ar", "es", "it", "fr", "ko"];
                for (const locale of locales) {
                  if (path.startsWith(`/${locale}`)) {
                    path = path.substring(locale.length + 1) || "/";
                    break;
                  }
                }
                // If path is just '/', don't add it to avoid double slash
                const newPath =
                  path === "/" ? `/${lang.code}` : `/${lang.code}${path}`;
                router.push(newPath);
              }}
              className="flex items-center  text-[#3C3C3C] h-[44px] px-3 cursor-pointer hover:bg-[#F4F1EB] "
              style={{
                fontStyle: "normal",
                fontFamily: "Inria Serif",
                fontSize: "16px",
                fontWeight: "400px",
              }}
            >
              <Image
                src={getFlagForLanguage(lang.code)}
                alt={lang.label}
                width={20}
                height={20}
                className="w-[20px] h-[20px] mr-2"
              />
              <span className="flex-1 ">{lang.label}</span>
              {selected.code === lang.code && (
                <Image
                  src={TickCircle}
                  alt="Selected"
                  width={15}
                  height={15}
                  className="w-[15px] h-[15px]"
                />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
