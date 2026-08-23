"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { name: "INICIO", href: "/" },
  { name: "EVENTOS", href: "/empq/eventos" },
  { name: "EMPRENDEDORES", href: "/empq/emprendedores" },
  { name: "CONTÁCTANOS", href: "/empq/inscripcion/stands" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-sm">

        <div className="h-[3px] bg-gradient-to-r from-blue-900 via-blue-600 to-red-600" />

        <div className="max-w-7xl mx-auto h-20 px-5 md:px-8 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="Administración Zonal Quitumbe"
              width={52}
              height={52}
            />

            <div className="leading-none">
              <h1 className="text-lg md:text-xl font-extrabold text-blue-900">
                ADMINISTRACIÓN
              </h1>

              <p className="text-red-600 text-xs md:text-sm font-semibold tracking-[0.18em]">
                ZONAL QUITUMBE
              </p>
            </div>
          </Link>


          {/* Desktop */}
          <nav className="hidden lg:flex items-center gap-10 ml-auto">

            {links.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative group"
                >
                  <motion.span
                    whileHover={{ y: -2 }}
                    className={`
                    text-sm
                    font-semibold
                    tracking-wide
                    transition
                    ${
                      active
                      ? "text-blue-700"
                      : "text-slate-700 hover:text-blue-700"
                    }
                    `}
                  >
                    {item.name}

                    <span
                      className={`
                      absolute
                      left-0
                      -bottom-2
                      h-[2px]
                      rounded-full
                      bg-red-600
                      transition-all
                      duration-300
                      ${
                        active
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                      }
                      `}
                    />
                  </motion.span>
                </Link>
              );
            })}

          </nav>


          {/* Mobile Button */}
          <button
            className="lg:hidden text-blue-900"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={30} /> : <Menu size={30} />}
          </button>

        </div>
      </div>


      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="
            lg:hidden
            bg-white
            border-b
            border-slate-200
            shadow-lg
            "
          >

            {links.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                >
                  <div
                    className={`
                    px-6
                    py-4
                    border-b
                    text-sm
                    font-semibold
                    ${
                      active
                      ? "text-blue-700 bg-blue-50"
                      : "text-slate-700"
                    }
                    `}
                  >
                    {item.name}
                  </div>
                </Link>
              );
            })}

          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
}