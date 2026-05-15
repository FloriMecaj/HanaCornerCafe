"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Instagram, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cafe } from "@/lib/data";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <header className={cn("fixed inset-x-0 top-0 z-50 transition-all duration-500", scrolled ? "px-4 pt-4" : "px-0 pt-0")}>
        <nav
          className={cn(
            "mx-auto flex max-w-7xl items-center justify-between transition-all duration-500",
            scrolled
              ? "rounded-full border border-[var(--border-subtle)] bg-[var(--bg-primary)]/75 px-5 py-3 shadow-card backdrop-blur-xl"
              : "px-6 py-5 md:px-10"
          )}
        >
          <Link href="/" className="flex items-center gap-3">
            <Image src="/images/logo.jpg" alt="Hana Corner Café logo" width={48} height={48} className="rounded-2xl border border-[var(--border-subtle)] object-contain bg-[var(--bg-secondary)] p-1.5" />
            <div className="hidden sm:block">
              <p className="font-serif text-lg uppercase tracking-[0.15em] text-[var(--accent-espresso)]">Hana Corner</p>
              <p className="text-xs uppercase tracking-[0.25em] text-[var(--text-muted)]">Tirana</p>
            </div>
          </Link>
          <div className="hidden items-center gap-8 md:flex">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link key={link.href} href={link.href} className="group relative text-sm uppercase tracking-[0.25em] text-[var(--accent-espresso)]">
                  {link.label}
                  <span className={cn("absolute -bottom-2 left-0 h-[2px] bg-[var(--accent-terracotta)] transition-all duration-300", active ? "w-full" : "w-0 group-hover:w-full")} />
                </Link>
              );
            })}
          </div>
          <div className="flex items-center gap-3">
            <a
              href={cafe.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="hidden rounded-full border border-[var(--border-subtle)] p-3 text-[var(--accent-terracotta)] transition hover:bg-[var(--accent-terracotta)] hover:text-white md:inline-flex"
            >
              <Instagram size={18} />
            </a>
            <button
              type="button"
              onClick={() => setOpen((current) => !current)}
              aria-label="Toggle menu"
              className="inline-flex rounded-full border border-[var(--border-subtle)] p-3 text-[var(--accent-espresso)] md:hidden"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 flex items-center justify-center bg-[var(--bg-primary)]/96 backdrop-blur-2xl md:hidden"
          >
            <div className="flex flex-col items-center gap-8">
              {links.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: index * 0.08 }}
                >
                  <Link href={link.href} className="font-serif text-4xl text-[var(--accent-espresso)]">
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <a href={cafe.instagram} target="_blank" rel="noreferrer" className="mt-4 uppercase tracking-[0.3em] text-[var(--accent-terracotta)]">
                Instagram
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
