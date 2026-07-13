"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const slides = [
  "/images/hero/1.jpg",
  "/images/hero/2.jpg",
  "/images/hero/3.jpg",
  "/images/hero/4.jpg",
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  const previous = () =>
    setCurrent((current - 1 + slides.length) % slides.length);

  const next = () =>
    setCurrent((current + 1) % slides.length);

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-950 via-white to-red-700">

      {/* Decoraciones */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,.3),transparent_60%)]" />

      <div className="absolute -left-32 top-0 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full"/>

      <div className="absolute -right-32 bottom-0 w-96 h-96 bg-red-600/20 blur-[120px] rounded-full"/>

      {/* Carrusel */}

      <div className="relative w-full max-w-7xl h-[650px] flex items-center justify-center">

        {/* Botón izquierda */}

        <button
          onClick={previous}
          className="absolute left-0 z-30 bg-white/70 hover:bg-white p-3 rounded-full shadow-xl transition"
        >
          <ChevronLeft size={30}/>
        </button>

        {/* Botón derecha */}

        <button
          onClick={next}
          className="absolute right-0 z-30 bg-white/70 hover:bg-white p-3 rounded-full shadow-xl transition"
        >
          <ChevronRight size={30}/>
        </button>

        <div className="relative w-full h-full flex justify-center items-center">

          {slides.map((image, index) => {

            const offset =
              (index - current + slides.length) % slides.length;

            let position = offset;

            if (position > 2)
              position -= slides.length;

            const isCenter = position === 0;

            return (
              <motion.img
                key={image}
                src={image}
                alt=""
                animate={{
                  x: position * 320,
                  scale: isCenter ? 1 : 0.78,
                  rotateY: isCenter ? 0 : position < 0 ? 25 : -25,
                  opacity: Math.abs(position) > 1 ? .35 : 1,
                  zIndex: isCenter ? 20 : 10,
                }}
                transition={{
                  duration: .7,
                  ease: "easeInOut",
                }}
                className="absolute w-[750px] h-[500px] rounded-3xl object-cover shadow-[0_20px_60px_rgba(0,0,0,.35)] border-8 border-white"
              />
            );
          })}

        </div>

        {/* Indicadores */}

        <div className="absolute bottom-5 flex gap-3">

          {slides.map((_, i) => (

            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`transition-all duration-300 rounded-full ${
                current === i
                  ? "w-10 h-3 bg-red-600"
                  : "w-3 h-3 bg-white/70"
              }`}
            />

          ))}

        </div>

      </div>

    </section>
  );
}