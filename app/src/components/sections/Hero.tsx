"use client";

import { motion } from "framer-motion";
import ThreeBackground from "@/app/src/components/ThreeBackground";


// const GithubIcon = (props: any) => (
//     <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
//         <path d="M12 .5C5.7.5.7 5.7.7 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.6-1.3-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1.2 2.1 2.7 2.1.6 0 1.2-.1 1.7-.3.1-.7.4-1.2.7-1.5-2.6-.3-5.3-1.3-5.3-6a4.7 4.7 0 011.2-3.2 4.3 4.3 0 01.1-3.2s1-.3 3.3 1.2a11.2 11.2 0 016 0c2.3-1.5 3.3-1.2 3.3-1.2.4 1.2.2 2.2.1 3.2a4.7 4.7 0 011.2 3.2c0 4.7-2.7 5.7-5.3 6 .4.4.8 1.1.8 2.3v3.4c0 .3.2.7.8.6A11.3 11.3 0 0023.3 12C23.3 5.7 18.3.5 12 .5z" />
//     </svg>
// );
//
// const LinkedinIcon = (props: any) => (
//     <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
//         <path d="M20.4 20.4h-3.6v-5.6c0-1.3 0-3-1.9-3s-2.2 1.5-2.2 2.9v5.7H9.1V9h3.4v1.6h.1c.5-.9 1.7-1.9 3.5-1.9 3.8 0 4.5 2.5 4.5 5.8v5.9zM5.3 7.4a2.1 2.1 0 11.1-4.2 2.1 2.1 0 01-.1 4.2zM3.5 20.4h3.6V9H3.5v11.4z" />
//     </svg>
// );
//
const MailIcon = (props: any) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5z" />
    </svg>
);

const ArrowRightIcon = (props: any) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M13 5l7 7-7 7-1.4-1.4L16.2 13H4v-2h12.2l-4.6-4.6L13 5z" />
    </svg>
);

export default function Hero() {
    const go = (id: string) =>
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

    return (
        <section
            id="home"
            className="
        relative min-h-screen flex items-center overflow-hidden
        pt-20 pb-12
        xs:pt-24 xs:pb-14
        sm:pt-24 sm:pb-14
        md:pt-28 md:pb-16
        lg:pt-28 lg:pb-16
    "
        >
            <ThreeBackground />

            <div
                className="
                    mx-auto w-full max-w-6xl px-4
                    xs:px-5
                    sm:px-6
                    relative
                "
            >
                {/* ── GRID ─────────────────────────────────────────────────────── */}
                <div
                    className="
                        grid items-center gap-8
                        grid-cols-1
                        sm:grid-cols-1
                        lg:grid-cols-[1.3fr_1fr]
                        lg:gap-12
                    "
                >
                    {/* ── IMAGE (shows first on mobile / tablet, right on desktop) ── */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="
                            flex justify-center
                            order-first
                            lg:order-last lg:justify-self-center
                        "
                    >
                        <div className="relative">
                            {/* glow blob */}
                            <div className="absolute inset-0 -z-10 blur-3xl opacity-60 bg-gradient-accent rounded-full" />

                            {/* avatar ring */}
                            <div
                                className="
                                    relative rounded-full p-1 bg-gradient-accent shadow-elegant
                                    h-60 w-60
                                    xs:h-98 xs:w-98
                                    sm:h-96 sm:w-96
                                    md:h-74 md:w-74
                                    lg:h-90 lg:w-90
                                    xl:h-96 xl:w-96
                                "
                            >
                                <div className="h-full w-full rounded-full overflow-hidden bg-card">
                                    <img
                                        src="/shreya prajapati.png"
                                        className="h-full w-full object-cover scale-110"
                                        style={{ objectPosition: "center 10%" }}
                                        />
                                </div>

                                {/* spinning dashed ring */}
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
                                    className="absolute -inset-3 rounded-full border border-dashed border-foreground/15"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* ── TEXT ─────────────────────────────────────────────────── */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="
                            flex flex-col items-center text-center
                            lg:items-start lg:text-left
                            order-last
                            lg:order-first
                        "
                    >
                        {/* availability badge */}
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-medium text-muted-foreground shadow-soft">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald animate-pulse" />
                            Available for new opportunities
                        </span>

                        {/* heading */}
                        <h1
                            className="
                                mt-5 font-bold leading-[1.05]
                                text-4xl
                                xs:text-5xl
                                sm:text-5xl
                                md:text-6xl
                                lg:text-6xl
                                xl:text-7xl
                            "
                        >
                            Hi, I'm{" "}
                            <span className="text-gradient">Shreya Prajapati</span>
                        </h1>

                        {/* sub-title */}
                        <p
                            className="
                                mt-3 font-medium text-foreground/80
                                text-lg
                                sm:text-xl
                                md:text-2xl
                            "
                        >
                            Shopify & No-Code Expert
                        </p>

                        {/* description */}
                        <p
                            className="
                                mt-3 text-muted-foreground max-w-xl
                                text-sm
                                xs:text-base
                            "
                        >
                            Shopify & No-Code specialist — I build high-converting stores on Shopify, Webflow,
                            WooCommerce, Wix and Replo that drive real business results.
                        </p>

                        {/* CTA buttons */}
                        <div className="mt-7 flex flex-wrap justify-center lg:justify-start gap-3">
                            <button
                                onClick={() => go("projects")}
                                className="
                                    group inline-flex items-center gap-2 rounded-full
                                    bg-primary text-primary-foreground
                                    px-5 py-2.5 text-sm font-medium
                                    shadow-elegant hover:shadow-glow hover:-translate-y-0.5
                                    transition-all
                                    sm:px-6 sm:py-3
                                "
                            >
                                View Projects
                                <ArrowRightIcon className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>

                        {/* social icons */}
                        <div className="mt-7 flex items-center gap-3">
                            <a
                                href="https://contra.com/shreya_prajapati/work?r=shreya_prajapati"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Contra"
                                className="h-10 w-10 rounded-full glass shadow-soft flex items-center justify-center hover:scale-110 transition-all"
                            >
                                <img
                                    src="/contra.png"
                                    alt="Contra"
                                    className="h-5 w-5 object-contain"
                                />
                            </a>

                            {/* Upwork */}
                            <a
                                href="https://www.upwork.com/freelancers/~013c7188708618e8b3"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Upwork"
                                className="h-10 w-10 rounded-full glass shadow-soft flex items-center justify-center hover:scale-110 transition-all"
                            >
                                <img
                                    src="/upworkkkkk-removebg-preview.png"
                                    alt="Upwork"
                                    className="h-5 w-5 object-contain bg-white rounded-full"
                                />
                            </a>

                            {/* Email */}
                            <a
                                href="mailto:shreya.optimitylogics@gmail.com"
                                aria-label="Email"
                                className="h-10 w-10 rounded-full glass shadow-soft flex items-center justify-center hover:scale-110 hover:text-emerald transition-all"
                            >
                                <MailIcon className="h-4 w-4" />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}