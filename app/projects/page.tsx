"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

const allTags = Array.from(
    new Set(projects.flatMap((project) => project.tags))
).sort();

const filters = ["All", ...allTags];

export default function ProjectsPage() {
    const [activeFilter, setActiveFilter] = useState<string>("All");

    const visibleProjects =
        activeFilter === "All"
            ? projects
            : projects.filter((project) => project.tags.includes(activeFilter));

    return (
        <section className="max-w-3xl mx-auto px-6 py-16 sm:py-20">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
                Projects
            </h1>
            <p className="mt-3 text-slate-600">
                A selection of things I&apos;ve built — across machine learning,
                autonomous systems, and developer tooling.
            </p>

            <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filter projects by tag">
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
                                    ? "bg-blue-700 text-white border-blue-700"
                                    : "bg-white text-slate-700 border-slate-300 hover:border-slate-400 hover:bg-slate-50"
                            }`}
                        >
                            {filter}
                        </button>
                    );
                })}
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {visibleProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>

            {visibleProjects.length === 0 && (
                <p className="mt-8 text-slate-500 text-center">
                    No projects match this filter yet.
                </p>
            )}
        </section>
    );
}
