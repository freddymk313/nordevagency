"use client";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import SectionHeading from "./SectionHeading";

const without = [
  "Generic template sites",
  "Weeks of back-and-forth",
  "No strategy, just pages",
  "You disappear on Google",
  "Looks like every competitor",
];

const withN = [
  "100% custom-built",
  "Delivered in 14 days",
  "Built to convert",
  "SEO-ready from day one",
  "Stands out instantly",
];

export function Comparison() {
  return (
    <section className="relative py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="mb-4 md:mb-6 inline-flex items-center *gap-2 rounded-full border border-green-accent bg-background px-4 py-1.5 font-bold uppercase tracking-[0.2em] text-green-accent">
            <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-green-accent block">
              From ignored to world-class
            </span>
          </div>
          
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
            Your website is your best salesperson. <br />
            <span className="text-muted-foreground">
              Is yours doing its job?
            </span>
          </h2>
          <p className="font-sans text-muted-foreground text-lg max-w-2xl mx-auto">
            Most agency websites lose visitors in the first 5 seconds. We fix
            that.
          </p>
        </div>

        {/* <SectionHeading
          eyebrow="From ignored to world-class"
          title={
            <>
              Your website is your best salesperson.{" "}
              <span className="text-muted-foreground">
                Is yours doing its job?
              </span>
            </>
          }
          subtitle="Most agency websites lose visitors in the first 5 seconds. We fix that."
        /> */}

        <div className="grid gap-6 md:grid-cols-2">
          <Card variant="bad" title="Without Nordev" items={without} />
          <Card variant="good" title="With Nordev" items={withN} />
        </div>
      </div>
    </section>
  );
}

function Card({
  variant,
  title,
  items,
}: {
  variant: "bad" | "good";
  title: string;
  items: string[];
}) {
  const isGood = variant === "good";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className={`relative overflow-hidden rounded-4xl border p-8 transition-colors ${
        isGood
          ? "border-green-accent/20 bg-surface-elevated/50" // Utilise ton vert et ta surface
          : "border-destructive/10 bg-surface/30" // Utilise ton rouge destructif
      }`}
    >
      {/* Effet de halo subtil pour la carte "Good" */}
      {isGood && (
        <div className="absolute -right-20 -top-20 h-40 w-40 bg-green-accent/10 blur-[80px]" />
      )}

      <div className="relative z-10 mb-8 flex items-center gap-4">
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-full *shadow-sm ${
            isGood
              ? "bg-green-accent text-black"
              : "bg-destructive/20 text-destructive"
          }`}
        >
          {isGood ? (
            <Check className="h-6 w-6 stroke-[3px]" />
          ) : (
            <X className="h-6 w-6 stroke-[3px]" />
          )}
        </div>
        <h3 className="font-display text-2xl font-bold tracking-tight">
          {title}
        </h3>
      </div>

      <ul className="relative z-10 space-y-5">
        {items.map((item, i) => (
          <motion.li
            key={item}
            initial={{ opacity: 0, x: isGood ? 10 : -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className={`flex items-start gap-3 border-b border-border/40 pb-4 last:border-b-0 last:pb-0 ${
              isGood ? "text-foreground" : "text-muted-foreground"
            }`}
          >
            <div className="mt-1">
              {isGood ? (
                <Check className="h-5 w-5 shrink-0 text-green-accent" />
              ) : (
                <X className="h-5 w-5 shrink-0 text-destructive/50" />
              )}
            </div>
            <span className="font-sans text-base leading-relaxed">{item}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}
