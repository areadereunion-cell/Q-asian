"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function StandInscripcionPage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    nombre: "",
    stand: "",
    email: "",
    whatsapp: "",
    tipo: "",
    instagram: "",
    descripcion: "",
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

      const res = await fetch("/api/stand", {
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
          stand: "",
          email: "",
          whatsapp: "",
          tipo: "",
          instagram: "",
          descripcion: "",
          requerimientos: "",
        });

        setTimeout(() => setSent(false), 2500);
      } else {
        alert("Error al registrar stand");
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
          src="/images/gse.png"
          alt="anime background"
          className="w-full h-full object-cover scale-105"
        />
      </div>

      <div className="absolute inset-0 bg-black/35" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,59,48,0.08),transparent_70%)]" />
      <div className="absolute inset-0 opacity-[0.04] bg-[url('/images/grain.png')]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-red-500/10 blur-[160px]" />

      {/* ALERTA */}
      {sent && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed top-5 left-1/2 -translate-x-1/2 bg-[#ff3b30] text-black px-5 py-2 text-sm font-bold tracking-[0.15em] z-50"
        >
          ✔ STAND REGISTRADO
        </motion.div>
      )}

      {/* PANEL */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 w-full max-w-5xl max-h-[92vh] border border-[#ff3b30]/30 bg-[#0a0a0a] overflow-hidden shadow-[0_0_80px_rgba(255,59,48,0.18)]"
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

            <h1 className="text-3xl md:text-5xl font-black uppercase tracking-[0.12em] text-white leading-none">
              STAND REGISTRATION
            </h1>

            <div className="w-24 h-[2px] bg-[#ff3b30] mx-auto mt-2" />

            <p className="text-white/40 mt-3 text-xs tracking-[0.2em]">
              Q-ASIAN FEST • ENTREPRENEUR APPLICATION
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
              placeholder="NOMBRE DEL STAND"
              name="stand"
              value={form.stand}
              onChange={handleChange}
            />

            <InputField
              placeholder="CORREO ELECTRÓNICO"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
            />

            <InputField
              placeholder="WHATSAPP / CONTACTO"
              type="tel"
              name="whatsapp"
              value={form.whatsapp}
              onChange={handleChange}
            />

            <SelectField
              name="tipo"
              value={form.tipo}
              onChange={handleChange}
            />

            <InputField
              placeholder="INSTAGRAM / RED SOCIAL"
              name="instagram"
              value={form.instagram}
              onChange={handleChange}
            />

            <div className="md:col-span-2">
              <textarea
                rows={3}
                name="descripcion"
                value={form.descripcion}
                onChange={handleChange}
                placeholder="DESCRIBE TU STAND / PRODUCTOS"
                className="w-full bg-transparent border border-white/20 px-4 py-3 outline-none text-sm text-white placeholder:text-white/30 resize-none focus:border-[#ff3b30] transition-all"
              />
            </div>

            <div className="md:col-span-2">
              <textarea
                rows={2}
                name="requerimientos"
                value={form.requerimientos}
                onChange={handleChange}
                placeholder="PRODUCTOS DEL STAND"
                className="w-full bg-transparent border border-white/20 px-4 py-3 outline-none text-sm text-white placeholder:text-white/30 resize-none focus:border-[#ff3b30] transition-all"
              />
            </div>

          </div>

          {/* BUTTON */}
          <div className="flex justify-center mt-6">
            <motion.button
              whileHover={{ scale: 1.03, boxShadow: "0 0 30px rgba(255,59,48,0.45)" }}
              whileTap={{ scale: 0.96 }}
              onClick={handleSubmit}
              disabled={loading}
              className="px-10 py-3 bg-[#ff3b30] text-black text-sm font-black tracking-[0.2em] uppercase disabled:opacity-50"
            >
              {loading ? "ENVIANDO..." : "REGISTRAR STAND"}
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
      className="w-full bg-transparent border border-white/20 px-4 py-3 text-sm outline-none text-white placeholder:text-white/30 focus:border-[#ff3b30] transition-all"
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
      className="w-full bg-[#111111] border border-white/20 px-4 py-3 text-sm outline-none text-white/70 focus:border-[#ff3b30] transition-all"
    >
      <option value="">TIPO DE STAND</option>
      <option value="anime">Anime Merch</option>
      <option value="comida">Comida / Snacks</option>
      <option value="arte">Arte e Ilustración</option>
      <option value="figuras">Figuras / Coleccionables</option>
      <option value="gaming">Gaming</option>
      <option value="kpop">K-Pop Merch</option>
      <option value="otro">Otro</option>
    </select>
  );
}