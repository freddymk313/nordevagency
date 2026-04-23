"use client"
import { motion } from "framer-motion";
import {
  Palette, Zap, Smartphone, Search, Gauge, RefreshCw,
  type LucideIcon,
} from "lucide-react";
import SectionHeading from "./SectionHeading";

const services: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: Palette, title: "Custom Web Design", desc: "Unique, conversion-focused designs tailored to your brand." },
  { icon: Zap, title: "Web Development", desc: "Fast, scalable sites built with modern technology." },
  { icon: Smartphone, title: "Mobile-First Design", desc: "Flawless on every screen, every device." },
  { icon: Search, title: "SEO Optimization", desc: "Get found by the clients who need you most." },
  { icon: Gauge, title: "Performance & Speed", desc: "Sub-2s load times, optimized for conversions." },
  { icon: RefreshCw, title: "Redesign & Refresh", desc: "We take your existing site from forgettable to unforgettable." },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Services"
          title={<>Everything you need to <span className="text-green-accent">dominate online.</span></>}
          subtitle="We handle every pixel, every line of code, every word."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.06, duration: 0.55 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-7 transition-colors duration-300 hover:border-green-accent/60"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: "var(--green-accent)" }}
              />
              <div className="relative">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-green-accent/10 text-green-accent">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}