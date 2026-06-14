const skills = [
    "Go",
    "Rust",
    "Python",
    "TypeScript",
    "C++",
    "Distributed Systems",
    "ML Infrastructure",
    "PyTorch / CUDA",
    "React / Next.js",
    "Linux / Systems",
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
        courses: [
            "CSE/MB624 — Network Security",
            "CSE637 — AI Security",
        ],
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
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
                About Me
            </h1>

            <div className="mt-8 flex items-start gap-6">
                <img
                    src="/tray.jpg"
                    alt="Tray Branch"
                    className="flex-shrink-0 w-24 h-24 rounded-full object-cover shadow-md ring-2 ring-blue-100"
                />
                <div className="flex-1 space-y-4 text-slate-700 leading-relaxed">
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
                <h2 className="text-xl font-semibold text-slate-900 mb-2">
                    Education
                </h2>
                <p className="text-slate-700">
                    <strong>Master of Computer Systems &amp; Engineering</strong>
                    {" · "}
                    California Science and Technology University
                </p>
                <p className="text-sm text-slate-500 mt-1">
                    30 graduate units across 7 terms · 24-month program · Coursework grouped by area below.
                </p>

                <div className="mt-6 space-y-6">
                    {coursework.map((group) => (
                        <div key={group.theme}>
                            <h3 className="text-sm font-semibold text-slate-900 mb-2 uppercase tracking-wider">
                                {group.theme}
                            </h3>
                            <ul className="space-y-1.5 text-sm text-slate-700">
                                {group.courses.map((c) => (
                                    <li key={c} className="flex items-start gap-2 leading-relaxed">
                                        <span className="text-blue-600 mt-1.5 flex-shrink-0">•</span>
                                        <span>{c}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-12">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">
                    Skills &amp; Technologies
                </h2>
                <ul className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                        <li
                            key={skill}
                            className="bg-blue-50 text-blue-800 text-sm font-medium px-3 py-1.5 rounded-full"
                        >
                            {skill}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mt-10">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">
                    Outside of Tech
                </h2>
                <ul className="space-y-2 text-slate-700">
                    {interests.map((interest) => (
                        <li key={interest} className="flex items-start gap-2">
                            <span className="text-blue-600 mt-1.5">•</span>
                            <span>{interest}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mt-12 border-t border-slate-200 pt-8">
                <h2 className="text-xl font-semibold text-slate-900 mb-3">
                    Get in touch
                </h2>
                <p className="text-slate-700 mb-4">
                    The best way to reach me is LinkedIn. Targeting Fall 2026
                    internships or Fall 2026 full-time SWE / ML infra roles.
                </p>
                <ul className="space-y-2">
                    <li>
                        LinkedIn:{" "}
                        <a
                            href="https://linkedin.com/in/traydbranch"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-700 font-medium hover:underline"
                        >
                            linkedin.com/in/traydbranch
                        </a>
                    </li>
                    <li>
                        Email:{" "}
                        <a
                            href="mailto:tray.d.branch@gmail.com"
                            className="text-blue-700 font-medium hover:underline"
                        >
                            tray.d.branch@gmail.com
                        </a>
                    </li>
                    <li>
                        GitHub:{" "}
                        <a
                            href="https://github.com/Auth3nticAI"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-700 font-medium hover:underline"
                        >
                            github.com/Auth3nticAI
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    );
}
