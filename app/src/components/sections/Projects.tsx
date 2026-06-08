"use client";

import { motion } from "framer-motion";

const GithubIcon = (props: any) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M12 .5C5.7.5.7 5.7.7 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.6-1.3-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1.2 2.1 2.7 2.1.6 0 1.2-.1 1.7-.3.1-.7.4-1.2.7-1.5-2.6-.3-5.3-1.3-5.3-6a4.7 4.7 0 011.2-3.2 4.3 4.3 0 01.1-3.2s1-.3 3.3 1.2a11.2 11.2 0 016 0c2.3-1.5 3.3-1.2 3.3-1.2.4 1.2.2 2.2.1 3.2a4.7 4.7 0 011.2 3.2c0 4.7-2.7 5.7-5.3 6 .4.4.8 1.1.8 2.3v3.4c0 .3.2.7.8.6A11.3 11.3 0 0023.3 12C23.3 5.7 18.3.5 12 .5z"/>
    </svg>
);

const ExternalLinkIcon = (props: any) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M14 3h7v7h-2V6.4l-9.3 9.3-1.4-1.4L17.6 5H14V3z"/>
        <path d="M5 5h6V3H3v8h2V5z"/>
        <path d="M5 19h14V9h2v12H3V9h2v10z"/>
    </svg>
);

const projects = [
    {
        title: "Ever Pretty – Fashion Ecommerce Store",
        desc: "Ever Pretty needed a high-converting online store. I built a fully customized Shopify store with premium theme customization, optimized product pages, and seamless checkout experience.",
        tech: ["Shopify", "Liquid", "Theme Customization", "Shopify Apps"],
        image: "/EverPreety-coverImg.png",
        video: "/EverPreety-Video.mp4",
        demo: "https://www.ever-pretty.com/",
    },
    {
        title: "Love My Swag – Custom Shopify Store",
        desc: "Love My Swag needed a complete online presence. I built their Shopify store from scratch with custom theme design, product collections, and a smooth shopping experience optimized for conversions.",
        tech: ["Shopify", "Liquid", "Theme Development", "Shopify Apps"],
        image: "/swag-img.png",
        video: "/video.mp4",
        demo: "https://lovemyswag.com/",
    },
    {
        title: "Dripos – All-in-One Coffee Shop POS Platform",
        desc: "Dripos needed a powerful marketing website for their all-in-one POS and operating system built for coffee shops. I designed and developed their complete Webflow website with clean sections, smooth animations, and a conversion-focused layout trusted by 3%+ of US coffee shops.",
        tech: ["Webflow", "Animations", "Responsive Design", "No-Code"],
        image: "/Dripos.png",
        video: "/Dripos.mp4",
        demo: "https://www.dripos.com/",
    },
    {
        title: "Blue Bungalow – Women's Fashion Ecommerce Store",
        desc: "Blue Bungalow needed a premium online boutique for Australian women's fashion. I built their complete Shopify store with custom theme, advanced product filtering by size, style & fabric, and a seamless shopping experience trusted by 90,000+ happy customers.",
        tech: ["Shopify", "Liquid", "Theme Development", "Shopify Apps"],
        image: "/bluebungalow.png",
        video: "/bluebungalow.mp4",
        demo: "https://bluebungalow.com.au/",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-14 sm:py-20 md:py-24 lg:py-28 bg-muted/40">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">

                {/* ── HEADER ─────────────────────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="text-xs sm:text-sm font-medium text-emerald uppercase tracking-widest">
                        Projects
                    </p>
                    <h2 className="mt-3 font-bold leading-tight
                        text-3xl
                        sm:text-4xl
                        md:text-5xl">
                        Selected work.
                    </h2>
                </motion.div>

                {/* ── GRID ───────────────────────────────────────────
                    mobile  (< 768px) → 1 col
                    768px+  (md)      → 2 col
                    1024px+ (lg)      → 2 col (same, wider cards)
                ──────────────────────────────────────────────────── */}
                <div className="mt-8 sm:mt-10 lg:mt-12 grid gap-5 sm:gap-6
                    grid-cols-1
                    md:grid-cols-2">

                    {projects.map((p, i) => (
                        <motion.article
                            key={p.title}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                            className="glass rounded-xl sm:rounded-2xl overflow-hidden shadow-soft hover:shadow-elegant group"
                        >
                            {/* ── Thumbnail / Video ── */}
                            <div className="relative aspect-video overflow-hidden bg-muted">
                                <img
                                    src={p.image}
                                    alt={p.title}
                                    loading="lazy"
                                    className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                                />
                                <video
                                    src={p.video}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                                />
                            </div>

                            {/* ── Content ── */}
                            <div className="p-4 sm:p-6">
                                <h3 className="font-display font-semibold leading-snug
                                    text-base
                                    sm:text-lg
                                    md:text-xl">
                                    {p.title}
                                </h3>

                                <p className="mt-2 text-muted-foreground leading-relaxed
                                    text-xs
                                    sm:text-sm">
                                    {p.desc}
                                </p>

                                {/* Tech tags */}
                                <div className="mt-3 sm:mt-4 flex flex-wrap gap-1.5 sm:gap-2">
                                    {p.tech.map((t) => (
                                        <span
                                            key={t}
                                            className="rounded-full bg-muted text-muted-foreground
                                                text-[10px] px-2 py-0.5
                                                sm:text-xs sm:px-2.5 sm:py-1"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="mt-4 sm:mt-5 flex items-center gap-4">
                                    <a
                                        href={p.demo}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-1.5 font-medium hover:text-emerald transition-colors
                                            text-xs
                                            sm:text-sm"
                                    >
                                        <ExternalLinkIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                                        Live Demo
                                    </a>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>

            </div>
        </section>
    );
}