import HeroSection from "./components/hero/HeroSection";
import AboutSection from "./components/about/AboutSection";
import EmpreSection from "./components/emprendedores/EmpreSection";
import Horasection from "./components/hora/hora";
import Contactsection from "./components/contacto/contact";
import Mapasection from "./components/Mapa/mapa";
import Footer from "./components/footer/footer";



export default function Page() {
  return (
    <main className="bg-black text-white">

      {/* HERO */}
      <HeroSection />
      
      {/* QUIÉNES SOMOS */}
      <AboutSection />
      <EmpreSection />
      <Horasection />
      <Contactsection/>
      <Mapasection/>
      <Footer/>

    </main>
  );
}