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
          title={<>Our clients don't leave. <span className="text-muted-foreground">They send referrals.</span></>}
          subtitle="Real results for real businesses. Here is what they say about Nordev."
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
                // Ombre plus subtile pour correspondre au look premium
                boxShadow: active === i ? "0 20px 40px -15px rgba(0,0,0,0.05)" : "none",
              }}
              className="relative flex flex-col rounded-[2rem] border bg-card p-8 transition-colors duration-500"
            >
              <Quote className="h-8 w-8 text-green-accent/20" />
              
              <p className="mt-5 flex-1 font-sans text-base leading-relaxed text-foreground italic">
                "{t.quote}"
              </p>

              <div className="mt-8 flex items-center justify-between border-t border-border/50 pt-6">
                <div>
                  <div className="font-display text-base font-bold text-foreground">{t.name}</div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">{t.role}</div>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-3.5 w-3.5 fill-green-accent text-green-accent" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="mt-12 flex justify-center gap-2.5">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Show testimonial ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                active === i ? "w-8 bg-green-accent" : "w-2.5 bg-border hover:bg-muted-foreground"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}