"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function HeroCarouselMobile({ slides }: any) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      loop
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 6000, disableOnInteraction: false }}
      className="w-full h-full"
    >
      {slides.map((slide: any) => (
        <SwiperSlide key={slide.image} className="!h-full">
          <div className="relative w-full h-full">
            <img
              src={slide.image}
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

            <div className="absolute inset-0 z-10 flex flex-col items-center justify-end px-8 pb-16 text-center text-white">
              <h2 className="max-w-md text-3xl font-bold leading-tight drop-shadow-lg">
                {slide.title}
              </h2>

              <p className="mt-4 max-w-sm text-base leading-relaxed text-white/90">
                {slide.subtitle}
              </p>

              <Link
                href={slide.href}
                className="group mt-8 inline-flex items-center gap-2 border-b-2 border-white pb-1 text-lg font-semibold text-white transition-all duration-300 hover:gap-4"
              >
                <span>{slide.button}</span>

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}