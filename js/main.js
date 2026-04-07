/**
 * main.js — Application entry point.
 *
 * Responsibilities:
 *   1. Import all components and shared data
 *   2. Render each component into #app in order
 *   3. Call each component's init() after the DOM is ready
 *   4. Start cross-component utilities (scroll reveal)
 *
 * To add a new section:
 *   1. Create js/components/MySection.js
 *   2. Add its data to js/data/portfolio.js
 *   3. Import + add MySection.render(DATA) to the renderAll array below
 *   4. Call MySection.init(DATA) in initAll below
 */

import { DATA } from './data/portfolio.js';

import { Navbar }     from './components/Navbar.js';
import { Hero }       from './components/Hero.js';
import { Services }   from './components/Services.js';
import { About }      from './components/About.js';
import { Skills }     from './components/Skills.js';
import { Projects }   from './components/Projects.js';
import { Experience } from './components/Experience.js';
import { Honors }     from './components/Honors.js';
import { Contact }    from './components/Contact.js';
import { Footer }     from './components/Footer.js';

import { initScrollReveal } from './utils/scrollReveal.js';

/* ── 1. Render ─────────────────────────────── */
function renderAll() {
  const sections = [
    Navbar.render(DATA),
    Hero.render(DATA),
    Services.render(DATA),
    About.render(DATA),
    Skills.render(DATA),
    Projects.render(DATA),
    Experience.render(DATA),
    Honors.render(DATA),
    Contact.render(DATA),
    Footer.render(DATA),
  ];

  document.getElementById('app').innerHTML = sections.join('');
}

/* ── 2. Initialise interactive behaviour ───── */
function initAll() {
  Navbar.init(DATA);
  Hero.init(DATA);
  initScrollReveal('.reveal');
}

/* ── Bootstrap ─────────────────────────────── */
renderAll();
initAll();
