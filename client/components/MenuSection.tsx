"use client";

import { motion } from "framer-motion";
import type { MenuSectionData } from "@/lib/data";

export default function MenuSection({ section, index }: { section: MenuSectionData; index: number }) {
  const Icon = section.icon;

  return (
    <motion.section
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: index * 0.07 }}
      className="rounded-[2rem] border border-[var(--border-subtle)] bg-white/65 p-8 shadow-card backdrop-blur"
    >
      <div className="mb-6 flex items-start gap-4">
        <div className="rounded-full bg-[var(--glow-sage)] p-3 text-[var(--accent-sage)]">
          <Icon size={20} />
        </div>
        <div>
          <h3 className="font-serif text-3xl text-[var(--accent-espresso)]">{section.title}</h3>
          <p className="mt-2 max-w-2xl text-sm text-[var(--text-muted)]">{section.intro}</p>
        </div>
      </div>
      <div className="grid gap-4">
        {section.items.map((item, itemIndex) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.42, delay: itemIndex * 0.05 }}
            className="card-hover rounded-[1.5rem] border border-[var(--border-subtle)] bg-[var(--bg-primary)]/82 p-5"
          >
            <div className="flex flex-wrap items-center gap-2">
              <h4 className="text-lg font-medium text-[var(--accent-espresso)]">{item.name}</h4>
              {item.featured ? <span className="rounded-full bg-[var(--accent-terracotta)] px-3 py-1 text-xs uppercase tracking-[0.2em] text-white">Featured</span> : null}
              {item.badges?.map((badge) => (
                <span key={badge} className="rounded-full border border-[var(--border-subtle)] px-3 py-1 text-xs uppercase tracking-[0.2em] text-[var(--accent-sage)]">
                  {badge}
                </span>
              ))}
            </div>
            <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
