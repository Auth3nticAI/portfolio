"use client";

import { useState } from "react";
import Link from "next/link";

import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import { buttonVariants } from "@/components/ui/button";
import { SOCIALS } from "@/data/site";

const allTags = Array.from(
    new Set(projects.flatMap((project) => project.tags))
).sort();

const filters = ["All", ...allTags];

/** How many projects each filter matches — shown as a count on the chip. */
const counts: Record<string, number> = Object.fromEntries(
    filters.map((filter) => [
        filter,
        filter === "All"
            ? projects.length
            : projects.filter((p) => p.tags.includes(filter)).length,
    ])
);

export default function ProjectsPage() {
    const [activeFilter, setActiveFilter] = useState<string>("All");

    const visibleProjects =
        activeFilter === "All"
            ? projects
            : projects.filter((project) => project.tags.includes(activeFilter));

    return (
        <section className="max-w-3xl mx-auto px-6 py-16 sm:py-20">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                Projects
            </h1>
            <p className="mt-3 text-zinc-400">
                A selection of things I&apos;ve built — across machine learning,
                autonomous systems, and developer tooling.
            </p>

            <div
                className="mt-8 flex flex-wrap gap-2"
                role="group"
                aria-label="Filter projects by tag"
            >
                {filters.map((filter) => {
                    const isActive = filter === activeFilter;
                    return (
                        <button
                            key={filter}
                            type="button"
                            onClick={() => setActiveFilter(filter)}
                            aria-pressed={isActive}
                            className={`text-sm font-medium px-3 py-1.5 rounded-full border transition-colors ${
                                isActive
                                    ? "bg-blue-600 text-white border-blue-600"
                                    : "bg-white/5 text-zinc-300 border-white/10 hover:border-white/25 hover:bg-white/10"
                            }`}
                        >
                            {filter}
                            <span
                                className={`ml-1.5 tabular-nums ${
                                    isActive ? "text-blue-200" : "text-zinc-500"
                                }`}
                            >
                                {counts[filter]}
                            </span>
                        </button>
                    );
                })}
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {visibleProjects.map((project, index) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        index={index}
                    />
                ))}
            </div>

            {visibleProjects.length === 0 && (
                <p className="mt-8 text-zinc-500 text-center">
                    No projects match this filter yet.
                </p>
            )}

            <div className="mt-16 border-t border-white/10 pt-10 text-center">
                <p className="text-zinc-300">
                    Liked what you saw? I&apos;m targeting Fall 2026 roles.
                </p>
                <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
                    <a
                        href={SOCIALS.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={buttonVariants({ size: "sm" })}
                    >
                        Reach out on LinkedIn
                    </a>
                    <Link
                        href="/about"
                        className={buttonVariants({
                            variant: "outline",
                            size: "sm",
                        })}
                    >
                        More about me
                    </Link>
                </div>
            </div>
        </section>
    );
}
