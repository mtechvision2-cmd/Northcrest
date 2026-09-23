type LogoProps = {
  variant?: "light" | "dark";
  className?: string;
};

export default function Logo({ variant = "dark", className = "" }: LogoProps) {
  const wordColor = variant === "light" ? "text-white" : "text-ink";
  const subColor = variant === "light" ? "text-white/60" : "text-bodytext";

  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <svg
        width="44"
        height="44"
        viewBox="0 0 64 64"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect width="64" height="64" rx="10" fill="#f25c1a" />
        <path
          d="M17 47V17h7.8l13.4 18.2V17H47v30h-7.8L25.8 28.8V47z"
          fill="#ffffff"
        />
      </svg>
      <span className="leading-none">
        <span
          className={`block font-display text-2xl font-bold tracking-wide ${wordColor}`}
        >
          NORTHCREST
        </span>
        <span
          className={`mt-0.5 block text-[0.6rem] font-semibold uppercase tracking-[0.32em] ${subColor}`}
        >
          Construction Group
        </span>
      </span>
    </span>
  );
}
