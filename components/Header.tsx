"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const links = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#pricing", label: "Pricing" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="*fixed inset-x-0 top-0 z-50"
    >
      <div
        className={`relative *backdrop-blur-md transition-all duration-300 ${
          scrolled 
            ? "bg-background border-none py-4" 
            : "bg-transparent py-4"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo - Utilise la font Syne définie dans ton CSS */}
          <Link href="/">
              <div className="flex items-center space-x-3">
                <div className="lg:hidden">
                  <Image
                    src="/logo/logo-1.jpg"
                    height={48}
                    width={48}
                    alt="Nordev Agency logo"
                    quality={100}
                  />
                </div>
                <div className="hidden lg:block">
                  <Image
                    src="/logo/logo-2.jpg"
                    height={230}
                    width={230}
                    alt="Nordev Agency logo"
                  />
                </div>
              </div>
            </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="group relative *text-sm font-medium text-foreground transition-colors hover:text-green-accent"
              >
                {l.label}
                {/* Ligne d'accentuation utilisant ton vert */}
                {/* <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-green-accent transition-transform duration-300 group-hover:scale-x-100" /> */}
              </Link>
            ))}
          </nav>

          {/* CTA - Utilise ton vert occasionnel et l'animation de glow */}
          {/* <div className="hidden md:block">
            <a
              href="#contact"
              className="animate-pulse-glow-green font-display inline-flex items-center justify-center rounded-full bg-green-accent px-6 py-2.5 text-sm font-bold text-black transition-transform hover:scale-105 active:scale-95"
            >
              Book a Call
            </a>
          </div> */}
          <Link href="#contact">
              <button 
              // className="bg- text-sm text-white pl-8 pr-2 py-2 rounded-full hover:bg-black transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1  group"
              className="animate-pulse-glow-green font-display flex items-center gap-4 justify-center rounded-full bg-green-accent pl-6 py-2 md:py-2.5 pr-3.5 text-sm font-bold text-black transition-transform hover:scale-105 active:scale-95"
              >
                <span className="">Book a Call</span>
                <span className="bg-white w-10 h-10 rounded-full flex items-center justify-center text-black group-hover:bg-gray-100 transition-colors">
                  <svg
                    className="w-5 h-5 group-hover:translate-x-0.5 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
              </button>
            </Link>

          {/* Mobile Menu Button */}
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground md:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Ligne de progression subtile au scroll */}
        {/* <motion.div
          className="absolute inset-x-0 bottom-0 h-px origin-left bg-gradient-to-r from-transparent via-green-accent to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: scrolled ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        /> */}
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="overflow-hidden bg-background/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-6">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-4 py-3 text-lg font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-4 inline-flex items-center justify-center rounded-full bg-green-accent py-4 font-display text-base font-bold text-black"
              >
                Book a Call
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}