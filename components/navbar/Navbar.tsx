"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { name: "INICIO", href: "/" },
  { name: "EMPRENDEDORES", href: "/emprendedores" },
  { name: "ACTIVIDADES", href: "/" },
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

  const [openDropdown, setOpenDropdown] =
    useState(false);

  const [mobileMenu, setMobileMenu] =
    useState(false);

  const [
    mobileDropdown,
    setMobileDropdown,
  ] = useState(false);

  const isInscriptionActive =
    pathname.startsWith("/inscripcion");

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="relative bg-[#f4f1e8]/95 backdrop-blur-xl border-b-2 border-black overflow-visible shadow-[0_5px_0_rgba(0,0,0,0.08)]">

        {/* Manga Texture */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">

          {/* Halftone */}
          <div
            className="
              absolute inset-0
              opacity-[0.06]
              bg-[radial-gradient(circle,_#000_1px,_transparent_1.4px)]
              bg-[size:12px_12px]
            "
          />

          {/* Speed lines */}
          <div
            className="
              absolute
              top-[-30px]
              right-[-50px]
              w-[450px]
              h-[220px]
              opacity-[0.04]
              rotate-[-8deg]
              bg-[repeating-linear-gradient(
                90deg,
                black_0px,
                black_2px,
                transparent_2px,
                transparent_14px
              )]
            "
          />

          {/* Ink blur */}
          <div
            className="
              absolute
              left-[20%]
              top-[-80px]
              w-[250px]
              h-[250px]
              rounded-full
              bg-black/[0.03]
              blur-[90px]
            "
          />
        </div>

        <div className="relative h-20 md:h-24 px-4 md:px-12 flex items-center justify-between">

          {/* Mobile Menu Button */}
          <button
            onClick={() =>
              setMobileMenu(!mobileMenu)
            }
            className="
              md:hidden
              text-black
              z-50
              border-2
              border-black
              bg-white/80
              p-2
              hover:shadow-[3px_3px_0_rgba(0,0,0,0.18)]
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
              initial={{
                y: 0,
              }}
              animate={{
                y: [0, -2, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.06,
              }}
              className="text-center"
            >
              <h1
                className="
                  text-black
                  text-3xl
                  sm:text-4xl
                  md:text-6xl
                  font-black
                  uppercase
                  leading-none
                "
                style={{
                  fontFamily:
                    "Teko, sans-serif",
                  WebkitTextStroke:
                    "1.4px black",
                  textShadow:
                    `
                    3px 3px 0 rgba(0,0,0,0.12),
                    0 0 12px rgba(0,0,0,0.08)
                    `,
                }}
              >
                <motion.span
                  animate={{
                    letterSpacing: [
                      "0.06em",
                      "0.09em",
                      "0.06em",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="inline-block"
                >
                  Q-ASIAN
                </motion.span>
              </h1>

              <span
                className="
                  text-neutral-700
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
                      border-2
                      transition-all
                      duration-300
                      cursor-pointer
                      ${
                        active
                          ? "bg-black text-white border-black shadow-[4px_4px_0_rgba(0,0,0,0.2)]"
                          : "bg-white/70 text-black border-black hover:bg-black hover:text-white hover:shadow-[4px_4px_0_rgba(0,0,0,0.15)]"
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
                  border-2
                  transition-all
                  duration-300
                  cursor-pointer
                  flex
                  items-center
                  gap-2
                  ${
                    isInscriptionActive
                      ? "bg-black text-white border-black shadow-[4px_4px_0_rgba(0,0,0,0.2)]"
                      : "bg-white/70 text-black border-black hover:bg-black hover:text-white hover:shadow-[4px_4px_0_rgba(0,0,0,0.15)]"
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
                      bg-[#f4f1e8]
                      border-2
                      border-black
                      shadow-[6px_6px_0_rgba(0,0,0,0.15)]
                      overflow-hidden
                      z-50
                    "
                  >
                    {inscriptionLinks.map(
                      (item) => {
                        const active =
                          pathname ===
                          item.href;

                        return (
                          <Link
                            key={item.name}
                            href={item.href}
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
                                border-black/10
                                transition-all
                                duration-300
                                ${
                                  active
                                    ? "bg-black text-white"
                                    : "text-black hover:bg-black hover:text-white"
                                }
                              `}
                            >
                              {item.name}
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
                bg-[#f4f1e8]/95
                backdrop-blur-2xl
                border-t-2
                border-black
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
                      key={item.name}
                      href={item.href}
                      onClick={() =>
                        setMobileMenu(false)
                      }
                    >
                      <div
                        className={`
                          px-4
                          py-4
                          uppercase
                          font-bold
                          border-2
                          transition-all
                          ${
                            active
                              ? "bg-black text-white border-black"
                              : "bg-white/70 text-black border-black hover:bg-black hover:text-white"
                          }
                        `}
                      >
                        {item.name}
                      </div>
                    </Link>
                  );
                }
              )}

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
                    border-2
                    flex
                    justify-between
                    items-center
                    transition-all
                    ${
                      isInscriptionActive
                        ? "bg-black text-white border-black"
                        : "bg-white/70 text-black border-black hover:bg-black hover:text-white"
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
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      className="overflow-hidden mt-2 space-y-2"
                    >
                      {inscriptionLinks.map(
                        (item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            onClick={() =>
                              setMobileMenu(false)
                            }
                          >
                            <div
                              className="
                                px-4
                                py-3
                                ml-4
                                border-2
                                border-black
                                bg-white/70
                                text-black
                                text-sm
                                uppercase
                                hover:bg-black
                                hover:text-white
                                transition-all
                              "
                            >
                              {item.name}
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