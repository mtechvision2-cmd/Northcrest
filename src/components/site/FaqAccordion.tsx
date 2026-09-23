"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

type FaqAccordionProps = {
  items: { q: string; a: string }[];
};

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-ink/10 border-y border-ink/10">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 py-6 text-left"
            >
              <span
                className={`font-display text-xl font-semibold uppercase tracking-wide transition md:text-2xl ${
                  isOpen ? "text-brand" : "text-ink"
                }`}
              >
                {item.q}
              </span>
              <span
                className={`flex h-9 w-9 shrink-0 items-center justify-center border transition ${
                  isOpen
                    ? "border-brand bg-brand text-white"
                    : "border-ink/20 text-ink"
                }`}
              >
                {isOpen ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ${
                isOpen ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <p className="overflow-hidden leading-relaxed text-bodytext">
                {item.a}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
