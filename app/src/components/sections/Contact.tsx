"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { z } from "zod";
import { Button } from "@/app/src/components/ui/button";
import { Input } from "@/app/src/components/ui/input";
import { Textarea } from "@/app/src/components/ui/textarea";
import { toast } from "sonner";

/* ── ICONS ── */
const Mail = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5z" />
    </svg>
);
const Github = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M12 .5C5.7.5.7 5.7.7 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.6-1.3-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1.2 2.1 2.7 2.1.6 0 1.2-.1 1.7-.3.1-.7.4-1.2.7-1.5-2.6-.3-5.3-1.3-5.3-6a4.7 4.7 0 011.2-3.2 4.3 4.3 0 01.1-3.2s1-.3 3.3 1.2a11.2 11.2 0 016 0c2.3-1.5 3.3-1.2 3.3-1.2.4 1.2.2 2.2.1 3.2a4.7 4.7 0 011.2 3.2c0 4.7-2.7 5.7-5.3 6 .4.4.8 1.1.8 2.3v3.4c0 .3.2.7.8.6A11.3 11.3 0 0023.3 12C23.3 5.7 18.3.5 12 .5z" />
    </svg>
);
const Linkedin = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M20.4 20.4h-3.6v-5.6c0-1.3 0-3-1.9-3s-2.2 1.5-2.2 2.9v5.7H9.1V9h3.4v1.6h.1c.5-.9 1.7-1.9 3.5-1.9 3.8 0 4.5 2.5 4.5 5.8v5.9zM5.3 7.4a2.1 2.1 0 11.1-4.2 2.1 2.1 0 01-.1 4.2zM3.5 20.4h3.6V9H3.5v11.4z" />
    </svg>
);
const Send = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M2 21l21-9L2 3v7l15 2-15 2v7z" />
    </svg>
);
const CheckCircle2 = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm-1.2 14.2l-3.3-3.3 1.4-1.4 1.9 1.9 4.4-4.4 1.4 1.4-5.8 5.8z" />
    </svg>
);
const MessageSquare = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M4 4h16v12H7l-3 3V4z" />
    </svg>
);

/* ── VALIDATION ── */
const schema = z.object({
    name: z.string().trim().min(1, "Name is required").max(100),
    email: z.string().trim().email("Invalid email").max(255),
    message: z.string().trim().min(1, "Message is required").max(1000),
    phone: z.string().trim().min(10, "Phone is required").max(15),
    subject: z.string().trim().min(1, "Subject is required").max(150),

});

const EMAIL    = "mailto:shreya.optimitylogics@gmail.com";
const GITHUB   = "https://github.com/shreyaoptimitylogics-ai";
const LINKEDIN = "https://linkedin.com/in/prajapati-shreya-183p";

const contactMethods = [
    { Icon: Mail,     label: "Email",    value: "shreya.optimitylogics@gmail.com", href: EMAIL,    hint: "Send a message" },
    { Icon: Github,   label: "GitHub",   value: "Shreya prajapati", href: GITHUB,   hint: "View my work"  },
    { Icon: Linkedin, label: "LinkedIn", value: "Shreya prajapati", href: LINKEDIN, hint: "Let's connect" },
];

/* ── FLOATING LABEL INPUT ── */
const FloatingField = ({
                           id, label, type = "text", value, onChange, error, maxLength,
                       }: {
    id: string; label: string; type?: string; value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string; maxLength?: number;
}) => (
    <div className="relative">
        <Input
            id={id} type={type} value={value} onChange={onChange}
            maxLength={maxLength} placeholder=" "
            className="
                peer h-12 sm:h-14 pt-5
                bg-muted/40 dark:bg-secondary/40 border-border
                focus-visible:ring-emerald/40 focus-visible:border-emerald
                transition-colors text-sm
            "
        />
        <label
            htmlFor={id}
            className="
                pointer-events-none absolute left-3 top-1.5
                text-[10px] font-semibold uppercase tracking-widest text-muted-foreground
                transition-all
                peer-placeholder-shown:top-3.5 sm:peer-placeholder-shown:top-4
                peer-placeholder-shown:text-sm peer-placeholder-shown:font-normal
                peer-placeholder-shown:tracking-normal peer-placeholder-shown:text-muted-foreground/60
                peer-focus:top-1.5 peer-focus:text-[10px]
                peer-focus:font-semibold peer-focus:tracking-widest
                peer-focus:text-[color:var(--emerald)]
            "
        >
            {label}
        </label>
        {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
);

/* ── CONTACT ── */
export const Contact = () => {
    const [form, setForm]         = useState({ name: "", email: "", message: "" ,  phone: "",
        subject: ""});
    const [errors, setErrors]     = useState<Record<string, string>>({});
    const [submitting, setSubmitting] = useState(false);
    const [sent, setSent]         = useState(false);

    const onChange =
        (k: keyof typeof form) =>
            (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
                setForm({ ...form, [k]: e.target.value });

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const parsed = schema.safeParse(form);
        if (!parsed.success) {
            const next: Record<string, string> = {};
            parsed.error.issues.forEach((i) => { next[i.path[0] as string] = i.message; });
            setErrors(next);
            return;
        }
        setErrors({});
        setSubmitting(true);
        try {
            // const res = await fetch("/api/contact", {
            //     method: "POST",
            //     headers: { "Content-Type": "application/json" },
            //     body: JSON.stringify(form),
            // });

            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...form,
                    From: process.env.NEXT_PUBLIC_FROM
                }),
            });
            if (!res.ok) throw new Error("Failed");
            setSent(true);
            toast.success("Message sent!", { description: "Thanks — I'll get back to you soon." });
            setForm({ name: "", email: "", message: "" , phone: "",
                subject: "" });
            setTimeout(() => setSent(false), 3500);
        } catch {
            toast.error("Something went wrong. Please try again.");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-14 sm:py-20 md:py-24 lg:py-28 relative overflow-hidden bg-muted/40">
            {/* Background blobs */}
            <div className="absolute inset-0 bg-dotted opacity-25 pointer-events-none" />
            <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 h-72 w-[300px] sm:w-[600px] rounded-full bg-[color:var(--emerald)]/10 dark:bg-[color:var(--emerald)]/5 blur-3xl -z-10 animate-blob" />

            <div className="mx-auto max-w-6xl px-4 sm:px-6 relative">

                {/* ── HEADER ── */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--emerald)] mb-3">
                        Contact
                    </p>
                    <h2 className="font-display font-bold text-foreground leading-tight
                        text-3xl
                        sm:text-4xl
                        md:text-5xl">
                        Let's build <span className="text-gradient">something great</span>.
                    </h2>
                    <p className="mt-3 sm:mt-4 text-muted-foreground text-sm sm:text-base max-w-xl">
                        Have a project in mind, a role to fill, or just want to say hi? My inbox is open.
                    </p>
                </motion.div>

                {/* ── CONTACT METHOD CARDS ──
                    mobile       → 1 col
                    425px+ / sm  → 1 col (readable, full width)
                    768px+ / md  → 3 col
                ── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.55, delay: 0.1 }}
                    className="mt-8 sm:mt-10 lg:mt-12 grid gap-3 sm:gap-4
                        grid-cols-1
                        md:grid-cols-3"
                >
                    {contactMethods.map(({ Icon, label, value, href, hint }, i) => (
                        <motion.a
                            key={label}
                            href={href}
                            target={href.startsWith("http") ? "_blank" : undefined}
                            rel="noreferrer noopener"
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.45, delay: 0.1 + i * 0.07 }}
                            whileHover={{ y: -3 }}
                            className="
                                group flex items-center gap-4
                                md:flex-col md:items-start
                                p-4 sm:p-5 rounded-xl sm:rounded-2xl
                                bg-card border border-border
                                hover:border-[color:var(--emerald)]
                                hover:bg-[color:var(--emerald)]/5
                                transition-all duration-200
                                shadow-soft hover:shadow-glow
                            "
                        >
                            <span className="
                                shrink-0 h-10 w-10 grid place-items-center rounded-xl
                                bg-[color:var(--emerald)]/10 border border-[color:var(--emerald)]/20
                                text-[color:var(--emerald)]
                                group-hover:bg-[color:var(--emerald)]/18
                                transition-colors duration-200
                            ">
                                <Icon className="h-4 w-4" />
                            </span>
                            <div className="min-w-0">
                                <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-widest text-muted-foreground mb-0.5">
                                    {label}
                                </p>
                                <p className="text-sm font-medium text-foreground truncate">{value}</p>
                                <p className="text-xs text-muted-foreground/70 mt-0.5">{hint}</p>
                            </div>
                        </motion.a>
                    ))}
                </motion.div>

                {/* ── FORM PANEL ── */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mt-4 relative"
                >
                    <div className="absolute -inset-1 rounded-3xl bg-[color:var(--emerald)]/8 dark:bg-[color:var(--emerald)]/5 blur-2xl -z-10" />

                    <div className="rounded-xl sm:rounded-2xl bg-card border border-border shadow-elegant
                        p-4 sm:p-6 md:p-8">

                        {/* Form header */}
                        <div className="flex items-center justify-between mb-5 sm:mb-6 pb-4 sm:pb-5 border-b border-border gap-3">
                            <div className="flex items-center gap-3 min-w-0">
                                <span className="shrink-0 h-9 w-9 sm:h-10 sm:w-10 grid place-items-center rounded-xl bg-gradient-accent text-primary-foreground shadow-elegant">
                                    <MessageSquare className="h-4 w-4" />
                                </span>
                                <div className="min-w-0">
                                    <h3 className="font-display font-semibold text-foreground text-sm sm:text-base">
                                        Send a message
                                    </h3>
                                    <p className="text-xs text-muted-foreground truncate">
                                        Fill the form and I'll get back to you.
                                    </p>
                                </div>
                            </div>

                            {/* Availability badge — hidden on mobile */}
                            <div className="hidden sm:flex shrink-0 items-center gap-2 px-3 py-1.5 rounded-full bg-[color:var(--emerald)]/10 border border-[color:var(--emerald)]/20">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[color:var(--emerald)] opacity-60" />
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[color:var(--emerald)]" />
                                </span>
                                <span className="text-[11px] font-medium text-[color:var(--emerald)] whitespace-nowrap">
                                    Available · replies within 24 h
                                </span>
                            </div>
                        </div>

                        {/* Fields */}
                        {/* Fields */}
                        <form onSubmit={onSubmit} className="space-y-3 sm:space-y-4">

                            {/* Row 1 → Name + Email */}
                            <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2">
                                <FloatingField
                                    id="name"
                                    label="Your name"
                                    value={form.name}
                                    onChange={onChange("name") as (e: React.ChangeEvent<HTMLInputElement>) => void}
                                    error={errors.name}
                                    maxLength={100}
                                />
                                <FloatingField
                                    id="email"
                                    label="Email address"
                                    type="email"
                                    value={form.email}
                                    onChange={onChange("email") as (e: React.ChangeEvent<HTMLInputElement>) => void}
                                    error={errors.email}
                                    maxLength={255}
                                />
                            </div>

                            {/* Row 2 → Phone + Subject (NEW) */}
                            <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2">
                                <FloatingField
                                    id="phone"
                                    label="Phone number"
                                    type="tel"
                                    value={form.phone}
                                    onChange={onChange("phone") as (e: React.ChangeEvent<HTMLInputElement>) => void}
                                    error={errors.phone}
                                    maxLength={15}
                                />
                                <FloatingField
                                    id="subject"
                                    label="Subject"
                                    value={form.subject}
                                    onChange={onChange("subject") as (e: React.ChangeEvent<HTMLInputElement>) => void}
                                    error={errors.subject}
                                    maxLength={150}
                                />
                            </div>

                            {/* Textarea */}
                            <div className="relative">
                                <Textarea
                                    id="message"
                                    value={form.message}
                                    onChange={onChange("message")}
                                    rows={5}
                                    maxLength={1000}
                                    placeholder=" "
                                    className="
                peer pt-6
                bg-muted/40 dark:bg-secondary/40
                border-border resize-none text-sm
                focus-visible:ring-[color:var(--emerald)]/40
                focus-visible:border-[color:var(--emerald)]
                transition-colors
            "
                                />
                                <label
                                    htmlFor="message"
                                    className="
                pointer-events-none absolute left-3 top-2
                text-[10px] font-semibold uppercase tracking-widest text-muted-foreground
                transition-all
                peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm
                peer-placeholder-shown:font-normal peer-placeholder-shown:tracking-normal
                peer-placeholder-shown:text-muted-foreground/60
                peer-focus:top-2 peer-focus:text-[10px]
                peer-focus:font-semibold peer-focus:tracking-widest
                peer-focus:text-[color:var(--emerald)]
            "
                                >
                                    Tell me about your project
                                </label>

                                <div className="mt-1 flex items-center justify-between">
                                    {errors.message
                                        ? <p className="text-xs text-destructive">{errors.message}</p>
                                        : <span />
                                    }
                                    <span className="text-[11px] text-muted-foreground tabular-nums">
                {form.message.length}/1000
            </span>
                                </div>
                            </div>
                            {/* Submit row */}
                            <div className="flex items-center justify-between pt-1">
                                {/* Availability — mobile only */}
                                <div className="sm:hidden flex items-center gap-2">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[color:var(--emerald)] opacity-60" />
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[color:var(--emerald)]" />
                                    </span>
                                    <span className="text-[11px] text-muted-foreground">Available</span>
                                </div>

                                <Button
                                    type="submit"
                                    disabled={submitting || sent}
                                    size="lg"
                                    className="
                                        group relative ml-auto rounded-full
                                        bg-gradient-accent text-primary-foreground
                                        shadow-elegant hover:shadow-glow
                                        hover:-translate-y-0.5 transition-all
                                        overflow-hidden
                                        text-sm px-5 py-2.5
                                        sm:px-6 sm:py-3
                                    "
                                >
                                    <AnimatePresence mode="wait" initial={false}>
                                        {sent ? (
                                            <motion.span key="sent" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} className="flex items-center gap-2">
                                                <CheckCircle2 className="h-4 w-4" /> Message sent
                                            </motion.span>
                                        ) : submitting ? (
                                            <motion.span key="sending" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                                                Sending...
                                            </motion.span>
                                        ) : (
                                            <motion.span key="idle" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} className="flex items-center gap-2">
                                                Send Message <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                                            </motion.span>
                                        )}
                                    </AnimatePresence>
                                </Button>
                            </div>
                        </form>
                    </div>
                </motion.div>

                {/* Footer */}
                <p className="mt-12 sm:mt-16 text-center text-xs text-muted-foreground">
                    © {new Date().getFullYear()} Shreya Prajapati — Crafted with care.
                </p>

            </div>
        </section>
    );
};