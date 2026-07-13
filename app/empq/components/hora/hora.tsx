"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function CountdownSection() {
  const router = useRouter();

  return (
    <section
      className="
        relative
        min-h-[620px]
        overflow-hidden
        flex
        items-center
        justify-center
      "
    >

      <div
        className="
          absolute
          inset-0
          bg-cover
          bg-center
        "
        style={{
          backgroundImage:
            "url('/images/vuelta-sol-bg.jpg')",
        }}
      />

      {/* Contraste sobre imagen */}
      <div className="
        absolute
        inset-0
        bg-gradient-to-b
        from-black/40
        via-transparent
        to-black/50
      "/>


      <motion.div
        initial={{
          opacity:0,
          scale:.95,
        }}
        whileInView={{
          opacity:1,
          scale:1,
        }}
        viewport={{
          once:true,
        }}
        transition={{
          duration:.7,
        }}
        className="
          relative
          z-10
          text-center
          px-6
          max-w-5xl
        "
      >

        <p className="
          inline-block
          bg-black
          text-yellow-300
          px-5
          py-2
          uppercase
          font-bold
          text-sm
          tracking-wider
          mb-6
          rotate-[-2deg]
        ">
          Próximo evento
        </p>


        <h2
          className="
            text-7xl
            md:text-9xl
            uppercase
            text-white
            leading-[0.85]
            drop-shadow-[5px_5px_0px_black]
          "
          style={{
            fontFamily:"Teko, sans-serif",
            WebkitTextStroke:"2px black",
          }}
        >
          VUELTA
          <span className="text-yellow-300">
            {" "}AL SOL
          </span>
        </h2>


        <p className="
          mt-8
          text-white
          text-lg
          md:text-2xl
          font-medium
          max-w-3xl
          mx-auto
          drop-shadow-md
        ">
          BMX, adrenalina y experiencias
          que ponen a la comunidad en movimiento.
        </p>


        <motion.div
          onClick={() =>
            router.push("/eventos/vueltaalsol")
          }
          whileHover={{
            scale:1.08,
          }}
          whileTap={{
            scale:.95,
          }}
          className="
            mt-10
            inline-flex
            items-center
            gap-3
            bg-yellow-300
            text-black
            px-8
            py-4
            font-black
            uppercase
            cursor-pointer
            shadow-[6px_6px_0px_black]
            transition-all
          "
        >

          <span>
            Conoce la experiencia
          </span>

          <span>
            →
          </span>

        </motion.div>


      </motion.div>

    </section>
  );
}