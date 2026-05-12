import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="group flex items-center gap-3">
      <img
        src={logo}
        alt="Blue Collar Interiors"
        width={40}
        height={40}
        className={`h-10 w-10 object-contain ${light ? "brightness-0 invert" : ""}`}
      />
      <span className="flex flex-col leading-tight">
        <span className={`font-display text-base font-semibold tracking-wide ${light ? "text-cream" : "text-ink"}`}>
          Blue Collar
        </span>
        <span className={`text-[10px] uppercase tracking-[0.28em] ${light ? "text-cream/70" : "text-muted-foreground"}`}>
          Interiors
        </span>
      </span>
    </Link>
  );
}
