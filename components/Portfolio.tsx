"use client";
import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Link from "next/link";

type Project = {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  technologies: string[];
  link: string;
};

const projects: Project[] = [
  { id: 1, title: "Funda Online", description: "Online learning platform...", category: "Web Development", image: "/portfolio/funda.png", technologies: ["Next.js", "TypeScript", "Sanity", "Tailwind"], link: "https://funda-online.com" },
  { id: 2, title: "CS Bisournouse", description: "Website for school...", category: "Web Development", image: "/portfolio/csbis.png", technologies: ["React", "TypeScript", "Node.js", "Tailwind"], link: "https://csbisournouse.vercel.app" },
  { id: 3, title: "Metro Travels", description: "Travel booking site...", category: "Web Development", image: "/portfolio/metro.png", technologies: ["Next.js", "TypeScript", "Tailwind"], link: "https://metrotravels.vercel.app/destinations" },
  { id: 4, title: "Asunicaco", description: "Landing page...", category: "Web Development", image: "/portfolio/1.PNG", technologies: ["Codegniter", "Php", "Bootstrap"], link: "https://pexelsinovation.vercel.app" },
  { id: 5, title: "Jexweb", description: "Landing page...", category: "Web Development", image: "/portfolio/jexweb.png", technologies: ["Next.js", "TypeScript", "Tailwind"], link: "https://jexweb.vercel.app" },
  { id: 6, title: "Congodmp", description: "SAAS platform...", category: "Web Development", image: "/portfolio/congodmp.png", technologies: ["Next.js", "TypeScript", "Tailwind", "Shadcn UI"], link: "https://congodmp.vercel.app" },
  { id: 7, title: "CCPS", description: "Website for NGO...", category: "Web Development", image: "/portfolio/ccps.png", technologies: ["React", "TypeScript", "Tailwind"], link: "https://ccps.vercel.app" },
  { id: 8, title: "Pexelsinovation", description: "Landing page...", category: "Web Development", image: "/portfolio/pexels.png", technologies: ["Next.js", "TypeScript", "Tailwind"], link: "https://pexelsinovation.vercel.app" },
  { id: 9, title: "Mizitikilili", description: "Landing page...", category: "Web Development", image: "/portfolio/mizitikilili.png", technologies: ["Next.js", "TypeScript", "Tailwind"], link: "https://mizitikilili.vercel.app" },
  { id: 10, title: "Nordev", description: "Landing page...", category: "Web Development", image: "/portfolio/nordev.png", technologies: ["Next.js", "TypeScript", "Tailwind"], link: "https://nordev-inc.lovable.app/" },
  { id: 11, title: "La Bonne fourchette", description: "Landing page...", category: "Web Development", image: "/portfolio/la-bonne-fourchette.png", technologies: ["Next.js", "TypeScript", "Tailwind"], link: "https://la-bonne-fourchette.vercel.app" },
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

  const visible = [0, 1, 2].map(
    (offset) => projects[(index + offset) % projects.length]
  );

  return (
    <section id="portfolio" className="relative py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Portfolio"
          title={<>Work we're <span className="text-green-accent">proud of.</span></>}
          subtitle="Swipe to explore. Click to see the live site."
        />

        {/* <div className="relative mx-auto mt-16 w-full max-w-md aspect-[16/11]"> */}
        <div className="relative mx-auto mt-16 flex h-[500px] w-full max-w-md items-center justify-center sm:h-[580px]">
          <AnimatePresence initial={false} custom={direction}>
            {visible.map((p, i) => (
              <Card
                key={`${p.title}-${index}-${i}`}
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
            className="inline-flex h-12 items-center gap-2 rounded-full border border-border bg-card px-5 text-sm font-medium text-foreground transition-colors hover:border-green-accent hover:text-green-accent"
          >
            <ArrowLeft className="h-4 w-4" /> Previous
          </button>
          <span className="font-display text-sm tabular-nums text-muted-foreground">
            <span className="text-foreground">{String(index + 1).padStart(2, "0")}</span> / {String(projects.length).padStart(2, "0")}
          </span>
          <button
            onClick={next}
            className="inline-flex h-12 items-center gap-2 rounded-full border border-border bg-card px-5 text-sm font-medium text-foreground transition-colors hover:border-green-accent hover:text-green-accent"
          >
            Next <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

function Card({ project, stackIndex, isTop, onSwipe }: { project: Project; stackIndex: number; isTop: boolean; onSwipe: (dir: number) => void; }) {
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
      <div className="group relative flex h-full w-full flex-col overflow-hidden rounded-[2rem] border border-border bg-card shadow-2xl">
        
        {/* Zone Image : Remplit tout le haut de la carte */}
        <div className="relative flex-1 overflow-hidden bg-muted">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/5 pointer-events-none" />
        </div>

        {/* Barre d'info (Bas de la carte) */}
        <div className="flex items-center justify-between gap-4 border-t border-border bg-card p-6">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-green-accent">
              {project.category}
            </div>
            <h3 className="mt-1 font-display text-lg font-bold text-foreground">
              {project.title}
            </h3>
          </div>
          <Link
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-all hover:border-green-accent hover:text-green-accent hover:scale-110"
          >
            <ExternalLink className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}