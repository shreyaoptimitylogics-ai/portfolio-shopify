"use client";
import { motion } from "framer-motion";
import {
    SiFramer,SiFigma,
   SiGit, SiGithub, SiVercel, SiPostman,
    SiShopify, SiWebflow, SiWix, SiWoo, SiWordpress, SiStripe} from "react-icons/si";
import {
    MdCode, MdGridView, MdMailOutline
} from "react-icons/md";

const groups = [
    {
        title: "Shopify",
        items: [
            { name: "Shopify",        Icon: SiShopify,     color: "#96BF48" },
            { name: "Liquid",         Icon: SiShopify,     color: "#96BF48" },
            { name: "Shopify Plus",   Icon: SiShopify,     color: "#5C6AC4" },
            { name: "Replo",          Icon: MdGridView,    color: "#7C3AED" },
            { name: "PageFly",        Icon: MdGridView,    color: "#FF6B35" },
        ],
    },
    {
        title: "No-Code Platforms",
        items: [
            { name: "Webflow",        Icon: SiWebflow,     color: "#4353FF" },
            { name: "Wix",            Icon: SiWix,         color: "#FAAD00" },
            { name: "Framer",         Icon: SiFramer,      color: "#0055FF" },
            { name: "Figma",          Icon: SiFigma,       color: "#F24E1E" },
        ],
    },
    {
        title: "Ecommerce",
        items: [
            { name: "WooCommerce",    Icon: SiWoo,         color: "#7F54B3" },
            { name: "WordPress",      Icon: SiWordpress,   color: "#21759B" },
            { name: "Klaviyo",        Icon: MdMailOutline, color: "#00B140" },
            { name: "Stripe",         Icon: SiStripe,      color: "#635BFF" },
        ],
    },
    {
        title: "Tools",
        items: [
            { name: "Git",            Icon: SiGit,         color: "#F05032" },
            { name: "GitHub",         Icon: SiGithub,      color: "currentColor" },
            { name: "Vercel",         Icon: SiVercel,      color: "currentColor" },
            { name: "Postman",        Icon: SiPostman,     color: "#FF6C37" },
            { name: "VS Code",        Icon: MdCode,        color: "#007ACC" },
        ],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="py-14 sm:py-20 md:py-24 lg:py-28 bg-muted/40">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">

                {/* ── HEADER ─────────────────────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className=""
                >
                    <p className="text-xs sm:text-sm font-medium text-emerald uppercase tracking-widest">
                        Skills
                    </p>
                    <h2 className="mt-3 font-bold leading-tight text-3xl sm:text-4xl md:text-5xl">
                        Tools I work with daily.
                    </h2>
                </motion.div>

                {/* ── GRID ───────────────────────────────────────────
                    mobile  (<425px) → 1 col
                    425px+           → 1 col  (cards full width, readable)
                    768px+  (md)     → 2 col
                    1024px+ (lg)     → 4 col
                ──────────────────────────────────────────────────── */}
                <div className="mt-8 sm:mt-10 lg:mt-12 grid gap-4 sm:gap-5
                    grid-cols-1
                    md:grid-cols-2
                    lg:grid-cols-4">

                    {groups.map((g, i) => (
                        <motion.div
                            key={g.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.08 }}
                            className="glass rounded-2xl p-5 sm:p-6 shadow-soft"
                        >
                            <h3 className="font-semibold text-base sm:text-lg">{g.title}</h3>

                            <div className="mt-3 sm:mt-4 flex flex-wrap gap-2">
                                {g.items.map(({ name, Icon, color }) => (
                                    <span
                                        key={name}
                                        className="inline-flex items-center gap-1.5 font-medium rounded-full bg-card border border-border hover:border-emerald hover:-translate-y-0.5 transition-all duration-150 cursor-default
                                            text-xs px-2.5 py-1
                                            sm:text-xs sm:px-3 sm:py-1.5"
                                    >
                                        <Icon
                                            className="h-3 w-3 sm:h-3.5 sm:w-3.5 shrink-0 transition-colors duration-150"
                                            style={{ color }}
                                        />
                                        {name}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}