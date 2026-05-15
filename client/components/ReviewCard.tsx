"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

type Review = {
  author: string;
  source: string;
  quote: string;
  note: string;
};

export default function ReviewCard({ review, active }: { review: Review; active: boolean }) {
  return (
    <motion.article
      animate={{ opacity: active ? 1 : 0.52, y: active ? 0 : 8, scale: active ? 1 : 0.985 }}
      transition={{ duration: 0.42 }}
      className="rounded-[2rem] border border-[var(--border-subtle)] bg-white/68 p-8 shadow-card backdrop-blur"
    >
      <div className="mb-6 flex items-center justify-between">
        <div className="rounded-full bg-[var(--glow-sage)] p-3 text-[var(--accent-terracotta)]">
          <Quote size={18} />
        </div>
        <div className="flex gap-1 text-[var(--accent-terracotta)]">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star key={index} size={14} fill="currentColor" />
          ))}
        </div>
      </div>
      <p className="font-serif text-2xl leading-relaxed text-[var(--accent-espresso)]">“{review.quote}”</p>
      <div className="mt-6">
        <p className="text-sm uppercase tracking-[0.2em] text-[var(--accent-sage)]">{review.author}</p>
        <p className="mt-2 text-sm text-[var(--text-muted)]">{review.source}</p>
        <p className="mt-3 text-xs text-[var(--text-muted)]">{review.note}</p>
      </div>
    </motion.article>
  );
}
