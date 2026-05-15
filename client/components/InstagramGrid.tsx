"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Camera, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { galleryItems } from "@/lib/data";
import { cn } from "@/lib/utils";

type FeedItem = {
  id: string;
  media_url: string;
  caption: string;
  category: string;
  permalink?: string;
};

const filters = ["All", "Coffee", "Food", "Vibes"];

export default function InstagramGrid() {
  const [items, setItems] = useState<FeedItem[]>([]);
  const [selected, setSelected] = useState<FeedItem | null>(null);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    async function load() {
      try {
        const response = await fetch("/api/instagram", { cache: "no-store" });
        const data = (await response.json()) as { items?: FeedItem[] };
        if (data.items?.length) {
          setItems(data.items);
          return;
        }
      } catch {
        // Fallback below.
      }

      setItems(
        galleryItems.map((item, index) => ({
          id: String(index),
          media_url: item.src,
          caption: item.caption,
          category: item.category
        }))
      );
    }

    void load();
  }, []);

  const filtered = useMemo(
    () => (filter === "All" ? items : items.filter((item) => item.category === filter)),
    [filter, items]
  );

  return (
    <>
      <div className="mb-10 flex flex-wrap gap-3">
        {filters.map((entry) => (
          <button
            key={entry}
            type="button"
            onClick={() => setFilter(entry)}
            className={cn(
              "rounded-full border px-5 py-2 text-sm uppercase tracking-[0.2em] transition",
              filter === entry
                ? "border-[var(--accent-terracotta)] bg-[var(--accent-terracotta)] text-white"
                : "border-[var(--border-subtle)] bg-white/60 text-[var(--accent-espresso)] hover:border-[var(--accent-sage)]"
            )}
          >
            {entry}
          </button>
        ))}
      </div>
      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
        {filtered.map((item, index) => (
          <motion.button
            key={item.id}
            layout
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45, delay: index * 0.04 }}
            type="button"
            onClick={() => setSelected(item)}
            className="group relative mb-5 block w-full overflow-hidden rounded-[2rem] border border-[var(--border-subtle)] bg-[var(--bg-secondary)]/70"
          >
            <div className="relative min-h-[280px] w-full">
              <Image src={item.media_url} alt={item.caption} fill className="object-cover transition duration-500 group-hover:scale-[1.03]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(196,113,74,0.75)] to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 opacity-0 transition duration-300 group-hover:opacity-100">
                <p className="max-w-[80%] text-left text-sm text-white">{item.caption}</p>
                <Camera size={18} className="text-white" />
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {selected ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-[rgba(44,26,14,0.82)] p-6 backdrop-blur-md"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              className="relative w-full max-w-4xl overflow-hidden rounded-[2rem] border border-white/10 bg-[var(--bg-primary)]"
            >
              <button type="button" onClick={() => setSelected(null)} className="absolute right-4 top-4 z-10 rounded-full bg-white/80 p-2 text-[var(--accent-espresso)]">
                <X size={18} />
              </button>
              <div className="relative aspect-[4/3]">
                <Image src={selected.media_url} alt={selected.caption} fill className="object-cover" />
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent-sage)]">{selected.category}</p>
                <p className="mt-3 font-serif text-2xl text-[var(--accent-espresso)]">{selected.caption}</p>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
