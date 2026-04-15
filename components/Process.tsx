"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Solicitud y coordinación",
    body: "Nos contactas con las coordenadas y capacidad del parque. En 48 horas confirmamos fecha de vuelo y entregamos checklist de acceso para el equipo de campo.",
    align: "left",
  },
  {
    num: "02",
    title: "Vuelo e inspección",
    body: "Nuestro equipo llega al parque con los drones calibrados. Realizamos el vuelo termográfico completo en jornada diurna bajo condiciones de irradiación óptima.",
    align: "right",
  },
  {
    num: "03",
    title: "Procesamiento e IA",
    body: "Las imágenes se suben a nuestra plataforma donde el modelo de detección identifica, clasifica y georreferencia cada anomalía encontrada.",
    align: "left",
  },
  {
    num: "04",
    title: "Entrega del reporte",
    body: "En menos de 24 horas recibes el reporte técnico completo en PDF e interactivo online, con cada falla marcada en el mapa del parque y el plan de acción priorizado.",
    align: "right",
  },
];

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      id="proceso"
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
          04 — Proceso
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
            marginBottom: 80,
          }}
        >
          Simple de coordinar,{" "}
          <span style={{ color: "#22C55E" }}>rápido de ejecutar.</span>
        </motion.h2>

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          {/* Center line */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: 0,
              bottom: 0,
              width: 1,
              background: "rgba(34, 197, 94, 0.15)",
              transform: "translateX(-50%)",
            }}
            className="timeline-line"
          />

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 60,
            }}
          >
            {steps.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: s.align === "left" ? -32 : 32 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.12 }}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 48px 1fr",
                  alignItems: "start",
                  gap: "0 0",
                }}
                className="timeline-row"
              >
                {/* Left content */}
                <div
                  style={{
                    paddingRight: 48,
                    paddingTop: 4,
                    textAlign: "right",
                    opacity: s.align === "left" ? 1 : 0,
                    pointerEvents: s.align === "left" ? "auto" : "none",
                  }}
                  className="timeline-left"
                >
                  {s.align === "left" && <StepContent s={s} />}
                </div>

                {/* Center dot */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    paddingTop: 6,
                  }}
                >
                  <div
                    style={{
                      width: 12,
                      height: 12,
                      borderRadius: "50%",
                      background: "#22C55E",
                      border: "3px solid #0A0F0C",
                      boxShadow: "0 0 0 1px rgba(34,197,94,0.4)",
                      flexShrink: 0,
                    }}
                  />
                </div>

                {/* Right content */}
                <div
                  style={{
                    paddingLeft: 48,
                    paddingTop: 4,
                    opacity: s.align === "right" ? 1 : 0,
                    pointerEvents: s.align === "right" ? "auto" : "none",
                  }}
                  className="timeline-right"
                >
                  {s.align === "right" && <StepContent s={s} />}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .timeline-line { left: 24px !important; transform: none !important; }
          .timeline-row { grid-template-columns: 48px 1fr !important; }
          .timeline-left { display: none !important; }
          .timeline-right { opacity: 1 !important; pointer-events: auto !important; padding-left: 20px !important; }
        }
      `}</style>
    </section>
  );
}

function StepContent({ s }: { s: { num: string; title: string; body: string; align: string } }) {
  return (
    <div
      style={{
        background: "#111E16",
        border: "1px solid rgba(34, 197, 94, 0.1)",
        borderRadius: 4,
        padding: "24px 28px",
        textAlign: "left",
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-inter), system-ui, sans-serif",
          fontSize: 11,
          fontWeight: 600,
          color: "#22C55E",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          marginBottom: 10,
        }}
      >
        {s.num}
      </div>
      <h3
        style={{
          fontFamily: "var(--font-inter), system-ui, sans-serif",
          fontSize: 17,
          fontWeight: 600,
          color: "#E2F4E8",
          letterSpacing: "-0.02em",
          marginBottom: 10,
        }}
      >
        {s.title}
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
        {s.body}
      </p>
    </div>
  );
}
