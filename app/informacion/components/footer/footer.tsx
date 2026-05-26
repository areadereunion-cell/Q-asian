"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="w-full bg-black border-t border-white/10">

      <div className="max-w-6xl mx-auto px-6 py-10">

        {/* TOP: UNA SOLA LÍNEA CLARA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex flex-col md:flex-row justify-between items-center gap-6"
        >

          {/* IZQUIERDA */}
          <div className="text-center md:text-left">
            <p className="text-white font-medium tracking-wide">
              Q-Asian Fest
            </p>
            <p className="text-white/50 text-xs mt-1">
              Cultura · Anime · Comunidad
            </p>
          </div>

          {/* CENTRO (LINKS LIMPIOS) */}
          <div className="flex gap-6 text-white/60 text-xs">
            <p className="hover:text-white transition">Inicio</p>
            <p className="hover:text-white transition">Emprendedores</p>
            <p className="hover:text-white transition">Registro</p>
            <p className="hover:text-white transition">Ubicación</p>
          </div>

          {/* DERECHA */}
          <div className="text-center md:text-right">
            <p className="text-white/60 text-xs">
              Quito, Ecuador
            </p>
            <p className="text-white/40 text-[10px] mt-1">
              contacto@qasianfest.com
            </p>
          </div>

        </motion.div>

        {/* LINEA FINAL */}
        <div className="mt-8 border-t border-white/10 pt-4 text-center">

          <p className="text-white/40 text-[10px] tracking-wider">
            © {new Date().getFullYear()} Q-Asian Fest. All rights reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}