"use client";

import Image from "next/image";
import MenuSection from "@/components/MenuSection";
import { menuSections } from "@/lib/data";

export default function MenuPage() {
  return (
    <div className="pt-24">
      <section className="parallax-panel mx-auto grid max-w-7xl gap-12 px-6 py-10 md:px-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="space-y-8 lg:sticky lg:top-28 lg:h-fit">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--accent-sage)]">
              Menu
            </p>
            <h1 className="mt-4 font-serif text-[clamp(3rem,6vw,5.4rem)] leading-none text-[var(--accent-espresso)]">
              Editorial plates, careful pours, and cakes worth circling back
              for.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--text-muted)]">
              The menu is presented the way the café feels: calm, precise, and
              generous. Oatmilk Latte and House Torte lead the story.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-[var(--border-subtle)] bg-[var(--bg-secondary)]/85">
              <Image
                src="/images/image1.jpg"
                alt="Coffee at Hana Corner Café"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/5] translate-y-8 overflow-hidden rounded-[2rem] border border-[var(--border-subtle)] bg-[var(--bg-secondary)]/85">
              <Image
                src="/images/image2.jpg"
                alt="Brunch at Hana Corner Café"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="rounded-[2rem] border border-[rgba(196,113,74,0.4)] bg-[rgba(196,113,74,0.12)] p-6 shadow-card">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent-terracotta)]">
              House highlight
            </p>
            <h2 className="mt-3 font-serif text-3xl text-[var(--accent-espresso)]">
              Outdoor Seating
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
              Find a quiet corner outside for brunch, people-watching, and a second coffee in the afternoon light.
            </p>
          </div>
        </div>

        <div className="grid gap-8">
          {menuSections.map((section, index) => (
            <MenuSection key={section.title} section={section} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
}
