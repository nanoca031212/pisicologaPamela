"use client";

import Link from "next/link";
import Image from "next/image";
import { Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark-accent text-white py-20">
      <div className="container mx-auto px-6 md:px-20 lg:px-32">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8">
            Pronto para entender{" "}
            <span className="text-primary italic">
              o que seu filho precisa?
            </span>
          </h2>
          <a
            href="https://wa.me/5547991284636"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-dark-accent px-10 py-5 rounded-full text-xl font-bold hover:bg-primary hover:text-white transition-all shadow-2xl active:scale-95"
          >
            Agendar avaliação agora
          </a>
        </div>

        <div className="grid md:grid-cols-4 gap-12 pt-16 border-t border-white/10">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/Logotipo.svg"
                alt="Dra. Pamela"
                width={160}
                height={90}
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-white/60 max-w-sm mb-8 leading-relaxed">
              Dra. Pamela, psicóloga especializada em avaliação psicológica
              infantojuvenil, TDAH, TEA, dificuldades de aprendizagem e
              comportamento, com orientação clara e próxima para pais que querem
              entender e ajudar seus filhos.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/npp.papadopulos?igsh=N3F2eGtkdm11eW10"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6">Navegação</h4>
            <ul className="space-y-4 text-white/60">
              <li>
                <Link
                  href="#sobre"
                  className="hover:text-primary transition-colors"
                >
                  Sobre
                </Link>
              </li>
              <li>
                <Link
                  href="#jornada"
                  className="hover:text-primary transition-colors"
                >
                  Especialidades
                </Link>
              </li>
              <li>
                <Link
                  href="#faq"
                  className="hover:text-primary transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Contato</h4>
            <ul className="space-y-4 text-white/60">
              <li>Psi.pamelapapadopulos@gmail.com</li>
              <li>(47) 99128-4636</li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/5 text-center text-sm text-white/30">
          <p>© 2026 Dra. Pamela. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
