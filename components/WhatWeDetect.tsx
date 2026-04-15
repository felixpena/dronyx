"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const severities = [
  {
    level: "Crítico",
    color: "#EF4444",
    bgColor: "rgba(239, 68, 68, 0.06)",
    borderColor: "rgba(239, 68, 68, 0.2)",
    items: [
      "Hotspots superiores a 40°C de diferencia",
      "Bypass diodes permanentemente activas",
      "Módulos en cortocircuito",
      "Fallos de aislamiento a tierra",
    ],
    action: "Reemplazo inmediato recomendado",
  },
  {
    level: "Moderado",
    color: "#F97316",
    bgColor: "rgba(249, 115, 22, 0.06)",
    borderColor: "rgba(249, 115, 22, 0.2)",
    items: [
      "Hotspots entre 15°C y 40°C de diferencia",
      "Celdas con degradación parcial",
      "Sombreado por suciedad concentrada",
      "Conexiones con resistencia elevada",
    ],
    action: "Mantenimiento en próxima ventana",
  },
  {
    level: "Menor",
    color: "#EAB308",
    bgColor: "rgba(234, 179, 8, 0.06)",
    borderColor: "rgba(234, 179, 8, 0.2)",
    items: [
      "Hotspots menores a 15°C de diferencia",
      "Degradación leve por PID",
      "Módulos con snail trails",
      "Microfisuras en etapa inicial",
    ],
    action: "Monitoreo y seguimiento",
  },
];

export default function WhatWeDetect() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section
      id="que-detecta"
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
          03 — Qué detecta la IA
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
            maxWidth: 560,
            marginBottom: 64,
          }}
        >
          Cada falla clasificada por{" "}
          <span style={{ color: "#22C55E" }}>severidad e impacto.</span>
        </motion.h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 20,
          }}
        >
          {severities.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.1 + i * 0.1 }}
              style={{
                background: s.bgColor,
                border: `1px solid ${s.borderColor}`,
                borderRadius: 4,
                padding: "32px 28px",
              }}
            >
              {/* Severity badge */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  marginBottom: 24,
                }}
              >
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: s.color,
                  }}
                />
                <span
                  style={{
                    fontFamily: "var(--font-inter), system-ui, sans-serif",
                    fontSize: 13,
                    fontWeight: 600,
                    color: s.color,
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                  }}
                >
                  {s.level}
                </span>
              </div>

              {/* Items */}
              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                  marginBottom: 28,
                }}
              >
                {s.items.map((item, j) => (
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
                        width: 4,
                        height: 4,
                        borderRadius: "50%",
                        background: s.color,
                        flexShrink: 0,
                        marginTop: 8,
                        opacity: 0.7,
                      }}
                    />
                    <span
                      style={{
                        fontFamily: "var(--font-inter), system-ui, sans-serif",
                        fontSize: 14,
                        fontWeight: 400,
                        lineHeight: 1.6,
                        color: "#E2F4E8",
                        opacity: 0.85,
                      }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Action */}
              <div
                style={{
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                  fontSize: 12,
                  fontWeight: 500,
                  color: "#6B876B",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  borderTop: `1px solid ${s.borderColor}`,
                  paddingTop: 16,
                }}
              >
                → {s.action}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
