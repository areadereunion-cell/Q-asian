"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AboutSection() {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative w-full overflow-hidden py-8">

      {/* FONDO */}
      <div
        className={`absolute inset-0 bg-black transition-opacity duration-700 ${
          open ? "opacity-0" : "opacity-100"
        }`}
      />

      {open && (
        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
          <iframe
            className="w-full h-full scale-125"
            src="https://www.youtube-nocookie.com/embed/XWhtXOvj3Yo?autoplay=1&mute=1&loop=1&playlist=XWhtXOvj3Yo&controls=0&modestbranding=1&rel=0"
            allow="autoplay; encrypted-media"
          />
        </div>
      )}

      <div className="absolute inset-0 bg-black/60" />

      {/* CONTENEDOR */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4">

        {/* 🔥 MOBILE: STACK VERTICAL */}
        <div className="flex flex-col md:grid md:grid-cols-2 items-center gap-10">

          {/* ================= TEXTO INTRO ================= */}
          <div className="flex items-center justify-center text-center md:text-left">

            <AnimatePresence mode="wait">

              {!open ? (
                <motion.div
                  key="intro"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-white space-y-3 max-w-md"
                >
                  <h2 className="text-2xl md:text-4xl font-bold leading-tight">
                    ¿Quieres saber quiénes somos?
                  </h2>

                  <p className="text-white/70 text-sm md:text-base">
                    Da click en Nani para descubrir la historia del evento
                  </p>

                  <p className="text-white/50 text-xs md:text-sm leading-relaxed">
                    Una experiencia creada para unir la cultura anime, el gaming y la comunidad juvenil en un solo espacio lleno de creatividad, música y entretenimiento.
                  </p>
                </motion.div>
              ) : (
                <motion.img
                  key="nani-left"
                  src="/images/nani-ok.png"
                  alt="Nani OK"
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
                  className="w-40 md:w-64 mx-auto"
                />
              )}

            </AnimatePresence>

          </div>

          {/* ================= NANI / INFO ================= */}
          <div className="flex items-center justify-center">

            <AnimatePresence mode="wait">

              {!open ? (
                <motion.button
                  key="nani-click"
                  onClick={() => setOpen(true)}
                  whileTap={{ scale: 0.95 }}
                  className="flex flex-col items-center"
                >
                  <img
                    src="/images/nani.png"
                    alt="Nani"
                    className="w-40 md:w-64"
                  />

                  <p className="text-white/80 text-xs md:text-sm mt-2">
                    Da click en Nani
                  </p>
                </motion.button>
              ) : (
                <motion.div
                  key="info"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-white space-y-4 text-center md:text-left max-w-md"
                >
                  <h3 className="text-2xl md:text-3xl font-bold">
                    Q-Asian Fest
                  </h3>

                  <div className="w-12 md:w-16 h-1 bg-white/30 rounded-full mx-auto md:mx-0" />

                  <p className="text-white/90 text-sm md:text-base leading-relaxed">
                    El <b>Q-Asian Fest</b> es un evento cultural inspirado en el anime, el gaming y la cultura asiática moderna, diseñado para conectar a la comunidad juvenil con experiencias únicas.
                  </p>

                  <p className="text-white/80 text-sm md:text-base leading-relaxed">
                    Organizado por la <b>Administración Zonal Quitumbe</b>, busca crear un espacio seguro y creativo donde el arte, la música y la cultura pop se encuentren.
                  </p>

                  <div className="text-white/60 text-xs md:text-sm space-y-1">
                    <p>🎌 Cosplay y concursos</p>
                    <p>🎮 Zona gamer</p>
                    <p>🎤 Shows en vivo</p>
                    <p>🛍 Experiencias interactivas</p>
                  </div>
                </motion.div>
              )}

            </AnimatePresence>

          </div>

        </div>

      </div>

    </section>
  );
}