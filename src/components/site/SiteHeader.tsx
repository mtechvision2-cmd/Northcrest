"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Mail, MapPin, Menu, Phone, X } from "lucide-react";
import Logo from "./Logo";
import { BRAND, NAV_ITEMS } from "@/lib/site-data";

export default function SiteHeader({ route }: { route: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const close = () => setMenuOpen(false);
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, []);

  const isActive = (href: string) => {
    const target = href.replace("#", "");
    return target === route;
  };

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      {/* Topbar */}
      <div className="hidden bg-ink text-white/80 lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2.5 text-[0.8125rem]">
          <div className="flex items-center gap-6">
            <a
              href={BRAND.phoneHref}
              className="flex items-center gap-2 transition hover:text-brand"
            >
              <Phone className="h-3.5 w-3.5 text-brand" />
              <span>{BRAND.phone}</span>
            </a>
            <a
              href={BRAND.emailHref}
              className="flex items-center gap-2 transition hover:text-brand"
            >
              <Mail className="h-3.5 w-3.5 text-brand" />
              <span>{BRAND.email}</span>
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5 text-brand" />
              <span>{BRAND.address}</span>
            </span>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-white/60">{BRAND.hours}</span>
            <span className="h-4 w-px bg-white/20" />
            <div className="flex items-center gap-4">
              <a href="#/" aria-label="Facebook" className="transition hover:text-brand">
                <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 320 512">
                  <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                </svg>
              </a>
              <a href="#/" aria-label="Instagram" className="transition hover:text-brand">
                <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 448 512">
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </a>
              <a href="#/" aria-label="LinkedIn" className="transition hover:text-brand">
                <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 448 512">
                  <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main nav bar */}
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "fixed inset-x-0 top-0 bg-ink/95 shadow-lg shadow-black/20 backdrop-blur"
            : "bg-ink lg:bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:py-5">
          <a href="#/" aria-label="Northcrest Construction Group home" className="shrink-0">
            <Logo variant="light" />
          </a>

          {/* Desktop nav */}
          <nav aria-label="Main navigation" className="hidden items-center gap-7 xl:gap-8 lg:flex">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`whitespace-nowrap font-display text-[1.05rem] font-semibold uppercase tracking-wider transition ${
                  isActive(item.href)
                    ? "text-brand"
                    : "text-white hover:text-brand"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-7 lg:flex">
            <a
              href={BRAND.phoneHref}
              className="flex items-center gap-3"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25">
                <Phone className="h-4 w-4 text-brand" />
              </span>
              <span className="leading-tight">
                <span className="block text-[0.7rem] uppercase tracking-wider text-white/60">
                  Call us today
                </span>
                <span className="block font-display text-lg font-semibold text-white">
                  {BRAND.phone}
                </span>
              </span>
            </a>
            <a
              href="#/contact"
              className="group inline-flex items-center gap-2 bg-brand px-6 py-3.5 font-display text-base font-semibold uppercase tracking-wider text-white transition hover:bg-brand-dark"
            >
              Get a quote
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className="flex h-11 w-11 items-center justify-center border border-white/25 text-white lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden ${menuOpen ? "" : "pointer-events-none"}`}
        aria-hidden={!menuOpen}
      >
        <div
          className={`absolute inset-0 bg-black/60 transition-opacity ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 flex h-full w-80 max-w-[85vw] flex-col bg-ink p-6 transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between">
            <Logo variant="light" />
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="flex h-10 w-10 items-center justify-center border border-white/25 text-white"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav aria-label="Mobile navigation" className="mt-10 flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`border-b border-white/10 py-4 font-display text-xl font-semibold uppercase tracking-wider ${
                  isActive(item.href) ? "text-brand" : "text-white"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-auto space-y-3 text-white/70">
            <a href={BRAND.phoneHref} className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-brand" /> {BRAND.phone}
            </a>
            <a href={BRAND.emailHref} className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-brand" /> {BRAND.email}
            </a>
            <p className="flex items-start gap-3">
              <MapPin className="mt-1 h-4 w-4 shrink-0 text-brand" /> {BRAND.address}
            </p>
            <a
              href="#/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-4 block bg-brand px-6 py-3.5 text-center font-display text-base font-semibold uppercase tracking-wider text-white"
            >
              Get a quote
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
