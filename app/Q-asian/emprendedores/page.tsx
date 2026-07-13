"use client";

import { useMemo, useState, useEffect } from "react";

import "./styles/resident.css";

import CategoryMenu from "./components/CategoryMenu";
import EntrepreneurList from "./components/EntrepreneurList";
import EntrepreneurPanel from "./components/EntrepreneurPanel";
import KeyboardNavigation from "./components/KeyboardNavigation";

import { emprendedores } from "./data/emprendedores";

export default function EmprendedoresPage() {
  const categories = useMemo(
    () => ["COLECCIONABLES", "ARTESANIAS", "GASTRONOMIA", "DULCES", "ROPA"],
    []
  );

  const categoryKeyMap = [
    "coleccionables",
    "artesanias",
    "gastronomia",
    "dulces",
    "ropa",
  ] as const;

  const [selectedCategory, setSelectedCategory] = useState(0);
  const [selectedEntrepreneur, setSelectedEntrepreneur] = useState(0);

  const [menuLevel, setMenuLevel] =
    useState<"category" | "entrepreneur">("category");

  const [mobileStep, setMobileStep] =
    useState<"categories" | "entrepreneurs" | "details">("categories");

  const activeCategory = categoryKeyMap[selectedCategory];
  const entrepreneurs = emprendedores[activeCategory] ?? [];

  useEffect(() => {
    setSelectedEntrepreneur(0);
  }, [selectedCategory]);

  const currentEntrepreneur =
    entrepreneurs[selectedEntrepreneur] ?? entrepreneurs[0];

  return (
    <section className="relative text-white resident-font min-h-[calc(100vh-88px)] mt-[88px] overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/bgas.png"
          alt="background"
          className="w-full h-full object-cover scale-110 opacity-60"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-red-600/10 blur-[160px]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-cyan-500/10 blur-[160px]" />
      </div>

      {/* KEYBOARD */}
      <div className="hidden md:block relative z-10">
        <KeyboardNavigation
          menuLevel={menuLevel}
          setMenuLevel={setMenuLevel}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedEntrepreneur={selectedEntrepreneur}
          setSelectedEntrepreneur={setSelectedEntrepreneur}
          totalCategories={categories.length}
          totalEntrepreneurs={entrepreneurs.length}
        />
      </div>

      <main className="relative z-10 p-3 md:p-4">

        {/* MOBILE */}
        <div className="md:hidden">

          {mobileStep === "categories" && (
            <CategoryMenu
              categories={categories}
              selected={selectedCategory}
              setSelected={(value: number) => {
                setSelectedCategory(value);
                setMobileStep("entrepreneurs");
              }}
              active={true}
            />
          )}

          {mobileStep === "entrepreneurs" && (
            <div>
              <button
                onClick={() => setMobileStep("categories")}
                className="mb-4 border border-red-700 px-4 py-2 bg-black/70"
              >
                ← Regresar
              </button>

              <EntrepreneurList
                entrepreneurs={entrepreneurs}
                selected={selectedEntrepreneur}
                setSelected={(value: number) => {
                  setSelectedEntrepreneur(value);
                  setMobileStep("details");
                }}
                active={true}
              />
            </div>
          )}

          {mobileStep === "details" && (
            <div>
              <button
                onClick={() => setMobileStep("entrepreneurs")}
                className="mb-4 border border-red-700 px-4 py-2 bg-black/70"
              >
                ← Volver
              </button>

              {currentEntrepreneur && (
                <EntrepreneurPanel entrepreneur={currentEntrepreneur} />
              )}
            </div>
          )}
        </div>

        {/* DESKTOP */}
        <div className="hidden md:grid grid-cols-[240px_260px_1fr] xl:grid-cols-[320px_320px_1fr] gap-3 h-[calc(100vh-120px)]">

          <CategoryMenu
            categories={categories}
            selected={selectedCategory}
            setSelected={setSelectedCategory}
            active={menuLevel === "category"}
          />

          <EntrepreneurList
            entrepreneurs={entrepreneurs}
            selected={selectedEntrepreneur}
            setSelected={setSelectedEntrepreneur}
            active={menuLevel === "entrepreneur"}
          />

          {currentEntrepreneur && (
            <EntrepreneurPanel entrepreneur={currentEntrepreneur} />
          )}

        </div>
      </main>
    </section>
  );
}