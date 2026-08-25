"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

interface Props {
  categories: string[];
  selected: number;
  setSelected: (index: number) => void;
  active?: boolean;
}

const categoryIcons = ["🎴", "🧵", "🍜", "🍬", "👕"];

const categoryStyles = [
  {
    accent: "#1769AA",
    light: "#EAF4FB",
    wave: "#1769AA",
    slug: "coleccionables",
  },
  {
    accent: "#D9822B",
    light: "#FBF0E5",
    wave: "#D9822B",
    slug: "artesanias",
  },
  {
    accent: "#D71920",
    light: "#FCEBED",
    wave: "#D71920",
    slug: "gastronomia",
  },
  {
    accent: "#7654A3",
    light: "#F1ECF8",
    wave: "#7654A3",
    slug: "dulces",
  },
  {
    accent: "#3F8C63",
    light: "#EAF5EE",
    wave: "#3F8C63",
    slug: "ropa",
  },
];

export default function CategoryMenu({
  categories = [],
  selected,
  setSelected,
  active = true,
}: Props) {
  const router = useRouter();

  const handleCategoryClick = (index: number) => {
    if (!active) return;

    // Mantiene la funcionalidad actual de selección
    setSelected(index);

    // Después de seleccionar, navega a la sección correspondiente
    const style = categoryStyles[index % categoryStyles.length];

    router.push(`/empq/emprendedores/${style.slug}`);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`
        relative
        w-full
        overflow-hidden
        bg-[#FDFEFF]
        px-4
        py-10
        sm:px-6
        sm:py-12
        lg:px-8
        lg:py-14
        ${!active ? "pointer-events-none opacity-60" : ""}
      `}
    >
      {/* ===================================================== */}
      {/* FONDO DECORATIVO */}
      {/* ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Gran arco azul */}

        <div
          className="
            absolute
            -right-[250px]
            -top-[300px]
            h-[760px]
            w-[760px]
            rounded-full
            border-[115px]
            border-[#0B2345]
            opacity-[0.045]
            sm:-right-[210px]
            sm:-top-[320px]
            sm:h-[850px]
            sm:w-[850px]
            lg:-right-[170px]
            lg:-top-[370px]
            lg:h-[950px]
            lg:w-[950px]
          "
        />

        {/* Arco secundario */}

        <div
          className="
            absolute
            -bottom-[310px]
            -left-[300px]
            h-[600px]
            w-[600px]
            rounded-full
            border-[80px]
            border-[#1769AA]
            opacity-[0.025]
            lg:-bottom-[350px]
            lg:-left-[260px]
          "
        />

        {/* Acento rojo */}

        <div
          className="
            absolute
            bottom-[8%]
            right-[7%]
            h-3
            w-3
            rounded-full
            bg-[#D71920]
            opacity-70
            sm:h-4
            sm:w-4
          "
        />

        <div
          className="
            absolute
            bottom-[calc(8%+2px)]
            right-[calc(7%+22px)]
            h-px
            w-16
            bg-[#D71920]
            opacity-20
          "
        />

        {/* Círculos decorativos */}

        <div
          className="
            absolute
            left-[5%]
            top-[18%]
            h-24
            w-24
            rounded-full
            border
            border-[#1769AA]
            opacity-[0.045]
          "
        />

        <div
          className="
            absolute
            left-[8%]
            top-[23%]
            h-3
            w-3
            rounded-full
            bg-[#1769AA]
            opacity-10
          "
        />

        <div
          className="
            absolute
            right-[18%]
            bottom-[20%]
            h-16
            w-16
            rounded-full
            border
            border-[#0B2345]
            opacity-[0.035]
          "
        />

        {/* Líneas geométricas */}

        <div
          className="
            absolute
            left-0
            top-[42%]
            h-px
            w-40
            bg-[#1769AA]
            opacity-[0.045]
          "
        />

        <div
          className="
            absolute
            right-0
            top-[58%]
            h-px
            w-48
            bg-[#0B2345]
            opacity-[0.04]
          "
        />
      </div>

      {/* ===================================================== */}
      {/* CONTENIDO */}
      {/* ===================================================== */}

      <div className="relative z-10 w-full">

        <div className="mx-auto flex w-full flex-col items-center text-center">

          {/* Icono superior */}

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="
              mb-5
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              border
              border-[#1769AA]/15
              bg-white
              text-xl
              shadow-[0_5px_18px_rgba(11,35,69,0.08)]
              sm:h-14
              sm:w-14
              sm:text-2xl
            "
          >
            🛍️
          </motion.div>

          {/* Título */}

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="
              w-full
              text-center
              text-[40px]
              font-black
              leading-[0.98]
              tracking-[2px]
              text-[#0B2345]
              sm:text-[52px]
              md:text-[60px]
              lg:text-[70px]
            "
          >
            EMPRENDEDORES
          </motion.h1>

          {/* Descripción */}

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="
              mx-auto
              mt-7
              w-full
              max-w-[690px]
              px-2
              text-center
              text-[14px]
              leading-7
              text-[#526579]
              sm:text-[15px]
              sm:leading-8
              md:text-base
            "
          >
            Conoce y apoya el talento de nuestros emprendedores. Cada proyecto
            representa{" "}
            <span className="font-semibold text-[#1769AA]">
              esfuerzo, creatividad
            </span>{" "}
            y la oportunidad de convertir una idea en{" "}
            <span className="font-semibold text-[#1769AA]">
              algo extraordinario
            </span>
            .
          </motion.p>

          {/* Separador */}

          <motion.div
            initial={{ opacity: 0, scaleX: 0.7 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.45, delay: 0.28 }}
            className="
              mt-8
              flex
              w-full
              items-center
              justify-center
              gap-3
            "
          >
            <span className="h-px w-12 bg-[#1769AA]/25 sm:w-16" />

            <span
              className="
                h-2.5
                w-2.5
                rounded-full
                bg-[#1769AA]
                shadow-[0_2px_5px_rgba(23,105,170,0.18)]
              "
            />

            <span className="h-px w-12 bg-[#1769AA]/25 sm:w-16" />
          </motion.div>

        </div>

        {/* ===================================================== */}
        {/* TARJETAS */}
        {/* ===================================================== */}

        <div
          className="
            mt-12
            grid
            grid-cols-2
            gap-4
            sm:mt-14
            sm:gap-5
            md:grid-cols-3
            lg:mt-16
            lg:grid-cols-5
            lg:gap-5
            xl:gap-6
          "
        >
          {categories.map((category, index) => {
            const isSelected = selected === index;
            const style =
              categoryStyles[index % categoryStyles.length];

            return (
              <motion.button
                key={category}
                type="button"
                onClick={() => handleCategoryClick(index)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.42,
                  delay: 0.08 + index * 0.07,
                  ease: "easeOut",
                }}
                whileHover={
                  active
                    ? {
                        y: -7,
                        transition: {
                          duration: 0.2,
                          ease: "easeOut",
                        },
                      }
                    : undefined
                }
                whileTap={
                  active
                    ? {
                        scale: 0.98,
                      }
                    : undefined
                }
                className={`
                  group
                  relative
                  h-[270px]
                  min-w-0
                  overflow-hidden
                  rounded-[24px]
                  border
                  bg-white/75
                  text-center
                  backdrop-blur-[2px]
                  transition-[border-color,box-shadow]
                  duration-200

                  sm:h-[285px]
                  md:h-[290px]
                  lg:h-[310px]

                  ${
                    index === 4
                      ? "col-span-2 mx-auto w-[calc(50%-8px)] md:col-span-1 md:w-full lg:col-span-1 lg:mx-0"
                      : ""
                  }

                  ${
                    isSelected
                      ? "shadow-[0_14px_35px_rgba(11,35,69,0.14)]"
                      : "shadow-[0_7px_25px_rgba(11,35,69,0.07)] hover:shadow-[0_14px_32px_rgba(11,35,69,0.13)]"
                  }
                `}
                style={{
                  borderColor: isSelected
                    ? style.accent
                    : "rgba(220,228,236,0.8)",
                }}
              >
                {/* Línea superior */}

                <div
                  className="
                    absolute
                    left-0
                    top-0
                    h-1
                    w-full
                    opacity-80
                  "
                  style={{
                    backgroundColor: style.accent,
                  }}
                />

                {/* Número */}

                <span
                  className="
                    absolute
                    left-5
                    top-5
                    z-20
                    flex
                    h-8
                    min-w-8
                    items-center
                    justify-center
                    rounded-[8px]
                    border
                    bg-white/90
                    px-2
                    text-[11px]
                    font-bold
                    tracking-[0.8px]
                  "
                  style={{
                    color: style.accent,
                    borderColor: `${style.accent}35`,
                  }}
                >
                  0{index + 1}
                </span>

                {/* Icono */}

                <motion.div
                  whileHover={
                    active
                      ? {
                          scale: 1.05,
                        }
                      : undefined
                  }
                  transition={{
                    duration: 0.2,
                    ease: "easeOut",
                  }}
                  className="
                    relative
                    z-20
                    mx-auto
                    mt-12
                    flex
                    h-[82px]
                    w-[82px]
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#E5EAF0]
                    bg-white/90
                    text-[46px]
                    leading-none
                    shadow-[0_7px_20px_rgba(11,35,69,0.09)]
                    sm:h-[88px]
                    sm:w-[88px]
                    sm:text-[50px]
                    lg:h-[92px]
                    lg:w-[92px]
                    lg:text-[52px]
                  "
                >
                  {categoryIcons[index]}
                </motion.div>

                {/* Nombre */}

                <div className="relative z-20 mt-6 px-4">

                  <span
                    className="
                      block
                      min-h-[42px]
                      text-[14px]
                      font-extrabold
                      leading-[1.2]
                      tracking-[1px]
                      text-[#0B2345]
                      sm:text-[15px]
                      lg:text-[16px]
                    "
                  >
                    {category}
                  </span>

                  {/* Línea decorativa */}

                  <span
                    className="
                      mx-auto
                      mt-4
                      block
                      h-[3px]
                      w-10
                      rounded-full
                    "
                    style={{
                      backgroundColor: style.accent,
                    }}
                  />
                </div>

                {/* Onda inferior */}

                <div
                  className="
                    absolute
                    bottom-[-42px]
                    left-[-12%]
                    z-10
                    h-[105px]
                    w-[124%]
                    rounded-[50%]
                    opacity-[0.14]
                  "
                  style={{
                    backgroundColor: style.wave,
                  }}
                />

                <div
                  className="
                    absolute
                    bottom-[-58px]
                    left-[-20%]
                    z-[9]
                    h-[115px]
                    w-[140%]
                    rounded-[50%]
                    opacity-[0.08]
                  "
                  style={{
                    backgroundColor: style.wave,
                  }}
                />

                {/* Flecha */}

                <motion.span
                  whileHover={
                    active
                      ? {
                          x: 3,
                        }
                      : undefined
                  }
                  transition={{
                    duration: 0.18,
                  }}
                  className="
                    absolute
                    bottom-5
                    right-5
                    z-30
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white
                    bg-white/95
                    text-[17px]
                    font-medium
                    shadow-[0_5px_14px_rgba(11,35,69,0.12)]
                  "
                  style={{
                    color: style.accent,
                  }}
                >
                  →
                </motion.span>

                {/* Indicador de selección */}

                {isSelected && (
                  <motion.span
                    layoutId="category-selected"
                    className="
                      absolute
                      right-5
                      top-5
                      z-20
                      h-2
                      w-2
                      rounded-full
                    "
                    style={{
                      backgroundColor: style.accent,
                    }}
                  />
                )}
              </motion.button>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}