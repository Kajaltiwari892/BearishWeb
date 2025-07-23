import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/layouts/Navbar";

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
      <body>
        {children}
      </body>
    </html>
  );
}
