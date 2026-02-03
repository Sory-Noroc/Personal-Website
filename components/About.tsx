"use client";
import { motion } from "framer-motion";
import { Award, Heart, User } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="section-padding bg-slate-800/30">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          {t.about.title} <span className="text-sky-400">{t.about.titleHighlight}</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white">
              {t.about.subtitle}
            </h3>
            <p className="text-slate-300 leading-relaxed">
              {t.about.description1}
            </p>
            <p className="text-slate-300 leading-relaxed">
              {t.about.description2}
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="p-4 bg-slate-800 rounded-lg border border-slate-700">
                <Award className="text-sky-400 mb-2" size={24} />
                <h4 className="font-bold text-white">{t.about.experienceTitle}</h4>
                <p className="text-sm text-slate-400">{t.about.experienceDesc}</p>
              </div>
              <div className="p-4 bg-slate-800 rounded-lg border border-slate-700">
                <User className="text-sky-400 mb-2" size={24} />
                <h4 className="font-bold text-white">{t.about.educationTitle}</h4>
                <p className="text-sm text-slate-400">{t.about.educationDesc}</p>
              </div>
            </div>
          </div>

          {/* Visual/Personal Side */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative bg-slate-900 rounded-2xl p-6 border border-slate-800">
                <div className="flex items-center gap-2 mb-4">
                    <Heart className="text-rose-500" />
                    <h3 className="text-xl font-bold text-white">{t.about.beyondCodingTitle}</h3>
                </div>
                
                <div className="space-y-4">
                    {t.about.hobbies.map((hobby, index) => (
                        <div key={index} className="bg-slate-800 p-4 rounded-lg">
                            <span className="text-xs font-bold text-sky-400 uppercase tracking-wider">{hobby.tag}</span>
                            <h4 className="font-bold text-white mt-1">{hobby.title}</h4>
                            <p className="text-sm text-slate-400 mt-2">
                                {hobby.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
