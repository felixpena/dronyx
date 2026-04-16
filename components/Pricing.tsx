"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const plans = [
  {
    name: "Spot",
    price: "Desde USD 2.500",
    period: "por inspección",
    description: "Para parques de hasta 10 MW o inspecciones puntuales.",
    features: [
      "Cobertura hasta 10 MW",
      "Reporte técnico PDF",
      "Clasificación por severidad",
      "Mapeo georreferenciado",
      "Entrega en 24 horas",
    ],
    cta: "Solicitar cotización",
    highlight: false,
  },
  {
    name: "Anual",
    price: "Desde USD 14.900",
    period: "por año",
    description: "2 inspecciones anuales para parques de hasta 50 MW. El estándar para utilities.",
    features: [
      "Cobertura hasta 50 MW",
      "2 inspecciones / año",
      "Reporte técnico + plataforma online",
      "Seguimiento de fallas entre campañas",
      "Comparativa histórica",
      "Soporte prioritario",
    ],
    cta: "Solicitar demo",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "A medida",
    period: "",
    description: "Para flotas de parques, contratos multisite o integraciones con sistemas SCADA.",
    features: [
      "Sin límite de MW",
      "Frecuencia personalizada",
      "Integración SCADA / CMMS",
      "API de datos",
      "SLA garantizado",
      "Gerente de cuenta dedicado",
    ],
    cta: "Hablar con ventas",
    highlight: false,
  },
];

export default function Pricing() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      id="precios"
      style={{
        background: "#0D1611",
        padding: "96px 40px",
      }}
    >
      <div
        ref={ref}
        style={{
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        {/* Label */}
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
          05 — Precios
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.05 }}
          style={{
            fontFamily: "var(--font-inter), system-ui, sans-serif",
            fontSize: "clamp(28px, 3.5vw, 48px)",
            fontWeight: 700,
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            color: "#E2F4E8",
            maxWidth: 520,
            marginBottom: 16,
          }}
        >
          Precios claros,{" "}
          <span style={{ color: "#22C55E" }}>sin sorpresas.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            fontFamily: "var(--font-inter), system-ui, sans-serif",
            fontSize: 15,
            fontWeight: 400,
            lineHeight: 1.7,
            color: "#6B876B",
            maxWidth: 440,
            marginBottom: 64,
          }}
        >
          Todos los planes incluyen traslado dentro de Chile, equipos y
          procesamiento. Sin costos ocultos.
        </motion.p>

        {/* Plans grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 20,
            alignItems: "start",
          }}
        >
          {plans.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.1 + i * 0.1 }}
              style={{
                background: p.highlight ? "rgba(34, 197, 94, 0.06)" : "#0A0F0C",
                border: p.highlight
                  ? "1px solid rgba(34, 197, 94, 0.35)"
                  : "1px solid rgba(34, 197, 94, 0.1)",
                borderRadius: 4,
                padding: "36px 32px",
                position: "relative",
              }}
            >
              {p.highlight && (
                <div
                  style={{
                    position: "absolute",
                    top: -1,
                    left: 32,
                    right: 32,
                    height: 2,
                    background: "#22C55E",
                    borderRadius: "0 0 2px 2px",
                  }}
                />
              )}
              {p.highlight && (
                <div
                  style={{
                    display: "inline-block",
                    background: "rgba(34, 197, 94, 0.12)",
                    border: "1px solid rgba(34, 197, 94, 0.25)",
                    borderRadius: 9999,
                    padding: "3px 10px",
                    fontFamily: "var(--font-inter), system-ui, sans-serif",
                    fontSize: 11,
                    fontWeight: 600,
                    color: "#22C55E",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    marginBottom: 20,
                  }}
                >
                  Más popular
                </div>
              )}

              <div
                style={{
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                  fontSize: 13,
                  fontWeight: 600,
                  color: p.highlight ? "#22C55E" : "#6B876B",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  marginBottom: 12,
                }}
              >
                {p.name}
              </div>

              <div
                style={{
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                  fontSize: "clamp(22px, 2.5vw, 30px)",
                  fontWeight: 700,
                  color: "#E2F4E8",
                  letterSpacing: "-0.03em",
                  lineHeight: 1.1,
                }}
              >
                {p.price}
              </div>
              {p.period && (
                <div
                  style={{
                    fontFamily: "var(--font-inter), system-ui, sans-serif",
                    fontSize: 13,
                    fontWeight: 400,
                    color: "#6B876B",
                    marginTop: 4,
                    marginBottom: 16,
                  }}
                >
                  {p.period}
                </div>
              )}

              <p
                style={{
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                  fontSize: 14,
                  fontWeight: 400,
                  lineHeight: 1.6,
                  color: "#6B876B",
                  marginTop: p.period ? 0 : 16,
                  marginBottom: 28,
                  paddingBottom: 28,
                  borderBottom: "1px solid rgba(34, 197, 94, 0.1)",
                }}
              >
                {p.description}
              </p>

              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                  marginBottom: 32,
                }}
              >
                {p.features.map((f, j) => (
                  <li
                    key={j}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 10,
                    }}
                  >
                    <span
                      style={{
                        color: "#22C55E",
                        fontWeight: 600,
                        flexShrink: 0,
                        fontSize: 14,
                        lineHeight: "20px",
                      }}
                    >
                      ✓
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-inter), system-ui, sans-serif",
                        fontSize: 14,
                        fontWeight: 400,
                        lineHeight: 1.5,
                        color: "#E2F4E8",
                        opacity: 0.8,
                      }}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contacto"
                style={{
                  display: "block",
                  textAlign: "center",
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                  fontSize: 14,
                  fontWeight: 600,
                  textDecoration: "none",
                  padding: "13px 24px",
                  borderRadius: 9999,
                  transition: "all 0.2s",
                  ...(p.highlight
                    ? {
                        background: "#22C55E",
                        color: "#0A0F0C",
                        border: "1px solid #22C55E",
                      }
                    : {
                        background: "transparent",
                        color: "#E2F4E8",
                        border: "1px solid rgba(226,244,232,0.2)",
                      }),
                }}
                onMouseEnter={(e) => {
                  const el = e.target as HTMLElement;
                  if (p.highlight) {
                    el.style.background = "#16A34A";
                    el.style.borderColor = "#16A34A";
                  } else {
                    el.style.borderColor = "rgba(226,244,232,0.4)";
                  }
                }}
                onMouseLeave={(e) => {
                  const el = e.target as HTMLElement;
                  if (p.highlight) {
                    el.style.background = "#22C55E";
                    el.style.borderColor = "#22C55E";
                  } else {
                    el.style.borderColor = "rgba(226,244,232,0.2)";
                  }
                }}
              >
                {p.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
