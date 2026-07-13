"use client";

import { motion } from "framer-motion";

export default function LocationSection() {
  const mapsUrl =
    "https://www.google.com/maps?q=Shinobi+Digital+Solutions,+Quito,+Ecuador&output=embed";

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-[#0b0a08] overflow-hidden py-44">

      {/* ink aura background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,180,80,0.12),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(255,60,0,0.10),transparent_60%)]" />

      {/* subtle paper noise */}
      <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/old-mathematics.png')]" />

      <div className="relative z-10 w-full max-w-6xl px-6">

        {/* TITLE (SCROLL / SAGA STYLE) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <p className="text-orange-300 tracking-[0.5em] uppercase text-xs">
            MAPA DE MISIÓN
          </p>

          <h1 className="text-5xl md:text-7xl font-black text-white mt-6">
            UBICACIÓN DEL EVENTO
          </h1>

          <p className="text-white/40 mt-4">
            Registro antiguo de energía detectada en Ecuador
          </p>
        </motion.div>

        {/* MAIN SCROLL LAYOUT (NO TECH UI) */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-20">

          {/* LEFT PARCHMENT TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="w-full lg:w-[420px] bg-[#f3e7c9] text-black p-10 shadow-[10px_10px_0px_#000]"
          >

            <p className="text-xs tracking-[0.4em] uppercase text-red-700 mb-6">
              REGISTRO OFICIAL
            </p>

            <h2 className="text-3xl font-black mb-6">
              Q-ASIAN FEST
            </h2>

            <p className="leading-relaxed text-black/70 mb-10">
              Un punto de reunión donde convergen energías de cosplay, gaming
              y cultura asiática. Evento confirmado en el mapa de Ecuador.
            </p>

            <div className="space-y-6 text-sm">

              <div>
                <p className="text-red-700 uppercase tracking-[0.3em] text-xs">
                  UBICACIÓN
                </p>
                <p className="mt-2 text-black/70">
                  Quito, Ecuador — Shinobi Digital Solutions
                </p>
              </div>

              <div>
                <p className="text-red-700 uppercase tracking-[0.3em] text-xs">
                  HORARIO
                </p>
                <p className="mt-2 text-black/70">
                  10:00 AM – 8:00 PM
                </p>
              </div>

              <div>
                <p className="text-red-700 uppercase tracking-[0.3em] text-xs">
                  ESTADO
                </p>
                <p className="mt-2 text-black/70">
                  EVENTO ACTIVO
                </p>
              </div>

            </div>
          </motion.div>

          {/* RIGHT MAP (INK SCROLL FRAME) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative"
          >

            {/* glow aura */}
            <div className="absolute inset-0 w-[500px] h-[500px] bg-orange-500/10 blur-[120px] rounded-full" />

            <div className="relative w-[420px] h-[420px] bg-[#f3e7c9] border-4 border-black shadow-[10px_10px_0px_#000] overflow-hidden">

              {/* ink stamp header */}
              <div className="absolute top-4 left-4 text-xs tracking-[0.4em] text-red-700 uppercase">
                ZONA MARCADA
              </div>

              {/* decorative marks */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-10 left-10 w-10 h-10 border border-black" />
                <div className="absolute bottom-12 right-12 w-14 h-14 border border-black rotate-45" />
              </div>

              {/* map */}
              <iframe
                src={mapsUrl}
                className="w-full h-full grayscale contrast-125"
                loading="lazy"
              />

              {/* center marker (ink seal) */}
              <div className="absolute left-1/2 top-1/2 w-5 h-5 -translate-x-1/2 -translate-y-1/2 bg-red-700 rounded-full shadow-[0_0_20px_rgba(200,0,0,0.6)]" />

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}