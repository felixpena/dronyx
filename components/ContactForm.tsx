"use client";

import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { motion, useInView } from "framer-motion";

type FormData = {
  nombre: string;
  empresa: string;
  email: string;
  mw: string;
  mensaje: string;
};

export default function ContactForm() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/mojyjykn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("success");
        reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const labelStyle = {
    fontFamily: "var(--font-inter), system-ui, sans-serif",
    fontSize: 12,
    fontWeight: 500,
    color: "#6B876B",
    letterSpacing: "0.06em",
    textTransform: "uppercase" as const,
    display: "block",
    marginBottom: 8,
  };

  const errorStyle = {
    fontFamily: "var(--font-inter), system-ui, sans-serif",
    fontSize: 12,
    color: "#EF4444",
    marginTop: 4,
  };

  return (
    <section
      id="contacto"
      style={{
        background: "#0A0F0C",
        padding: "96px 40px",
      }}
    >
      <div
        ref={ref}
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "0 80px",
          alignItems: "start",
        }}
        className="contact-grid"
      >
        {/* Left */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            style={{
              fontFamily: "var(--font-inter), system-ui, sans-serif",
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#6B876B",
              marginBottom: 20,
            }}
          >
            06 — Contacto
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.05 }}
            style={{
              fontFamily: "var(--font-inter), system-ui, sans-serif",
              fontSize: "clamp(28px, 3.2vw, 44px)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              color: "#E2F4E8",
              marginBottom: 20,
            }}
          >
            Solicita tu{" "}
            <span style={{ color: "#22C55E" }}>demo gratuita.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              fontFamily: "var(--font-inter), system-ui, sans-serif",
              fontSize: 15,
              fontWeight: 400,
              lineHeight: 1.75,
              color: "#6B876B",
              marginBottom: 48,
              maxWidth: 420,
            }}
          >
            Coordinamos un vuelo de demostración sobre tu parque o uno de
            referencia. Sin costo, sin compromiso. Verás el tipo de reporte que
            entregaríamos.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 20,
            }}
          >
            {[
              { icon: "✉", label: "Email", value: "hola@dronyx.cl" },
              { icon: "📍", label: "Operaciones", value: "Santiago, Chile" },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    background: "rgba(34, 197, 94, 0.08)",
                    border: "1px solid rgba(34, 197, 94, 0.15)",
                    borderRadius: 4,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 16,
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-inter), system-ui, sans-serif",
                      fontSize: 11,
                      fontWeight: 500,
                      color: "#6B876B",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      marginBottom: 2,
                    }}
                  >
                    {item.label}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-inter), system-ui, sans-serif",
                      fontSize: 14,
                      fontWeight: 400,
                      color: "#E2F4E8",
                    }}
                  >
                    {item.value}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: form */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          style={{
            background: "#0D1611",
            border: "1px solid rgba(34, 197, 94, 0.12)",
            borderRadius: 4,
            padding: "40px 36px",
          }}
        >
          {status === "success" ? (
            <div
              style={{
                textAlign: "center",
                padding: "48px 0",
              }}
            >
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: "50%",
                  background: "rgba(34, 197, 94, 0.12)",
                  border: "1px solid rgba(34, 197, 94, 0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 20px",
                  fontSize: 24,
                }}
              >
                ✓
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                  fontSize: 20,
                  fontWeight: 600,
                  color: "#E2F4E8",
                  letterSpacing: "-0.02em",
                  marginBottom: 10,
                }}
              >
                Solicitud recibida
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                  fontSize: 14,
                  fontWeight: 400,
                  lineHeight: 1.7,
                  color: "#6B876B",
                }}
              >
                Te contactaremos en menos de 24 horas para coordinar la demo.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "20px 20px",
                  marginBottom: 20,
                }}
                className="form-grid"
              >
                {/* Nombre */}
                <div>
                  <label style={labelStyle}>Nombre</label>
                  <input
                    type="text"
                    placeholder="Juan Pérez"
                    className={`dronyx-input${errors.nombre ? " dronyx-input-error" : ""}`}
                    {...register("nombre", { required: "Campo requerido" })}
                  />
                  {errors.nombre && (
                    <p style={errorStyle}>{errors.nombre.message}</p>
                  )}
                </div>

                {/* Empresa */}
                <div>
                  <label style={labelStyle}>Empresa</label>
                  <input
                    type="text"
                    placeholder="Enel Chile S.A."
                    className={`dronyx-input${errors.empresa ? " dronyx-input-error" : ""}`}
                    {...register("empresa", { required: "Campo requerido" })}
                  />
                  {errors.empresa && (
                    <p style={errorStyle}>{errors.empresa.message}</p>
                  )}
                </div>
              </div>

              {/* Email */}
              <div style={{ marginBottom: 20 }}>
                <label style={labelStyle}>Email corporativo</label>
                <input
                  type="email"
                  placeholder="juan@empresa.cl"
                  className={`dronyx-input${errors.email ? " dronyx-input-error" : ""}`}
                  {...register("email", {
                    required: "Campo requerido",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Email inválido",
                    },
                  })}
                />
                {errors.email && (
                  <p style={errorStyle}>{errors.email.message}</p>
                )}
              </div>

              {/* MW */}
              <div style={{ marginBottom: 20 }}>
                <label style={labelStyle}>Capacidad del parque (MW)</label>
                <input
                  type="text"
                  placeholder="Ej: 45 MW"
                  className={`dronyx-input${errors.mw ? " dronyx-input-error" : ""}`}
                  {...register("mw", { required: "Campo requerido" })}
                />
                {errors.mw && <p style={errorStyle}>{errors.mw.message}</p>}
              </div>

              {/* Mensaje */}
              <div style={{ marginBottom: 28 }}>
                <label style={labelStyle}>Mensaje (opcional)</label>
                <textarea
                  rows={4}
                  placeholder="Cuéntanos sobre tu parque o lo que necesitas..."
                  className="dronyx-input"
                  style={{ resize: "vertical", minHeight: 100 }}
                  {...register("mensaje")}
                />
              </div>

              {status === "error" && (
                <p
                  style={{
                    fontFamily: "var(--font-inter), system-ui, sans-serif",
                    fontSize: 12,
                    color: "#EF4444",
                    marginBottom: 16,
                    padding: "10px 14px",
                    background: "rgba(239,68,68,0.08)",
                    border: "1px solid rgba(239,68,68,0.2)",
                    borderRadius: 4,
                  }}
                >
                  Error al enviar. Intenta nuevamente o escríbenos directamente
                  a hola@dronyx.cl
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="dronyx-submit"
                style={{
                  opacity: status === "sending" ? 0.7 : 1,
                  cursor: status === "sending" ? "not-allowed" : "pointer",
                }}
              >
                {status === "sending" ? "Enviando..." : "Solicitar demo gratuita →"}
              </button>
            </form>
          )}
        </motion.div>
      </div>

      <style>{`
        .dronyx-input {
          width: 100%;
          background: #0D1611;
          border: 1px solid rgba(34, 197, 94, 0.15);
          border-radius: 4px;
          padding: 14px 16px;
          font-family: var(--font-inter), system-ui, sans-serif;
          font-size: 14px;
          font-weight: 400;
          color: #E2F4E8;
          outline: none;
          transition: border-color 0.2s;
          box-sizing: border-box;
        }
        .dronyx-input::placeholder { color: #6B876B; }
        .dronyx-input:focus { border-color: rgba(34, 197, 94, 0.45); }
        .dronyx-input-error { border-color: #EF4444 !important; }
        .dronyx-submit {
          width: 100%;
          background: #22C55E;
          border: none;
          border-radius: 9999px;
          padding: 14px 24px;
          font-family: var(--font-inter), system-ui, sans-serif;
          font-size: 15px;
          font-weight: 600;
          color: #0A0F0C;
          transition: background 0.2s;
          letter-spacing: -0.01em;
        }
        .dronyx-submit:hover:not(:disabled) { background: #16A34A; }
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 48px 0 !important; }
          .form-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
