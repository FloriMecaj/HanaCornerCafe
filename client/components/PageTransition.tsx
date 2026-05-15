"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.32, ease: "easeOut" }}
    >
      <motion.div
        key={`${pathname}-curtain`}
        className="fixed inset-y-0 left-0 z-[45] w-full origin-left bg-[var(--bg-secondary)]"
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
        style={{ pointerEvents: "none" }}
      />
      {children}
    </motion.div>
  );
}
