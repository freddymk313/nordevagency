"use client"
import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import Link from "next/link";

export default function FinalCTA() {
  return (
    <section id="contact" className="relative overflow-hidden py-28 sm:py-40 bg-muted">
      {/* Effet de lueur radiale utilisant ton vert accentué */}
      <motion.div
        aria-hidden
        animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.1, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{ 
          // background: "radial-gradient(circle, var(--green-accent) 0%, transparent 70%)",
          filter: "blur(120px)",
          opacity: 0.1
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6"
      >
        {/* Badge de rareté cohérent avec tes autres sections */}
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-1.5 text-[11px] font-bold *uppercase *tracking-[0.3em] text-green-accent">
          {/* <Zap className="h-3.5 w-3.5 fill-green-accent" /> */}
          Only 3 spots available this month
        </div>

        <h2 className="mt-8 font-display text-balance text-5xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
          Ready to build something <span className="text-muted-foreground">remarkable?</span>
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-balance font-sans text-base text-muted-foreground sm:text-lg">
          Join 50+ businesses who chose Nordev to grow their online presence with high-end digital experiences.
        </p>

        <div className="mt-12 flex justify-center">
          <Link href="#contact">
            <button 
              className="animate-pulse-glow-green font-display flex items-center gap-4 justify-center rounded-full bg-green-accent pl-8 py-2.5 pr-3.5 text-base font-bold text-black transition-transform hover:scale-105 active:scale-95 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)]"
            >
              <span className="">Book Your Strategy Call</span>
              <span className="bg-white w-12 h-12 rounded-full flex items-center justify-center text-black">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
            </button>
          </Link>
        </div>
        
        {/* <p className="mt-8 text-[10px] font-bold uppercase tracking-widest text-muted-foreground opacity-60">
          No commitment required • Free 30-min consultation
        </p> */}
      </motion.div>
    </section>
  );
}