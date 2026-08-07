"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-20 lg:px-32">
        <div className="flex flex-col md:flex-row-reverse gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl skew-y-2 hover:skew-y-0 transition-transform duration-700">
              <Image
                src="/ImagemPsico.jpeg"
                alt="Dra. Pamela"
                width={500}
                height={600}
                className="w-full h-auto object-cover  transition-all duration-700"
              />
            </div>
            {/* Decorative border */}
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-primary/20 rounded-2xl -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">
              Quem Sou
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-text-main mb-8 leading-tight">
              Olá, eu sou a{" "}
              <span className="text-primary italic">Dra. Pamela</span>.
            </h2>
            <div className="space-y-6 text-text-muted text-lg leading-relaxed">
              <p>
                Sou psicóloga especializada em avaliação e orientação
                profissional para pais, mulheres e adultos que buscam mais
                clareza sobre suas próximas etapas de vida.
              </p>
              <p>
                Também realizo psicoterapia infantojuvenil e para adultos,
                avaliação psicológica de aprendizagem e comportamental, além
                de oferecer recursos de intervenção e adaptação escolar,
                unindo psicologia clínica baseada em evidências a um
                acompanhamento próximo, humano e sem julgamentos.
              </p>
              <p className="font-medium text-text-main">
                Acredito que todo processo de cuidado começa com escuta,
                respeito e segurança.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
