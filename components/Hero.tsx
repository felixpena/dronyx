"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import DroneBackground from "./DroneBackground";

const stats = [
  { value: "< 24h", label: "Reporte completo" },
  { value: "99.2%", label: "Precisión de detección" },
  { value: "10×", label: "Más rápido que inspección manual" },
];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background: "#0A0F0C",
        padding: "0 40px",
      }}
    >
      {/* Dot grid background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle, rgba(34,197,94,0.15) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          pointerEvents: "none",
        }}
      />
      {/* Radial vignette */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, transparent 30%, #0A0F0C 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Drone decorative background */}
      <DroneBackground />

      <div
        ref={ref}
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 1200,
          width: "100%",
          margin: "0 auto",
          paddingTop: 80,
        }}
      >
        {/* H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            fontFamily: "var(--font-inter), system-ui, sans-serif",
            fontSize: "clamp(40px, 6vw, 80px)",
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            color: "#E2F4E8",
            maxWidth: 820,
            marginBottom: 24,
          }}
        >
          Inspección de parques solares{" "}
          <span style={{ color: "#22C55E" }}>sin parar</span>{" "}
          la operación.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            fontFamily: "var(--font-inter), system-ui, sans-serif",
            fontSize: "clamp(16px, 1.8vw, 20px)",
            fontWeight: 400,
            lineHeight: 1.7,
            color: "#6B876B",
            maxWidth: 560,
            marginBottom: 40,
          }}
        >
          Drones autónomos con termografía de alta resolución e IA detectan
          fallas en módulos fotovoltaicos en horas. Reporte entregado en menos
          de 24 horas.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 72 }}
        >
          <a
            href="#contacto"
            style={{
              fontFamily: "var(--font-inter), system-ui, sans-serif",
              fontSize: 15,
              fontWeight: 600,
              color: "#0A0F0C",
              background: "#22C55E",
              padding: "14px 28px",
              borderRadius: 9999,
              textDecoration: "none",
              letterSpacing: "-0.01em",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) =>
              ((e.target as HTMLElement).style.background = "#16A34A")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLElement).style.background = "#22C55E")
            }
          >
            Solicitar demo gratuita
          </a>
          <a
            href="#como-funciona"
            style={{
              fontFamily: "var(--font-inter), system-ui, sans-serif",
              fontSize: 15,
              fontWeight: 500,
              color: "#E2F4E8",
              background: "transparent",
              padding: "14px 28px",
              borderRadius: 9999,
              textDecoration: "none",
              border: "1px solid rgba(226,244,232,0.15)",
              letterSpacing: "-0.01em",
              transition: "border-color 0.2s",
            }}
            onMouseEnter={(e) =>
              ((e.target as HTMLElement).style.borderColor =
                "rgba(226,244,232,0.35)")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLElement).style.borderColor =
                "rgba(226,244,232,0.15)")
            }
          >
            Ver cómo funciona →
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.45 }}
          style={{
            display: "flex",
            gap: 0,
            borderTop: "1px solid rgba(34, 197, 94, 0.12)",
            paddingTop: 32,
            flexWrap: "wrap",
          }}
        >
          {stats.map((s, i) => (
            <div
              key={i}
              style={{
                flex: "1 1 160px",
                paddingRight: 40,
                paddingBottom: 8,
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                  fontSize: "clamp(28px, 3vw, 40px)",
                  fontWeight: 700,
                  color: "#22C55E",
                  letterSpacing: "-0.03em",
                  lineHeight: 1.1,
                }}
              >
                {s.value}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                  fontSize: 13,
                  fontWeight: 400,
                  color: "#6B876B",
                  marginTop: 4,
                  letterSpacing: "0.01em",
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
