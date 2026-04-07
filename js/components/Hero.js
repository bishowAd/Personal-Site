/**
 * Hero.js — Full-screen hero section with typewriter and stats.
 */

import { Typewriter } from '../utils/typewriter.js';

export const Hero = {
  render({ personal, stats, roles }) {
    const statItems = stats.map(({ value, label }) => `
      <div>
        <div class="font-display text-xl font-bold text-white">${value}</div>
        <div class="text-white/35 text-xs mt-0.5 leading-tight">${label}</div>
      </div>
    `).join('');

    const roleChips = roles.map(({ icon, label, bg }) => `
      <div class="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/10 text-white text-xs font-medium whitespace-nowrap"
           style="background:${bg}; backdrop-filter:blur(8px);">
        <span class="w-5 h-5 rounded-md flex items-center justify-center text-[10px]">${icon}</span>
        ${label}
      </div>
    `).join('');

    return `
      <section class="hero-bg relative min-h-screen flex items-center overflow-hidden">
        <!-- Ambient glow -->
        <div class="absolute inset-0 pointer-events-none hero-glow"></div>

        <div class="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 py-28 md:py-36 w-full">
          <div class="grid md:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-center">

            <!-- Left: text -->
            <div class="space-y-7">
              <!-- Status badge -->
              <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm text-indigo-300 font-medium">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                ${personal.statusBadge}
              </div>

              <!-- Name -->
              <div>
                <p class="text-white/40 text-lg font-medium mb-1">Hi, I'm</p>
                <h1 class="font-display text-6xl sm:text-7xl font-extrabold text-white leading-none tracking-tight">
                  ${personal.nameShort}<span class="text-indigo-400">.</span>
                </h1>
              </div>

              <!-- Typewriter -->
              <p class="text-2xl sm:text-3xl font-display text-white/80">
                I <span id="typewriter" class="gradient-text font-bold cursor"></span>
              </p>

              <p class="text-white/50 text-lg leading-relaxed max-w-md">
                A data-driven problem solver and designer who turns messy numbers into clear stories — and ideas into polished products people enjoy using.
              </p>

              <!-- CTAs -->
              <div class="flex flex-wrap gap-3 pt-1">
                <a href="#projects"
                  class="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all hover:shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-px">
                  See My Work
                </a>
                <a href="#contact"
                  class="px-6 py-3 rounded-xl border border-white/15 text-white/80 hover:text-white hover:border-white/30 font-semibold text-sm transition-all hover:-translate-y-px">
                  Let's Talk →
                </a>
              </div>

              <!-- Stats -->
              <div class="grid grid-cols-4 gap-6 pt-6 border-t border-white/8 max-w-xs">
                ${statItems}
              </div>
            </div>

            <!-- Right: photo + role chips -->
            <div class="flex justify-center md:justify-end">
              <div class="relative w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 flex-shrink-0">
                <div class="photo-ring absolute inset-0">
                  <img src="${personal.photo}" alt="${personal.name}"
                    class="w-full h-full rounded-full object-cover"
                    style="background:var(--color-hero-bg)" />
                </div>
                <!-- Role chips — visible only on desktop, stacked beside photo -->
                <div class="hidden md:flex flex-col gap-2 absolute -right-32 top-1/2 -translate-y-1/2">
                  ${roleChips}
                </div>
              </div>
            </div>

          </div>
        </div>

        <!-- Scroll hint -->
        <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/25 text-[11px] tracking-widest uppercase">
          <span>Scroll</span>
          <div class="w-px h-8 bg-gradient-to-b from-white/25 to-transparent"></div>
        </div>
      </section>
    `;
  },

  init({ phrases }) {
    new Typewriter('typewriter', phrases).start();
  },
};
