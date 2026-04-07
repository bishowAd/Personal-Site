/**
 * typewriter.js — Animated typewriter effect.
 * Single Responsibility: manages one typewriter instance.
 */

export class Typewriter {
  /**
   * @param {string}   targetId  - ID of the element to type into
   * @param {string[]} phrases   - Array of phrases to cycle through
   * @param {object}   [opts]
   * @param {number}   [opts.typeSpeed=75]   - ms per character (typing)
   * @param {number}   [opts.deleteSpeed=45] - ms per character (deleting)
   * @param {number}   [opts.pauseMs=2000]   - ms to pause at full phrase
   */
  constructor(targetId, phrases, opts = {}) {
    this.el          = document.getElementById(targetId);
    this.phrases     = phrases;
    this.typeSpeed   = opts.typeSpeed   ?? 75;
    this.deleteSpeed = opts.deleteSpeed ?? 45;
    this.pauseMs     = opts.pauseMs     ?? 2000;

    this.pi  = 0;   // phrase index
    this.ci  = 0;   // char index
    this.del = false;
    this._timer = null;
  }

  start() {
    if (!this.el) return;
    this._tick();
  }

  stop() {
    clearTimeout(this._timer);
  }

  _tick() {
    const phrase = this.phrases[this.pi];

    if (this.del) {
      this.el.textContent = phrase.slice(0, --this.ci);
      if (this.ci === 0) {
        this.del = false;
        this.pi  = (this.pi + 1) % this.phrases.length;
      }
    } else {
      this.el.textContent = phrase.slice(0, ++this.ci);
      if (this.ci === phrase.length) {
        this.del = true;
        this._timer = setTimeout(() => this._tick(), this.pauseMs);
        return;
      }
    }

    this._timer = setTimeout(() => this._tick(), this.del ? this.deleteSpeed : this.typeSpeed);
  }
}
