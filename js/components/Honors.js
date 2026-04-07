/**
 * Honors.js — Academic honors and involvement cards.
 */

export const Honors = {
  render({ honors }) {
    const cards = honors.map(({ icon, bg, title, desc }) => `
      <div class="reveal bg-white rounded-2xl p-5 border border-gray-100 flex items-start gap-4 hover:shadow-md transition-shadow">
        <span class="w-10 h-10 rounded-xl ${bg} flex items-center justify-center text-xl flex-shrink-0">${icon}</span>
        <div>
          <h4 class="font-display font-bold text-gray-900 text-sm">${title}</h4>
          <p class="text-gray-500 text-xs mt-0.5 leading-relaxed">${desc}</p>
        </div>
      </div>
    `).join('');

    return `
      <section class="py-24 bg-gray-50">
        <div class="max-w-5xl mx-auto px-5 sm:px-8">
          <div class="text-center mb-14 reveal">
            <span class="section-label">Beyond the Classroom</span>
            <h2 class="font-display text-4xl font-extrabold text-gray-900">Honors & Involvement</h2>
          </div>
          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">${cards}</div>
        </div>
      </section>
    `;
  },
};
