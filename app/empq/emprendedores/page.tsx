"use client";

import { useMemo } from "react";
import { useRouter } from "next/navigation";

import "./styles/resident.css";

import CategoryMenu from "./components/CategoryMenu";

export default function EmprendedoresPage() {
  const router = useRouter();

  const categories = useMemo(
    () => [
      "COLECCIONABLES",
      "ARTESANIAS",
      "GASTRONOMIA",
      "DULCES",
      "ROPA",
    ],
    []
  );

  const categoryRoutes = [
    "coleccionables",
    "artesanias",
    "gastronomia",
    "dulces",
    "ropa",
  ] as const;

  const handleCategorySelect = (value: number) => {
    router.push(`/emprendedores/${categoryRoutes[value]}`);
  };

  return (
    <section
      className="
        relative
        mt-[88px]
        min-h-[calc(100vh-88px)]
        overflow-hidden
        bg-white
        resident-font
      "
    >
      {/* FONDO */}
      <div className="absolute inset-0 z-0 bg-white" />

      {/* CONTENIDO */}
      <main className="relative z-10 p-3 md:p-6">
        <div className="min-h-[calc(100vh-140px)] flex items-center justify-center">
          <div className="w-full max-w-[1320px]">
            <CategoryMenu
              categories={categories}
              selected={-1}
              setSelected={handleCategorySelect}
              active={true}
            />
          </div>
        </div>
      </main>
    </section>
  );
}