import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 rounded-lg text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                default:
                    "bg-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.35)] hover:bg-blue-500 hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]",
                outline:
                    "border border-white/15 bg-transparent text-zinc-200 hover:border-white/30 hover:bg-white/5 hover:text-white",
                ghost: "text-zinc-400 hover:bg-white/5 hover:text-white",
            },
            size: {
                default: "px-5 py-2.5",
                sm: "px-3 py-1.5 text-xs",
                lg: "px-6 py-3 text-base",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {}

function Button({ className, variant, size, ...props }: ButtonProps) {
    return (
        <button
            className={cn(buttonVariants({ variant, size }), className)}
            {...props}
        />
    );
}

export { Button, buttonVariants };
