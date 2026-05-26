import type { Metadata } from "next";
import { Inter, Teko } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/navbar/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const teko = Teko({
  subsets: ["latin"],
  weight: [
    "400",
    "500",
    "600",
    "700",
  ],
  variable: "--font-anime",
});

export const metadata: Metadata =
  {
    title: "Q-Asian Fest",
    description:
      "Evento de anime y cultura asiática",
  };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`
          ${inter.variable}
          ${teko.variable}
          bg-[#050816]
          text-white
          overflow-x-hidden
          font-[family-name:var(--font-body)]
        `}
      >
        <Navbar />

        {/* spacer navbar */}
        <div className="h-24" />

        {children}
      </body>
    </html>
  );
}