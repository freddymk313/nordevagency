"use client";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const steps = [
  { n: "01", title: "Discovery Call", desc: "We learn your goals, audience, and vision in a 30-min strategy session." },
  { n: "02", title: "Design Concept", desc: "We deliver your first mockup within 72 hours. You'll love it or we redo it." },
  { n: "03", title: "Build & Refine", desc: "We develop the full site with your feedback at every step." },
  { n: "04", title: "Launch & Beyond", desc: "We go live, then stay available for support and growth." },
];

export default function Process() {
  return (
    <section id="process" className="relative border-y border-border bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="How we work"
          title={<>Your dream website, in <span className="text-muted-foreground">4 simple steps.</span></>}
          subtitle="A clear, stress-free process from first call to final launch."
        />

        <div className="relative mt-20">
          {/* connecting line desktop */}
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-green-accent/40 to-transparent lg:block" />
          
          <div className="grid gap-12 lg:grid-cols-4 lg:gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                className="relative flex flex-col items-center text-center lg:items-start lg:text-left"
              >
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-green-accent/40 bg-background font-display text-lg font-bold text-green-accent">
                  {s.n}
                </div>
                <h3 className="mt-6 font-display text-xl font-bold text-foreground">{s.title}</h3>
                <p className="mt-2 max-w-xs text-sm text-muted-foreground">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}