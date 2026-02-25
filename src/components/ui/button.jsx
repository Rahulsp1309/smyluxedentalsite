import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

const Button = React.forwardRef(({ className, variant = "default", size = "default", children, ...props }, ref) => {
    const variants = {
        default: "bg-primary text-white hover:bg-primary-hover shadow-md",
        outline: "border-2 border-primary text-primary hover:bg-primary/10",
        ghost: "text-text-light dark:text-text-dark hover:bg-slate-100 dark:hover:bg-slate-800",
        secondary: "bg-secondary text-white hover:bg-secondary-light",
    };

    const sizes = {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 rounded-md px-8 text-lg",
        icon: "h-10 w-10",
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
                "inline-flex items-center justify-center rounded-full text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
                variants[variant],
                sizes[size],
                className
            )}
            ref={ref}
            {...props}
        >
            {children}
        </motion.button>
    );
});
Button.displayName = "Button";

export { Button };
