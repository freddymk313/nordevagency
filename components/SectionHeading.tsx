"use client";
import { motion } from "framer-motion"; // ou "framer-motion" selon ta version
import type { ReactNode } from "react";

// SectionHeading.tsx mis à jour
export default function SectionHeading({ eyebrow, title, subtitle, align = "center" }: { eyebrow?: string; title: ReactNode; subtitle?: ReactNode; align?: "center" | "left"; }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : "text-left"}`}
    >
      {eyebrow && (
        <div className="mb-6 inline-flex items-center rounded-full border border-border bg-muted/50 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.3em] text-green-accent">
          {/* On garde le vert uniquement sur le texte pour l'élégance */}
          {eyebrow}
        </div>
      )}
      <h2 className="font-display text-balance text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-6 text-balance font-sans text-base leading-relaxed text-muted-foreground sm:text-lg">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}