import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dra. Pamela | Psicóloga Infantil - Avaliação de TDAH, TEA e Desenvolvimento Infantil",
  description:
    "Atendimento psicológico infantojuvenil com a Dra. Pamela: avaliação psicológica de aprendizagem e comportamento, TDAH, TEA, psicoterapia infantojuvenil e orientação prática para pais entenderem e ajudarem seus filhos. Agende uma avaliação.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>{children}</body>
    </html>
  );
}
