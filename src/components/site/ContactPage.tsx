"use client";

import { useState } from "react";
import { CheckCircle2, Clock, Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import PageBanner from "./PageBanner";
import Reveal from "./Reveal";
import { BUDGET_RANGES, BRAND, IMAGES, PROJECT_TYPES } from "@/lib/site-data";

type FormState = "idle" | "sending" | "success" | "error";

const INFO_CARDS = [
  {
    icon: Phone,
    title: "Call us",
    line1: BRAND.phone,
    line2: "Emergency site line available",
    href: BRAND.phoneHref,
  },
  {
    icon: Mail,
    title: "Email us",
    line1: BRAND.email,
    line2: "We reply within one business day",
    href: BRAND.emailHref,
  },
  {
    icon: MapPin,
    title: "Visit us",
    line1: "1420 Ironworks Avenue, Suite 210",
    line2: "Raleigh, NC 27604",
  },
  {
    icon: Clock,
    title: "Office hours",
    line1: "Mon to Fri: 7:30am to 5:30pm",
    line2: "Saturday by appointment",
  },
];

export default function ContactPage() {
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    setState("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: String(data.get("name") || ""),
          email: String(data.get("email") || ""),
          phone: String(data.get("phone") || ""),
          projectType: String(data.get("projectType") || ""),
          budget: String(data.get("budget") || ""),
          message: String(data.get("message") || ""),
        }),
      });

      const json = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(json.error || "Something went wrong. Please try again.");
      }

      setState("success");
      form.reset();
    } catch (err) {
      setState("error");
      setErrorMsg(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    }
  }

  return (
    <>
      <PageBanner
        title="Contact Us"
        crumb="Contact"
        image={IMAGES.aboutCrew}
        description="Tell us what you are planning. Whether it is a kitchen remodel or a distribution center, the first conversation is free and honest."
      />

      {/* Info cards */}
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 sm:grid-cols-2 lg:grid-cols-4">
          {INFO_CARDS.map((card, i) => {
            const Icon = card.icon;
            const inner = (
              <>
                <span className="flex h-13 w-13 items-center justify-center bg-cream transition group-hover:bg-brand">
                  <Icon className="h-6 w-6 text-brand transition group-hover:text-white" />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold uppercase tracking-wide text-ink">
                  {card.title}
                </h3>
                <p className="mt-2 font-medium text-ink/80">{card.line1}</p>
                <p className="text-sm text-bodytext">{card.line2}</p>
              </>
            );
            return (
              <Reveal key={card.title} delay={i * 80}>
                {card.href ? (
                  <a
                    href={card.href}
                    className="group block h-full border border-ink/10 bg-white p-7 transition hover:border-brand/50 hover:shadow-lg hover:shadow-ink/10"
                  >
                    {inner}
                  </a>
                ) : (
                  <div className="group h-full border border-ink/10 bg-white p-7">
                    {inner}
                  </div>
                )}
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Form + what happens next */}
      <section className="bg-cream pb-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[1.4fr_1fr]">
          {/* Form */}
          <Reveal>
            <div className="bg-white p-8 shadow-sm md:p-12">
              <span className="kicker">Request an estimate</span>
              <h2 className="mt-4 font-display text-4xl font-bold uppercase tracking-wide text-ink lg:text-5xl">
                Tell Us About Your Project
              </h2>
              <p className="mt-3 leading-relaxed text-bodytext">
                Fields marked with an asterisk are required. Everything you share
                stays between us, and there is no obligation attached to asking.
              </p>

              {state === "success" ? (
                <div className="mt-10 border border-brand/40 bg-brand/5 p-8">
                  <CheckCircle2 className="h-10 w-10 text-brand" />
                  <h3 className="mt-4 font-display text-2xl font-semibold uppercase tracking-wide text-ink">
                    Message received
                  </h3>
                  <p className="mt-2 leading-relaxed text-bodytext">
                    Thanks for reaching out. A member of our team will get back
                    to you within one business day. If it is urgent, call us at{" "}
                    <a href={BRAND.phoneHref} className="font-semibold text-brand">
                      {BRAND.phone}
                    </a>{" "}
                    and ask for the estimating desk.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-semibold uppercase tracking-wider text-ink"
                    >
                      Full name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Jordan Smith"
                      className="w-full border border-ink/15 bg-cream/50 px-4 py-3.5 outline-none transition focus:border-brand focus:bg-white"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-semibold uppercase tracking-wider text-ink"
                    >
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="jordan@company.com"
                      className="w-full border border-ink/15 bg-cream/50 px-4 py-3.5 outline-none transition focus:border-brand focus:bg-white"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-semibold uppercase tracking-wider text-ink"
                    >
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="(919) 555 0000"
                      className="w-full border border-ink/15 bg-cream/50 px-4 py-3.5 outline-none transition focus:border-brand focus:bg-white"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="projectType"
                      className="mb-2 block text-sm font-semibold uppercase tracking-wider text-ink"
                    >
                      Project type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      defaultValue=""
                      className="w-full appearance-none border border-ink/15 bg-cream/50 px-4 py-3.5 outline-none transition focus:border-brand focus:bg-white"
                    >
                      <option value="" disabled>
                        Select one
                      </option>
                      {PROJECT_TYPES.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="budget"
                      className="mb-2 block text-sm font-semibold uppercase tracking-wider text-ink"
                    >
                      Estimated budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      defaultValue=""
                      className="w-full appearance-none border border-ink/15 bg-cream/50 px-4 py-3.5 outline-none transition focus:border-brand focus:bg-white"
                    >
                      <option value="" disabled>
                        Select a range
                      </option>
                      {BUDGET_RANGES.map((b) => (
                        <option key={b} value={b}>
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-semibold uppercase tracking-wider text-ink"
                    >
                      Project details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      placeholder="Where is the site, what are you building, and when would you like to start? The more you share, the better our first answer will be."
                      className="w-full resize-none border border-ink/15 bg-cream/50 px-4 py-3.5 outline-none transition focus:border-brand focus:bg-white"
                    />
                  </div>

                  {state === "error" && (
                    <p className="sm:col-span-2 border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                      {errorMsg || "We could not send your message. Please try again, or email us directly."}
                    </p>
                  )}

                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      disabled={state === "sending"}
                      className="group inline-flex w-full items-center justify-center gap-2 bg-brand px-8 py-4 font-display text-lg font-semibold uppercase tracking-wider text-white transition hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
                    >
                      {state === "sending" ? (
                        <>
                          <Loader2 className="h-5 w-5 animate-spin" />
                          Sending
                        </>
                      ) : (
                        <>
                          <Send className="h-5 w-5" />
                          Send message
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </Reveal>

          {/* What happens next */}
          <div className="space-y-8">
            <Reveal delay={100}>
              <h2 className="font-display text-4xl font-bold uppercase tracking-wide text-ink">
                What Happens Next
              </h2>
              <ol className="mt-6 space-y-6">
                {[
                  {
                    t: "We read it properly",
                    d: "Your message goes to our estimating desk, not a spam folder. Someone with field experience reads every word.",
                  },
                  {
                    t: "A call within one business day",
                    d: "We call or email you with initial thoughts, a few questions and a rough idea of whether we are a fit.",
                  },
                  {
                    t: "Site walk and written estimate",
                    d: "For serious projects we walk the site with you within the week, then send a detailed written estimate. No charge, no pressure.",
                  },
                ].map((step, i) => (
                  <li key={step.t} className="flex gap-5">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-brand font-display text-xl font-bold text-white">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-semibold uppercase tracking-wide text-ink">
                        {step.t}
                      </h3>
                      <p className="mt-1 leading-relaxed text-bodytext">{step.d}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>

            <Reveal delay={180} className="map-frame relative h-72 border border-ink/10">
              <iframe
                title="Northcrest Construction Group office location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-78.680%2C35.770%2C-78.590%2C35.835&layer=mapnik&marker=35.803%2C-78.635"
                loading="lazy"
              />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
