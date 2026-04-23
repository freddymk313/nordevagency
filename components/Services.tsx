"use client";

import { motion } from "framer-motion";
import { 
  Monitor, 
  Code2, 
  Smartphone, 
  Search, 
  Zap, 
  RotateCcw 
} from "lucide-react";
import SectionHeading from "./SectionHeading";

const services = [
  {
    icon: <Monitor className="h-6 w-6" />,
    title: "Custom Web Design",
    desc: "Unique, conversion-focused designs tailored to your brand identity.",
  },
  {
    icon: <Code2 className="h-6 w-6" />,
    title: "Web Development",
    desc: "Fast, scalable sites built with Next.js and modern technology.",
  },
  {
    icon: <Smartphone className="h-6 w-6" />,
    title: "Mobile-First Design",
    desc: "Flawless experience on every screen, from iPhone to Desktop.",
  },
  {
    icon: <Search className="h-6 w-6" />,
    title: "SEO Optimization",
    desc: "Get found by the clients who need your services the most.",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Performance & Speed",
    desc: "Sub-2s load times, optimized to maximize your conversion rate.",
  },
  {
    icon: <RotateCcw className="h-6 w-6" />,
    title: "Redesign & Refresh",
    desc: "We take your existing site from forgettable to unforgettable.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Services"
          title={
            <>
              Everything you need to{" "}
              <span className="text-muted-foreground">dominate online.</span>
            </>
          }
          subtitle="We handle every pixel, every line of code, every word."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.06, duration: 0.55 }}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-[2rem] border border-border bg-card p-8 transition-all duration-300 hover:border-green-accent/40 hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.05)]"
            >
              {/* Glow subtil au survol */}
              <div
                aria-hidden
                className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-green-accent/5 blur-3xl transition-opacity duration-500 opacity-0 group-hover:opacity-100"
              />

              <div className="relative">
                {/* Icône avec ton vert occasionnel */}
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-green-accent/10 text-green-accent transition-colors duration-300 group-hover:bg-green-accent group-hover:text-background">
                  {s.icon}
                </div>

                <h3 className="font-display text-xl font-bold tracking-tight text-foreground">
                  {s.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {s.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}