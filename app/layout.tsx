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
  title: "Dra. Pamela | Psicóloga - Avaliação Psicológica e Acompanhamento Terapêutico para Mulheres",
  description:
    "Atendimento psicológico com a Dra. Pamela: avaliação psicológica e acompanhamento terapêutico para mulheres adultas, em um espaço de acolhimento, escuta e cuidado humanizado. Agende sua sessão.",
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
