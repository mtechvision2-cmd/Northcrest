"use client";

import { useState } from "react";
import { ArrowRight, MapPin } from "lucide-react";
import PageBanner from "./PageBanner";
import Reveal from "./Reveal";
import CtaBand from "./CtaBand";
import {
  IMAGES,
  PROJECT_CATEGORIES,
  PROJECTS,
} from "@/lib/site-data";

type Category = (typeof PROJECT_CATEGORIES)[number];

export default function ProjectsPage() {
  const [active, setActive] = useState<Category>("All");

  const filtered =
    active === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === active);

  return (
    <>
      <PageBanner
        title="Our Projects"
        crumb="Projects"
        image={IMAGES.projectWarehouse}
        description="Real buildings for real clients. Filter by the kind of work you have in mind."
      />

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          {/* Filters */}
          <Reveal className="thin-scroll -mx-6 flex gap-3 overflow-x-auto px-6 pb-2">
            {PROJECT_CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActive(cat)}
                className={`shrink-0 px-6 py-3 font-display text-base font-semibold uppercase tracking-wider transition ${
                  active === cat
                    ? "bg-brand text-white"
                    : "border border-ink/15 text-ink hover:border-brand hover:text-brand"
                }`}
              >
                {cat}
              </button>
            ))}
          </Reveal>

          {/* Grid */}
          <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p, i) => (
              <Reveal key={p.title} delay={(i % 3) * 90}>
                <article className="project-card group block border border-ink/10 bg-white">
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/25 to-transparent" />
                    <span className="absolute left-4 top-4 bg-brand px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-white">
                      {p.category}
                    </span>
                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <p className="flex items-center gap-1.5 text-sm text-white/75">
                        <MapPin className="h-3.5 w-3.5 text-brand" />
                        {p.location} · {p.year}
                      </p>
                      <h2 className="mt-1 font-display text-2xl font-semibold uppercase tracking-wide text-white">
                        {p.title}
                      </h2>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-semibold uppercase tracking-widest text-bodytext">
                        {p.size}
                      </span>
                      <span className="font-semibold uppercase tracking-widest text-brand">
                        {p.category}
                      </span>
                    </div>
                    <p className="mt-3 leading-relaxed text-bodytext">
                      {p.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="py-20 text-center text-lg text-bodytext">
              No projects in this category yet, but we are probably bidding on
              one right now. Check back soon.
            </p>
          )}

          {/* Bottom note */}
          <Reveal className="mt-20 flex flex-col items-center justify-between gap-8 border border-ink/10 bg-cream p-10 lg:flex-row">
            <div>
              <h2 className="font-display text-4xl font-bold uppercase tracking-wide text-ink">
                Your project could be next
              </h2>
              <p className="mt-3 max-w-xl leading-relaxed text-bodytext">
                We take on a limited number of projects each year so every
                client gets our full attention. Tell us what you are planning
                and we will tell you honestly whether we are the right builder
                for it.
              </p>
            </div>
            <a
              href="#/contact"
              className="group inline-flex shrink-0 items-center gap-2 bg-ink px-7 py-4 font-display text-lg font-semibold uppercase tracking-wider text-white transition hover:bg-brand"
            >
              Start the conversation
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
