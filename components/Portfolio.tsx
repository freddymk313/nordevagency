"use client"
import { useState } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import SectionHeading from "./SectionHeading";
// import { SectionHeading } from "./SectionHeading";

type Project = {
  name: string;
  category: string;
  gradient: string;
};

const projects: Project[] = [
  { name: "E-commerce Boutique", category: "Fashion Brand · Shopify", gradient: "from-rose-500 via-pink-600 to-fuchsia-700" },
  { name: "SaaS Dashboard", category: "Tech Startup · React", gradient: "from-emerald-400 via-teal-500 to-cyan-600" },
  { name: "Restaurant Site", category: "Food & Bev · WordPress", gradient: "from-amber-400 via-orange-500 to-red-600" },
  { name: "Portfolio Site", category: "Creative Agency · Next.js", gradient: "from-violet-500 via-purple-600 to-indigo-700" },
  { name: "Real Estate Platform", category: "Property · Next.js", gradient: "from-sky-400 via-blue-500 to-indigo-600" },
  { name: "Consulting Firm", category: "B2B Services · Webflow", gradient: "from-lime-400 via-green-500 to-emerald-600" },
];

export default function Portfolio() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = () => {
    setDirection(1);
    setIndex((i) => (i + 1) % projects.length);
  };
  const prev = () => {
    setDirection(-1);
    setIndex((i) => (i - 1 + projects.length) % projects.length);
  };

  // Show top 3 cards as a stack
  const visible = [0, 1, 2].map((offset) => projects[(index + offset) % projects.length]);

  return (
    <section id="portfolio" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Portfolio"
          title={<>Work we're <span className="text-brand">proud of.</span></>}
          subtitle="Swipe to explore. Tap to see more."
        />

        <div className="relative mx-auto mt-16 flex h-[560px] w-full max-w-md items-center justify-center sm:h-[620px]">
          <AnimatePresence initial={false} custom={direction}>
            {visible.map((p, i) => (
              <Card
                key={`${p.name}-${index}-${i}`}
                project={p}
                stackIndex={i}
                isTop={i === 0}
                onSwipe={(dir) => {
                  if (dir > 0) next();
                  else prev();
                }}
              />
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            onClick={prev}
            className="inline-flex h-12 items-center gap-2 rounded-full border border-border bg-surface px-5 text-sm font-medium text-foreground transition-colors hover:border-brand hover:text-brand"
          >
            <ArrowLeft className="h-4 w-4" /> Previous
          </button>
          <span className="font-display text-sm tabular-nums text-muted-foreground">
            <span className="text-foreground">{String(index + 1).padStart(2, "0")}</span> / {String(projects.length).padStart(2, "0")} projects
          </span>
          <button
            onClick={next}
            className="inline-flex h-12 items-center gap-2 rounded-full border border-border bg-surface px-5 text-sm font-medium text-foreground transition-colors hover:border-brand hover:text-brand"
          >
            Next <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

function Card({
  project,
  stackIndex,
  isTop,
  onSwipe,
}: {
  project: Project;
  stackIndex: number;
  isTop: boolean;
  onSwipe: (dir: number) => void;
}) {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-300, 0, 300], [-18, 0, 18]);
  const opacity = useTransform(x, [-300, -150, 0, 150, 300], [0, 1, 1, 1, 0]);

  const baseScale = 1 - stackIndex * 0.05;
  const baseY = stackIndex * 18;

  return (
    <motion.div
      className="absolute h-full w-full"
      style={{
        zIndex: 10 - stackIndex,
        x: isTop ? x : 0,
        rotate: isTop ? rotate : 0,
        opacity: isTop ? opacity : 1,
      }}
      initial={{ scale: baseScale - 0.05, y: baseY + 10, opacity: 0 }}
      animate={{ scale: baseScale, y: baseY, opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 30 }}
      drag={isTop ? "x" : false}
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.7}
      onDragEnd={(_, info) => {
        if (Math.abs(info.offset.x) > 120 || Math.abs(info.velocity.x) > 500) {
          onSwipe(info.offset.x > 0 ? 1 : -1);
        }
      }}
      whileTap={isTop ? { cursor: "grabbing" } : undefined}
    >
      <div className="relative flex h-full w-full flex-col overflow-hidden rounded-3xl border border-border bg-surface-elevated shadow-2xl">
        <div className={`relative flex-1 bg-gradient-to-br ${project.gradient}`}>
          <div className="absolute inset-0 bg-black/20" />
          <div
            aria-hidden
            className="absolute inset-0 opacity-30 mix-blend-overlay"
            style={{
              backgroundImage:
                "radial-gradient(circle at 30% 20%, white 0%, transparent 40%), radial-gradient(circle at 70% 80%, white 0%, transparent 40%)",
            }}
          />
          {/* mock UI shapes */}
          <div className="absolute inset-x-8 top-10 space-y-3">
            <div className="h-3 w-24 rounded-full bg-white/40" />
            <div className="h-8 w-3/4 rounded-md bg-white/60" />
            <div className="h-8 w-2/3 rounded-md bg-white/40" />
          </div>
          <div className="absolute inset-x-8 bottom-28 grid grid-cols-3 gap-2">
            <div className="h-16 rounded-lg bg-white/30" />
            <div className="h-16 rounded-lg bg-white/30" />
            <div className="h-16 rounded-lg bg-white/30" />
          </div>
        </div>
        <div className="flex items-center justify-between gap-4 border-t border-border bg-background/95 p-5 backdrop-blur">
          <div>
            <div className="text-[11px] uppercase tracking-widest text-brand">{project.category}</div>
            <h3 className="mt-1 font-display text-lg font-bold">{project.name}</h3>
          </div>
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-brand hover:text-brand"
          >
            View <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
