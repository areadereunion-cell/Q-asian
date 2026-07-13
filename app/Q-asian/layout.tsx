import type { Metadata } from "next";
import { Inter, Teko } from "next/font/google";



import Navbar from "@/components/navbar/Navbar";
import Footer from "@/app/Q-asian/informacion/components/footer/footer";

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

export const metadata: Metadata = {
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
          min-h-screen
          bg-[#050816]
          text-white
          overflow-x-hidden
          font-[family-name:var(--font-body)]
          flex
          flex-col
        `}
      >
        {/* NAVBAR GLOBAL */}
        <Navbar />

        {/* ESPACIO NAVBAR */}
        <div className="h-24 shrink-0" />

        {/* CONTENIDO */}
        <main className="flex-1 w-full">
          {children}
        </main>

        {/* FOOTER GLOBAL */}
        <Footer />
      </body>
    </html>
  );
}