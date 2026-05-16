import type { Project } from "@/data/projects";

const statusStyles: Record<NonNullable<Project["status"]>, string> = {
    shipped: "bg-green-100 text-green-800",
    "in-progress": "bg-amber-100 text-amber-800",
    planned: "bg-slate-100 text-slate-700",
};

const statusLabels: Record<NonNullable<Project["status"]>, string> = {
    shipped: "Shipped",
    "in-progress": "In progress",
    planned: "Planned",
};

export default function ProjectCard({ project }: { project: Project }) {
    return (
        <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-slate-300 transition-all">
            <div className="flex items-start justify-between gap-3 mb-2">
                <h3 className="text-lg font-semibold text-slate-900">
                    {project.title}
                </h3>
                {project.status && (
                    <span
                        className={`text-xs font-medium px-2 py-1 rounded-full ${statusStyles[project.status]}`}
                    >
                        {statusLabels[project.status]}
                    </span>
                )}
            </div>

            <p className="text-sm text-slate-600 leading-relaxed mb-4">
                {project.description}
            </p>

            <ul className="flex flex-wrap gap-1.5 mb-4">
                {project.tags.map((tag) => (
                    <li
                        key={tag}
                        className="text-xs font-medium bg-slate-100 text-slate-700 px-2 py-1 rounded"
                    >
                        {tag}
                    </li>
                ))}
            </ul>

            <div className="flex gap-4 text-sm font-medium min-h-5">
                {project.githubUrl && (
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-700 hover:underline"
                    >
                        GitHub &rarr;
                    </a>
                )}
                {project.liveUrl && (
                    <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-700 hover:underline"
                    >
                        Live &rarr;
                    </a>
                )}
                {!project.githubUrl && !project.liveUrl && project.status === "planned" && (
                    <span className="text-slate-400">Repo coming soon</span>
                )}
            </div>
        </article>
    );
}
