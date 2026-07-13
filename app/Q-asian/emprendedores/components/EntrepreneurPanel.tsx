"use client";

import { motion } from "framer-motion";

interface Entrepreneur {
  id: number;
  name: string;
  image: string;
  description: string;
  whatsapp: string;
  tags: string[];
}

interface Props {
  entrepreneur: Entrepreneur;
}

export default function EntrepreneurPanel({ entrepreneur }: Props) {
  const handleWhatsapp = () => {
    window.open(`https://wa.me/${entrepreneur.whatsapp}`, "_blank");
  };

  return (
    <motion.div
      key={entrepreneur.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="
        relative
        h-full
        overflow-hidden
        rounded-xl
        border
        border-white/10
        bg-black/40
        backdrop-blur-xl
        shadow-2xl
      "
    >
      {/* HERO */}
      <div className="relative h-[420px] overflow-hidden">
        <img
          src={entrepreneur.image}
          alt={entrepreneur.name}
          className="w-full h-full object-cover scale-105"
        />

        {/* overlay cinematic */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

        {/* glow mejorado */}
        <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-[#d1b06b]/20 blur-[120px] rounded-full" />

        {/* TEXT */}
        <div className="absolute bottom-0 left-0 p-6 z-10">
          <p className="text-[#d1b06b] tracking-[5px] uppercase text-xs mb-2">
            Emprendimiento
          </p>

          <h1 className="text-4xl md:text-6xl uppercase text-[#f5e6be] tracking-[6px] font-bold drop-shadow-lg">
            {entrepreneur.name}
          </h1>

          <p className="mt-4 text-white/90 text-base md:text-lg leading-relaxed max-w-[700px]">
            {entrepreneur.description}
          </p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-6">
        {/* TAGS */}
        <div className="flex flex-wrap gap-3">
          {entrepreneur.tags.map((tag) => (
            <span
              key={tag}
              className="
                px-4
                py-2
                bg-[#d1b06b]/10
                border
                border-[#d1b06b]/30
                text-[#f5e6be]
                uppercase
                tracking-[2px]
                text-sm
                hover:scale-105
                transition
              "
            >
              {tag}
            </span>
          ))}
        </div>

        {/* BUTTON */}
        <button
          onClick={handleWhatsapp}
          className="
            mt-8
            w-full
            py-4
            bg-[#d1b06b]
            text-black
            font-bold
            tracking-[5px]
            uppercase
            text-lg
            hover:scale-[1.02]
            hover:brightness-110
            transition-all
            duration-300
            shadow-lg
            shadow-[#d1b06b]/30
          "
        >
          CONTACTAR
        </button>
      </div>
    </motion.div>
  );
}