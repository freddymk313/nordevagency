"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  benefits,
  faqItems,
  navigation,
  pricing,
  processSteps,
  projects,
  problems,
  testimonials,
  ways,
  whatsappBaseUrl,
  whatsappMessages,
  whatsappUrl,
} from "@/content";

type ButtonLinkProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary";
  size?: "large" | "small";
  inverted?: boolean;
  className?: string;
};

type IconProps = { className?: string };

function ArrowIcon({ className }: IconProps) {
  return <svg className={className} viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h13M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function ArrowUpRightIcon({ className }: IconProps) {
  return <svg className={className} viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M7 17 17 7M8 7h9v9" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function CheckIcon({ className }: IconProps) {
  return <svg className={className} viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m5 12 4 4L19 6" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function CrossIcon({ className }: IconProps) {
  return <svg className={className} viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2"><path d="m7 7 10 10M17 7 7 17" strokeLinecap="round" /></svg>;
}

function PlusIcon({ className }: IconProps) {
  return <svg className={className} viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M12 5v14M5 12h14" strokeLinecap="round" /></svg>;
}

function ChevronIcon({ direction }: { direction: "left" | "right" }) {
  return <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5"><path d={direction === "left" ? "m14 6-6 6 6 6" : "m10 6 6 6-6 6"} strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function MenuIcon({ open }: { open: boolean }) {
  return <svg className="menu-icon" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8"><path d={open ? "M6 6l12 12M18 6 6 18" : "M4 7h16M4 12h16M4 17h16"} strokeLinecap="round" /></svg>;
}

function WhatsappIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.75"><path d="M20.4 11.5a8.2 8.2 0 0 1-12.1 7.2L3.5 20l1.3-4.6A8.2 8.2 0 1 1 20.4 11.5Z" strokeLinecap="round" strokeLinejoin="round" /><path d="M8.4 8.1c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.6 1.4c.1.2.1.4 0 .6l-.5.7c-.1.2-.1.3 0 .5.5.9 1.2 1.6 2.1 2.1.2.1.4.1.5-.1l.7-.8c.2-.2.4-.2.7-.1l1.4.7c.2.1.3.3.3.5 0 .5-.2 1-.6 1.3-.4.3-1 .4-1.5.2-1.2-.4-2.4-1.1-3.4-2-1-.9-1.8-2-2.3-3.2-.2-.5-.2-1.1.1-1.8Z" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function ButtonLink({ children, href, variant = "primary", size = "large", inverted = false, className = "" }: ButtonLinkProps) {
  if (variant === "secondary") {
    return <a className={`button button-secondary button-${size} ${className}`} href={href} target="_blank" rel="noopener noreferrer">{children}</a>;
  }

  return <span className={`button-pair button-pair-${size} ${inverted ? "button-pair-inverted" : ""} ${className}`}><a className="button-pill" href={href} target="_blank" rel="noopener noreferrer">{children}</a><a className="button-circle" href={href} target="_blank" rel="noopener noreferrer" aria-label={typeof children === "string" ? children : "Ouvrir WhatsApp"}><ArrowIcon /></a></span>;
}

function SectionTitle({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <h2 className={`section-title ${className}`}>{children}</h2>;
}

function Logo() {
  return null;
}

function availableProjectImage(projectName: string): string | null {
  return projectName === "Funda Online" ? "/portfolio/funda-online.png" : null;
}

function FloatingThumbnails() {
  const images = projects.map((project) => availableProjectImage(project.name));
  return <div className="hero-thumbnails" aria-hidden="true">{images[0] ? <img className="hero-thumb hero-thumb-a" src={images[0]} alt="" /> : null}{images[1] ? <img className="hero-thumb hero-thumb-b" src={images[1]} alt="" /> : null}{images[2] ? <img className="hero-thumb hero-thumb-c" src={images[2]} alt="" /> : null}</div>;
}

function ProjectCarousel() {
  const rowRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  const handleScroll = () => {
    const row = rowRef.current;
    if (!row) return;
    const maxScroll = row.scrollWidth - row.clientWidth;
    setProgress(maxScroll > 0 ? (row.scrollLeft / maxScroll) * 100 : 0);
  };

  return <section id="realisations" className="panel carousel-panel reveal"><div className="carousel-row" ref={rowRef} onScroll={handleScroll}>
    {projects.map((project) => <a className="carousel-card" href={project.href} target="_blank" rel="noopener noreferrer" key={project.name}>{availableProjectImage(project.name) ? <img loading="lazy" src={availableProjectImage(project.name) as string} alt={`Projet ${project.name}`} /> : null}<span className="site-pill">Voir le site</span><span className="site-arrow"><ArrowUpRightIcon /></span><span className="project-name-tag"><strong>{project.name}</strong><small>Développement web</small></span></a>)}
    <article className="carousel-card carousel-next"><h3>Votre entreprise pourrait être la prochaine.</h3><ButtonLink href={whatsappUrl} variant="secondary" size="small">Parlons de votre projet</ButtonLink></article>
    <div className="drag-badge"><span>Glisser</span><div><ChevronIcon direction="left" /><ChevronIcon direction="right" /></div></div>
  </div><div className="carousel-progress"><span style={{ left: `${progress}%` }} /></div></section>;
}

export default function LandingPage() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [legalModal, setLegalModal] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const revealElements = document.querySelectorAll<HTMLElement>(".reveal");

    if (reducedMotion) {
      revealElements.forEach((element) => element.classList.add("is-visible"));
    } else {
      const observer = new IntersectionObserver((entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            currentObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });
      revealElements.forEach((element) => observer.observe(element));
      return () => {
        observer.disconnect();
        window.removeEventListener("scroll", onScroll);
      };
    }
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return <div className="site-shell">
    <div className="announcement-bar"><span>Diagnostic gratuit</span><i>·</i><span>Réponse sous 72 h</span><i>·</i><span className="announcement-payment">Paiement par Mobile Money, virement ou carte</span></div>

    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}><div className="nav-inner"><Logo /><nav className="desktop-nav" aria-label="Navigation principale">{navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}</nav><div className="nav-actions"><ButtonLink href={whatsappUrl} size="small">Diagnostic gratuit</ButtonLink><button className="menu-button" type="button" onClick={() => setMobileMenuOpen((open) => !open)} aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"} aria-expanded={mobileMenuOpen}><MenuIcon open={mobileMenuOpen} /></button></div></div></header>

    {mobileMenuOpen ? <div className="mobile-menu"><div className="mobile-menu-inner">{navigation.map((item) => <a key={item.href} href={item.href} onClick={closeMobileMenu}>{item.label}</a>)}<ButtonLink href={whatsappUrl} className="mobile-menu-cta">Demander mon diagnostic gratuit</ButtonLink></div></div> : null}

    <main className="page-content">
      <section id="hero" className="hero-section reveal is-visible"><div className="hero-inner"><div className="eyebrow"><span />DIAGNOSTIC GRATUIT · RÉPONSE SOUS 72 H</div><div className="hero-heading-wrap"><h1>Vos devis, factures et suivis<br className="desktop-break" /> prêts en <em><span className="underline-words">quelques minutes<svg viewBox="0 0 200 14" aria-hidden="true"><path d="M2 9 C 30 2, 60 13, 100 7 S 170 3, 198 8" /></svg></span></em>,<br className="desktop-break" /> sans erreurs.</h1><FloatingThumbnails /></div><div className="hero-bottom"><p className="hero-subtitle">Nous digitalisons vos processus et automatisons vos tâches répétitives grâce à l'IA. Une solution sur mesure, en service en 7 à 21 jours, à partir de 35 $/mois.</p><div className="hero-actions"><span className="hand-note">Commencez ici<svg viewBox="0 0 70 46" aria-hidden="true"><path d="M2 8c23 4 38 12 42 28M34 30l10 7 1-13" /></svg></span><ButtonLink href={whatsappUrl}>Demander mon diagnostic gratuit</ButtonLink><a className="button button-secondary button-large" href="#realisations">Voir nos réalisations</a></div></div><div className="hero-mobile-thumbnails">{projects.map((project) => availableProjectImage(project.name) ? <img key={project.name} src={availableProjectImage(project.name) as string} alt="" /> : null)}</div><div className="trust-row"><span><CheckIcon />Diagnostic gratuit</span><span><CheckIcon />Paiement sécurisé : Mobile Money, virement, carte</span><span><CheckIcon />Corrigé ou remboursé</span></div></div></section>

      <ProjectCarousel />

      <section id="offre" className="section reveal"><div className="container"><SectionTitle>Trois façons de digitaliser. <em>Un choix évident.</em></SectionTitle><div className="ways-grid stagger-children">{ways.map((way) => <article className={`way-card ${way.highlighted ? "way-card-highlighted" : ""}`} key={way.label}>{way.highlighted ? <div className="choice-badge">Meilleur choix</div> : null}<p className="card-label">{way.label}</p><h3>{way.title}</h3><p className="card-subtitle">{way.subtitle}</p><div className="card-divider" /><ul className="feature-list">{way.features.map((feature) => <li key={feature}><span className={way.highlighted ? "feature-check" : "feature-cross"}>{way.highlighted ? <CheckIcon /> : <CrossIcon />}</span>{feature}</li>)}</ul>{way.highlighted ? <ButtonLink href={whatsappUrl} size="small" inverted className="card-button">Demander mon diagnostic</ButtonLink> : null}<div className="reassurance"><span>Tranquillité d'esprit</span><strong>{way.reassurance}</strong></div></article>)}</div></div></section>

      <section className="panel panel-peach reveal"><div className="container problem-layout"><div className="problem-intro"><SectionTitle>Votre entreprise perd du temps <em>chaque jour.</em></SectionTitle><p>Les dirigeants voient l'intérêt du numérique et de l'IA, mais personne ne les accompagne pour s'y mettre. <strong>Nous sommes cet accompagnement.</strong></p></div><div className="problem-grid stagger-children">{problems.map((problem) => <article className="problem-card" key={problem.number}><span className="eyebrow-number">{problem.number}</span><h3>{problem.title}</h3><p>{problem.text}</p></article>)}</div></div></section>

      <section className="panel panel-mint reveal"><div className="container"><div className="left-header"><SectionTitle>Une solution complète, <em>pas juste un logiciel.</em></SectionTitle><p className="section-subtitle">Analyse, mise en place, formation et suivi : tout est livré ensemble.</p></div><div className="benefits-grid stagger-children">{benefits.map((benefit) => <article className="benefit-card" key={benefit.number}><div className="illustration-space" aria-hidden="true" /><h3>{benefit.title}</h3><p>{benefit.text}</p></article>)}</div></div></section>

      <section id="tarifs" className="section reveal"><div className="container"><SectionTitle>Pas de gros investissement. <em>Un abonnement simple.</em></SectionTitle><p className="section-subtitle">Payez par Mobile Money, virement ou carte. Engagement minimum de 3 mois.</p><div className="pricing-grid stagger-children">{pricing.map((plan) => <article className={`pricing-card ${plan.highlighted ? "pricing-card-highlighted" : ""}`} key={plan.name}>{plan.highlighted ? <span className="popular-badge">Le plus choisi</span> : null}<h3>{plan.name}</h3><div className="price-row"><strong>{plan.price}</strong>{plan.price !== "Gratuit" ? <span>/mois</span> : null}</div><p className="plan-description">{plan.description}</p><ButtonLink href={plan.href} variant={plan.highlighted ? "primary" : "secondary"} size="small" inverted={plan.highlighted}>{plan.button}</ButtonLink><div className="card-divider" /><ul className="feature-list pricing-features">{plan.features.map((feature) => <li key={feature}><span className="feature-check"><CheckIcon /></span>{feature}</li>)}</ul></article>)}</div><div className="quote-block"><p>Besoin d'un site web, d'une application mobile ou d'un SaaS sur mesure ?</p><ButtonLink href={whatsappMessages.quote} variant="secondary" size="small">Demander un devis</ButtonLink></div><div className="payment-row"><div><span>Mobile Money</span><span>Virement</span><span>Visa</span><span>Mastercard</span></div><small>Prix en dollars US, par mois.</small></div></div></section>

      <section className="panel panel-sky reveal"><div className="container guarantee-layout"><div className="guarantee-copy"><SectionTitle>Satisfait, ou on corrige. <em>Toujours pas ? On vous rembourse.</em></SectionTitle><p>Si la solution livrée ne correspond pas à ce qui a été convenu dans la proposition, nous la corrigeons sans frais. Si elle ne fonctionne toujours pas, nous vous remboursons.</p><ButtonLink href={whatsappUrl}>Demander mon diagnostic gratuit</ButtonLink><small>Conditions détaillées dans la proposition remise après le diagnostic.</small></div><div className="illustration-space guarantee-illustration" aria-hidden="true" /></div></section>

      <section id="processus" className="panel panel-process reveal"><div className="container"><SectionTitle>Un processus simple, <em>en quatre étapes.</em></SectionTitle><div className="process-grid stagger-children">{processSteps.map((step, index) => <article className={`process-step process-step-${index + 1}`} key={step.number}><div className="step-circle">{step.number}</div><h3>{step.title}</h3><p>{step.text}</p><span className="time-pill">{step.time}</span></article>)}</div><div className="centered-action"><ButtonLink href={whatsappUrl}>Demander mon diagnostic gratuit</ButtonLink></div></div></section>

      <section className="panel panel-sand reveal"><div className="container pilot-layout"><div className="pilot-copy"><SectionTitle>Nous cherchons nos <em>3 premières entreprises pilotes.</em></SectionTitle><p>Diagnostic et mise en place à tarif préférentiel, en échange de votre retour d'expérience honnête.</p><ButtonLink href={whatsappMessages.pilot}>Devenir entreprise pilote</ButtonLink></div><div className="pilot-slots">{testimonials.length > 0 ? testimonials.map((testimonial) => <article className="testimonial-card" key={testimonial.name}><div className="testimonial-heading"><img src={testimonial.photo} alt={testimonial.name} /><div><strong>{testimonial.name}</strong><small>{testimonial.company}</small></div></div><p>{testimonial.text}</p><small>{testimonial.date}</small></article>) : ["1", "2", "3"].map((number) => <div className="pilot-slot" key={number}><span>Place pilote {number}</span><strong>Disponible</strong></div>)}</div></div></section>

      <section className="panel panel-neutral reveal"><div className="container founder-layout"><div className="founder-copy"><SectionTitle>Derrière Nordev, <em>une équipe qui vous connaît.</em></SectionTitle><p>Nous sommes une agence qui construit des outils numériques pour les entreprises africaines. Notre conviction : la technologie est devenue indispensable, elle doit être accessible à tous.</p><div className="signature"><strong>Freddy Mbuya</strong><span>Co-fondateur, Nordev Agency</span></div></div></div></section>

      <section id="faq" className="section faq-section reveal"><div className="container faq-layout"><div className="faq-intro"><SectionTitle>Questions, <em>réponses.</em></SectionTitle><p>Une autre question ? Écrivez-nous sur WhatsApp.</p><ButtonLink href={whatsappUrl} variant="secondary" size="small">Écrire sur WhatsApp</ButtonLink></div><div className="faq-list">{faqItems.map((item, index) => { const isOpen = openFaq === index; return <article className={`faq-item ${isOpen ? "is-open" : ""}`} key={item.question}><button type="button" onClick={() => setOpenFaq(isOpen ? -1 : index)} aria-expanded={isOpen}><span>{item.question}</span><i><PlusIcon /></i></button><div className="faq-answer"><p>{item.answer}</p></div></article>; })}</div></div></section>

      <section className="panel panel-forest reveal"><div className="final-thumbnails">{projects.map((project) => availableProjectImage(project.name) ? <img key={project.name} src={availableProjectImage(project.name) as string} alt="" /> : null)}</div><SectionTitle>Prêt à gagner du temps <em>dès cette semaine ?</em></SectionTitle><ButtonLink href={whatsappUrl} inverted>Demander mon diagnostic gratuit</ButtonLink><small>Diagnostic gratuit · Réponse sous 72 h · Sans engagement</small></section>
    </main>

    <footer className="site-footer"><div className="container"><div className="footer-grid"><div className="footer-brand"><Logo /><p>Nous digitalisons vos processus et automatisons vos tâches répétitives grâce à l'IA.</p></div><div><h3>Explorer</h3><nav>{navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}</nav></div><div><h3>Contact</h3><nav><a href="mailto:nordevagency@gmail.com">nordevagency@gmail.com</a><a href={whatsappBaseUrl} target="_blank" rel="noopener noreferrer">+243 991 040 032</a></nav></div><div><h3>Suivez-nous</h3><a href="https://instagram.com/nordevagency" target="_blank" rel="noopener noreferrer">Instagram @nordevagency</a></div></div><div className="footer-bottom"><span>© 2026 Nordev Agency. Tous droits réservés.</span><div><button type="button" onClick={() => setLegalModal("Mentions légales")}>Mentions légales</button><button type="button" onClick={() => setLegalModal("Confidentialité")}>Confidentialité</button></div></div></div></footer>

    <a className="floating-whatsapp" href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Ouvrir WhatsApp"><WhatsappIcon /><span /></a><div className="mobile-bottom-bar"><ButtonLink href={whatsappUrl} size="small">Diagnostic gratuit</ButtonLink></div>

    {legalModal ? <div className="modal-backdrop" role="presentation" onClick={() => setLegalModal(null)}><div className="legal-modal" role="dialog" aria-modal="true" aria-label={legalModal} onClick={(event) => event.stopPropagation()}><button type="button" onClick={() => setLegalModal(null)} aria-label="Fermer">×</button><h2>{legalModal}</h2><p>[À REMPLIR]</p></div></div> : null}
  </div>;
}
