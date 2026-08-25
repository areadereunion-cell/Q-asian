"use client";

import { motion } from "framer-motion";
import { emprendedores } from "../data/emprendedores";

export default function ColeccionablesPage() {
  const entrepreneurs = emprendedores.coleccionables ?? [];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#F7FAFD] resident-font">
      {/* ===================================================== */}
      {/* BACKGROUND */}
      {/* ===================================================== */}

      <div className="pointer-events-none absolute inset-0 z-0">
        <img
          src="/images/bgeneral.png"
          alt=""
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            object-center
          "
        />

        {/* Capa blanca para integrar el fondo con el contenido */}
        <div className="absolute inset-0 bg-white/80" />

        {/* Decoración geométrica */}
        <div
          className="
            absolute
            -right-[260px]
            -top-[300px]
            h-[760px]
            w-[760px]
            rounded-full
            border-[110px]
            border-[#0B2345]
            opacity-[0.035]
          "
        />

        <div
          className="
            absolute
            -bottom-[320px]
            -left-[280px]
            h-[650px]
            w-[650px]
            rounded-full
            border-[90px]
            border-[#1769AA]
            opacity-[0.025]
          "
        />

        <div
          className="
            absolute
            right-[7%]
            top-[28%]
            h-3
            w-3
            rounded-full
            bg-[#D71920]
            opacity-60
          "
        />

        <div
          className="
            absolute
            left-[5%]
            top-[42%]
            h-24
            w-24
            rounded-full
            border
            border-[#1769AA]
            opacity-[0.035]
          "
        />
      </div>

      {/* ===================================================== */}
      {/* CONTENIDO */}
      {/* ===================================================== */}

      <section
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1320px]
          px-5
          pb-20
          pt-28
          sm:px-8
          sm:pb-24
          sm:pt-32
          lg:px-12
          lg:pb-28
          lg:pt-36
          xl:px-16
        "
      >
        {/* ===================================================== */}
        {/* VOLVER */}
        {/* ===================================================== */}

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
            gap-2.5
            rounded-xl
            border
            border-[#0B2345]/10
            bg-white/90
            px-5
            py-3
            text-xs
            font-bold
            uppercase
            tracking-[1.5px]
            text-[#0B2345]
            shadow-[0_6px_22px_rgba(11,35,69,0.07)]
            backdrop-blur-sm
            transition-all
            duration-200
            hover:-translate-y-0.5
            hover:border-[#1769AA]/30
            hover:text-[#1769AA]
            hover:shadow-[0_10px_28px_rgba(11,35,69,0.1)]
          "
        >
          <span className="text-lg leading-none">←</span>
          Categorías
        </motion.button>

        {/* ===================================================== */}
        {/* ENCABEZADO */}
        {/* ===================================================== */}

        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="
            mb-14
            max-w-[760px]
          "
        >
          <div className="mb-5 flex items-center gap-4">


          </div>

          <h1
            className="
              text-[38px]
              font-black
              uppercase
              leading-[1]
              tracking-[2px]
              text-[#0B2345]
              sm:text-[48px]
              md:text-[58px]
              lg:text-[64px]
            "
          >
            Coleccionables
          </h1>

          <p
            className="
              mt-6
              max-w-[680px]
              text-[14px]
              leading-7
              text-[#526579]
              sm:text-[15px]
              sm:leading-8
              md:text-base
            "
          >
            Descubre los emprendimientos de nuestra categoría de
            coleccionables y conoce el talento detrás de cada proyecto.
          </p>

          <div className="mt-7 flex items-center gap-3">
            <span className="h-[3px] w-12 rounded-full bg-[#1769AA]" />
            <span className="h-2 w-2 rounded-full bg-[#1769AA]" />
            <span className="h-px w-8 bg-[#1769AA]/20" />
          </div>
        </motion.header>

        {/* ===================================================== */}
        {/* LISTA */}
        {/* ===================================================== */}

        {entrepreneurs.length > 0 ? (
          <div
            className="
              grid
              grid-cols-1
              gap-7
              sm:grid-cols-2
              sm:gap-8
              lg:grid-cols-3
              lg:gap-8
              xl:gap-9
            "
          >
            {entrepreneurs.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.07,
                  ease: "easeOut",
                }}
                whileHover={{ y: -7 }}
                className="
                  group
                  flex
                  min-h-[540px]
                  flex-col
                  overflow-hidden
                  rounded-[24px]
                  border
                  border-[#DCE4EC]
                  bg-white/95
                  shadow-[0_10px_32px_rgba(11,35,69,0.07)]
                  backdrop-blur-sm
                  transition-shadow
                  duration-300
                  hover:shadow-[0_20px_45px_rgba(11,35,69,0.14)]
                "
              >
                {/* IMAGEN */}

                <div
                  className="
                    relative
                    h-[225px]
                    w-full
                    shrink-0
                    overflow-hidden
                    bg-[#EEF3F7]
                    sm:h-[235px]
                  "
                >
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
                        ease-out
                        group-hover:scale-[1.045]
                      "
                    />
                  ) : (
                    <div
                      className="
                        flex
                        h-full
                        items-center
                        justify-center
                        text-xs
                        font-semibold
                        uppercase
                        tracking-[1.5px]
                        text-[#526579]
                      "
                    >
                      Sin imagen
                    </div>
                  )}

                  {/* Overlay */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-x-0
                      bottom-0
                      h-32
                      bg-gradient-to-t
                      from-[#07182E]/75
                      via-[#07182E]/25
                      to-transparent
                    "
                  />

                  {/* Nombre sobre imagen */}

                  <div className="absolute bottom-5 left-6 right-6">
                    <div className="mb-2 h-[3px] w-9 rounded-full bg-[#1769AA]" />

                    <h2
                      className="
                        text-lg
                        font-extrabold
                        uppercase
                        leading-tight
                        tracking-[1.5px]
                        text-white
                        drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)]
                        sm:text-xl
                      "
                    >
                      {item.name}
                    </h2>
                  </div>
                </div>

                {/* CONTENIDO */}

                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  {/* Descripción */}

                  <p
                    className="
                      line-clamp-3
                      min-h-[72px]
                      text-[14px]
                      leading-6
                      text-[#526579]
                      sm:text-[15px]
                    "
                  >
                    {item.description}
                  </p>

                  {/* TAGS */}

                  {item.tags?.length > 0 && (
                    <div className="mt-6 flex min-h-[58px] flex-wrap content-start gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="
                            rounded-full
                            border
                            border-[#1769AA]/15
                            bg-[#F1F7FB]
                            px-3
                            py-1.5
                            text-[9px]
                            font-bold
                            uppercase
                            tracking-[1px]
                            text-[#1769AA]
                            transition-colors
                            duration-200
                            group-hover:border-[#1769AA]/25
                          "
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Separador */}

                  <div className="mt-6 mb-5 h-px w-full bg-[#E8EDF2]" />

                  {/* BOTÓN */}

                  {item.whatsapp && (
                    <a
                      href={`https://wa.me/${item.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto block"
                    >
                      <span
                        className="
                          flex
                          h-[48px]
                          w-full
                          items-center
                          justify-center
                          rounded-[13px]
                          bg-[#0B2345]
                          text-[11px]
                          font-bold
                          uppercase
                          tracking-[2.5px]
                          text-white
                          shadow-[0_6px_16px_rgba(11,35,69,0.12)]
                          transition-all
                          duration-200
                          hover:-translate-y-0.5
                          hover:bg-[#1769AA]
                          hover:shadow-[0_9px_22px_rgba(23,105,170,0.2)]
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
              bg-white/95
              px-6
              shadow-[0_10px_30px_rgba(11,35,69,0.05)]
            "
          >
            <p
              className="
                text-center
                text-sm
                font-semibold
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