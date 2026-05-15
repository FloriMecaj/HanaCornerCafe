"use client";

import { motion } from "framer-motion";
import { Coffee, Instagram, MapPinned, Music4, Phone, Users } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { cafe } from "@/lib/data";
import { isOpenInTirana } from "@/lib/utils";

export default function ContactPage() {
  const [openNow, setOpenNow] = useState(false);

  useEffect(() => {
    const update = () => setOpenNow(isOpenInTirana());
    update();
    const interval = window.setInterval(update, 60000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="mx-auto max-w-7xl px-6 pt-32 md:px-10">
      <section className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-[var(--accent-sage)]">Contact</p>
          <h1 className="mt-4 font-serif text-[clamp(3rem,6vw,5.4rem)] leading-none text-[var(--accent-espresso)]">Reach out for reservations, events, or a simple hello.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--text-muted)]">
            The café works for brunches, casual meetings, and upstairs gatherings. Send a note and keep the cash-only reminder in mind.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            <div className="rounded-[2rem] border border-[var(--border-subtle)] bg-white/70 p-6 shadow-card">
              <div className="flex items-center gap-3">
                <div className={`h-3 w-3 rounded-full ${openNow ? "bg-[var(--accent-sage)]" : "bg-[var(--accent-terracotta)]"}`} />
                <p className="text-sm uppercase tracking-[0.2em] text-[var(--text-muted)]">{openNow ? "Open now" : "Closed now"}</p>
              </div>
              <p className="mt-4 font-serif text-3xl text-[var(--accent-espresso)]">Open daily</p>
              <p className="mt-2 text-sm text-[var(--text-muted)]">Albania time · closes at 10 PM</p>
            </div>

            <div className="rounded-[2rem] border border-[rgba(196,113,74,0.4)] bg-[rgba(196,113,74,0.12)] p-6 shadow-card">
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent-terracotta)]">Payment note</p>
              <p className="mt-4 font-serif text-3xl text-[var(--accent-espresso)]">Cash only</p>
              <p className="mt-2 text-sm text-[var(--text-muted)]">Bring cash for food, drinks, and dessert.</p>
            </div>
          </div>

          <div className="mt-10 rounded-[2rem] border border-[var(--border-subtle)] bg-[linear-gradient(135deg,rgba(122,158,126,0.12),rgba(245,240,232,0.96))] p-8 shadow-card">
            <div className="grid gap-5 text-sm text-[var(--text-muted)]">
              <div className="flex items-start gap-3">
                <MapPinned size={18} className="mt-0.5 text-[var(--accent-terracotta)]" />
                <span>{cafe.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-[var(--accent-terracotta)]" />
                <a href={`tel:${cafe.phone}`} className="hover:text-[var(--accent-terracotta)]">
                  {cafe.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Instagram size={18} className="text-[var(--accent-terracotta)]" />
                <a href={cafe.instagram} target="_blank" rel="noreferrer" className="hover:text-[var(--accent-terracotta)]">
                  {cafe.instagramHandle}
                </a>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="rounded-[2.5rem] border border-[var(--border-subtle)] bg-white/70 p-8 shadow-card backdrop-blur"
        >
          <div className="grid gap-6">
            <div className="relative min-h-[280px] overflow-hidden rounded-[2rem] border border-[var(--border-subtle)] bg-[var(--bg-secondary)]">
              <Image src="/images/image6.jpg" alt="Hana Corner Café atmosphere" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(44,26,14,0.42)] to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent-blush)]">A Warm Welcome</p>
                <p className="mt-3 font-serif text-3xl leading-tight text-white">Coffee, brunch, music, and a corner table worth keeping for a while.</p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-[1.5rem] border border-[var(--border-subtle)] bg-[var(--bg-primary)]/80 p-5">
                <Coffee className="text-[var(--accent-terracotta)]" size={20} />
                <p className="mt-4 text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">Coffee</p>
                <p className="mt-2 text-sm leading-relaxed text-[var(--accent-espresso)]">Specialty drinks with standout plant-based options.</p>
              </div>
              <div className="rounded-[1.5rem] border border-[var(--border-subtle)] bg-[var(--bg-primary)]/80 p-5">
                <Users className="text-[var(--accent-terracotta)]" size={20} />
                <p className="mt-4 text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">Community</p>
                <p className="mt-2 text-sm leading-relaxed text-[var(--accent-espresso)]">A social, tourist-friendly, expat-friendly room.</p>
              </div>
              <div className="rounded-[1.5rem] border border-[var(--border-subtle)] bg-[var(--bg-primary)]/80 p-5">
                <Music4 className="text-[var(--accent-terracotta)]" size={20} />
                <p className="mt-4 text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">Music</p>
                <p className="mt-2 text-sm leading-relaxed text-[var(--accent-espresso)]">A soundtrack that keeps the place relaxed and lived-in.</p>
              </div>
            </div>

            <div className="rounded-[2rem] border border-[var(--border-subtle)] bg-[linear-gradient(145deg,rgba(255,255,255,0.72),rgba(122,158,126,0.12))] p-7">
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent-sage)]">Before You Go</p>
              <h2 className="mt-3 font-serif text-3xl text-[var(--accent-espresso)]">Simple, useful details.</h2>
              <div className="mt-5 grid gap-3 text-sm leading-relaxed text-[var(--text-muted)]">
                <p>Outdoor seating makes it easy to linger over brunch or a second coffee.</p>
                <p>The café is popular with tourists and expats, especially later in the day.</p>
                <p>Cash only is worth remembering before you arrive.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
