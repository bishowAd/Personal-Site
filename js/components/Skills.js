/**
 * Skills.js — Technical skills organized in categorized cards.
 */

export const Skills = {
  render({ skills }) {
    const cards = skills.map(({ icon, title, bg, items }) => {
      const tags = items.map((item) => `
        <span class="px-2.5 py-1 bg-white border border-gray-200 text-gray-600 rounded-lg text-xs font-medium">${item}</span>
      `).join('');

      return `
        <div class="reveal p-6 rounded-2xl bg-gray-50 border border-gray-100">
          <div class="flex items-center gap-2.5 mb-5">
            <span class="w-8 h-8 rounded-lg ${bg} flex items-center justify-center text-base">${icon}</span>
            <h3 class="font-display font-bold text-gray-900 text-sm">${title}</h3>
          </div>
          <div class="flex flex-wrap gap-2">${tags}</div>
        </div>
      `;
    }).join('');

    return `
      <section id="skills" class="py-24 bg-white">
        <div class="max-w-5xl mx-auto px-5 sm:px-8">
          <div class="text-center mb-14 reveal">
            <span class="section-label">My Toolkit</span>
            <h2 class="font-display text-4xl font-extrabold text-gray-900">Skills & Technologies</h2>
            <p class="mt-3 text-gray-500 max-w-md mx-auto text-base">
              The tools I reach for daily — and a few I pick up when the job calls for it.
            </p>
          </div>
          <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">${cards}</div>
        </div>
      </section>
    `;
  },
};
