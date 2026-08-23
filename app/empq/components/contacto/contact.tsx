"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function OpinionSection() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setSent(false);
    setError(false);

    const form = new FormData(e.currentTarget);

    const data = {
      nombre: form.get("nombre"),
      email: form.get("email"),
      mensaje: form.get("mensaje"),
    };

    try {
      const response = await fetch("/api/comentarios", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Error al enviar el comentario");
      }

      setSent(true);
      e.currentTarget.reset();
    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-[#f3f3f3] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-4xl">

        {/* ENCABEZADO DE ENCUESTA */}
        <div className="mb-6">
          <div className="mb-3 flex items-center gap-3">
            <div className="h-5 w-1 bg-red-600" />

            <span className="text-xs font-bold uppercase tracking-[0.14em] text-red-600">
              Encuesta de opinión
            </span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-[#151515] sm:text-4xl">
            Queremos conocer tu opinión
          </h2>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-black/55 sm:text-base">
            Ayúdanos a mejorar compartiendo tu experiencia y tus ideas.
            Completar esta encuesta te tomará menos de un minuto.
          </p>
        </div>

        {/* ENCUESTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.35 }}
          className="overflow-hidden border border-black/10 bg-white"
        >
          {/* BARRA */}
          <div className="h-1 bg-red-600" />

          <form onSubmit={handleSubmit} className="p-5 sm:p-8 lg:p-10">

            {/* PROGRESO / IDENTIFICADOR */}
            <div className="mb-8 flex items-center justify-between border-b border-black/10 pb-5">
              <div>
                <p className="text-sm font-semibold text-[#171717]">
                  Encuesta de la comunidad
                </p>

                <p className="mt-0.5 text-xs text-black/40">
                  Queremos escuchar lo que tienes para decir.
                </p>
              </div>

              <span className="hidden text-xs font-medium text-black/35 sm:block">
                1 de 1
              </span>
            </div>

            {/* DATOS */}
            <div className="grid gap-5 sm:grid-cols-2">

              <div>
                <label
                  htmlFor="nombre"
                  className="mb-2 block text-sm font-semibold text-[#222]"
                >
                  Tu nombre
                </label>

                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  placeholder="Escribe tu nombre"
                  required
                  autoComplete="name"
                  className="h-12 w-full rounded-md border border-black/15 bg-[#fafafa] px-4 text-sm text-[#171717] outline-none transition focus:border-red-600 focus:bg-white focus:ring-2 focus:ring-red-600/10 placeholder:text-black/30"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-[#222]"
                >
                  Correo electrónico
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="correo@ejemplo.com"
                  required
                  autoComplete="email"
                  className="h-12 w-full rounded-md border border-black/15 bg-[#fafafa] px-4 text-sm text-[#171717] outline-none transition focus:border-red-600 focus:bg-white focus:ring-2 focus:ring-red-600/10 placeholder:text-black/30"
                />
              </div>
            </div>

            {/* PREGUNTA */}
            <div className="mt-8">
              <div className="mb-3">
                <span className="text-xs font-bold uppercase tracking-wide text-red-600">
                  Pregunta
                </span>

                <h3 className="mt-1 text-xl font-semibold tracking-tight text-[#171717] sm:text-2xl">
                  ¿Qué te gustaría compartir con nosotros?
                </h3>

                <p className="mt-1 text-sm text-black/45">
                  Puede ser una sugerencia, experiencia, idea o comentario.
                </p>
              </div>

              <textarea
                id="mensaje"
                name="mensaje"
                rows={6}
                required
                placeholder="Escribe tu respuesta aquí..."
                className="w-full resize-none rounded-md border border-black/15 bg-[#fafafa] px-4 py-3 text-sm leading-6 text-[#171717] outline-none transition focus:border-red-600 focus:bg-white focus:ring-2 focus:ring-red-600/10 placeholder:text-black/30"
              />
            </div>

            {/* PIE */}
            <div className="mt-7 flex flex-col gap-4 border-t border-black/10 pt-6 sm:flex-row sm:items-center sm:justify-between">

              <p className="max-w-md text-[11px] leading-4 text-black/35">
                Tu información será utilizada únicamente para gestionar tu
                comentario.
              </p>

              <motion.button
                type="submit"
                disabled={loading}
                whileTap={!loading ? { scale: 0.98 } : {}}
                className="flex h-12 w-full shrink-0 items-center justify-center gap-2 rounded-md bg-red-600 px-7 text-sm font-semibold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
              >
                {loading ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="h-4 w-4 rounded-full border-2 border-white/30 border-t-white"
                    />
                    Enviando...
                  </>
                ) : (
                  <>
                    Enviar respuesta
                    <ArrowRight size={16} />
                  </>
                )}
              </motion.button>
            </div>

            {/* RESPUESTA */}
            <AnimatePresence mode="wait">
              {sent && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-5 flex items-center gap-2 text-sm font-medium text-green-600"
                >
                  <CheckCircle2 size={16} />
                  Gracias por compartir tu opinión.
                </motion.div>
              )}

              {error && (
                <motion.p
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-5 text-sm font-medium text-red-600"
                >
                  No pudimos enviar tu comentario. Inténtalo nuevamente.
                </motion.p>
              )}
            </AnimatePresence>

          </form>
        </motion.div>
      </div>
    </section>
  );
}