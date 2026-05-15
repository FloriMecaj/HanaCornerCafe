import InstagramGrid from "@/components/InstagramGrid";

export default function GalleryPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 pt-32 md:px-10">
      <section className="pb-12">
        <p className="text-xs uppercase tracking-[0.35em] text-[var(--accent-sage)]">Gallery</p>
        <h1 className="mt-4 max-w-4xl font-serif text-[clamp(3rem,6vw,5.4rem)] leading-none text-[var(--accent-espresso)]">
          Coffee, food, and the details that make Hana feel personal.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--text-muted)]">
          The gallery attempts to fetch recent Instagram media first, then falls back to local café images if the feed is unavailable.
        </p>
      </section>
      <InstagramGrid />
    </div>
  );
}
