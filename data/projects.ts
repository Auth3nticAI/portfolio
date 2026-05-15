export interface Project {
    id: number;
    title: string;
    description: string;
    tags: string[];
    githubUrl: string;
    liveUrl?: string;
    status?: "shipped" | "in-progress" | "planned";
}

export const projects: Project[] = [
    {
        id: 1,
        title: "Sentinel-X",
        description:
            "A secure, GPS-denied autonomous reconnaissance stack combining visual-inertial localization, edge AI perception, and zero-trust communications on ROS 2.",
        tags: ["Python", "ROS 2", "AI/ML", "Security"],
        githubUrl: "https://github.com/Auth3nticAI/sentinel-x",
        status: "in-progress",
    },
    {
        id: 2,
        title: "PRISM ML (Part 1)",
        description:
            "A supervised ML pipeline that forecasts user attention by predicting future cursor coordinates from engineered kinematic features.",
        tags: ["Python", "AI/ML"],
        githubUrl: "https://github.com/Auth3nticAI/prism_ml_part1",
        status: "shipped",
    },
    {
        id: 3,
        title: "HeapSight",
        description:
            "A visual C++ memory debugger that helps beginners see allocations, leaks, and heap behavior in real time.",
        tags: ["C++", "Systems", "Education"],
        githubUrl: "https://github.com/Auth3nticAI/heapsight",
        status: "shipped",
    },
    {
        id: 4,
        title: "Image Processing Toolkit",
        description:
            "OpenCV-based solutions for green-screen compositing, image restoration, and Canny edge detection with parameter tuning.",
        tags: ["Python", "Computer Vision"],
        githubUrl: "https://github.com/Auth3nticAI/Image_processing",
        status: "shipped",
    },
];
