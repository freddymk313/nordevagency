"use client";
import { motion, type Variants } from "framer-motion";
import { ArrowDown, ArrowRight, Star } from "lucide-react";
import Link from "next/link";

const lineParent: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const lineChild: Variants = {
  hidden: { y: 28, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section
      id="top"
      className="grain relative flex min-h-screen items-center overflow-hidden bg-background pt-26"
    >
      {/* Lueur radiale animée utilisant ton dégradé CSS */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        style={{ background: "var(--gradient-radial-glow)" }}
      />

      {/* Grille subtile adaptée à ta couleur de bordure */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--color-border) 1px, transparent 1px), linear-gradient(to bottom, var(--color-border) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 text-center sm:px-6">
        <motion.div
          variants={lineParent}
          initial="hidden"
          animate="show"
          className="font-display text-[clamp(2.75rem,8vw,6rem)] font-semibold leading-[1.02] tracking-tight"
        >
          <motion.div variants={lineChild} className="text-muted-foreground">
            We build websites
          </motion.div>
          <motion.div variants={lineChild} className="text-muted-foreground">
            that turn visitors
          </motion.div>
          <motion.div variants={lineChild} className="relative inline-block text-foreground">
            into clients.
            {/* Soulignement avec ton vert accentué */}
            {/* <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.1, duration: 0.8, ease: "easeOut" }}
              className="absolute -bottom-2 left-0 right-0 h-1.5 origin-left rounded-full bg-green-accent"
            /> */}
          </motion.div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="mx-auto mt-8 max-w-xl text-balance font-sans text-base text-muted-foreground sm:text-lg"
        >
          Custom-built web experiences for ambitious businesses. Fast delivery, zero compromise.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
        >
          {/* Bouton principal avec ton Vert et son animation de Glow */}
          {/* <a
            href="#contact"
            className="group animate-pulse-glow-green font-display inline-flex items-center justify-center gap-2 rounded-lg bg-green-accent px-7 py-3.5 text-base font-bold text-black transition-transform hover:scale-105"
          >
            
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a> */}

           <Link href="#contact">
              <button 
              // className="bg- text-sm text-white pl-8 pr-2 py-2 rounded-full hover:bg-black transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1  group"
              className="*animate-pulse-glow-green font-display flex items-center gap-4 justify-center rounded-full bg-green-accent pl-6 py-2 md:py-2.5 pr-3.5 text-sm font-bold text-black transition-transform *hover:scale-105 active:scale-95"
              >
                <span className="">Start Your Project</span>
                <span className="bg-white w-10 h-10 rounded-full flex items-center justify-center text-black group-hover:bg-gray-100 transition-colors">
                  <svg
                    className="w-5 h-5 group-hover:translate-x-0.5 transition-transform"
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
          
          <Link
            href="#portfolio"
            className="inline-flex items-center justify-center rounded-full border border-border bg-transparent px-7 py-3.5 text-base font-semibold text-foreground transition-colors hover:bg-background"
          >
            See Our Work
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs text-muted-foreground sm:text-sm"
        >
          <span className="inline-flex items-center gap-1.5">
            {/* Étoile utilisant ton vert */}
            <Star className="h-3.5 w-3.5 fill-green-accent text-green-accent" />
            Trusted by 50+ businesses worldwide
          </span>
          <span className="hidden opacity-25 sm:inline">|</span>
          <span>Delivered in under 14 days</span>
        </motion.div>
      </div>

      {/* Flèche de scroll utilisant ta couleur de texte secondaire */}
      <motion.a
        href="#trust"
        aria-label="Scroll down"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0.5] }}
        transition={{ delay: 2, duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground"
      >
        <ArrowDown className="h-5 w-5" />
      </motion.a>
    </section>
  );
}