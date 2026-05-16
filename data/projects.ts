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
        title: "Distributed Vector Search Engine",
        description:
            "Sharded approximate-nearest-neighbor search service using HNSW indexes with consistent-hashed routing and Raft-replicated metadata. Targets sub-100ms p99 latency for billion-scale embedding retrieval — the bottleneck behind production RAG, semantic search, and recommendation.",
        tags: ["Go", "Distributed Systems", "Search", "gRPC"],
        status: "in-progress",
    },
    {
        id: 2,
        title: "LLM Inference Server",
        description:
            "High-throughput LLM inference server with paged KV-cache and continuous batching, lifting GPU utilization 3–4x over naive request batching. Supports tensor-parallel serving for models that exceed single-GPU memory.",
        tags: ["Python", "CUDA", "PyTorch", "ML Infrastructure"],
        status: "planned",
    },
    {
        id: 3,
        title: "Real-time Recommender System",
        description:
            "Two-tower retrieval with a cross-encoder reranker, trained on a Kafka interaction stream with online label updates. Implements point-in-time-correct feature joins so training and serving see the same signals — the failure mode behind most broken ranking deploys.",
        tags: ["Python", "PyTorch", "Kafka", "Recommendation Systems"],
        status: "planned",
    },
    {
        id: 4,
        title: "Real-time CRDT Sync Engine",
        description:
            "WebSocket-backed collaborative-state engine using conflict-free replicated data types to merge concurrent edits without central coordination. Sub-50ms convergence and offline-tolerant — the kind of multiplayer state used by Figma and Linear.",
        tags: ["TypeScript", "Rust", "Distributed Systems", "Real-time"],
        status: "planned",
    },
    {
        id: 5,
        title: "Rust LSM Key-Value Store",
        description:
            "Embedded key-value store with an LSM-tree storage engine, write-ahead logging, MVCC snapshot reads, and Raft-replicated multi-node consensus. Built to understand — and to be measurably comparable against — the primitives behind RocksDB, etcd, and TiKV.",
        tags: ["Rust", "Storage Engines", "Raft", "Databases"],
        status: "planned",
    },
    {
        id: 6,
        title: "Sentinel-X — Autonomous Reconnaissance",
        description:
            "GPS-denied autonomous reconnaissance platform combining visual-inertial SLAM, edge ML perception, and zero-trust agentic mission control on ROS 2. Built for environments where neither GPS nor cloud connectivity can be assumed.",
        tags: ["Python", "ROS 2", "Robotics", "Edge AI"],
        status: "in-progress",
    },
];
