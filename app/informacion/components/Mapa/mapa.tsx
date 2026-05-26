"use client";

import { motion } from "framer-motion";

export default function LocationSection() {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center justify-center bg-black overflow-hidden">

      {/* glow suave estilo anime */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.15),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(255,140,0,0.08),transparent_60%)]" />

      <div className="relative z-10 w-full max-w-6xl px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Ubicación del evento
          </h2>

          <p className="mt-3 text-white/60">
            Encuentra el Q-Asian Fest en el mapa
          </p>
        </motion.div>

        {/* CONTENIDO */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* INFO */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-5 text-white"
          >
            <p className="text-white/70 leading-relaxed">
              El <b className="text-white">Q-Asian Fest</b> se realiza en un espacio diseñado
              para cultura anime, emprendimiento y experiencias interactivas.
            </p>

            <p className="text-white/60 text-sm md:text-base">
              Aquí encontrarás zonas de stands, escenarios de actividades y áreas de convivencia
              para toda la comunidad.
            </p>

            <div className="pt-4 space-y-2">
              <div>
                <p className="text-white font-medium">📌 Dirección</p>
                <p className="text-white/60 text-sm">
                  (Coloca aquí la ubicación del evento)
                </p>
              </div>

              <div>
                <p className="text-white font-medium">🕒 Horario</p>
                <p className="text-white/60 text-sm">
                  10:00 AM – 8:00 PM
                </p>
              </div>
            </div>
          </motion.div>

          {/* MAPA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="w-full h-[380px] md:h-[460px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
          >
            <iframe
              src="https://www.google.com/maps?q=Quito,Ecuador&output=embed"
              className="w-full h-full"
              loading="lazy"
            />
          </motion.div>

        </div>

      </div>
    </section>
  );
}