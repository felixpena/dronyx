"use client";

import { motion, useReducedMotion } from "framer-motion";

const GREEN = "#4ADE80";

interface DroneProps {
  size?: number;
  opacity?: number;
  style?: React.CSSProperties;
  /** Offset the float phase so multiple instances don't move in sync */
  phaseOffset?: number;
}

function DroneSVG({
  size = 320,
  phaseOffset = 0,
  reduced = false,
}: {
  size: number;
  phaseOffset: number;
  reduced: boolean;
}) {
  // Viewbox is 200×200, centered at 100,100
  const vb = 200;
  const cx = 100;
  const cy = 100;

  // Arm length from center to propeller hub
  const armLen = 58;
  // Propeller hub positions (diagonal ±45°)
  const hubs = [
    { x: cx - armLen * 0.707, y: cy - armLen * 0.707 }, // top-left
    { x: cx + armLen * 0.707, y: cy - armLen * 0.707 }, // top-right
    { x: cx - armLen * 0.707, y: cy + armLen * 0.707 }, // bottom-left
    { x: cx + armLen * 0.707, y: cy + armLen * 0.707 }, // bottom-right
  ];

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${vb} ${vb}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ overflow: "visible" }}
    >
      {/* ── PING / HALO ── */}
      {!reduced && (
        <motion.circle
          cx={cx}
          cy={cy}
          r={20}
          stroke={GREEN}
          strokeWidth={0.8}
          fill="none"
          initial={{ r: 20, opacity: 0.6 }}
          animate={{ r: 70, opacity: 0 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatDelay: 0.5,
            ease: "easeOut",
            delay: phaseOffset,
          }}
        />
      )}

      {/* ── ARMS (4 diagonal lines) ── */}
      {hubs.map((h, i) => (
        <line
          key={i}
          x1={cx}
          y1={cy}
          x2={h.x}
          y2={h.y}
          stroke={GREEN}
          strokeWidth={2}
          strokeLinecap="round"
          opacity={0.9}
        />
      ))}

      {/* ── PROPELLER GUARDS (thin circles around each hub) ── */}
      {hubs.map((h, i) => (
        <circle
          key={i}
          cx={h.x}
          cy={h.y}
          r={18}
          stroke={GREEN}
          strokeWidth={0.8}
          fill="none"
          opacity={0.4}
        />
      ))}

      {/* ── PROPELLER BLADES (animated ellipses at each hub) ── */}
      {hubs.map((h, i) => (
        <motion.ellipse
          key={i}
          cx={h.x}
          cy={h.y}
          rx={14}
          ry={3}
          fill={GREEN}
          opacity={0.55}
          animate={
            reduced
              ? {}
              : {
                  rx: [14, 3, 14],
                  ry: [3, 14, 3],
                }
          }
          transition={{
            duration: 0.35,
            repeat: Infinity,
            ease: "linear",
            delay: (i * 0.09) + phaseOffset * 0.1,
          }}
        />
      ))}

      {/* ── BODY CROSS (horizontal bar) ── */}
      <rect
        x={cx - 28}
        y={cy - 5}
        width={56}
        height={10}
        rx={2}
        fill={GREEN}
        opacity={0.85}
      />
      {/* ── BODY CROSS (vertical bar) ── */}
      <rect
        x={cx - 5}
        y={cy - 28}
        width={10}
        height={56}
        rx={2}
        fill={GREEN}
        opacity={0.85}
      />
      {/* ── CENTRAL BLOCK ── */}
      <rect
        x={cx - 14}
        y={cy - 14}
        width={28}
        height={28}
        rx={3}
        fill="#0A0F0C"
        stroke={GREEN}
        strokeWidth={1.2}
        opacity={0.95}
      />
      {/* ── INNER DETAIL LINES ON BODY ── */}
      <line x1={cx - 28} y1={cy} x2={cx - 14} y2={cy} stroke={GREEN} strokeWidth={0.5} opacity={0.4} />
      <line x1={cx + 14} y1={cy} x2={cx + 28} y2={cy} stroke={GREEN} strokeWidth={0.5} opacity={0.4} />
      <line x1={cx} y1={cy - 28} x2={cx} y2={cy - 14} stroke={GREEN} strokeWidth={0.5} opacity={0.4} />
      <line x1={cx} y1={cy + 14} x2={cx} y2={cy + 28} stroke={GREEN} strokeWidth={0.5} opacity={0.4} />

      {/* ── LED CENTER ── */}
      {reduced ? (
        <circle cx={cx} cy={cy} r={3.5} fill={GREEN} />
      ) : (
        <motion.circle
          cx={cx}
          cy={cy}
          r={3.5}
          fill={GREEN}
          animate={{ opacity: [1, 0.25, 1] }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: phaseOffset,
          }}
        />
      )}

      {/* ── LANDING LEGS ── */}
      {/* Left leg */}
      <line x1={cx - 18} y1={cy + 14} x2={cx - 22} y2={cy + 30} stroke={GREEN} strokeWidth={1.2} strokeLinecap="round" opacity={0.7} />
      <line x1={cx - 26} y1={cy + 30} x2={cx - 18} y2={cy + 30} stroke={GREEN} strokeWidth={1.2} strokeLinecap="round" opacity={0.7} />
      {/* Right leg */}
      <line x1={cx + 18} y1={cy + 14} x2={cx + 22} y2={cy + 30} stroke={GREEN} strokeWidth={1.2} strokeLinecap="round" opacity={0.7} />
      <line x1={cx + 18} y1={cy + 30} x2={cx + 26} y2={cy + 30} stroke={GREEN} strokeWidth={1.2} strokeLinecap="round" opacity={0.7} />

      {/* ── CAMERA / SENSOR ── */}
      {/* Mount stem */}
      <line x1={cx} y1={cy + 14} x2={cx} y2={cy + 22} stroke={GREEN} strokeWidth={1.2} opacity={0.8} />
      {/* Camera body */}
      <rect x={cx - 5} y={cy + 22} width={10} height={7} rx={1.5} fill={GREEN} opacity={0.8} />
      {/* Lens */}
      <circle cx={cx} cy={cy + 25.5} r={2.5} fill="#0A0F0C" stroke={GREEN} strokeWidth={0.8} />

      {/* ── SCAN BEAM CONE (clipped) ── */}
      <defs>
        <clipPath id={`beam-clip-${phaseOffset}`}>
          <polygon
            points={`${cx - 18},${cy + 30} ${cx + 18},${cy + 30} ${cx + 30},${cy + 60} ${cx - 30},${cy + 60}`}
          />
        </clipPath>
      </defs>
      {/* Cone outline */}
      <polygon
        points={`${cx - 18},${cy + 30} ${cx + 18},${cy + 30} ${cx + 30},${cy + 60} ${cx - 30},${cy + 60}`}
        fill={GREEN}
        opacity={0.04}
        stroke={GREEN}
        strokeWidth={0.6}
        strokeOpacity={0.25}
      />
      {/* Scan line inside cone */}
      {reduced ? (
        <line
          x1={cx - 20}
          y1={cy + 45}
          x2={cx + 20}
          y2={cy + 45}
          stroke={GREEN}
          strokeWidth={0.8}
          opacity={0.4}
          clipPath={`url(#beam-clip-${phaseOffset})`}
        />
      ) : (
        <motion.line
          x1={cx - 20}
          y1={cy + 32}
          x2={cx + 20}
          y2={cy + 32}
          stroke={GREEN}
          strokeWidth={0.8}
          opacity={0.55}
          clipPath={`url(#beam-clip-${phaseOffset})`}
          animate={{ y1: [cy + 32, cy + 56, cy + 32], y2: [cy + 32, cy + 56, cy + 32] }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: phaseOffset,
          }}
        />
      )}
    </svg>
  );
}

export default function DroneBackground() {
  const reduced = useReducedMotion() ?? false;

  return (
    <>
      {/*
       * Outer div: anchors the base position (left: 52%, top: 50%, -50% translateY).
       * Middle div: flight-path keyframes — wide roaming over 18s.
       * Inner div: subtle float oscillation — gentle 9s rock layered on top.
       */}
      <div
        style={{
          position: "absolute",
          left: "52%",
          top: "50%",
          transform: "translateY(-50%)",
          width: 320,
          opacity: 0.45,
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        {/* Flight trajectory */}
        <motion.div
          animate={
            reduced
              ? {}
              : {
                  x: [0, 50, 90, 60, 10, -30, -50, -20, 0],
                  y: [0, -80, -30, 50, 90, 60, -20, -60, 0],
                }
          }
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Gentle float / tilt */}
          <motion.div
            animate={
              reduced
                ? {}
                : {
                    y: [0, -12, 0],
                    x: [0, 5, 0],
                    rotate: [0, 1.5, 0],
                  }
            }
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <DroneSVG size={320} phaseOffset={0} reduced={reduced} />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
