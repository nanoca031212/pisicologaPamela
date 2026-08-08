"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import CircularText from "./CircularText";
import Marquee from "./Marquee";
import { ArrowUpRight } from "lucide-react";
import CtaButton from "./CtaButton";

export default function Hero() {
  return (
    <section className="relative min-h-screen   flex flex-col justify-between overflow-hidden bg-background-soft">
      {/* Background image (desktop only) */}
      <Image
        src="/Background1.png"
        alt=""
        fill
        priority
        className="hidden md:block object-cover z-10"
      />
      <div className="hidden md:block absolute inset-0 bg-background-soft/60 -z-10" />

      <div className="container mx-auto z-20 px-6 md:px-20 lg:px-32 flex-1 grid md:grid-cols-2 gap-12 md:items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className=""
        >
          <span className="inline-block py-1 text-[#fd7067] bg-[#fd7067]/10 px-4 rounded-full   text-[10px] md:text-xs font-bold tracking-wider uppercase mb-2  mt-8">
            Psicologia com a Dra. Pamela
          </span>
          <h1 className="text-4xl md:text-7xl font-serif font-bold leading-[1.1] text-text-main mb-6">
            Sua força também merece{" "}
            <span className="text-primary italic">um lugar de escuta</span>.
          </h1>
          <p className="text-base md:text-xl text-text-muted mb-8 max-w-lg leading-relaxed">
            Atendimento psicológico com a Dra. Pamela: avaliação psicológica
            e acompanhamento terapêutico em um espaço seguro, humano e sem
            julgamentos.
          </p>

          <a
            href="https://wa.me/5547991284636"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative mt-6 px-4 w-full max-w-md md:px-4 py-3 flex items-center justify-between bg-gradient-to-r from-[#707759] via-primary to-[#12130D] rounded-full text-white font-bold text-sm tracking-widest uppercase shadow-xl hover:shadow-2xl transition-all active:scale-[1.0]"
          >
            {" "}
            <span className="flex-1 font-bold text-base md:text-center">
              {" "}
              AGENDAR MINHA SESSÃO{" "}
            </span>{" "}
            <div className="md:w-10 md:h-10 h-8 w-8 bg-white rounded-full flex items-center justify-center text-primary group-hover:rotate-45 transition-transform duration-300">
              {" "}
              <ArrowUpRight className="w-4 h-4" />{" "}
            </div>{" "}
          </a>

          <div className="mt-3 flex items-center gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-white hover:scale-110 bg-zinc-200 overflow-hidden"
                >
                  <div className="w-full h-full bg-[#fd7067]/20 flex items-center justify-center text-[10px] font-bold text-white">
                    +{i}k
                  </div>
                </div>
              ))}
            </div>
            <p className="text-sm text-text-muted font-medium">
              <span className="font-bold text-text-main">+200 mulheres</span>{" "}
              acompanhadas este ano
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative mt-4 md:mt-0 md:min-h-[500px]"
        >
          <Image
            src="/Mobilefoto.jpeg"
            alt="Psicóloga sorrindo"
            width={600}
            height={700}
            className="w-full h-auto object-cover rounded-3xl md:hidden"
            priority
          />

          {/* Floating circular text logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="absolute top-5 -right-2 md:top-12 md:-right-6 z-20 flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-white/40 backdrop-blur-sm rounded-full -z-10 scale-90" />
            <CircularText
              text="Dra. Pamela • "
              radius={70}
              fontSize="12px"
              className="drop-shadow-lg"
              color="#F1f1f1"
            />
            <div className="absolute w-13 h-13   flex items-center rounded-full justify-center text-white shadow-lg overflow-hidden">
              <Image
                src="/Logo.svg"
                alt="Dra. Pamela"
                width={30}
                height={30}
                className=" "
              />
            </div>
          </motion.div>

          {/* Floating badge */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="hidden md:flex absolute bottom-20 -left-4 md:-left-10 z-20 bg-white p-4 rounded-2xl shadow-xl items-center gap-4 border border-zinc-100"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <p className="text-xs text-text-muted uppercase font-bold tracking-wider">
                Psicologia
              </p>
              <p className="text-sm font-bold text-text-main">
                Baseada em Evidências
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 w-full z-20">
        <Marquee text="DRA. PAMELA" />
      </div>
    </section>
  );
}
