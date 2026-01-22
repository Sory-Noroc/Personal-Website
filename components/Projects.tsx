"use client";
import { motion } from "framer-motion";
import { Github, Code } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Space Shooter",
    description: "A C++ game developed using the SDL library. Features include enemy battleships, score tracking, and optimized game loops. Demonstrates low-level memory management and game logic implementation.",
    tech: ["C++", "SDL", "Game Dev"],
    github: "https://github.com/Sory-Noroc/space-shooter",
    image: "/space_shooter_image.png",
    featured: true
  },
  {
    title: "LibroRead",
    description: "An intuitive Android e-book reader app. Features automatic scanning of device files, customizable reading themes, and a user-friendly interface built with Kotlin and XML.",
    tech: ["Android", "Kotlin", "XML", "Gradle"],
    github: "https://github.com/Sory-Noroc/LibroRead",
    image: "/ebook_kindle.jpg",
    featured: true
  },
  {
    title: "ElectriCost",
    description: "Android utility app for calculating electricity costs of various appliances. Helps users track consumption and estimate bills. Built with modern Android guidelines.",
    tech: ["Kotlin", "Android", "Utility"],
    github: "https://github.com/Sory-Noroc/ElectricCalculator",
    image: "/lightning.jpg",
    featured: false
  }
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Featured <span className="text-sky-400">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-slate-900 rounded-xl overflow-hidden border border-slate-700 hover:border-sky-500 transition-all shadow-lg hover:shadow-sky-500/10 flex flex-col"
            >
              {/* Card Header (Project Image) */}
              <div className="h-48 bg-slate-800 relative overflow-hidden">
                {project.image ? (
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Code size={48} className="text-slate-500 group-hover:text-sky-400 transition-colors" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-sky-400 transition-colors">
                    {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4 flex-grow">
                    {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map(t => (
                        <span key={t} className="text-xs font-medium px-2 py-1 bg-slate-800 text-sky-300 rounded">
                            {t}
                        </span>
                    ))}
                </div>

                <a 
                    href={project.github} 
                    target="_blank" 
                    className="inline-flex items-center justify-center gap-2 w-full py-2 bg-slate-800 hover:bg-sky-600 text-white rounded-lg transition-all font-medium border border-slate-700 hover:border-sky-500"
                >
                    <Github size={18} /> View Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}