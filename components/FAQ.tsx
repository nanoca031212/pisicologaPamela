"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Como funciona o acompanhamento terapêutico?",
    a: "É um acompanhamento próximo e individualizado com a Dra. Pamela, com sessões periódicas e suporte para as suas questões e objetivos, em um espaço de escuta e acolhimento."
  },
  {
    q: "Fazem avaliação psicológica?",
    a: "Sim. A Dra. Pamela realiza avaliação psicológica completa, com devolutiva e orientação clara para você entender melhor a si mesma e suas próximas etapas."
  },
  {
    q: "Para quem é indicado o acompanhamento?",
    a: "Para mulheres adultas que buscam autoconhecimento, apoio emocional, orientação profissional ou pessoal, ou que estão passando por momentos de ansiedade, sobrecarga ou transição de vida."
  },
  {
    q: "Preciso de um diagnóstico antes de iniciar?",
    a: "Não. Você pode começar o acompanhamento mesmo sem um diagnóstico prévio; juntas identificamos o que faz mais sentido para o seu processo."
  },
  {
    q: "O atendimento é sigiloso?",
    a: "Sim, totalmente. Todo o acompanhamento segue rigoroso sigilo profissional, em um espaço seguro, ético e sem julgamentos."
  },
  {
    q: "Atende online ou presencial?",
    a: "Atualmente os atendimentos são 100% online, permitindo que a Dra. Pamela atenda pacientes de todo o Brasil com a mesma qualidade e comodidade."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-20 lg:px-32 max-w-5xl">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-text-main mb-12 text-center">
          Dúvidas frequentes.
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-zinc-100 last:border-0">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-6 flex items-center justify-between text-left hover:text-primary transition-colors"
              >
                <span className="text-xl font-bold text-text-main">{faq.q}</span>
                <ChevronDown className={`w-6 h-6 transition-transform ${openIndex === index ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-text-muted leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
