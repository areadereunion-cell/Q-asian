import AnimeCard from "@/components/ui/AnimeCard";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="min-h-screen relative overflow-hidden px-4 md:px-6 lg:px-8 py-8">
      
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/background.webp"
          alt="Background"
          fill
          priority
          className="object-cover object-center opacity-60 scale-105"
        />
        <div className="absolute inset-0 bg-black/35" />
      </div>

      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-[1]">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-500/10 blur-[180px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[180px]" />
      </div>

      {/* Content */}
      <section className="relative z-10 w-full max-w-[1600px] mx-auto flex flex-col gap-10">

        <AnimeCard
          title="Información"
          description="Conoce fechas, invitados, actividades y todo sobre Q-Asian Fest."
          image="/images/info-card.webp"
          href="/informacion"
          glowColor="#ff7a00"
        />

        <AnimeCard
          title="Emprendedores"
          description="Descubre los increíbles emprendimientos del festival."
          image="/images/emprendedores-card.webp"
          href="/emprendedores"
          glowColor="#00bfff"
        />

        <AnimeCard
          title="Inscripción"
          description="Reserva tu entrada y prepárate para vivir la experiencia."
          image="/images/inscripcion-card.webp"
          href="/inscripcion"
          glowColor="#8b5cf6"
        />

      </section>
    </main>
  );
}