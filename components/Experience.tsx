"use client";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="section-padding bg-slate-800/30">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          {t.experience.title} <span className="text-sky-400">{t.experience.titleHighlight}</span>
        </h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-slate-700 top-0"></div>

          <div className="space-y-12">
            {t.experience.jobs.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                } items-center w-full`}
              >
                <div className="flex-1 w-full md:w-1/2 p-4">
                  <div className="bg-slate-900 p-6 rounded-xl border border-slate-700 hover:border-sky-500/30 transition-all shadow-lg">
                    <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                    <div className="text-sky-400 font-medium mb-2">{exp.company}</div>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-slate-400 mb-4">
                      <span className="flex items-center gap-1">
                        <MapPin size={14} /> {exp.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar size={14} /> {exp.period}
                      </span>
                    </div>

                    <p className="text-slate-300 text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>

                {/* Dot on the line */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-sky-500 rounded-full border-4 border-slate-900 z-10 mt-6 md:mt-0"></div>
                
                <div className="flex-1 hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
