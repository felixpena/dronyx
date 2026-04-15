export default function Footer() {
  const year = new Date().getFullYear();

  const navLinks = [
    { label: "Cómo funciona", href: "#como-funciona" },
    { label: "Qué detecta", href: "#que-detecta" },
    { label: "Proceso", href: "#proceso" },
    { label: "Precios", href: "#precios" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <footer
      style={{
        background: "#0A0F0C",
        borderTop: "1px solid rgba(34, 197, 94, 0.1)",
        padding: "48px 40px",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: 32,
        }}
      >
        {/* Top row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: 32,
          }}
        >
          {/* Brand */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                fontSize: 18,
                fontWeight: 700,
                color: "#E2F4E8",
                letterSpacing: "-0.02em",
                marginBottom: 8,
              }}
            >
              Dronyx<span style={{ color: "#22C55E" }}>.</span>
            </div>
            <p
              style={{
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                fontSize: 13,
                fontWeight: 400,
                color: "#6B876B",
                lineHeight: 1.6,
                maxWidth: 280,
              }}
            >
              Inspección termográfica de parques solares con drones e IA.
              <br />
              Un servicio de{" "}
              <a
                href="https://nodera.cl"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-nodera-link"
              >
                Nodera.cl
              </a>
            </p>
          </div>

          {/* Nav links */}
          <nav
            style={{
              display: "flex",
              gap: 32,
              flexWrap: "wrap",
            }}
          >
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="footer-nav-link">
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
            paddingTop: 24,
            borderTop: "1px solid rgba(34, 197, 94, 0.08)",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-inter), system-ui, sans-serif",
              fontSize: 12,
              fontWeight: 400,
              color: "#6B876B",
              letterSpacing: "0.01em",
            }}
          >
            © {year} Dronyx. Todos los derechos reservados.
          </p>
          <p
            style={{
              fontFamily: "var(--font-inter), system-ui, sans-serif",
              fontSize: 12,
              fontWeight: 400,
              color: "#6B876B",
              letterSpacing: "0.01em",
            }}
          >
            Santiago, Chile
          </p>
        </div>
      </div>

      <style>{`
        .footer-nav-link {
          font-family: var(--font-inter), system-ui, sans-serif;
          font-size: 13px;
          font-weight: 400;
          color: #6B876B;
          text-decoration: none;
          letter-spacing: 0.01em;
          transition: color 0.2s;
        }
        .footer-nav-link:hover { color: #E2F4E8; }
        .footer-nodera-link { color: #22C55E; text-decoration: none; }
        .footer-nodera-link:hover { text-decoration: underline; }
      `}</style>
    </footer>
  );
}
