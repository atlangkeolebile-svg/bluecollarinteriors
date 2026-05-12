import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ProjectViewer } from "@/components/three/ProjectViewer";
import k1 from "@/assets/project-kitchen-1.png";
import k2 from "@/assets/project-kitchen-2.png";
import c1 from "@/assets/project-closet-1.png";
import c2 from "@/assets/project-closet-2.png";
import c3 from "@/assets/project-closet-3.png";
import cg from "@/assets/project-closet-grey.png";
import wp from "@/assets/project-wardrobe-pink.png";
import wc from "@/assets/project-wardrobe-cream.png";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Blue Collar Interiors" },
      { name: "description", content: "Selected kitchens, walk-in closets, vanities and bespoke cabinetry by Blue Collar Interiors, Gaborone." },
      { property: "og:title", content: "Portfolio — Blue Collar Interiors" },
      { property: "og:description", content: "Selected kitchens, closets and cabinetry across Botswana." },
    ],
  }),
  component: Portfolio,
});

const projects = [
  { src: k1, title: "Kitchen Masterpiece", loc: "Gaborone North", year: "2025", tag: "Kitchen" },
  { src: cg, title: "Master Walk-in Closet", loc: "Phakalane", year: "2025", tag: "Closet" },
  { src: k2, title: "Modern Family Kitchen", loc: "Gaborone", year: "2025", tag: "Kitchen" },
  { src: c3, title: "Concrete & Light Closet", loc: "Block 8", year: "2024", tag: "Closet" },
  { src: wp, title: "Blush Bedroom Wardrobe", loc: "Phakalane", year: "2024", tag: "Wardrobe" },
  { src: c1, title: "Sliding Door Wardrobe", loc: "Tlokweng", year: "2024", tag: "Wardrobe" },
  { src: c2, title: "Open Shelf System", loc: "Mogoditshane", year: "2024", tag: "Cabinetry" },
  { src: wc, title: "Cream Sliding Wardrobe", loc: "Gaborone West", year: "2024", tag: "Wardrobe" },
];

function Portfolio() {
  return (
    <>
      <section className="border-b border-border/60 bg-cream pb-16 pt-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">— Portfolio</span>
          <h1 className="mt-6 font-display text-5xl tracking-tight md:text-7xl text-balance">
            Spaces we've shaped.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            A curated selection of recent kitchens, closets and cabinetry across Gaborone — each one designed, built and fitted by our team.
          </p>
        </div>
      </section>

      {/* 3D explorer */}
      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">— Interactive</span>
              <h2 className="mt-4 font-display text-4xl tracking-tight md:text-5xl text-balance">
                Explore our cabinetry in 3D.
              </h2>
              <p className="mt-6 text-muted-foreground">
                Drag to rotate, scroll to zoom. A small taste of the same configurators we use in client consultations to plan a space before manufacture.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3 lg:col-span-7">
              <ProjectViewer variant="kitchen" label="Kitchen" />
              <ProjectViewer variant="wardrobe" label="Wardrobe" />
              <ProjectViewer variant="vanity" label="Vanity" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.figure
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-sm bg-muted">
                <img src={p.src} alt={p.title} loading="lazy" className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <span className="absolute left-3 top-3 rounded-sm bg-cream/90 px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-ink">{p.tag}</span>
              </div>
              <figcaption className="mt-4 flex items-baseline justify-between">
                <div>
                  <div className="font-display text-lg">{p.title}</div>
                  <div className="text-xs text-muted-foreground">{p.loc}</div>
                </div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{p.year}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </section>
    </>
  );
}
