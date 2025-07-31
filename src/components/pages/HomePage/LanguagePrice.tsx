"use client";
import React from "react";
import { useLanguagePricing } from "@/hooks/languagePricing";

interface LanguagePriceProps {
  showCurrency?: boolean;
  showCountry?: boolean;
}

export default function LanguagePrice({
  showCurrency = false,
  showCountry = false,
}: LanguagePriceProps) {
  const { pricing, countryCode, isLoading, error, formatPrice } =
    useLanguagePricing();

  if (isLoading) {
    return <span>Loading price...</span>;
  }

  if (error) {
    return <span className="text-red-500">Price unavailable</span>;
  }

  return (
    <span>
      {formatPrice()}
      {showCurrency && <span className="ml-1">{pricing.currency}</span>}
      {showCountry && countryCode && (
        <span className="ml-2">({countryCode})</span>
      )}
    </span>
  );
}
