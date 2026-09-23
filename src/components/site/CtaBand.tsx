import { ArrowRight, Phone } from "lucide-react";
import { BRAND, CTA_BANNER } from "@/lib/site-data";
import Reveal from "./Reveal";

export default function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-ink">
      <img
        src="https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/084b71f92899.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-25"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/60" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start gap-8 px-6 py-20 lg:flex-row lg:items-center lg:justify-between">
        <Reveal className="max-w-2xl">
          <p className="kicker text-brand-light">{CTA_BANNER.kicker}</p>
          <h2 className="mt-4 font-display text-5xl font-bold uppercase leading-tight tracking-wide text-white lg:text-6xl">
            {CTA_BANNER.title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/70">
            {CTA_BANNER.text}
          </p>
        </Reveal>
        <Reveal delay={120} className="shrink-0">
          <div className="flex flex-col gap-5">
            <a
              href={BRAND.phoneHref}
              className="flex items-center gap-4 text-white"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand">
                <Phone className="h-6 w-6" />
              </span>
              <span>
                <span className="block text-sm uppercase tracking-widest text-white/60">
                  Call us direct
                </span>
                <span className="font-display text-2xl font-semibold">
                  {BRAND.phone}
                </span>
              </span>
            </a>
            <a
              href="#/contact"
              className="group inline-flex items-center justify-center gap-2 bg-brand px-8 py-4 font-display text-lg font-semibold uppercase tracking-wider text-white transition hover:bg-brand-dark"
            >
              Request an estimate
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
