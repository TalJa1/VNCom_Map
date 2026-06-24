// ─────────────────────────────────────────────────────────────────────────
// THE BIG STORY · Founder profile
// ─────────────────────────────────────────────────────────────────────────
// To show real photos of the founder in the Big Story carousel, just drop the
// image URLs (or /public paths) into the `images` array below. The carousel is
// swipeable (drag left / right). While `images` is empty, emoji placeholder
// slides are shown so the drag interaction still works.

export interface FounderProfile {
  name: string
  /** Placeholder glyph shown until real photos are added. */
  emoji: string
  /** Role label, per language. */
  role: { en: string; vi: string }
  /**
   * Founder photo URLs. Add as many as you like — the carousel adapts.
   * e.g. ['/images/founder/field.jpg', 'https://.../portrait.jpg']
   */
  images: string[]
  /** How many emoji placeholder slides to show while `images` is empty. */
  placeholderSlides: number
}

export const FOUNDER: FounderProfile = {
  name: 'Lê Gia Đức Kiệt',
  emoji: '🧑‍🌾',
  role: {
    en: 'Founder · 16 · Youth Digital Agriculture Initiative',
    vi: 'Người sáng lập · 16 tuổi · Sáng kiến Nông nghiệp số Trẻ',
  },
  images: [
    // Add founder image URLs here, e.g.:
    // '/images/founder/1.jpg',
    // '/images/founder/2.jpg',
    // '/images/founder/3.jpg',
  ],
  placeholderSlides: 3,
}
