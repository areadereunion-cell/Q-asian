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
    <section className="relative w-full overflow-hidden bg-white py-32">

      {/* FONDO */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,0,0,0.08),transparent_45%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,120,0,0.08),transparent_35%)]" />

      {/* TEXTO GIGANTE DE FONDO */}
      <h1 className="absolute left-1/2 top-20 -translate-x-1/2 text-[120px] md:text-[240px] font-black text-black/[0.03] tracking-[-10px] pointer-events-none select-none whitespace-nowrap">
        ACTIVITIES
      </h1>

      <div className="relative z-10 w-full">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="w-full flex flex-col items-center text-center px-6 mb-24"
        >
          <p className="uppercase tracking-[0.4em] text-red-500 font-bold text-sm">
            EVENT EXPERIENCE
          </p>

          <h2 className="text-5xl md:text-7xl lg:text-[110px] font-black text-black mt-6 leading-[0.9]">
            Actividades del
            <br />
            <span className="bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 text-transparent bg-clip-text">
              Q-Asian Fest
            </span>
          </h2>

          {/* TEXTO BIEN CENTRADO */}
          <div className="w-full flex justify-center mt-8">
            <p className="text-black/60 text-lg md:text-[28px] leading-relaxed text-center max-w-[900px]">
              Una experiencia completa con competencias, espectáculos y
              actividades diseñadas para la comunidad anime, gaming y cultura
              asiática.
            </p>
          </div>
        </motion.div>

        {/* CARDS FULL WIDTH */}
        <div className="w-full flex flex-col lg:flex-row">

          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ flex: 1.25 }}
              className="group relative h-[700px] flex-1 overflow-hidden cursor-pointer transition-all duration-700"
            >

              {/* IMAGEN PNG */}
              <img
                src={activity.image}
                alt={activity.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/55 group-hover:bg-black/35 transition duration-500" />

              {/* GLOW */}
              <div
                className={`absolute inset-0 bg-gradient-to-t ${activity.glow} via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500`}
              />

              {/* NUMERO */}
              <div className="absolute top-10 right-10 text-white/10 text-[120px] font-black leading-none">
                0{index + 1}
              </div>

              {/* CONTENIDO */}
              <div className="relative z-10 h-full flex flex-col justify-end p-10 md:p-14">

                <p className="uppercase tracking-[0.3em] text-white/70 text-sm mb-5">
                  EVENT ACTIVITY
                </p>

                <h3 className="text-white text-4xl md:text-5xl font-black leading-tight mb-5">
                  {activity.title}
                </h3>

                <p className="text-white/75 text-lg max-w-md leading-relaxed">
                  {activity.subtitle}
                </p>

                {/* CTA */}
                <div className="mt-8 flex items-center gap-4 text-white font-semibold group-hover:translate-x-3 transition duration-500">
                  <span>Explorar actividad</span>
                  <span className="text-2xl">→</span>
                </div>
              </div>

              {/* BORDE HOVER */}
              <div className="absolute inset-0 border border-white/0 group-hover:border-white/20 transition duration-500" />
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}