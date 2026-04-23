"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const metrics = [
  { value: 50, suffix: "+", label: "Projects delivered" },
  { value: 14, suffix: " days", label: "Avg. delivery time" },
  { value: 98, suffix: "%", label: "Satisfaction rate" },
  { value: 3, suffix: "x", label: "Avg. traffic boost" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 2000; // Animation légèrement plus longue pour le côté premium
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 4); // Ease-out plus marqué
      setN(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  return (
    <span ref={ref} className="font-display text-5xl font-extrabold tracking-tighter text-foreground sm:text-6xl">
      {n}
      <span className="text-green-accent">{suffix}</span>
    </span>
  );
}

export default function Metrics() {
  return (
    <section className="relative border-y border-border bg-background py-24">
      {/* Texture de fond discrète pour casser le blanc pur si besoin */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('/grain.png')]" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-y-12 lg:grid-cols-4 lg:gap-0">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`flex flex-col items-center text-center lg:px-8 ${
                i > 0 ? "lg:border-l lg:border-border" : ""
              }`}
            >
              <Counter to={m.value} suffix={m.suffix} />
              <div className="mt-4 text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground group-hover:text-green-accent transition-colors">
                {m.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}