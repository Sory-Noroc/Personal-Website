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

      <div className="max-w-7xl mx-auto px-4 z-10">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
    
    {/* Left Column: Text & CTA Content */}
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="text-left"
    > 
      <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight">
        Sorin Noroc
      </h1>
      
      <h3 className="text-2xl md:text-4xl text-slate-400 mb-8 min-h-[60px] md:h-auto">
        {t.hero.rolePart1}
        <span className="text-sky-400">{t.hero.roleHighlight}</span>
      </h3>

      <p className="max-w-xl text-slate-400 text-lg mb-10 leading-relaxed">
        {t.hero.description}
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap items-center justify-start gap-4">
        <Link 
          href="#projects"
          className="px-8 py-3 bg-sky-500 hover:bg-sky-600 text-white rounded-full font-medium transition-all shadow-lg shadow-sky-500/20 hover:scale-105 active:scale-95"
        >
          {t.hero.viewWork}
        </Link>
        <a 
          href="/Overleaf_CV.pdf" 
          target="_blank"
          className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 rounded-full font-medium transition-all flex items-center gap-2 hover:scale-105 active:scale-95"
        >
          <FileText size={18} />
          {t.hero.downloadCV}
        </a>
      </div>

      {/* Social Links */}
      <div className="mt-12 flex items-center justify-start space-x-6 text-slate-400">
        <a 
          href="https://github.com/Sory-Noroc" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-sky-400 transition-colors transform hover:scale-110"
        >
          <Github size={24} />
        </a>
        <a 
          href="mailto:sorinnoroc1@gmail.com" 
          className="hover:text-sky-400 transition-colors transform hover:scale-110"
        >
          <Mail size={24} />
        </a>
      </div>
    </motion.div>

    {/* Right Column: Animated Floating Blob */}
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative flex items-center justify-center w-full h-[350px] md:h-[450px]"
    >
      {/* Background Soft Glow Effect */}
      <div className="absolute w-72 h-72 bg-sky-500/20 rounded-full blur-3xl" />

      {/* Right Column: Image Container with Background Morphing Blob */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative flex items-center justify-center w-full h-[350px] md:h-[450px]"
      >
        {/* Larger, Semi-Transparent Animated Backdrop Blob */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
            borderRadius: [
              "60% 40% 30% 70% / 60% 30% 70% 40%",
              "30% 60% 70% 40% / 50% 60% 30% 60%",
              "60% 40% 30% 70% / 60% 30% 70% 40%",
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          /* Scaled up (w-80 -> md:w-[420px]), reduced opacity (opacity-30 / opacity-40), added blur-xl */
          className="absolute w-80 h-80 md:w-[420px] md:h-[420px] bg-gradient-to-tr from-sky-500 via-indigo-500 to-cyan-400 opacity-30 md:opacity-40 blur-xl pointer-events-none"
        />

        {/* Soft ambient center glow */}
        <div className="absolute w-72 h-72 bg-sky-500/20 rounded-full blur-3xl pointer-events-none" />

        {/* Clean Foreground Image */}
        <div className="relative z-10 w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-sky-400/30 shadow-2xl shadow-sky-500/20">
          <img 
            src="/sorin_photo.jpeg" 
            alt="Sorin Noroc" 
            className="w-full h-full object-cover" 
          />
        </div>
      </motion.div>
      
    </motion.div>
  </div>
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
