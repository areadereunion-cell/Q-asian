"use client";

import { useEffect, useState } from "react";
import HeroCarousel from "./HeroCarousel";
import { slides } from "./heroSlidess";
import { motion } from "framer-motion";

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const resize = () => setIsMobile(window.innerWidth < 768);
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative min-h-screen overflow-hidden flex items-center justify-center bg-gradient-to-b from-blue-950 via-slate-100 to-red-700"
      onMouseMove={(e) => {
        if (isMobile) return;
        const { innerWidth, innerHeight } = window;
        setMouse({
          x: (e.clientX - innerWidth / 2) / 45,
          y: (e.clientY - innerHeight / 2) / 45,
        });
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,.35),transparent_60%)]" />

      <div className="absolute -left-52 top-0 w-[600px] h-[600px] bg-blue-600/20 blur-[160px] rounded-full" />

      <div className="absolute -right-52 bottom-0 w-[600px] h-[600px] bg-red-600/20 blur-[160px] rounded-full" />

      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-700 via-white to-red-600" />

      <div
        className={
          isMobile
            ? "relative w-full h-screen"
            : "relative w-full max-w-7xl h-[700px] px-4 flex items-center justify-center"
        }
      >
        <HeroCarousel
          slides={slides}
          current={current}
          setCurrent={setCurrent}
          mouse={mouse}
          isMobile={isMobile}
        />
      </div>

      {!isMobile && (
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center text-white"
        >
          <span className="text-xs tracking-[0.3em] uppercase mb-2">
            Desliza
          </span>

          <div className="w-[2px] h-10 bg-white/50 rounded-full overflow-hidden">
            <motion.div
              animate={{ y: [-18, 18] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-full h-4 bg-white rounded-full"
            />
          </div>
        </motion.div>
      )}
    </section>
  );
}