"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function EntrepreneursSection() {
  const router = useRouter();

  const tags = [
    "Anime",
    "Cosplay",
    "Gaming",
    "K-Pop",
    "Arte",
    "Merch",
  ];

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#f6f1e7]

        mt-20
        mb-24
        md:mt-32
        md:mb-36

        pt-20
        pb-44
        md:pt-32
        md:pb-56
      "
    >
      {/* HALFTONE MANGA */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.05]
          bg-[radial-gradient(circle,#000_1px,transparent_1.6px)]
          bg-[size:16px_16px]
        "
      />

      {/* SPEED LINES */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.03]
          bg-[linear-gradient(120deg,transparent_0%,transparent_47%,#000_48%,transparent_49%,transparent_100%)]
          bg-[length:28px_28px]
        "
      />

      {/* MANGA FRAME */}
      <div className="absolute inset-3 md:inset-6 border-[3px] md:border-[5px] border-black pointer-events-none" />

      {/* TOP DECOR */}
      <motion.div
        animate={{
          rotate: [-2, 2, -2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="
          absolute
          top-4
          right-3
          md:top-8
          md:right-14

          bg-[#ff5b1f]
          border-[3px]
          md:border-[4px]
          border-black

          px-3
          py-1
          md:px-5
          md:py-2

          rotate-[-6deg]

          shadow-[4px_4px_0px_#000]
          md:shadow-[8px_8px_0px_#000]

          z-20
        "
      >
        <span
          className="
            text-black
            font-black
            uppercase
            tracking-[0.15em]
            text-[10px]
            md:text-xs
          "
        >
          NEW ZONE!
        </span>
      </motion.div>

      <div className="relative z-10 px-5 md:px-6 flex justify-center">
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="
            w-full
            max-w-[1100px]
            flex
            flex-col
            items-center
            text-center
          "
        >
          {/* BADGE */}
          <div
            className="
              bg-black
              border-[3px]
              md:border-[4px]
              border-black

              px-5
              py-2
              md:px-6
              md:py-3

              rotate-[-2deg]

              shadow-[4px_4px_0px_#ff5b1f]
              md:shadow-[6px_6px_0px_#ff5b1f]
            "
          >
            <span
              className="
                text-white
                uppercase
                text-[10px]
                md:text-[11px]
                tracking-[0.3em]
                font-bold
              "
            >
              Emprendedores Oficiales
            </span>
          </div>

          {/* TITLE */}
          <h2
            className="
              mt-10

              text-[2.8rem]
              sm:text-[4rem]
              md:text-[5.5rem]
              lg:text-[7rem]

              leading-[0.9]
              font-black
              uppercase
              text-black
            "
            style={{
              fontFamily: "Teko, sans-serif",
              WebkitTextStroke: "2px black",
              textShadow: "4px 4px 0px #ff5b1f",
            }}
          >
            EMPRENDEDORES

            <span className="block text-[#ff5b1f]">
              DEL FESTIVAL
            </span>
          </h2>

          {/* MANGA CARD */}
          <div
            className="
              relative
              mt-10

              w-full
              max-w-[860px]

              bg-white
              border-[4px]
              md:border-[5px]
              border-black

              p-6
              sm:p-8
              md:p-12

              shadow-[6px_6px_0px_#000]
              md:shadow-[12px_12px_0px_#000]
            "
          >
            {/* WOW STICKER */}
            <div
              className="
                absolute
                -top-5
                left-4
                md:-top-6
                md:-left-4

                bg-[#ff5b1f]
                border-[3px]
                md:border-[4px]
                border-black

                px-3
                py-1
                md:px-4
                md:py-2

                rotate-[-6deg]

                font-black
                text-black
                text-[10px]
                md:text-sm
                uppercase
              "
            >
              WOW!
            </div>

            <p
              className="
                text-black
                text-base
                sm:text-lg
                md:text-[22px]

                leading-[1.9]
                font-medium
              "
            >
              En el{" "}
              <span className="font-black text-[#ff5b1f]">
                Q-ASIAN FEST
              </span>
              , los emprendedores forman una
              parte esencial de la experiencia.
              Cada stand representa creatividad,
              pasión y propuestas inspiradas en
              el anime, cosplay, gaming y
              cultura asiática.
            </p>

            <p
              className="
                mt-6
                text-black/70
                text-sm
                sm:text-base
                md:text-lg
                leading-[2]
              "
            >
              Descubre accesorios,
              ilustraciones, ropa temática,
              coleccionables, comida y
              productos creados por personas
              que forman parte de la comunidad.
            </p>
          </div>

          {/* TAGS */}
          <div
            className="
              flex
              flex-wrap
              justify-center

              gap-3
              md:gap-4

              mt-20
              md:mt-24

              px-4

              relative
              z-20
            "
          >
            {tags.map((item) => (
              <motion.div
                key={item}
                whileHover={{
                  y: -4,
                  rotate: -2,
                }}
                className="
                  px-4
                  py-2
                  md:px-5
                  md:py-3

                  bg-white
                  border-[3px]
                  md:border-[4px]
                  border-black

                  text-black
                  text-[10px]
                  md:text-xs
                  font-bold
                  uppercase
                  tracking-[0.15em]

                  shadow-[4px_4px_0px_#000]
                  md:shadow-[5px_5px_0px_#000]

                  cursor-default
                "
              >
                {item}
              </motion.div>
            ))}
          </div>

          {/* BUTTON */}
          <motion.button
            whileHover={{
              scale: 1.04,
              rotate: -1,
            }}
            whileTap={{
              scale: 0.96,
            }}
            onClick={() =>
              router.push("/emprendedores")
            }
            className="
              relative

              mt-14
              md:mt-16

              px-8
              py-4
              md:px-12
              md:py-6

              bg-[#ff5b1f]
              border-[4px]
              md:border-[5px]
              border-black

              text-black
              uppercase
              text-xs
              md:text-base
              font-black
              tracking-[0.2em]

              shadow-[6px_6px_0px_#000]
              md:shadow-[10px_10px_0px_#000]

              transition-all

              z-10
            "
          >
            ✦ EXPLORAR EMPRENDEDORES ✦
          </motion.button>

          {/* EXTRA SPACE MOBILE */}
          <div className="h-20 md:h-0" />
        </motion.div>
      </div>
    </section>
  );
}