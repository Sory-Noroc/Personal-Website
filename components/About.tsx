"use client";
import { motion } from "framer-motion";
import { Award, Heart, User } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="section-padding bg-slate-800/30">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-sky-400">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white">
              Driven by Curiosity, Defined by Code.
            </h3>
            <p className="text-slate-300 leading-relaxed">
              I am a Computer Engineering and Automatics student at TUIASI "Gheorghe Asachi" in Iasi. 
              My journey started with a simple curiosity about how things work, which quickly evolved into a passion for creating software.
            </p>
            <p className="text-slate-300 leading-relaxed">
              Whether it's optimizing code, building intuitive Android apps, or automating boring tasks with Python scripts, 
              I love the feeling of solving a puzzle. My work experience spans from freelancing on Fiverr to hands-on technical roles in Italy, Spain, and the USA.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="p-4 bg-slate-800 rounded-lg border border-slate-700">
                <Award className="text-sky-400 mb-2" size={24} />
                <h4 className="font-bold text-white">Experience</h4>
                <p className="text-sm text-slate-400">Multiple International roles</p>
              </div>
              <div className="p-4 bg-slate-800 rounded-lg border border-slate-700">
                <User className="text-sky-400 mb-2" size={24} />
                <h4 className="font-bold text-white">Education</h4>
                <p className="text-sm text-slate-400">Computer Engineering Student</p>
              </div>
            </div>
          </div>

          {/* Visual/Personal Side */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative bg-slate-900 rounded-2xl p-6 border border-slate-800">
                <div className="flex items-center gap-2 mb-4">
                    <Heart className="text-rose-500" />
                    <h3 className="text-xl font-bold text-white">Beyond Coding</h3>
                </div>
                
                <div className="space-y-4">
                    <div className="bg-slate-800 p-4 rounded-lg">
                        <span className="text-xs font-bold text-sky-400 uppercase tracking-wider">Memory #1</span>
                        <h4 className="font-bold text-white mt-1">Skydiving Adventure</h4>
                        <p className="text-sm text-slate-400 mt-2">
                           "Jumping out of a plane taught me that fear is just a reaction, but courage is a decision. The adrenaline rush is unmatched!"
                        </p>
                    </div>

                    <div className="bg-slate-800 p-4 rounded-lg">
                        <span className="text-xs font-bold text-sky-400 uppercase tracking-wider">Passion</span>
                        <h4 className="font-bold text-white mt-1">Car Enthusiast</h4>
                        <p className="text-sm text-slate-400 mt-2">
                            I've always been fascinated by mechanics. Working on cars is my way of debugging the physical world.
                        </p>
                    </div>

                     <div className="bg-slate-800 p-4 rounded-lg">
                        <span className="text-xs font-bold text-sky-400 uppercase tracking-wider">Hobby</span>
                        <h4 className="font-bold text-white mt-1">Cycling</h4>
                        <p className="text-sm text-slate-400 mt-2">
                           My escape from the screen. It helps me clear my mind and find new perspectives.
                        </p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
