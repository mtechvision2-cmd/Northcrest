import Reveal from "./Reveal";

type SectionHeadProps = {
  kicker: string;
  title: string;
  text?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
};

export default function SectionHead({
  kicker,
  title,
  text,
  align = "left",
  light = false,
  className = "",
}: SectionHeadProps) {
  const alignCls = align === "center" ? "text-center justify-center" : "";
  const titleColor = light ? "text-white" : "text-ink";
  const textColor = light ? "text-white/65" : "text-bodytext";

  return (
    <Reveal className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""} ${className}`}>
      <span className={`kicker ${alignCls}`}>{kicker}</span>
      <h2
        className={`mt-4 font-display text-5xl font-bold uppercase leading-[1.02] tracking-wide ${titleColor} lg:text-6xl`}
      >
        {title}
      </h2>
      {text && <p className={`mt-5 text-lg leading-relaxed ${textColor}`}>{text}</p>}
    </Reveal>
  );
}
