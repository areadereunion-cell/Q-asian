"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function KpopDanceInscripcionPage() {
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
          src="/images/kpop.png"
          alt="kpop dance background"
          className="w-full h-full object-cover scale-105"
        />
      </div>

      {/* overlays */}
      <div className="absolute inset-0 bg-black/35" />

      {/* glow morado */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.10),transparent_70%)]" />

      <div className="absolute inset-0 opacity-[0.04] bg-[url('/images/grain.png')]" />

      {/* purple glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-violet-500/10 blur-[180px]" />

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
            bg-violet-500
            text-white
            px-5
            py-2
            text-sm
            font-bold
            tracking-[0.15em]
            z-50
          "
        >
          ✔ PARTICIPANTE REGISTRADO
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
          border-violet-500/30
          bg-[#0b0812]
          overflow-hidden
          shadow-[0_0_80px_rgba(168,85,247,0.18)]
        "
      >
        {/* esquinas */}
        <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-violet-500" />
        <div className="absolute top-0 right-0 w-20 h-20 border-r-2 border-t-2 border-violet-500" />
        <div className="absolute bottom-0 left-0 w-20 h-20 border-l-2 border-b-2 border-violet-500" />
        <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-violet-500" />

        <div className="p-5 md:p-8">

          {/* HEADER */}
          <div className="text-center mb-6">

            <p className="text-violet-300 text-xs tracking-[0.45em] mb-1">
              ケーポップダンス
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
              K-POP DANCE
            </h1>

            <div className="w-24 h-[2px] bg-violet-500 mx-auto mt-2" />

            <p className="text-white/40 mt-3 text-xs tracking-[0.2em]">
              Q-ASIAN FEST • DANCE COMPETITION
            </p>
          </div>

          {/* FORM */}
          <div className="grid md:grid-cols-2 gap-4">

            <InputField placeholder="NOMBRE COMPLETO" />

            <InputField
              placeholder="EDAD"
              type="number"
            />

            <InputField placeholder="WHATSAPP / CONTACTO" />

            <InputField placeholder="INSTAGRAM / TIKTOK" />

            <InputField placeholder="NOMBRE DEL GRUPO (SI APLICA)" />

            <InputField placeholder="CANCIÓN A PRESENTAR" />

            <InputField placeholder="ARTISTA / GRUPO K-POP" />

            <SelectField />

            <div className="md:col-span-2">
              <textarea
                rows={2}
                placeholder="NOMBRES DE INTEGRANTES (SI ES GRUPAL)"
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
                  resize-none
                  focus:border-violet-500
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
                  text-sm
                  outline-none
                  text-white
                  placeholder:text-white/30
                  resize-none
                  focus:border-violet-500
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
                  "0 0 30px rgba(168,85,247,0.45)",
              }}
              whileTap={{ scale: 0.96 }}
              onClick={handleSubmit}
              className="
                px-10
                py-3
                bg-violet-500
                text-white
                text-sm
                font-black
                tracking-[0.2em]
                uppercase
                transition-all
                hover:bg-violet-400
              "
            >
              Registrar Participación
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
        focus:border-violet-500
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
        bg-[#151020]
        border
        border-white/20
        px-4
        py-3
        text-sm
        outline-none
        text-white/70
        focus:border-violet-500
        transition-all
      "
    >
      <option>CATEGORÍA</option>
      <option>INDIVIDUAL</option>
      <option>GRUPAL</option>
    </select>
  );
}