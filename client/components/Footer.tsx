import Image from "next/image";
import Link from "next/link";
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
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-14 md:grid-cols-3 md:px-10">
        <div className="space-y-4">
          <Image src="/images/logo.jpg" alt="Hana Corner Café logo" width={84} height={84} className="rounded-[1.75rem] border border-white/10 object-contain bg-[rgba(245,240,232,0.08)] p-2" />
          <div>
            <p className="font-serif text-2xl">Hana Corner Café</p>
            <p className="mt-2 max-w-sm text-sm text-[rgba(245,240,232,0.72)]">{cafe.tagline}</p>
          </div>
        </div>
        <div className="grid gap-3 text-sm">
          <p className="uppercase tracking-[0.25em] text-[var(--accent-blush)]">Quick links</p>
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-[var(--accent-blush)]">
              {link.label}
            </Link>
          ))}
          <p className="pt-4 text-[rgba(245,240,232,0.72)]">{cafe.hoursLabel}</p>
          <p className="text-[rgba(245,240,232,0.72)]">Cash only</p>
        </div>
        <div className="space-y-4">
          <p className="uppercase tracking-[0.25em] text-[var(--accent-blush)]">Instagram preview</p>
          <div className="grid grid-cols-4 gap-3">
            {footerPreview.map((src, index) => (
              <div key={`${src}-${index}`} className="relative aspect-square overflow-hidden rounded-2xl border border-white/10 bg-[rgba(245,240,232,0.08)]">
                <Image src={src} alt="" fill className="object-cover" />
              </div>
            ))}
          </div>
          <a href={cafe.instagram} target="_blank" rel="noreferrer" className="inline-block text-sm text-[var(--accent-blush)] transition hover:text-white">
            Follow {cafe.instagramHandle}
          </a>
        </div>
      </div>
      <div className="border-t border-white/10 px-6 py-5 text-center text-xs text-[rgba(245,240,232,0.62)]">
        © 2024 Hana Corner Café · Tirana, Albania · Crafted with love for coffee lovers
      </div>
    </footer>
  );
}
