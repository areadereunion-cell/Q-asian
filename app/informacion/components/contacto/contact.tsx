"use client";

import { motion } from "framer-motion";

const activities = [
  {
    title: "Gaming Tournament",
    subtitle:
      "Participa en competencias épicas, torneos y desafíos entre jugadores.",
    image: "/activities/gaming.png",
    glow: "from-red-600/40",
  },
  {
    title: "K-Pop Dance",
    subtitle:
      "Shows, performance y concursos de coreografías para demostrar talento.",
    image: "/activities/kpop.png",
    glow: "from-pink-500/40",
  },
  {
    title: "Cosplay Contest",
    subtitle:
      "Conviértete en tu personaje favorito y compite por premios.",
    image: "/activities/cosplay.png",
    glow: "from-orange-500/40",
  },
];

export default function ActivitiesSection() {
  return (
    <section className="relative isolate w-full overflow-hidden bg-white mt-32 pt-56 md:pt-64 pb-32 md:pb-40">

      {/* BACKGROUNDS */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,0,0,0.08),transparent_45%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,120,0,0.08),transparent_35%)]" />

      {/* BIG TITLE BACKGROUND */}
      <h1 className="absolute left-1/2 top-10 -translate-x-1/2 text-[70px] md:text-[240px] font-black text-black/[0.03] tracking-[-6px] md:tracking-[-10px] pointer-events-none select-none whitespace-nowrap">
        ACTIVITIES
      </h1>

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-14 md:mb-24"
        >
          <p className="uppercase tracking-[0.35em] text-red-500 font-bold text-xs md:text-sm">
            EVENT EXPERIENCE
          </p>

          <h2 className="text-4xl md:text-7xl lg:text-[110px] font-black text-black mt-5 leading-[1]">
            Actividades del{" "}
            <span className="bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 text-transparent bg-clip-text">
              Q-Asian Fest
            </span>
          </h2>

          <p className="text-black/60 text-sm md:text-[22px] leading-relaxed max-w-[900px] mx-auto mt-6">
            Una experiencia completa con competencias, espectáculos y actividades
            diseñadas para la comunidad anime, gaming y cultura asiática.
          </p>
        </motion.div>

        {/* CARDS */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-0">

          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group relative w-full md:flex-1 h-[380px] md:h-[700px] overflow-hidden"
            >

              {/* IMAGE */}
              <img
                src={activity.image}
                alt={activity.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/55 group-hover:bg-black/35 transition duration-500" />

              {/* GLOW */}
              <div
                className={`absolute inset-0 bg-gradient-to-t ${activity.glow} via-transparent to-transparent opacity-70 md:opacity-0 md:group-hover:opacity-100 transition duration-500`}
              />

              {/* NUMBER */}
              <div className="absolute top-4 right-4 md:top-10 md:right-10 text-white/10 text-[80px] md:text-[120px] font-black">
                0{index + 1}
              </div>

              {/* CONTENT */}
              <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-14">

                <p className="uppercase tracking-[0.3em] text-white/70 text-[10px] md:text-sm mb-3 md:mb-5">
                  EVENT ACTIVITY
                </p>

                <h3 className="text-white text-2xl md:text-5xl font-black leading-tight mb-3 md:mb-5">
                  {activity.title}
                </h3>

                <p className="text-white/75 text-sm md:text-lg max-w-md">
                  {activity.subtitle}
                </p>

                <div className="mt-6 md:mt-8 flex items-center gap-3 text-white font-semibold text-sm md:text-base">
                  <span>Explorar actividad</span>
                  <span className="text-xl md:text-2xl">→</span>
                </div>
              </div>

              {/* BORDER */}
              <div className="absolute inset-0 border border-white/0 group-hover:border-white/20 transition duration-500" />
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}