"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Store,
  UserRound,
  Package,
} from "lucide-react";

export default function StandInscripcionPage() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const [form, setForm] = useState({
    nombre: "",
    stand: "",
    email: "",
    whatsapp: "",
    tipo: "",
    instagram: "",
    descripcion: "",
    requerimientos: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await fetch("/api/stand", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error("Error al registrar stand");
      }

      setSent(true);

      setForm({
        nombre: "",
        stand: "",
        email: "",
        whatsapp: "",
        tipo: "",
        instagram: "",
        descripcion: "",
        requerimientos: "",
      });

      setTimeout(() => {
        setSent(false);
      }, 3000);
    } catch (error) {
      console.error(error);
      alert("Error enviando formulario");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-white">
      {/* FONDO AZUL */}
      <div className="absolute inset-x-0 top-0 h-[585px] bg-[#092957]" />

      <div className="relative z-10 w-full">
        {/* ============================================================
            PARTE SUPERIOR
            MISMO ANCHO Y CENTRO QUE LA CARD
        ============================================================ */}

        <div className="mx-auto w-full max-w-[1120px] px-5 sm:px-6 lg:px-8">
          {/* STEPPER */}
          <div className="pt-7">
            <div className="mx-auto flex w-full max-w-[950px] items-start">
              <Step
                number="1"
                title="STAND"
                subtitle="Datos para participar"
                href="/stands"
                active
              />

              <StepLine />

              <Step
                number="2"
                title="+ INFO"
                subtitle="Información del stand"
                href="/informacion"
              />

              <StepLine />

              <Step
                number="3"
                title="CONFIRMACIÓN"
                subtitle="Finaliza tu inscripción"
                href="/sugerencias"
              />
            </div>
          </div>

          {/* TITULO */}
          <div className="mx-auto mt-8 w-full text-center">
            <p className="text-[10px] font-medium uppercase tracking-[0.32em] text-[#65a9d9] sm:text-[11px]">
              Registro de emprendedores
            </p>

            <h1 className="mt-2 text-[32px] font-semibold leading-tight tracking-[-0.025em] text-white sm:text-[40px] lg:text-[44px]">
              Inscripción de Stand
            </h1>
          </div>
        </div>

        {/* ============================================================
            CARD CENTRADA
            NO TOCAR ESTE CENTRADO
        ============================================================ */}

        <div className="flex w-full justify-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="
              mt-8
              mb-16
              w-full
              max-w-[1120px]
              overflow-hidden
              rounded-[15px]
              border
              border-[#e1e7ec]
              bg-white
              shadow-[0_18px_50px_rgba(0,0,0,0.12)]
            "
          >
            {/* ========================================================
                HEADER
            ======================================================== */}

            <div
              className="
                flex
                min-h-[78px]
                w-full
                items-center
                justify-between
                border-b
                border-[#e8edf1]
                px-6
                py-4
                sm:px-9
                lg:px-10
              "
            >
              <div className="flex items-center gap-4">
                <div
                  className="
                    flex
                    h-[48px]
                    w-[48px]
                    shrink-0
                    items-center
                    justify-center
                    rounded-[10px]
                    bg-[#edf6fd]
                    text-[#4fa1d9]
                  "
                >
                  <Store size={25} strokeWidth={1.7} />
                </div>

                <div>
                  <h2 className="text-[17px] font-medium text-[#263442]">
                    Datos del stand
                  </h2>

                  <p className="mt-1 text-[12px] text-[#9aa4ae]">
                    Completa la información para participar.
                  </p>
                </div>
              </div>

              <span className="text-[11px] text-[#a1aab3] sm:text-xs">
                1 de 1
              </span>
            </div>

            {/* ========================================================
                FORMULARIO
                ESPACIO REAL A LOS LADOS
            ======================================================== */}

            <form
              onSubmit={handleSubmit}
              className="
                mx-auto
                w-full
                max-w-[980px]
                px-5
                py-8
                sm:px-7
                sm:py-9
                lg:px-0
                lg:py-10
              "
            >
              {/* DATOS DEL EMPRENDEDOR */}

              <SectionTitle
                icon={<UserRound size={15} />}
                title="Datos del emprendedor"
              />

              <div
                className="
                  mt-5
                  grid
                  w-full
                  grid-cols-1
                  gap-x-8
                  gap-y-6
                  md:grid-cols-2
                "
              >
                <Input
                  label="Nombre completo"
                  name="nombre"
                  value={form.nombre}
                  onChange={handleChange}
                  placeholder="Escribe tu nombre"
                  required
                />

                <Input
                  label="Correo electrónico"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="correo@ejemplo.com"
                  required
                />

                <Input
                  label="WhatsApp / teléfono"
                  name="whatsapp"
                  type="tel"
                  value={form.whatsapp}
                  onChange={handleChange}
                  placeholder="099 999 9999"
                  required
                />

                <Input
                  label="Instagram / red social"
                  name="instagram"
                  value={form.instagram}
                  onChange={handleChange}
                  placeholder="@tuemprendimiento"
                />
              </div>

              {/* INFORMACIÓN DEL STAND */}

              <div className="mt-11">
                <SectionTitle
                  icon={<Store size={15} />}
                  title="Información del stand"
                />

                <div
                  className="
                    mt-5
                    grid
                    w-full
                    grid-cols-1
                    gap-x-8
                    gap-y-6
                    md:grid-cols-2
                  "
                >
                  <Input
                    label="Nombre del stand"
                    name="stand"
                    value={form.stand}
                    onChange={handleChange}
                    placeholder="Nombre de tu emprendimiento"
                    required
                  />

                  <Select
                    label="Tipo de stand"
                    name="tipo"
                    value={form.tipo}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* PRODUCTOS */}

              <div className="mt-11">
                <SectionTitle
                  icon={<Package size={15} />}
                  title="Productos"
                />

                <div className="mt-5 grid w-full grid-cols-1 gap-6">
                  <TextArea
                    label="Describe tu stand"
                    name="descripcion"
                    value={form.descripcion}
                    onChange={handleChange}
                    placeholder="Cuéntanos brevemente qué ofreces en tu stand..."
                    rows={4}
                    required
                  />

                  <TextArea
                    label="Productos que ofrecerás"
                    name="requerimientos"
                    value={form.requerimientos}
                    onChange={handleChange}
                    placeholder="Ejemplo: ilustraciones, stickers, accesorios, comida..."
                    rows={3}
                    required
                  />
                </div>
              </div>

              {/* FOOTER */}

              <div
                className="
                  mt-11
                  flex
                  w-full
                  flex-col
                  gap-5
                  border-t
                  border-[#e8edf1]
                  pt-7
                  sm:flex-row
                  sm:items-center
                  sm:justify-between
                "
              >
                <div>
                  <p className="text-[12px] font-medium text-[#526170]">
                    Completa todos los datos
                  </p>

                  <p className="mt-1 text-[10px] text-[#9ba4ad] sm:text-[11px]">
                    Revisaremos tu información para confirmar tu participación.
                  </p>
                </div>

                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={!loading ? { y: -1 } : undefined}
                  whileTap={!loading ? { scale: 0.98 } : undefined}
                  className="
                    flex
                    h-[47px]
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-[5px]
                    bg-[#54a5dd]
                    px-8
                    text-[11px]
                    font-semibold
                    uppercase
                    tracking-[0.05em]
                    text-white
                    transition
                    hover:bg-[#4396d1]
                    disabled:cursor-not-allowed
                    disabled:opacity-60
                    sm:w-auto
                  "
                >
                  {loading ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 0.8,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="
                          h-4
                          w-4
                          rounded-full
                          border-2
                          border-white/30
                          border-t-white
                        "
                      />

                      Enviando...
                    </>
                  ) : (
                    <>
                      Registrar stand
                      <ArrowRight size={16} />
                    </>
                  )}
                </motion.button>
              </div>

              {/* ÉXITO */}

              <AnimatePresence>
                {sent && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    className="
                      mt-5
                      flex
                      items-center
                      gap-2
                      rounded-[5px]
                      bg-[#eef9f2]
                      px-4
                      py-3
                      text-[13px]
                      font-medium
                      text-green-700
                    "
                  >
                    <CheckCircle2 size={17} />
                    Stand registrado correctamente.
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </main>
  );
}

/* ============================================================
   TITULO DE SECCION
============================================================ */

function SectionTitle({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <div className="flex w-full items-center gap-2 border-b border-[#edf0f3] pb-3">
      <span className="text-[#54a5dd]">
        {icon}
      </span>

      <h3 className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#526170]">
        {title}
      </h3>
    </div>
  );
}

/* ============================================================
   INPUT
============================================================ */

function Input({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="w-full">
      <label className="mb-2 block text-[12px] font-medium text-[#526170]">
        {label}

        {required && (
          <span className="ml-1 text-[#54a5dd]">
            *
          </span>
        )}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="
          h-[46px]
          w-full
          rounded-[5px]
          border
          border-[#d7dfe7]
          bg-white
          px-3
          text-[13px]
          text-[#263442]
          outline-none
          transition
          placeholder:text-[#aeb7c1]
          focus:border-[#62a6d9]
          focus:ring-2
          focus:ring-[#62a6d9]/10
        "
      />
    </div>
  );
}

/* ============================================================
   SELECT
============================================================ */

function Select({
  label,
  name,
  value,
  onChange,
  required = false,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  required?: boolean;
}) {
  return (
    <div className="w-full">
      <label className="mb-2 block text-[12px] font-medium text-[#526170]">
        {label}

        {required && (
          <span className="ml-1 text-[#54a5dd]">
            *
          </span>
        )}
      </label>

      <select
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="
          h-[46px]
          w-full
          rounded-[5px]
          border
          border-[#d7dfe7]
          bg-white
          px-3
          text-[13px]
          text-[#526170]
          outline-none
          transition
          focus:border-[#62a6d9]
          focus:ring-2
          focus:ring-[#62a6d9]/10
        "
      >
        <option value="">
          Selecciona una categoría
        </option>

        <option value="anime">
          Anime Merch
        </option>

        <option value="comida">
          Comida / Snacks
        </option>

        <option value="arte">
          Arte e Ilustración
        </option>

        <option value="figuras">
          Figuras / Coleccionables
        </option>

        <option value="gaming">
          Gaming
        </option>

        <option value="kpop">
          K-Pop Merch
        </option>

        <option value="otro">
          Otro
        </option>
      </select>
    </div>
  );
}

/* ============================================================
   TEXTAREA
============================================================ */

function TextArea({
  label,
  name,
  value,
  onChange,
  placeholder,
  rows,
  required = false,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
  rows: number;
  required?: boolean;
}) {
  return (
    <div className="w-full">
      <label className="mb-2 block text-[12px] font-medium text-[#526170]">
        {label}

        {required && (
          <span className="ml-1 text-[#54a5dd]">
            *
          </span>
        )}
      </label>

      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        required={required}
        className="
          w-full
          resize-none
          rounded-[5px]
          border
          border-[#d7dfe7]
          bg-white
          px-3
          py-3
          text-[13px]
          leading-6
          text-[#263442]
          outline-none
          transition
          placeholder:text-[#aeb7c1]
          focus:border-[#62a6d9]
          focus:ring-2
          focus:ring-[#62a6d9]/10
        "
      />
    </div>
  );
}

/* ============================================================
   STEPPER
============================================================ */

function Step({
  number,
  title,
  subtitle,
  href,
  active = false,
}: {
  number: string;
  title: string;
  subtitle: string;
  href: string;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      className="
        flex
        min-w-0
        flex-1
        flex-col
        items-center
        text-center
      "
    >
      <div
        className={`
          flex
          h-[37px]
          w-[37px]
          items-center
          justify-center
          rounded-full
          text-[11px]
          font-medium
          ${
            active
              ? "bg-[#5ca9df] text-white"
              : "bg-white/15 text-white/70"
          }
        `}
      >
        {number}
      </div>

      <span
        className={`
          mt-3
          text-[10px]
          font-semibold
          sm:text-[11px]
          ${active ? "text-white" : "text-white/70"}
        `}
      >
        {title}
      </span>

      <span className="mt-2 max-w-[160px] text-[8px] leading-3 text-white/40 sm:text-[9px]">
        {subtitle}
      </span>
    </Link>
  );
}

/* ============================================================
   LINEA STEPPER
============================================================ */

function StepLine() {
  return (
    <div
      className="
        mt-[18px]
        flex-1
        border-t
        border-dashed
        border-white/20
      "
    />
  );
}