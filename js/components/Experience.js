/**
 * Experience.js — Work history section.
 * Supports multiple experience entries from the data array.
 */

export const Experience = {
  render({ experience }) {
    const entries = experience.map(({ title, company, period, bullets }) => {
      const bulletHtml = bullets.map((b) => `
        <li class="flex items-start gap-3 text-gray-600 text-sm leading-relaxed">
          <span class="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 flex-shrink-0"></span>
          <span>${b}</span>
        </li>
      `).join('');

      return `
        <div class="reveal bg-gray-50 rounded-2xl border border-gray-100 p-8">
          <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-6">
            <div>
              <h3 class="font-display text-xl font-bold text-gray-900">${title}</h3>
              <p class="text-indigo-600 font-semibold text-sm mt-0.5">${company}</p>
            </div>
            <span class="flex-shrink-0 px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs font-semibold">${period}</span>
          </div>
          <ul class="space-y-3">${bulletHtml}</ul>
        </div>
      `;
    }).join('');

    return `
      <section id="experience" class="py-24 bg-white">
        <div class="max-w-5xl mx-auto px-5 sm:px-8">
          <div class="text-center mb-14 reveal">
            <span class="section-label">Work History</span>
            <h2 class="font-display text-4xl font-extrabold text-gray-900">Experience</h2>
          </div>
          <div class="max-w-3xl mx-auto space-y-6">${entries}</div>
        </div>
      </section>
    `;
  },
};
