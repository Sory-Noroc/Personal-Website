"use client";
import { Mail, Github, Linkedin, MapPin, Link as LinkIcon } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="bg-slate-900 border-t border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">{t.contact.title}</h2>
            <p className="text-slate-400 mb-8 leading-relaxed max-w-md">
              {t.contact.description}
            </p>
            
            <div className="space-y-4">
              <a href="mailto:sorinnoroc1@gmail.com" className="flex items-center gap-4 text-slate-300 hover:text-sky-400 transition-colors">
                <div className="p-3 bg-slate-800 rounded-full">
                  <Mail size={20} />
                </div>
                sorinnoroc1@gmail.com
              </a>
              <div className="flex items-center gap-4 text-slate-300">
                <div className="p-3 bg-slate-800 rounded-full">
                  <MapPin size={20} />
                </div>
                Iasi, Romania
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center items-start md:items-end">
            <h3 className="text-xl font-bold text-white mb-6">{t.contact.socialsTitle}</h3>
            <div className="flex gap-4">
              <a 
                href="https://github.com/Sory-Noroc" 
                target="_blank"
                className="p-4 bg-slate-800 rounded-lg hover:bg-sky-500 hover:text-white transition-all transform hover:-translate-y-1"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/noroc-sorin-88b5671b7/"
                target="_blank"
                className="p-4 bg-slate-800 rounded-lg hover:bg-sky-500 hover:text-white transition-all transform hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="https://www.fiverr.com/s/pdV4yyl" 
                target="_blank"
                className="p-4 bg-[#1DBF73] rounded-lg hover:bg-[#19a463] text-white transition-all transform hover:-translate-y-1"
                aria-label="Fiverr"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                   <circle cx="12" cy="12" r="10"/>
                   <path d="M9 12h6"/>
                   <path d="M12 9v6"/>
                   {/* Custom F or simple link icon substitute since Lucide doesn't have Fiverr */}
                   <path d="M8 8v8"/>
                   <path d="M16 8v8"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
          <p>{t.contact.copyright}</p>
          <p className="mt-2">{t.contact.builtWith}</p>
        </div>
      </div>
    </footer>
  );
}
