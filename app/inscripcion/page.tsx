"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function InscripcionPage() {
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    setSent(true);
    setTimeout(() => setSent(false), 2500);
  };

  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-black text-white relative overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          src="/images/rse.png"
          alt="background"
          className="w-full h-full object-cover opacity-25 scale-110"
        />
      </div>

      {/* overlays atmosféricos */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_60%)]" />
      <div className="absolute inset-0 bg-black/70" />
      <div className="absolute inset-0 opacity-20 bg-[url('/images/grain.png')]" />

      {/* ALERTA */}
      {sent && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed top-6 left-1/2 -translate-x-1/2 bg-white text-black px-5 py-2 text-sm tracking-wide z-50"
        >
          ✔ Expediente registrado correctamente
        </motion.div>
      )}

      {/* PANEL PRINCIPAL */}
      <div className="relative z-10 w-full max-w-2xl px-6">

        {/* HEADER */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-5xl font-bold tracking-[0.3em]">
            ARCHIVO DE REGISTRO
          </h1>

          <p className="text-white/40 text-xs mt-2">
            Q-Asian Fest // Classified Entry Form
          </p>
        </div>

        {/* FORM */}
        <div className="space-y-8 font-mono">

          <div className="border-b border-white/20 pb-2">
            <input
              type="text"
              placeholder="NAME / Nombre completo"
              className="w-full bg-transparent outline-none text-white placeholder-white/40 tracking-wide"
            />
          </div>

          <div className="border-b border-white/20 pb-2">
            <input
              type="text"
              placeholder="BUSINESS / Emprendimiento"
              className="w-full bg-transparent outline-none text-white placeholder-white/40"
            />
          </div>

          <div className="border-b border-white/20 pb-2">
            <input
              type="email"
              placeholder="EMAIL / Correo electrónico"
              className="w-full bg-transparent outline-none text-white placeholder-white/40"
            />
          </div>

          <div className="border-b border-white/20 pb-2">
            <input
              type="tel"
              placeholder="CONTACT / Número de contacto"
              className="w-full bg-transparent outline-none text-white placeholder-white/40"
            />
          </div>

          <div className="border-b border-white/20 pb-2">
            <select className="w-full bg-transparent outline-none text-white/60">
              <option>TYPE / Tipo de emprendimiento</option>
              <option>Anime Merch</option>
              <option>Food & Drinks</option>
              <option>Art & Illustration</option>
              <option>Gaming / Tech</option>
              <option>Other</option>
            </select>
          </div>

          <div className="border-b border-white/20 pb-2">
            <textarea
              rows={4}
              placeholder="DETAILS / Descripción del emprendimiento..."
              className="w-full bg-transparent outline-none text-white placeholder-white/40 resize-none"
            />
          </div>

        </div>

        {/* BUTTON */}
        <div className="flex justify-center mt-12">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleSubmit}
            type="button"
            className="px-8 py-3 border border-white/40 text-white tracking-[0.3em] hover:bg-white hover:text-black transition"
          >
            CONFIRMAR REGISTRO
          </motion.button>
        </div>

      </div>
    </section>
  );
}