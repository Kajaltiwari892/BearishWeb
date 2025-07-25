import { notFound } from 'next/navigation';
import {
  Suez_One,
  Source_Serif_4,
  Averia_Serif_Libre,
  Averia_Sans_Libre,
  Syne,
  Ubuntu_Condensed,
  Titan_One,
  Trykker,
  Tilt_Warp,
} from "next/font/google";

// Load fonts as CSS variables
const suez = Suez_One({
  subsets: ["latin"],
  variable: "--font-suez",
  weight: "400",
});
const source = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source",
  weight: "400",
});
const averia = Averia_Serif_Libre({
  subsets: ["latin"],
  variable: "--font-averia",
  weight: "400",
});
const averiaSans = Averia_Sans_Libre({
  subsets: ["latin"],
  variable: "--font-averiaSans",
  weight: "400",
});  ;
const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: "400",
});
const ubuntu = Ubuntu_Condensed({
  subsets: ["latin"],
  variable: "--font-ubuntu",
  weight: "400",
});
const titan = Titan_One({
  subsets: ["latin"],
  variable: "--font-titan",
  weight: "400",
});
const trykker = Trykker({
  subsets: ["latin"],
  variable: "--font-trykker",
  weight: "400",
});
const tilt = Tilt_Warp({
  subsets: ["latin"],
  variable: "--font-tilt",
  weight: "400",
});

const locales = ['en', 'ja', 'ar', 'es', 'it', 'fr', 'ko'];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Await params before using its properties
  const { locale } = await params;
  
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body
        className={`${suez.variable} ${source.variable} ${averia.variable} ${syne.variable} ${ubuntu.variable} ${titan.variable} ${trykker.variable} ${tilt.variable} ${averiaSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
