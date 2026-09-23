import { ArrowRight, CalendarCheck, CheckCircle2, Quote, Receipt, ShieldCheck } from "lucide-react";
import HeroSlider from "./HeroSlider";
import Counters from "./Counters";
import SectionHead from "./SectionHead";
import Reveal from "./Reveal";
import CtaBand from "./CtaBand";
import {
  ABOUT_PREVIEW,
  HOME_FEATURES,
  IMAGES,
  PROCESS_STEPS,
  PROJECTS,
  PROGRESS_BARS,
  SERVICES,
  TESTIMONIALS,
  WHY_POINTS,
} from "@/lib/site-data";

const FEATURE_ICONS = {
  calendar: CalendarCheck,
  shield: ShieldCheck,
  receipt: Receipt,
} as const;

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <Counters />

      {/* Feature strip */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-3">
            {HOME_FEATURES.map((f, i) => {
              const Icon = FEATURE_ICONS[f.icon as keyof typeof FEATURE_ICONS];
              return (
                <Reveal key={f.title} delay={i * 100}>
                  <div className="group flex h-full gap-5 border border-ink/10 bg-white p-8 transition hover:border-brand/60 hover:shadow-xl hover:shadow-ink/10">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center bg-cream transition group-hover:bg-brand">
                      <Icon className="h-7 w-7 text-brand transition group-hover:text-white" />
                    </span>
                    <div>
                      <h3 className="font-display text-2xl font-semibold uppercase tracking-wide text-ink">
                        {f.title}
                      </h3>
                      <p className="mt-2 leading-relaxed text-bodytext">{f.text}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* About preview */}
      <section className="bg-cream py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
          <Reveal className="relative">
            <div className="grid grid-cols-[1.25fr_1fr] gap-4">
              <img
                src={IMAGES.aboutForeman}
                alt="Northcrest supervisor reviewing work on site"
                className="h-[460px] w-full object-cover lg:h-[540px]"
                loading="lazy"
              />
              <img
                src={IMAGES.aboutBlueprints}
                alt="Northcrest engineers planning a project"
                className="mt-12 h-[380px] w-full object-cover lg:h-[440px]"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-8 left-8 bg-brand px-8 py-6 text-white shadow-xl shadow-brand/30">
              <p className="font-display text-6xl font-bold leading-none">
                {ABOUT_PREVIEW.badgeNumber}
              </p>
              <p className="mt-1 max-w-[160px] text-sm font-medium leading-snug">
                {ABOUT_PREVIEW.badgeLabel}
              </p>
            </div>
          </Reveal>

          <div>
            <SectionHead
              kicker={ABOUT_PREVIEW.kicker}
              title={ABOUT_PREVIEW.title}
            />
            <Reveal delay={100}>
              <p className="mt-6 leading-relaxed text-bodytext">
                {ABOUT_PREVIEW.paragraph1}
              </p>
              <p className="mt-4 leading-relaxed text-bodytext">
                {ABOUT_PREVIEW.paragraph2}
              </p>
              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {ABOUT_PREVIEW.checklist.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-ink">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-9 flex flex-wrap items-center gap-8">
                <a
                  href="#/about"
                  className="group inline-flex items-center gap-2 bg-ink px-7 py-4 font-display text-lg font-semibold uppercase tracking-wider text-white transition hover:bg-brand"
                >
                  More about us
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
                <div>
                  <p className="font-display text-2xl font-semibold text-ink">
                    {ABOUT_PREVIEW.signatureName}
                  </p>
                  <p className="text-sm uppercase tracking-widest text-bodytext">
                    {ABOUT_PREVIEW.signatureRole}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHead
              kicker="What we do"
              title="Our Services That We Provide"
              text="Six ways we help clients build, expand and renew. Every service comes with the same straight talk and the same standards."
            />
            <Reveal delay={150} className="shrink-0">
              <a
                href="#/services"
                className="group inline-flex items-center gap-2 border border-ink px-7 py-4 font-display text-lg font-semibold uppercase tracking-wider text-ink transition hover:border-brand hover:bg-brand hover:text-white"
              >
                All services
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 100}>
                <a
                  href="#/services"
                  className="lift group block h-full border border-ink/10 bg-white"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                    <span className="absolute left-0 top-0 bg-brand px-4 py-2 font-display text-sm font-semibold uppercase tracking-widest text-white">
                      0{i + 1}
                    </span>
                  </div>
                  <div className="p-7">
                    <h3 className="font-display text-2xl font-semibold uppercase tracking-wide text-ink transition group-hover:text-brand">
                      {s.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-bodytext">{s.excerpt}</p>
                    <span className="mt-5 inline-flex items-center gap-2 font-display text-base font-semibold uppercase tracking-wider text-brand">
                      Read more
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
                    </span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="relative overflow-hidden bg-ink py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
          <div>
            <SectionHead
              kicker="Why choose us"
              title="The Builder Other Builders Call"
              light
            />
            <div className="mt-9 space-y-6">
              {WHY_POINTS.map((p, i) => (
                <Reveal key={p.title} delay={i * 80} className="flex gap-5">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-brand/15 font-display text-lg font-bold text-brand">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-semibold uppercase tracking-wide text-white">
                      {p.title}
                    </h3>
                    <p className="mt-1.5 leading-relaxed text-white/60">{p.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={120}>
            <div className="relative">
              <img
                src={IMAGES.whyChooseSteel}
                alt="Steel structure built by Northcrest crews"
                className="h-[420px] w-full object-cover lg:h-[520px]"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -left-6 hidden w-72 bg-brand p-7 text-white shadow-xl shadow-black/30 sm:block">
                <p className="font-display text-4xl font-bold">1,400+</p>
                <p className="mt-1 text-sm font-medium leading-snug">
                  Days without a lost time incident across all sites
                </p>
              </div>
            </div>

            <div className="mt-14 space-y-6">
              {PROGRESS_BARS.map((bar) => (
                <div key={bar.label}>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm font-semibold uppercase tracking-wider text-white/80">
                      {bar.label}
                    </span>
                    <span className="font-display text-xl font-bold text-brand">
                      {bar.value}%
                    </span>
                  </div>
                  <div className="h-1.5 w-full bg-white/10">
                    <div
                      className="h-full bg-brand"
                      style={{ width: `${bar.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Projects */}
      <section className="bg-cream py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHead
              kicker="Recent work"
              title="Explore Recent Projects"
              text="A few of the buildings our crews have delivered lately. Every one of these clients came back for another project."
            />
            <Reveal delay={150} className="shrink-0">
              <a
                href="#/projects"
                className="group inline-flex items-center gap-2 border border-ink px-7 py-4 font-display text-lg font-semibold uppercase tracking-wider text-ink transition hover:border-brand hover:bg-brand hover:text-white"
              >
                View all projects
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.slice(0, 6).map((p, i) => (
              <Reveal key={p.title} delay={(i % 3) * 100}>
                <a href="#/projects" className="project-card group block">
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent opacity-80 transition group-hover:opacity-95" />
                    <span className="absolute left-4 top-4 bg-brand px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-white">
                      {p.category}
                    </span>
                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <h3 className="font-display text-2xl font-semibold uppercase tracking-wide text-white">
                        {p.title}
                      </h3>
                      <p className="mt-1 text-sm text-white/70">
                        {p.location} · {p.year}
                      </p>
                      <p className="mt-3 max-h-0 overflow-hidden text-sm leading-relaxed text-white/75 transition-all duration-500 group-hover:max-h-24">
                        {p.description}
                      </p>
                    </div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHead
            kicker="How we work"
            title="A Simple Process, No Surprises"
            text="Four steps from first phone call to final walkthrough. You will always know which step you are on."
            align="center"
          />
          <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((step, i) => (
              <Reveal key={step.number} delay={i * 100} className="relative">
                <span className="font-display text-7xl font-bold text-ink/10">
                  {step.number}
                </span>
                <h3 className="mt-2 font-display text-2xl font-semibold uppercase tracking-wide text-ink">
                  {step.title}
                </h3>
                <p className="mt-3 leading-relaxed text-bodytext">{step.text}</p>
                {i < PROCESS_STEPS.length - 1 && (
                  <span className="absolute -right-5 top-8 hidden text-brand lg:block">
                    <ArrowRight className="h-6 w-6" />
                  </span>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative overflow-hidden bg-cream py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHead
            kicker="Testimonials"
            title="What Our Clients Say"
            align="center"
          />
          <div className="mt-14 grid gap-7 lg:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 100}>
                <figure className="flex h-full flex-col border border-ink/10 bg-white p-8">
                  <Quote className="h-9 w-9 text-brand" />
                  <blockquote className="mt-5 flex-1 leading-relaxed text-ink/80">
                    {t.quote}
                  </blockquote>
                  <figcaption className="mt-7 flex items-center gap-4 border-t border-ink/10 pt-6">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ink font-display text-lg font-bold text-brand">
                      {t.initials}
                    </span>
                    <span>
                      <span className="block font-display text-lg font-semibold uppercase tracking-wide text-ink">
                        {t.name}
                      </span>
                      <span className="text-sm text-bodytext">{t.role}</span>
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
