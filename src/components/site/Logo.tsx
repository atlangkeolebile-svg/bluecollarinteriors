import { Link } from "@tanstack/react-router";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="group flex items-center gap-3">
      <span
        className={`grid h-10 w-10 place-items-center rounded-sm border ${
          light ? "border-brass/60" : "border-ink/30"
        } font-display text-lg font-semibold ${light ? "text-brass" : "text-ink"}`}
        aria-hidden
      >
        BC
      </span>
      <span className="flex flex-col leading-tight">
        <span className={`font-display text-base font-semibold tracking-wide ${light ? "text-cream" : "text-ink"}`}>
          Blue Collar
        </span>
        <span className={`text-[10px] uppercase tracking-[0.28em] ${light ? "text-brass" : "text-muted-foreground"}`}>
          Interiors
        </span>
      </span>
    </Link>
  );
}
