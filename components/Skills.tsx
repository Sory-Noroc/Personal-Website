"use client";
import { motion } from "framer-motion";

const skills = [
  { category: "Languages", items: ["Python", "C++", "C", "Kotlin", "SQL", "HTML/CSS", "JavaScript"] },
  { category: "Frameworks & Tools", items: ["Android Studio", "Selenium", "SDL", "Gradle", "Next.js", "Tailwind CSS"] },
  { category: "Hardware & IoT", items: ["Arduino", "Raspberry Pi", "Renewable Energy Tech"] },
  { category: "Databases", items: ["MySQL", "MongoDB", "MSSQL"] },
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Technical <span className="text-sky-400">Skills</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-sky-500/50 transition-colors"
            >
              <h3 className="text-xl font-bold text-white mb-4 border-b border-slate-700 pb-2">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-slate-700/50 text-sky-300 text-sm rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
