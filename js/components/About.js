/**
 * About.js — Personal bio section with photo and quick-facts card.
 */

export const About = {
  render({ personal, about }) {
    const paragraphs = about.paragraphs.map((p) => `
      <p class="text-gray-600 leading-relaxed">${p}</p>
    `).join('');

    const facts = about.facts.map(({ icon, text }) => `
      <div class="flex items-center gap-2.5 text-sm text-gray-600">
        <span class="w-7 h-7 rounded-lg bg-indigo-50 flex items-center justify-center text-base flex-shrink-0">${icon}</span>
        ${text}
      </div>
    `).join('');

    return `
      <section id="about" class="py-24 bg-gray-50">
        <div class="max-w-5xl mx-auto px-5 sm:px-8">
          <div class="grid md:grid-cols-[auto_1fr] gap-12 lg:gap-20 items-start">

            <!-- Photo + facts card -->
            <div class="reveal flex flex-col items-center md:items-start gap-4">
              <img src="${personal.photo}" alt="${personal.name}"
                class="w-48 h-48 md:w-56 md:h-56 rounded-2xl object-cover shadow-lg ring-1 ring-gray-200" />

              <div class="w-full max-w-[224px] bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-3">
                ${facts}
              </div>
            </div>

            <!-- Bio text -->
            <div class="reveal space-y-5">
              <div>
                <span class="section-label">Get to Know Me</span>
                <h2 class="font-display text-4xl font-extrabold text-gray-900 leading-tight">
                  ${about.headline}
                </h2>
              </div>
              ${paragraphs}
              <a href="#contact"
                class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold transition-all hover:shadow-md hover:shadow-indigo-500/25 hover:-translate-y-px">
                Work with me
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    `;
  },
};
