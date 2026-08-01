const styles = String.raw`/* ============================================================
   Catera's Creation — Sample Website
   Design tokens: deep plum + emerald, warm parchment, brass hairline.
   Display: Fraunces / Body: Work Sans / Labels: Space Mono
   ============================================================ */

@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,700;9..144,900&family=Work+Sans:wght@400;500;600;700&family=Space+Mono:wght@400;700&display=swap');

:root {
  --plum-950: #211228;
  --plum-800: #34203f;
  --plum-600: #5a3470;
  --plum-400: #8a63a3;
  --emerald-600: #2e7d54;
  --emerald-500: #389663;
  --emerald-300: #7fc9a4;
  --brass-400: #c69a44;
  --brass-300: #dab668;
  --parchment-50: #f4ecd9;
  --parchment-100: #efe3cb;
  --ink-900: #201526;
  --ink-600: #55475d;
  --paper-0: #fbf7ee;

  --font-display: 'Fraunces', serif;
  --font-body: 'Work Sans', sans-serif;
  --font-mono: 'Space Mono', monospace;

  --maxw: 1180px;
  --gap: clamp(1.25rem, 2.5vw, 2.5rem);
  --radius: 2px;

  --ease: cubic-bezier(.65,0,.35,1);
}

*, *::before, *::after { box-sizing: border-box; }
html { scroll-behavior: smooth; }
@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  *, *::before, *::after { animation-duration: 0.001ms !important; animation-iteration-count: 1 !important; transition-duration: 0.001ms !important; }
}
body {
  margin: 0;
  background: var(--paper-0);
  color: var(--ink-900);
  font-family: var(--font-body);
  font-size: 16px;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}
img { max-width: 100%; display: block; }
a { color: inherit; text-decoration: none; }
ul { margin: 0; padding: 0; list-style: none; }
button { font: inherit; cursor: pointer; }
input, select, textarea { font: inherit; }
h1, h2, h3, h4 { font-family: var(--font-display); font-weight: 700; line-height: 1.08; margin: 0; color: var(--plum-950); }
p { margin: 0; }
:focus-visible { outline: 2px solid var(--brass-400); outline-offset: 3px; }

.container { max-width: var(--maxw); margin: 0 auto; padding: 0 clamp(1.25rem, 4vw, 3rem); }

.eyebrow {
  font-family: var(--font-mono); font-size: .74rem; letter-spacing: .16em; text-transform: uppercase;
  color: var(--emerald-600); display: inline-flex; align-items: center; gap: .5em;
}
.eyebrow::before { content: ''; width: 1.4em; height: 1px; background: var(--brass-400); display: inline-block; }
.on-dark .eyebrow { color: var(--emerald-300); }
.on-dark .eyebrow::before { background: var(--brass-300); }

section { padding: clamp(3.5rem, 8vw, 6.5rem) 0; }
.section-tight { padding: clamp(2.25rem, 5vw, 3.5rem) 0; }

/* ---------- texture ---------- */
.on-dark {
  background-color: var(--plum-950);
  color: var(--paper-0);
  position: relative;
}
.on-dark h1, .on-dark h2, .on-dark h3, .on-dark h4 { color: var(--paper-0); }
.texture-veil {
  position: absolute; inset: 0; pointer-events: none; opacity: .05; mix-blend-mode: overlay;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>");
}

/* ---------- brush stroke signature ---------- */
.brush {
  display: block;
  width: 100%;
  height: auto;
  overflow: visible;
}
.brush path {
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 420;
  stroke-dashoffset: 420;
  transition: stroke-dashoffset 1.2s var(--ease);
}
.in-view .brush path { stroke-dashoffset: 0; }

.brush-underline { width: 7.5em; height: .6em; margin-top: .15em; }
.brush-underline path { stroke: var(--brass-400); stroke-width: 9; }
.on-dark .brush-underline path { stroke: var(--emerald-300); }

.brush-divider { max-width: 220px; height: 28px; margin: 0 auto; }
.brush-divider path { stroke: var(--emerald-500); stroke-width: 6; }

/* ---------- reveal on scroll ---------- */
.reveal { opacity: 0; transform: translateY(18px); transition: opacity .7s var(--ease), transform .7s var(--ease); }
.reveal.in-view { opacity: 1; transform: none; }

/* ---------- buttons ---------- */
.btn {
  display: inline-flex; align-items: center; justify-content: center; gap: .5em;
  font-family: var(--font-mono); font-size: .82rem; letter-spacing: .06em; text-transform: uppercase;
  padding: .95em 1.7em; border-radius: var(--radius); border: 1px solid transparent;
  transition: transform .25s var(--ease), background-color .25s var(--ease), color .25s var(--ease), border-color .25s var(--ease);
  white-space: nowrap;
}
.btn:hover { transform: translateY(-2px); }
.btn-primary { background: var(--emerald-600); color: var(--paper-0); }
.btn-primary:hover { background: var(--emerald-500); }
.btn-outline { border-color: currentColor; color: var(--paper-0); }
.btn-outline:hover { background: rgba(251,247,238,.1); }
.btn-outline.dark { color: var(--plum-950); }
.btn-outline.dark:hover { background: rgba(33,18,40,.06); }
.btn-cta { background: var(--brass-400); color: var(--plum-950); }
.btn-cta:hover { background: var(--brass-300); }
.btn-ghost { color: var(--plum-600); border-bottom: 1px solid var(--brass-400); border-radius: 0; padding: .2em 0; }
.btn-block { width: 100%; }
.btn[disabled] { opacity: .55; cursor: not-allowed; transform: none; }

/* ---------- header ---------- */
.site-header {
  position: sticky; top: 0; z-index: 40;
  background: rgba(33,18,40,0);
  transition: background-color .35s var(--ease), box-shadow .35s var(--ease);
}
.site-header.solid { background: var(--plum-950); box-shadow: 0 6px 24px rgba(0,0,0,.18); }
.header-inner {
  max-width: var(--maxw); margin: 0 auto; padding: 1.1rem clamp(1.25rem, 4vw, 3rem);
  display: flex; align-items: center; gap: 1.5rem;
}
.wordmark { font-family: var(--font-display); font-weight: 700; font-size: 1.3rem; color: var(--paper-0); letter-spacing: .01em; }
.wordmark-accent { color: var(--brass-300); font-style: italic; }
.wordmark.small { font-size: 1.05rem; }
.site-nav { display: flex; gap: 1.9rem; margin-left: auto; font-size: .93rem; }
.site-nav a { color: rgba(251,247,238,.82); padding: .3rem 0; border-bottom: 1px solid transparent; transition: color .2s, border-color .2s; }
.site-nav a:hover, .site-nav a[aria-current="page"] { color: var(--paper-0); border-color: var(--brass-400); }
.nav-cta { margin-left: .5rem; }
.nav-toggle {
  display: none; margin-left: auto; background: none; border: none; width: 34px; height: 26px;
  position: relative; padding: 0;
}
.nav-toggle span {
  position: absolute; left: 0; right: 0; height: 2px; background: var(--paper-0); border-radius: 2px;
  transition: transform .3s var(--ease), opacity .3s var(--ease);
}
.nav-toggle span:nth-child(1) { top: 2px; }
.nav-toggle span:nth-child(2) { top: 12px; }
.nav-toggle span:nth-child(3) { top: 22px; }
.nav-toggle[aria-expanded="true"] span:nth-child(1) { transform: translateY(10px) rotate(45deg); }
.nav-toggle[aria-expanded="true"] span:nth-child(2) { opacity: 0; }
.nav-toggle[aria-expanded="true"] span:nth-child(3) { transform: translateY(-10px) rotate(-45deg); }

@media (max-width: 880px) {
  .site-nav {
    position: fixed; inset: 0 0 0 auto; width: min(78vw, 340px); height: 100vh;
    background: var(--plum-950); flex-direction: column; justify-content: center; gap: 1.6rem;
    padding: 2rem; transform: translateX(100%); transition: transform .4s var(--ease);
  }
  .site-nav.open { transform: translateX(0); }
  .site-nav a { font-size: 1.15rem; }
  .nav-cta { display: none; }
  .nav-toggle { display: block; }
}

/* ---------- hero ---------- */
.hero {
  padding-top: clamp(4.5rem, 12vw, 8rem);
  padding-bottom: clamp(4rem, 10vw, 7rem);
}
.hero-grid { display: grid; grid-template-columns: 1.15fr .85fr; gap: var(--gap); align-items: center; }
.hero h1 { font-size: clamp(2.6rem, 5.4vw, 4.4rem); font-weight: 700; }
.hero h1 em { font-style: italic; font-weight: 400; color: var(--emerald-300); }
.hero-lede { margin-top: 1.4rem; max-width: 42ch; font-size: 1.12rem; color: rgba(251,247,238,.85); }
.hero-actions { display: flex; flex-wrap: wrap; gap: 1rem; margin-top: 2.2rem; }
.hero-meta { display: flex; gap: 2rem; margin-top: 3rem; font-family: var(--font-mono); font-size: .78rem; color: rgba(251,247,238,.65); }
.hero-visual { position: relative; aspect-ratio: 4/5; border: 1px solid rgba(251,247,238,.18); }
.page-hero { padding: clamp(6.5rem, 14vw, 9.5rem) 0 clamp(3rem, 6vw, 4rem); }
.page-hero h1 { font-size: clamp(2.2rem, 4.4vw, 3.3rem); margin-top: .6rem; }
.page-hero-lede { margin-top: 1rem; max-width: 56ch; font-size: 1.05rem; color: rgba(251,247,238,.85); }

@media (max-width: 880px) {
  .hero-grid { grid-template-columns: 1fr; }
  .hero-visual { order: -1; aspect-ratio: 16/10; }
}

/* ---------- painted placeholder art tiles ---------- */
.art-tile {
  position: relative; aspect-ratio: 4/5; overflow: hidden; border: 1px solid rgba(33,18,40,.08);
  background: var(--plum-800);
}
.art-tile .art-paint { position: absolute; inset: 0; }
.art-1 .art-paint { background: radial-gradient(120% 90% at 20% 20%, #5a3470, #211228 70%); }
.art-2 .art-paint { background: conic-gradient(from 120deg at 50% 40%, #2e7d54, #34203f, #c69a44, #2e7d54); }
.art-3 .art-paint { background: linear-gradient(155deg, #8a63a3, #34203f 55%, #2e7d54); }
.art-4 .art-paint { background: radial-gradient(100% 80% at 80% 30%, #7fc9a4, #211228 65%); }
.art-5 .art-paint { background: linear-gradient(20deg, #c69a44, #5a3470 60%, #211228); }
.art-6 .art-paint { background: radial-gradient(90% 110% at 30% 80%, #389663, #34203f 60%); }
.art-7 .art-paint { background: conic-gradient(from 250deg at 40% 60%, #211228, #8a63a3, #dab668, #211228); }
.art-8 .art-paint { background: linear-gradient(200deg, #34203f, #2e7d54 45%, #c69a44); }
.art-9 .art-paint { background: radial-gradient(110% 90% at 70% 75%, #5a3470, #211228 70%); }
.art-tile .art-paint::after {
  content: ''; position: absolute; inset: 0; opacity: .12; mix-blend-mode: overlay;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='140' height='140'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>");
}
.art-tag {
  position: absolute; left: 0; right: 0; bottom: 0; padding: .8rem .9rem;
  background: linear-gradient(0deg, rgba(0,0,0,.55), transparent);
  color: var(--paper-0); opacity: 0; transform: translateY(6px);
  transition: opacity .25s var(--ease), transform .25s var(--ease);
}
.art-tile:hover .art-tag, .art-tile:focus-within .art-tag { opacity: 1; transform: none; }
.art-tag .art-title { font-family: var(--font-display); font-size: 1.02rem; }
.art-tag .art-meta { font-family: var(--font-mono); font-size: .68rem; letter-spacing: .04em; opacity: .85; margin-top: .2rem; }
.art-tile-btn { position: absolute; inset: 0; width: 100%; height: 100%; background: none; border: none; padding: 0; }

/* placard captions under tiles (gallery page) */
.placard { margin-top: .65rem; }
.placard .art-title { font-family: var(--font-display); font-size: 1.05rem; color: var(--plum-950); }
.placard .art-meta { font-family: var(--font-mono); font-size: .74rem; color: var(--ink-600); margin-top: .15rem; display: flex; justify-content: space-between; gap: .5rem; }

/* ---------- grids & cards ---------- */
.grid { display: grid; gap: var(--gap); }
.grid-3 { grid-template-columns: repeat(3, 1fr); }
.grid-4 { grid-template-columns: repeat(4, 1fr); }
.grid-2 { grid-template-columns: repeat(2, 1fr); }
@media (max-width: 980px) { .grid-4 { grid-template-columns: repeat(2, 1fr); } .grid-3 { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 640px) { .grid-3, .grid-4, .grid-2 { grid-template-columns: 1fr; } }

.section-head { max-width: 60ch; margin-bottom: clamp(2rem, 4vw, 3rem); }
.section-head h2 { font-size: clamp(1.9rem, 3.2vw, 2.6rem); margin-top: .6rem; }
.section-head-row { display: flex; justify-content: space-between; align-items: flex-end; gap: 1.5rem; flex-wrap: wrap; }

.card {
  background: var(--paper-0); border: 1px solid rgba(33,18,40,.1); padding: 2rem 1.8rem;
}
.card-medium .icon { width: 2.4rem; height: 2.4rem; color: var(--emerald-600); margin-bottom: 1.1rem; }
.card-medium h3 { font-size: 1.3rem; }
.card-medium p { margin-top: .7rem; color: var(--ink-600); }
.card-medium .btn-ghost { margin-top: 1.2rem; display: inline-block; }

.price-card { background: var(--plum-950); color: var(--paper-0); padding: 2.4rem 2rem; position: relative; }
.price-card .eyebrow { margin-bottom: .8rem; }
.price-card h3 { color: var(--paper-0); font-size: 1.6rem; }
.price-card .price-list { margin-top: 1.4rem; border-top: 1px solid rgba(251,247,238,.15); }
.price-row { display: flex; justify-content: space-between; padding: .85rem 0; border-bottom: 1px solid rgba(251,247,238,.15); font-size: .95rem; }
.price-row .amount { font-family: var(--font-mono); color: var(--emerald-300); }
.price-note { margin-top: 1.4rem; font-size: .85rem; color: rgba(251,247,238,.65); }

.process-list { counter-reset: step; margin-top: 1rem; }
.process-item { display: flex; gap: 1.3rem; padding: 1.5rem 0; border-top: 1px solid rgba(33,18,40,.12); }
.process-item:last-child { border-bottom: 1px solid rgba(33,18,40,.12); }
.process-num { font-family: var(--font-mono); color: var(--brass-400); font-size: 1rem; min-width: 2.4rem; }
.process-item h4 { font-size: 1.1rem; }
.process-item p { margin-top: .4rem; color: var(--ink-600); }

/* testimonials */
.testimonial-wrap { position: relative; max-width: 760px; margin: 0 auto; text-align: center; }
.testimonial-slide { display: none; }
.testimonial-slide.active { display: block; }
.testimonial-slide blockquote { font-family: var(--font-display); font-size: clamp(1.3rem, 2.6vw, 1.7rem); line-height: 1.4; margin: 0; }
.testimonial-slide cite { display: block; margin-top: 1.3rem; font-family: var(--font-mono); font-size: .8rem; font-style: normal; color: var(--emerald-300); }
.testimonial-dots { display: flex; justify-content: center; gap: .6rem; margin-top: 2rem; }
.testimonial-dots button { width: 8px; height: 8px; border-radius: 50%; border: none; background: rgba(251,247,238,.3); padding: 0; }
.testimonial-dots button.active { background: var(--brass-400); }

/* faq accordion */
.accordion-item { border-top: 1px solid rgba(33,18,40,.14); }
.accordion-item:last-child { border-bottom: 1px solid rgba(33,18,40,.14); }
.accordion-trigger {
  width: 100%; display: flex; justify-content: space-between; align-items: center; gap: 1rem;
  background: none; border: none; text-align: left; padding: 1.4rem 0; font-family: var(--font-display);
  font-size: 1.15rem; color: var(--plum-950);
}
.accordion-trigger .plus { font-family: var(--font-mono); font-size: 1.3rem; color: var(--emerald-600); transition: transform .3s var(--ease); flex-shrink: 0; }
.accordion-item[aria-expanded="true"] .plus { transform: rotate(45deg); }
.accordion-panel { max-height: 0; overflow: hidden; transition: max-height .35s var(--ease); }
.accordion-panel p { padding: 0 0 1.5rem; max-width: 62ch; color: var(--ink-600); }

/* forms */
.form-grid { display: grid; gap: 1.3rem; }
.form-row-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 1.3rem; }
@media (max-width: 640px) { .form-row-2 { grid-template-columns: 1fr; } }
.field label { display: block; font-family: var(--font-mono); font-size: .72rem; letter-spacing: .06em; text-transform: uppercase; color: var(--ink-600); margin-bottom: .5rem; }
.on-dark .field label { color: rgba(251,247,238,.65); }
.field input, .field select, .field textarea {
  width: 100%; background: var(--paper-0); border: 1px solid rgba(33,18,40,.22); padding: .85em 1em;
  color: var(--ink-900); border-radius: var(--radius); transition: border-color .2s;
}
.on-dark .field input, .on-dark .field select, .on-dark .field textarea { background: rgba(251,247,238,.06); border-color: rgba(251,247,238,.25); color: var(--paper-0); }
.field input:focus, .field select:focus, .field textarea:focus { border-color: var(--emerald-500); }
.field textarea { min-height: 130px; resize: vertical; }
.field-error { display: none; font-family: var(--font-mono); font-size: .72rem; color: #c0524b; margin-top: .4rem; }
.field.invalid input, .field.invalid select, .field.invalid textarea { border-color: #c0524b; }
.field.invalid .field-error { display: block; }
.form-note { font-size: .85rem; color: var(--ink-600); margin-top: .3rem; }
.on-dark .form-note { color: rgba(251,247,238,.6); }
.form-status { margin-top: 1.4rem; font-family: var(--font-mono); font-size: .85rem; padding: 1rem 1.2rem; display: none; }
.form-status.success { display: block; background: rgba(56,150,99,.12); border: 1px solid var(--emerald-500); color: var(--emerald-600); }
.on-dark .form-status.success { color: var(--emerald-300); }

/* newsletter band */
.newsletter-band { background: var(--emerald-600); color: var(--paper-0); }
.newsletter-inner { display: flex; align-items: center; justify-content: space-between; gap: 2rem; flex-wrap: wrap; }
.newsletter-inner h3 { color: var(--paper-0); font-size: 1.6rem; max-width: 26ch; }
.newsletter-form { display: flex; gap: .8rem; flex-wrap: wrap; }
.newsletter-form input { min-width: 240px; padding: .9em 1.1em; border: 1px solid rgba(251,247,238,.4); background: rgba(251,247,238,.08); color: var(--paper-0); border-radius: var(--radius); }
.newsletter-form input::placeholder { color: rgba(251,247,238,.65); }

/* social strip */
.social-strip .grid { }
.social-tile { aspect-ratio: 1; position: relative; overflow: hidden; }
.social-tile .art-paint::before { content: '↗'; position: absolute; top: .6rem; right: .7rem; color: rgba(251,247,238,.85); font-family: var(--font-mono); }

/* lightbox modal */
.lightbox, .modal {
  position: fixed; inset: 0; z-index: 90; display: none; align-items: center; justify-content: center;
  background: rgba(20,10,25,.82); padding: 1.5rem;
}
.lightbox.open, .modal.open { display: flex; }
.lightbox-panel { max-width: 640px; width: 100%; background: var(--paper-0); position: relative; }
.lightbox-art { aspect-ratio: 4/5; position: relative; }
.lightbox-body { padding: 1.6rem 1.8rem 1.9rem; }
.lightbox-body .art-title { font-size: 1.4rem; }
.lightbox-body .art-meta { margin-top: .3rem; }
.lightbox-body p { margin-top: 1rem; color: var(--ink-600); }
.lightbox-actions { margin-top: 1.3rem; }
.modal-panel { max-width: 480px; width: 100%; background: var(--paper-0); padding: 2.2rem; max-height: 82vh; overflow-y: auto; position: relative; }
.modal-panel h3 { margin-bottom: 1rem; }
.modal-panel p { color: var(--ink-600); margin-bottom: .9rem; }
.modal-close, .lightbox-close {
  position: absolute; top: .8rem; right: .9rem; width: 2.2rem; height: 2.2rem; border: none; background: none;
  font-size: 1.5rem; line-height: 1; color: var(--ink-600);
}

/* gallery filter */
.filter-row { display: flex; gap: .7rem; flex-wrap: wrap; margin-bottom: 2.2rem; }
.filter-btn {
  font-family: var(--font-mono); font-size: .78rem; letter-spacing: .04em; text-transform: uppercase;
  padding: .6em 1.1em; border: 1px solid rgba(33,18,40,.25); background: none; color: var(--ink-900);
  transition: background-color .2s, color .2s, border-color .2s;
}
.filter-btn.active, .filter-btn:hover { background: var(--plum-950); color: var(--paper-0); border-color: var(--plum-950); }
.gallery-item { transition: opacity .25s var(--ease), transform .25s var(--ease); }
.gallery-item.hidden { display: none; }

/* about page */
.avatar-brush { aspect-ratio: 3/4; position: relative; overflow: hidden; background: var(--plum-950); }
.avatar-brush svg { position: absolute; inset: 0; width: 100%; height: 100%; }

.stat-row { display: flex; gap: clamp(2rem, 6vw, 4.5rem); flex-wrap: wrap; }
.stat-row .stat-num { font-family: var(--font-display); font-size: 2.2rem; color: var(--emerald-600); }
.stat-row .stat-label { font-family: var(--font-mono); font-size: .75rem; text-transform: uppercase; letter-spacing: .05em; color: var(--ink-600); margin-top: .3rem; }

/* blog */
.post-card .post-date { font-family: var(--font-mono); font-size: .74rem; color: var(--emerald-600); letter-spacing: .04em; }
.post-card h3 { margin-top: .6rem; font-size: 1.35rem; }
.post-card p { margin-top: .7rem; color: var(--ink-600); }

/* faq page contact cta */
.split-cta { display: grid; grid-template-columns: 1.3fr 1fr; gap: var(--gap); align-items: center; }
@media (max-width: 880px) { .split-cta { grid-template-columns: 1fr; } }

/* footer */
.site-footer { background: var(--plum-950); color: rgba(251,247,238,.85); padding: 4rem 0 0; }
.footer-inner { display: flex; justify-content: space-between; gap: 3rem; flex-wrap: wrap; padding-bottom: 3rem; border-bottom: 1px solid rgba(251,247,238,.14); }
.footer-tagline { margin-top: .8rem; max-width: 30ch; color: rgba(251,247,238,.6); font-size: .92rem; }
.footer-links { display: flex; gap: clamp(2rem, 5vw, 4.5rem); flex-wrap: wrap; }
.footer-heading { font-family: var(--font-mono); font-size: .72rem; letter-spacing: .08em; text-transform: uppercase; color: var(--brass-300); margin-bottom: .9rem; }
.footer-links a, .link-btn { display: block; padding: .35rem 0; color: rgba(251,247,238,.78); background: none; border: none; text-align: left; font-size: .92rem; }
.footer-links a:hover, .link-btn:hover { color: var(--paper-0); }
.footer-bottom { display: flex; justify-content: space-between; gap: 1rem; flex-wrap: wrap; padding: 1.6rem 0; font-family: var(--font-mono); font-size: .72rem; color: rgba(251,247,238,.5); max-width: var(--maxw); margin: 0 auto; padding-left: clamp(1.25rem, 4vw, 3rem); padding-right: clamp(1.25rem, 4vw, 3rem); }

.footer-inner { max-width: var(--maxw); margin: 0 auto; padding-left: clamp(1.25rem, 4vw, 3rem); padding-right: clamp(1.25rem, 4vw, 3rem); }

/* misc */
.divider-space { height: clamp(2rem, 5vw, 3.5rem); }
.text-center { text-align: center; }
.mx-auto { margin-left: auto; margin-right: auto; }
.bg-parchment { background: var(--parchment-50); }
.small-caps-note { font-family: var(--font-mono); font-size: .78rem; color: var(--ink-600); }

/* gallery atmosphere */
.gallery-showcase { position: relative; background: var(--parchment-50); overflow: hidden; }
.gallery-showcase::before {
  content: ''; position: absolute; inset: 0; pointer-events: none; opacity: .18;
  background-image: radial-gradient(rgba(33,18,40,.16) .7px, transparent .7px); background-size: 9px 9px;
}
.gallery-showcase > .container { position: relative; }
.gallery-showcase .section-head-row { align-items: flex-end; }
.gallery-showcase .section-head { margin-bottom: 0; }
.gallery-grid { margin-top: 2.5rem; }
.gallery-item { min-width: 0; }
.gallery-item .art-tile { box-shadow: 0 10px 24px rgba(33,18,40,.12); transition: transform .35s var(--ease), box-shadow .35s var(--ease); }
.gallery-item:hover .art-tile { transform: translateY(-5px) rotate(-.35deg); box-shadow: 0 16px 30px rgba(33,18,40,.2); }
.gallery-item .placard { padding: .35rem .15rem 1rem; border-bottom: 1px solid rgba(33,18,40,.16); }
.gallery-item .placard .art-title { font-size: 1.18rem; }
.gallery-item .placard .art-meta { font-size: .68rem; }
.art-photo { position: absolute; inset: 0; z-index: 1; width: 100%; height: 100%; object-fit: cover; }
.art-description { margin-top: .65rem; color: var(--ink-600); font-size: .86rem; line-height: 1.5; max-width: 34ch; }
.gallery-cta h2 { margin-top: .7rem; font-size: clamp(1.9rem, 3.4vw, 2.7rem); }
.gallery-cta p { max-width: 48ch; margin: 1rem auto 0; color: var(--ink-600); }
.gallery-cta .btn { margin-top: 2rem; }
@media (max-width: 640px) {
  .gallery-showcase .section-head-row { align-items: flex-start; }
  .gallery-showcase .filter-row { margin-top: .5rem; }
}
`;
/* ============================================================
   Catera's Creation — Sample Website
   Design tokens: deep plum + emerald, warm parchment, brass hairline.
   Display: Fraunces / Body: Work Sans / Labels: Space Mono
   ============================================================ */

@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,700;9..144,900&family=Work+Sans:wght@400;500;600;700&family=Space+Mono:wght@400;700&display=swap');

:root {
  --plum-950: #211228;
  --plum-800: #34203f;
  --plum-600: #5a3470;
  --plum-400: #8a63a3;
  --emerald-600: #2e7d54;
  --emerald-500: #389663;
  --emerald-300: #7fc9a4;
  --brass-400: #c69a44;
  --brass-300: #dab668;
  --parchment-50: #f4ecd9;
  --parchment-100: #efe3cb;
  --ink-900: #201526;
  --ink-600: #55475d;
  --paper-0: #fbf7ee;

  --font-display: 'Fraunces', serif;
  --font-body: 'Work Sans', sans-serif;
  --font-mono: 'Space Mono', monospace;

  --maxw: 1180px;
  --gap: clamp(1.25rem, 2.5vw, 2.5rem);
  --radius: 2px;

  --ease: cubic-bezier(.65,0,.35,1);
}

*, *::before, *::after { box-sizing: border-box; }
html { scroll-behavior: smooth; }
@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  *, *::before, *::after { animation-duration: 0.001ms !important; animation-iteration-count: 1 !important; transition-duration: 0.001ms !important; }
}
body {
  margin: 0;
  background: var(--paper-0);
  color: var(--ink-900);
  font-family: var(--font-body);
  font-size: 16px;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}
img { max-width: 100%; display: block; }
a { color: inherit; text-decoration: none; }
ul { margin: 0; padding: 0; list-style: none; }
button { font: inherit; cursor: pointer; }
input, select, textarea { font: inherit; }
h1, h2, h3, h4 { font-family: var(--font-display); font-weight: 700; line-height: 1.08; margin: 0; color: var(--plum-950); }
p { margin: 0; }
:focus-visible { outline: 2px solid var(--brass-400); outline-offset: 3px; }

.container { max-width: var(--maxw); margin: 0 auto; padding: 0 clamp(1.25rem, 4vw, 3rem); }

.eyebrow {
  font-family: var(--font-mono); font-size: .74rem; letter-spacing: .16em; text-transform: uppercase;
  color: var(--emerald-600); display: inline-flex; align-items: center; gap: .5em;
}
.eyebrow::before { content: ''; width: 1.4em; height: 1px; background: var(--brass-400); display: inline-block; }
.on-dark .eyebrow { color: var(--emerald-300); }
.on-dark .eyebrow::before { background: var(--brass-300); }

section { padding: clamp(3.5rem, 8vw, 6.5rem) 0; }
.section-tight { padding: clamp(2.25rem, 5vw, 3.5rem) 0; }

/* ---------- texture ---------- */
.on-dark {
  background-color: var(--plum-950);
  color: var(--paper-0);
  position: relative;
}
.on-dark h1, .on-dark h2, .on-dark h3, .on-dark h4 { color: var(--paper-0); }
.texture-veil {
  position: absolute; inset: 0; pointer-events: none; opacity: .05; mix-blend-mode: overlay;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>");
}

/* ---------- brush stroke signature ---------- */
.brush {
  display: block;
  width: 100%;
  height: auto;
  overflow: visible;
}
.brush path {
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 420;
  stroke-dashoffset: 420;
  transition: stroke-dashoffset 1.2s var(--ease);
}
.in-view .brush path { stroke-dashoffset: 0; }

.brush-underline { width: 7.5em; height: .6em; margin-top: .15em; }
.brush-underline path { stroke: var(--brass-400); stroke-width: 9; }
.on-dark .brush-underline path { stroke: var(--emerald-300); }

.brush-divider { max-width: 220px; height: 28px; margin: 0 auto; }
.brush-divider path { stroke: var(--emerald-500); stroke-width: 6; }

/* ---------- reveal on scroll ---------- */
.reveal { opacity: 0; transform: translateY(18px); transition: opacity .7s var(--ease), transform .7s var(--ease); }
.reveal.in-view { opacity: 1; transform: none; }

/* ---------- buttons ---------- */
.btn {
  display: inline-flex; align-items: center; justify-content: center; gap: .5em;
  font-family: var(--font-mono); font-size: .82rem; letter-spacing: .06em; text-transform: uppercase;
  padding: .95em 1.7em; border-radius: var(--radius); border: 1px solid transparent;
  transition: transform .25s var(--ease), background-color .25s var(--ease), color .25s var(--ease), border-color .25s var(--ease);
  white-space: nowrap;
}
.btn:hover { transform: translateY(-2px); }
.btn-primary { background: var(--emerald-600); color: var(--paper-0); }
.btn-primary:hover { background: var(--emerald-500); }
.btn-outline { border-color: currentColor; color: var(--paper-0); }
.btn-outline:hover { background: rgba(251,247,238,.1); }
.btn-outline.dark { color: var(--plum-950); }
.btn-outline.dark:hover { background: rgba(33,18,40,.06); }
.btn-cta { background: var(--brass-400); color: var(--plum-950); }
.btn-cta:hover { background: var(--brass-300); }
.btn-ghost { color: var(--plum-600); border-bottom: 1px solid var(--brass-400); border-radius: 0; padding: .2em 0; }
.btn-block { width: 100%; }
.btn[disabled] { opacity: .55; cursor: not-allowed; transform: none; }

/* ---------- header ---------- */
.site-header {
  position: sticky; top: 0; z-index: 40;
  background: rgba(33,18,40,0);
  transition: background-color .35s var(--ease), box-shadow .35s var(--ease);
}
.site-header.solid { background: var(--plum-950); box-shadow: 0 6px 24px rgba(0,0,0,.18); }
.header-inner {
  max-width: var(--maxw); margin: 0 auto; padding: 1.1rem clamp(1.25rem, 4vw, 3rem);
  display: flex; align-items: center; gap: 1.5rem;
}
.wordmark { font-family: var(--font-display); font-weight: 700; font-size: 1.3rem; color: var(--paper-0); letter-spacing: .01em; }
.wordmark-accent { color: var(--brass-300); font-style: italic; }
.wordmark.small { font-size: 1.05rem; }
.site-nav { display: flex; gap: 1.9rem; margin-left: auto; font-size: .93rem; }
.site-nav a { color: rgba(251,247,238,.82); padding: .3rem 0; border-bottom: 1px solid transparent; transition: color .2s, border-color .2s; }
.site-nav a:hover, .site-nav a[aria-current="page"] { color: var(--paper-0); border-color: var(--brass-400); }
.nav-cta { margin-left: .5rem; }
.nav-toggle {
  display: none; margin-left: auto; background: none; border: none; width: 34px; height: 26px;
  position: relative; padding: 0;
}
.nav-toggle span {
  position: absolute; left: 0; right: 0; height: 2px; background: var(--paper-0); border-radius: 2px;
  transition: transform .3s var(--ease), opacity .3s var(--ease);
}
.nav-toggle span:nth-child(1) { top: 2px; }
.nav-toggle span:nth-child(2) { top: 12px; }
.nav-toggle span:nth-child(3) { top: 22px; }
.nav-toggle[aria-expanded="true"] span:nth-child(1) { transform: translateY(10px) rotate(45deg); }
.nav-toggle[aria-expanded="true"] span:nth-child(2) { opacity: 0; }
.nav-toggle[aria-expanded="true"] span:nth-child(3) { transform: translateY(-10px) rotate(-45deg); }

@media (max-width: 880px) {
  .site-nav {
    position: fixed; inset: 0 0 0 auto; width: min(78vw, 340px); height: 100vh;
    background: var(--plum-950); flex-direction: column; justify-content: center; gap: 1.6rem;
    padding: 2rem; transform: translateX(100%); transition: transform .4s var(--ease);
  }
  .site-nav.open { transform: translateX(0); }
  .site-nav a { font-size: 1.15rem; }
  .nav-cta { display: none; }
  .nav-toggle { display: block; }
}

/* ---------- hero ---------- */
.hero {
  padding-top: clamp(4.5rem, 12vw, 8rem);
  padding-bottom: clamp(4rem, 10vw, 7rem);
}
.hero-grid { display: grid; grid-template-columns: 1.15fr .85fr; gap: var(--gap); align-items: center; }
.hero h1 { font-size: clamp(2.6rem, 5.4vw, 4.4rem); font-weight: 700; }
.hero h1 em { font-style: italic; font-weight: 400; color: var(--emerald-300); }
.hero-lede { margin-top: 1.4rem; max-width: 42ch; font-size: 1.12rem; color: rgba(251,247,238,.85); }
.hero-actions { display: flex; flex-wrap: wrap; gap: 1rem; margin-top: 2.2rem; }
.hero-meta { display: flex; gap: 2rem; margin-top: 3rem; font-family: var(--font-mono); font-size: .78rem; color: rgba(251,247,238,.65); }
.hero-visual { position: relative; aspect-ratio: 4/5; border: 1px solid rgba(251,247,238,.18); }
.page-hero { padding: clamp(6.5rem, 14vw, 9.5rem) 0 clamp(3rem, 6vw, 4rem); }
.page-hero h1 { font-size: clamp(2.2rem, 4.4vw, 3.3rem); margin-top: .6rem; }
.page-hero-lede { margin-top: 1rem; max-width: 56ch; font-size: 1.05rem; color: rgba(251,247,238,.85); }

@media (max-width: 880px) {
  .hero-grid { grid-template-columns: 1fr; }
  .hero-visual { order: -1; aspect-ratio: 16/10; }
}

/* ---------- painted placeholder art tiles ---------- */
.art-tile {
  position: relative; aspect-ratio: 4/5; overflow: hidden; border: 1px solid rgba(33,18,40,.08);
  background: var(--plum-800);
}
.art-tile .art-paint { position: absolute; inset: 0; }
.art-1 .art-paint { background: radial-gradient(120% 90% at 20% 20%, #5a3470, #211228 70%); }
.art-2 .art-paint { background: conic-gradient(from 120deg at 50% 40%, #2e7d54, #34203f, #c69a44, #2e7d54); }
.art-3 .art-paint { background: linear-gradient(155deg, #8a63a3, #34203f 55%, #2e7d54); }
.art-4 .art-paint { background: radial-gradient(100% 80% at 80% 30%, #7fc9a4, #211228 65%); }
.art-5 .art-paint { background: linear-gradient(20deg, #c69a44, #5a3470 60%, #211228); }
.art-6 .art-paint { background: radial-gradient(90% 110% at 30% 80%, #389663, #34203f 60%); }
.art-7 .art-paint { background: conic-gradient(from 250deg at 40% 60%, #211228, #8a63a3, #dab668, #211228); }
.art-8 .art-paint { background: linear-gradient(200deg, #34203f, #2e7d54 45%, #c69a44); }
.art-9 .art-paint { background: radial-gradient(110% 90% at 70% 75%, #5a3470, #211228 70%); }
.art-tile .art-paint::after {
  content: ''; position: absolute; inset: 0; opacity: .12; mix-blend-mode: overlay;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='140' height='140'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>");
}
.art-tag {
  position: absolute; left: 0; right: 0; bottom: 0; padding: .8rem .9rem;
  background: linear-gradient(0deg, rgba(0,0,0,.55), transparent);
  color: var(--paper-0); opacity: 0; transform: translateY(6px);
  transition: opacity .25s var(--ease), transform .25s var(--ease);
}
.art-tile:hover .art-tag, .art-tile:focus-within .art-tag { opacity: 1; transform: none; }
.art-tag .art-title { font-family: var(--font-display); font-size: 1.02rem; }
.art-tag .art-meta { font-family: var(--font-mono); font-size: .68rem; letter-spacing: .04em; opacity: .85; margin-top: .2rem; }
.art-tile-btn { position: absolute; inset: 0; width: 100%; height: 100%; background: none; border: none; padding: 0; }

/* placard captions under tiles (gallery page) */
.placard { margin-top: .65rem; }
.placard .art-title { font-family: var(--font-display); font-size: 1.05rem; color: var(--plum-950); }
.placard .art-meta { font-family: var(--font-mono); font-size: .74rem; color: var(--ink-600); margin-top: .15rem; display: flex; justify-content: space-between; gap: .5rem; }

/* ---------- grids & cards ---------- */
.grid { display: grid; gap: var(--gap); }
.grid-3 { grid-template-columns: repeat(3, 1fr); }
.grid-4 { grid-template-columns: repeat(4, 1fr); }
.grid-2 { grid-template-columns: repeat(2, 1fr); }
@media (max-width: 980px) { .grid-4 { grid-template-columns: repeat(2, 1fr); } .grid-3 { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 640px) { .grid-3, .grid-4, .grid-2 { grid-template-columns: 1fr; } }

.section-head { max-width: 60ch; margin-bottom: clamp(2rem, 4vw, 3rem); }
.section-head h2 { font-size: clamp(1.9rem, 3.2vw, 2.6rem); margin-top: .6rem; }
.section-head-row { display: flex; justify-content: space-between; align-items: flex-end; gap: 1.5rem; flex-wrap: wrap; }

.card {
  background: var(--paper-0); border: 1px solid rgba(33,18,40,.1); padding: 2rem 1.8rem;
}
.card-medium .icon { width: 2.4rem; height: 2.4rem; color: var(--emerald-600); margin-bottom: 1.1rem; }
.card-medium h3 { font-size: 1.3rem; }
.card-medium p { margin-top: .7rem; color: var(--ink-600); }
.card-medium .btn-ghost { margin-top: 1.2rem; display: inline-block; }

.price-card { background: var(--plum-950); color: var(--paper-0); padding: 2.4rem 2rem; position: relative; }
.price-card .eyebrow { margin-bottom: .8rem; }
.price-card h3 { color: var(--paper-0); font-size: 1.6rem; }
.price-card .price-list { margin-top: 1.4rem; border-top: 1px solid rgba(251,247,238,.15); }
.price-row { display: flex; justify-content: space-between; padding: .85rem 0; border-bottom: 1px solid rgba(251,247,238,.15); font-size: .95rem; }
.price-row .amount { font-family: var(--font-mono); color: var(--emerald-300); }
.price-note { margin-top: 1.4rem; font-size: .85rem; color: rgba(251,247,238,.65); }

.process-list { counter-reset: step; margin-top: 1rem; }
.process-item { display: flex; gap: 1.3rem; padding: 1.5rem 0; border-top: 1px solid rgba(33,18,40,.12); }
.process-item:last-child { border-bottom: 1px solid rgba(33,18,40,.12); }
.process-num { font-family: var(--font-mono); color: var(--brass-400); font-size: 1rem; min-width: 2.4rem; }
.process-item h4 { font-size: 1.1rem; }
.process-item p { margin-top: .4rem; color: var(--ink-600); }

/* testimonials */
.testimonial-wrap { position: relative; max-width: 760px; margin: 0 auto; text-align: center; }
.testimonial-slide { display: none; }
.testimonial-slide.active { display: block; }
.testimonial-slide blockquote { font-family: var(--font-display); font-size: clamp(1.3rem, 2.6vw, 1.7rem); line-height: 1.4; margin: 0; }
.testimonial-slide cite { display: block; margin-top: 1.3rem; font-family: var(--font-mono); font-size: .8rem; font-style: normal; color: var(--emerald-300); }
.testimonial-dots { display: flex; justify-content: center; gap: .6rem; margin-top: 2rem; }
.testimonial-dots button { width: 8px; height: 8px; border-radius: 50%; border: none; background: rgba(251,247,238,.3); padding: 0; }
.testimonial-dots button.active { background: var(--brass-400); }

/* faq accordion */
.accordion-item { border-top: 1px solid rgba(33,18,40,.14); }
.accordion-item:last-child { border-bottom: 1px solid rgba(33,18,40,.14); }
.accordion-trigger {
  width: 100%; display: flex; justify-content: space-between; align-items: center; gap: 1rem;
  background: none; border: none; text-align: left; padding: 1.4rem 0; font-family: var(--font-display);
  font-size: 1.15rem; color: var(--plum-950);
}
.accordion-trigger .plus { font-family: var(--font-mono); font-size: 1.3rem; color: var(--emerald-600); transition: transform .3s var(--ease); flex-shrink: 0; }
.accordion-item[aria-expanded="true"] .plus { transform: rotate(45deg); }
.accordion-panel { max-height: 0; overflow: hidden; transition: max-height .35s var(--ease); }
.accordion-panel p { padding: 0 0 1.5rem; max-width: 62ch; color: var(--ink-600); }

/* forms */
.form-grid { display: grid; gap: 1.3rem; }
.form-row-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 1.3rem; }
@media (max-width: 640px) { .form-row-2 { grid-template-columns: 1fr; } }
.field label { display: block; font-family: var(--font-mono); font-size: .72rem; letter-spacing: .06em; text-transform: uppercase; color: var(--ink-600); margin-bottom: .5rem; }
.on-dark .field label { color: rgba(251,247,238,.65); }
.field input, .field select, .field textarea {
  width: 100%; background: var(--paper-0); border: 1px solid rgba(33,18,40,.22); padding: .85em 1em;
  color: var(--ink-900); border-radius: var(--radius); transition: border-color .2s;
}
.on-dark .field input, .on-dark .field select, .on-dark .field textarea { background: rgba(251,247,238,.06); border-color: rgba(251,247,238,.25); color: var(--paper-0); }
.field input:focus, .field select:focus, .field textarea:focus { border-color: var(--emerald-500); }
.field textarea { min-height: 130px; resize: vertical; }
.field-error { display: none; font-family: var(--font-mono); font-size: .72rem; color: #c0524b; margin-top: .4rem; }
.field.invalid input, .field.invalid select, .field.invalid textarea { border-color: #c0524b; }
.field.invalid .field-error { display: block; }
.form-note { font-size: .85rem; color: var(--ink-600); margin-top: .3rem; }
.on-dark .form-note { color: rgba(251,247,238,.6); }
.form-status { margin-top: 1.4rem; font-family: var(--font-mono); font-size: .85rem; padding: 1rem 1.2rem; display: none; }
.form-status.success { display: block; background: rgba(56,150,99,.12); border: 1px solid var(--emerald-500); color: var(--emerald-600); }
.on-dark .form-status.success { color: var(--emerald-300); }

/* newsletter band */
.newsletter-band { background: var(--emerald-600); color: var(--paper-0); }
.newsletter-inner { display: flex; align-items: center; justify-content: space-between; gap: 2rem; flex-wrap: wrap; }
.newsletter-inner h3 { color: var(--paper-0); font-size: 1.6rem; max-width: 26ch; }
.newsletter-form { display: flex; gap: .8rem; flex-wrap: wrap; }
.newsletter-form input { min-width: 240px; padding: .9em 1.1em; border: 1px solid rgba(251,247,238,.4); background: rgba(251,247,238,.08); color: var(--paper-0); border-radius: var(--radius); }
.newsletter-form input::placeholder { color: rgba(251,247,238,.65); }

/* social strip */
.social-strip .grid { }
.social-tile { aspect-ratio: 1; position: relative; overflow: hidden; }
.social-tile .art-paint::before { content: '↗'; position: absolute; top: .6rem; right: .7rem; color: rgba(251,247,238,.85); font-family: var(--font-mono); }

/* lightbox modal */
.lightbox, .modal {
  position: fixed; inset: 0; z-index: 90; display: none; align-items: center; justify-content: center;
  background: rgba(20,10,25,.82); padding: 1.5rem;
}
.lightbox.open, .modal.open { display: flex; }
.lightbox-panel { max-width: 640px; width: 100%; background: var(--paper-0); position: relative; }
.lightbox-art { aspect-ratio: 4/5; position: relative; }
.lightbox-body { padding: 1.6rem 1.8rem 1.9rem; }
.lightbox-body .art-title { font-size: 1.4rem; }
.lightbox-body .art-meta { margin-top: .3rem; }
.lightbox-body p { margin-top: 1rem; color: var(--ink-600); }
.lightbox-actions { margin-top: 1.3rem; }
.modal-panel { max-width: 480px; width: 100%; background: var(--paper-0); padding: 2.2rem; max-height: 82vh; overflow-y: auto; position: relative; }
.modal-panel h3 { margin-bottom: 1rem; }
.modal-panel p { color: var(--ink-600); margin-bottom: .9rem; }
.modal-close, .lightbox-close {
  position: absolute; top: .8rem; right: .9rem; width: 2.2rem; height: 2.2rem; border: none; background: none;
  font-size: 1.5rem; line-height: 1; color: var(--ink-600);
}

/* gallery filter */
.filter-row { display: flex; gap: .7rem; flex-wrap: wrap; margin-bottom: 2.2rem; }
.filter-btn {
  font-family: var(--font-mono); font-size: .78rem; letter-spacing: .04em; text-transform: uppercase;
  padding: .6em 1.1em; border: 1px solid rgba(33,18,40,.25); background: none; color: var(--ink-900);
  transition: background-color .2s, color .2s, border-color .2s;
}
.filter-btn.active, .filter-btn:hover { background: var(--plum-950); color: var(--paper-0); border-color: var(--plum-950); }
.gallery-item { transition: opacity .25s var(--ease), transform .25s var(--ease); }
.gallery-item.hidden { display: none; }

/* about page */
.avatar-brush { aspect-ratio: 3/4; position: relative; overflow: hidden; background: var(--plum-950); }
.avatar-brush svg { position: absolute; inset: 0; width: 100%; height: 100%; }

.stat-row { display: flex; gap: clamp(2rem, 6vw, 4.5rem); flex-wrap: wrap; }
.stat-row .stat-num { font-family: var(--font-display); font-size: 2.2rem; color: var(--emerald-600); }
.stat-row .stat-label { font-family: var(--font-mono); font-size: .75rem; text-transform: uppercase; letter-spacing: .05em; color: var(--ink-600); margin-top: .3rem; }

/* blog */
.post-card .post-date { font-family: var(--font-mono); font-size: .74rem; color: var(--emerald-600); letter-spacing: .04em; }
.post-card h3 { margin-top: .6rem; font-size: 1.35rem; }
.post-card p { margin-top: .7rem; color: var(--ink-600); }

/* faq page contact cta */
.split-cta { display: grid; grid-template-columns: 1.3fr 1fr; gap: var(--gap); align-items: center; }
@media (max-width: 880px) { .split-cta { grid-template-columns: 1fr; } }

/* footer */
.site-footer { background: var(--plum-950); color: rgba(251,247,238,.85); padding: 4rem 0 0; }
.footer-inner { display: flex; justify-content: space-between; gap: 3rem; flex-wrap: wrap; padding-bottom: 3rem; border-bottom: 1px solid rgba(251,247,238,.14); }
.footer-tagline { margin-top: .8rem; max-width: 30ch; color: rgba(251,247,238,.6); font-size: .92rem; }
.footer-links { display: flex; gap: clamp(2rem, 5vw, 4.5rem); flex-wrap: wrap; }
.footer-heading { font-family: var(--font-mono); font-size: .72rem; letter-spacing: .08em; text-transform: uppercase; color: var(--brass-300); margin-bottom: .9rem; }
.footer-links a, .link-btn { display: block; padding: .35rem 0; color: rgba(251,247,238,.78); background: none; border: none; text-align: left; font-size: .92rem; }
.footer-links a:hover, .link-btn:hover { color: var(--paper-0); }
.footer-bottom { display: flex; justify-content: space-between; gap: 1rem; flex-wrap: wrap; padding: 1.6rem 0; font-family: var(--font-mono); font-size: .72rem; color: rgba(251,247,238,.5); max-width: var(--maxw); margin: 0 auto; padding-left: clamp(1.25rem, 4vw, 3rem); padding-right: clamp(1.25rem, 4vw, 3rem); }

.footer-inner { max-width: var(--maxw); margin: 0 auto; padding-left: clamp(1.25rem, 4vw, 3rem); padding-right: clamp(1.25rem, 4vw, 3rem); }

/* misc */
.divider-space { height: clamp(2rem, 5vw, 3.5rem); }
.text-center { text-align: center; }
.mx-auto { margin-left: auto; margin-right: auto; }
.bg-parchment { background: var(--parchment-50); }
.small-caps-note { font-family: var(--font-mono); font-size: .78rem; color: var(--ink-600); }

/* gallery atmosphere */
.gallery-showcase { position: relative; background: var(--parchment-50); overflow: hidden; }
.gallery-showcase::before {
  content: ''; position: absolute; inset: 0; pointer-events: none; opacity: .18;
  background-image: radial-gradient(rgba(33,18,40,.16) .7px, transparent .7px); background-size: 9px 9px;
}
.gallery-showcase > .container { position: relative; }
.gallery-showcase .section-head-row { align-items: flex-end; }
.gallery-showcase .section-head { margin-bottom: 0; }
.gallery-grid { margin-top: 2.5rem; }
.gallery-item { min-width: 0; }
.gallery-item .art-tile { box-shadow: 0 10px 24px rgba(33,18,40,.12); transition: transform .35s var(--ease), box-shadow .35s var(--ease); }
.gallery-item:hover .art-tile { transform: translateY(-5px) rotate(-.35deg); box-shadow: 0 16px 30px rgba(33,18,40,.2); }
.gallery-item .placard { padding: .35rem .15rem 1rem; border-bottom: 1px solid rgba(33,18,40,.16); }
.gallery-item .placard .art-title { font-size: 1.18rem; }
.gallery-item .placard .art-meta { font-size: .68rem; }
.art-photo { position: absolute; inset: 0; z-index: 1; width: 100%; height: 100%; object-fit: cover; }
.art-description { margin-top: .65rem; color: var(--ink-600); font-size: .86rem; line-height: 1.5; max-width: 34ch; }
.gallery-cta h2 { margin-top: .7rem; font-size: clamp(1.9rem, 3.4vw, 2.7rem); }
.gallery-cta p { max-width: 48ch; margin: 1rem auto 0; color: var(--ink-600); }
.gallery-cta .btn { margin-top: 2rem; }
@media (max-width: 640px) {
  .gallery-showcase .section-head-row { align-items: flex-start; }
  .gallery-showcase .filter-row { margin-top: .5rem; }
}

/* gallery atmosphere */
.gallery-showcase {
  position: relative;
  background: var(--parchment-50);
  overflow: hidden;
}
.gallery-showcase::before {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: .18;
  background-image: radial-gradient(rgba(33,18,40,.16) .7px, transparent .7px);
  background-size: 9px 9px;
}
.gallery-showcase > .container { position: relative; }
.gallery-showcase .section-head-row { align-items: flex-end; }
.gallery-showcase .section-head { margin-bottom: 0; }
.gallery-grid { margin-top: 2.5rem; }
.gallery-item { min-width: 0; }
.gallery-item .art-tile {
  box-shadow: 0 10px 24px rgba(33,18,40,.12);
  transition: transform .35s var(--ease), box-shadow .35s var(--ease);
}
.gallery-item:hover .art-tile {
  transform: translateY(-5px) rotate(-.35deg);
  box-shadow: 0 16px 30px rgba(33,18,40,.2);
}
.gallery-item .placard {
  padding: .35rem .15rem 0;
  border-bottom: 1px solid rgba(33,18,40,.16);
  padding-bottom: 1rem;
}
.gallery-item .placard .art-title { font-size: 1.18rem; }
.gallery-item .placard .art-meta { font-size: .68rem; }
.gallery-cta h2 { margin-top: .7rem; font-size: clamp(1.9rem, 3.4vw, 2.7rem); }
.gallery-cta p { max-width: 48ch; margin: 1rem auto 0; color: var(--ink-600); }
.gallery-cta .btn { margin-top: 2rem; }

@media (max-width: 640px) {
  .gallery-showcase .section-head-row { align-items: flex-start; }
  .gallery-showcase .filter-row { margin-top: .5rem; }
}// Catera's Creation — shared site behavior
(function () {
  'use strict';

  /* ---- header solid-on-scroll ---- */
  var header = document.getElementById('siteHeader');
  function onScroll() {
    if (!header) return;
    if (window.scrollY > 24) header.classList.add('solid');
    else header.classList.remove('solid');
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---- mark current nav link ---- */
  var here = (location.pathname.split('/').pop() || 'index.html');
  document.querySelectorAll('.site-nav a').forEach(function (a) {
    var href = a.getAttribute('href');
    if (href === here || (here === '' && href === 'index.html')) {
      a.setAttribute('aria-current', 'page');
    }
  });

  /* ---- mobile nav toggle ---- */
  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('siteNav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      document.body.style.overflow = open ? 'hidden' : '';
    });
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  /* ---- scroll reveal + brush draw-on ---- */
  var revealables = document.querySelectorAll('.reveal, .brush');
  if ('IntersectionObserver' in window && revealables.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2, rootMargin: '0px 0px -40px 0px' });
    revealables.forEach(function (el) { io.observe(el); });
  } else {
    revealables.forEach(function (el) { el.classList.add('in-view'); });
  }

  /* ---- FAQ / process accordion ---- */
  document.querySelectorAll('.accordion-item').forEach(function (item) {
    var trigger = item.querySelector('.accordion-trigger');
    var panel = item.querySelector('.accordion-panel');
    if (!trigger || !panel) return;
    trigger.addEventListener('click', function () {
      var expanded = item.getAttribute('aria-expanded') === 'true';
      document.querySelectorAll('.accordion-item').forEach(function (other) {
        other.setAttribute('aria-expanded', 'false');
        other.querySelector('.accordion-panel').style.maxHeight = null;
      });
      if (!expanded) {
        item.setAttribute('aria-expanded', 'true');
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    });
  });

  /* ---- gallery filter ---- */
  var filterBtns = document.querySelectorAll('.filter-btn');
  var galleryItems = document.querySelectorAll('.gallery-item');
  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filterBtns.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      var f = btn.dataset.filter;
      galleryItems.forEach(function (item) {
        var match = f === 'all' || item.dataset.medium === f;
        item.classList.toggle('hidden', !match);
      });
    });
  });

  /* ---- lightbox ---- */
  var lightbox = document.getElementById('lightbox');
  if (lightbox) {
    var lbArt = lightbox.querySelector('.lightbox-art');
    var lbTitle = lightbox.querySelector('.art-title');
    var lbMeta = lightbox.querySelector('.art-meta');
    var lbDesc = lightbox.querySelector('.lightbox-desc');

    document.querySelectorAll('[data-open-lightbox]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var tile = btn.closest('.gallery-item');
        lbArt.className = 'lightbox-art art-tile ' + (tile.dataset.paint || '');
        lbArt.innerHTML = '<div class="art-paint"></div>';
        lbTitle.textContent = tile.dataset.title || '';
        lbMeta.textContent = tile.dataset.meta || '';
        lbDesc.textContent = tile.dataset.desc || '';
        lightbox.classList.add('open');
        lightbox.setAttribute('aria-hidden', 'false');
      });
    });
    lightbox.querySelectorAll('[data-close-lightbox]').forEach(function (el) {
      el.addEventListener('click', function () {
        lightbox.classList.remove('open');
        lightbox.setAttribute('aria-hidden', 'true');
      });
    });
  }

  /* ---- privacy modal (footer, all pages) ---- */
  var privacyModal = document.getElementById('privacyModal');
  if (privacyModal) {
    document.querySelectorAll('[data-open-privacy]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        privacyModal.classList.add('open');
        privacyModal.setAttribute('aria-hidden', 'false');
      });
    });
    privacyModal.querySelectorAll('[data-close-privacy]').forEach(function (el) {
      el.addEventListener('click', function () {
        privacyModal.classList.remove('open');
        privacyModal.setAttribute('aria-hidden', 'true');
      });
    });
  }

  /* close any overlay on backdrop click / Escape */
  document.querySelectorAll('.modal, .lightbox').forEach(function (overlay) {
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) {
        overlay.classList.remove('open');
        overlay.setAttribute('aria-hidden', 'true');
      }
    });
  });
  window.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal.open, .lightbox.open').forEach(function (o) {
        o.classList.remove('open');
        o.setAttribute('aria-hidden', 'true');
      });
    }
  });

  /* ---- testimonial slider ---- */
  var slides = document.querySelectorAll('.testimonial-slide');
  var dotsWrap = document.querySelector('.testimonial-dots');
  if (slides.length && dotsWrap) {
    var current = 0;
    var dots = [];
    slides.forEach(function (s, i) {
      var dot = document.createElement('button');
      dot.setAttribute('aria-label', 'Show testimonial ' + (i + 1));
      if (i === 0) dot.classList.add('active');
      dot.addEventListener('click', function () { show(i); });
      dotsWrap.appendChild(dot);
      dots.push(dot);
    });
    function show(i) {
      slides[current].classList.remove('active');
      dots[current].classList.remove('active');
      current = i;
      slides[current].classList.add('active');
      dots[current].classList.add('active');
    }
    setInterval(function () { show((current + 1) % slides.length); }, 6000);
  }

  /* ---- form validation + simulated submit ---- */
  function validateField(field) {
    var input = field.querySelector('input, select, textarea');
    if (!input) return true;
    var ok = input.checkValidity();
    field.classList.toggle('invalid', !ok);
    return ok;
  }

  document.querySelectorAll('form[data-demo-form]').forEach(function (form) {
    var fields = form.querySelectorAll('.field');
    var status = form.querySelector('.form-status');
    var submitBtn = form.querySelector('button[type="submit"]');

    fields.forEach(function (field) {
      var input = field.querySelector('input, select, textarea');
      if (!input) return;
      input.addEventListener('blur', function () { validateField(field); });
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var allValid = true;
      fields.forEach(function (field) { if (!validateField(field)) allValid = false; });
      if (!allValid) {
        var firstInvalid = form.querySelector('.field.invalid input, .field.invalid select, .field.invalid textarea');
        if (firstInvalid) firstInvalid.focus();
        return;
      }
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = form.dataset.sendingLabel || 'Sending…';
      }
      setTimeout(function () {
        if (status) {
          status.textContent = form.dataset.successMessage || 'Thanks — your message is on its way.';
          status.classList.add('success');
        }
        form.reset();
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = form.dataset.submitLabel || 'Submit';
        }
      }, 900);
    });
  });
})();
