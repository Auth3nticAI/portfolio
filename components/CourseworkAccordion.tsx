import { ChevronDownIcon } from "@/components/icons";

interface CourseGroup {
    theme: string;
    courses: string[];
}

/**
 * Collapsible coursework list built on native <details>/<summary> — no JS,
 * fully accessible, keyboard-operable. First group is open by default.
 */
export default function CourseworkAccordion({
    groups,
}: {
    groups: CourseGroup[];
}) {
    return (
        <div className="mt-6 divide-y divide-white/10 rounded-xl border border-white/10 bg-white/[0.02]">
            {groups.map((group, i) => (
                <details
                    key={group.theme}
                    open={i === 0}
                    className="group px-5"
                >
                    <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-sm font-semibold text-zinc-100 transition-colors hover:text-white [&::-webkit-details-marker]:hidden">
                        <span className="flex items-center gap-2.5">
                            {group.theme}
                            <span className="rounded-full bg-white/5 px-2 py-0.5 text-xs font-medium text-zinc-400 ring-1 ring-inset ring-white/10">
                                {group.courses.length}
                            </span>
                        </span>
                        <ChevronDownIcon className="h-4 w-4 text-zinc-500 transition-transform duration-200 group-open:rotate-180" />
                    </summary>
                    <ul className="space-y-1.5 pb-4 text-sm text-zinc-400">
                        {group.courses.map((c) => (
                            <li
                                key={c}
                                className="flex items-start gap-2 leading-relaxed"
                            >
                                <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-blue-400" />
                                <span>{c}</span>
                            </li>
                        ))}
                    </ul>
                </details>
            ))}
        </div>
    );
}
