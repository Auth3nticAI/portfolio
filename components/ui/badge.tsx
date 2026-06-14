import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
    "inline-flex items-center rounded-full font-medium transition-colors",
    {
        variants: {
            variant: {
                default: "bg-blue-500/15 text-blue-300 ring-1 ring-inset ring-blue-500/20",
                neutral: "bg-white/5 text-zinc-300 ring-1 ring-inset ring-white/10",
                success:
                    "bg-green-500/15 text-green-400 ring-1 ring-inset ring-green-500/20",
                warning:
                    "bg-amber-500/15 text-amber-300 ring-1 ring-inset ring-amber-500/20",
            },
            size: {
                default: "px-3 py-1.5 text-sm",
                sm: "px-2 py-1 text-xs",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

export interface BadgeProps
    extends React.HTMLAttributes<HTMLSpanElement>,
        VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, size, ...props }: BadgeProps) {
    return (
        <span className={cn(badgeVariants({ variant, size }), className)} {...props} />
    );
}

export { Badge, badgeVariants };
