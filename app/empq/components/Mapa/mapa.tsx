"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function LocationSection() {
  const [unlocked, setUnlocked] = useState(false);

  const mapsUrl =
    "https://www.google.com/maps?q=Av.+Quitumbe+Ñan,+170146+Quito,+Ecuador&output=embed";

  return (
    <section
      className="
      relative
      min-h-screen
      flex
      items-center
      justify-center
      bg-white
      overflow-hidden
      py-32
      "
    >

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: .8 }}
        className="
        relative
        w-full
        max-w-6xl
        h-[700px]
        mx-6
        overflow-hidden
        border
        border-black/10
        shadow-[0_30px_80px_rgba(0,0,0,.15)]
        "
      >

        {/* MAPA */}

        <iframe
          src={mapsUrl}
          className="
          absolute
          inset-0
          w-full
          h-full
          grayscale
          contrast-125
          "
          loading="lazy"
        />


        {/* CAPA BLOQUEADA */}

        <motion.div
          initial={false}
          animate={{
            opacity: unlocked ? 0 : 1,
            pointerEvents: unlocked ? "none" : "auto",
          }}
          transition={{
            duration: .6,
          }}
          onClick={() => setUnlocked(true)}
          className="
          absolute
          inset-0
          bg-white/75
          backdrop-blur-md
          flex
          items-center
          justify-center
          cursor-pointer
          z-20
          "
        >

          <div className="text-center">

            <div
              className="
              mx-auto
              mb-8
              w-20
              h-20
              rounded-full
              border
              border-red-600/40
              flex
              items-center
              justify-center
              "
            >

              <span
                className="
                w-4
                h-4
                bg-red-600
                rounded-full
                animate-pulse
                "
              />

            </div>


            <p
              className="
              text-red-600
              text-xs
              uppercase
              tracking-[0.35em]
              mb-5
              "
            >
              Ubicación del evento
            </p>


            <h2
              className="
              text-black
              text-4xl
              md:text-6xl
              font-light
              tracking-tight
              "
            >
              Nuestra ubicación
            </h2>


            <p
              className="
              text-black/50
              mt-5
              "
            >
              Haz click para visualizar el mapa
            </p>

          </div>

        </motion.div>


        {/* TITULO SUPERIOR */}

        <div
          className="
          absolute
          top-0
          left-0
          right-0
          z-10
          bg-gradient-to-b
          from-white/90
          to-transparent
          p-8
          text-center
          "
        >

          <p
            className="
            text-red-600
            text-xs
            tracking-[0.4em]
            uppercase
            "
          >
            Encuéntranos aquí
          </p>

        </div>


      </motion.div>

    </section>
  );
}