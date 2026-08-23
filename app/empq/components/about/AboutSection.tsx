"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function AboutSection() {
  const router = useRouter();

  return (
    <section className="bg-white py-32 lg:py-40">

      <div className="
        max-w-7xl
        mx-auto
        px-8
        lg:px-16
      ">

        <div className="
          grid
          lg:grid-cols-2
          gap-20
          lg:gap-24
          items-center
          min-h-[650px]
        ">

          {/* Imagen */}

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
            whileHover="hover"
            whileTap={{
              scale: 0.98,
            }}
            onClick={() =>
              router.push("/emprendedores")
            }
            className="
              relative
              cursor-pointer
              overflow-hidden
              rounded-xl
              group
              lg:translate-x-4
              w-full
            "
          >

            <motion.img
              src="/images/emprendedores.jpg"
              alt="Emprendedores Quitumbe"
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
                lg:h-[500px]
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
                from-blue-900/60
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
                text-sm
                uppercase
                tracking-[0.25em]
                font-semibold
              ">
                Conoce nuestros emprendedores
              </p>
            </motion.div>

          </motion.div>


          {/* Texto + Imagen de fondo */}

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
            className="
              relative
              min-h-[500px]
              flex
              items-center
              overflow-hidden
              rounded-2xl
            "
          >

            {/* MARCA DE AGUA */}

            <div
              className="
                absolute
                inset-0
                flex
                items-center
                justify-center
                pointer-events-none
                z-0
              "
            >
              <img
                src="/images/fondo-emprendedores.jpg"
                alt=""
                className="
                  w-[85%]
                  h-[85%]
                  object-cover
                  opacity-[0.20]
                "
              />
            </div>


            {/* DEGRADADO SUAVE PARA MEJORAR LA LECTURA */}

            <div
              className="
                absolute
                inset-0
                bg-white/35
                pointer-events-none
                z-0
              "
            />


            {/* CONTENIDO */}

            <div className="
              relative
              z-10
              w-full
              max-w-xl
              px-4
              lg:px-8
              py-10
            ">

              <div className="
                w-16
                h-1
                bg-red-600
                mb-6
              "/>

              <p className="
                text-blue-700
                uppercase
                tracking-[0.25em]
                text-sm
                font-semibold
              ">
                Emprendedores Quitumbe
              </p>

              <h2 className="
                mt-4
                text-4xl
                md:text-5xl
                font-bold
                text-slate-900
                leading-tight
              ">
                Fortalecemos el talento emprendedor de nuestra comunidad
              </h2>

              <p className="
                mt-6
                text-lg
                text-slate-600
                leading-relaxed
              ">
                Generamos espacios para apoyar,
                visibilizar y conectar a los
                emprendedores de Quitumbe,
                impulsando sus productos,
                servicios e iniciativas locales.
              </p>

              <p className="
                mt-4
                text-slate-600
                leading-relaxed
              ">
                A través de actividades,
                acompañamiento y participación
                comunitaria, trabajamos para
                fortalecer el desarrollo económico
                de nuestra zona.
              </p>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}