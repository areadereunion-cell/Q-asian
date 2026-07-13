"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { useState } from "react";

interface HeroCarouselProps {
  slides: any[];
  current: number;
  setCurrent: (value: any) => void;
  mouse: {
    x: number;
    y: number;
  };
  isMobile: boolean;
}

export default function HeroCarousel({
  slides,
  current,
  setCurrent,
  mouse,
  isMobile,
}: HeroCarouselProps) {
  const [hovered, setHovered] = useState<number | null>(null);

  const previous = () =>
    setCurrent((current - 1 + slides.length) % slides.length);

  const next = () =>
    setCurrent((current + 1) % slides.length);

  return (
    <>
      {/* Flecha izquierda */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={previous}
        className="
        absolute
        left-3
        md:left-5
        lg:left-0
        z-40
        bg-white/90
        backdrop-blur-xl
        p-2
        md:p-4
        rounded-full
        shadow-xl
        "
      >
        <ChevronLeft size={isMobile ? 18 : 28} />
      </motion.button>

      {/* Flecha derecha */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={next}
        className="
        absolute
        right-3
        md:right-5
        lg:right-0
        z-40
        bg-white/90
        backdrop-blur-xl
        p-2
        md:p-4
        rounded-full
        shadow-xl
        "
      >
        <ChevronRight size={isMobile ? 18 : 28} />
      </motion.button>

      <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
        {slides.map((slide, index) => {
          const offset =
            (index - current + slides.length) % slides.length;

          let position = offset;

          if (position > slides.length / 2) {
            position -= slides.length;
          }

          if (isMobile && Math.abs(position) > 1) {
            return null;
          }

          const isCenter = position === 0;

          return (
            <motion.div
              key={slide.image}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              animate={{
                x: position * (isMobile ? 250 : 330),

                scale: isCenter
                  ? 1
                  : isMobile
                  ? 0.9
                  : 0.82,

                rotateY: isMobile
                  ? 0
                  : isCenter
                  ? mouse.x * 0.35
                  : position < 0
                  ? 10
                  : -10,

                rotateX:
                  isMobile
                    ? 0
                    : isCenter
                    ? -mouse.y * 0.25
                    : 0,

                opacity: isCenter
                  ? 1
                  : isMobile
                  ? 0.55
                  : 0.45,

                zIndex: isCenter ? 20 : 10,
              }}
              transition={{
                duration: 0.45,
                ease: "easeOut",
              }}
              className="
              absolute
              overflow-hidden
              rounded-[24px]
              border
              border-white/60
              shadow-[0_20px_60px_rgba(0,0,0,.25)]
              cursor-pointer

              w-[82vw]
              sm:w-[86vw]
              md:w-[680px]
              lg:w-[760px]

              h-[220px]
              sm:h-[280px]
              md:h-[420px]
              lg:h-[520px]
              "
            >
              <motion.img
                src={slide.image}
                alt={slide.title}
                animate={{
                  scale: hovered === index ? 1.05 : 1,
                  filter:
                    hovered === index
                      ? "brightness(.65)"
                      : "brightness(1)",
                }}
                transition={{
                  duration: 0.5,
                }}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />

              {isCenter && (
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current}
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: -20,
                    }}
                    transition={{
                      duration: 0.45,
                    }}
                    className="
                    absolute
                    inset-0

                    flex
                    flex-col

                    justify-end
                    items-start

                    md:justify-center
                    md:items-center

                    text-left
                    md:text-center

                    p-5
                    md:px-12

                    text-white
                    "
                  >
                                        <h1
                      className="
                      text-xl
                      sm:text-2xl
                      md:text-5xl
                      font-bold
                      leading-tight
                      max-w-3xl
                      drop-shadow-lg
                      "
                    >
                      {slide.title}
                    </h1>

                    <p
                      className="
                      hidden
                      sm:block
                      mt-3
                      text-sm
                      md:text-lg
                      max-w-2xl
                      text-white/90
                      "
                    >
                      {slide.subtitle}
                    </p>

                    <Link href={slide.href}>
                      <motion.button
                        whileHover={{
                          scale: 1.05,
                          y: -2,
                        }}
                        whileTap={{
                          scale: 0.96,
                        }}
                        className="
                        mt-5
                        px-5
                        py-2.5
                        md:px-8
                        md:py-3

                        rounded-full

                        bg-white
                        text-red-700

                        font-semibold

                        text-sm
                        md:text-base

                        flex
                        items-center
                        justify-center
                        gap-3

                        shadow-lg

                        hover:bg-red-600
                        hover:text-white
                        transition-all
                        "
                      >
                        {slide.button}

                        <motion.div
                          animate={{
                            x: [0, 4, 0],
                          }}
                          transition={{
                            duration: 1.4,
                            repeat: Infinity,
                          }}
                        >
                          <ArrowRight size={18} />
                        </motion.div>
                      </motion.button>
                    </Link>
                  </motion.div>
                </AnimatePresence>
              )}

              {hovered === index && !isMobile && (
                <motion.div
                  initial={{
                    x: "-100%",
                  }}
                  animate={{
                    x: "150%",
                  }}
                  transition={{
                    duration: 1,
                  }}
                  className="
                  absolute
                  inset-0
                  bg-gradient-to-r
                  from-transparent
                  via-white/20
                  to-transparent
                  skew-x-[-20deg]
                  "
                />
              )}
            </motion.div>
          );
        })}
      </div>
            {/* Indicadores */}
      <div
        className="
        absolute
        bottom-5
        md:bottom-12
        flex
        gap-3
        z-40
        "
      >
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`
              rounded-full
              transition-all
              duration-500
              ${
                current === i
                  ? "w-10 md:w-12 h-3 bg-red-600"
                  : "w-3 h-3 bg-white/70 hover:bg-white"
              }
            `}
          />
        ))}
      </div>

      {/* Barra de progreso */}
      <div className="absolute bottom-0 left-0 w-full h-[4px] bg-white/20">
        <motion.div
          key={current}
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{
            duration: 6,
            ease: "linear",
          }}
          className="h-full bg-gradient-to-r from-blue-600 via-white to-red-600"
        />
      </div>
    </>
  );
}