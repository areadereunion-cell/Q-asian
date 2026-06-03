"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CountdownSection() {
  const targetDate = new Date(
    "2026-07-04T08:00:00"
  ).getTime();

  const [timeLeft, setTimeLeft] =
    useState({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });

  useEffect(() => {
    const interval = setInterval(() => {
      const now =
        new Date().getTime();

      const distance =
        targetDate - now;

      setTimeLeft({
        days: Math.max(
          Math.floor(
            distance /
              (1000 *
                60 *
                60 *
                24)
          ),
          0
        ),
        hours: Math.max(
          Math.floor(
            (distance /
              (1000 *
                60 *
                60)) %
              24
          ),
          0
        ),
        minutes: Math.max(
          Math.floor(
            (distance /
              (1000 * 60)) %
              60
          ),
          0
        ),
        seconds: Math.max(
          Math.floor(
            (distance /
              1000) %
              60
          ),
          0
        ),
      });
    }, 1000);

    return () =>
      clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[85vh] overflow-hidden flex items-center justify-center">

      {/* Fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/images/sakura-leaves.gif')",
        }}
      />

      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#3a1010]/20 via-black/10 to-black/75" />

      <div className="relative z-10 w-full max-w-6xl px-6">

        {/* HEADER */}
        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          className="text-center mb-14"
        >
          <p className="text-[#ffb5b5] text-sm tracking-[0.35em] uppercase">
            Evento Oficial
          </p>

          <h2
            className="
              text-5xl
              md:text-7xl
              text-white
              font-black
              leading-none
            "
            style={{
              fontFamily:
                "Teko, sans-serif",
            }}
          >
            Q-ASIAN FEST
          </h2>

          <p className="text-white/60 text-sm md:text-base mt-2">
            Anime • Cosplay • K-Pop • Cultura Asiática
          </p>
        </motion.div>

        {/* CONTENT */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-14">

          {/* CALENDARIO JAPONÉS */}
          <motion.div
            whileHover={{
              scale: 1.02,
            }}
            className="
              relative
              w-[320px]
              h-[430px]
              bg-[#f4ecdf]
              border
              border-black/10
              shadow-[0_30px_80px_rgba(0,0,0,0.45)]
              overflow-hidden
            "
          >
            {/* textura */}
            <div className="absolute inset-0 opacity-[0.04] bg-[url('/images/grain.png')]" />

            {/* top */}
            <div className="border-b border-black/10 text-center py-6 px-6">
              <p className="text-neutral-500 text-xs tracking-[0.35em] uppercase">
                Próximo Evento
              </p>

              <p className="text-black/50 text-sm mt-2">
                Martes • Julio
              </p>
            </div>

            {/* número gigante estilo japonés */}
            <div className="flex flex-col items-center justify-center h-[210px]">
              <p className="text-[8rem] text-black leading-none font-light">
                七
              </p>

              <div className="w-24 h-px bg-black/20 my-4" />

              <p className="text-black text-lg tracking-[0.2em] uppercase">
                4 de Julio
              </p>
            </div>

            {/* sello rojo japonés */}
            <div className="absolute bottom-8 left-8">
              <div
                className="
                  w-20
                  h-20
                  border-2
                  border-[#9b0000]
                  text-[#9b0000]
                  flex
                  items-center
                  justify-center
                  rotate-[-8deg]
                  text-2xl
                  font-bold
                "
              >
                祭
              </div>
            </div>

            {/* fecha derecha */}
            <div className="absolute bottom-8 right-8 text-right">
              <p className="text-black/50 text-xs uppercase tracking-[0.25em]">
                Julio
              </p>

              <p className="text-black text-5xl font-bold leading-none">
                04
              </p>

              <p className="text-black/40 text-sm">
                2026
              </p>
            </div>
          </motion.div>

          {/* COUNTDOWN */}
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                label: "Días",
                value:
                  timeLeft.days,
              },
              {
                label: "Horas",
                value:
                  timeLeft.hours,
              },
              {
                label: "Min",
                value:
                  timeLeft.minutes,
              },
              {
                label: "Seg",
                value:
                  timeLeft.seconds,
              },
            ].map(
              (item, i) => (
                <motion.div
                  key={i}
                  whileHover={{
                    scale: 1.05,
                  }}
                  className="
                    w-32
                    h-32
                    bg-white/10
                    backdrop-blur-xl
                    border
                    border-white/10
                    flex
                    flex-col
                    items-center
                    justify-center
                  "
                >
                  <p className="text-4xl font-bold text-white">
                    {
                      item.value
                    }
                  </p>

                  <p className="text-white/60 uppercase text-xs tracking-[0.2em] mt-2">
                    {
                      item.label
                    }
                  </p>
                </motion.div>
              )
            )}
          </div>
        </div>

        {/* frase */}
        <p className="text-center text-white/55 italic mt-12 text-sm md:text-base">
          “Una experiencia creada para fans del anime, cosplay y cultura asiática.”
        </p>
      </div>
    </section>
  );
}