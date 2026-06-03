"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function EntrepreneursSection() {
  const router = useRouter();

  return (
    <section className="relative overflow-hidden py-28 lg:py-36">

      {/* Background */}
      <div className="absolute inset-0 bg-[#0d0d0d]" />

      <div className="absolute inset-0 bg-gradient-to-b from-[#ff5b1f]/10 via-transparent to-transparent" />

      {/* Glow */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[900px] h-[300px] bg-[#ff5b1f]/10 blur-[140px]" />

      {/* Texture */}
      <div className="absolute inset-0 opacity-[0.025] bg-[url('/images/grain.png')]" />

      {/* Lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#ff5b1f]/40 to-transparent" />

      <div className="relative z-10 w-full flex justify-center px-6">

        {/* CONTENEDOR CENTRADO REAL */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
          }}
          className="
            w-full
            max-w-[980px]
            flex
            flex-col
            items-center
            text-center
          "
        >
          {/* Badge */}
          <div
            className="
              border
              border-[#ff5b1f]/20
              bg-[#ff5b1f]/5
              px-5
              py-2
              mb-8
            "
          >
            <span className="text-[#ffb69f] uppercase text-[11px] tracking-[0.4em]">
              Emprendedores Oficiales
            </span>
          </div>

          {/* Título */}
          <h2
            className="
              text-[4rem]
              sm:text-[5rem]
              md:text-[6rem]
              lg:text-[7rem]
              font-black
              uppercase
              leading-[0.88]
              text-center
              text-white
            "
            style={{
              fontFamily:
                "Teko, sans-serif",
            }}
          >
            Emprendedores
            <span className="block text-[#ff6a3d]">
              del festival
            </span>
          </h2>

          {/* Divider */}
          <div className="w-28 h-[2px] bg-[#ff5b1f] my-10" />

          {/* Texto */}
          <div className="w-full max-w-[760px]">
            <p className="text-white/80 text-lg md:text-[21px] leading-[1.9]">
              En el{" "}
              <span className="text-[#ffae92] font-medium">
                Q-Asian Fest
              </span>
              , los emprendedores forman una
              parte esencial de la experiencia.
              Cada stand representa creatividad,
              pasión y propuestas inspiradas en
              el anime, cosplay, gaming y
              cultura asiática.
            </p>

            <p className="mt-6 text-white/55 text-base md:text-lg leading-[2]">
              Descubre accesorios,
              ilustraciones, ropa temática,
              coleccionables, comida y
              productos creados por personas
              que forman parte de la comunidad.
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap justify-center gap-3 mt-10">
            {[
              "Anime",
              "Cosplay",
              "Gaming",
              "K-Pop",
              "Arte",
              "Merch",
            ].map((item) => (
              <div
                key={item}
                className="
                  px-5
                  py-3
                  border
                  border-white/10
                  bg-white/[0.03]
                  text-white/75
                  text-xs
                  uppercase
                  tracking-[0.2em]
                "
              >
                {item}
              </div>
            ))}
          </div>

          {/* Button */}
          <motion.button
            whileHover={{
              scale: 1.03,
              y: -2,
            }}
            whileTap={{
              scale: 0.98,
            }}
            onClick={() =>
              router.push(
                "/emprendedores"
              )
            }
            className="
              mt-12
              px-9
              py-4
              bg-[#ff5b1f]
              border
              border-[#ff8b66]
              text-white
              uppercase
              text-sm
              font-semibold
              tracking-[0.24em]
              hover:bg-[#ff6933]
              transition-all
            "
          >
            Explorar emprendedores
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}