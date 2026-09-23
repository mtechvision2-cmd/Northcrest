"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { HERO_SLIDES } from "@/lib/site-data";

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = useCallback((next: number) => {
    setIndex((next + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  const startTimer = useCallback(() => {
    if (timer.current) clearInterval(timer.current);
    timer.current = setInterval(() => {
      setIndex((i) => (i + 1) % HERO_SLIDES.length);
    }, 7000);
  }, []);

  useEffect(() => {
    startTimer();
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [startTimer]);

  const manual = (next: number) => {
    go(next);
    startTimer();
  };

  return (
    <section
      aria-label="Featured introduction"
      className="relative h-[100svh] min-h-[620px] w-full overflow-hidden bg-ink"
    >
      {/* Slides */}
      {HERO_SLIDES.map((slide, i) => (
        <div
          key={slide.title}
          className={`hero-slide absolute inset-0 ${i === index ? "is-active" : ""}`}
          aria-hidden={i !== index}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="h-full w-full object-cover"
            loading={i === 0 ? "eager" : "lazy"}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/70 to-ink/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-ink/40" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="max-w-2xl pt-24 lg:pt-28">
          {HERO_SLIDES.map((slide, i) => (
            <div
              key={slide.title}
              className={`${i === index ? "block" : "hidden"}`}
            >
              <p className="kicker text-brand-light">{slide.kicker}</p>
              <h1 className="mt-5 font-display text-6xl font-bold uppercase leading-[0.95] tracking-wide text-white sm:text-7xl lg:text-8xl">
                {slide.title}
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
                {slide.text}
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href={slide.primaryCta.href}
                  className="group inline-flex items-center gap-2 bg-brand px-7 py-4 font-display text-lg font-semibold uppercase tracking-wider text-white transition hover:bg-brand-dark"
                >
                  {slide.primaryCta.label}
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href={slide.secondaryCta.href}
                  className="inline-flex items-center gap-2 border border-white/40 px-7 py-4 font-display text-lg font-semibold uppercase tracking-wider text-white transition hover:border-brand hover:bg-brand"
                >
                  {slide.secondaryCta.label}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Side controls, right edge */}
      <div className="absolute right-6 top-1/2 z-20 hidden -translate-y-1/2 flex-col items-center gap-4 lg:flex">
        <button
          type="button"
          onClick={() => manual(index - 1)}
          aria-label="Previous slide"
          className="flex h-12 w-12 items-center justify-center border border-white/30 text-white transition hover:border-brand hover:bg-brand"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div className="flex flex-col items-center gap-2">
          {HERO_SLIDES.map((slide, i) => (
            <button
              key={slide.title}
              type="button"
              onClick={() => manual(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`w-1.5 transition-all ${
                i === index ? "h-10 bg-brand" : "h-5 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => manual(index + 1)}
          aria-label="Next slide"
          className="flex h-12 w-12 items-center justify-center border border-white/30 text-white transition hover:border-brand hover:bg-brand"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Bottom controls, mobile only */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 items-center gap-4 lg:hidden">
        <button
          type="button"
          onClick={() => manual(index - 1)}
          aria-label="Previous slide"
          className="flex h-11 w-11 items-center justify-center border border-white/30 text-white transition hover:border-brand hover:bg-brand"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div className="flex items-center gap-2">
          {HERO_SLIDES.map((slide, i) => (
            <button
              key={slide.title}
              type="button"
              onClick={() => manual(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1.5 transition-all ${
                i === index ? "w-10 bg-brand" : "w-5 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => manual(index + 1)}
          aria-label="Next slide"
          className="flex h-11 w-11 items-center justify-center border border-white/30 text-white transition hover:border-brand hover:bg-brand"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Side phone tag */}
      <div className="absolute bottom-10 right-6 z-20 hidden items-center gap-3 xl:flex">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand">
          <ArrowRight className="h-5 w-5 -rotate-45 text-white" />
        </span>
        <span className="leading-tight text-white">
          <span className="block text-xs uppercase tracking-widest text-white/60">
            Talk to a builder
          </span>
          <a
            href="tel:+19195550142"
            className="font-display text-xl font-semibold hover:text-brand"
          >
            (919) 555 0142
          </a>
        </span>
      </div>
    </section>
  );
}
