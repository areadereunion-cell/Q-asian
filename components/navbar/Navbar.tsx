"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Inicio", href: "/" },
  { name: "Emprendedores", href: "/emprendedores" },
  { name: "Inscripción", href: "/inscripcion" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">

      <div className="w-full relative">

        {/* Glow Aura */}
        <div className="absolute inset-0 bg-orange-500/20 blur-[60px] scale-105 pointer-events-none" />

        {/* MENU PANEL */}
        <div className="relative overflow-hidden border-b-[3px] border-orange-500/60 bg-black/45 backdrop-blur-md shadow-[0_0_35px_rgba(255,140,0,0.35)]">

          {/* Energy Line */}
          <div className="absolute top-0 left-0 h-[4px] w-full bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-500" />

          <div className="h-20 px-4 md:px-10 flex items-center justify-between">

            {/* LOGO */}
            <Link href="/">
              <motion.div whileHover={{ scale: 1.04 }} className="relative cursor-pointer">

                <h1 className="text-3xl md:text-5xl uppercase font-black text-orange-400 font-[family-name:var(--font-anime)] tracking-wide drop-shadow-[0_0_18px_rgba(255,140,0,1)]">
                  Q-ASIAN
                </h1>

                <span className="absolute -bottom-2 right-0 text-xs md:text-sm uppercase tracking-[0.35em] text-white">
                  FEST
                </span>

              </motion.div>
            </Link>

            {/* DESKTOP MENU */}
            <nav className="hidden md:flex items-center gap-4">

              {navLinks.map((link) => (
                <Link key={link.name} href={link.href}>
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="
                      relative
                      px-7
                      py-3
                      uppercase
                      font-bold
                      tracking-widest
                      text-white
                      border
                      border-orange-500/30
                      bg-gradient-to-b
                      from-white/10
                      to-black/30
                      skew-x-[-18deg]
                      transition-all
                      duration-300
                      hover:border-orange-400
                      hover:text-orange-300
                      hover:shadow-[0_0_20px_rgba(255,140,0,0.5)]
                    "
                  >
                    <span className="block skew-x-[18deg]">
                      {link.name}
                    </span>
                  </motion.div>
                </Link>
              ))}

            </nav>

            {/* MOBILE BUTTON */}
            <button
              className="md:hidden text-orange-400"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={34} /> : <Menu size={34} />}
            </button>

          </div>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden border-b border-orange-500/30 bg-black/90 backdrop-blur-md p-5"
            >

              <div className="flex flex-col gap-4">

                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="uppercase font-bold text-white tracking-widest hover:text-orange-400 transition"
                  >
                    {link.name}
                  </Link>
                ))}

              </div>

            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </header>
  );
}