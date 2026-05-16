"use client";

import { motion } from "framer-motion";
import { HeartHandshake, Instagram, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import ReviewCard from "@/components/ReviewCard";
import { cafe, reviewCards, stats } from "@/lib/data";

function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    let frame = 0;
    const totalFrames = 60;
    const timer = window.setInterval(() => {
      frame += 1;
      const progress = frame / totalFrames;
      setDisplay(value * progress);
      if (frame >= totalFrames) {
        window.clearInterval(timer);
      }
    }, 22);

    return () => window.clearInterval(timer);
  }, [value]);

  const text =
    value % 1 === 0 ? Math.round(display).toString() : display.toFixed(1);
  return (
    <span>
      {text}
      {suffix}
    </span>
  );
}

export default function AboutPage() {
  const [activeReview, setActiveReview] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveReview((current) => (current + 1) % reviewCards.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="md:pt-24">
      <section className="parallax-panel relative min-h-[75vh] overflow-hidden px-6 py-20 md:px-10">
        <div className="absolute inset-0">
          <Image
            src="/images/image3.jpg"
            alt="Hana Corner Café atmosphere"
            fill
            className="object-cover opacity-35"
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(245,240,232,0.9),rgba(212,165,165,0.45),rgba(122,158,126,0.24))]" />
        <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-end gap-10 py-20">
          <Image
            src="/images/logo.jpg"
            alt="Hana Corner Café logo"
            width={100}
            height={100}
            className="rounded-[2rem] border border-[var(--border-subtle)] bg-[var(--bg-secondary)] object-contain p-2 shadow-card"
          />
          <div className="max-w-4xl">
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--accent-sage)]">
              About
            </p>
            <h1 className="mt-4 font-serif text-[clamp(3rem,7vw,6rem)] leading-[0.95] text-[var(--accent-espresso)]">
              A little corner that feels like home.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--text-muted)]">
              Hana Corner Café blends careful specialty coffee with the soft
              social energy of a neighborhood living room. It feels relaxed,
              modern, welcoming, and built around community.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <div className="rounded-[2rem] border border-[var(--border-subtle)] bg-white/70 p-8 shadow-card">
              <div className="mb-4 inline-flex rounded-full bg-[var(--glow-sage)] p-3 text-[var(--accent-sage)]">
                <HeartHandshake size={20} />
              </div>
              <h2 className="font-serif text-3xl text-[var(--accent-espresso)]">
                LGBTQ+ friendly
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[var(--text-muted)]">
                A genuinely welcoming place for locals, travelers, expats, and
                anyone looking for a softer corner in the city.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-3">
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="rounded-[2rem] border border-[var(--border-subtle)] bg-[var(--bg-secondary)]/80 p-6 text-center shadow-card"
                >
                  <p className="font-serif text-4xl text-[var(--accent-terracotta)]">
                    <CountUp value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-3 text-xs uppercase tracking-[0.25em] text-[var(--text-muted)]">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="rounded-[2rem] border border-[var(--border-subtle)] bg-white/70 p-6 shadow-card">
              <div className="grid gap-4 text-sm text-[var(--text-muted)]">
                <div className="flex items-start gap-3">
                  <MapPin
                    size={17}
                    className="mt-0.5 text-[var(--accent-terracotta)]"
                  />
                  <span>{cafe.address}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone
                    size={17}
                    className="text-[var(--accent-terracotta)]"
                  />
                  <a
                    href={`tel:${cafe.phone}`}
                    className="hover:text-[var(--accent-terracotta)]"
                  >
                    {cafe.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Instagram
                    size={17}
                    className="text-[var(--accent-terracotta)]"
                  />
                  <a
                    href={cafe.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[var(--accent-terracotta)]"
                  >
                    {cafe.instagramHandle}
                  </a>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-[var(--border-subtle)] bg-white/70 shadow-card">
              <iframe
                title="Hana Corner Café map"
                src="https://www.google.com/maps?q=Rruga%20Gjin%20Bue%20Shpata%204%2C%20Tiran%C3%AB%201001%2C%20Albania&z=15&output=embed"
                className="h-[260px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[var(--accent-sage)]">
                Reviews
              </p>
              <h2 className="mt-4 font-serif text-4xl text-[var(--accent-espresso)]">
                4.5★ across 735 reviews
              </h2>
            </div>
            <div className="grid gap-5">
              {reviewCards.map((review, index) => (
                <ReviewCard
                  key={review.author}
                  review={review}
                  active={index === activeReview}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
