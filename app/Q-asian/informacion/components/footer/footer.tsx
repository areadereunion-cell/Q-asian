"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  MapPin,
  Mail,
  Phone,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-[#f5f1e8] border-t-[3px] border-black">

      {/* Manga texture */}
      <div
        className="
          absolute inset-0
          opacity-[0.05]
          bg-[radial-gradient(circle,_#000_1px,_transparent_1px)]
          bg-[size:12px_12px]
          pointer-events-none
        "
      />

      {/* Speed lines */}
      <div
        className="
          absolute
          top-[-80px]
          right-[-120px]
          w-[500px]
          h-[250px]
          opacity-[0.04]
          rotate-[-10deg]
          bg-[repeating-linear-gradient(
            90deg,
            black_0px,
            black_2px,
            transparent_2px,
            transparent_14px
          )]
        "
      />

      <div className="relative z-10 max-w-[1600px] mx-auto px-5 md:px-12 lg:px-20 py-12 md:py-16">

        {/* ================= DESKTOP ================= */}
        <div className="hidden lg:grid lg:grid-cols-[1.4fr_1fr_1fr] gap-8">

          {/* BRAND PANEL */}
          <motion.div
            whileHover={{
              y: -5,
            }}
            className="
              relative
              border-[3px]
              border-black
              bg-[#fffdf8]
              p-8
              overflow-hidden
              shadow-[8px_8px_0_rgba(0,0,0,0.12)]
            "
          >
            {/* Corner ink */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-black opacity-[0.04] [clip-path:polygon(100%_0,0_0,100%_100%)]" />

            <div className="relative z-10">
              <p className="text-neutral-700 text-xs tracking-[0.55em] uppercase mb-4">
                クアジアンフェスト
              </p>

              <motion.h2
                animate={{
                  y: [0, -2, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  text-7xl
                  font-black
                  text-black
                  leading-none
                "
                style={{
                  fontFamily:
                    "Teko, sans-serif",
                  WebkitTextStroke:
                    "1px black",
                  textShadow:
                    "4px 4px 0 rgba(0,0,0,0.12)",
                }}
              >
                <motion.span
                  animate={{
                    letterSpacing: [
                      "0.06em",
                      "0.09em",
                      "0.06em",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="inline-block"
                >
                  Q-ASIAN
                </motion.span>
              </motion.h2>

              <span className="text-neutral-700 text-sm tracking-[0.65em]">
                FEST
              </span>

              <div className="w-28 h-[3px] bg-black mt-6 mb-6" />

              <p className="text-black/60 max-w-md leading-relaxed">
                Vive el universo del anime,
                cosplay, k-pop, gaming,
                concursos y cultura asiática
                en un evento diseñado para
                verdaderos fans.
              </p>

              <div className="flex gap-4 mt-8">
                <SocialButton text="IG" />
                <SocialButton text="FB" />
              </div>
            </div>
          </motion.div>

          {/* LINKS PANEL */}
          <motion.div
            whileHover={{
              y: -5,
            }}
            className="
              relative
              border-[3px]
              border-black
              bg-[#fffdf8]
              p-8
              overflow-hidden
              shadow-[8px_8px_0_rgba(0,0,0,0.12)]
            "
          >
            {/* Manga lines */}
            <div
              className="
                absolute
                top-0
                right-0
                w-36
                h-36
                opacity-[0.04]
                rotate-12
                bg-[repeating-linear-gradient(
                  90deg,
                  black_0px,
                  black_2px,
                  transparent_2px,
                  transparent_12px
                )]
              "
            />

            <div className="relative z-10">
              <SectionTitle>
                Explorar
              </SectionTitle>

              <div className="flex flex-col gap-5">
                <FooterLink
                  href="/"
                  text="Inicio"
                />

                <FooterLink
                  href="/emprendedores"
                  text="Emprendedores"
                />

                <FooterLink
                  href="/actividades"
                  text="Actividades"
                />

                <FooterLink
                  href="/inscripcion"
                  text="Inscripciones"
                />
              </div>
            </div>
          </motion.div>

          {/* INFO PANEL */}
          <motion.div
            whileHover={{
              y: -5,
            }}
            className="
              relative
              border-[3px]
              border-black
              bg-[#fffdf8]
              p-8
              overflow-hidden
              shadow-[8px_8px_0_rgba(0,0,0,0.12)]
            "
          >
            <div className="relative z-10">
              <SectionTitle>
                Información
              </SectionTitle>

              <div className="space-y-5">
                <InfoItem
                  icon={<MapPin size={17} />}
                  text="Quito, Ecuador"
                />

                <InfoItem
                  icon={<Mail size={17} />}
                  text="contacto@qasianfest.com"
                />

                <InfoItem
                  icon={<Phone size={17} />}
                  text="+593 99 999 9999"
                />
              </div>

              <div className="mt-8 border-[2px] border-black bg-white p-5 shadow-[4px_4px_0_rgba(0,0,0,0.1)]">
                <p className="text-black text-xs tracking-[0.25em] uppercase mb-2 font-semibold">
                  Evento Oficial
                </p>

                <p className="text-black/50 text-sm">
                  Cosplay • Anime • K-Pop • Gaming
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ================= MOBILE / TABLET ================= */}
        <div className="lg:hidden flex flex-col gap-5">

          {/* Brand */}
          <div className="border-[3px] border-black bg-[#fffdf8] p-6 shadow-[6px_6px_0_rgba(0,0,0,0.12)]">

            <div className="flex flex-col items-center justify-center text-center w-full">

              <p className="text-neutral-700 text-[10px] tracking-[0.45em] uppercase mb-3">
                クアジアンフェスト
              </p>

              <motion.h2
                animate={{
                  y: [0, -2, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="
                  text-5xl
                  sm:text-6xl
                  font-black
                  text-black
                  leading-none
                "
                style={{
                  fontFamily:
                    "Teko, sans-serif",
                  WebkitTextStroke:
                    "1px black",
                }}
              >
                Q-ASIAN
              </motion.h2>

              <span className="text-neutral-700 text-xs tracking-[0.45em] mt-2">
                FEST
              </span>

              <p
                className="
                  mt-5
                  max-w-[300px]
                  mx-auto
                  text-center
                  text-black/60
                  text-sm
                  leading-7
                "
              >
                Anime, cosplay, gaming,
                k-pop y cultura asiática
                en un solo evento.
              </p>

              <div className="flex justify-center gap-3 mt-7">
                <SocialButton text="IG" />
                <SocialButton text="FB" />
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="border-[3px] border-black bg-[#fffdf8] overflow-hidden shadow-[6px_6px_0_rgba(0,0,0,0.12)]">
            <div className="divide-y divide-black/10">
              <InfoRow
                icon={<MapPin size={18} />}
                text="Quito, Ecuador"
              />

              <InfoRow
                icon={<Mail size={18} />}
                text="contacto@qasianfest.com"
              />

              <InfoRow
                icon={<Phone size={18} />}
                text="+593 99 999 9999"
              />
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-3">
            <MobileLink
              href="/"
              text="Inicio"
            />

            <MobileLink
              href="/emprendedores"
              text="Emprendedores"
            />

            <MobileLink
              href="/actividades"
              text="Actividades"
            />

            <MobileLink
              href="/inscripcion"
              text="Inscripciones"
            />
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t-2 border-black/10 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-black/40 text-[10px] uppercase tracking-[0.2em] text-center">
            © {new Date().getFullYear()} Q-ASIAN FEST
          </p>

          <p className="text-black/40 text-[10px] uppercase tracking-[0.28em] text-center">
            Anime • Cosplay • K-Pop • Community
          </p>
        </div>
      </div>
    </footer>
  );
}

function SectionTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <h3 className="text-black text-sm tracking-[0.3em] font-bold mb-7 uppercase">
      {children}
    </h3>
  );
}

function FooterLink({
  href,
  text,
}: {
  href: string;
  text: string;
}) {
  return (
    <Link
      href={href}
      className="
        text-black/60
        hover:text-black
        transition-all
        duration-300
        text-sm
        hover:translate-x-2
        inline-block
      "
    >
      → {text}
    </Link>
  );
}

function MobileLink({
  href,
  text,
}: {
  href: string;
  text: string;
}) {
  return (
    <Link href={href}>
      <motion.div
        whileTap={{
          scale: 0.98,
        }}
        className="
          border-[3px]
          border-black
          bg-[#fffdf8]
          p-4
          text-center
          text-black/80
          hover:bg-black
          hover:text-white
          transition-all
          uppercase
          text-xs
          tracking-[0.2em]
          font-medium
          shadow-[4px_4px_0_rgba(0,0,0,0.08)]
        "
      >
        {text}
      </motion.div>
    </Link>
  );
}

function SocialButton({
  text,
}: {
  text: string;
}) {
  return (
    <motion.button
      whileHover={{
        y: -3,
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.97,
      }}
      className="
        h-11
        min-w-[52px]
        px-4
        flex
        items-center
        justify-center
        border-[2px]
        border-black
        bg-white
        text-black
        hover:bg-black
        hover:text-white
        transition-all
        duration-300
        font-semibold
        tracking-widest
        shadow-[3px_3px_0_rgba(0,0,0,0.12)]
      "
    >
      {text}
    </motion.button>
  );
}

function InfoItem({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <div className="flex items-center gap-4 text-black/60 text-sm">
      <div className="text-black shrink-0">
        {icon}
      </div>

      <span>{text}</span>
    </div>
  );
}

function InfoRow({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <div className="flex items-center gap-4 px-5 py-5 text-black/80">
      <div className="text-black shrink-0">
        {icon}
      </div>

      <span className="text-sm">
        {text}
      </span>
    </div>
  );
}