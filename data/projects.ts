export interface Project {
    id: number;
    title: string;
    description: string;
    tags: string[];
    githubUrl?: string;
    liveUrl?: string;
    status?: "shipped" | "in-progress" | "planned";
}

export const projects: Project[] = [
    {
        id: 1,
        title: "Book Tracker AI",
        description:
            "Full-stack reading journal. Three distinct Claude integrations in one app: context-injected recommendations grounded in your library, page-anchored note synthesis, and a 5-tool agent loop. One docker compose up — Next.js + FastAPI + Postgres + Claude. Graduate capstone.",
        tags: ["Next.js", "FastAPI", "PostgreSQL", "Claude", "Docker"],
        githubUrl: "https://github.com/Auth3nticAI/book-tracker-ai",
        status: "shipped",
    },
    {
        id: 2,
        title: "HeapSight",
        description:
            "Production C++ learning platform — write idiomatic C++ in the browser, compile to WebAssembly server-side, watch your game run live on canvas in under five seconds. raylib 5.5 + Cloud Run + Supabase + Next.js.",
        tags: ["Next.js", "C++", "WebAssembly", "Cloud Run", "Supabase"],
        githubUrl: "https://github.com/Auth3nticAI/heapsight",
        liveUrl: "https://heapsight.com",
        status: "shipped",
    },
    {
        id: 3,
        title: "PRISM — Attention Forecasting",
        description:
            "Supervised ML pipeline predicting where users will look next from mouse-tracking trajectories. Trained on SALICON (579K fixation sequences). Engineered kinematic features (speed, acceleration, jerk) → Random Forest classifier → spatial priority map for foveated rendering.",
        tags: ["Python", "scikit-learn", "Pandas", "Computer Vision"],
        githubUrl: "https://github.com/Auth3nticAI/prism_ml_part1",
        status: "shipped",
    },
    {
        id: 4,
        title: "Aeroscapes UAV Segmentation",
        description:
            "Three-model comparison on Aeroscapes drone imagery (12 classes, 720×720). DeepLabv3+ hit 0.789 mIoU — 10% over U-Net and 15% over SegFormer — while being the fastest at inference. Includes per-class IoU breakdown and failure-case analysis.",
        tags: ["Python", "PyTorch", "Computer Vision", "Deep Learning"],
        githubUrl: "https://github.com/Auth3nticAI/aeroscapes-project",
        status: "shipped",
    },
    {
        id: 5,
        title: "Accounting AI Playbook",
        description:
            "Catalog of recurring accounting pain points mapped to AI solutions — each with tech stack, maturity level, setup time, and a target price. Built so an AI consultant can land discovery calls on real, priced answers instead of vapor. Next.js + FastAPI + Postgres with a one-to-many domain model.",
        tags: ["Next.js", "FastAPI", "PostgreSQL", "Pydantic"],
        githubUrl: "https://github.com/Auth3nticAI/accounting-ai-playbook",
        status: "shipped",
    },
    {
        id: 6,
        title: "Sentinel-X — Autonomous Reconnaissance",
        description:
            "GPS-denied autonomous reconnaissance stack combining visual-inertial SLAM, edge ML perception, and zero-trust agentic mission control on ROS 2. Designed for environments where neither GPS nor cloud connectivity can be assumed.",
        tags: ["Python", "ROS 2", "Robotics", "Edge AI", "Security"],
        githubUrl: "https://github.com/Auth3nticAI/sentinel-x",
        status: "in-progress",
    },
    {
        id: 7,
        title: "Claude Tool-Use Agent (reference)",
        description:
            "Clean isolated implementation of the Anthropic tool-use loop — 5 tools over a real Postgres book library, bounded iterations, every tool call logged. The smallest readable version of the pattern, extracted from the Book Tracker AI capstone for portability.",
        tags: ["Python", "FastAPI", "PostgreSQL", "Claude"],
        githubUrl: "https://github.com/Auth3nticAI/claude-tool-use-agent",
        status: "shipped",
    },
];
