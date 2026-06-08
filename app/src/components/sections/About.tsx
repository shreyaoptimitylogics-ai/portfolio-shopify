"use client";

import { motion } from "framer-motion";
import {ShoppingBag,
    Globe,
    Store,
    Puzzle } from "lucide-react";

const cards = [
    {
        Icon: ShoppingBag,
        title: "Shopify Development",
        desc: "Custom Shopify stores with premium themes, app integrations, and conversion-focused UX that drives real sales.",
    },
    {
        Icon: Globe,
        title: "Webflow & Wix",
        desc: "No-code websites built for speed and scale — pixel-perfect designs without touching a single line of code.",
    },
    {
        Icon: Store,
        title: "WooCommerce",
        desc: "WordPress-based stores with WooCommerce — flexible, scalable, and tailored to your business needs.",
    },
    {
        Icon: Puzzle,
        title: "Replo & Integrations",
        desc: "High-converting Shopify landing pages with Replo, plus seamless third-party app and payment integrations.",
    },
];

export default function About() {
    return (
        <section id="about" className="py-14 sm:py-20 md:py-24 lg:py-28">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">

                {/* ── HEADER ─────────────────────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="max-w-2xl"
                >
                    <p className="text-xs sm:text-sm font-medium text-emerald uppercase tracking-widest">
                        About
                    </p>

                    <h2 className="mt-3 font-bold leading-tight text-3xl sm:text-4xl md:text-5xl">
                        A specialist who cares about conversions.
                    </h2>

                    <p className="mt-4 sm:mt-5 leading-relaxed text-muted-foreground text-base sm:text-lg">
                        Shopify & No-Code expert. 4+ years. Webflow, WooCommerce & Replo specialist.
                        I care about the store experience, the conversions, and everything in between —
                        because great ecommerce lives in the details.
                    </p>
                </motion.div>

                {/* ── CARDS ──────────────────────────────────────── */}
                {/*
                    Breakpoints:
                    < 425px  → 1 column  (mobile)
                    425px+   → 2 columns (large mobile)
                    768px+   → 2 columns (tablet)
                    1024px+  → 4 columns (desktop)
                */}
                <div className="mt-8 sm:mt-10 lg:mt-12 grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                    {cards.map((c, i) => (
                        <motion.div
                            key={c.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.08 }}
                            whileHover={{ y: -6 }}
                            className="glass rounded-2xl p-5 sm:p-6 shadow-soft hover:shadow-elegant transition-shadow group"
                        >
                            {/* icon */}
                            <div className="h-10 w-10 sm:h-11 sm:w-11 rounded-xl bg-gradient-accent flex items-center justify-center text-primary-foreground shadow-glow group-hover:scale-110 transition-transform">
                                <c.Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                            </div>

                            {/* title */}
                            <h3 className="mt-3 sm:mt-4 font-semibold text-sm sm:text-base">
                                {c.title}
                            </h3>

                            {/* desc */}
                            <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                                {c.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}