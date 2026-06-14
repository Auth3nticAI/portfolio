import CourseworkAccordion from "@/components/CourseworkAccordion";
import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/icons";
import { SOCIALS } from "@/data/site";

/** Skills grouped by category, each with its own accent on hover. */
const skillGroups: {
    label: string;
    base: string;
    hover: string;
    items: string[];
}[] = [
    {
        label: "Languages",
        base: "border-blue-500/20 bg-blue-500/10 text-blue-300",
        hover: "hover:border-blue-400/50 hover:shadow-[0_0_16px_rgba(37,99,235,0.35)]",
        items: ["Go", "Rust", "Python", "TypeScript", "C++"],
    },
    {
        label: "Systems & Infra",
        base: "border-emerald-500/20 bg-emerald-500/10 text-emerald-300",
        hover: "hover:border-emerald-400/50 hover:shadow-[0_0_16px_rgba(16,185,129,0.3)]",
        items: ["Distributed Systems", "ML Infrastructure", "Linux / Systems"],
    },
    {
        label: "ML & Web",
        base: "border-violet-500/20 bg-violet-500/10 text-violet-300",
        hover: "hover:border-violet-400/50 hover:shadow-[0_0_16px_rgba(139,92,246,0.3)]",
        items: ["PyTorch / CUDA", "React / Next.js"],
    },
];

const interests = [
    "Reading distributed systems and ML systems papers",
    "Tinkering with hardware and embedded projects",
    "Reading on cybersecurity and offensive research",
];

const coursework: { theme: string; courses: string[] }[] = [
    {
        theme: "AI & Machine Learning",
        courses: [
            "CSE/MB600 — Python for AI",
            "CSE/MB604 — Machine Learning Fundamentals",
            "CSE612 — Computer Vision and Multimodal (incl. VLA Models)",
            "CSE620 — Deep Learning with PyTorch",
            "CSE664 — Generative Artificial Intelligence Project",
        ],
    },
    {
        theme: "Agentic & Autonomous Systems",
        courses: [
            "CSE642 — Agentic AI with Opencode & Openclaw",
            "CSE645 — SLAM, Autonomous Navigation, and Path Planning",
            "CSE647 — AI for Robotics",
            "CSE651 — Software Development with Agentic AI",
        ],
    },
    {
        theme: "Systems & Software Engineering",
        courses: [
            "CSE552 — Full Stack Software Development in the Age of AI Agents",
            "CSE636 — DevOps with AI Assistance",
            "CSE618 — Advanced Data Structures and Algorithms in Python",
            "CSE631 — Network & Communication Fundamentals",
        ],
    },
    {
        theme: "Security",
        courses: ["CSE/MB624 — Network Security", "CSE637 — AI Security"],
    },
    {
        theme: "Data",
        courses: [
            "CSE/MB622 — NoSQL and Big Data Analytics",
            "CSE630 — SQL and Database Systems",
            "MB/CSE616 — Business Intelligence & Analytics and Data-Driven Strategy",
        ],
    },
    {
        theme: "Capstone",
        courses: [
            "A graduate project in Computer Systems & Software Development (3 units)",
        ],
    },
];

export default function AboutPage() {
    return (
        <section className="max-w-3xl mx-auto px-6 py-16 sm:py-20">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                About Me
            </h1>

            <div className="mt-8 grid gap-8 sm:grid-cols-3">
                {/* Identity block */}
                <div className="sm:col-span-1">
                    <div className="flex flex-col items-start">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="/tray.jpg"
                            alt="Tray Branch"
                            className="w-24 h-24 rounded-full object-cover ring-2 ring-blue-500/30"
                        />
                        <p className="mt-4 text-lg font-semibold text-white">
                            Tray Branch Sr
                        </p>
                        <p className="text-sm text-zinc-400">
                            MS Computer Systems &amp; Engineering
                        </p>
                        <div className="mt-4 flex items-center gap-3 text-zinc-400">
                            <a
                                href={SOCIALS.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                className="hover:text-white transition-colors"
                            >
                                <GitHubIcon className="h-5 w-5" />
                            </a>
                            <a
                                href={SOCIALS.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="hover:text-white transition-colors"
                            >
                                <LinkedInIcon className="h-5 w-5" />
                            </a>
                            <a
                                href={`mailto:${SOCIALS.email}`}
                                aria-label="Email"
                                className="hover:text-white transition-colors"
                            >
                                <MailIcon className="h-5 w-5" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bio */}
                <div className="sm:col-span-2 space-y-4 text-zinc-300 leading-relaxed">
                    <p>
                        I&apos;m a Master&apos;s student in Computer Systems
                        &amp; Engineering at California Science and Technology
                        University, focused on the systems and infrastructure
                        layer of modern software — distributed retrieval, ML
                        inference pipelines, real-time collaboration, and the
                        storage and runtime primitives those depend on.
                    </p>
                    <p>
                        My projects deliberately span the stack: a sharded vector
                        search service targeting sub-100ms p99 latency for
                        billion-scale embedding retrieval, a high-throughput LLM
                        inference server using continuous batching to lift GPU
                        utilization, a real-time CRDT engine that resolves
                        concurrent edits without a central coordinator, and a
                        Rust LSM key-value store with Raft replication.
                    </p>
                    <p>
                        I gravitate toward problems where the work is in
                        measuring the bottleneck and rebuilding the slow part —
                        search ranking under load, GPU memory pressure,
                        replication lag, the questions production engineering
                        teams actually answer. I&apos;m sharpening the modern web
                        stack (Next.js, React, TypeScript) so I can ship
                        full-stack interfaces over the systems I build.
                    </p>
                </div>
            </div>

            <div className="mt-12">
                <h2 className="text-xl font-semibold text-white mb-2">
                    Education
                </h2>
                <p className="text-zinc-300">
                    <strong className="text-white">
                        Master of Computer Systems &amp; Engineering
                    </strong>
                    {" · "}
                    California Science and Technology University
                </p>
                <p className="text-sm text-zinc-500 mt-1">
                    30 graduate units across 7 terms · 24-month program ·
                    Coursework grouped by area below.
                </p>

                <CourseworkAccordion groups={coursework} />
            </div>

            <div className="mt-12">
                <h2 className="text-xl font-semibold text-white mb-4">
                    Skills &amp; Technologies
                </h2>
                <div className="space-y-4">
                    {skillGroups.map((group) => (
                        <div key={group.label}>
                            <p className="text-xs font-medium uppercase tracking-wider text-zinc-500 mb-2">
                                {group.label}
                            </p>
                            <ul className="flex flex-wrap gap-2">
                                {group.items.map((skill) => (
                                    <li
                                        key={skill}
                                        className={`rounded-full border px-3 py-1.5 text-sm font-medium transition-all duration-200 ${group.base} ${group.hover}`}
                                    >
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-12">
                <h2 className="text-xl font-semibold text-white mb-4">
                    Outside of Tech
                </h2>
                <ul className="space-y-2 text-zinc-300">
                    {interests.map((interest) => (
                        <li key={interest} className="flex items-start gap-2">
                            <span className="text-blue-400 mt-1.5">•</span>
                            <span>{interest}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mt-12 border-t border-white/10 pt-8">
                <h2 className="text-xl font-semibold text-white mb-3">
                    Get in touch
                </h2>
                <p className="text-zinc-300 mb-4">
                    The best way to reach me is LinkedIn. Targeting Fall 2026
                    internships or Fall 2026 full-time SWE / ML infra roles.
                </p>
                <ul className="space-y-2 text-zinc-300">
                    <li>
                        LinkedIn:{" "}
                        <a
                            href={SOCIALS.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 font-medium hover:text-blue-300 hover:underline"
                        >
                            linkedin.com/in/traydbranch
                        </a>
                    </li>
                    <li>
                        Email:{" "}
                        <a
                            href={`mailto:${SOCIALS.email}`}
                            className="text-blue-400 font-medium hover:text-blue-300 hover:underline"
                        >
                            {SOCIALS.email}
                        </a>
                    </li>
                    <li>
                        GitHub:{" "}
                        <a
                            href={SOCIALS.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 font-medium hover:text-blue-300 hover:underline"
                        >
                            github.com/Auth3nticAI
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    );
}
