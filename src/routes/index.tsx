import { createFileRoute, Link } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Hammer, Compass, Sparkles, Truck, Phone, MapPin, Quote } from "lucide-react";
import kitchenImg from "@/assets/project-kitchen-2.png";
import closetImg from "@/assets/project-closet-grey.png";
import wardrobeImg from "@/assets/project-wardrobe-pink.png";
import kitchen1 from "@/assets/project-kitchen-1.png";

const HeroScene = lazy(() => import("@/components/three/HeroScene").then(m => ({ default: m.HeroScene })));

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Blue Collar Interiors — Bespoke Kitchens & Cabinetry, Gaborone" },
      { name: "description", content: "Custom kitchens, cabinetry and interiors crafted in Gaborone, Botswana. Designed, manufactured and installed by Blue Collar Interiors." },
    ],
  }),
  component: HomePage,
});

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.2, 0.8, 0.2, 1] as const } },
};

function HomePage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-[100svh] overflow-hidden bg-gradient-hero text-cream">
        <div className="absolute inset-0 grain" />
        <div className="absolute inset-0">
          <Suspense fallback={null}>
            <HeroScene />
          </Suspense>
        </div>

        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-6 pb-20 pt-40 lg:px-10">
          <motion.div initial="hidden" animate="show" variants={fade} className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-cream/20 px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] text-cream/80">
              <span className="h-1.5 w-1.5 rounded-full bg-brass" /> Gaborone · Botswana
            </span>
            <h1 className="mt-6 font-display text-5xl font-medium leading-[0.95] tracking-tight text-balance md:text-7xl lg:text-8xl">
              Kitchens built<br />
              <span className="italic text-cream/80">with conviction.</span>
            </h1>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-cream/70 md:text-lg">
              Bespoke cabinetry and interiors, designed in our Gaborone studio and manufactured by hand. The blue-collar craft, finished to a higher standard.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/contact" className="group inline-flex items-center gap-2 rounded-sm bg-cream px-7 py-4 text-xs font-medium uppercase tracking-[0.22em] text-ink transition-all hover:bg-brass">
                Request a quote <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/portfolio" className="inline-flex items-center gap-2 rounded-sm border border-cream/30 px-7 py-4 text-xs font-medium uppercase tracking-[0.22em] text-cream hover:bg-cream/10">
                View portfolio
              </Link>
            </div>
          </motion.div>

          {/* stats */}
          <div className="mt-16 grid grid-cols-2 gap-8 border-t border-cream/15 pt-8 md:grid-cols-4">
            {[
              ["10+", "Years crafting interiors"],
              ["180+", "Imported shipments"],
              ["100%", "In-house manufacturing"],
              ["1", "Studio in Gaborone"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="font-display text-3xl text-cream md:text-4xl">{n}</div>
                <div className="mt-1 text-[11px] uppercase tracking-[0.2em] text-cream/50">{l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-cream/50">
          Scroll · Explore the craft
        </div>
      </section>

      {/* INTRO STRIP */}
      <section className="border-y border-border/60 bg-secondary py-6">
        <div className="flex overflow-hidden">
          <div className="marquee flex shrink-0 items-center gap-16 whitespace-nowrap pr-16 font-display text-2xl text-ink/60 md:text-3xl">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex items-center gap-16">
                <span>Custom Kitchens</span><span className="text-brass">✦</span>
                <span>Walk-in Closets</span><span className="text-brass">✦</span>
                <span>Bathroom Vanities</span><span className="text-brass">✦</span>
                <span>Built-in Cabinetry</span><span className="text-brass">✦</span>
                <span>Imported Furniture</span><span className="text-brass">✦</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="mx-auto max-w-7xl px-6 py-32 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-24">
          <div className="lg:col-span-5">
            <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">— Our philosophy</span>
            <h2 className="mt-6 font-display text-4xl leading-[1.05] tracking-tight md:text-5xl text-balance">
              Honest craft. Modern design. <em className="text-brass not-italic">Built to last.</em>
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-lg leading-relaxed text-foreground/80">
              We're a Gaborone-based studio that blends traditional cabinetry with contemporary design. Every kitchen, closet and bathroom we deliver is sketched, manufactured and fitted by people who care about the joinery as much as the finish.
            </p>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              We import the best fittings and hardware from South Africa and pair them with locally manufactured cabinetry — bringing imported quality without imported pricing.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-ink text-cream">
        <div className="mx-auto max-w-7xl px-6 py-32 lg:px-10">
          <div className="flex flex-col items-end justify-between gap-6 md:flex-row">
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-cream/50">— What we do</span>
              <h2 className="mt-4 font-display text-4xl tracking-tight md:text-5xl">Services</h2>
            </div>
            <Link to="/services" className="text-xs uppercase tracking-[0.25em] text-cream/70 hover:text-cream">All services →</Link>
          </div>

          <div className="mt-16 grid gap-px bg-cream/10 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Hammer, title: "Custom Kitchens", desc: "Bespoke kitchen design, manufacture and installation tailored to your home." },
              { icon: Compass, title: "Interior Design", desc: "Full-service residential and commercial design, from concept to handover." },
              { icon: Sparkles, title: "Cabinetry & Closets", desc: "Built-in wardrobes, walk-ins, vanities and storage solutions." },
              { icon: Truck, title: "Furniture Imports", desc: "Curated furniture and fittings imported from South Africa." },
            ].map((s) => (
              <div key={s.title} className="group bg-ink p-8 transition-colors hover:bg-ink-deep">
                <s.icon className="h-7 w-7 text-brass" />
                <h3 className="mt-8 font-display text-2xl">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/60">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SELECTED WORK */}
      <section className="mx-auto max-w-7xl px-6 py-32 lg:px-10">
        <div className="flex flex-col items-end justify-between gap-6 md:flex-row">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">— Selected work</span>
            <h2 className="mt-4 font-display text-4xl tracking-tight md:text-5xl">Recent projects</h2>
          </div>
          <Link to="/portfolio" className="text-xs uppercase tracking-[0.25em] text-foreground/70 hover:text-foreground">Explore portfolio →</Link>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-12 md:gap-8">
          <motion.figure initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="md:col-span-7">
            <div className="overflow-hidden rounded-sm shadow-elegant">
              <img src={kitchenImg} alt="Bespoke kitchen in Gaborone North" className="h-[480px] w-full object-cover transition-transform duration-700 hover:scale-105" />
            </div>
            <figcaption className="mt-4 flex justify-between text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <span>Kitchen Masterpiece — Gaborone North</span><span>2025</span>
            </figcaption>
          </motion.figure>
          <motion.figure initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }} className="md:col-span-5 md:mt-24">
            <div className="overflow-hidden rounded-sm shadow-elegant">
              <img src={closetImg} alt="Luxury walk-in closet" className="h-[480px] w-full object-cover transition-transform duration-700 hover:scale-105" />
            </div>
            <figcaption className="mt-4 flex justify-between text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <span>Master Walk-in Closet</span><span>2025</span>
            </figcaption>
          </motion.figure>
          <motion.figure initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="md:col-span-5">
            <div className="overflow-hidden rounded-sm shadow-elegant">
              <img src={wardrobeImg} alt="Pink fitted wardrobe" className="h-[420px] w-full object-cover transition-transform duration-700 hover:scale-105" />
            </div>
            <figcaption className="mt-4 flex justify-between text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <span>Bespoke Wardrobe</span><span>2024</span>
            </figcaption>
          </motion.figure>
          <motion.figure initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }} className="md:col-span-7">
            <div className="overflow-hidden rounded-sm shadow-elegant">
              <img src={kitchen1} alt="Modern kitchen with island" className="h-[420px] w-full object-cover transition-transform duration-700 hover:scale-105" />
            </div>
            <figcaption className="mt-4 flex justify-between text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <span>Kitchen Renovation</span><span>2024</span>
            </figcaption>
          </motion.figure>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-5xl px-6 py-32 text-center lg:px-10">
          <Quote className="mx-auto h-10 w-10 text-brass" />
          <blockquote className="mt-8 font-display text-3xl leading-snug tracking-tight text-balance md:text-4xl">
            "Sleek finishes and carefully curated details — the team designed a space that perfectly matched our style while elevating everyday living."
          </blockquote>
          <div className="mt-8 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Client · Gaborone North
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-hero py-32 text-cream">
        <div className="absolute inset-0 grain" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:px-10">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-cream/60">— Let's begin</span>
            <h2 className="mt-4 font-display text-5xl leading-[1.0] tracking-tight md:text-6xl text-balance">
              Bring your space to life.
            </h2>
            <p className="mt-6 max-w-md text-cream/70">
              Book a consultation at our Gwest Industrial showroom or share your project — we'll respond within one working day.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-sm bg-cream px-7 py-4 text-xs uppercase tracking-[0.22em] text-ink hover:bg-brass">Book a consultation <ArrowRight className="h-4 w-4" /></Link>
              <a href="tel:+2673111051" className="inline-flex items-center gap-2 rounded-sm border border-cream/30 px-7 py-4 text-xs uppercase tracking-[0.22em] hover:bg-cream/10"><Phone className="h-4 w-4" /> +267 311 1051</a>
            </div>
          </div>
          <div className="space-y-6 lg:pl-12">
            <div className="border-l border-cream/20 pl-6">
              <div className="text-[10px] uppercase tracking-[0.3em] text-cream/50">Showroom</div>
              <div className="mt-2 flex items-start gap-3 text-cream/90"><MapPin className="mt-1 h-4 w-4 text-brass" /><span>Unit 4, Plot 28580<br />Gwest Industrial, Gaborone</span></div>
            </div>
            <div className="border-l border-cream/20 pl-6">
              <div className="text-[10px] uppercase tracking-[0.3em] text-cream/50">Hours</div>
              <p className="mt-2 text-cream/90">Mon — Fri · 08:00 – 17:00<br />Sat · 09:00 – 13:00</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
