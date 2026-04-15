"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const problems = [
  {
    icon: "⏱",
    title: "Inspecciones manuales lentas",
    body: "Los métodos tradicionales requieren semanas para cubrir un parque de 100 MW, dejando fallas sin detectar durante ciclos completos.",
  },
  {
    icon: "📉",
    title: "Pérdidas invisibles de generación",
    body: "Un módulo con hotspot puede reducir la producción de un string completo hasta un 30%. Sin detección temprana, la pérdida se acumula.",
  },
  {
    icon: "🔎",
    title: "Baja resolución diagnóstica",
    body: "Las inspecciones visuales no detectan fallas eléctricas internas. Se necesita termografía de alta resolución para ver lo que el ojo no ve.",
  },
  {
    icon: "📋",
    title: "Reportes sin accionabilidad",
    body: "Datos sin georreferenciación, sin priorización de fallas, sin integración a sistemas de O&M. La información existe pero no se puede actuar sobre ella.",
  },
];

export default function Problem() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section
      id="problema"
      style={{
        background: "#0D1611",
        padding: "96px 40px",
      }}
    >
      <div
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
          01 — El problema
        </motion.div>

        {/* Heading */}
        <motion.h2
          ref={ref}
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
            maxWidth: 640,
            marginBottom: 64,
          }}
        >
          Los parques solares se degradan{" "}
          <span style={{ color: "#22C55E" }}>en silencio.</span>
        </motion.h2>

        {/* Cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 1,
            background: "rgba(34, 197, 94, 0.08)",
          }}
        >
          {problems.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              style={{
                background: "#0D1611",
                padding: "36px 32px",
              }}
            >
              <div
                style={{
                  fontSize: 28,
                  marginBottom: 20,
                  lineHeight: 1,
                }}
              >
                {p.icon}
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                  fontSize: 16,
                  fontWeight: 600,
                  color: "#E2F4E8",
                  letterSpacing: "-0.01em",
                  marginBottom: 12,
                }}
              >
                {p.title}
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
                {p.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
