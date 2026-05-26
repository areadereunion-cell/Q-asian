"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function EntrepreneursSection() {
  const router = useRouter();

  return (
    <section className="relative w-full py-20 overflow-hidden">

      {/* fondo naranja */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/90 via-orange-400/80 to-orange-500/90" />
      <div className="absolute inset-0 bg-black/30" />

      {/* contenido centrado */}
      <div className="relative z-10 w-full flex items-center justify-center px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl"
        >

          <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
            Emprendedores que dan vida al festival
          </h2>

          <p className="mt-6 text-white/90 text-sm md:text-base leading-relaxed">
            En el <b>Q-Asian Fest</b>, los emprendedores no son solo vendedores,
            son creadores de experiencias que transforman el evento en un espacio vivo.
          </p>

          <p className="mt-4 text-white/80 text-sm md:text-base leading-relaxed">
            Cada stand representa una idea, una pasión o un sueño que conecta con la cultura anime,
            el gaming y la creatividad juvenil.
          </p>

          <p className="mt-4 text-white/70 text-sm md:text-base leading-relaxed">
            Aquí no solo se compra o se vende… se explora, se comparte y se construye comunidad.
          </p>

          {/* BOTÓN */}
          <div className="mt-8 flex justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => router.push("/emprendedores")}
              className="px-6 py-3 rounded-full bg-black/30 border border-white/30 text-white font-medium backdrop-blur-md hover:bg-black/40 transition"
            >
              Conoce más
            </motion.button>
          </div>

        </motion.div>

      </div>

    </section>
  );
}