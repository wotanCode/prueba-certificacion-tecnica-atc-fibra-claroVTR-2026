import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Quiz Certificación Técnica ATC Fibra | Claro VTR 2026",
  description: "Cuestionario de certificación técnica para instalaciones de fibra óptica FTTH - Claro VTR 2026. Evalúa tus conocimientos sobre protocolos de atención al cliente y mejores prácticas técnicas.",
  keywords: ["quiz", "certificación", "fibra óptica", "Claro VTR", "ATC", "FTTH"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
