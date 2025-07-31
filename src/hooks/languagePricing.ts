"use client";

import { useState, useEffect } from "react";
import { useLocale } from "@/lib/hooks/useLocale";

interface PriceInfo {
  price: number;
  currency: string;
}

// Map country codes to price & currency
const pricingByCountry: Record<string, PriceInfo> = {
  // USA
  US: { price: 39, currency: "USD" },
  // Arabic-speaking countries
  SA: { price: 146.99, currency: "SAR" },
  AE: { price: 143.99, currency: "AED" },
  QA: { price: 141.99, currency: "QAR" },
  KW: { price: 11.99, currency: "KWD" },
  BH: { price: 14.49, currency: "BHD" },
  OM: { price: 15.0, currency: "OMR" },
  LB: { price: 22, currency: "USD" }, // Lebanon uses USD
  JO: { price: 22, currency: "USD" }, // Jordan uses USD
  EG: { price: 22, currency: "USD" }, // Egypt uses USD
  MA: { price: 22, currency: "USD" }, // Morocco uses USD
  TN: { price: 22, currency: "USD" }, // Tunisia uses USD
  // English-speaking Asia
  IN: { price: 21, currency: "USD" },
  VN: { price: 21, currency: "USD" },
  TH: { price: 21, currency: "USD" },
  PH: { price: 21, currency: "USD" },
  ID: { price: 21, currency: "USD" },
  // East Asia
  JP: { price: 6400, currency: "JPY" },
  KR: { price: 52000, currency: "KRW" },
  // English commonwealth
  SG: { price: 52.99, currency: "SGD" },
  MY: { price: 179.99, currency: "MYR" },
  AU: { price: 59.99, currency: "AUD" },
  NZ: { price: 66.99, currency: "NZD" },
};

const defaultPrice: PriceInfo = { price: 39, currency: "USD" };

export function useLanguagePricing() {
  const [countryCode, setCountryCode] = useState<string | null>(null);
  const [pricing, setPricing] = useState<PriceInfo>(defaultPrice);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const locale = useLocale();

  useEffect(() => {
    async function fetchCountry() {
      try {
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();
        const code = data.country_code;
        setCountryCode(code);
        setPricing(pricingByCountry[code] || defaultPrice);
      } catch {
        setError("Failed to fetch country");
      } finally {
        setIsLoading(false);
      }
    }
    fetchCountry();
  }, []);

  function formatPrice() {
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency: pricing.currency,
      minimumFractionDigits: pricing.price % 1 === 0 ? 0 : 2,
    }).format(pricing.price);
  }

  return { pricing, countryCode, isLoading, error, formatPrice };
}
