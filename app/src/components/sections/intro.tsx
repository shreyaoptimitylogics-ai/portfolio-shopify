"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

export const IntroVideo = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;
        video.load();
    }, []);

    const handleWatch = () => {
        const v = videoRef.current;
        if (!v) return;
        v.scrollIntoView({ behavior: "smooth", block: "center" });
        v.play();
    };

    return (
        <section
            id="intro"
            className="relative z-10 py-14 sm:py-20 md:py-24 lg:py-28 overflow-hidden"
        >
            {/* Background glow */}
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-[300px] sm:w-[600px] rounded-full blur-3xl -z-10" />

            <div className="mx-auto max-w-6xl px-4 sm:px-6">

                {/* ── Label ── */}
                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--emerald)] mb-4 sm:mb-5"
                >
                    Introduction
                </motion.p>

                {/* ── Heading ── */}
                <motion.h2
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="font-display font-bold leading-tight tracking-tight mb-3 sm:mb-4
                        text-3xl
                        sm:text-4xl
                        md:text-5xl"
                >
                    Watch how I{" "}
                    <span className="text-gradient">bring ideas</span>
                    <br />to life.
                </motion.h2>

                {/* ── Subtext ── */}
                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-muted-foreground leading-relaxed max-w-xl mb-8 sm:mb-12
                        text-sm
                        sm:text-base"
                >
                    A quick walkthrough of my work, process, and the kind of
                    experiences I craft — from concept to clean, production-ready code.
                </motion.p>

                {/* ── Video Card ── */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="relative"
                >
                    {/* Glow behind card */}
                    <div className="absolute -inset-1 rounded-3xl bg-[color:var(--emerald)]/8 dark:bg-[color:var(--emerald)]/5 blur-2xl -z-10" />

                    <div className="rounded-xl sm:rounded-2xl overflow-hidden border border-border bg-card shadow-elegant hover:shadow-glow transition-shadow duration-300">

                        {/* ── Chrome top bar ── */}
                        <div className="flex items-center gap-2 sm:gap-2.5 px-3 sm:px-5 py-2.5 sm:py-3.5 bg-muted/60 dark:bg-secondary/60 border-b border-border">
                            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ff5f57]" />
                            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ffbd2e]" />
                            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#28c840]" />
                            <div className="flex-1 flex items-center justify-center gap-1.5 bg-background/60 dark:bg-muted/40 rounded-lg py-1 sm:py-1.5 px-2 sm:px-4 text-[10px] sm:text-[12px] text-muted-foreground truncate">
                                <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="3" y="11" width="18" height="11" rx="2"/>
                                    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                                </svg>
                                <span className="truncate">shreya.prajapati / intro</span>
                            </div>
                        </div>

                        {/* ── Video area ── */}
                        <div className="relative aspect-video bg-black overflow-hidden">
                            <video
                                ref={videoRef}
                                className="absolute inset-0 w-full h-full object-cover"
                                preload="auto"
                                playsInline
                                controls
                                poster="/banner-intro.png"
                                onLoadedData={() => setLoaded(true)}
                                onCanPlay={() => setLoaded(true)}
                                style={{ display: "block" }}
                            >
                                <source src="/banner-intro.mp4" type="video/mp4" />
                            </video>

                            {/* Placeholder — shown when video not loaded */}
                            {!loaded && (
                                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 sm:gap-4 bg-gradient-to-br from-[oklch(0.18_0.02_250)] via-[oklch(0.22_0.04_200)] to-[oklch(0.18_0.02_250)] z-10">
                                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-[color:var(--emerald)]/40 bg-[color:var(--emerald)]/10 flex items-center justify-center text-[color:var(--emerald)] animate-pulse">
                                        <svg className="w-5 h-5 sm:w-7 sm:h-7 ml-1" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M8 5v14l11-7z"/>
                                        </svg>
                                    </div>
                                    <p className="text-xs sm:text-sm text-[oklch(0.6_0.02_230)]">
                                        Loading video...
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* ── Bottom bar ── */}
                        <div className="flex items-center justify-between px-3 sm:px-5 py-3 sm:py-4 bg-muted/60 dark:bg-secondary/60 border-t border-border gap-3">
                            <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
                                <span className="relative flex h-2 w-2 shrink-0">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[color:var(--emerald)] opacity-60" />
                                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[color:var(--emerald)]" />
                                </span>
                                <span className="font-medium text-foreground font-display truncate
                                    text-xs
                                    sm:text-sm">
                                    Shreya Prajapati — Intro
                                </span>
                            </div>

                            {/* ── Watch button ── */}
                            <button
                                onClick={handleWatch}
                                className="shrink-0 font-semibold uppercase tracking-wider text-[color:var(--emerald)] bg-[color:var(--emerald)]/10 border border-[color:var(--emerald)]/25 rounded-full hover:bg-[color:var(--emerald)]/20 transition-colors duration-200 cursor-pointer
                                    text-[10px] px-2.5 py-1
                                    sm:text-[11px] sm:px-3 sm:py-1"
                            >
                                ▶ Watch
                            </button>
                        </div>

                    </div>
                </motion.div>
            </div>
        </section>
    );
};