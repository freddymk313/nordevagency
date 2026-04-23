"use client"
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
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="From ignored to world-class"
          title={<>Your website is your best salesperson. <span className="text-muted-foreground">Is yours doing its job?</span></>}
          subtitle="Most agency websites lose visitors in the first 5 seconds. We fix that."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2">
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
      className={`relative overflow-hidden rounded-2xl border p-8 ${
        isGood
          ? "border-brand/30 bg-[oklch(0.13_0.04_152_/_0.4)]"
          : "border-destructive/20 bg-[oklch(0.13_0.05_27_/_0.3)]"
      }`}
    >
      <div className="mb-6 flex items-center gap-3">
        <div
          className={`flex h-9 w-9 items-center justify-center rounded-full ${
            isGood ? "bg-brand text-brand-foreground" : "bg-destructive/20 text-destructive"
          }`}
        >
          {isGood ? <Check className="h-5 w-5" /> : <X className="h-5 w-5" />}
        </div>
        <h3 className="font-display text-2xl font-bold">{title}</h3>
      </div>
      <ul className="space-y-4">
        {items.map((item, i) => (
          <motion.li
            key={item}
            initial={{ opacity: 0, x: isGood ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className="flex items-start gap-3 border-b border-border/40 pb-4 text-base last:border-b-0 last:pb-0"
          >
            {isGood ? (
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
            ) : (
              <X className="mt-0.5 h-5 w-5 shrink-0 text-destructive/80" />
            )}
            <span className={isGood ? "text-foreground" : "text-muted-foreground"}>{item}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}
