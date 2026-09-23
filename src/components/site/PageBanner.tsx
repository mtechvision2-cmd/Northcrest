import Reveal from "./Reveal";

type PageBannerProps = {
  title: string;
  crumb: string;
  image: string;
  description?: string;
};

export default function PageBanner({
  title,
  crumb,
  image,
  description,
}: PageBannerProps) {
  return (
    <section className="relative flex min-h-[380px] items-end overflow-hidden bg-ink pb-14 pt-44 lg:min-h-[440px] lg:pb-20">
      <img
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/75 to-ink/40" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand">
            <a href="#/" className="transition hover:text-brand-light">
              Home
            </a>
            <span className="mx-2 text-white/50">/</span>
            <span className="text-white">{crumb}</span>
          </p>
          <h1 className="mt-4 font-display text-6xl font-bold uppercase tracking-wide text-white lg:text-7xl">
            {title}
          </h1>
          {description && (
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/70">
              {description}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
