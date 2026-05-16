"use client";

import { motion } from "framer-motion";
import { ArrowDown, Clock3, Instagram, MapPin, Phone, Wallet } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cafe, galleryItems, highlights, menuSections, reviewCards } from "@/lib/data";

const featuredItems = [
  menuSections[0].items.find((item) => item.name === "Oatmilk Latte"),
  menuSections[4].items.find((item) => item.name === "House Torte"),
  menuSections[3].items.find((item) => item.name === "Brunch Plate")
].filter(Boolean);

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      <section className="hero-blobs grain-overlay relative flex min-h-screen items-center px-6 pb-20 pt-32 md:px-10">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.12fr_0.88fr]">
          <div className="relative z-10">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="inline-flex rounded-full border border-[var(--border-subtle)] bg-white/60 px-4 py-2 text-xs uppercase tracking-[0.25em] text-[var(--accent-sage)] shadow-card backdrop-blur"
            >
              {cafe.badge}
            </motion.span>

            <div className="mt-8 flex flex-wrap gap-x-4 gap-y-1">
              {["HANA", "CORNER", "CAFÉ"].map((word, index) => (
                <motion.h1
                  key={word}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.18 + index * 0.08 }}
                  className="font-serif text-[clamp(3.5rem,8vw,7.2rem)] leading-[0.92] tracking-[0.08em] text-[var(--accent-espresso)]"
                >
                  {word}
                </motion.h1>
              ))}
            </div>

            <motion.p
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.022, delayChildren: 0.55 } }
              }}
              className="mt-6 max-w-2xl text-lg text-[var(--text-muted)] md:text-2xl"
            >
              {Array.from(cafe.subtitle).map((char, index) => (
                <motion.span key={`${char}-${index}`} variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} className="inline-block">
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }} className="mt-10 flex flex-wrap gap-4">
              <Link href="/menu" className="ripple rounded-full border border-[var(--accent-sage)] px-7 py-4 text-sm uppercase tracking-[0.24em] text-[var(--accent-espresso)] transition hover:bg-[var(--accent-terracotta)] hover:text-white">
                See Our Menu
              </Link>
              <Link href="/contact" className="ripple rounded-full border border-[var(--accent-sage)] bg-white/50 px-7 py-4 text-sm uppercase tracking-[0.24em] text-[var(--accent-espresso)] transition hover:bg-[var(--accent-sage)] hover:text-white">
                Find Us
              </Link>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }} className="mt-12 flex items-center gap-4 text-sm uppercase tracking-[0.3em] text-[var(--accent-terracotta)]">
              <ArrowDown className="animate-bounce" size={18} />
              Scroll into the café
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4, duration: 0.7 }} className="relative z-10">
            <div className="relative mx-auto max-w-[28rem] rounded-[2.5rem] border border-[var(--border-subtle)] bg-white/55 p-6 shadow-[0_30px_80px_rgba(44,26,14,0.12)] backdrop-blur-xl">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-[var(--bg-secondary)]">
                <Image src="/images/logo.jpg" alt="Hana Corner Café logo" fill className="object-contain p-6" />
              </div>
              <div className="mt-6 space-y-3">
                <p className="font-serif text-3xl text-[var(--accent-espresso)]">Sunlit brunch, careful coffee, and a room that invites you to stay longer.</p>
                <p className="text-sm leading-relaxed text-[var(--text-muted)]">
                  Warmly modern, community-driven, and quietly intentional from the first pour to the late-evening music.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <motion.article
                key={highlight.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="card-hover rounded-[2rem] border border-[var(--border-subtle)] bg-white/70 p-6 shadow-card backdrop-blur"
              >
                <div className="mb-5 inline-flex rounded-full bg-[var(--glow-sage)] p-3 text-[var(--accent-sage)]">
                  <Icon size={20} />
                </div>
                <h2 className="font-serif text-2xl text-[var(--accent-espresso)]">{highlight.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">{highlight.description}</p>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-10 md:px-10 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="rounded-[2.5rem] border border-[var(--border-subtle)] bg-[linear-gradient(145deg,rgba(255,255,255,0.68),rgba(212,165,165,0.15))] p-8 shadow-card backdrop-blur"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-[var(--accent-sage)]">A Corner To Settle Into</p>
          <h2 className="mt-4 max-w-xl font-serif text-4xl leading-tight text-[var(--accent-espresso)]">
            Nordic calm, Mediterranean warmth, and a room built for staying a while.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--text-muted)]">
            Hana feels intentional without becoming precious. Mornings lean bright and slow, brunch moves through the room in soft waves,
            and evenings stay social with good music and regulars mixed with travelers.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-[1.5rem] border border-[var(--border-subtle)] bg-white/60 p-5">
              <p className="font-serif text-3xl text-[var(--accent-terracotta)]">{cafe.rating}★</p>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">{cafe.reviewCount} Google reviews</p>
            </div>
            <div className="rounded-[1.5rem] border border-[var(--border-subtle)] bg-white/60 p-5">
              <p className="font-serif text-3xl text-[var(--accent-terracotta)]">Daily</p>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">Open until 10 PM</p>
            </div>
            <div className="rounded-[1.5rem] border border-[var(--border-subtle)] bg-white/60 p-5">
              <p className="font-serif text-3xl text-[var(--accent-terracotta)]">Cash</p>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">Only at checkout</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-5 sm:grid-cols-2"
        >
          <div className="relative min-h-[320px] overflow-hidden rounded-[2.5rem] border border-[var(--border-subtle)] bg-[var(--bg-secondary)] shadow-card sm:row-span-2">
            <Image src={galleryItems[2].src} alt={galleryItems[2].alt} fill className="object-cover" />
          </div>
          <div className="relative min-h-[150px] overflow-hidden rounded-[2rem] border border-[var(--border-subtle)] bg-[var(--bg-secondary)] shadow-card">
            <Image src={galleryItems[0].src} alt={galleryItems[0].alt} fill className="object-cover" />
          </div>
          <div className="relative min-h-[150px] overflow-hidden rounded-[2rem] border border-[var(--border-subtle)] bg-[var(--bg-secondary)] shadow-card">
            <Image src={galleryItems[1].src} alt={galleryItems[1].alt} fill className="object-cover" />
          </div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--accent-sage)]">Featured At Hana</p>
            <h2 className="mt-4 font-serif text-4xl text-[var(--accent-espresso)]">The drinks and plates people come back for.</h2>
          </div>
          <Link href="/menu" className="hidden text-sm uppercase tracking-[0.24em] text-[var(--accent-terracotta)] md:inline-block">
            View full menu
          </Link>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {featuredItems.map((item, index) => (
            <motion.article
              key={item?.name}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="card-hover rounded-[2rem] border border-[var(--border-subtle)] bg-white/72 p-7 shadow-card"
            >
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-[var(--accent-terracotta)] px-3 py-1 text-xs uppercase tracking-[0.2em] text-white">Featured</span>
                {item?.badges?.map((badge) => (
                  <span key={badge} className="rounded-full border border-[var(--border-subtle)] px-3 py-1 text-xs uppercase tracking-[0.2em] text-[var(--accent-sage)]">
                    {badge}
                  </span>
                ))}
              </div>
              <h3 className="mt-5 font-serif text-3xl text-[var(--accent-espresso)]">{item?.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">{item?.description}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="bg-[rgba(122,158,126,0.08)] py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:px-10 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-[2.5rem] border border-[var(--border-subtle)] bg-white/70 p-8 shadow-card"
          >
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--accent-sage)]">Plan Your Visit</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-[var(--accent-espresso)]">Everything you need before you head over.</h2>
            <div className="mt-8 grid gap-5">
              <div className="flex items-start gap-4 rounded-[1.5rem] border border-[var(--border-subtle)] bg-[var(--bg-primary)]/80 p-5">
                <MapPin className="mt-1 text-[var(--accent-terracotta)]" size={18} />
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-[var(--text-muted)]">Address</p>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--accent-espresso)]">{cafe.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-[1.5rem] border border-[var(--border-subtle)] bg-[var(--bg-primary)]/80 p-5">
                <Clock3 className="mt-1 text-[var(--accent-terracotta)]" size={18} />
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-[var(--text-muted)]">Hours</p>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--accent-espresso)]">{cafe.hoursLabel}</p>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-[1.5rem] border border-[var(--border-subtle)] bg-[var(--bg-primary)]/80 p-5">
                <Wallet className="mt-1 text-[var(--accent-terracotta)]" size={18} />
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-[var(--text-muted)]">Payment</p>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--accent-espresso)]">Open daily and ideal for long brunches, second coffees, and late catch-ups.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              className="rounded-[2.5rem] border border-[var(--border-subtle)] bg-[linear-gradient(145deg,rgba(255,255,255,0.72),rgba(122,158,126,0.12))] p-8 shadow-card"
            >
              <p className="font-serif text-3xl leading-relaxed text-[var(--accent-espresso)]">“{reviewCards[0].quote}”</p>
              <p className="mt-4 text-xs uppercase tracking-[0.24em] text-[var(--accent-sage)]">{reviewCards[0].author}</p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2">
              <motion.a
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                href={`tel:${cafe.phone}`}
                className="card-hover rounded-[2rem] border border-[var(--border-subtle)] bg-white/70 p-6 shadow-card"
              >
                <Phone className="text-[var(--accent-terracotta)]" size={20} />
                <p className="mt-4 text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">Phone</p>
                <p className="mt-2 font-serif text-2xl text-[var(--accent-espresso)]">{cafe.phone}</p>
              </motion.a>

              <motion.a
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: 0.06 }}
                href={cafe.instagram}
                target="_blank"
                rel="noreferrer"
                className="card-hover rounded-[2rem] border border-[var(--border-subtle)] bg-white/70 p-6 shadow-card"
              >
                <Instagram className="text-[var(--accent-terracotta)]" size={20} />
                <p className="mt-4 text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">Instagram</p>
                <p className="mt-2 font-serif text-2xl text-[var(--accent-espresso)]">{cafe.instagramHandle}</p>
              </motion.a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--accent-sage)]">Moodboard</p>
            <h2 className="mt-4 font-serif text-4xl text-[var(--accent-espresso)]">Coffee, food, and the quieter details in between.</h2>
          </div>
          <Link href="/gallery" className="hidden text-sm uppercase tracking-[0.24em] text-[var(--accent-terracotta)] md:inline-block">
            Open gallery
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {galleryItems.slice(3, 6).map((item, index) => (
            <motion.div
              key={item.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="group overflow-hidden rounded-[2rem] border border-[var(--border-subtle)] bg-[var(--bg-secondary)] shadow-card"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image src={item.src} alt={item.alt} fill className="object-cover transition duration-500 group-hover:scale-[1.03]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(44,26,14,0.45)] to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-xs uppercase tracking-[0.24em] text-[var(--accent-blush)]">{item.category}</p>
                  <p className="mt-2 font-serif text-2xl text-white">{item.caption}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
