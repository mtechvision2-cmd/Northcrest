import { ArrowRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import Logo from "./Logo";
import { BRAND, NAV_ITEMS, SERVICES } from "@/lib/site-data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-ink text-white">
      {/* Upper strip */}
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 py-10 md:flex-row md:items-center">
          <div>
            <p className="font-display text-3xl font-bold uppercase tracking-wide">
              Ready to break ground?
            </p>
            <p className="mt-2 text-white/60">
              Tell us about your project and we will respond within one business day.
            </p>
          </div>
          <a
            href="#/contact"
            className="group inline-flex shrink-0 items-center gap-2 bg-brand px-7 py-4 font-display text-lg font-semibold uppercase tracking-wider text-white transition hover:bg-brand-dark"
          >
            Get in touch
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
        <div>
          <Logo variant="light" />
          <p className="mt-6 max-w-sm leading-relaxed text-white/60">
            A general contractor serving the Southeast since 1998. We build
            commercial, residential and industrial projects that people rely on
            every day, and we stand behind every one of them.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {["Facebook", "Instagram", "LinkedIn"].map((label) => (
              <a
                key={label}
                href="#/"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center border border-white/15 transition hover:border-brand hover:bg-brand"
              >
                {label === "Facebook" && (
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 320 512">
                    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                  </svg>
                )}
                {label === "Instagram" && (
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 448 512">
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                  </svg>
                )}
                {label === "LinkedIn" && (
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 448 512">
                    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3z" />
                  </svg>
                )}
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Footer quick links">
          <h3 className="font-display text-xl font-semibold uppercase tracking-wider">
            Quick links
          </h3>
          <span className="mt-3 block h-0.5 w-9 bg-brand" />
          <ul className="mt-6 space-y-3.5">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-white/60 transition hover:text-brand"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="font-display text-xl font-semibold uppercase tracking-wider">
            Services
          </h3>
          <span className="mt-3 block h-0.5 w-9 bg-brand" />
          <ul className="mt-6 space-y-3.5">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <a
                  href="#/services"
                  className="text-white/60 transition hover:text-brand"
                >
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-xl font-semibold uppercase tracking-wider">
            Contact
          </h3>
          <span className="mt-3 block h-0.5 w-9 bg-brand" />
          <ul className="mt-6 space-y-4 text-white/60">
            <li className="flex items-start gap-3">
              <MapPin className="mt-1 h-4 w-4 shrink-0 text-brand" />
              <span>{BRAND.address}</span>
            </li>
            <li>
              <a href={BRAND.phoneHref} className="flex items-center gap-3 transition hover:text-brand">
                <Phone className="h-4 w-4 shrink-0 text-brand" />
                {BRAND.phone}
              </a>
            </li>
            <li>
              <a href={BRAND.emailHref} className="flex items-center gap-3 transition hover:text-brand">
                <Mail className="h-4 w-4 shrink-0 text-brand" />
                {BRAND.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Clock className="h-4 w-4 shrink-0 text-brand" />
              {BRAND.hours}
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-sm text-white/50 md:flex-row">
          <p>
            © {year} {BRAND.name}. All rights reserved.
          </p>
          <p>
            <a
              href="https://m-webcraftstudio.space-z.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-brand"
            >
              Designed By M-Webcraft Studio
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
