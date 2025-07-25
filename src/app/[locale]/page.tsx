// import Image from "next/image";

import HeroSection from "@/components/pages/HeroSection";
import IntelligentConnections from "@/components/pages/IntelligentConnections";

const locales = ['en', 'ja', 'ar', 'es', 'it', 'fr', 'ko'];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <HeroSection/>
      <IntelligentConnections/>
    </main>
  );
}
