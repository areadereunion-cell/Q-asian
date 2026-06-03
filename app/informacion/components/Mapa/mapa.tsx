"use client";

import { motion } from "framer-motion";

export default function LocationSection() {
  const mapsUrl =
    "https://www.google.com/maps/place/Shinobi+Digital+Solutions/@-0.2944011,-78.5511438,17z/data=!3m1!4b1!4m9!1m2!2m1!1splataforma+quitumbe+sur!3m5!1s0x91d5a303ba35c8bb:0x992573958d960fcb!8m2!3d-0.2944011!4d-78.5462729!16s%2Fg%2F11xlx97pmw?entry=ttu";

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-black overflow-hidden py-24">

      {/* FONDO */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,100,0,0.12),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(255,0,0,0.08),transparent_60%)]" />

      {/* partículas */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 left-20 w-2 h-2 bg-orange-400 rounded-full blur-sm animate-pulse" />
        <div className="absolute top-40 right-32 w-2 h-2 bg-red-500 rounded-full blur-sm animate-pulse" />
        <div className="absolute bottom-28 left-40 w-2 h-2 bg-yellow-300 rounded-full blur-sm animate-pulse" />
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-orange-500 rounded-full blur-sm animate-pulse" />
      </div>

      <div className="relative z-10 w-full max-w-7xl px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-black tracking-tight text-white uppercase">
            Radar del Evento
          </h2>

          <p className="mt-4 text-white/50 text-lg">
            Localiza el Q-Asian Fest como una esfera del dragón
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* INFO */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="border border-orange-500/20 bg-white/[0.03] backdrop-blur-xl rounded-[30px] p-8 shadow-[0_0_40px_rgba(255,120,0,0.08)]">

              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-orange-500 animate-pulse" />
                <p className="uppercase tracking-[0.25em] text-orange-400 text-sm">
                  Señal detectada
                </p>
              </div>

              <h3 className="text-3xl font-bold text-white mb-5">
                Q-Asian Fest
              </h3>

              <p className="text-white/70 leading-relaxed">
                Vive la experiencia anime definitiva con cosplay, stands,
                emprendimientos, concursos y mucho más.
              </p>

              <div className="mt-8 space-y-6">

                <div className="flex gap-4 items-start">
                  <div className="min-w-[48px] h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-xl">
                    📍
                  </div>

                  <div>
                    <p className="text-white font-semibold">
                      Ubicación detectada
                    </p>
                    <p className="text-white/50 text-sm leading-relaxed">
                      Shinobi Digital Solutions <br />
                      Plataforma Quitumbe Sur, Quito, Ecuador
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="min-w-[48px] h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-xl">
                    🕒
                  </div>

                  <div>
                    <p className="text-white font-semibold">
                      Horario
                    </p>
                    <p className="text-white/50 text-sm">
                      10:00 AM – 8:00 PM
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

          {/* RADAR */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex items-center justify-center"
          >

            <div className="absolute w-[500px] h-[500px] rounded-full bg-green-500/10 blur-[100px]" />

            {/* CLICKABLE MAP */}
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block cursor-pointer"
            >
              <div className="relative w-[420px] h-[420px] rounded-full border border-green-500/30 bg-black/70 overflow-hidden shadow-[0_0_60px_rgba(0,255,120,0.15)] transition-all duration-300 group-hover:scale-[1.03]">

                {/* círculos */}
                <div className="absolute inset-8 rounded-full border border-green-500/20" />
                <div className="absolute inset-20 rounded-full border border-green-500/20" />
                <div className="absolute inset-32 rounded-full border border-green-500/20" />

                {/* líneas */}
                <div className="absolute top-1/2 left-0 w-full h-px bg-green-500/20" />
                <div className="absolute left-1/2 top-0 h-full w-px bg-green-500/20" />
                <div className="absolute left-1/2 top-1/2 w-full h-px bg-green-500/10 rotate-45 origin-left" />

                {/* escáner */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    repeat: Infinity,
                    duration: 4,
                    ease: "linear",
                  }}
                  className="absolute inset-0 origin-center"
                >
                  <div className="absolute left-1/2 top-1/2 w-[50%] h-[3px] bg-gradient-to-r from-green-400 via-green-300 to-transparent origin-left shadow-[0_0_20px_rgba(0,255,120,0.8)]" />
                </motion.div>

                {/* puntos */}
                <div className="absolute top-[30%] left-[70%] w-3 h-3 rounded-full bg-green-400 animate-ping" />
                <div className="absolute bottom-[28%] left-[30%] w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <div className="absolute top-[55%] left-[58%] w-2 h-2 rounded-full bg-green-400 animate-pulse" />

                {/* mapa */}
                <div className="absolute inset-[90px] rounded-full overflow-hidden border border-green-500/30 shadow-[0_0_30px_rgba(0,255,120,0.15)]">

                  <iframe
                    src="https://www.google.com/maps?q=Shinobi+Digital+Solutions,+Quito,+Ecuador&output=embed"
                    className="w-full h-full grayscale contrast-125 brightness-75 pointer-events-none"
                    loading="lazy"
                  />
                </div>

                {/* overlay hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-300 flex items-center justify-center z-20">
                  <span className="opacity-0 group-hover:opacity-100 transition duration-300 px-5 py-3 rounded-full border border-green-400/40 bg-black/60 text-green-300 font-semibold backdrop-blur-md">
                    Abrir en Google Maps
                  </span>
                </div>

                {/* centro */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-green-400 shadow-[0_0_25px_rgba(0,255,120,0.8)] animate-pulse" />
              </div>
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}