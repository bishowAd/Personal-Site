/**
 * Navbar.js — Sticky navigation bar with scroll state + mobile drawer.
 */

export const Navbar = {
  render({ personal }) {
    return `
      <header id="navbar" class="fixed top-0 inset-x-0 z-50">
        <div class="max-w-5xl mx-auto px-5 sm:px-8">

          <!-- Main bar -->
          <div class="flex items-center justify-between h-16 md:h-[72px]">

            <!-- Logo -->
            <a href="#" class="flex items-center gap-2.5 group">
              <span class="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-sm group-hover:bg-indigo-500 transition-colors">B</span>
              <span class="logo-name font-display font-bold text-white transition-colors">
                ${personal.nameShort}<span class="logo-dot text-indigo-400">.</span>
              </span>
            </a>

            <!-- Desktop links -->
            <nav class="hidden md:flex items-center gap-6">
              <a href="#about"      class="nav-link text-white/70 hover:text-white text-sm font-medium transition-colors">About</a>
              <a href="#services"   class="nav-link text-white/70 hover:text-white text-sm font-medium transition-colors">Services</a>
              <a href="#skills"     class="nav-link text-white/70 hover:text-white text-sm font-medium transition-colors">Skills</a>
              <a href="#projects"   class="nav-link text-white/70 hover:text-white text-sm font-medium transition-colors">Projects</a>
              <a href="#experience" class="nav-link text-white/70 hover:text-white text-sm font-medium transition-colors">Experience</a>
              <a href="#contact"
                class="ml-2 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold transition-all hover:shadow-md hover:shadow-indigo-500/25">
                Hire Me
              </a>
            </nav>

            <!-- Hamburger -->
            <button id="menuBtn" class="md:hidden p-2 rounded-md text-white hover:bg-white/10 transition-colors" aria-label="Toggle menu">
              <svg id="iconOpen" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
              <svg id="iconClose" class="w-5 h-5 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>

          <!-- Mobile drawer -->
          <div id="mobileNav">
            <nav class="flex flex-col pb-4 border-t border-white/10 pt-3 gap-0.5">
              <a href="#about"      class="nav-link text-white/80 hover:text-white text-sm font-medium px-3 py-2.5 rounded-lg hover:bg-white/10 transition-all mobile-link">About</a>
              <a href="#services"   class="nav-link text-white/80 hover:text-white text-sm font-medium px-3 py-2.5 rounded-lg hover:bg-white/10 transition-all mobile-link">Services</a>
              <a href="#skills"     class="nav-link text-white/80 hover:text-white text-sm font-medium px-3 py-2.5 rounded-lg hover:bg-white/10 transition-all mobile-link">Skills</a>
              <a href="#projects"   class="nav-link text-white/80 hover:text-white text-sm font-medium px-3 py-2.5 rounded-lg hover:bg-white/10 transition-all mobile-link">Projects</a>
              <a href="#experience" class="nav-link text-white/80 hover:text-white text-sm font-medium px-3 py-2.5 rounded-lg hover:bg-white/10 transition-all mobile-link">Experience</a>
              <a href="#contact" class="mt-2 px-4 py-2.5 rounded-lg bg-indigo-600 text-white text-sm font-semibold text-center mobile-link">Hire Me</a>
            </nav>
          </div>
        </div>
      </header>
    `;
  },

  init() {
    // Scroll state
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 60);
    }, { passive: true });

    // Mobile menu toggle
    const btn = document.getElementById('menuBtn');
    const nav = document.getElementById('mobileNav');
    const io  = document.getElementById('iconOpen');
    const ic  = document.getElementById('iconClose');
    let open  = false;

    btn.addEventListener('click', () => {
      open = !open;
      nav.classList.toggle('open', open);
      io.classList.toggle('hidden', open);
      ic.classList.toggle('hidden', !open);
    });

    // Close drawer on link click
    document.querySelectorAll('.mobile-link').forEach((link) => {
      link.addEventListener('click', () => {
        open = false;
        nav.classList.remove('open');
        io.classList.remove('hidden');
        ic.classList.add('hidden');
      });
    });

    // Smooth scroll for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach((a) => {
      a.addEventListener('click', (e) => {
        const target = document.querySelector(a.getAttribute('href'));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  },
};
