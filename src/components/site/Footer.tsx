import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 bg-ink-deep text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo light />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/70">
              Custom kitchens, cabinetry and interiors crafted in Gaborone.
            </p>
          </div>
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-white/50">Studio</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/portfolio" className="text-white/80 hover:text-white">Portfolio</Link></li>
              <li><Link to="/services" className="text-white/80 hover:text-white">Services</Link></li>
              <li><Link to="/about" className="text-white/80 hover:text-white">About</Link></li>
              <li><Link to="/contact" className="text-white/80 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-white/50">Contact</h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-3"><Phone className="mt-0.5 h-4 w-4 text-white/50" /><span>+267 311 1051</span></li>
              <li className="flex items-start gap-3"><Mail className="mt-0.5 h-4 w-4 text-white/50" /><span>sales@bluecollar.co.bw</span></li>
              <li className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 text-white/50" /><span>Unit 4, Plot 28580, Gwest Industrial, Gaborone</span></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-white/50">Follow</h4>
            <div className="flex gap-3">
              <a href="https://www.instagram.com/bluecollarinteriors/" target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center rounded-md border border-white/20 transition-colors hover:border-white hover:bg-royal"><Instagram className="h-4 w-4" /></a>
              <a href="#" className="grid h-10 w-10 place-items-center rounded-md border border-white/20 transition-colors hover:border-white hover:bg-royal"><Facebook className="h-4 w-4" /></a>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-8 text-xs text-white/50 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Blue Collar Interiors Pty Ltd. All rights reserved.</p>
          <p>Gaborone · Botswana</p>
        </div>
      </div>
    </footer>
  );
}
