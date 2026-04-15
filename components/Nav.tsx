"use client";

import { useState, useEffect } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Cómo funciona", href: "#como-funciona" },
    { label: "Qué detecta", href: "#que-detecta" },
    { label: "Precios", href: "#precios" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        height: 64,
        display: "flex",
        alignItems: "center",
        padding: "0 40px",
        transition: "background 0.3s, border-color 0.3s",
        background: scrolled ? "rgba(10, 15, 12, 0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(34, 197, 94, 0.12)" : "1px solid transparent",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          width: "100%",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <a
          href="#"
          style={{
            fontFamily: "var(--font-inter), system-ui, sans-serif",
            fontSize: 18,
            fontWeight: 700,
            color: "#E2F4E8",
            textDecoration: "none",
            letterSpacing: "-0.02em",
          }}
        >
          Dronyx<span style={{ color: "#22C55E" }}>.</span>
        </a>

        {/* Desktop links */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 32,
          }}
          className="nav-desktop"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                fontSize: 14,
                fontWeight: 400,
                color: "#6B876B",
                textDecoration: "none",
                letterSpacing: "0.01em",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "#E2F4E8")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = "#6B876B")
              }
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            style={{
              fontFamily: "var(--font-inter), system-ui, sans-serif",
              fontSize: 13,
              fontWeight: 500,
              color: "#0A0F0C",
              background: "#22C55E",
              padding: "8px 20px",
              borderRadius: 9999,
              textDecoration: "none",
              letterSpacing: "0.01em",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) =>
              ((e.target as HTMLElement).style.background = "#16A34A")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLElement).style.background = "#22C55E")
            }
          >
            Solicitar demo
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 4,
            color: "#E2F4E8",
          }}
          className="nav-mobile-btn"
          aria-label="Menú"
        >
          <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
            {menuOpen ? (
              <path
                d="M6 6l12 12M6 18L18 6"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
              />
            ) : (
              <>
                <line x1={4} y1={7} x2={20} y2={7} stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" />
                <line x1={4} y1={12} x2={20} y2={12} stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" />
                <line x1={4} y1={17} x2={20} y2={17} stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            position: "absolute",
            top: 64,
            left: 0,
            right: 0,
            background: "rgba(10, 15, 12, 0.97)",
            borderBottom: "1px solid rgba(34, 197, 94, 0.12)",
            padding: "20px 40px 28px",
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
          className="nav-mobile-menu"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                fontSize: 15,
                fontWeight: 400,
                color: "#6B876B",
                textDecoration: "none",
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setMenuOpen(false)}
            style={{
              fontFamily: "var(--font-inter), system-ui, sans-serif",
              fontSize: 14,
              fontWeight: 500,
              color: "#0A0F0C",
              background: "#22C55E",
              padding: "10px 20px",
              borderRadius: 9999,
              textDecoration: "none",
              textAlign: "center",
              marginTop: 4,
            }}
          >
            Solicitar demo
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
