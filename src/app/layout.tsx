import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bearish",
  description: "Workspace app powered by AI",
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
