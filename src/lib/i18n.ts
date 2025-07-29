 import { useEffect, useState } from 'react';
import { useLocale } from './hooks/useLocale';

interface SectionText {
  sectionTitle: string;
  SecSectionTitle?: string;
  description: string;
}
interface CardItem{
  title: string;
  description: string;
  imageSrc?: string;
}
interface IntelligentConnections extends SectionText {
  cards: CardItem[];
}
type BebaSection = SectionText;
interface IntelligentlyConnectSection extends SectionText {
  cards: CardItem[];
}
interface BusinessGrowthSection {
  sectionTitle: string;
  tabs: string[];
  cards: Record<string, CardItem[]>;
}
interface Feature {
  title: string;
  description: string;
}

interface PrivateFoundation {
  heading: string;
  paragraph: string;
  features: Feature[];
  iconsAlt: string[];
  footerNote: string;
  footerLinks: string[];
}

interface CompleteWorkflowSection {
  sectionTitle: string;
  cards: CardItem[];
  navigationHint: string;
  prevButton: string;
  nextButton: string;
}

interface Translation {
  hero: {
    title: string;
    description: string;
    cta: string;
    trusted: string;
    trustedDescription: string;
  };
  nav: {
    product: string;
    solutions: string;
    pricing: string;
    about: string;
    contact: string;
    login: string;
    signup: string;
    demo: string;
    cta: string;
    resources: string;
  };
  intelligentConnections: IntelligentConnections;
  bebaSection: BebaSection;
  intelligentlyConnect: IntelligentlyConnectSection;
  businessGrowth: BusinessGrowthSection;
  universalSearch: SectionText;
  privateFoundation: PrivateFoundation;
  completeWorkflow: CompleteWorkflowSection;
}

export function useTranslations() {
  const [translations, setTranslations] = useState<Translation | null>(null);
  const locale = useLocale();

  useEffect(() => {
    const loadTranslations = async () => {
      try {
        const response = await import(`../locales/${locale}.json`);
        setTranslations(response.default);
      } catch (error) {
        console.error('Failed to load translations:', error);
      }
    };

    loadTranslations();
  }, [locale]);

  return translations;
}
