"use client";
import { useLanguage } from "@/context/LanguageContext";
import { Globe } from "lucide-react";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === "en" ? "ro" : "en")}
      className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-700 bg-slate-800/50 hover:bg-slate-700 transition-colors text-sm text-slate-300 hover:text-white"
      aria-label="Toggle Language"
    >
      <Globe size={16} className="text-sky-400" />
      <span className={`font-medium ${language === "en" ? "text-sky-400" : ""}`}>EN</span>
      <span className="text-slate-600">|</span>
      <span className={`font-medium ${language === "ro" ? "text-sky-400" : ""}`}>RO</span>
    </button>
  );
}
