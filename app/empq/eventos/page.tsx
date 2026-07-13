"use client";

import EventCard from "./components/EventCard";
import Footer from "../components/footer/footer";
import { events } from "./data/events";

export default function EventosPage() {
  return (
    <main className="w-full min-h-screen bg-white text-black overflow-hidden">
      <section
        className="
          w-full
          bg-white
          px-6
          sm:px-10
          md:px-16
          lg:px-28
          xl:px-52
          py-16
        "
      >
        <div className="mb-20">
          <p
            className="
              text-red-600
              uppercase
              tracking-[0.5em]
              font-bold
              text-sm
              mb-4
            "
          >
            Noticias y eventos
          </p>

          <h1
            className="
              text-black
              text-5xl
              sm:text-6xl
              md:text-7xl
              font-black
              uppercase
              leading-none
            "
          >
            Nuestros eventos
          </h1>

          <p
            className="
              text-neutral-500
              text-base
              sm:text-lg
              max-w-2xl
              mt-6
              leading-8
            "
          >
            Conoce nuestras próximas actividades, eventos y experiencias
            preparadas para la comunidad.
          </p>
        </div>

        <div className="flex flex-col gap-24">
          {events.map((event) => (
            <EventCard
              key={event.title}
              {...event}
            />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}