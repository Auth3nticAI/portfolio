import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

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
            <body className="min-h-full flex flex-col bg-white text-slate-900">
                <header className="border-b border-slate-200 bg-white/80 backdrop-blur sticky top-0 z-10">
                    <nav className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
                        <Link
                            href="/"
                            className="font-semibold text-slate-900 hover:text-blue-700 transition-colors"
                        >
                            Tray Branch Sr
                        </Link>
                        <ul className="flex items-center gap-6 text-sm text-slate-600">
                            <li>
                                <Link
                                    href="/"
                                    className="hover:text-blue-700 transition-colors"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/about"
                                    className="hover:text-blue-700 transition-colors"
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/projects"
                                    className="hover:text-blue-700 transition-colors"
                                >
                                    Projects
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </header>

                <main className="flex-1">{children}</main>

                <footer className="border-t border-slate-200 mt-16">
                    <div className="max-w-3xl mx-auto px-6 py-8 text-sm text-slate-500 text-center">
                        &copy; {new Date().getFullYear()} Tray Branch Sr. All rights reserved.
                    </div>
                </footer>
            </body>
        </html>
    );
}
