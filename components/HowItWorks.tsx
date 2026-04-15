"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Vuelo autónomo sobre el parque",
    body: "Nuestros drones equipados con cámaras termográficas de alta resolución realizan el vuelo a baja altitud, cubriendo hasta 50 MW por jornada sin interrumpir la generación.",
  },
  {
    num: "02",
    title: "Procesamiento IA en tiempo real",
    body: "El modelo de visión artificial analiza cada fotograma detectando anomalías térmicas: hotspots, bypass diodes activas, módulos degradados, sombreados y conexiones defectuosas.",
  },
  {
    num: "03",
    title: "Reporte georreferenciado en 24 horas",
    body: "Entregamos un informe técnico con cada falla ubicada en el mapa del parque, clasificada por severidad y con recomendaciones de acción priorizadas por impacto en generación.",
  },
];

export default function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section
      id="como-funciona"
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
          02 — Cómo funciona
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
            marginBottom: 72,
          }}
        >
          De la inspección al reporte en{" "}
          <span style={{ color: "#22C55E" }}>menos de 24 horas.</span>
        </motion.h2>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 0,
          }}
        >
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.12 }}
              style={{
                display: "grid",
                gridTemplateColumns: "80px 1fr",
                gap: "0 40px",
                padding: "40px 0",
                borderBottom: "1px solid rgba(34, 197, 94, 0.1)",
                alignItems: "start",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                  fontSize: 13,
                  fontWeight: 500,
                  color: "#22C55E",
                  letterSpacing: "0.08em",
                  paddingTop: 3,
                }}
              >
                {s.num}
              </div>
              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-inter), system-ui, sans-serif",
                    fontSize: "clamp(18px, 2vw, 24px)",
                    fontWeight: 600,
                    color: "#E2F4E8",
                    letterSpacing: "-0.02em",
                    marginBottom: 12,
                  }}
                >
                  {s.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-inter), system-ui, sans-serif",
                    fontSize: 15,
                    fontWeight: 400,
                    lineHeight: 1.75,
                    color: "#6B876B",
                    maxWidth: 560,
                  }}
                >
                  {s.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
