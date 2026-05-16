"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [dot, setDot] = useState({ x: 0, y: 0 });
  const [ring, setRing] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      setDot({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setRing((current) => ({
        x: current.x + (dot.x - current.x) * 0.34,
        y: current.y + (dot.y - current.y) * 0.34
      }));
    }, 16);

    return () => window.clearInterval(timer);
  }, [dot]);

  return (
    <div className="pointer-events-none fixed inset-0 z-[60] hidden md:block">
      <div className="custom-cursor-dot" style={{ transform: `translate(${dot.x}px, ${dot.y}px)` }} />
      <div className="custom-cursor-ring" style={{ transform: `translate(${ring.x}px, ${ring.y}px)` }} />
    </div>
  );
}
