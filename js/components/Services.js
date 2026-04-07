/**
 * Services.js — "What I Do" section with three service cards.
 */

const accentMap = {
  indigo: { border: 'hover:border-indigo-200', shadow: 'hover:shadow-indigo-50', icon: 'bg-indigo-50 group-hover:bg-indigo-100', tag: 'bg-indigo-50 text-indigo-700' },
  purple: { border: 'hover:border-purple-200', shadow: 'hover:shadow-purple-50', icon: 'bg-purple-50 group-hover:bg-purple-100', tag: 'bg-purple-50 text-purple-700' },
  pink:   { border: 'hover:border-pink-200',   shadow: 'hover:shadow-pink-50',   icon: 'bg-pink-50   group-hover:bg-pink-100',   tag: 'bg-pink-50   text-pink-700'   },
};

export const Services = {
  render({ services }) {
    const cards = services.map(({ icon, title, desc, tags, accent }) => {
      const a = accentMap[accent];
      const tagHtml = tags.map((t) => `
        <span class="px-2 py-0.5 ${a.tag} rounded text-xs font-medium">${t}</span>
      `).join('');

      return `
        <div class="reveal group flex flex-col p-7 rounded-2xl border border-gray-100 ${a.border} hover:shadow-lg ${a.shadow} transition-all duration-250">
          <div class="w-11 h-11 rounded-xl ${a.icon} flex items-center justify-center text-xl mb-5 transition-colors">${icon}</div>
          <h3 class="font-display font-bold text-gray-900 mb-2">${title}</h3>
          <p class="text-gray-500 text-sm leading-relaxed mb-5 flex-1">${desc}</p>
          <div class="flex flex-wrap gap-1.5">${tagHtml}</div>
        </div>
      `;
    }).join('');

    return `
      <section id="services" class="py-24 bg-white">
        <div class="max-w-5xl mx-auto px-5 sm:px-8">
          <div class="text-center mb-14 reveal">
            <span class="section-label">What I Do</span>
            <h2 class="font-display text-4xl font-extrabold text-gray-900">How I Can Help You</h2>
            <p class="mt-3 text-gray-500 max-w-lg mx-auto text-base">
              Whether you need data turned into insights, a clean UI designed, or a product shipped end-to-end.
            </p>
          </div>
          <div class="grid md:grid-cols-3 gap-6">${cards}</div>
        </div>
      </section>
    `;
  },
};
