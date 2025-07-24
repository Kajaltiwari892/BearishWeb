import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const validLocales = ['en', 'ja', 'ar', 'es', 'it', 'fr', 'ko'];

export function useLocale() {
  const pathname = usePathname();
  const [locale, setLocale] = useState<string>('en');

  useEffect(() => {
    if (pathname) {
      const pathLocale = pathname.split('/')[1];
      // Check if the extracted locale is valid, otherwise default to 'en'
      if (validLocales.includes(pathLocale)) {
        setLocale(pathLocale);
      } else {
        setLocale('en');
      }
    }
  }, [pathname]);

  return locale;
}
