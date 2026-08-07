"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ana Paula",
    text: "O diagnóstico do TDAH do meu filho mudou tudo, mas foi com o acompanhamento que finalmente entendemos como ajudá-lo de verdade.",
    result: "Mais autonomia e foco na escola"
  },
  {
    name: "Rafael Mendes",
    text: "Minha filha com TEA nunca teve um espaço tão acolhedor. Vimos evolução na comunicação e no comportamento em poucos meses.",
    result: "Avanços na comunicação"
  },
  {
    name: "Mariana Costa",
    text: "Depois de anos em um relacionamento abusivo, encontrei aqui um espaço seguro para me reconstruir. Hoje me sinto mais forte.",
    result: "Reconstrução da autoestima"
  },
  {
    name: "Beatriz Silva",
    text: "Meu filho tinha muita dificuldade escolar. Com o acompanhamento psicopedagógico, ele recuperou a confiança nos estudos.",
    result: "Melhora no desempenho escolar"
  },
  {
    name: "Carla Menezes",
    text: "Sair de uma relação abusiva não foi fácil, mas o acompanhamento me deu forças para recomeçar.",
    result: "Recomeço com segurança"
  },
  {
    name: "Thiago Almeida",
    text: "O acompanhamento próximo pelo WhatsApp fez toda a diferença para lidarmos com os desafios do TDAH no dia a dia.",
    result: "Rotina familiar mais leve"
  }
];

export default function Testimonials() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [constraints, setConstraints] = useState({ left: 0, right: 0 });

  useEffect(() => {
    const calculateConstraints = () => {
      if (viewportRef.current && trackRef.current) {
        const viewportWidth = viewportRef.current.offsetWidth;
        const trackWidth = trackRef.current.scrollWidth;
        setConstraints({ left: -(trackWidth - viewportWidth), right: 0 });
      }
    };

    calculateConstraints();
    window.addEventListener("resize", calculateConstraints);
    return () => window.removeEventListener("resize", calculateConstraints);
  }, []);

  return (
    <section className="py-24 bg-background-soft overflow-hidden">
      <div className="container mx-auto px-6 md:px-20 lg:px-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-text-main mb-4">
            Histórias de <span className="text-primary italic">transformação</span>.
          </h2>
          <p className="text-text-muted">Veja o que famílias e pacientes estão dizendo sobre o acompanhamento.</p>
        </div>

        <div 
          ref={viewportRef}
          className="cursor-grab active:cursor-grabbing overflow-visible"
        >
          <motion.div 
            ref={trackRef}
            drag="x"
            dragConstraints={constraints}
            dragElastic={0.1}
            whileTap={{ scale: 0.995 }}
            className="flex gap-8 touch-pan-y"
          >
            {testimonials.map((t, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-zinc-100 flex flex-col relative flex-shrink-0 w-[85%] md:w-[calc(33.333%-1.333rem)] select-none"
              >
                <Quote className="absolute top-6 right-8 w-10 h-10 text-primary/5" />
                <div className="flex gap-1 text-yellow-500 mb-6">
                  {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-text-main text-lg italic mb-6 leading-relaxed pointer-events-none">"{t.text}"</p>
                <div className="mt-auto pointer-events-none">
                  <p className="font-bold text-text-main">{t.name}</p>
                  <p className="text-primary text-sm font-medium">{t.result}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
