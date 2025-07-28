// import Image from "next/image";

import HeroSection from "@/components/pages/HomePage/HeroSection";
import IntelligentConnections from "@/components/pages/HomePage/IntelligentConnections";
import IntelligentlyConnect from "@/components/pages/HomePage/IntelligentlyConnect";
import BusinessGrowth from "@/components/pages/HomePage/BusinessGrowth";
import UniversalSearch from "@/components/pages/HomePage/UniversalSearch";
import CompleteWorkflow from "@/components/pages/HomePage/CompleteWorkflow";

const locales = ['en', 'ja', 'ar', 'es', 'it', 'fr', 'ko'];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <HeroSection />
      <IntelligentConnections />
      <IntelligentlyConnect />
      <BusinessGrowth />
      <UniversalSearch />
      <CompleteWorkflow />
      
    </main>
  );
}
