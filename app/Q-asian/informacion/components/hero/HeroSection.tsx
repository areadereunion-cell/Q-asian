"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden">

      {/* IMAGEN (la misma ruta que usas) */}
      <img
        src="/images/q-asian-fest-logo.png"
        alt="Q-Asian Fest Banner"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* ⚠️ si quitaste el overlay, aquí no hay nada que tape */}

      {/* glow suave opcional */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.2),transparent_60%)]" />

      {/* contenido */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6"
      >
        {/* si aquí no ves nada, es porque el fondo es el logo y lo está tapando visualmente */}

      </motion.div>

    </section>
  );
}