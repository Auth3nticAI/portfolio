/**
 * Aurora hero backdrop. Pure CSS (see .aurora-blob / .grid-texture in
 * globals.css) — soft drifting gradient blobs + a faint dot grid behind the
 * hero content. Decorative only, so it's hidden from assistive tech.
 */
export default function AuroraBackground() {
    return (
        <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        >
            <div className="absolute inset-0 grid-texture" />
            <div
                className="aurora-blob"
                style={{
                    top: "-10rem",
                    left: "-8rem",
                    width: "32rem",
                    height: "32rem",
                    background:
                        "radial-gradient(circle at center, rgba(37,99,235,0.5), transparent 70%)",
                }}
            />
            <div
                className="aurora-blob"
                style={{
                    top: "-6rem",
                    right: "-10rem",
                    width: "30rem",
                    height: "30rem",
                    background:
                        "radial-gradient(circle at center, rgba(99,102,241,0.42), transparent 70%)",
                    animationDelay: "-9s",
                }}
            />
            {/* fade the aurora into the page so it never hard-edges */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0a]" />
        </div>
    );
}
