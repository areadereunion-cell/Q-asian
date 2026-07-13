"use client";

import Link from "next/link";
import {
  MapPin,
  Mail,
  Phone,
} from "lucide-react";

const links = [
  { name: "INICIO", href: "/" },
  { name: "EVENTOS", href: "/eventos" },
  { name: "EMPRENDEDORES", href: "/emprendedores" },
  { name: "CONTÁCTANOS", href: "/contactanos" },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200">

      <div className="
        h-[3px]
        bg-gradient-to-r
        from-blue-900
        via-blue-600
        to-red-600
      " />

      <div className="
        max-w-7xl
        mx-auto
        px-6
        sm:px-10
        lg:px-20
        py-10
      ">

        <div className="
          grid
          grid-cols-1
          md:grid-cols-3
          gap-10
          lg:gap-20
        ">


          {/* MARCA */}

          <div className="
            flex
            flex-col
            items-center
            md:items-start
            text-center
            md:text-left
          ">

            <h2 className="
              text-black
              text-xl
              font-extrabold
            ">
              ADMINISTRACIÓN
            </h2>


            <p className="
              text-red-600
              text-xs
              font-semibold
              tracking-[0.22em]
              mt-1
            ">
              ZONAL QUITUMBE
            </p>


            <div className="
              w-14
              h-[2px]
              bg-blue-900
              mt-5
              mb-5
            "/>


            <p className="
              text-sm
              text-slate-500
              leading-6
              max-w-xs
            ">
              Trabajamos por el desarrollo,
              participación y crecimiento
              de nuestra comunidad.
            </p>

          </div>





          {/* LINKS */}

          <div className="
            flex
            flex-col
            items-center
            text-center
          ">

            <h3 className="
              text-black
              text-sm
              font-bold
              mb-6
            ">
              NAVEGACIÓN
            </h3>


            <nav className="
              flex
              flex-col
              items-center
              gap-3
            ">

              {links.map((item)=>(
                <Link
                  key={item.name}
                  href={item.href}
                  className="
                    text-sm
                    text-slate-600
                    hover:text-red-600
                    transition
                  "
                >
                  {item.name}
                </Link>
              ))}

            </nav>


          </div>






          {/* CONTACTO */}

          <div className="
            flex
            flex-col
            items-center
            md:items-end
            text-center
            md:text-right
          ">


            <h3 className="
              text-black
              text-sm
              font-bold
              mb-6
            ">
              CONTACTO
            </h3>


            <div className="
              flex
              flex-col
              items-center
              md:items-end
              gap-4
            ">


              <Info
                icon={<MapPin size={17}/>}
                text="Quito, Ecuador"
              />


              <Info
                icon={<Mail size={17}/>}
                text="contacto@quitumbe.gob.ec"
              />


              <Info
                icon={<Phone size={17}/>}
                text="+593 99 999 9999"
              />


            </div>


          </div>


        </div>





        <div className="
          mt-10
          pt-5
          border-t
          border-slate-200
          flex
          justify-center
        ">

          <p className="
            text-xs
            text-slate-400
            text-center
          ">
            © {new Date().getFullYear()} Administración Zonal Quitumbe
          </p>

        </div>


      </div>

    </footer>
  );
}



function Info({
  icon,
  text,
}:{
  icon: React.ReactNode;
  text: string;
}){

  return (
    <div className="
      flex
      items-center
      justify-center
      gap-3
      text-sm
      text-slate-600
      w-full
    ">

      <span className="text-red-600 shrink-0">
        {icon}
      </span>


      <span>
        {text}
      </span>

    </div>
  );
}