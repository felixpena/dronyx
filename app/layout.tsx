import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dronyx — Inspección de Parques Solares con Drones e IA",
  description:
    "Inspección termográfica de parques solares con drones autónomos e inteligencia artificial. Detectamos fallas críticas en horas, no días. Servicio para utilities en Chile.",
  keywords: ["inspección solar", "drones", "termografía", "parques solares", "Chile", "IA"],
  metadataBase: new URL("https://dronyx.cl"),
  openGraph: {
    title: "Dronyx — Inspección de Parques Solares con Drones e IA",
    description:
      "Detectamos fallas críticas en parques solares con drones e IA. Reportes en 24 horas.",
    locale: "es_CL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
