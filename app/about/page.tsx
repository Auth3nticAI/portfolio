const skills = [
    "TypeScript",
    "Python",
    "C++",
    "React / Next.js",
    "Machine Learning",
    "Computer Vision",
    "ROS 2",
    "Linux / Systems",
];

const interests = [
    "Building autonomous systems",
    "Reading on cybersecurity and offensive research",
    "Tinkering with hardware and embedded projects",
];

export default function AboutPage() {
    return (
        <section className="max-w-3xl mx-auto px-6 py-16 sm:py-20">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
                About Me
            </h1>

            <div className="mt-8 flex items-start gap-6">
                <div
                    aria-hidden="true"
                    className="flex-shrink-0 w-24 h-24 rounded-full bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center text-3xl font-bold text-white shadow-md"
                >
                    TB
                </div>
                <div className="flex-1 space-y-4 text-slate-700 leading-relaxed">
                    <p>
                        I&apos;m a Computer Science student at California Science and
                        Technology University focused on the intersection of practical
                        software engineering, applied machine learning, and security.
                    </p>
                    <p>
                        Most of my work has been in Python and C++, building things like
                        supervised ML pipelines for attention forecasting (PRISM), a
                        GPS-denied autonomous reconnaissance stack on ROS 2 (Sentinel-X),
                        and a visual C++ memory debugger meant to make heap behavior
                        approachable for beginners (HeapSight).
                    </p>
                    <p>
                        I&apos;m currently learning the modern web stack — Next.js,
                        React, and TypeScript — so I can ship the front-end of my ideas
                        as quickly as I build the backend.
                    </p>
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
                    The best ways to reach me or see more of my work:
                </p>
                <ul className="space-y-2">
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
