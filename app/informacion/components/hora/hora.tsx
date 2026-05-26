"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CountdownSection() {
  const targetDate = new Date("2026-07-07T00:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      setTimeLeft({
        days: Math.max(Math.floor(distance / (1000 * 60 * 60 * 24)), 0),
        hours: Math.max(Math.floor((distance / (1000 * 60 * 60)) % 24), 0),
        minutes: Math.max(Math.floor((distance / (1000 * 60)) % 60), 0),
        seconds: Math.max(Math.floor((distance / 1000) % 60), 0),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-[75vh] overflow-hidden flex items-center justify-center">

      {/* 🌸 BACKGROUND GIF / SAKURA */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage: "url('/images/sakura-leaves.gif')",
        }}
      />

      {/* overlay suave japonés */}
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 bg-gradient-to-b from-pink-200/10 via-transparent to-black/50" />

      {/* CONTENIDO */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center">

        {/* HEADER estilo japonés */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="space-y-1"
        >
          <p className="text-white/70 text-sm tracking-[0.3em] uppercase">
            公式イベント
          </p>

          <h2 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
            Q-Asian Fest
          </h2>

          <p className="text-white/70 text-sm md:text-base">
            7月7日 • Anime · Culture · Experience
          </p>
        </motion.div>

        {/* CALENDARIO */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-10">

          {/* FECHA estilo japonés */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="w-48 h-48 md:w-56 md:h-56 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md flex flex-col items-center justify-center shadow-xl"
          >
            <p className="text-white/70 text-sm tracking-widest">JULIO</p>

            <p className="text-6xl font-extrabold text-white leading-none">
              07
            </p>

            <p className="text-white/60 text-sm mt-1">2026</p>
          </motion.div>

          {/* COUNTDOWN */}
          <div className="grid grid-cols-2 gap-4">

            {[
              { label: "Días", value: timeLeft.days },
              { label: "Horas", value: timeLeft.hours },
              { label: "Min", value: timeLeft.minutes },
              { label: "Seg", value: timeLeft.seconds },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="w-28 h-28 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex flex-col items-center justify-center"
              >
                <p className="text-2xl font-bold text-white">
                  {item.value}
                </p>
                <p className="text-white/60 text-sm">
                  {item.label}
                </p>
              </motion.div>
            ))}

          </div>

        </div>

        {/* frase estilo japonés */}
        <p className="mt-10 text-white/70 text-sm md:text-base italic">
          “Un día que florece como la sakura… y desaparece en memoria eterna”
        </p>

      </div>
    </section>
  );
}