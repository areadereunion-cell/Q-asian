"use client";

import { motion } from "framer-motion";

export default function EmprendedoresPage() {
  return (
    <section className="w-full min-h-screen bg-black text-white flex items-center justify-center relative overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <img
          src="/images/bg.png"
          alt="background"
          className="w-full h-full object-cover opacity-25 scale-110"
        />
      </div>

      {/* OVERLAY OSCURO */}
      <div className="absolute inset-0 bg-black/70" />

      {/* CONTENIDO */}
      <div className="relative z-10 w-full max-w-5xl px-6 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

          {/* IZQUIERDA */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >

            <h1 className="text-4xl md:text-6xl font-extrabold">
              Chulla Q
            </h1>

            <p className="text-white/50 text-sm tracking-wide">
              Emprendimiento de cultura coleccionable y anime
            </p>

            <div className="space-y-5 text-white/70 leading-relaxed text-sm md:text-base">

              <p>
                <b className="text-white">Chulla Q</b> es un emprendimiento enfocado en la venta de
                álbumes coleccionables, figuras y productos inspirados en la cultura anime y
                la cultura pop asiática.
              </p>

              <p>
                Su propuesta busca conectar a los fans con piezas únicas, ediciones limitadas
                y colecciones temáticas de personajes, series y momentos icónicos del anime.
              </p>

              <p>
                Dentro del <b className="text-white">Q-Asian Fest</b>, ofrece una experiencia de colección
                donde los asistentes pueden descubrir, intercambiar y adquirir artículos exclusivos.
              </p>
            </div>

            {/* TAGS */}
            <div className="flex flex-wrap gap-2 pt-3">
              <span className="text-xs border border-white/20 px-3 py-1 rounded-full text-white/60">
                Álbumes
              </span>
              <span className="text-xs border border-white/20 px-3 py-1 rounded-full text-white/60">
                Anime
              </span>
              <span className="text-xs border border-white/20 px-3 py-1 rounded-full text-white/60">
                Coleccionables
              </span>
            </div>

            {/* CTA WHATSAPP */}
            <div className="pt-6 space-y-3">
              <p className="text-white/70 text-sm">
                ¿Quieres conocer más productos y sobre el emprendimiento? Escríbenos.
              </p>

              <a
                href="https://wa.me/593987194178"
                target="_blank"
                className="inline-block px-6 py-3 border border-green-400 text-green-300 hover:bg-green-400 hover:text-black transition tracking-wide"
              >
                ESCRIBIR POR WHATSAPP
              </a>
            </div>

          </motion.div>

          {/* DERECHA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex justify-center"
          >

            <div className="w-full max-w-md relative">

              <img
                src="/images/emprendedor-chulla-q.png"
                alt="Chulla Q Emprendedor"
                className="w-full object-cover rounded-xl"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl" />
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}