"use client";

import { motion } from "framer-motion";

export default function EventosPage() {
  return (
    <main className="
      min-h-screen
      bg-white
      flex
      items-center
      justify-center
      px-4
      sm:px-8
      py-12
      sm:py-24
    ">

      <section className="
        w-full
        max-w-6xl
        min-h-[600px]
        sm:min-h-[650px]
        relative
        overflow-hidden
        rounded-2xl
        sm:rounded-3xl
        bg-blue-950
        flex
        items-center
        justify-center
      ">

        {/* ESPACIO PARA IMAGEN DE FONDO */}

        <div
          className="
            absolute
            inset-0
            bg-cover
            bg-center
            opacity-20
          "
          style={{
            backgroundImage:
              "url('/images/proximo-evento.jpg')",
          }}
        />


        {/* CAPA DE CONTRASTE */}

        <div className="
          absolute
          inset-0
          bg-gradient-to-br
          from-blue-950
          via-blue-950/90
          to-red-950/80
        " />


        {/* CONTENIDO */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            relative
            z-10
            text-center
            w-full
            max-w-3xl
            px-5
            sm:px-6
          "
        >

          <div className="
            w-12
            sm:w-16
            h-1
            bg-red-500
            mx-auto
            mb-6
            sm:mb-8
          " />

          <p className="
            text-red-400
            uppercase
            tracking-[0.25em]
            sm:tracking-[0.35em]
            text-xs
            sm:text-sm
            md:text-base
            font-semibold
          ">
            Próximamente
          </p>


          <h1 className="
            mt-4
            sm:mt-5
            text-5xl
            sm:text-6xl
            md:text-8xl
            font-black
            text-white
            leading-[0.9]
          ">
            NUEVOS
            <span className="
              block
              text-red-500
            ">
              EVENTOS
            </span>
          </h1>


          <p className="
            mt-6
            sm:mt-8
            text-base
            sm:text-lg
            md:text-xl
            text-white/75
            leading-relaxed
            max-w-2xl
            mx-auto
          ">
            Estamos preparando nuevas actividades,
            experiencias y eventos para nuestra comunidad.
          </p>


          {/* LETRERO GRAFFITI */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.7,
              rotate: -8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: -3,
            }}
            transition={{
              delay: 0.5,
              duration: 0.7,
              type: "spring",
              stiffness: 180,
            }}
            whileHover={{
              scale: 1.08,
              rotate: 2,
              y: -8,
            }}
            whileTap={{
              scale: 0.95,
              rotate: -2,
            }}
            className="
              mt-10
              sm:mt-12
              relative
              inline-block
              cursor-pointer
              select-none
              group
              max-w-full
            "
          >

            {/* SOMBRA DEL GRAFFITI */}

            <div className="
              absolute
              inset-0
              translate-x-2
              translate-y-2
              sm:translate-x-3
              sm:translate-y-3
              bg-black
              rounded-lg
              rotate-[-2deg]
            " />


            {/* PLACA */}

            <div className="
              relative
              px-5
              py-5
              sm:px-8
              sm:py-6
              md:px-14
              md:py-8
              bg-red-600
              border-3
              sm:border-4
              border-black
              rounded-lg
              rotate-[-2deg]
              overflow-hidden
              shadow-[0_0_25px_rgba(239,68,68,0.35)]
              max-w-[calc(100vw-40px)]
              sm:max-w-none
            ">

              {/* BRILLO ANIMADO */}

              <motion.div
                animate={{
                  x: ["-150%", "150%"],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  repeatDelay: 1.5,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  top-0
                  bottom-0
                  w-12
                  sm:w-20
                  bg-white/20
                  skew-x-[-20deg]
                "
              />


              {/* TEXTO */}

              <motion.span
                animate={{
                  y: [0, -2, 0],
                  rotate: [-2, 1, -2],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  relative
                  block
                  text-[2.25rem]
                  xs:text-[2.6rem]
                  sm:text-5xl
                  md:text-7xl
                  font-black
                  uppercase
                  italic
                  text-white
                  tracking-[-0.04em]
                  sm:tracking-tight
                  leading-none
                  whitespace-nowrap
                  drop-shadow-[3px_3px_0px_black]
                  [text-shadow:2px_2px_0px_black,-1px_-1px_0px_black]
                  sm:[text-shadow:3px_3px_0px_black,-2px_-2px_0px_black]
                "
              >
                PRÓXIMAMENTE
              </motion.span>


              {/* PEQUEÑO TEXTO */}

              <span className="
                relative
                block
                mt-2
                sm:mt-3
                text-[9px]
                sm:text-xs
                md:text-sm
                font-black
                uppercase
                tracking-[0.22em]
                sm:tracking-[0.4em]
                text-yellow-300
                drop-shadow-[2px_2px_0px_black]
              ">
                Algo grande está por llegar
              </span>

            </div>


            {/* ESTRELLA SUPERIOR */}

            <motion.span
              animate={{
                rotate: [0, 8, 0],
                scale: [1, 1.15, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="
                absolute
                -top-5
                -right-4
                sm:-top-7
                sm:-right-7
                text-3xl
                sm:text-5xl
                text-yellow-300
                font-black
                drop-shadow-[3px_3px_0px_black]
              "
            >
              ★
            </motion.span>


            {/* ESTRELLA INFERIOR */}

            <motion.span
              animate={{
                rotate: [0, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                delay: 0.3,
              }}
              className="
                absolute
                -bottom-5
                -left-4
                sm:-bottom-6
                sm:-left-7
                text-2xl
                sm:text-4xl
                text-white
                font-black
                drop-shadow-[3px_3px_0px_black]
              "
            >
              ✦
            </motion.span>


            {/* TEXTO AL PASAR EL MOUSE */}

            <motion.div
              initial={{
                opacity: 0,
                y: 10,
              }}
              whileHover={{
                opacity: 1,
                y: 0,
              }}
              className="
                absolute
                -bottom-11
                sm:-bottom-14
                left-1/2
                -translate-x-1/2
                whitespace-nowrap
                text-white/70
                text-[9px]
                sm:text-xs
                uppercase
                tracking-[0.2em]
                sm:tracking-[0.3em]
              "
            >
              Mantente atento
            </motion.div>

          </motion.div>

        </motion.div>

      </section>

    </main>
  );
}