"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    setSent(true);
    setTimeout(() => setSent(false), 2500);
  };

  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center bg-white">

      {/* fondo suave */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.03),transparent_60%)]" />

      {/* ALERTA */}
      {sent && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed top-6 left-1/2 -translate-x-1/2 bg-black text-white px-5 py-2 text-sm rounded-full shadow-md"
        >
          ✔ Enviado correctamente
        </motion.div>
      )}

      <div className="relative z-10 w-full max-w-4xl px-6">

        {/* HEADER */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold text-black">
            Registro de Emprendedores
          </h2>

          <p className="mt-3 text-black/60">
            Solicitud de participación – Q-Asian Fest
          </p>
        </div>

        {/* FORM */}
        <form className="space-y-20">

          {/* FILA 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 border-b border-black/20 pb-4">
            <input
              type="text"
              placeholder="Nombre completo"
              className="w-full bg-transparent outline-none text-black placeholder-black/40"
            />

            <input
              type="text"
              placeholder="Nombre del emprendimiento"
              className="w-full bg-transparent outline-none text-black placeholder-black/40"
            />
          </div>

          {/* FILA 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 border-b border-black/20 pb-4">
            <input
              type="email"
              placeholder="Correo electrónico"
              className="w-full bg-transparent outline-none text-black placeholder-black/40"
            />

            <input
              type="tel"
              placeholder="Número de contacto"
              className="w-full bg-transparent outline-none text-black placeholder-black/40"
            />
          </div>

          {/* SELECT */}
          <div className="border-b border-black/20 pb-4">
            <select className="w-full bg-transparent outline-none text-black/60">
              <option>Tipo de producto o servicio</option>
              <option>Anime / Merch</option>
              <option>Comida / Bebidas</option>
              <option>Arte / Ilustración</option>
              <option>Gaming / Tecnología</option>
              <option>Otro</option>
            </select>
          </div>

          {/* TEXTAREA */}
          <div className="border-b border-black/20 pb-4">
            <textarea
              rows={4}
              placeholder="Cuéntanos sobre tu emprendimiento"
              className="w-full bg-transparent outline-none text-black placeholder-black/40 resize-none"
            />
          </div>

          {/* BOTÓN */}
          <div className="flex justify-center pt-8">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="button"
              onClick={handleSubmit}
              className="text-black border-b-2 border-black pb-1 font-medium tracking-wide"
            >
              Enviar solicitud
            </motion.button>
          </div>

        </form>

      </div>
    </section>
  );
}