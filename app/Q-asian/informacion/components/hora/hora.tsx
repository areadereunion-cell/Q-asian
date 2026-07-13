"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CountdownSection() {
  const targetDate = new Date("2026-07-04T08:00:00").getTime();

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
  }, [targetDate]);

  const month = {
    name: "7月",
    days: 31,
    start: 3,
  };

  const weekDays = ["L", "M", "X", "J", "V", "S", "D"];

  const cells = [];

  for (let i = 0; i < month.start; i++) {
    cells.push(<div key={`empty-${i}`} />);
  }

  for (let day = 1; day <= month.days; day++) {
    const isEventDay = day === 4 || day === 5;

    cells.push(
      <div
        key={day}
        className={`w-7 h-7 md:w-8 md:h-8 flex items-center justify-center text-[11px] md:text-xs transition-all ${
          isEventDay
            ? "bg-[#c90000] text-white rounded-full font-bold shadow-md"
            : "text-black/70"
        }`}
      >
        {day}
      </div>
    );
  }

  return (
    <section className="relative overflow-hidden pt-24 pb-40 w-full">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/tatami.jpg')" }}
      />
      <div className="absolute inset-0 bg-black/60" />

      {/* Contenedor */}
      <div className="relative z-10 w-full flex justify-center px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="w-full max-w-7xl bg-[#f6f4ef] border-[3px] border-black shadow-[8px_8px_0px_#000] p-6 md:p-10 flex flex-col items-center"
        >
          {/* Countdown */}
          <div className="w-full flex justify-center items-center flex-wrap gap-6 md:gap-10 mb-10 text-black">
            {[
              { label: "DÍAS", value: timeLeft.days },
              { label: "HORAS", value: timeLeft.hours },
              { label: "MIN", value: timeLeft.minutes },
              { label: "SEG", value: timeLeft.seconds },
            ].map((t, i) => (
              <div key={i} className="text-center">
                <h2 className="text-5xl md:text-7xl leading-none font-serif">
                  {String(t.value).padStart(2, "0")}
                </h2>
                <span className="text-[10px] tracking-[0.3em] text-black/60">
                  {t.label}
                </span>
              </div>
            ))}
          </div>

          {/* Calendar */}
          <div className="w-full max-w-md flex flex-col items-center">
            <h3 className="text-center text-2xl mb-3 text-black/80">
              {month.name}
            </h3>

            <div className="grid grid-cols-7 w-full text-center text-[10px] mb-2 text-black/50">
              {weekDays.map((d) => (
                <div key={d}>{d}</div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-y-2 justify-items-center w-full">
              {cells}
            </div>
          </div>

          {/* Footer */}
          <p className="text-center mt-8 text-black/50 italic">
            “El festival está cada vez más cerca”
          </p>
        </motion.div>
      </div>
    </section>
  );
}