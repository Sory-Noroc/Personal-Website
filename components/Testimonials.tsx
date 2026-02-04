"use client";

import React, { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function Testimonials() {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 8000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    let nextIndex = currentIndex + newDirection;
    if (nextIndex < 0) nextIndex = t.testimonials.reviews.length - 1;
    if (nextIndex >= t.testimonials.reviews.length) nextIndex = 0;
    setCurrentIndex(nextIndex);
  };

  const nextSlide = () => paginate(1);
  const prevSlide = () => paginate(-1);

  const currentReview = t.testimonials.reviews[currentIndex];

  return (
    <section id="testimonials" className="py-24 bg-slate-900 overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-sky-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold text-slate-100 mb-6"
          >
            {t.testimonials.title}{" "}
            <span className="text-sky-400">{t.testimonials.titleHighlight}</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-sky-500 mx-auto rounded-full"
          />
        </div>

        <div className="relative h-[450px] md:h-[350px] flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) {
                  nextSlide();
                } else if (swipe > swipeConfidenceThreshold) {
                  prevSlide();
                }
              }}
              className="absolute w-full max-w-4xl"
            >
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8 md:p-12 rounded-3xl shadow-2xl relative">
                <Quote className="absolute top-8 left-8 text-sky-500/20 w-16 h-16 -scale-x-100" />
                
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 relative z-10">
                  {/* Left Side: Text */}
                  <div className="flex-1 text-center md:text-left order-2 md:order-1">
                    <div className="flex justify-center md:justify-start gap-1 mb-6">
                      {[...Array(currentReview.rating)].map((_, i) => (
                        <Star key={i} size={20} className="fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    
                    <p className="text-xl md:text-2xl text-slate-200 font-light italic leading-relaxed mb-8">
                      "{currentReview.text}"
                    </p>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-white">{currentReview.name}</h3>
                      <p className="text-slate-400 text-sm mb-2">{currentReview.country}</p>
                      <span className="inline-block px-3 py-1 bg-sky-500/10 text-sky-400 text-xs rounded-full font-medium border border-sky-500/20">
                        {currentReview.projectType}
                      </span>
                    </div>
                  </div>

                  {/* Right Side: Visual Identifier */}
                  <div className="order-1 md:order-2 flex-shrink-0">
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center border-4 border-slate-700 shadow-xl">
                       <span className="text-4xl md:text-5xl font-bold text-sky-400">
                         {currentReview.name.charAt(0).toUpperCase()}
                       </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <button
            className="absolute left-0 md:-left-12 top-1/2 -translate-y-1/2 p-3 bg-slate-800/80 hover:bg-sky-500 text-white rounded-full transition-all shadow-lg backdrop-blur-sm border border-slate-700 hover:border-sky-400 z-20 group"
            onClick={prevSlide}
            aria-label="Previous review"
          >
            <ChevronLeft size={24} className="group-hover:-translate-x-0.5 transition-transform" />
          </button>
          <button
            className="absolute right-0 md:-right-12 top-1/2 -translate-y-1/2 p-3 bg-slate-800/80 hover:bg-sky-500 text-white rounded-full transition-all shadow-lg backdrop-blur-sm border border-slate-700 hover:border-sky-400 z-20 group"
            onClick={nextSlide}
            aria-label="Next review"
          >
            <ChevronRight size={24} className="group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-3 mt-12 mb-8">
          {t.testimonials.reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "w-8 bg-sky-500" : "w-2 bg-slate-700 hover:bg-slate-600"
              }`}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>

        {/* Fiverr Verification Button */}
        <div className="flex justify-center">
            <a
              href="https://www.fiverr.com/s/pdV4yyl" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#1DBF73] hover:bg-[#19a463] text-white rounded-full font-semibold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              {t.testimonials.viewOnFiverr}
              <ExternalLink size={18} />
            </a>
        </div>
      </div>
    </section>
  );
}
