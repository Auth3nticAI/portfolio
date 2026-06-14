"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

interface FadeInProps {
    children: ReactNode;
    /** Seconds to wait before animating in — use to stagger siblings. */
    delay?: number;
    /** Distance in px to travel upward into place. */
    y?: number;
    className?: string;
    /** Animate when scrolled into view instead of on mount. */
    inView?: boolean;
}

/**
 * Motion (MIT) entrance wrapper. Fades + slides content into place on mount,
 * or when scrolled into view. Respects prefers-reduced-motion.
 */
export default function FadeIn({
    children,
    delay = 0,
    y = 12,
    className,
    inView = false,
}: FadeInProps) {
    const reduce = useReducedMotion();
    const hidden = { opacity: 0, y: reduce ? 0 : y };
    const shown = { opacity: 1, y: 0 };

    return (
        <motion.div
            className={className}
            initial={hidden}
            {...(inView
                ? { whileInView: shown, viewport: { once: true, margin: "-80px" } }
                : { animate: shown })}
            transition={{ duration: 0.5, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
            {children}
        </motion.div>
    );
}
