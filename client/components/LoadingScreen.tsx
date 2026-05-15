"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem("hana-loaded");
    if (!seen) {
      setShow(true);
      sessionStorage.setItem("hana-loaded", "true");
      const timer = window.setTimeout(() => setShow(false), 2100);
      return () => window.clearTimeout(timer);
    }
  }, []);

  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-[var(--bg-primary)]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.86 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="flex flex-col items-center gap-5"
          >
            <Image src="/images/logo.jpg" alt="Hana Corner Café logo" width={120} height={120} className="rounded-[2rem] border border-[var(--border-subtle)] object-contain bg-[var(--bg-secondary)] p-3 shadow-card" />
            <p className="font-serif text-3xl uppercase tracking-[0.22em] text-[var(--accent-espresso)]">Hana Corner Café</p>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
