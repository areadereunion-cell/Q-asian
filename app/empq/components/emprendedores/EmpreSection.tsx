"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function EventsSection() {
  const router = useRouter();

  return (
    <section className="
      relative
      bg-blue-950
      py-24
      overflow-hidden
    ">

      <div className="
        absolute
        top-0
        right-0
        w-[500px]
        h-[500px]
        bg-blue-700/30
        rounded-full
        blur-[140px]
      " />

      <div className="
        relative
        max-w-6xl
        mx-auto
        px-8
        lg:px-16
      ">

        <div className="
          grid
          lg:grid-cols-2
          gap-16
          items-center
        ">

          {/* TEXTO */}

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            className="
              flex
              justify-center
              lg:translate-x-20
            "
          >

            <div className="
              max-w-md
            ">

              <div className="
                w-14
                h-1
                bg-red-500
                mb-6
              " />

              <span className="
                text-red-400
                uppercase
                tracking-[0.3em]
                text-sm
                font-semibold
              ">
                Actividades Quitumbe
              </span>


              <h2 className="
                mt-5
                text-4xl
                md:text-5xl
                font-bold
                text-white
                leading-tight
              ">
                Conoce nuestros eventos
                y actividades
              </h2>


              <p className="
                mt-6
                text-lg
                text-white/75
                leading-relaxed
              ">
                Descubre ferias, encuentros y
                espacios creados para impulsar
                a nuestros emprendedores y
                fortalecer la participación
                de nuestra comunidad.
              </p>


              <p className="
                mt-5
                text-white/60
                leading-relaxed
              ">
                Revisa nuestra agenda de eventos
                y conoce todas las actividades
                que forman parte del desarrollo
                de Quitumbe.
              </p>


              {/* ESPACIO PARA BOTONES */}

              <div className="
                mt-12
                flex
                flex-wrap
                gap-4
              ">

                <button
                  onClick={() =>
                    router.push("/eventos")
                  }
                  className="
                    px-7
                    py-3.5
                    bg-red-500
                    hover:bg-red-600
                    text-white
                    font-semibold
                    rounded-lg
                    transition-all
                    duration-300
                    hover:scale-105
                  "
                >
                  Ver eventos
                </button>

                <button
                  onClick={() =>
                    router.push("/actividades")
                  }
                  className="
                    px-7
                    py-3.5
                    border
                    border-white/30
                    hover:border-white/60
                    hover:bg-white/10
                    text-white
                    font-semibold
                    rounded-lg
                    transition-all
                    duration-300
                  "
                >
                  Ver actividades
                </button>

              </div>

            </div>

          </motion.div>



          {/* IMAGEN */}

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            whileHover="hover"
            whileTap={{
              scale: 0.98,
            }}
            onClick={() =>
              router.push("/eventos")
            }
            className="
              relative
              overflow-hidden
              rounded-xl
              cursor-pointer
            "
          >

            <motion.img
              src="/images/eventos.jpg"
              alt="Eventos Quitumbe"
              variants={{
                hover: {
                  scale: 1.05,
                },
              }}
              transition={{
                duration: 0.5,
              }}
              className="
                w-full
                h-[420px]
                object-cover
              "
            />


            <motion.div
              initial={{
                opacity: 0,
              }}
              variants={{
                hover: {
                  opacity: 1,
                },
              }}
              transition={{
                duration: 0.3,
              }}
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-blue-950/80
                via-transparent
                to-transparent
              "
            />


            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              variants={{
                hover: {
                  opacity: 1,
                  y: 0,
                },
              }}
              transition={{
                duration: 0.3,
              }}
              className="
                absolute
                bottom-6
                left-6
                text-white
              "
            >

              <p className="
                uppercase
                tracking-[0.3em]
                text-sm
                font-semibold
              ">
                Ver eventos
              </p>

            </motion.div>


          </motion.div>

        </div>

      </div>

    </section>
  );
}