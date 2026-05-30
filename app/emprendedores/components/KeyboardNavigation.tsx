"use client";

import { useEffect } from "react";

interface Props {
  menuLevel:
    | "category"
    | "entrepreneur";

  setMenuLevel: (
    value:
      | "category"
      | "entrepreneur"
  ) => void;

  selectedCategory: number;
  setSelectedCategory: (
    value: number
  ) => void;

  selectedEntrepreneur: number;
  setSelectedEntrepreneur: (
    value: number
  ) => void;

  totalCategories: number;
  totalEntrepreneurs: number;
}

export default function KeyboardNavigation({
  menuLevel,
  setMenuLevel,
  selectedCategory,
  setSelectedCategory,
  selectedEntrepreneur,
  setSelectedEntrepreneur,
  totalCategories,
  totalEntrepreneurs,
}: Props) {
  useEffect(() => {
    const handleKey = (
      e: KeyboardEvent
    ) => {
      const down =
        e.key === "ArrowDown" ||
        e.key.toLowerCase() === "s";

      const up =
        e.key === "ArrowUp" ||
        e.key.toLowerCase() === "w";

      const right =
        e.key === "ArrowRight" ||
        e.key === "Enter";

      const left =
        e.key === "ArrowLeft" ||
        e.key === "Escape";

      if (
        menuLevel === "category"
      ) {
        if (down) {
          setSelectedCategory(
            selectedCategory ===
              totalCategories - 1
              ? 0
              : selectedCategory + 1
          );
        }

        if (up) {
          setSelectedCategory(
            selectedCategory === 0
              ? totalCategories - 1
              : selectedCategory - 1
          );
        }

        if (right) {
          setMenuLevel(
            "entrepreneur"
          );
        }
      }

      if (
        menuLevel ===
        "entrepreneur"
      ) {
        if (down) {
          setSelectedEntrepreneur(
            selectedEntrepreneur ===
              totalEntrepreneurs - 1
              ? 0
              : selectedEntrepreneur +
                  1
          );
        }

        if (up) {
          setSelectedEntrepreneur(
            selectedEntrepreneur ===
              0
              ? totalEntrepreneurs -
                  1
              : selectedEntrepreneur -
                  1
          );
        }

        if (left) {
          setMenuLevel(
            "category"
          );
        }
      }
    };

    window.addEventListener(
      "keydown",
      handleKey
    );

    return () =>
      window.removeEventListener(
        "keydown",
        handleKey
      );
  }, [
    menuLevel,
    selectedCategory,
    selectedEntrepreneur,
    totalCategories,
    totalEntrepreneurs,
  ]);

  return null;
}