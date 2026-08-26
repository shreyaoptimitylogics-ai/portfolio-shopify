// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import { ThemeProvider } from "@/app/src/hooks/use-theme";
// import SmoothScroll from "./SmoothScroll";
//
// const geistSans = Geist({
//     variable: "--font-geist-sans",
//     subsets: ["latin"],
// });
//
// const geistMono = Geist_Mono({
//     variable: "--font-geist-mono",
//     subsets: ["latin"],
// });
//
// export const metadata: Metadata = {
//     title: "Shreya Prajapati | Senior Frontend Developer",
//     description:
//         "Frontend Developer specializing in React.js, Next.js, Tailwind CSS, responsive UI, and scalable web applications.",
// };
//
// export default function RootLayout({
//                                        children,
//                                    }: Readonly<{ children: React.ReactNode }>) {
//     return (
//         <html
//             lang="en"
//             suppressHydrationWarning
//             className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
//         >
//         <head>
//             <script
//                 dangerouslySetInnerHTML={{
//                     __html: `(function(){
//                             try {
//                                 var stored = localStorage.getItem('theme');
//                                 var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
//                                 var isDark = stored === 'dark' || (stored === null && prefersDark);
//                                 if (isDark) {
//                                     document.documentElement.classList.add('dark');
//                                 }
//                             } catch(e) {}
//                         })();`,
//                 }}
//             />
//         </head>
//
//         <body className="min-h-full flex flex-col">
//         <ThemeProvider>
//             <SmoothScroll>
//                 {children}
//             </SmoothScroll>
//         </ThemeProvider>
//         </body>
//         </html>
//     );
// }


import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/app/src/hooks/use-theme";
import SmoothScroll from "./SmoothScroll";
import { GoogleTagManager } from "@next/third-parties/google";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Shreya Prajapati | Shopify Developer",
    description:
        "Shopify Developer specializing in Shopify themes, Liquid, custom storefronts, responsive UI, and high-converting eCommerce experiences.",
    icons: {
        icon: [
            { url: "/logo.png", sizes: "any" },
            { url: "/logo.png", sizes: "16x16", type: "image/png" },
            { url: "logo.png", sizes: "32x32", type: "image/png" },
        ],
        apple: [
            { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
        ],
        shortcut: "/favicon.ico",
    },
    manifest: "/site.webmanifest",
    authors: [{ name: "Shreya Prajapati" }],
    keywords: [
        "Shopify Developer",
        "Shopify",
        "Shopify Themes",
        "Liquid",
        "Shopify Store Development",
        "eCommerce Developer",
        "Shreya Prajapati",
    ],
    openGraph: {
        title: "Shreya Prajapati | Shopify Developer",
        description:
            "Shopify Developer specializing in Shopify themes, Liquid, custom storefronts, responsive UI, and high-converting eCommerce experiences.",
        url: "https://portfolio-shopify.vercel.app",
        siteName: "Shreya Prajapati Portfolio",
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Shreya Prajapati | Shopify Developer",
        description:
            "Shopify Developer specializing in Shopify themes, Liquid, custom storefronts, responsive UI, and high-converting eCommerce experiences.",
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html
            lang="en"
            suppressHydrationWarning
            className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
        >
        <head>
            {/* Theme init script — prevents flash of wrong theme */}
            <script
                dangerouslySetInnerHTML={{
                    __html: `(function(){
                            try {
                                var stored = localStorage.getItem('theme');
                                var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                                var isDark = stored === 'dark' || (stored === null && prefersDark);
                                if (isDark) {
                                    document.documentElement.classList.add('dark');
                                }
                            } catch(e) {}
                        })();`,
                }}
            />
        </head>

        <body className="min-h-full flex flex-col">
        <ThemeProvider>
            <SmoothScroll>{children}</SmoothScroll>
        </ThemeProvider>


        <GoogleTagManager gtmId="GTM-NSPQR852" />
        </body>
        </html>
    );
}