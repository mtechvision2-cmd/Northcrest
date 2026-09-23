"use client";

import { useEffect, useRef, useState } from "react";
import { STATS } from "@/lib/site-data";

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const duration = 1800;
            const t0 = performance.now();
            const tick = (now: number) => {
              const p = Math.min((now - t0) / duration, 1);
              const eased = 1 - Math.pow(1 - p, 3);
              setValue(Math.round(eased * target));
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
            observer.unobserve(node);
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="tabular">
      {value.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function Counters() {
  return (
    <section aria-label="Company statistics" className="relative z-20 -mt-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 divide-ink/10 overflow-hidden shadow-2xl shadow-ink/25 lg:grid-cols-4 lg:divide-x">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="bg-white px-6 py-10 text-center first:border-b-2 border-b-2 border-l-0 border-brand lg:border-b-0"
            >
              <p className="font-display text-5xl font-bold text-ink lg:text-6xl">
                <CountUp target={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-sm font-semibold uppercase tracking-widest text-bodytext">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
