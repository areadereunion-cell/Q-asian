"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function OpinionSection() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setLoading(true);

    const form = new FormData(e.currentTarget);

    const data = {
      nombre: form.get("nombre"),
      email: form.get("email"),
      mensaje: form.get("mensaje"),
    };

    try {
      await fetch("/api/comentarios", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      setSent(true);
      e.currentTarget.reset();
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <section
      className="
      relative
      min-h-screen
      bg-black
      flex
      items-center
      justify-center
      px-5
      py-24
      overflow-hidden
      "
    >

      <div
        className="
        absolute
        inset-0
        bg-[radial-gradient(circle_at_top,rgba(180,0,0,.15),transparent_45%)]
        "
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: .8 }}
        className="
        relative
        z-10
        w-full
        max-w-5xl
        bg-[#080808]
        border
        border-white/10
        shadow-[0_40px_100px_rgba(0,0,0,.8)]
        p-8
        sm:p-12
        md:p-16
        "
      >

        <div
          className="
          grid
          lg:grid-cols-2
          gap-14
          items-center
          "
        >

          {/* INFORMACIÓN */}

          <div>

            <div className="flex items-center gap-4 mb-7">
              <span className="w-12 h-[1px] bg-red-600" />

              <span
                className="
                text-red-500
                text-xs
                uppercase
                tracking-[0.25em]
                "
              >
                Comunidad Quitumbe
              </span>
            </div>


            <h2
              className="
              text-white
              text-4xl
              sm:text-5xl
              md:text-6xl
              leading-[1.05]
              tracking-tight
              font-light
              "
            >
              Queremos conocer

              <span
                className="
                block
                text-white/80
                italic
                mt-2
                "
              >
                tu opinión
              </span>

            </h2>


            <p
              className="
              mt-7
              text-white/50
              leading-8
              max-w-md
              text-base
              "
            >
              Tus ideas nos ayudan a crear mejores
              espacios para nuestra comunidad.
              Comparte tus sugerencias, comentarios
              o experiencias con nosotros.
            </p>


          </div>



          {/* FORMULARIO */}

          <form
            onSubmit={handleSubmit}
            className="
            flex
            flex-col
            gap-6
            "
          >

            <input
              name="nombre"
              placeholder="Nombre completo"
              required
              className="
              w-full
              bg-transparent
              border-b
              border-white/20
              px-2
              py-4
              text-white
              placeholder:text-white/40
              outline-none
              focus:border-red-500
              transition
              "
            />


            <input
              name="email"
              type="email"
              placeholder="Correo electrónico"
              required
              className="
              w-full
              bg-transparent
              border-b
              border-white/20
              px-2
              py-4
              text-white
              placeholder:text-white/40
              outline-none
              focus:border-red-500
              transition
              "
            />


            <textarea
              name="mensaje"
              placeholder="Escribe tu comentario..."
              rows={5}
              required
              className="
              w-full
              bg-transparent
              border-b
              border-white/20
              px-2
              py-4
              text-white
              placeholder:text-white/40
              outline-none
              resize-none
              focus:border-red-500
              transition
              "
            />


            <button
              disabled={loading}
              className="
              mt-3
              w-full
              rounded-full
              py-4
              bg-red-600
              text-white
              font-medium
              tracking-wide
              hover:bg-red-500
              transition-all
              duration-300
              disabled:opacity-50
              "
            >
              {loading
                ? "Enviando..."
                : "Enviar comentario"}
            </button>


            {sent && (
              <p
                className="
                text-green-400
                text-sm
                text-center
                "
              >
                Mensaje enviado correctamente.
              </p>
            )}

          </form>


        </div>

      </motion.div>

    </section>
  );
}