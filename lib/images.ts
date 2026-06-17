/**
 * Remote photos via Picsum Photos (https://picsum.photos/) — free, no API key.
 * Same seed always resolves to the same image (good for stable layouts).
 * Next.js `images.remotePatterns` must allow `picsum.photos` (and often `fastly.picsum.photos`).
 */
export function picsumImage(
  seed: string,
  width = 800,
  height = 600,
): string {
  const safe = encodeURIComponent(seed.slice(0, 64));
  return `https://picsum.photos/seed/${safe}/${width}/${height}`;
}
