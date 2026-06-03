"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function KpopDanceInscripcionPage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    nombre: "",
    edad: "",
    whatsapp: "",
    instagram: "",
    grupo: "",
    cancion: "",
    artista: "",
    categoria: "",
    integrantes: "",
    requerimientos: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);

      const res = await fetch("/api/kpop", {
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
          instagram: "",
          grupo: "",
          cancion: "",
          artista: "",
          categoria: "",
          integrantes: "",
          requerimientos: "",
        });

        setTimeout(() => setSent(false), 2500);
      } else {
        alert("Error al registrar participación");
      }
    } catch (error) {
      console.error(error);
      alert("Error enviando formulario");
    } finally {
      setLoading(false);
    }
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

      <div className="absolute inset-0 bg-black/35" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.10),transparent_70%)]" />
      <div className="absolute inset-0 opacity-[0.04] bg-[url('/images/grain.png')]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-violet-500/10 blur-[180px]" />

      {/* ALERTA */}
      {sent && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed top-5 left-1/2 -translate-x-1/2 bg-violet-500 text-white px-5 py-2 text-sm font-bold tracking-[0.15em] z-50"
        >
          ✔ PARTICIPANTE REGISTRADO
        </motion.div>
      )}

      {/* PANEL */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 w-full max-w-5xl max-h-[92vh] border border-violet-500/30 bg-[#0b0812] overflow-hidden shadow-[0_0_80px_rgba(168,85,247,0.18)]"
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
              케이팝 댄스
            </p>

            <h1 className="text-3xl md:text-5xl font-black uppercase tracking-[0.12em] text-white leading-none">
              K-POP DANCE
            </h1>

            <div className="w-24 h-[2px] bg-violet-500 mx-auto mt-2" />

            <p className="text-white/40 mt-3 text-xs tracking-[0.2em]">
              Q-ASIAN FEST • DANCE COMPETITION
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
              placeholder="INSTAGRAM / TIKTOK"
              name="instagram"
              value={form.instagram}
              onChange={handleChange}
            />

            <InputField
              placeholder="NOMBRE DEL GRUPO"
              name="grupo"
              value={form.grupo}
              onChange={handleChange}
            />

            <InputField
              placeholder="CANCIÓN A PRESENTAR"
              name="cancion"
              value={form.cancion}
              onChange={handleChange}
            />

            <InputField
              placeholder="ARTISTA / GRUPO K-POP"
              name="artista"
              value={form.artista}
              onChange={handleChange}
            />

            <SelectField
              name="categoria"
              value={form.categoria}
              onChange={handleChange}
            />

            <div className="md:col-span-2">
              <textarea
                rows={2}
                name="integrantes"
                value={form.integrantes}
                onChange={handleChange}
                placeholder="NOMBRES DE INTEGRANTES (SI ES GRUPAL)"
                className="w-full bg-transparent border border-white/20 px-4 py-3 text-sm outline-none text-white placeholder:text-white/30 resize-none focus:border-violet-500 transition-all"
              />
            </div>

            <div className="md:col-span-2">
              <textarea
                rows={2}
                name="requerimientos"
                value={form.requerimientos}
                onChange={handleChange}
                placeholder="REQUERIMIENTOS ESPECIALES"
                className="w-full bg-transparent border border-white/20 px-4 py-3 text-sm outline-none text-white placeholder:text-white/30 resize-none focus:border-violet-500 transition-all"
              />
            </div>

          </div>

          {/* BUTTON */}
          <div className="flex justify-center mt-6">
            <motion.button
              whileHover={{ scale: 1.03, boxShadow: "0 0 30px rgba(168,85,247,0.45)" }}
              whileTap={{ scale: 0.96 }}
              onClick={handleSubmit}
              disabled={loading}
              className="px-10 py-3 bg-violet-500 text-white text-sm font-black tracking-[0.2em] uppercase disabled:opacity-50"
            >
              {loading ? "ENVIANDO..." : "REGISTRAR PARTICIPACIÓN"}
            </motion.button>
          </div>

        </div>
      </motion.div>
    </section>
  );
}

/* INPUT */
function InputField({
  placeholder,
  name,
  value,
  onChange,
  type = "text",
}: any) {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full bg-transparent border border-white/20 px-4 py-3 text-sm outline-none text-white placeholder:text-white/30 focus:border-violet-500 transition-all"
    />
  );
}

/* SELECT */
function SelectField({ name, value, onChange }: any) {
  return (
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="w-full bg-[#151020] border border-white/20 px-4 py-3 text-sm outline-none text-white/70 focus:border-violet-500 transition-all"
    >
      <option value="">CATEGORÍA</option>
      <option value="individual">INDIVIDUAL</option>
      <option value="grupal">GRUPAL</option>
    </select>
  );
}