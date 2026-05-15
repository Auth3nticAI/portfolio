import Link from "next/link";

export default function HomePage() {
    return (
        <section className="max-w-3xl mx-auto px-6 py-20 sm:py-28">
            <p className="text-sm font-medium text-blue-700 mb-4">
                Hi, I&apos;m
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
                Tray Branch Sr
            </h1>
            <p className="mt-4 text-xl text-slate-600">
                Computer Science student building practical software, AI tools, and
                security-focused applications.
            </p>

            <p className="mt-8 text-base leading-relaxed text-slate-700 max-w-2xl">
                I focus on turning ideas into working systems — from supervised ML
                pipelines and autonomous robotics stacks to low-level systems tooling.
                I care about software that does something real, not just demos.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
                <Link
                    href="/projects"
                    className="inline-flex items-center justify-center rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-800 transition-colors"
                >
                    View My Projects
                </Link>
                <Link
                    href="/about"
                    className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 hover:border-slate-400 hover:bg-slate-50 transition-colors"
                >
                    About Me
                </Link>
            </div>
        </section>
    );
}
