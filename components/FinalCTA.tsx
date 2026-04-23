"use client"
import { motion } from "framer-motion";
import { Zap } from "lucide-react";

export default function FinalCTA() {
  return (
    <section id="contact" className="relative overflow-hidden py-28 sm:py-40 bg-background">
      {/* Effet de lueur en arrière-plan utilisant tes variables CSS */}
      <motion.div
        aria-hidden
        animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.1, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{ 
          background: "radial-gradient(circle, var(--green-accent) 0%, transparent 70%)",
          filter: "blur(120px)",
          opacity: 0.15
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-green-accent/30 bg-green-accent/5 px-4 py-1.5 text-[10px] font-bold uppercase tracking-wider text-green-accent">
          <Zap className="h-3.5 w-3.5 fill-green-accent" />
          Only 3 spots available this month
        </div>
        
        <h2 className="mt-6 font-display text-balance text-5xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
          Ready to build something <span className="text-green-accent">remarkable?</span>
        </h2>
        
        <p className="mx-auto mt-6 max-w-xl text-balance text-base text-muted-foreground sm:text-lg">
          Join 50+ businesses who chose Nordev to grow their online presence.
        </p>

        <motion.a
          href="#"
          className="mt-10 inline-flex items-center justify-center rounded-full bg-green-accent px-10 py-5 font-display text-base font-bold text-background transition-shadow hover:shadow-[0_0_30px_-5px_var(--green-accent)] sm:text-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          Book Your Free Strategy Call
        </motion.a>
      </motion.div>
    </section>
  );
}