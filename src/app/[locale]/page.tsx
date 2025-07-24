// import Image from "next/image";

import HeroSection from "@/components/pages/HeroSection";

const locales = ['en', 'ja', 'ar', 'es', 'it', 'fr', 'ko'];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function Home() {
  return (
    <HeroSection/>
  );
}
