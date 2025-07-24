import { redirect } from 'next/navigation';
import { headers } from 'next/headers';

export default async function RootPage() {
  // Get the preferred locale from Accept-Language header
  const headersList = await headers();
  const acceptLanguage = headersList.get('accept-language');
  
  const locales = ['en', 'ja', 'ar', 'es', 'it', 'fr', 'ko'];
  let preferredLocale = 'en'; // default
  
  if (acceptLanguage) {
    const preferred = acceptLanguage
      .split(',')
      .map((lang) => lang.split(';')[0].trim())
      .find((lang) => locales.includes(lang.split('-')[0]));
    
    if (preferred) {
      preferredLocale = preferred.split('-')[0];
    }
  }
  
  redirect(`/${preferredLocale}`);
}
