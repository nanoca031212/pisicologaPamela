"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Como funciona o acompanhamento psicológico do meu filho?",
    a: "É um acompanhamento próximo com a Dra. Pamela: sessões periódicas, devolutiva clara sobre o que está por trás das dificuldades e suporte via WhatsApp para orientar você no dia a dia."
  },
  {
    q: "Fazem avaliação psicológica de aprendizagem e comportamento?",
    a: "Sim. A Dra. Pamela realiza avaliação psicológica de aprendizagem e comportamental, com laudo e orientação clara para você entender e apoiar o desenvolvimento do seu filho."
  },
  {
    q: "Atendem crianças e adolescentes com TDAH e TEA?",
    a: "Sim. Realizamos avaliação e intervenção especializada para TDAH e TEA, com estratégias individualizadas para cada criança e orientação para a família, além de recursos de adaptação escolar."
  },
  {
    q: "Preciso de um laudo médico antes de iniciar?",
    a: "Não é obrigatório. Podemos ajudar a identificar sinais e, se necessário, encaminhar para avaliação multidisciplinar complementar."
  },
  {
    q: "A partir de que idade posso levar meu filho?",
    a: "Atendemos desde a primeira infância até a adolescência, com abordagem e recursos adaptados a cada fase do desenvolvimento."
  },
  {
    q: "Atende online ou presencial?",
    a: "Atualmente os atendimentos são 100% online, permitindo que a Dra. Pamela atenda famílias de todo o Brasil com a mesma qualidade e comodidade."
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
