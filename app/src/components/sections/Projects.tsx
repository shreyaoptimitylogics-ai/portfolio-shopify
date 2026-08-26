"use client";

import { useEffect, useRef, useState } from "react";

const ExternalLinkIcon = (props: any) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M14 3h7v7h-2V6.4l-9.3 9.3-1.4-1.4L17.6 5H14V3z" />
        <path d="M5 5h6V3H3v8h2V5z" />
        <path d="M5 19h14V9h2v12H3V9h2v10z" />
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
        desc: "Love My Swag needed a complete online presence. I built their Shopify store from scratch with custom theme design, product collections, and a smooth shopping experience.",
        tech: ["Shopify", "Liquid", "Theme Development", "Shopify Apps"],
        image: "/swag-img.png",
        video: "/video.mp4",
        demo: "https://lovemyswag.com/",
    },
    {
        title: "Dripos – All-in-One Coffee Shop POS Platform",
        desc: "Dripos needed a powerful marketing website for their all-in-one POS and operating system built for coffee shops. Trusted by 3%+ of US coffee shops.",
        tech: ["Webflow", "Animations", "Responsive Design", "No-Code"],
        image: "/Dripos.png",
        video: "/Dripos.mp4",
        demo: "https://www.dripos.com/",
    },
    {
        title: "Blue Bungalow – Women's Fashion Ecommerce Store",
        desc: "Blue Bungalow needed a premium online boutique for Australian women's fashion. Trusted by 90,000+ happy customers with advanced filtering.",
        tech: ["Shopify", "Liquid", "Theme Development", "Shopify Apps"],
        image: "/bluebungalow.png",
        video: "/bluebungalow.mp4",
        demo: "https://bluebungalow.com.au/",
    },
];


const SCROLL_PER_CARD = 600;

function CardUI({ p, index, total }: { p: typeof projects[0]; index: number; total: number }) {
    return (
        <article className="glass rounded-2xl overflow-hidden shadow-soft group w-full relative">
            <div className="absolute top-4 right-5 z-10 text-[11px] font-mono text-muted-foreground/40 select-none">
                {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </div>
            <div className="flex flex-col md:flex-row min-h-[620px]">
                <div className="relative w-full md:w-[55%] aspect-video md:aspect-auto overflow-hidden bg-muted shrink-0">
                    <img
                        src={p.image}
                        alt={p.title}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                    />
                    <video
                        src={p.video}
                        autoPlay muted loop playsInline
                        className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    />
                </div>
                <div className="flex flex-col justify-center p-6 md:p-8 lg:p-10 gap-4">
                    <h3 className="font-display font-semibold leading-snug text-xl sm:text-2xl md:text-[1.6rem]">
                        {p.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                        {p.desc}
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {p.tech.map((t) => (
                            <span key={t} className="rounded-full bg-muted text-muted-foreground text-xs px-3 py-1 font-mono">
                                {t}
                            </span>
                        ))}
                    </div>
                    <div>
                        <a
                            href={p.demo}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-semibold hover:text-emerald transition-colors"
                        >
                            <ExternalLinkIcon className="h-4 w-4" />
                            Live Demo
                        </a>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default function Projects() {
    const containerRef = useRef<HTMLDivElement>(null);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [cardH, setCardH] = useState(0);


    const totalScroll = projects.length * SCROLL_PER_CARD;

    useEffect(() => {
        const measure = () => {
            if (cardRefs.current[0]) {
                const h = cardRefs.current[0].getBoundingClientRect().height;
                if (h > 0) setCardH(h);
            }
        };
        measure();
        window.addEventListener("resize", measure);
        return () => window.removeEventListener("resize", measure);
    }, []);

    useEffect(() => {
        if (!cardH) return;

        const onScroll = () => {
            const container = containerRef.current;
            if (!container) return;

            const containerTop = container.getBoundingClientRect().top;
            const viewH = window.innerHeight;


            const scrolled = Math.max(0, -containerTop);

            projects.forEach((_, i) => {
                const card = cardRefs.current[i];
                if (!card) return;


                const cardScrollStart = i * SCROLL_PER_CARD;
                const cardScrollEnd = cardScrollStart + SCROLL_PER_CARD;


                const progress = Math.min(1, Math.max(0,
                    (scrolled - cardScrollStart) / SCROLL_PER_CARD
                ));

                if (i === 0) {

                    card.style.transform = "translateY(0)";
                    card.style.zIndex = "1";
                    return;
                }


                if (progress < 1) {

                    const fromY = viewH - cardH / 2 + 20;
                    const translateY = fromY * (1 - progress);
                    card.style.transform = `translateY(${translateY}px)`;
                } else {

                    card.style.transform = "translateY(0)";
                }


                card.style.zIndex = String(i + 1);
            });
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, [cardH]);

    return (
        <section id="projects" className="bg-muted/40" style={{ overflow: "clip" }}>
            <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-20">


                <div className="mb-10 sm:mb-14">
                    <p className="text-xs sm:text-sm font-medium text-emerald uppercase tracking-widest">
                        Projects
                    </p>
                    <h2 className="mt-3 font-bold leading-tight text-3xl sm:text-4xl md:text-5xl">
                        Selected work.
                    </h2>
                </div>
            </div>


            <div
                ref={containerRef}
                style={{ height: `${totalScroll}px` }}
                className="relative"
            >

                <div
                    style={{
                        position: "sticky",
                        top: 0,
                        height: "100vh",
                        display: "flex",
                        alignItems: "flex-start",
                        justifyContent: "center",
                        overflow: "hidden",
                        paddingTop: "20px",
                    }}
                >
                    <div className="w-full max-w-6xl px-4 sm:px-6 relative" style={{ height: cardH || "auto" }}>
                        {projects.map((p, i) => (
                            <div
                                key={p.title}
                                ref={(el) => { cardRefs.current[i] = el; }}
                                style={{
                                    position: i === 0 ? "relative" : "absolute",
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    zIndex: i + 1,
                                    willChange: "transform",
                                    transform: i === 0 ? "translateY(0)" : `translateY(100vh)`,
                                }}
                            >
                                <CardUI p={p} index={i} total={projects.length} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="pb-14 sm:pb-20" />
        </section>
    );
}