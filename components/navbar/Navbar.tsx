"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navLinks = [
  { name: "INICIO", href: "/" },
  { name: "EMPRENDEDORES", href: "/emprendedores" },
  { name: "INSCRIPCIÓN", href: "/inscripcion" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="relative bg-[#050505] border-b border-[#ff3b30]/40 overflow-hidden">

        {/* Glow rojo */}
        <div className="absolute inset-0 bg-[#ff3b30]/5 blur-[100px]" />

        <div className="h-24 px-6 md:px-12 flex items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            className="absolute left-1/2 -translate-x-1/2"
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="text-center"
            >
              <h1
                className="
                  text-[#ff3b30]
                  text-5xl
                  md:text-7xl
                  font-black
                  uppercase
                  leading-none
                  tracking-[0.08em]
                  drop-shadow-[0_0_20px_rgba(255,59,48,0.8)]
                "
                style={{
                  fontFamily: "Teko, sans-serif",
                }}
              >
                Q-ASIAN
              </h1>

              <span
                className="
                  text-[#ff3b30]
                  text-xs
                  md:text-sm
                  font-medium
                  tracking-[0.6em]
                "
              >
                FEST
              </span>
            </motion.div>
          </Link>

          {/* Espaciador */}
          <div className="w-40" />

          {/* Menú */}
          <nav className="ml-auto flex items-center gap-3">

            {navLinks.map((item) => {
              const active = pathname === item.href;

              return (
                <Link key={item.name} href={item.href}>
                  <motion.div
                    whileHover={{
                      y: -3,
                      scale: 1.05,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    className={`
                      relative
                      px-6
                      py-3
                      uppercase
                      font-bold
                      tracking-[0.15em]
                      border
                      transition-all
                      duration-300
                      ${
                        active
                          ? "bg-[#ff3b30] text-black border-[#ff3b30]"
                          : "bg-transparent text-[#ff3b30] border-[#ff3b30]/40 hover:border-[#ff3b30] hover:shadow-[0_0_20px_rgba(255,59,48,0.6)]"
                      }
                    `}
                  >
                    {item.name}

                    {active && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute inset-0 border border-[#ff3b30]"
                      />
                    )}
                  </motion.div>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}