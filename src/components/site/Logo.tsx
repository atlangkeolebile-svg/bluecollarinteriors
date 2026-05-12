import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="group flex items-center gap-3">
      <img
        src={logo}
        alt="Blue Collar Interiors"
        width={36}
        height={36}
        className={`h-9 w-9 object-contain ${light ? "brightness-0 invert" : ""}`}
      />
      <span className="flex flex-col leading-tight">
        <span className={`text-sm font-semibold tracking-tight ${light ? "text-white" : "text-foreground"}`}>
          Blue Collar
        </span>
        <span className={`text-[10px] font-medium uppercase tracking-[0.24em] ${light ? "text-white/70" : "text-muted-foreground"}`}>
          Interiors
        </span>
      </span>
    </Link>
  );
}
