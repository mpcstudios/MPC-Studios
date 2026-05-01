/**
 * Canonical list of resource / blog categories — kept in the same order
 * the Tina `blog` collection enum defines them so the /resources row view
 * matches the admin dropdown.
 *
 * `slug` is the URL segment under `/resources/category/<slug>` and is the
 * only persistent identifier — label text can change without breaking URLs.
 */

export type Category = { label: string; slug: string };

export const CATEGORIES: readonly Category[] = [
  { label: "Branding",          slug: "branding" },
  { label: "AI & Automation",   slug: "ai-automation" },
  { label: "Digital Marketing", slug: "digital-marketing" },
  { label: "Content",           slug: "content" },
  { label: "Strategy",          slug: "strategy" },
  { label: "Web Design",        slug: "web-design" },
] as const;

export function labelToSlug(label: string): string {
  const found = CATEGORIES.find((c) => c.label === label);
  if (found) return found.slug;
  // Fallback for legacy / unexpected labels — best-effort slugify
  return label
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function slugToLabel(slug: string): string | null {
  return CATEGORIES.find((c) => c.slug === slug)?.label ?? null;
}
