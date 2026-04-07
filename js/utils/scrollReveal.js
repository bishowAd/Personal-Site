/**
 * scrollReveal.js — Triggers the CSS `.reveal` animation on scroll.
 * Single Responsibility: observes elements and flips the visible class.
 */

export function initScrollReveal(selector = '.reveal') {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // animate once
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -32px 0px' }
  );

  document.querySelectorAll(selector).forEach((el) => observer.observe(el));
}
