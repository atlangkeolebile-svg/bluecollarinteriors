import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, ChefHat, Layers, Compass, Sofa, Phone, Mail, MapPin, Send, Star } from "lucide-react";
import hero from "@/assets/hero-banner.jpg";
import portrait from "@/assets/about-portrait.jpg";
import kitchenImg from "@/assets/project-kitchen-2.png";
import closetImg from "@/assets/project-closet-grey.png";
import wardrobeImg from "@/assets/project-wardrobe-pink.png";
import kitchen1 from "@/assets/project-kitchen-1.png";
import closet1 from "@/assets/project-closet-1.png";
import closet3 from "@/assets/project-closet-3.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Blue Collar Interiors — Bespoke Kitchens & Interiors, Gaborone" },
      { name: "description", content: "Custom kitchens, cabinetry and interior design in Gaborone, Botswana. Designed, manufactured and installed by Blue Collar Interiors." },
    ],
  }),
  component: HomePage,
});

const services = [
  { icon: ChefHat, title: "Custom Kitchens", desc: "Bespoke kitchens designed, manufactured and fitted in-house." },
  { icon: Layers, title: "Cabinetry & Closets", desc: "Built-in wardrobes, walk-ins and storage tailored to every room." },
  { icon: Compass, title: "Interior Design", desc: "Full-service residential and commercial design from concept to handover." },
  { icon: Sofa, title: "Furniture Imports", desc: "Curated furniture and fittings imported from South Africa." },
];

const portfolio = [
  { src: kitchenImg, title: "Royal Blue Kitchen", loc: "Gaborone North" },
  { src: closetImg, title: "Master Walk-in Closet", loc: "Phakalane" },
  { src: kitchen1, title: "Modern Family Kitchen", loc: "Gaborone" },
  { src: wardrobeImg, title: "Bespoke Wardrobe", loc: "Phakalane" },
  { src: closet1, title: "Sliding Door Wardrobe", loc: "Tlokweng" },
  { src: closet3, title: "Concrete & Light Closet", loc: "Block 8" },
];

const testimonials = [
  { quote: "Sleek finishes and carefully curated details — they designed a space that perfectly matched our style.", name: "M. Tshepiso", loc: "Gaborone North" },
  { quote: "Professional from quote to handover. Our kitchen is the heart of the home now.", name: "K. Molefe", loc: "Phakalane" },
  { quote: "Beautiful craftsmanship and an honest team. Highly recommended.", name: "L. Ndlovu", loc: "Block 8" },
];

function HomePage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative h-[100svh] min-h-[600px] w-full overflow-hidden">
        <img src={hero} alt="Modern royal blue kitchen interior" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-deep/80 via-ink-deep/60 to-ink-deep/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-deep/70 via-ink-deep/30 to-transparent" />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-24 pt-32 lg:px-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-white backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-royal" /> Gaborone · Botswana
            </span>
            <h1 className="mt-6 text-5xl font-semibold leading-[1.05] tracking-tight text-white text-balance md:text-7xl">
              Blue Collar Interiors
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/85">
              Bespoke kitchens, cabinetry and interior design — crafted in our Gaborone studio, fitted with care.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="group inline-flex items-center gap-2 rounded-md bg-royal px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-royal-deep">
                Request a Quote <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#portfolio" className="inline-flex items-center gap-2 rounded-md border border-white/40 bg-white/5 px-7 py-3.5 text-sm font-medium text-white backdrop-blur hover:bg-white/15">
                View Portfolio
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-royal">About</span>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-balance md:text-5xl">
              Honest craft. Modern design. <span className="text-royal">Built to last.</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-foreground/80">
              Blue Collar Interiors is a Gaborone-based design and manufacturing studio specialising in custom kitchens, walk-in closets and bespoke cabinetry.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Founded on the values of honest work and modern design, we operate from our Gwest Industrial workshop where every project is sketched, manufactured and quality-checked before installation. Our supply chain is stocked with fittings, hardware and seating from leading South African suppliers — bringing imported quality without imported pricing.
            </p>

          </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-royal-soft py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-royal">Services</span>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">What we do</h2>
            <p className="mt-4 text-muted-foreground">
              From kitchens to full interior design — one team, one timeline.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <article key={s.title} className="group rounded-lg border border-border bg-white p-8 transition-all hover:-translate-y-1 hover:border-royal hover:shadow-elegant">
                <div className="grid h-12 w-12 place-items-center rounded-md bg-royal-soft text-royal transition-colors group-hover:bg-royal group-hover:text-white">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-lg font-semibold">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/services" className="inline-flex items-center gap-2 text-sm font-medium text-royal hover:text-royal-deep">
              All services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="flex flex-col items-end justify-between gap-6 md:flex-row">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-royal">Portfolio</span>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">Selected work</h2>
          </div>
          <Link to="/portfolio" className="inline-flex items-center gap-2 text-sm font-medium text-royal hover:text-royal-deep">
            See all projects <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {portfolio.map((p) => (
            <figure key={p.title} className="group cursor-pointer overflow-hidden rounded-lg bg-muted">
              <div className="relative overflow-hidden">
                <img src={p.src} alt={p.title} loading="lazy" className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-deep/80 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <figcaption className="absolute inset-x-0 bottom-0 translate-y-2 p-5 text-white opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="text-base font-semibold">{p.title}</div>
                  <div className="text-xs text-white/80">{p.loc}</div>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="border-y border-border bg-royal-soft py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-royal">Testimonials</span>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">What clients say</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <blockquote key={t.name} className="rounded-lg bg-white p-8 shadow-sm">
                <div className="flex gap-1 text-royal">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-4 leading-relaxed text-foreground/80">"{t.quote}"</p>
                <footer className="mt-6 border-t border-border pt-4 text-sm">
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.loc}</div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-royal">Contact</span>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">Let's build something together.</h2>
            <p className="mt-4 max-w-md text-muted-foreground">
              Tell us about your project, request a quote, or book a visit at our Gwest Industrial showroom.
            </p>

            <div className="mt-10 space-y-5">
              <ContactRow icon={Phone} label="Call" value="+267 311 1051" href="tel:+2673111051" />
              <ContactRow icon={Mail} label="Email" value="sales@bluecollar.co.bw" href="mailto:sales@bluecollar.co.bw" />
              <ContactRow icon={MapPin} label="Showroom" value="Unit 4, Plot 28580, Gwest Industrial, Gaborone" />
            </div>

            <div className="mt-10 overflow-hidden rounded-lg border border-border">
              <iframe
                title="Blue Collar Interiors showroom"
                src="https://www.google.com/maps?q=Gwest+Industrial,+Gaborone,+Botswana&output=embed"
                className="h-[280px] w-full"
                loading="lazy"
              />
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </div>
  );
}

function ContactRow({ icon: Icon, label, value, href }: { icon: typeof Phone; label: string; value: string; href?: string }) {
  const inner = (
    <>
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-royal-soft text-royal">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">{label}</div>
        <div className="mt-1 font-medium text-foreground">{value}</div>
      </div>
    </>
  );
  return href ? (
    <a href={href} className="flex items-center gap-4 hover:text-royal">{inner}</a>
  ) : (
    <div className="flex items-center gap-4">{inner}</div>
  );
}

function ContactForm() {
  const [sent, setSent] = useState(false);
  return (
    <form
      onSubmit={(e) => { e.preventDefault(); setSent(true); }}
      className="rounded-lg border border-border bg-white p-8 shadow-sm md:p-10"
    >
      <h3 className="text-2xl font-semibold">Send a message</h3>
      <p className="mt-2 text-sm text-muted-foreground">We respond within one working day.</p>

      <div className="mt-6 grid gap-5">
        <Field label="Name" name="name" required />
        <Field label="Email" name="email" type="email" required />
        <div>
          <label className="block text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Message</label>
          <textarea name="message" rows={5} required className="mt-2 w-full rounded-md border border-input bg-white p-3 text-sm transition-colors focus:border-royal focus:outline-none focus:ring-2 focus:ring-royal/20" />
        </div>
        <button
          type="submit"
          disabled={sent}
          className="inline-flex items-center justify-center gap-2 rounded-md bg-royal px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-royal-deep disabled:opacity-70"
        >
          {sent ? "Thank you — we'll be in touch" : <>Send message <Send className="h-4 w-4" /></>}
        </button>
      </div>
    </form>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">{label}{required && " *"}</label>
      <input name={name} type={type} required={required} className="mt-2 w-full rounded-md border border-input bg-white p-3 text-sm transition-colors focus:border-royal focus:outline-none focus:ring-2 focus:ring-royal/20" />
    </div>
  );
}
