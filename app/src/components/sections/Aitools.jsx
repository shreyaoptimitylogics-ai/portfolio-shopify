"use client";

import { motion } from "framer-motion";


/* ─────────────────────────────────────────
   AI TOOLS DATA
───────────────────────────────────────── */
const aiTools = [
  {
    name: "Shopify",
    category: "E-Commerce Platform",
    desc: "Build and manage high-converting online stores with custom themes, apps, and optimized checkout experiences.",
    logo: "/shopify.png",
    hasBg: true,
  },
  {
    name: "Webflow",
    category: "No-Code Development",
    desc: "Create responsive, visually stunning websites with advanced CMS and animations without coding.",
    logo: "/webflow.png",
    hasBg: true,
  },
  {
    name: "WooCommerce",
    category: "WordPress E-Commerce",
    desc: "Develop scalable online stores with WooCommerce, tailored for flexibility and business growth.",
    logo: "/woocommerce.png",
    hasBg: true,
  },
  {
    name: "Replo",
    category: "Landing Page Builder",
    desc: "Design high-converting Shopify landing pages and product pages with a drag-and-drop workflow.",
    logo: "/replo.jpeg",
    hasBg: true,
  },
  {
    name: "Wix Studio",
    category: "Website Builder",
    desc: "Build modern business websites with advanced no-code tools and responsive layouts.",
    logo: "/wixstudio.avif",
    hasBg: true,
  },
  {
    name: "Figma",
    category: "UI/UX Design",
    desc: "Design wireframes, prototypes, and complete user interfaces before development.",
    logo: "/figma.png",
    hasBg: false,
  },
  {
    name: "Klaviyo",
    category: "Email Marketing",
    desc: "Set up email automation, customer segmentation, and marketing campaigns for Shopify stores.",
    logo: "/Klaviyo.png",
    hasBg: true,
  },
  {
    name: "Judge.me",
    category: "Shopify App",
    desc: "Collect and showcase customer reviews to increase trust and conversions.",
    logo: "/judgeme.jpeg",
    hasBg: true,
  },
];

/* ─────────────────────────────────────────
   COMPONENT
───────────────────────────────────────── */
export default function AITools() {
  return (
    <section
      id="ai-tools"
      className="py-14 sm:py-20 md:py-24 lg:py-28 relative overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute -top-32 right-0 h-96 w-96 rounded-full bg-[color:var(--emerald)]/8 blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-[color:var(--emerald)]/5 blur-3xl -z-10 pointer-events-none" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">

        {/* ── HEADER ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="text-xs sm:text-sm font-medium text-[color:var(--emerald)] uppercase tracking-widest">
            AI Workflow
          </p>

          <h2 className="mt-3 font-bold leading-tight text-3xl sm:text-4xl md:text-5xl">
            I build faster with AI.
          </h2>

          <p className="mt-4 sm:mt-5 leading-relaxed text-muted-foreground text-base sm:text-lg max-w-[52ch]">
            These are the AI tools I use daily — from generating UI components to
            shipping full-stack features. AI doesn't replace craft; it amplifies it.
          </p>
        </motion.div>

        {/* ── TOOLS GRID ── */}
        <div className="mt-8 sm:mt-10 lg:mt-12 grid gap-4 sm:gap-5
                    grid-cols-1
                    sm:grid-cols-2
                    lg:grid-cols-4"
        >
          {aiTools.map((tool, i) => (
            <motion.a
              key={tool.name}
              href={tool.href}
              target="_blank"
              rel="noreferrer noopener"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ y: -6 }}
              className="glass rounded-2xl p-5 sm:p-6 shadow-soft hover:shadow-elegant transition-all duration-200 group flex flex-col"
            >
              {/* ── Icon + Category row ── */}
              <div className="flex items-center justify-between gap-3 mb-4">

                {/* Logo container — white bg for logos without bg */}
                <div
                  className={`
                    h-10 w-10 sm:h-11 sm:w-11 
                    rounded-xl 
                    flex items-center justify-center 
                    group-hover:scale-110 transition-transform 
                    shrink-0 overflow-hidden
                    ${!tool.hasBg
                    ? "bg-white p-1.5"
                    : "bg-transparent"
                  }
                  `}
                >
                  <img
                    src={tool.logo}
                    alt={tool.name}
                    className="h-full w-full rounded-lg object-contain"
                  />
                </div>

                {/* Category badge — no border, just bg + radius */}
                <span className="
                  text-[9px] sm:text-[10px]
                  font-semibold uppercase tracking-widest
                  text-[color:var(--emerald)]
                  bg-[color:var(--emerald)]/10
                  px-2 py-1
                  rounded-full
                  leading-tight
                  text-center
                ">
                  {tool.category}
                </span>
              </div>

              {/* Tool name */}
              <h3 className="font-semibold text-sm sm:text-base text-foreground">
                {tool.name}
              </h3>

              {/* Description */}
              <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed flex-1">
                {tool.desc}
              </p>

              {/* Visit link */}
              <div className="mt-4 flex items-center gap-1.5 text-[color:var(--emerald)] text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <span>Visit</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </motion.a>
          ))}
        </div>

        {/* ── BOTTOM TAGLINE ── */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 sm:mt-12 text-center text-xs sm:text-sm text-muted-foreground"
        >
          Using AI as a{" "}
          <span className="text-[color:var(--emerald)] font-medium">
            force multiplier
          </span>{" "}
          — not a shortcut. Every line reviewed, every decision intentional.
        </motion.p>

      </div>
    </section>
  );
}