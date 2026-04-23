"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star } from "lucide-react";
import SectionHeading from "./SectionHeading";

const testimonials = [
  {
    quote: "Nordev transformed our online presence completely. Within 2 weeks we had a site we were proud to share. Leads tripled in the first month.",
    name: "Thomas M.",
    role: "Founder @ StartupX",
  },
  {
    quote: "The team is fast, communicative, and truly understands how to convert visitors. Best investment we made this year.",
    name: "Sophie L.",
    role: "Director @ BrandCo",
  },
  {
    quote: "I gave them my vision, they delivered something beyond what I imagined. The site speaks for itself.",
    name: "Alex R.",
    role: "CEO @ NovaTech",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % testimonials.length), 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="testimonials" className="relative py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Testimonials"
          title={<>Our clients don't leave. <span className="text-green-accent">They send referrals.</span></>}
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              animate={{
                borderColor: active === i ? "var(--green-accent)" : "var(--border)",
                boxShadow: active === i ? "0 10px 40px -10px var(--green-accent)" : "none",
              }}
              className="relative flex flex-col rounded-2xl border bg-card p-7 transition-colors duration-500"
            >
              <Quote className="h-8 w-8 text-green-accent" />
              <p className="mt-5 flex-1 text-base leading-relaxed text-foreground">
                "{t.quote}"
              </p>
              <div className="mt-6 flex items-center justify-between border-t border-border pt-5">
                <div>
                  <div className="font-display text-base font-bold text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-green-accent text-green-accent" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Show testimonial ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                active === i ? "w-8 bg-green-accent" : "w-2 bg-border"
              }`}
            />
          ))}
        </div>
      </div>
      <AnimatePresence />
    </section>
  );
}