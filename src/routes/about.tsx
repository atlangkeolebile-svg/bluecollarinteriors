import { createFileRoute } from "@tanstack/react-router";
import img from "@/assets/project-kitchen-1.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Blue Collar Interiors" },
      { name: "description", content: "Blue Collar Interiors is a Gaborone-based design and manufacture studio for custom kitchens, cabinetry and interiors." },
      { property: "og:title", content: "About — Blue Collar Interiors" },
      { property: "og:description", content: "Craftsmanship, design and reliability from a Botswana studio." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="border-b border-border/60 bg-cream pb-16 pt-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">— About</span>
          <h1 className="mt-6 font-display text-5xl tracking-tight md:text-7xl text-balance">
            Craftsmanship is a discipline. Design is an act of care.
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-7">
            <img src={img} alt="Blue Collar Interiors workshop" className="h-[560px] w-full rounded-sm object-cover shadow-elegant" loading="lazy" />
          </div>
          <div className="lg:col-span-5">
            <p className="text-lg leading-relaxed">
              Blue Collar Interiors is a Gaborone-based design and manufacturing studio specialising in custom kitchens, walk-in closets and bespoke cabinetry.
            </p>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Founded on the values of honest work and modern design, we operate from our Gwest Industrial workshop where every project is sketched, manufactured and quality-checked before installation.
            </p>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Over 180 import shipments since 2022 keep our supply chain stocked with the finest fittings, hardware, lighting and seating from leading South African suppliers — including Ixaxa Office Furniture and Grass ZA.
            </p>

            <div className="mt-12 grid grid-cols-2 gap-8 border-t border-border pt-8">
              {[["10+", "Years of practice"], ["180+", "Shipments since 2022"], ["3.9K", "Facebook followers"], ["1", "Studio in Gaborone"]].map(([n, l]) => (
                <div key={l}><div className="font-display text-3xl">{n}</div><div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{l}</div></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <h2 className="font-display text-4xl md:text-5xl">Our values</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              { t: "Reliability", d: "We show up, we measure twice, and we hand over on time." },
              { t: "Modern craft", d: "Tradition in the joinery, contemporary in the silhouette." },
              { t: "Honest pricing", d: "Imported quality, Gaborone manufacture — fair from the first quote." },
            ].map((v) => (
              <div key={v.t} className="rounded-sm border-l-2 border-brass bg-background p-8">
                <h3 className="font-display text-2xl">{v.t}</h3>
                <p className="mt-3 text-muted-foreground">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
