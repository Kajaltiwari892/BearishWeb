// import Navbar from "@/components/layouts/Navbar";
// import "./globals.css";


// export const metadata = {
//   title: "Bearish Website",
//   description: "Workspace app powered by AI",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <head />
//       <body className="h-screen w-full">
       
//         <Navbar />

      
//         {children}
//       </body>
//     </html>
//   );
// }

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
        <Navbar/>
        {children}</body>
    </html>
  );
}