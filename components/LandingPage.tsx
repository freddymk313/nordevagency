"use client";

import { useEffect, useState, type ReactNode } from "react";
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
  whatsappMessages,
  whatsappUrl,
} from "@/content";

type ButtonLinkProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary";
  size?: "large" | "small";
  className?: string;
};

type IconProps = { className?: string };

function ArrowIcon({ className }: IconProps) {
  return <svg className={className} viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h13M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" /></svg>;
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

function MenuIcon({ open }: { open: boolean }) {
  return <svg className="menu-icon" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8"><path d={open ? "M6 6l12 12M18 6 6 18" : "M4 7h16M4 12h16M4 17h16"} strokeLinecap="round" /></svg>;
}

function WhatsappIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.75"><path d="M20.4 11.5a8.2 8.2 0 0 1-12.1 7.2L3.5 20l1.3-4.6A8.2 8.2 0 1 1 20.4 11.5Z" strokeLinecap="round" strokeLinejoin="round" /><path d="M8.4 8.1c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.6 1.4c.1.2.1.4 0 .6l-.5.7c-.1.2-.1.3 0 .5.5.9 1.2 1.6 2.1 2.1.2.1.4.1.5-.1l.7-.8c.2-.2.4-.2.7-.1l1.4.7c.2.1.3.3.3.5 0 .5-.2 1-.6 1.3-.4.3-1 .4-1.5.2-1.2-.4-2.4-1.1-3.4-2-1-.9-1.8-2-2.3-3.2-.2-.5-.2-1.1.1-1.8Z" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function ButtonLink({ children, href, variant = "primary", size = "large", className = "" }: ButtonLinkProps) {
  return <a className={`button button-${variant} button-${size} ${className}`} href={href} target="_blank" rel="noopener noreferrer">{children}{variant === "primary" && size === "large" ? <span className="button-arrow"><ArrowIcon /></span> : null}</a>;
}

function SectionTitle({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <h2 className={`section-title ${className}`}>{children}</h2>;
}

function Logo() {
  return <a href="#hero" className="brand" aria-label="Nordev Agency"><img src="/logo/logo-2.jpg" alt="Nordev Agency" /></a>;
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

  return (
    <div className="site-shell">
      <div className="guide-line guide-line-left" aria-hidden="true" />
      <div className="guide-line guide-line-right" aria-hidden="true" />

      <div className="announcement-bar">
        <div className="announcement-item"><span className="green-dot" />Diagnostic gratuit</div>
        <span className="announcement-separator">·</span>
        <div className="announcement-item">Réponse sous 72 h</div>
        <span className="announcement-separator announcement-third">·</span>
        <div className="announcement-item announcement-third">Paiement par Mobile Money, virement ou carte</div>
      </div>

      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <div className="container nav-inner">
          <Logo />
          <nav className="desktop-nav" aria-label="Navigation principale">
            {navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
          </nav>
          <div className="nav-actions">
            <ButtonLink href={whatsappUrl} size="small">Diagnostic gratuit</ButtonLink>
            <button className="menu-button" type="button" onClick={() => setMobileMenuOpen((open) => !open)} aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"} aria-expanded={mobileMenuOpen}><MenuIcon open={mobileMenuOpen} /></button>
          </div>
        </div>
      </header>

      {mobileMenuOpen ? <div className="mobile-menu">
        <div className="mobile-menu-inner">
          {navigation.map((item) => <a key={item.href} href={item.href} onClick={closeMobileMenu}>{item.label}</a>)}
          <ButtonLink href={whatsappUrl} className="mobile-menu-cta">Demander mon diagnostic gratuit</ButtonLink>
        </div>
      </div> : null}

      <main className="page-content">
        <section id="hero" className="hero-section">
          <div className="hero-glow hero-glow-a" aria-hidden="true" />
          <div className="hero-glow hero-glow-b" aria-hidden="true" />
          <div className="hero-glow hero-glow-c" aria-hidden="true" />
          <div className="container hero-content">
            <div className="hero-pill reveal is-visible"><span className="green-dot" />Diagnostic gratuit · Réponse sous 72 h</div>
            <h1 className="hero-title reveal is-visible">Vos devis, factures et suivis<br className="desktop-break" /> prêts en <span>quelques minutes</span>,<br className="desktop-break" /> sans erreurs.</h1>
            <p className="hero-subtitle reveal is-visible">Nous digitalisons vos processus et automatisons vos tâches répétitives grâce à l'IA. Une solution sur mesure, en service en 7 à 21 jours, à partir de 35 $/mois.</p>
            <div className="hero-actions reveal is-visible">
              <ButtonLink href={whatsappUrl}>Demander mon diagnostic gratuit</ButtonLink>
              <a className="button button-secondary button-large" href="#realisations">Voir nos réalisations</a>
            </div>
            <div className="trust-row reveal is-visible">
              <span><CheckIcon />Diagnostic gratuit</span>
              <span><CheckIcon />Paiement sécurisé : Mobile Money, virement, carte</span>
              <span><CheckIcon />Corrigé ou remboursé</span>
            </div>
            <div className="visual-strip reveal is-visible">
              <div className="visual-card"><img loading="lazy" src="/portfolio/kazi-up.png" alt="Projet KaziUp" /><div className="delivery-pill"><span className="delivery-icon"><CheckIcon /></span><span><strong>Diagnostic livré</strong><small>sous 72 heures</small></span></div></div>
              <div className="visual-card"><img loading="lazy" src="/portfolio/funda-online.png" alt="Projet Funda Online" /></div>
              <div className="visual-card"><img loading="lazy" src="/portfolio/unco.png" alt="Projet Unco Chi" /></div>
            </div>
          </div>
        </section>

        <section className="logo-strip reveal">
          <div className="container"><p>Projets réalisés par Nordev</p><div className="logo-row"><span>Funda Online</span><span>KaziUp</span><span>Unco Chi</span></div></div>
        </section>

        <section id="offre" className="section section-ways reveal">
          <div className="container">
            <SectionTitle>Trois façons de digitaliser. <em>Un choix évident.</em></SectionTitle>
            <div className="ways-grid stagger-children">
              {ways.map((way) => <article className={`way-card ${way.highlighted ? "way-card-highlighted" : ""}`} key={way.label}>
                {way.highlighted ? <div className="choice-badge">Meilleur choix</div> : null}
                <div><p className="card-label">{way.label}</p><h3>{way.title}</h3><p className="card-subtitle">{way.subtitle}</p></div>
                <div className="card-divider" />
                <ul className="feature-list">{way.features.map((feature) => <li key={feature}><span className={way.highlighted ? "feature-check" : "feature-cross"}>{way.highlighted ? <CheckIcon /> : <CrossIcon />}</span>{feature}</li>)}</ul>
                {way.highlighted ? <ButtonLink href={whatsappUrl} size="small" className="card-button">Demander mon diagnostic</ButtonLink> : null}
                <div className="reassurance"><span>Tranquillité d'esprit</span><strong className={way.highlighted ? "reassurance-strong" : ""}>{way.reassurance}</strong></div>
              </article>)}
            </div>
          </div>
        </section>

        <section className="section section-problem reveal">
          <div className="container problem-layout">
            <div className="problem-intro"><SectionTitle>Votre entreprise perd du temps <em>chaque jour.</em></SectionTitle><p>Les dirigeants voient l'intérêt du numérique et de l'IA, mais personne ne les accompagne pour s'y mettre. <strong>Nous sommes cet accompagnement.</strong></p></div>
            <div className="problem-grid stagger-children">{problems.map((problem) => <article className="problem-card" key={problem.number}><span className="eyebrow-number">{problem.number}</span><h3>{problem.title}</h3><p>{problem.text}</p></article>)}</div>
          </div>
        </section>

        <section className="section reveal">
          <div className="container"><SectionTitle>Une solution complète, <em>pas juste un logiciel.</em></SectionTitle><p className="section-subtitle">Analyse, mise en place, formation et suivi : tout est livré ensemble.</p><div className="benefits-grid stagger-children">{benefits.map((benefit) => <article className="benefit-card" key={benefit.number}><span className="number-badge">{benefit.number}</span><h3>{benefit.title}</h3><p>{benefit.text}</p></article>)}</div></div>
        </section>

        <section id="tarifs" className="section reveal">
          <div className="container"><SectionTitle>Pas de gros investissement. <em>Un abonnement simple.</em></SectionTitle><p className="section-subtitle">Payez par Mobile Money, virement ou carte. Engagement minimum de 3 mois.</p><div className="pricing-grid stagger-children">{pricing.map((plan) => <article className={`pricing-card ${plan.highlighted ? "pricing-card-highlighted" : ""}`} key={plan.name}>{plan.highlighted ? <span className="popular-badge">Le plus choisi</span> : null}<h3>{plan.name}</h3><div className="price-row"><strong>{plan.price}</strong>{plan.price !== "Gratuit" ? <span>/mois</span> : null}</div><p className="plan-description">{plan.description}</p><ButtonLink href={plan.href} variant={plan.highlighted ? "primary" : "secondary"} size="small">{plan.button}</ButtonLink><div className="card-divider" /><ul className="feature-list pricing-features">{plan.features.map((feature) => <li key={feature}><span className="feature-check"><CheckIcon /></span>{feature}</li>)}</ul></article>)}</div><div className="quote-block"><p>Besoin d'un site web, d'une application mobile ou d'un SaaS sur mesure ?</p><ButtonLink href={whatsappMessages.quote} variant="secondary" size="small">Demander un devis</ButtonLink></div><div className="payment-row"><div><span>Mobile Money</span><span>Virement</span><span>Visa</span><span>Mastercard</span></div><small>Prix en dollars US, par mois.</small></div></div>
        </section>

        <section className="section guarantee-section reveal"><div className="container"><div className="guarantee-panel"><div className="guarantee-glow" aria-hidden="true" /><SectionTitle>Satisfait, ou on corrige. <em>Toujours pas ? On vous rembourse.</em></SectionTitle><p>Si la solution livrée ne correspond pas à ce qui a été convenu dans la proposition, nous la corrigeons sans frais. Si elle ne fonctionne toujours pas, nous vous remboursons.</p><ButtonLink href={whatsappUrl}>Demander mon diagnostic gratuit</ButtonLink><small>Conditions détaillées dans la proposition remise après le diagnostic.</small></div></div></section>

        <section id="processus" className="section reveal">
          <div className="container"><SectionTitle>Un processus simple, <em>en quatre étapes.</em></SectionTitle><div className="process-grid">{processSteps.map((step) => <article className="process-step" key={step.number}><div className="step-circle">{step.number}</div><h3>{step.title}</h3><p>{step.text}</p><span className="time-pill">{step.time}</span></article>)}</div><div className="centered-action"><ButtonLink href={whatsappUrl}>Demander mon diagnostic gratuit</ButtonLink></div></div>
        </section>

        <section id="realisations" className="section reveal"><div className="container"><SectionTitle>Des projets réels, <em>en ligne aujourd'hui.</em></SectionTitle><div className="projects-grid">{projects.map((project) => <article className="project-card" key={project.name}><img loading="lazy" src={project.image} alt={`Projet ${project.name}`} /><div className="project-info"><span>Développement web</span><h3>{project.name}</h3><a href={project.href} target="_blank" rel="noopener noreferrer">Voir le site ↗</a></div></article>)}<article className="project-placeholder"><h3>Votre entreprise pourrait être la prochaine.</h3><ButtonLink href={whatsappUrl} variant="secondary" size="small">Parlons de votre projet</ButtonLink></article></div></div></section>

        <section className="section pilot-section reveal"><div className="container"><div className="pilot-panel"><div className="pilot-copy"><SectionTitle>Nous cherchons nos <em>3 premières entreprises pilotes.</em></SectionTitle><p>Diagnostic et mise en place à tarif préférentiel, en échange de votre retour d'expérience honnête.</p><ButtonLink href={whatsappMessages.pilot}>Devenir entreprise pilote</ButtonLink></div><div className="pilot-slots">{testimonials.length > 0 ? testimonials.map((testimonial) => <article className="testimonial-card" key={testimonial.name}><div className="testimonial-heading"><img src={testimonial.photo} alt={testimonial.name} /><div><strong>{testimonial.name}</strong><small>{testimonial.company}</small></div></div><p>{testimonial.text}</p><small>{testimonial.date}</small></article>) : ["1", "2", "3"].map((number) => <div className="pilot-slot" key={number}><span>Place pilote {number}</span><strong>Disponible</strong></div>)}</div></div></div></section>

        <section className="section founder-section reveal"><div className="container founder-layout"><div className="founder-photo"><img loading="lazy" src="/_MG_5601.JPG" alt="Freddy Mbuya, co-fondateur de Nordev Agency" /></div><div className="founder-copy"><SectionTitle>Derrière Nordev, <em>une équipe qui vous connaît.</em></SectionTitle><p>Nous sommes une agence qui construit des outils numériques pour les entreprises africaines. Notre conviction : la technologie est devenue indispensable, elle doit être accessible à tous.</p><div className="signature"><strong>Freddy Mbuya</strong><span>Co-fondateur, Nordev Agency</span></div></div></div></section>

        <section id="faq" className="section faq-section reveal"><div className="container faq-layout"><div className="faq-intro"><SectionTitle>Questions, <em>réponses.</em></SectionTitle><p>Une autre question ? Écrivez-nous sur WhatsApp.</p><ButtonLink href={whatsappUrl} variant="secondary" size="small">Écrire sur WhatsApp</ButtonLink></div><div className="faq-list">{faqItems.map((item, index) => { const isOpen = openFaq === index; return <article className={`faq-item ${isOpen ? "is-open" : ""}`} key={item.question}><button type="button" onClick={() => setOpenFaq(isOpen ? -1 : index)} aria-expanded={isOpen}><span>{item.question}</span><PlusIcon /></button><div className="faq-answer"><p>{item.answer}</p></div></article>; })}</div></div></section>

        <section className="section final-cta-section reveal"><div className="container"><div className="final-cta"><div className="final-cta-glow" aria-hidden="true" /><SectionTitle>Prêt à gagner du temps <em>dès cette semaine ?</em></SectionTitle><ButtonLink href={whatsappUrl}>Demander mon diagnostic gratuit</ButtonLink><small>Diagnostic gratuit · Réponse sous 72 h · Sans engagement</small></div></div></section>
      </main>

      <footer className="site-footer"><div className="container"><div className="footer-grid"><div className="footer-brand"><Logo /><p>Nous digitalisons vos processus et automatisons vos tâches répétitives grâce à l'IA.</p></div><div><h3>Explorer</h3><nav>{navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}</nav></div><div><h3>Contact</h3><nav><a href="mailto:nordevagency@gmail.com">nordevagency@gmail.com</a><a href={whatsappBaseForFooter} target="_blank" rel="noopener noreferrer">+243 991 040 032</a></nav></div><div><h3>Suivez-nous</h3><a href="https://instagram.com/nordevagency" target="_blank" rel="noopener noreferrer">Instagram @nordevagency</a></div></div><div className="footer-bottom"><span>© 2026 Nordev Agency. Tous droits réservés.</span><div><button type="button" onClick={() => setLegalModal("Mentions légales")}>Mentions légales</button><button type="button" onClick={() => setLegalModal("Confidentialité")}>Confidentialité</button></div></div></div></footer>

      <a className="floating-whatsapp" href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Ouvrir WhatsApp"><WhatsappIcon /><span /></a>
      <div className="mobile-bottom-bar"><ButtonLink href={whatsappUrl} size="small">Diagnostic gratuit</ButtonLink></div>

      {legalModal ? <div className="modal-backdrop" role="presentation" onClick={() => setLegalModal(null)}><div className="legal-modal" role="dialog" aria-modal="true" aria-label={legalModal} onClick={(event) => event.stopPropagation()}><button type="button" onClick={() => setLegalModal(null)} aria-label="Fermer">×</button><h2>{legalModal}</h2><p>[À REMPLIR]</p></div></div> : null}
    </div>
  );
}

const whatsappBaseForFooter = "https://wa.me/243991040032";
