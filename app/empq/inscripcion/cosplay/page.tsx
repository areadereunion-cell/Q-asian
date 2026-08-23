"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function CosplayInscripcionPage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    nombre: "",
    edad: "",
    whatsapp: "",
    redes: "",
    personaje: "",
    anime: "",
    descripcion: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);

      const res = await fetch("/api/cosplay", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setSent(true);

        setForm({
          nombre: "",
          edad: "",
          whatsapp: "",
          redes: "",
          personaje: "",
          anime: "",
          descripcion: "",
        });

        setTimeout(() => setSent(false), 2500);
      } else {
        alert("Error al registrar cosplay");
      }
    } catch (error) {
      console.error(error);
      alert("Error al enviar formulario");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black text-white flex items-center justify-center px-4 py-4">

      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <img
          src="/images/cosplay-bg.png"
          alt="cosplay background"
          className="w-full h-full object-cover scale-105"
        />
      </div>

      <div className="absolute inset-0 bg-black/35" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.08),transparent_70%)]" />
      <div className="absolute inset-0 opacity-[0.04] bg-[url('/images/grain.png')]" />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-cyan-400/10 blur-[180px]" />

      {/* ALERTA */}
      {sent && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed top-5 left-1/2 -translate-x-1/2 bg-cyan-400 text-black px-5 py-2 text-sm font-bold tracking-[0.15em] z-50"
        >
          ✔ COSPLAYER REGISTRADO
        </motion.div>
      )}

      {/* PANEL */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 w-full max-w-5xl max-h-[92vh] border border-cyan-400/30 bg-[#080b10] overflow-hidden shadow-[0_0_80px_rgba(34,211,238,0.15)]"
      >
        <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-cyan-400" />
        <div className="absolute top-0 right-0 w-20 h-20 border-r-2 border-t-2 border-cyan-400" />
        <div className="absolute bottom-0 left-0 w-20 h-20 border-l-2 border-b-2 border-cyan-400" />
        <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-cyan-400" />

        <div className="p-5 md:p-8">

          {/* HEADER */}
          <div className="text-center mb-6">
            <p className="text-cyan-300 text-xs tracking-[0.45em] mb-1">
              コスプレコンテスト
            </p>

            <h1 className="text-3xl md:text-5xl font-black uppercase tracking-[0.12em] text-white leading-none">
              COSPLAY CONTEST
            </h1>

            <div className="w-24 h-[2px] bg-cyan-400 mx-auto mt-2" />

            <p className="text-white/40 mt-3 text-xs tracking-[0.2em]">
              Q-ASIAN FEST • INDIVIDUAL CATEGORY
            </p>
          </div>

          {/* FORM */}
          <div className="grid md:grid-cols-2 gap-4">

            <InputField
              placeholder="NOMBRE COMPLETO"
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
            />

            <InputField
              placeholder="EDAD"
              type="number"
              name="edad"
              value={form.edad}
              onChange={handleChange}
            />

            <InputField
              placeholder="WHATSAPP / CONTACTO"
              name="whatsapp"
              value={form.whatsapp}
              onChange={handleChange}
            />

            <InputField
              placeholder="INSTAGRAM / FACEBOOK"
              name="redes"
              value={form.redes}
              onChange={handleChange}
            />

            <InputField
              placeholder="PERSONAJE"
              name="personaje"
              value={form.personaje}
              onChange={handleChange}
            />

            <InputField
              placeholder="ANIME / VIDEOJUEGO / SERIE"
              name="anime"
              value={form.anime}
              onChange={handleChange}
            />

            <div className="md:col-span-2">
              <textarea
                rows={3}
                name="descripcion"
                value={form.descripcion}
                onChange={handleChange}
                placeholder="DESCRIBE TU COSPLAY / PERFORMANCE"
                className="w-full bg-transparent border border-white/20 px-4 py-3 text-sm outline-none text-white placeholder:text-white/30 resize-none focus:border-cyan-400 transition-all"
              />
            </div>
          </div>

          {/* BUTTON */}
          <div className="flex justify-center mt-6">
            <motion.button
              whileHover={{ scale: 1.03, boxShadow: "0 0 30px rgba(34,211,238,0.4)" }}
              whileTap={{ scale: 0.96 }}
              onClick={handleSubmit}
              disabled={loading}
              className="px-10 py-3 bg-cyan-400 text-black text-sm font-black tracking-[0.2em] uppercase disabled:opacity-50"
            >
              {loading ? "ENVIANDO..." : "REGISTRAR COSPLAY"}
            </motion.button>
          </div>

        </div>
      </motion.div>
    </section>
  );
}

function InputField({
  placeholder,
  name,
  value,
  onChange,
  type = "text",
}: {
  placeholder: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}) {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full bg-transparent border border-white/20 px-4 py-3 text-sm outline-none text-white placeholder:text-white/30 focus:border-cyan-400 transition-all"
    />
  );
}