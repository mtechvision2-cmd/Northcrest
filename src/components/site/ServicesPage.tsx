import { ArrowRight, CheckCircle2 } from "lucide-react";
import PageBanner from "./PageBanner";
import SectionHead from "./SectionHead";
import Reveal from "./Reveal";
import CtaBand from "./CtaBand";
import Accordion from "./FaqAccordion";
import {
  FAQS,
  IMAGES,
  PROCESS_STEPS,
  SERVICES,
} from "@/lib/site-data";

export default function ServicesPage() {
  return (
    <>
      <PageBanner
        title="Our Services"
        crumb="Services"
        image={IMAGES.serviceGeneral}
        description="From the first site walk to the final punch list item, these are the ways we get buildings built."
      />

      {/* Services detail blocks */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl space-y-24 px-6">
          {SERVICES.map((s, i) => (
            <div
              key={s.slug}
              id={s.slug}
              className={`grid items-center gap-12 lg:grid-cols-2 ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <Reveal>
                <div className="relative">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="h-[380px] w-full object-cover lg:h-[440px]"
                    loading="lazy"
                  />
                  <span className="absolute left-0 top-0 bg-brand px-5 py-3 font-display text-lg font-bold text-white">
                    0{i + 1}
                  </span>
                </div>
              </Reveal>
              <div>
                <SectionHead
                  kicker={`Service 0${i + 1}`}
                  title={s.title}
                />
                <Reveal delay={90}>
                  <p className="mt-5 leading-relaxed text-bodytext">{s.full}</p>
                  <ul className="mt-6 space-y-2.5">
                    {s.scope.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                        <span className="text-ink/85">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#/contact"
                    className="group mt-8 inline-flex items-center gap-2 bg-ink px-7 py-4 font-display text-lg font-semibold uppercase tracking-wider text-white transition hover:bg-brand"
                  >
                    Discuss this service
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </a>
                </Reveal>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process recap */}
      <section className="bg-cream py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHead
            kicker="What working with us looks like"
            title="From First Call to Final Walkthrough"
            align="center"
          />
          <div className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((step, i) => (
              <Reveal key={step.number} delay={i * 90}>
                <div className="border-t-2 border-brand bg-white p-7">
                  <span className="font-display text-5xl font-bold text-ink/10">
                    {step.number}
                  </span>
                  <h3 className="mt-2 font-display text-2xl font-semibold uppercase tracking-wide text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-bodytext">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <SectionHead
              kicker="Common questions"
              title="Straight Answers, No Fine Print"
              text="The things clients ask us most before a project starts. If your question is not here, call us. A real person picks up."
            />
          </div>
          <Reveal delay={100}>
            <Accordion items={FAQS} />
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
