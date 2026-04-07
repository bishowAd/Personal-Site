/**
 * Footer.js — Minimal footer with social links.
 */

export const Footer = {
  render({ personal }) {
    const links = [
      { href: personal.github,   label: 'GitHub',   external: true },
      { href: personal.linkedin, label: 'LinkedIn', external: true },
      { href: `mailto:${personal.email}`, label: 'Email' },
    ];

    const linkHtml = links.map(({ href, label, external }) => `
      <a href="${href}" ${external ? 'target="_blank" rel="noopener"' : ''}
        class="text-gray-500 hover:text-white text-sm transition-colors">
        ${label}
      </a>
    `).join('');

    return `
      <footer class="bg-gray-900 py-6 px-5">
        <div class="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p class="text-gray-500 text-sm">&copy; ${new Date().getFullYear()} ${personal.name}. All rights reserved.</p>
          <div class="flex items-center gap-5">${linkHtml}</div>
        </div>
      </footer>
    `;
  },
};
