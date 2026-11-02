import { cn } from "@/lib/cn";

type ImagePlaceholderProps = {
  label: string;
  className?: string;
  tone?: "dark" | "light";
  labelClassName?: string;
};

export function ImagePlaceholder({
  label,
  className = "",
  tone = "light",
  labelClassName = "bottom-4 left-4",
}: ImagePlaceholderProps) {
  const dark = tone === "dark";

  return (
    <div
      role="img"
      aria-label={label}
      className={cn(
        "overflow-hidden",
        !className.includes("absolute") && "relative",
        dark ? "bg-ink text-white/70" : "bg-[#2a2826] text-white/70",
        className,
      )}
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-0",
          dark
            ? "bg-[radial-gradient(ellipse_at_72%_32%,#3a3834_0%,#161412_58%)]"
            : "bg-[linear-gradient(160deg,#3a3834_0%,#1c1b19_100%)]",
        )}
      />
      <div className="pointer-events-none absolute inset-0 opacity-25 [background-image:repeating-linear-gradient(135deg,transparent_0_16px,rgba(255,255,255,0.16)_16px_17px)]" />
      <span className={`absolute max-w-[80%] text-[11px] uppercase tracking-[0.18em] ${labelClassName}`}>
        {label}
      </span>
    </div>
  );
}
