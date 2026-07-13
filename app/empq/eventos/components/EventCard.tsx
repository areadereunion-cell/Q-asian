"use client";

import Image from "next/image";
import Link from "next/link";

interface EventCardProps {
  title: string;
  category: string;
  date: string;
  description: string;
  image: string;
  link: string;
  activities: string[];
}

export default function EventCard({
  title,
  category,
  date,
  description,
  image,
  link,
  activities,
}: EventCardProps) {
  return (
    <article
      className="
        w-full
        bg-white
        border
        border-neutral-200
        rounded-3xl
        overflow-hidden
        shadow-sm
      "
    >
      {/* TITULO */}
      <div className="px-8 pt-8 pb-6">
        <p
          className="
            text-red-600
            uppercase
            tracking-[0.35em]
            text-xs
            font-bold
            mb-3
          "
        >
          {category}
        </p>

        <h2
          className="
            text-black
            text-4xl
            md:text-5xl
            font-black
            uppercase
            leading-none
          "
        >
          {title}
        </h2>
      </div>

      {/* CONTENIDO */}
      <div
        className="
          grid
          grid-cols-1
          lg:grid-cols-[1.5fr_0.8fr]
          gap-8
          px-8
          pb-8
        "
      >
        {/* IMAGEN + DESCRIPCIÓN */}
        <div>
          <div
            className="
              relative
              w-full
              aspect-video
              rounded-2xl
              overflow-hidden
            "
          >
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
            />
          </div>

          <div className="mt-6">
            <p
              className="
                text-red-600
                font-bold
                text-sm
                uppercase
                tracking-widest
                mb-3
              "
            >
              {date}
            </p>

            <p
              className="
                text-neutral-600
                text-lg
                leading-8
              "
            >
              {description}
            </p>
          </div>
        </div>

        {/* ACTIVIDADES */}
        <aside
          className="
            border-l
            border-neutral-200
            pl-8
            flex
            flex-col
            justify-between
          "
        >
          <div>
            <p
              className="
                text-red-600
                uppercase
                tracking-[0.4em]
                text-xs
                font-bold
                mb-4
              "
            >
              Agenda
            </p>

            <h3
              className="
                text-black
                text-3xl
                font-black
                uppercase
                leading-tight
                mb-8
              "
            >
              Actividades
            </h3>

            <ul
              className="
                space-y-5
                text-neutral-700
                text-lg
              "
            >
              {activities.map((activity) => (
                <li
                  key={activity}
                  className="
                    border-b
                    border-neutral-200
                    pb-4
                  "
                >
                  {activity}
                </li>
              ))}
            </ul>
          </div>

          <Link
            href={link}
            className="
              mt-10
              inline-flex
              text-black
              font-bold
              uppercase
              tracking-widest
              text-sm
              hover:text-red-600
              transition
            "
          >
            Ver evento →
          </Link>
        </aside>
      </div>
    </article>
  );
}