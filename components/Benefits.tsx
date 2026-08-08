"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Puzzle,
  Sprout,
  BookOpen,
  HeartHandshake,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";
import CtaButton from "./CtaButton";

const benefits = [
  {
    icon: MessageCircle,
    title: "Psicoterapia para Adultos",
    description:
      "Acompanhamento psicoterapêutico individual para adultos que buscam avaliação, orientação profissional e autoconhecimento.",
  },
  {
    icon: Puzzle,
    title: "Avaliação Psicológica",
    description:
      "Avaliação psicológica de aprendizagem e comportamental, com laudo e orientação clara para você ou sua família.",
  },
  {
    icon: Brain,
    title: "TDAH e TEA",
    description:
      "Avaliação e intervenção especializada em TDAH e TEA, em crianças e adultos.",
  },
  {
    icon: Sprout,
    title: "Psicoterapia Infantojuvenil",
    description:
      "Acompanhamento psicológico para crianças e adolescentes em cada fase do desenvolvimento.",
  },
  {
    icon: BookOpen,
    title: "Intervenção e Adaptação Escolar",
    description:
      "Recursos de intervenção e adaptação escolar para apoiar o desempenho e o bem-estar do estudante.",
  },
  {
    icon: HeartHandshake,
    title: "Mulheres Atípicas",
    description:
      "Acolhimento psicológico para mulheres neurodivergentes, com escuta atenta às suas particularidades e ao diagnóstico tardio.",
  },
];

export default function Benefits() {
  return (
    <section id="jornada" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-20 lg:px-32">
        {/* Top Decoration */}
        <div className="flex justify-center gap-2 text-primary/40 mb-12">
          <span>✦</span>
          <span>✦</span>
          <span>✦</span>
        </div>

        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-text-main mb-8 leading-tight">
            Ao entrar no{" "}
            <span className="text-primary italic">
              acompanhamento individual
            </span>
            , você não recebe apenas sessões.
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Você inicia um processo real de acolhimento e desenvolvimento, seja
            para buscar avaliação e orientação profissional, apoiar o
            crescimento do seu filho, superar dificuldades de aprendizagem ou se
            reconstruir após uma situação de violência, com suporte, orientação
            e cuidado contínuo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white p-8 rounded-2xl shadow-sm border border-zinc-100 flex flex-col relative overflow-hidden h-full"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-8 w-12 h-1.5 bg-[#fd7067]/100 rounded-b-full group-hover:w-full group-hover:left-0 group-hover:rounded-none transition-all duration-300" />

              <div className="w-12 h-12 bg-zinc-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/5 transition-colors">
                <benefit.icon className="w-6 h-6 text-[#fd7067] group-hover:text-primary transition-colors" />
              </div>

              <h3 className="text-xl font-bold text-primary mb-3">
                {benefit.title}
              </h3>

              <p className="text-text-muted leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center max-w-2xl mx-auto space-y-12">
          <p className="text-xl font-bold text-text-main">
            E, acima de tudo, você terá o suporte da Dra. Pamela, que entende
            cada etapa desse processo e caminha junto com você.
          </p>
        </div>
      </div>
    </section>
  );
}
