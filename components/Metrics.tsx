"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const metrics = [
  { value: 50, suffix: "+", label: "Projects delivered" },
  { value: 14, suffix: " days", label: "Average delivery time" },
  { value: 98, suffix: "%", label: "Client satisfaction" },
  { value: 3, suffix: "x", label: "Avg traffic increase" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1600;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  return (
    <span ref={ref} className="font-display text-5xl font-extrabold text-foreground sm:text-6xl">
      {n}
      <span className="text-green-accent">{suffix}</span>
    </span>
  );
}

export default function Metrics() {
  return (
    <section className="relative border-y border-border bg-background py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-y-10 lg:grid-cols-4 lg:gap-0">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`flex flex-col items-center text-center lg:px-6 ${
                i > 0 ? "lg:border-l lg:border-green-accent/20" : ""
              }`}
            >
              <Counter to={m.value} suffix={m.suffix} />
              <div className="mt-3 text-[10px] font-bold uppercase tracking-[0.2em] text-green-accent">
                {m.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}