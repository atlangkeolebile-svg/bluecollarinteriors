import { createFileRoute, Link } from "@tanstack/react-router";
import { ChefHat, Compass, Bath, Sofa, Layers, Truck, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Blue Collar Interiors" },
      { name: "description", content: "Custom kitchens, cabinetry, bathrooms, interior design and furniture imports — Gaborone, Botswana." },
      { property: "og:title", content: "Services — Blue Collar Interiors" },
      { property: "og:description", content: "Bespoke design, manufacture and installation across Botswana." },
    ],
  }),
  component: Services,
});

const services = [
  { icon: ChefHat, title: "Custom Kitchens", desc: "From concept sketches to final fitting — bespoke kitchens manufactured in-house with imported hardware and locally sourced materials.", points: ["3D design & visualisation", "In-house manufacture", "Stone & quartz tops", "Brass / steel hardware"] },
  { icon: Layers, title: "Cabinetry & Built-ins", desc: "Built-in wardrobes, walk-ins, media units and bespoke storage tailored to your room and your lifestyle.", points: ["Sliding & hinged systems", "LED-lit interiors", "Soft-close drawers", "Modular layouts"] },
  { icon: Bath, title: "Bathrooms & Vanities", desc: "Vanities, mirror cabinets and full bathroom contracting with waterproof finishes built to last.", points: ["Custom vanities", "Stone tops", "Mirror & lighting", "Plumbing coordination"] },
  { icon: Compass, title: "Interior Design", desc: "Full-service residential and commercial design — space planning, materials, lighting and finishes.", points: ["Space planning", "Material palettes", "Lighting plans", "Project management"] },
  { icon: Sofa, title: "Furniture & Fittings", desc: "Curated furniture and fittings imported from leading South African suppliers.", points: ["Sourcing & curation", "Logistics & customs", "White-glove install", "Trade pricing"] },
  { icon: Truck, title: "Renovation & Fit-out", desc: "Turn-key renovation for kitchens, bathrooms and full living spaces — one team, one timeline.", points: ["Demolition & rebuild", "Trades coordination", "Quality control", "Handover"] },
];

function Services() {
  return (
    <>
      <section className="border-b border-border/60 bg-cream pb-16 pt-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">— Services</span>
          <h1 className="mt-6 font-display text-5xl tracking-tight md:text-7xl text-balance">
            Designed, built, fitted.<br />
            <em className="text-brass not-italic">By one team.</em>
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article key={s.title} className="group bg-background p-10 transition-colors hover:bg-secondary">
              <s.icon className="h-8 w-8 text-brass" />
              <h2 className="mt-8 font-display text-2xl">{s.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              <ul className="mt-6 space-y-2 text-sm">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-foreground/80">
                    <span className="h-px w-4 bg-brass" /> {p}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-ink py-24 text-cream">
        <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-8 px-6 md:flex-row md:items-center lg:px-10">
          <div>
            <h3 className="font-display text-3xl md:text-4xl">Have a project in mind?</h3>
            <p className="mt-3 text-cream/70">We'll scope it, sketch it and quote it — usually within one working day.</p>
          </div>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-sm bg-cream px-7 py-4 text-xs uppercase tracking-[0.22em] text-ink hover:bg-brass">
            Request a quote <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
