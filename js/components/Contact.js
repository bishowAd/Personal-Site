/**
 * Contact.js — Dark CTA section with contact links.
 */

export const Contact = {
  render({ personal }) {
    const links = [
      { href: `mailto:${personal.email}`, icon: '📧', label: 'Email',    value: personal.email },
      { href: `tel:${personal.phone.replace(/\D/g, '')}`, icon: '📱', label: 'Phone', value: personal.phone },
      { href: personal.linkedin, icon: '💼', label: 'LinkedIn', value: 'bishowadhikari', external: true },
    ];

    const cards = links.map(({ href, icon, label, value, external }) => `
      <a href="${href}" ${external ? 'target="_blank" rel="noopener"' : ''}
        class="flex flex-col items-center gap-3 p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/8 hover:border-white/20 transition-all hover:-translate-y-px">
        <span class="text-2xl">${icon}</span>
        <div>
          <div class="text-white/40 text-[11px] uppercase tracking-wider mb-0.5">${label}</div>
          <div class="text-white text-xs font-medium break-all">${value}</div>
        </div>
      </a>
    `).join('');

    return `
      <section id="contact" class="py-24 hero-bg relative overflow-hidden">
        <div class="absolute inset-0 pointer-events-none contact-glow"></div>

        <div class="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 text-center">
          <div class="reveal mb-12">
            <span class="section-label" style="color:#818cf8;">Let's Connect</span>
            <h2 class="font-display text-4xl md:text-5xl font-extrabold text-white mt-1 leading-tight">
              Ready to build something<br class="hidden md:block">
              <span class="gradient-text">great together?</span>
            </h2>
            <p class="mt-4 text-white/50 text-base max-w-md mx-auto">
              Looking for a data science intern, a UI designer, or a developer who can do both? Let's talk.
            </p>
          </div>

          <div class="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-10 reveal">
            ${cards}
          </div>

          <div class="reveal">
            <a href="mailto:${personal.email}"
              class="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all hover:shadow-xl hover:shadow-indigo-500/25 hover:-translate-y-px">
              Send Me a Message
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </a>
            <p class="mt-4 text-white/25 text-xs">${personal.location} · Available for remote work worldwide</p>
          </div>
        </div>
      </section>
    `;
  },
};
