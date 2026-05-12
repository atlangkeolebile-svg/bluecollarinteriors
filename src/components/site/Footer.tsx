import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-32 overflow-hidden bg-ink-deep text-cream">
      <div className="absolute inset-0 grain" />
      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Logo light />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream/70">
              Custom kitchens, cabinetry and interiors crafted in Gaborone — built on craftsmanship, refined by design.
            </p>
          </div>
          <div>
            <h4 className="mb-4 text-xs uppercase tracking-[0.25em] text-cream/50">Studio</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/portfolio" className="hover:text-cream/100 text-cream/80">Portfolio</Link></li>
              <li><Link to="/services" className="hover:text-cream/100 text-cream/80">Services</Link></li>
              <li><Link to="/about" className="hover:text-cream/100 text-cream/80">About</Link></li>
              <li><Link to="/journal" className="hover:text-cream/100 text-cream/80">Journal</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-xs uppercase tracking-[0.25em] text-cream/50">Contact</h4>
            <ul className="space-y-3 text-sm text-cream/80">
              <li className="flex items-start gap-3"><Phone className="mt-0.5 h-4 w-4 text-cream/50" /> +267 311 1051</li>
              <li className="flex items-start gap-3"><Mail className="mt-0.5 h-4 w-4 text-cream/50" /> sales@bluecollar.co.bw</li>
              <li className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 text-cream/50" /> Unit 4, Plot 28580, Gwest Industrial, Gaborone, Botswana</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-xs uppercase tracking-[0.25em] text-cream/50">Follow</h4>
            <div className="flex gap-3">
              <a href="https://www.instagram.com/bluecollarinteriors/" target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center rounded-sm border border-cream/20 hover:border-cream/60 transition-colors"><Instagram className="h-4 w-4" /></a>
              <a href="#" className="grid h-10 w-10 place-items-center rounded-sm border border-cream/20 hover:border-cream/60 transition-colors"><Facebook className="h-4 w-4" /></a>
            </div>
            <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-sm border border-cream/30 px-5 py-2.5 text-xs uppercase tracking-[0.2em] hover:bg-cream hover:text-ink-deep transition-colors">
              Visit our showroom
            </Link>
          </div>
        </div>
        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-cream/10 pt-8 text-xs text-cream/50 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Blue Collar Interiors Pty Ltd. All rights reserved.</p>
          <p>Gaborone · Botswana</p>
        </div>
      </div>
    </footer>
  );
}
