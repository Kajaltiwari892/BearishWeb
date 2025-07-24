import { useEffect, useState } from 'react';
import { useLocale } from './hooks/useLocale';

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
