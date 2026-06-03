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
    <footer className="relative w-full overflow-hidden bg-[#050505] border-t border-[#ff3b30]/20">
      
      {/* Línea superior */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#ff3b30] to-transparent" />

      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[240px] bg-[#ff3b30]/10 blur-[130px]" />

      {/* Textura */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('/images/grain.png')]" />

      <div className="relative z-10 max-w-[1600px] mx-auto px-5 md:px-12 lg:px-20 py-12 md:py-16">

        {/* ================= DESKTOP ================= */}
        <div className="hidden lg:grid lg:grid-cols-[1.4fr_1fr_1fr] gap-14">

          {/* BRAND */}
          <div>
            <p className="text-[#ff3b30] text-xs tracking-[0.55em] uppercase mb-4">
              クアジアンフェスト
            </p>

            <h2
              className="
                text-7xl
                font-black
                text-white
                tracking-[0.08em]
                leading-none
              "
              style={{
                fontFamily:
                  "Teko, sans-serif",
              }}
            >
              Q-ASIAN
            </h2>

            <span className="text-[#ff3b30] text-sm tracking-[0.65em]">
              FEST
            </span>

            <div className="w-28 h-[2px] bg-[#ff3b30] mt-6 mb-6" />

            <p className="text-white/50 max-w-md leading-relaxed">
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

          {/* LINKS */}
          <div>
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

          {/* INFO */}
          <div>
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

            <div className="mt-8 border border-[#ff3b30]/15 bg-white/[0.02] backdrop-blur-sm p-5">
              <p className="text-[#ff3b30] text-xs tracking-[0.25em] uppercase mb-2">
                Evento Oficial
              </p>

              <p className="text-white/45 text-sm">
                Cosplay • Anime • K-Pop • Gaming
              </p>
            </div>
          </div>
        </div>

        {/* ================= MOBILE / TABLET ================= */}
        <div className="lg:hidden">

          {/* Brand */}
          <div className="text-center flex flex-col items-center">
            <p className="text-[#ff3b30] text-[10px] tracking-[0.45em] uppercase mb-3">
              クアジアンフェスト
            </p>

            <h2
              className="
                text-5xl
                sm:text-6xl
                font-black
                text-white
                leading-none
              "
              style={{
                fontFamily:
                  "Teko, sans-serif",
              }}
            >
              Q-ASIAN
            </h2>

            <span className="text-[#ff3b30] text-xs tracking-[0.45em]">
              FEST
            </span>

            <p
              className="
                text-white/45
                text-sm
                leading-[1.8]
                mt-5
                w-full
                max-w-[280px]
                text-center
                mx-auto
              "
            >
              Anime, cosplay, gaming,
              k-pop y cultura asiática
              en un solo evento.
            </p>

            {/* Social */}
            <div className="flex justify-center gap-3 mt-7">
              <SocialButton text="IG" />
              <SocialButton text="FB" />
            </div>
          </div>

          {/* Card información */}
          <div className="mt-10 border border-white/10 bg-white/[0.02] backdrop-blur-md overflow-hidden">
            
            <div className="divide-y divide-white/10">
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
          <div className="grid grid-cols-2 gap-3 mt-6">
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

        {/* ================= BOTTOM ================= */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/25 text-[10px] uppercase tracking-[0.2em] text-center">
            © {new Date().getFullYear()} Q-ASIAN FEST
          </p>

          <p className="text-white/20 text-[10px] uppercase tracking-[0.28em] text-center">
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
    <h3 className="text-white text-sm tracking-[0.3em] font-semibold mb-7 uppercase">
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
        text-white/55
        hover:text-[#ff3b30]
        transition-all
        duration-300
        text-sm
        hover:translate-x-1
        inline-block
      "
    >
      {text}
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
          border
          border-white/10
          bg-white/[0.03]
          p-4
          text-center
          text-white/70
          hover:text-[#ff3b30]
          hover:border-[#ff3b30]/40
          transition-all
          uppercase
          text-xs
          tracking-[0.2em]
          font-medium
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
        y: -2,
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
        border
        border-white/10
        bg-white/[0.03]
        text-white/70
        hover:border-[#ff3b30]
        hover:text-[#ff3b30]
        transition-all
        duration-300
        font-semibold
        tracking-widest
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
    <div className="flex items-center gap-4 text-white/55 text-sm">
      <div className="text-[#ff3b30] shrink-0">
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
    <div className="flex items-center gap-4 px-5 py-5 text-white/70">
      <div className="text-[#ff3b30] shrink-0">
        {icon}
      </div>

      <span className="text-sm">
        {text}
      </span>
    </div>
  );
}