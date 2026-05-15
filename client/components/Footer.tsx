import Image from "next/image";
import Link from "next/link";
import { Instagram } from "lucide-react";
import { cafe, footerPreview } from "@/lib/data";

const links = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export default function Footer() {
  const marqueeText = "SPECIALTY COFFEE · BRUNCH · PLANT-BASED · TIRANA · HANA CORNER · ";

  return (
    <footer className="mt-24 overflow-hidden border-t border-white/10 bg-[var(--accent-espresso)] text-[var(--bg-primary)]">
      <div className="marquee border-b border-white/10 py-4 text-xs uppercase tracking-[0.35em] text-[rgba(245,240,232,0.55)]">
        <div className="marquee-track">
          <div className="marquee-group" aria-hidden="true">
            <span>{marqueeText}</span>
            <span>{marqueeText}</span>
            <span>{marqueeText}</span>
          </div>
          <div className="marquee-group" aria-hidden="true">
            <span>{marqueeText}</span>
            <span>{marqueeText}</span>
            <span>{marqueeText}</span>
          </div>
        </div>
      </div>
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-12 md:px-10 lg:grid-cols-[1.1fr_0.9fr_1fr]">
        <div className="space-y-5">
          <div className="flex items-start gap-4">
            <Image src="/images/logo.jpg" alt="Hana Corner Café logo" width={64} height={64} className="rounded-2xl border border-white/10 object-contain bg-[rgba(245,240,232,0.08)] p-1.5" />
            <div>
              <p className="font-serif text-[1.75rem] tracking-[0.08em]">Hana Corner Café</p>
              <p className="mt-1 text-sm text-[rgba(245,240,232,0.72)]">{cafe.tagline}</p>
            </div>
          </div>
          <p className="max-w-md text-sm leading-8 text-[rgba(245,240,232,0.68)]">
            Specialty coffee, brunch, and a warm corner atmosphere in the heart of Tirana.
          </p>
        </div>

        <div className="grid gap-4 lg:pl-6">
          <div>
            <p className="mb-5 font-serif text-2xl uppercase tracking-[0.04em] text-[rgba(245,240,232,0.92)]">Quick Links</p>
            <div className="grid grid-cols-2 gap-x-10 gap-y-4 text-[15px] text-[rgba(245,240,232,0.72)]">
              {links.map((link) => (
                <Link key={link.href} href={link.href} className="transition hover:text-[var(--accent-blush)]">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="space-y-2 text-sm text-[rgba(245,240,232,0.62)]">
            <p>{cafe.hoursLabel}</p>
            <p>Cash only</p>
          </div>
        </div>

        <div className="space-y-5">
          <div>
            <p className="font-serif text-2xl uppercase tracking-[0.04em] text-[rgba(245,240,232,0.92)]">Instagram</p>
            <p className="mt-5 max-w-sm text-sm leading-8 text-[rgba(245,240,232,0.68)]">
              Follow Hana Corner Café for new pours, brunch highlights, and warm moments from Tirana.
            </p>
          </div>
          <a
            href={cafe.instagram}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 rounded-full border border-[rgba(212,165,165,0.35)] px-5 py-3 text-sm uppercase tracking-[0.18em] text-[rgba(245,240,232,0.88)] transition hover:border-[var(--accent-blush)] hover:text-white"
          >
            <Instagram size={16} />
            {cafe.instagramHandle}
          </a>
          <div className="grid grid-cols-4 gap-2">
            {footerPreview.map((src, index) => (
              <div key={`${src}-${index}`} className="relative aspect-square overflow-hidden rounded-xl border border-white/10 bg-[rgba(245,240,232,0.08)]">
                <Image src={src} alt="" fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-6 py-5 text-center text-xs text-[rgba(245,240,232,0.62)]">
        © 2024 Hana Corner Café · Tirana, Albania · Crafted with love for coffee lovers
      </div>
    </footer>
  );
}
