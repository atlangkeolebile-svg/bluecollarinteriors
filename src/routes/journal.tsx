import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import k1 from "@/assets/project-kitchen-1.png";
import k2 from "@/assets/project-kitchen-2.png";
import c1 from "@/assets/project-closet-grey.png";

export const Route = createFileRoute("/journal")({
  head: () => ({
    meta: [
      { title: "Journal — Design notes from Blue Collar Interiors" },
      { name: "description", content: "Design tips, kitchen planning notes and behind-the-scenes from our Gaborone studio." },
      { property: "og:title", content: "Journal — Blue Collar Interiors" },
      { property: "og:description", content: "Design notes from our Gaborone studio." },
    ],
  }),
  component: Journal,
});

const posts = [
  { img: k1, tag: "Kitchen Planning", title: "Five questions to answer before designing a kitchen", date: "May 2026", read: "6 min" },
  { img: c1, tag: "Closets", title: "Walk-in vs reach-in: choosing the right closet for your bedroom", date: "Apr 2026", read: "5 min" },
  { img: k2, tag: "Materials", title: "Quartz, granite or sintered stone — a Botswana buyer's guide", date: "Mar 2026", read: "8 min" },
];

function Journal() {
  return (
    <>
      <section className="border-b border-border/60 bg-cream pb-16 pt-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">— Journal</span>
          <h1 className="mt-6 font-display text-5xl tracking-tight md:text-7xl text-balance">Design notes from the studio.</h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-3">
          {posts.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden rounded-sm">
                <img src={p.img} alt={p.title} loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="mt-5 flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                <span>{p.tag}</span><span>·</span><span>{p.date}</span><span>·</span><span>{p.read}</span>
              </div>
              <h2 className="mt-3 font-display text-2xl leading-snug group-hover:text-brass">{p.title}</h2>
            </motion.article>
          ))}
        </div>
      </section>
    </>
  );
}
