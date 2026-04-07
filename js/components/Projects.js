/**
 * Projects.js — Featured project cards driven entirely by data.
 */

const arrowIcon = `
  <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
  </svg>
`;

const githubIcon = `
  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
`;

export const Projects = {
  render({ projects, personal }) {
    const cards = projects.map(({ headerClass, emoji, categoryLabel, categoryColor, year, title, desc, tags, tagClass, link }) => {
      const tagHtml = tags.map((t) => `
        <span class="px-2 py-0.5 ${tagClass} rounded text-[11px] font-semibold">${t}</span>
      `).join('');

      return `
        <article class="reveal bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:shadow-gray-100 hover:-translate-y-1 transition-all duration-300 flex flex-col">
          <div class="${headerClass} h-36 flex items-center justify-center text-5xl">${emoji}</div>
          <div class="p-6 flex flex-col flex-1">
            <div class="flex items-center justify-between mb-3">
              <span class="text-[11px] font-bold ${categoryColor} uppercase tracking-wider">${categoryLabel}</span>
              <span class="text-[11px] text-gray-400">${year}</span>
            </div>
            <h3 class="font-display font-bold text-gray-900 mb-2 leading-snug">${title}</h3>
            <p class="text-gray-500 text-sm leading-relaxed flex-1 mb-4">${desc}</p>
            <div class="flex flex-wrap gap-1.5 mb-4">${tagHtml}</div>
            <a href="${link}" target="_blank" rel="noopener"
              class="inline-flex items-center gap-1.5 text-indigo-600 hover:text-indigo-500 font-semibold text-sm transition-colors group mt-auto">
              View on GitHub ${arrowIcon}
            </a>
          </div>
        </article>
      `;
    }).join('');

    return `
      <section id="projects" class="py-24 bg-gray-50">
        <div class="max-w-5xl mx-auto px-5 sm:px-8">
          <div class="text-center mb-14 reveal">
            <span class="section-label">What I've Built</span>
            <h2 class="font-display text-4xl font-extrabold text-gray-900">Featured Projects</h2>
            <p class="mt-3 text-gray-500 max-w-md mx-auto text-base">Real problems. Real code. Real results.</p>
          </div>

          <div class="grid md:grid-cols-3 gap-6">${cards}</div>

          <div class="text-center mt-10 reveal">
            <a href="${personal.github}" target="_blank" rel="noopener"
              class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-gray-200 hover:border-indigo-300 text-gray-600 hover:text-indigo-600 font-semibold text-sm transition-all hover:-translate-y-px">
              ${githubIcon} All projects on GitHub
            </a>
          </div>
        </div>
      </section>
    `;
  },
};
