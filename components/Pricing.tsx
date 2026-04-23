"use client";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import SectionHeading from "./SectionHeading";

const tiers = [
  {
    name: "Starter",
    price: "$799",
    features: ["1-page landing page", "Mobile responsive", "SEO basics", "7-day delivery"],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Growth",
    price: "$1,499",
    features: ["Up to 5 pages", "Mobile responsive", "Full SEO setup", "14-day delivery"],
    cta: "Most Popular 🔥",
    highlighted: true,
  },
  {
    name: "Premium",
    price: "Custom",
    features: ["Full custom project", "All features", "Dedicated support", "Priority delivery"],
    cta: "Contact Us",
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Pricing"
          title={<>Simple, <span className="text-green-accent">transparent pricing.</span></>}
          subtitle="No surprises. No hidden fees. Just results."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-3 lg:items-center">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`relative flex flex-col rounded-2xl border p-8 transition-all duration-500 ${
                t.highlighted
                  ? "border-green-accent bg-card shadow-[0_0_40px_-15px_var(--green-accent)] lg:scale-[1.04] z-10"
                  : "border-border bg-card/50"
              }`}
            >
              {t.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-green-accent px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-background">
                  Most Popular
                </div>
              )}
              <h3 className="font-display text-xl font-bold text-foreground">{t.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="font-display text-5xl font-extrabold text-foreground">{t.price}</span>
              </div>
              <ul className="mt-7 space-y-3 border-t border-border pt-7">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-accent" />
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-8 inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold transition-all hover:scale-[1.02] ${
                  t.highlighted
                    ? "bg-green-accent text-background shadow-lg"
                    : "border border-border bg-transparent text-foreground hover:border-green-accent hover:text-green-accent"
                }`}
              >
                {t.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}