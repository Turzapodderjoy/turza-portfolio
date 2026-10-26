# Pattern Synthesis — 199 top-ranked personal portfolio sites

**Sources:** `awards.md` (80 award/gallery sites), `roundups.md` (62 curated listicle sites), `professional.md` (57 non-designer professional sites + 10 live spot-checks). Synthesized from the pattern sections of all three files, 25 Oct 2026.

## What the high-ranked sites do (with frequency)

1. **Résumé-led single page with anchor nav** — sticky nav (name left, 3–5 links right), one scroll: Hero → About → Experience → Work → Contact. Multi-page only appears when selling services. *(dominant across all three sets)*
2. **Name-as-domain, job-title-as-headline; niche in sentence one.** Recruiters get role + domain in under a second. Domain specificity ("healthcare RCM/denials") is the cheapest credibility signal. *(awards #1, professional #4, spot-checks)*
3. **Proof-first above the fold** — metrics strip, availability line, or logo row in screen one. Quantified proof replaces adjectives everywhere: `+50%`, `63%→92%`, `$2M+`. *(awards #3, roundups #2, professional #2)*
4. **Restraint reads as seniority** — text-first hero, no stock photos, one accent colour, generous whitespace, no heavy WebGL for non-creative roles. Motion reserved for people whose craft is motion. *(roundups #6, awards #2)*
5. **Skills chips → tagged project cards → Business Impact line** — a scannable skills→evidence chain in seconds. *(professional #4, roundups #3)*
6. **Case studies: context → constraint → measurable outcome, result stated first**, screenshots as supporting evidence. *(roundups #4, awards #3)*
7. **Exactly one primary CTA, recruiter-shaped** — résumé PDF + email/LinkedIn; never two competing CTAs. *(professional #3)*
8. **Structured/printed CV as first-class** — printable route/section, dated timeline, not a PDF afterthought. *(awards #4)*
9. **Fewer projects, opinionated captions** — 6–10 curated items with client/role/outcome, never a 40-tile grid. *(roundups #3)*
10. **One controlled human detail** — an open-to-work badge, a "currently" block, one personality accent. *(professional #6)*
11. **Availability/contact treated as a feature** — explicit next step in nav or hero. *(roundups #5)*
12. **The site itself is a work sample** — fast, no-JS-required content, clean meta/OG tags. *(roundups #7, #6)*

## Anti-patterns (avoid for an operations/analyst persona)

- Heavy WebGL/scroll theatrics, gimmick-first layouts (those signal creative-developer roles)
- Uniform thumbnail grids of dozens of items
- Skill-percentage bars and cluttered dashboards (reads junior)
- Two competing CTAs or a contact form as the only path

## Design decisions adopted for this site (the build spec)

- **Single-page** site, sticky anchor nav, name left / links + CV button right
- **Hero:** neutral factual status line (no invented "open to work" claim), H1 = job title, niche in the subline, two CTAs max (Download CV, Email)
- **Metrics strip** directly under hero: $2M+ · 23 accounts · 63%→92% FPR · 2,000+ issues · $16K/16 days
- **Experience** in dated reverse-chronological blocks, quantified bullets
- **Work:** 4 project cards (stack tags + impact line) + 1 restrained Wildcrafted case-study card linking the PDF
- **Skills** as chips split hard/soft; **Education, certs, leadership** compact
- **Contact** with direct email/phone/LinkedIn; résumé PDF shipped in `assets/` and linked from nav, hero, contact, plus a print stylesheet
- **Design language:** warm-paper light background, ink text, one deep-teal accent, serif display + sans body, generous whitespace, mobile-first, SEO/OG/JSON-LD, favicon, zero framework
