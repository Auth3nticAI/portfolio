import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

import { GitHubIcon, LinkedInIcon, ResumeIcon } from "@/components/icons";
import { SOCIALS } from "@/data/site";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Tray Branch Sr — Portfolio",
    description:
        "Computer Science student building practical software, AI tools, and security-focused applications.",
};

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
];

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
        >
            <body className="min-h-full flex flex-col bg-[#0a0a0a] text-zinc-100">
                <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0a0a0a]/80 backdrop-blur-md">
                    <nav className="max-w-3xl mx-auto px-6 py-3.5 flex items-center justify-between gap-4">
                        <Link
                            href="/"
                            className="font-semibold text-white hover:text-blue-400 transition-colors"
                        >
                            Tray Branch Sr
                        </Link>

                        <div className="flex items-center gap-5">
                            <ul className="hidden sm:flex items-center gap-5 text-sm text-zinc-400">
                                {navLinks.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            className="hover:text-white transition-colors"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>

                            <span className="hidden sm:block h-4 w-px bg-white/10" />

                            <div className="flex items-center gap-3 text-zinc-400">
                                <a
                                    href={SOCIALS.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="GitHub"
                                    className="hover:text-white transition-colors"
                                >
                                    <GitHubIcon className="h-[18px] w-[18px]" />
                                </a>
                                <a
                                    href={SOCIALS.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn"
                                    className="hover:text-white transition-colors"
                                >
                                    <LinkedInIcon className="h-[18px] w-[18px]" />
                                </a>
                            </div>

                            <a
                                href={SOCIALS.resume}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 px-3 py-1.5 text-xs font-medium text-zinc-200 hover:border-white/30 hover:bg-white/5 hover:text-white transition-all"
                            >
                                <ResumeIcon className="h-3.5 w-3.5" />
                                Résumé
                            </a>
                        </div>
                    </nav>
                </header>

                <main className="flex-1">{children}</main>

                <footer className="border-t border-white/10 mt-16">
                    <div className="max-w-3xl mx-auto px-6 py-8 text-sm text-zinc-500 text-center">
                        &copy; {new Date().getFullYear()} Tray Branch Sr. All rights reserved.
                    </div>
                </footer>
            </body>
        </html>
    );
}
