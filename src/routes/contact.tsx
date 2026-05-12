import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Showroom — Blue Collar Interiors" },
      { name: "description", content: "Visit our Gwest Industrial showroom or request a quote. +267 311 1051 · sales@bluecollar.co.bw" },
      { property: "og:title", content: "Contact — Blue Collar Interiors" },
      { property: "og:description", content: "Book a consultation at our Gaborone showroom." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <section className="border-b border-border/60 bg-cream pb-16 pt-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">— Contact</span>
          <h1 className="mt-6 font-display text-5xl tracking-tight md:text-7xl text-balance">Let's talk.</h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Tell us about your project, request a quote, or book a visit at our Gwest Industrial showroom.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-12">
          <aside className="space-y-10 lg:col-span-5">
            {[
              { icon: Phone, label: "Call", value: "+267 311 1051", href: "tel:+2673111051" },
              { icon: Mail, label: "Email", value: "sales@bluecollar.co.bw", href: "mailto:sales@bluecollar.co.bw" },
              { icon: MapPin, label: "Showroom", value: "Unit 4, Plot 28580\nGwest Industrial, Gaborone, Botswana" },
              { icon: Clock, label: "Hours", value: "Mon — Fri · 08:00 – 17:00\nSat · 09:00 – 13:00" },
            ].map((c) => (
              <div key={c.label} className="border-l-2 border-brass pl-6">
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground"><c.icon className="h-3.5 w-3.5" /> {c.label}</div>
                {c.href ? (
                  <a href={c.href} className="mt-2 block whitespace-pre-line font-display text-2xl text-foreground hover:text-brass">{c.value}</a>
                ) : (
                  <p className="mt-2 whitespace-pre-line font-display text-2xl">{c.value}</p>
                )}
              </div>
            ))}
          </aside>

          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="lg:col-span-7 rounded-sm border border-border bg-background p-8 shadow-elegant md:p-12"
          >
            <h2 className="font-display text-3xl">Request a quote</h2>
            <p className="mt-2 text-sm text-muted-foreground">We respond within one working day.</p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <Field label="Full name" name="name" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone" name="phone" />
              <Field label="Project type" name="type" placeholder="Kitchen, closet, vanity…" />
            </div>
            <div className="mt-5">
              <label className="block text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Tell us about your project</label>
              <textarea name="message" rows={6} required className="mt-2 w-full rounded-sm border border-input bg-transparent p-4 text-sm focus:border-ink focus:outline-none" />
            </div>
            <button
              type="submit"
              disabled={sent}
              className="mt-8 inline-flex items-center gap-2 rounded-sm bg-ink px-8 py-4 text-xs uppercase tracking-[0.22em] text-cream transition-colors hover:bg-ink-deep disabled:bg-brass"
            >
              {sent ? "Thank you — we'll be in touch" : <>Send enquiry <Send className="h-4 w-4" /></>}
            </button>
          </form>
        </div>
      </section>

      <section className="border-t border-border bg-secondary">
        <iframe
          title="Blue Collar Interiors showroom map"
          src="https://www.google.com/maps?q=Gwest+Industrial,+Gaborone,+Botswana&output=embed"
          className="h-[420px] w-full grayscale"
          loading="lazy"
        />
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required, placeholder }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <label className="block text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{label}{required && " *"}</label>
      <input name={name} type={type} required={required} placeholder={placeholder} className="mt-2 w-full rounded-sm border border-input bg-transparent p-3 text-sm focus:border-ink focus:outline-none" />
    </div>
  );
}
