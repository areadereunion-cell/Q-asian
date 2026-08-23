"use client";

import { motion } from "framer-motion";

interface Props {
  categories: string[];
  selected: number;
  setSelected: (index: number) => void;
  active?: boolean; // ✅ FIX: ahora opcional
}

export default function CategoryMenu({
  categories,
  selected,
  setSelected,
  active = true, // fallback seguro
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`
        h-full
        p-5
        flex
        flex-col
        overflow-hidden

        bg-white/[0.03]
        backdrop-blur-md

        border border-white/[0.08]
        rounded-2xl

        shadow-[0_0_40px_rgba(0,0,0,0.4)]

        transition-all
        duration-300

        ${!active ? "opacity-40 pointer-events-none" : ""}
      `}
    >
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-5"
      >
        <p className="text-white/40 tracking-[3px] text-xs">
          SELECT CATEGORY
        </p>

        <h2 className="text-white text-lg font-bold tracking-[2px]">
          EMPRENDEDORES
        </h2>
      </motion.div>

      {/* LISTA */}
      <div className="flex flex-col gap-2 flex-1">
        {categories.map((category, index) => {
          const isActive = selected === index;

          return (
            <motion.button
              key={category}
              onClick={() => setSelected(index)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.2,
                delay: index * 0.03,
              }}
              className={`
                relative
                text-left
                px-5
                py-4
                border
                uppercase
                text-[0.95rem]
                tracking-[3px]
                transition-all
                duration-200
                overflow-hidden

                ${
                  isActive
                    ? `
                      border-[#d1b06b]/60
                      bg-[#d1b06b]/5
                      text-[#f5e6be]
                      shadow-[0_0_20px_rgba(209,176,107,0.12)]
                    `
                    : `
                      border-white/5
                      bg-white/[0.02]
                      text-white/50
                      hover:text-white/90
                      hover:bg-white/[0.04]
                      hover:border-white/10
                    `
                }
              `}
            >
              {/* ACTIVE LINE */}
              {isActive && (
                <motion.div
                  layoutId="selector"
                  className="absolute left-0 top-0 h-full w-[3px] bg-[#d1b06b]"
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 30,
                  }}
                />
              )}

              {/* GLOW */}
              {isActive && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.15 }}
                  className="absolute inset-0 bg-gradient-to-r from-[#d1b06b]/20 to-transparent pointer-events-none"
                />
              )}

              {category}
            </motion.button>
          );
        })}
      </div>

      {/* FOOTER */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="
          mt-auto
          border-t
          border-white/10
          pt-4
          text-xs
          text-white/30
          uppercase
          tracking-[2px]
          leading-6
        "
      >
        ↑ ↓ Navigate <br />
        W S Alternative
      </motion.div>
    </motion.div>
  );
}