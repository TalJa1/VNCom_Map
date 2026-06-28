// ─────────────────────────────────────────────────────────────────────────
// THE BIG STORY · Founder profile
// ─────────────────────────────────────────────────────────────────────────
// To show real photos of the founder in the Big Story carousel, just drop the
// image URLs (or /public paths) into the `images` array below. The carousel is
// swipeable (drag left / right). While `images` is empty, emoji placeholder
// slides are shown so the drag interaction still works.

const BUCKET = 'main-ada2c.firebasestorage.app'
function storageUrl(path: string): string {
  return `https://firebasestorage.googleapis.com/v0/b/${BUCKET}/o/${encodeURIComponent(path)}?alt=media`
}

export interface FounderProfile {
  name: string
  emoji: string
  role: { en: string; vi: string }
  images: string[]
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
    storageUrl('founder/f1.JPG'),
    storageUrl('founder/f2.JPG'),
    storageUrl('founder/f3.JPG'),
  ],
  placeholderSlides: 3,
}
