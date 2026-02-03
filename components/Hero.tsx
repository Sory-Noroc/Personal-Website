"use client";
import { motion } from "framer-motion";
import { ArrowDown, Github, Mail, FileText } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
      {/* Background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-sky-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl md:text-2xl text-sky-400 font-semibold mb-4">{t.hero.greeting}</h2>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight">
            Sorin Noroc
          </h1>
          <h3 className="text-2xl md:text-4xl text-slate-400 mb-8 min-h-[60px] md:h-auto">
            {t.hero.rolePart1}<span className="text-sky-400">{t.hero.roleHighlight}</span>
          </h3>
          
          <p className="max-w-2xl mx-auto text-slate-400 text-lg mb-10 leading-relaxed">
            {t.hero.description}
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="#projects"
              className="px-8 py-3 bg-sky-500 hover:bg-sky-600 text-white rounded-full font-medium transition-all shadow-lg shadow-sky-500/20"
            >
              {t.hero.viewWork}
            </Link>
            <a 
              href="/FullCV.pdf" 
              target="_blank"
              className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 rounded-full font-medium transition-all flex items-center gap-2"
            >
              <FileText size={18} />
              {t.hero.downloadCV}
            </a>
          </div>

          <div className="mt-12 flex justify-center space-x-6 text-slate-400">
            <a href="https://github.com/Sory-Noroc" target="_blank" className="hover:text-white transition-colors">
              <Github size={24} />
            </a>
            <a href="mailto:sorinnoroc1@gmail.com" className="hover:text-white transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-500"
      >
        <ArrowDown size={24} />
      </motion.div>
    </section>
  );
}
