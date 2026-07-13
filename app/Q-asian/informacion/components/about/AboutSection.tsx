"use client";

import { useState } from "react";
import {
  motion,
  AnimatePresence,
} from "framer-motion";

export default function AboutSection() {
  const [open, setOpen] = useState(false);

  const items = [
    "🎌 Cosplay y concursos",
    "🎮 Zona gamer",
    "🎤 Shows en vivo",
    "🛍 Experiencias interactivas",
  ];

  return (
<section
  className="
    relative
    min-h-[90vh]
    w-full
    overflow-hidden
    bg-black
    pt-24
    pb-56
    md:pt-32
    md:pb-72
  "
>
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#070707] to-black" />

      {/* RED GLOW */}
      <motion.div
        animate={{
          opacity: [0.2, 0.45, 0.2],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[700px]
          h-[700px]
          rounded-full
          bg-[#ff3b30]/10
          blur-[140px]
        "
      />

      {/* VIDEO */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 1.15,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="
              absolute
              inset-0
              pointer-events-none
            "
          >
            <iframe
              className="
                w-full
                h-full
                scale-[1.25]
                opacity-40
              "
              src="https://www.youtube-nocookie.com/embed/XWhtXOvj3Yo?autoplay=1&mute=1&loop=1&playlist=XWhtXOvj3Yo&controls=0"
              allow="autoplay"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/55 backdrop-blur-[1px]" />

      <div
        className="
          relative
          z-10
          min-h-[115vh]
          md:min-h-[90vh]
          flex
          items-center
          justify-center
          px-6
        "
      >
        <AnimatePresence mode="wait">
          {!open ? (
            <motion.div
              key="closed"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              className="
                flex
                flex-col
                items-center
                text-center
              "
            >
              {/* TITLE */}
              <motion.h2
                initial={{
                  y: 30,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                className="
                  text-4xl
                  md:text-7xl
                  font-black
                  text-white
                  uppercase
                "
                style={{
                  fontFamily:
                    "var(--font-anime)",
                }}
              >
                ¿QUIERES SABER
                <span className="text-[#ff3b30]">
                  {" "}QUIÉNES SOMOS?
                </span>
              </motion.h2>

              <p className="text-white/60 mt-5 max-w-xl">
                Toca a Nani y descubre
                el origen del universo
                Q-ASIAN FEST.
              </p>

              {/* NANI */}
              <motion.button
                onClick={() =>
                  setOpen(true)
                }
                animate={{
                  y: [0, -18, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{
                  scale: 1.06,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="
                  relative
                  mt-12
                "
              >
                {/* GLOW */}
                <div
                  className="
                    absolute
                    inset-0
                    rounded-full
                    bg-[#ff3b30]/20
                    blur-[90px]
                  "
                />

                <img
                  src="/images/nani.png"
                  alt="Nani"
                  className="
                    relative
                    w-52
                    md:w-80
                    drop-shadow-[0_0_40px_rgba(255,59,48,.35)]
                  "
                />

                <motion.p
                  animate={{
                    opacity: [
                      0.4,
                      1,
                      0.4,
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="
                    text-white/70
                    text-sm
                    tracking-[0.3em]
                    uppercase
                    mt-4
                  "
                >
                  Click en Nani
                </motion.p>
              </motion.button>
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              className="
                grid
                lg:grid-cols-2
                gap-16
                items-center
                max-w-7xl
                w-full
              "
            >
              {/* LEFT */}
              <motion.div
                initial={{
                  x: -80,
                  opacity: 0,
                }}
                animate={{
                  x: 0,
                  opacity: 1,
                }}
                className="
                  flex
                  justify-center
                "
              >
                <img
                  src="/images/nani-ok.png"
                  alt=""
                  className="
                    w-72
                    md:w-[420px]
                    drop-shadow-[0_0_70px_rgba(255,59,48,.25)]
                  "
                />
              </motion.div>

              {/* RIGHT */}
              <motion.div
                initial={{
                  x: 80,
                  opacity: 0,
                }}
                animate={{
                  x: 0,
                  opacity: 1,
                }}
                className="
                  backdrop-blur-xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-8
                  md:p-12
                "
              >
                <span className="text-[#ff3b30] tracking-[0.4em] text-xs uppercase">
                  Universo Q-Asian
                </span>

                <h3
                  className="
                    text-5xl
                    font-black
                    text-white
                    mt-4
                  "
                >
                  Q-ASIAN FEST
                </h3>

                <div className="w-20 h-[3px] bg-[#ff3b30] mt-6 mb-8" />

                <p className="text-white/80 leading-relaxed">
                  Evento cultural inspirado
                  en anime, gaming y cultura
                  asiática moderna diseñado
                  para conectar comunidades.
                </p>

                <p className="text-white/60 mt-5 leading-relaxed">
                  Un espacio lleno de música,
                  cosplay, shows y experiencias
                  inmersivas.
                </p>

                {/* FEATURES */}
                <div className="grid grid-cols-2 gap-4 mt-10">
                  {items.map(
                    (item, index) => (
                      <motion.div
                        key={item}
                        initial={{
                          opacity: 0,
                          y: 20,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          delay:
                            index * 0.12,
                        }}
                        className="
                          border
                          border-white/10
                          bg-white/[0.04]
                          p-4
                          text-white/80
                          text-sm
                          hover:border-[#ff3b30]/40
                          transition-all
                        "
                      >
                        {item}
                      </motion.div>
                    )
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}