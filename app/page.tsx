import Link from "next/link";

import AuroraBackground from "@/components/AuroraBackground";
import FadeIn from "@/components/motion/FadeIn";
import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";
import { AVAILABILITY, SOCIALS } from "@/data/site";

export default function HomePage() {
    return (
        <>
            <section className="relative isolate overflow-hidden">
                <AuroraBackground />

                <div className="max-w-3xl mx-auto px-6 py-20 sm:py-28">
                    <FadeIn>
                        <span className="inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-xs font-medium text-green-400">
                            <span className="status-dot h-1.5 w-1.5 rounded-full bg-green-400" />
                            {AVAILABILITY}
                        </span>
                    </FadeIn>

                    <FadeIn delay={0.08}>
                        <p className="mt-6 text-xs font-mono uppercase tracking-[0.2em] text-blue-400">
                            Hi, I&apos;m
                        </p>
                    </FadeIn>
                    <FadeIn delay={0.16}>
                        <h1 className="mt-3 text-5xl sm:text-6xl font-bold tracking-tight text-white">
                            Tray Branch Sr
                        </h1>
                    </FadeIn>
                    <FadeIn delay={0.24}>
                        <p className="mt-4 text-xl text-zinc-300">
                            Building distributed systems, ML infrastructure, and
                            the runtimes both depend on.
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.32}>
                        <p className="mt-8 text-base leading-relaxed text-zinc-400 max-w-2xl">
                            I work where algorithmic depth meets production
                            reality — distributed retrieval, ML inference at
                            scale, real-time collaboration, and the storage and
                            runtime primitives underneath all of it. My focus is
                            shipping software that holds up under load, not
                            impressive demos that collapse on the first
                            non-happy-path input.
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.4}>
                        <div className="mt-10 flex flex-wrap gap-3">
                            <Link href="/projects" className={buttonVariants()}>
                                View My Projects
                            </Link>
                            <a
                                href={SOCIALS.resume}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={buttonVariants({ variant: "outline" })}
                            >
                                Download Résumé
                            </a>
                        </div>
                    </FadeIn>
                </div>
            </section>

            <section className="max-w-3xl mx-auto px-6 pb-24">
                <FadeIn inView>
                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-8 py-10 text-center">
                        <h2 className="text-2xl font-semibold tracking-tight text-white">
                            Targeting Fall 2026 roles. Let&apos;s talk.
                        </h2>
                        <p className="mt-2 text-zinc-400">
                            The fastest way to reach me is LinkedIn or email.
                        </p>
                        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                            <a
                                href={SOCIALS.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={buttonVariants({ size: "sm" })}
                            >
                                <LinkedInIcon className="h-4 w-4" />
                                LinkedIn
                            </a>
                            <a
                                href={`mailto:${SOCIALS.email}`}
                                className={buttonVariants({
                                    variant: "outline",
                                    size: "sm",
                                })}
                            >
                                <MailIcon className="h-4 w-4" />
                                Email
                            </a>
                            <a
                                href={SOCIALS.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={buttonVariants({
                                    variant: "outline",
                                    size: "sm",
                                })}
                            >
                                <GitHubIcon className="h-4 w-4" />
                                GitHub
                            </a>
                        </div>
                    </div>
                </FadeIn>
            </section>
        </>
    );
}
