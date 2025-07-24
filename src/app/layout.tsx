import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

// ✅ Import Google Fonts
import {
  Suez_One,
  Source_Serif_4,
  Averia_Serif_Libre,
  Syne,
  Ubuntu_Condensed,
  Titan_One,
  Trykker,
  Tilt_Warp,
} from "next/font/google";

// ✅ Load fonts as CSS variables
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

export const metadata: Metadata = {
  title: "Bearish Website",
  description: "Workspace app powered by AI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`
          ${suez.variable}
          ${source.variable}
          ${averia.variable}
          ${syne.variable}
          ${ubuntu.variable}
          ${titan.variable}
          ${trykker.variable}
          ${tilt.variable}
          font-sans antialiased
        `}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
