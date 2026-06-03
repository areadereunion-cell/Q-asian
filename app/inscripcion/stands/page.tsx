"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function StandInscripcionPage() {
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    setSent(true);
    setTimeout(() => setSent(false), 2500);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black text-white flex items-center justify-center px-4 py-4">

      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <img
          src="/images/gse.png"
          alt="anime background"
          className="w-full h-full object-cover scale-105"
        />
      </div>

      {/* overlays */}
      <div className="absolute inset-0 bg-black/35" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,59,48,0.08),transparent_70%)]" />

      <div className="absolute inset-0 opacity-[0.04] bg-[url('/images/grain.png')]" />

      {/* glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-red-500/10 blur-[160px]" />

      {/* ALERTA */}
      {sent && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="
            fixed
            top-5
            left-1/2
            -translate-x-1/2
            bg-[#ff3b30]
            text-black
            px-5
            py-2
            text-sm
            font-bold
            tracking-[0.15em]
            z-50
          "
        >
          ✔ STAND REGISTRADO
        </motion.div>
      )}

      {/* PANEL */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="
          relative
          z-10
          w-full
          max-w-5xl
          max-h-[92vh]
          border
          border-[#ff3b30]/30
          bg-[#0a0a0a]
          overflow-hidden
          shadow-[0_0_80px_rgba(255,59,48,0.18)]
        "
      >
        {/* esquinas */}
        <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-[#ff3b30]" />
        <div className="absolute top-0 right-0 w-20 h-20 border-r-2 border-t-2 border-[#ff3b30]" />
        <div className="absolute bottom-0 left-0 w-20 h-20 border-l-2 border-b-2 border-[#ff3b30]" />
        <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-[#ff3b30]" />

        <div className="p-5 md:p-8">

          {/* HEADER */}
          <div className="text-center mb-6">

            <p className="text-[#ff3b30] text-xs tracking-[0.45em] mb-1">
              クアジアンフェスト
            </p>

            <h1
              className="
                text-3xl
                md:text-5xl
                font-black
                uppercase
                tracking-[0.12em]
                text-white
                leading-none
              "
              style={{
                fontFamily: "Teko, sans-serif",
              }}
            >
              STAND REGISTRATION
            </h1>

            <div className="w-24 h-[2px] bg-[#ff3b30] mx-auto mt-2" />

            <p className="text-white/40 mt-3 text-xs tracking-[0.2em]">
              Q-ASIAN FEST • ENTREPRENEUR APPLICATION
            </p>
          </div>

          {/* FORM */}
          <div className="grid md:grid-cols-2 gap-4">

            <InputField placeholder="NOMBRE COMPLETO" />
            <InputField placeholder="NOMBRE DEL STAND" />

            <InputField
              placeholder="CORREO ELECTRÓNICO"
              type="email"
            />

            <InputField
              placeholder="WHATSAPP / CONTACTO"
              type="tel"
            />

            <SelectField />

            <InputField placeholder="INSTAGRAM / RED SOCIAL" />

            <div className="md:col-span-2">
              <textarea
                rows={3}
                placeholder="DESCRIBE TU STAND / PRODUCTOS"
                className="
                  w-full
                  bg-transparent
                  border
                  border-white/20
                  px-4
                  py-3
                  outline-none
                  text-sm
                  text-white
                  placeholder:text-white/30
                  resize-none
                  focus:border-[#ff3b30]
                  transition-all
                "
              />
            </div>

            <div className="md:col-span-2">
              <textarea
                rows={2}
                placeholder="REQUERIMIENTOS ESPECIALES"
                className="
                  w-full
                  bg-transparent
                  border
                  border-white/20
                  px-4
                  py-3
                  outline-none
                  text-sm
                  text-white
                  placeholder:text-white/30
                  resize-none
                  focus:border-[#ff3b30]
                  transition-all
                "
              />
            </div>
          </div>

          {/* BUTTON */}
          <div className="flex justify-center mt-6">
            <motion.button
              whileHover={{
                scale: 1.03,
                boxShadow:
                  "0 0 30px rgba(255,59,48,0.45)",
              }}
              whileTap={{ scale: 0.96 }}
              onClick={handleSubmit}
              className="
                px-10
                py-3
                bg-[#ff3b30]
                text-black
                text-sm
                font-black
                tracking-[0.2em]
                uppercase
                transition-all
                hover:bg-[#ff4d42]
              "
            >
              Registrar Stand
            </motion.button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function InputField({
  placeholder,
  type = "text",
}: {
  placeholder: string;
  type?: string;
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="
        w-full
        bg-transparent
        border
        border-white/20
        px-4
        py-3
        text-sm
        outline-none
        text-white
        placeholder:text-white/30
        focus:border-[#ff3b30]
        transition-all
      "
    />
  );
}

function SelectField() {
  return (
    <select
      className="
        w-full
        bg-[#111111]
        border
        border-white/20
        px-4
        py-3
        text-sm
        outline-none
        text-white/70
        focus:border-[#ff3b30]
        transition-all
      "
    >
      <option>TIPO DE STAND</option>
      <option>Anime Merch</option>
      <option>Comida / Snacks</option>
      <option>Arte e Ilustración</option>
      <option>Figuras / Coleccionables</option>
      <option>Gaming</option>
      <option>K-Pop Merch</option>
      <option>Otro</option>
    </select>
  );
}