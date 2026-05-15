"use client";

import Image from "next/image";
import MenuSection from "@/components/MenuSection";
import { menuSections } from "@/lib/data";

export default function MenuPage() {
  return (
    <div className="pt-32">
      <section className="parallax-panel mx-auto grid max-w-7xl gap-12 px-6 py-10 md:px-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="sticky top-28 h-fit space-y-8">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--accent-sage)]">Menu</p>
            <h1 className="mt-4 font-serif text-[clamp(3rem,6vw,5.4rem)] leading-none text-[var(--accent-espresso)]">Editorial plates, careful pours, and cakes worth circling back for.</h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--text-muted)]">
              The menu is presented the way the café feels: calm, precise, and generous. Oatmilk Latte and House Torte lead the story.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-[var(--border-subtle)] bg-[var(--bg-secondary)]/85">
              <Image src="/images/image1.jpg" alt="Coffee at Hana Corner Café" fill className="object-cover" />
            </div>
            <div className="relative aspect-[4/5] translate-y-8 overflow-hidden rounded-[2rem] border border-[var(--border-subtle)] bg-[var(--bg-secondary)]/85">
              <Image src="/images/image2.jpg" alt="Brunch at Hana Corner Café" fill className="object-cover" />
            </div>
          </div>

          <div className="rounded-[2rem] border border-[rgba(196,113,74,0.4)] bg-[rgba(196,113,74,0.12)] p-6 shadow-card">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent-terracotta)]">Friendly reminder</p>
            <h2 className="mt-3 font-serif text-3xl text-[var(--accent-espresso)]">Cash Only</h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
              Bring cash for brunch, coffee, and dessert. The room is relaxed, the payment method is simple.
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
