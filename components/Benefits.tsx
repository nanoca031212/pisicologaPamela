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
    icon: Puzzle,
    title: "Avaliação Neuropsicológica e Neuropedagógica",
    description:
      "Avaliação das funções cognitivas e do processo de aprendizagem, para identificar a origem das dificuldades do seu filho.",
    barColor: "bg-primary/80",
  },
  {
    icon: Brain,
    title: "TDAH e TEA",
    description: "Avaliação e intervenção especializada em TDAH e TEA, em crianças e adolescentes.",
    barColor: "bg-salmon/80",
  },
  {
    icon: MessageCircle,
    title: "Orientação Parental",
    description:
      "Sessões dedicadas a você, com estratégias práticas para lidar com rotina, limites e comportamento no dia a dia — sem depender só da terapia da criança.",
    barColor: "bg-yellow",
  },
  {
    icon: HeartHandshake,
    title: "Atendimento Infantil",
    description:
      "Psicoterapia individual com a criança, em linguagem lúdica e adequada à idade, para trabalhar emoções, comportamento e desenvolvimento.",
    barColor: "bg-salmon/80",
  },
  {
    icon: Sprout,
    title: "Psicoterapia Infantojuvenil",
    description: "Acompanhamento psicológico para crianças e adolescentes em cada fase do desenvolvimento.",
    barColor: "bg-primary/80",
  },
  {
    icon: BookOpen,
    title: "Intervenção e Adaptação Escolar",
    description:
      "Recursos de intervenção e adaptação escolar para apoiar o desempenho e o bem-estar do seu filho.",
    barColor: "bg-yellow",
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
            <span className="text-primary italic">acompanhamento do seu filho</span>,
            você não recebe apenas um laudo.
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Você inicia um processo real de entendimento e desenvolvimento —
            para descobrir o que está por trás das dificuldades do seu
            filho, ter clareza sobre os próximos passos e saber exatamente
            como ajudar, com suporte, orientação e cuidado contínuo.
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
              <div className={`absolute top-0 left-8 w-12 h-1.5 ${benefit.barColor} rounded-b-full group-hover:w-full group-hover:left-0 group-hover:rounded-none transition-all duration-300`} />

              <div className="w-12 h-12 bg-zinc-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-salmon/5 transition-colors">
                <benefit.icon className="w-6 h-6 text-salmon/70 group-hover:text-salmon transition-colors" />
              </div>

              <h3 className="text-xl font-bold text-text-main mb-3">
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
            E, acima de tudo, você terá o suporte da Dra. Pamela, que
            entende cada etapa desse processo e caminha junto com você e
            seu filho.
          </p>
        </div>
      </div>
    </section>
  );
}
