"use client";

import { motion } from "framer-motion";
import { emprendedores } from "../data/emprendedores";

export default function GastronomiaPage() {
  const entrepreneurs = emprendedores.gastronomia ?? [];

  return (
    <main className="relative min-h-screen overflow-hidden bg-white resident-font">
      {/* FONDO */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            -right-[220px]
            -top-[280px]
            h-[700px]
            w-[700px]
            rounded-full
            border-[100px]
            border-[#0B2345]
            opacity-[0.035]
          "
        />

        <div
          className="
            absolute
            -bottom-[300px]
            -left-[250px]
            h-[600px]
            w-[600px]
            rounded-full
            border-[80px]
            border-[#D71920]
            opacity-[0.025]
          "
        />

        <div
          className="
            absolute
            right-[8%]
            bottom-[12%]
            h-3
            w-3
            rounded-full
            bg-[#D71920]
            opacity-60
          "
        />
      </div>

      {/* CONTENIDO */}
      <section
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1300px]
          px-5
          pb-20
          pt-28
          sm:px-8
          sm:pb-24
          lg:px-12
          lg:pb-28
          xl:px-16
        "
      >
        {/* VOLVER */}
        <motion.button
          type="button"
          onClick={() => window.history.back()}
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.35 }}
          className="
            mb-10
            inline-flex
            items-center
            gap-2
            rounded-xl
            border
            border-[#0B2345]/10
            bg-white
            px-5
            py-3
            text-xs
            font-semibold
            uppercase
            tracking-[1.5px]
            text-[#0B2345]
            shadow-[0_5px_18px_rgba(11,35,69,0.06)]
            transition-all
            duration-200
            hover:-translate-y-0.5
            hover:border-[#D71920]/30
            hover:text-[#D71920]
          "
        >
          <span className="text-base">←</span>
          Categorías
        </motion.button>

        {/* ENCABEZADO */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-12 sm:mb-14"
        >
          <h1
            className="
              text-4xl
              font-black
              uppercase
              tracking-[2px]
              text-[#0B2345]
              sm:text-5xl
              md:text-6xl
            "
          >
            Gastronomía
          </h1>

          <p
            className="
              mt-5
              max-w-[650px]
              text-sm
              leading-7
              text-[#526579]
              sm:text-base
              sm:leading-8
            "
          >
            Descubre los emprendimientos de nuestra categoría de gastronomía.
          </p>

          <div className="mt-7 flex items-center gap-3">
            <span className="h-[3px] w-10 rounded-full bg-[#D71920]" />
            <span className="h-2 w-2 rounded-full bg-[#D71920]" />
          </div>
        </motion.header>

        {/* LISTA */}
        {entrepreneurs.length > 0 ? (
          <div
            className="
              grid
              grid-cols-1
              gap-7
              sm:grid-cols-2
              lg:grid-cols-3
              lg:gap-8
            "
          >
            {entrepreneurs.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.07,
                  ease: "easeOut",
                }}
                whileHover={{ y: -6 }}
                className="
                  group
                  flex
                  min-h-[520px]
                  flex-col
                  overflow-hidden
                  rounded-[24px]
                  border
                  border-[#DCE4EC]
                  bg-white
                  shadow-[0_8px_28px_rgba(11,35,69,0.07)]
                  transition-shadow
                  duration-300
                  hover:shadow-[0_18px_40px_rgba(11,35,69,0.13)]
                "
              >
                {/* IMAGEN */}
                <div className="relative h-[220px] w-full overflow-hidden bg-[#F1F5F8] sm:h-[230px]">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-[1.04]
                      "
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-sm text-[#526579]">
                      Sin imagen
                    </div>
                  )}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-x-0
                      bottom-0
                      h-28
                      bg-gradient-to-t
                      from-black/60
                      to-transparent
                    "
                  />

                  <div className="absolute bottom-5 left-5 right-5">
                    <h2
                      className="
                        text-lg
                        font-extrabold
                        uppercase
                        tracking-[1.5px]
                        text-white
                        drop-shadow-md
                        sm:text-xl
                      "
                    >
                      {item.name}
                    </h2>
                  </div>
                </div>

                {/* INFORMACIÓN */}
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <p
                    className="
                      line-clamp-3
                      text-sm
                      leading-6
                      text-[#526579]
                      sm:text-[15px]
                    "
                  >
                    {item.description}
                  </p>

                  {/* TAGS */}
                  {item.tags?.length > 0 && (
                    <div className="mt-6 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="
                            rounded-full
                            border
                            border-[#D71920]/15
                            bg-[#FCEBED]
                            px-3
                            py-1.5
                            text-[9px]
                            font-semibold
                            uppercase
                            tracking-[1px]
                            text-[#D71920]
                          "
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* CONTACTAR */}
                  {item.whatsapp && (
                    <a
                      href={`https://wa.me/${item.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto pt-7"
                    >
                      <span
                        className="
                          flex
                          h-12
                          w-full
                          items-center
                          justify-center
                          rounded-[13px]
                          bg-[#0B2345]
                          text-xs
                          font-bold
                          uppercase
                          tracking-[2px]
                          text-white
                          transition-all
                          duration-200
                          hover:-translate-y-0.5
                          hover:bg-[#D71920]
                        "
                      >
                        Contactar
                      </span>
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="
              flex
              min-h-[280px]
              items-center
              justify-center
              rounded-[24px]
              border
              border-[#DCE4EC]
              bg-white
              shadow-[0_8px_25px_rgba(11,35,69,0.05)]
            "
          >
            <p
              className="
                px-6
                text-center
                text-sm
                font-medium
                uppercase
                tracking-[1.5px]
                text-[#526579]
              "
            >
              No hay emprendedores en esta categoría
            </p>
          </motion.div>
        )}
      </section>
    </main>
  );
}