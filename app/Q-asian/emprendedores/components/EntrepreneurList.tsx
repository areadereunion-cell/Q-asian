"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface Entrepreneur {
  id: number;
  name: string;
  image: string;
  description: string;
  whatsapp: string;
  tags: string[];
}

interface Props {
  entrepreneurs: Entrepreneur[];
  selected: number;
  setSelected: (value: number) => void;
  active: boolean;
}

export default function EntrepreneurList({
  entrepreneurs,
  selected,
  setSelected,
  active,
}: Props) {
  const [animatingIndex, setAnimatingIndex] =
    useState<number | null>(null);

  const handleSelect = (index: number) => {
    if (animatingIndex !== null) return;

    setAnimatingIndex(index);

    setTimeout(() => {
      setSelected(index);
      setAnimatingIndex(null);
    }, 1000);
  };

  return (
    <div className="
        resident-panel
        h-full
        overflow-hidden
        flex
        flex-col
      "
    >
      <div className="p-5 border-b border-white/10">
        <p className="resident-subtitle">
          EMPRENDEDORES
        </p>
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-hide">
        {entrepreneurs.map((item, index) => {
          const isSelected =
            selected === index &&
            animatingIndex === null;

          const isAnimating =
            animatingIndex === index;

          return (
            <motion.button
              key={item.id}
              onClick={() => handleSelect(index)}
              animate={
                isAnimating
                  ? {
                      scale: [1, 1.02, 1],
                      boxShadow: [
                        "0 0 0px rgba(0,0,0,0)",
                        "0 0 30px rgba(209,176,107,0.8)",
                        "0 0 50px rgba(245,230,190,1)",
                        "0 0 0px rgba(0,0,0,0)",
                      ],
                    }
                  : {}
              }
              transition={{
                duration: 1,
                ease: "easeInOut",
              }}
              className={`
                relative
                w-full
                text-left
                p-5
                border-b
                border-white/10
                transition-all
                overflow-hidden
                cursor-pointer

                ${
                  isSelected
                    ? "bg-[#3d3422] text-[#f5e6be]"
                    : "text-white/60 hover:bg-white/[0.03]"
                }
              `}
            >
              {isAnimating && (
                <motion.div
                  initial={{ x: "-120%", opacity: 0 }}
                  animate={{ x: "220%", opacity: [0, 1, 0] }}
                  transition={{ duration: 0.9, ease: "easeInOut" }}
                  className="
                    absolute
                    top-0
                    left-0
                    h-full
                    w-24
                    bg-gradient-to-r
                    from-transparent
                    via-[#f5e6be]
                    to-transparent
                    skew-x-[-20deg]
                    blur-md
                    pointer-events-none
                  "
                />
              )}

              {isSelected && active && (
                <motion.div
                  layoutId="selector2"
                  className="
                    absolute
                    left-0
                    top-0
                    h-full
                    w-[5px]
                    bg-[#d1b06b]
                  "
                />
              )}

              <div className="relative z-10">
                <h3 className="uppercase tracking-[3px] text-lg">
                  {item.name}
                </h3>

                <p className="text-xs text-white/40 mt-2 line-clamp-2">
                  {item.description}
                </p>
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}