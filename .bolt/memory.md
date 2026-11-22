# Project memory

## Product intent & audience

- Nordev Agency landing page (single-page) targeting African businesses needing digitalization and automation.
- French-language site (all copy in French).
- Core offer: diagnostic free under 72h, solutions from $35–$100/month, custom web/mobile/SaaS on quote.
- Emphasis on honesty: no fake testimonials; pilot-program section instead.

## Brand personality & voice

- Trustworthy, direct, locally-aware African agency tone.
- Calls to action in French: "Demander mon diagnostic gratuit", "Devenir entreprise pilote", "Parlons de votre projet".
- Transparent pricing and guarantees; no fabricated social proof.

## Visual design & UX direction

- Next.js framework; Framer Motion and Lucide icons already present.
- Design tokens: `--ink`, `--ink-2`, `--muted`, `--accent` (#00703A), `--accent-soft` (#BDF2D5), `--line`, `--bg` (#F7F7F5).
- Typography: heading sizes up to 64px; body 15–18px; weight 500 common for headings/buttons.
- Layout: multi-section single page; 12-col grid; sections stacked on mobile; desktop ≥1280, tablet 768–1279, mobile <768.
- Panels: white background, 1px border, 32px radius.
- Buttons: PRIMARY and SECONDARY variants in S and L sizes; full-width on mobile; min touch target 44px.
- FAQ: accordion, first item open by default, single-open behavior, plus icon rotates 45°.
- Fixed elements: floating WhatsApp button (desktop only, bottom-right, green dot), mobile sticky bottom bar with PRIMARY CTA.
- Modals for legal mentions ("Mentions légales", "Confidentialité") with placeholder text.
- SEO: one h1, semantic sections with ids, French alt text, OG tags, theme-color #F7F7F5.
- Responsive: no horizontal scroll at 360px; section padding 72px 20px mobile.

## Decisions, constraints & rationale

- Content centralized in a single `content.ts` file.
- `testimonials` array empty by default; renders pilot slots when empty, cards when populated. No testimonials fabricated.
- WhatsApp links use a WHATSAPP_URL constant.
- Asset fallbacks used where brief assets absent:
  - `logo-black.png` → `logo-2.jpg`
  - `unco-chi.png` → `unco.png`
  - `founder.jpg` → `_MG_5601.JPG`
  - `kaziup.png` → `kazi-up.png`
  - Missing project logos → project name text fallback.
- Compilation verified green; no stock photos added.
- No visual browser verification performed in environment.

## Open questions & assumptions

- Correct paths for replaced assets assumed available in `/public`.
- WHATSAPP_URL assumed defined in content.ts or config.
- Exact visual fidelity at all breakpoints not browser-verified.
- Legal modal content remains placeholder ("[À REMPLIL]") awaiting real text.
- Founder photo filename (`_MG_5601.JPG`) may need renaming to `founder.jpg` for clarity.