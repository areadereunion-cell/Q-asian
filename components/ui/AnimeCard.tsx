"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

type Props = {
  title: string;
  description: string;
  image: string;
  href: string;
  glowColor: string;
};

export default function AnimeCard({
  title,
  description,
  image,
  href,
  glowColor,
}: Props) {
  return (
    <Link href={href}>
      <motion.article
        whileHover={{
          scale: 1.01,
          y: -4,
        }}
        transition={{
          duration: 0.25,
        }}
        className="
          relative
          overflow-hidden
          rounded-xl
          border-[4px]
          border-black
          h-[220px]
          sm:h-[250px]
          md:h-[290px]
          lg:h-[320px]
          cursor-pointer
          group
          bg-black
        "
        style={{
          boxShadow: `
            0 0 35px ${glowColor}25,
            inset 0 0 0 1px rgba(255,255,255,0.06)
          `,
        }}
      >
        {/* IMAGE */}
        <Image
          src={image}
          alt={title}
          fill
          priority
          className="
            object-cover
            object-[24%_center]
            md:object-[28%_center]
            transition-transform
            duration-700
            group-hover:scale-[1.03]
          "
        />

        {/* OVERLAY */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-transparent
            via-black/15
            to-black/80
          "
        />

        {/* Inner Border Glow */}
        <div
          className="
            absolute
            inset-0
            pointer-events-none
          "
          style={{
            boxShadow: `inset 0 0 0 1px ${glowColor}35`,
          }}
        />

        {/* CONTENT */}
        <div
          className="
            absolute
            inset-0
            z-10
            flex
            items-center
            justify-end
            px-5
            md:px-12
            lg:px-16
          "
        >
          <div
            className="
              w-full
              max-w-[470px]
              flex
              flex-col
              items-end
              justify-center
              text-right
            "
          >
            <h2
              className="
                font-[family-name:var(--font-anime)]
                uppercase
                font-bold
                tracking-wide
                text-5xl
                sm:text-6xl
                md:text-7xl
                lg:text-8xl
                leading-[0.9]
              "
              style={{
                color: glowColor,
                textShadow: `0 0 20px ${glowColor}40`,
              }}
            >
              {title}
            </h2>

            <p
              className="
                mt-3
                text-white/90
                text-sm
                md:text-lg
                max-w-[420px]
                leading-relaxed
              "
            >
              {description}
            </p>

            <motion.div
              whileHover={{
                x: 5,
              }}
              className="
                mt-5
                w-14
                h-14
                md:w-16
                md:h-16
                rounded-full
                border-[2px]
                flex
                items-center
                justify-center
                bg-black/30
                backdrop-blur-md
              "
              style={{
                borderColor:
                  glowColor,
                color: glowColor,
              }}
            >
              <ArrowRight
                size={30}
              />
            </motion.div>
          </div>
        </div>
      </motion.article>
    </Link>
  );
}