/* Turza Podder Joy portfolio · interactions (esbuild, iife) */

document.documentElement.classList.add("js");

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------- Reveal on scroll ---------- */
const revealEls = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));

if (reduceMotion) {
  revealEls.forEach((el) => el.classList.add("is-visible"));
} else {
  const counters = new Map<Element, number>();
  revealEls.forEach((el) => {
    const parent = el.parentElement ?? document.body;
    const i = counters.get(parent) ?? 0;
    counters.set(parent, i + 1);
    el.style.setProperty("--d", `${Math.min(i, 5) * 70}ms`);
  });

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.1, rootMargin: "0px 0px -6% 0px" }
  );
  revealEls.forEach((el) => observer.observe(el));
}

/* ---------- Scroll spy (left nav) ---------- */
const sections = Array.from(document.querySelectorAll<HTMLElement>("main section[id]"));
const navLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>(".profile__nav a"));

function updateSpy(): void {
  const y = window.scrollY + Math.min(window.innerHeight * 0.25, 180);
  let current = "";
  for (const section of sections) {
    if (section.offsetTop <= y) current = section.id;
  }
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 4) {
    current = sections.length ? sections[sections.length - 1].id : current;
  }
  for (const link of navLinks) {
    link.classList.toggle("is-active", link.getAttribute("href") === `#${current}`);
  }
}

let ticking = false;
function onScroll(): void {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => {
    updateSpy();
    ticking = false;
  });
}
window.addEventListener("scroll", onScroll, { passive: true });
updateSpy();

/* ---------- Spotlight (cursor glow) ---------- */
const finePointer = window.matchMedia("(pointer: fine)").matches;

if (finePointer) {
  const root = document.documentElement;
  window.addEventListener(
    "mousemove",
    (e) => {
      root.style.setProperty("--sx", `${e.clientX}px`);
      root.style.setProperty("--sy", `${e.clientY}px`);
    },
    { passive: true }
  );
}

/* ---------- Footer year ---------- */
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = String(new Date().getFullYear());
