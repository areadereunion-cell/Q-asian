"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { name: "INICIO", href: "/" },
  { name: "EMPRENDEDORES", href: "/emprendedores" },
  { name: "ACTIVIDADES", href: "/actividades" },
];

const inscriptionLinks = [
  {
    name: "STANDS",
    href: "/inscripcion/stands",
  },
  {
    name: "CONCURSO COSPLAY",
    href: "/inscripcion/cosplay",
  },
  {
    name: "K-POP DANCE",
    href: "/inscripcion/kpop",
  },
];

export default function Navbar() {
  const pathname = usePathname();

  const [openDropdown, setOpenDropdown] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(false);

  const isInscriptionActive =
    pathname.startsWith("/inscripcion");

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="relative bg-[#050505]/95 backdrop-blur-xl border-b border-[#ff3b30]/30 overflow-visible">
        
        {/* Glow */}
        <div className="absolute inset-0 bg-[#ff3b30]/5 blur-[100px]" />

        <div className="relative h-20 md:h-24 px-4 md:px-12 flex items-center justify-between">
          
          {/* Mobile Menu Button */}
          <button
            onClick={() =>
              setMobileMenu(!mobileMenu)
            }
            className="
              md:hidden
              text-[#ff3b30]
              z-50
              border
              border-[#ff3b30]/30
              p-2
              hover:border-[#ff3b30]
              transition-all
            "
          >
            {mobileMenu ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>

          {/* Logo */}
          <Link
            href="/"
            className="
              absolute
              left-1/2
              -translate-x-1/2
            "
          >
            <motion.div
              whileHover={{
                scale: 1.03,
              }}
              className="text-center"
            >
              <h1
                className="
                  text-[#ff3b30]
                  text-3xl
                  sm:text-4xl
                  md:text-6xl
                  font-black
                  uppercase
                  leading-none
                  tracking-[0.08em]
                  drop-shadow-[0_0_20px_rgba(255,59,48,0.8)]
                "
                style={{
                  fontFamily:
                    "Teko, sans-serif",
                }}
              >
                Q-ASIAN
              </h1>

              <span
                className="
                  text-[#ff3b30]
                  text-[10px]
                  md:text-sm
                  font-medium
                  tracking-[0.5em]
                "
              >
                FEST
              </span>
            </motion.div>
          </Link>

          {/* Desktop Spacer */}
          <div className="hidden md:block w-40" />

          {/* Desktop Menu */}
          <nav className="hidden md:flex ml-auto items-center gap-3">
            
            {navLinks.map((item) => {
              const active =
                pathname === item.href;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                >
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
                      cursor-pointer
                      ${
                        active
                          ? "bg-[#ff3b30] text-black border-[#ff3b30]"
                          : "bg-transparent text-[#ff3b30] border-[#ff3b30]/40 hover:border-[#ff3b30] hover:shadow-[0_0_20px_rgba(255,59,48,0.6)]"
                      }
                    `}
                  >
                    {item.name}
                  </motion.div>
                </Link>
              );
            })}

            {/* Desktop Dropdown */}
            <div
              className="relative"
              onMouseEnter={() =>
                setOpenDropdown(true)
              }
              onMouseLeave={() =>
                setOpenDropdown(false)
              }
            >
              <motion.div
                whileHover={{
                  y: -3,
                  scale: 1.05,
                }}
                className={`
                  px-6
                  py-3
                  uppercase
                  font-bold
                  tracking-[0.15em]
                  border
                  transition-all
                  duration-300
                  cursor-pointer
                  flex
                  items-center
                  gap-2
                  ${
                    isInscriptionActive
                      ? "bg-[#ff3b30] text-black border-[#ff3b30]"
                      : "text-[#ff3b30] border-[#ff3b30]/40 hover:border-[#ff3b30]"
                  }
                `}
              >
                INSCRIPCIÓN

                <motion.div
                  animate={{
                    rotate:
                      openDropdown
                        ? 180
                        : 0,
                  }}
                >
                  <ChevronDown
                    size={18}
                  />
                </motion.div>
              </motion.div>

              <AnimatePresence>
                {openDropdown && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: -10,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: -10,
                    }}
                    className="
                      absolute
                      right-0
                      top-[110%]
                      w-[280px]
                      bg-[#050505]/95
                      backdrop-blur-xl
                      border
                      border-[#ff3b30]/30
                      shadow-[0_0_30px_rgba(255,59,48,0.25)]
                      overflow-hidden
                    "
                  >
                    {inscriptionLinks.map(
                      (item) => {
                        const active =
                          pathname ===
                          item.href;

                        return (
                          <Link
                            key={
                              item.name
                            }
                            href={
                              item.href
                            }
                          >
                            <motion.div
                              whileHover={{
                                x: 5,
                              }}
                              className={`
                                px-5
                                py-4
                                text-sm
                                uppercase
                                tracking-[0.12em]
                                font-bold
                                border-b
                                border-[#ff3b30]/10
                                transition-all
                                duration-300
                                ${
                                  active
                                    ? "bg-[#ff3b30] text-black"
                                    : "text-[#ff3b30] hover:bg-[#ff3b30]/10"
                                }
                              `}
                            >
                              {
                                item.name
                              }
                            </motion.div>
                          </Link>
                        );
                      }
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenu && (
            <motion.div
              initial={{
                opacity: 0,
                y: -20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -20,
              }}
              className="
                md:hidden
                bg-[#050505]/95
                backdrop-blur-2xl
                border-t
                border-[#ff3b30]/20
                px-4
                py-4
                space-y-3
              "
            >
              {navLinks.map(
                (item) => {
                  const active =
                    pathname ===
                    item.href;

                  return (
                    <Link
                      key={
                        item.name
                      }
                      href={
                        item.href
                      }
                      onClick={() =>
                        setMobileMenu(
                          false
                        )
                      }
                    >
                      <div
                        className={`
                          px-4
                          py-4
                          uppercase
                          font-bold
                          border
                          transition-all
                          ${
                            active
                              ? "bg-[#ff3b30] text-black border-[#ff3b30]"
                              : "text-[#ff3b30] border-[#ff3b30]/30"
                          }
                        `}
                      >
                        {
                          item.name
                        }
                      </div>
                    </Link>
                  );
                }
              )}

              {/* Mobile Dropdown */}
              <div>
                <button
                  onClick={() =>
                    setMobileDropdown(
                      !mobileDropdown
                    )
                  }
                  className={`
                    w-full
                    px-4
                    py-4
                    uppercase
                    font-bold
                    border
                    flex
                    justify-between
                    items-center
                    ${
                      isInscriptionActive
                        ? "bg-[#ff3b30] text-black border-[#ff3b30]"
                        : "text-[#ff3b30] border-[#ff3b30]/30"
                    }
                  `}
                >
                  INSCRIPCIÓN

                  <motion.div
                    animate={{
                      rotate:
                        mobileDropdown
                          ? 180
                          : 0,
                    }}
                  >
                    <ChevronDown
                      size={18}
                    />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {mobileDropdown && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height:
                          "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      className="
                        overflow-hidden
                        mt-2
                        space-y-2
                      "
                    >
                      {inscriptionLinks.map(
                        (
                          item
                        ) => (
                          <Link
                            key={
                              item.name
                            }
                            href={
                              item.href
                            }
                            onClick={() =>
                              setMobileMenu(
                                false
                              )
                            }
                          >
                            <div
                              className="
                                px-4
                                py-3
                                ml-4
                                border
                                border-[#ff3b30]/20
                                text-[#ff3b30]
                                text-sm
                                uppercase
                              "
                            >
                              {
                                item.name
                              }
                            </div>
                          </Link>
                        )
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}