"use client";

import { motion, useReducedMotion } from "motion/react";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import type { Project } from "@/data/projects";

const statusVariants: Record<
    NonNullable<Project["status"]>,
    "success" | "warning" | "neutral"
> = {
    shipped: "success",
    "in-progress": "warning",
    planned: "neutral",
};

const statusLabels: Record<NonNullable<Project["status"]>, string> = {
    shipped: "Shipped",
    "in-progress": "In progress",
    planned: "Planned",
};

export default function ProjectCard({
    project,
    index = 0,
}: {
    project: Project;
    index?: number;
}) {
    const reduce = useReducedMotion();

    return (
        <motion.div
            initial={{ opacity: 0, y: reduce ? 0 : 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
                duration: 0.45,
                delay: Math.min(index * 0.06, 0.3),
                ease: [0.21, 0.47, 0.32, 0.98],
            }}
            whileHover={reduce ? undefined : { y: -4 }}
        >
            <Card className="h-full p-6 transition-all hover:border-blue-500/30 hover:bg-white/[0.06] hover:shadow-[0_0_0_1px_rgba(37,99,235,0.2),0_20px_40px_rgba(0,0,0,0.4)]">
                <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="text-lg font-semibold text-white">
                        {project.title}
                    </h3>
                    {project.status && (
                        <Badge variant={statusVariants[project.status]} size="sm">
                            {statusLabels[project.status]}
                        </Badge>
                    )}
                </div>

                <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                    {project.description}
                </p>

                <ul className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((tag) => (
                        <li key={tag}>
                            <Badge variant="neutral" size="sm" className="rounded">
                                {tag}
                            </Badge>
                        </li>
                    ))}
                </ul>

                <div className="flex gap-4 text-sm font-medium min-h-5">
                    {project.githubUrl && (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 hover:underline"
                        >
                            GitHub &rarr;
                        </a>
                    )}
                    {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 hover:underline"
                        >
                            Live &rarr;
                        </a>
                    )}
                    {!project.githubUrl &&
                        !project.liveUrl &&
                        project.status === "planned" && (
                            <span className="text-zinc-500">Repo coming soon</span>
                        )}
                </div>
            </Card>
        </motion.div>
    );
}
