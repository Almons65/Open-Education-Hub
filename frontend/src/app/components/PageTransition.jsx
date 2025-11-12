"use client";

// Import animation components from Framer Motion
import { motion, AnimatePresence } from "framer-motion";
// Next.js hooks to get the current URL path and query parameters
import { usePathname, useSearchParams } from "next/navigation";


/**
 * PageTransition Component
 * A component that wraps page content (children) to apply
 * fade-in/fade-out animations when the route changes.
 */
export default function PageTransition({ children }) {
    // Get the current URL path (e.g., "/dashboard")
    const pathname = usePathname();
    // Get the current URL search parameters (e.g., "?user=123")
    const searchParams = useSearchParams();

    // Create a unique 'key' based on the full URL (path + search params).
    // This 'key' is essential for AnimatePresence to detect when the page *actually* changes.
    const key = pathname + "?" + (searchParams?.toString() || "");

    return (
        // AnimatePresence manages the animation cycle.
        // 'mode="wait"' tells it to wait for the old page to finish its 'exit' animation
        // *before* starting the new page's 'enter' animation. This prevents overlap.
        <AnimatePresence mode="wait">
            {/* 'motion.div' is an animatable version of a <div> */}
            {/* We pass the unique 'key' here. When this key changes, AnimatePresence
          triggers the 'exit' animation on the old component and 'initial'/'animate'
          on the new one. */}
            <motion.div
                key={key}
                // 'initial': The starting state of the animation (invisible and slightly down)
                initial={{ opacity: 0, y: 10 }}
                // 'animate': The end state of the animation (fully visible and at its normal position)
                animate={{ opacity: 1, y: 0 }}
                // 'exit': The state to animate to when the component is removed (invisible and slightly up)
                exit={{ opacity: 0, y: -10 }}
                // 'transition': How long the animation should take (0.4 seconds)
                transition={{ duration: 0.4}}
                // Ensure the wrapper div takes up full height to avoid layout jumps
                style={{ height: "100%" }}
            >
                {/* Render the actual page content (the page itself) inside the animated div */}
                {children}
            </motion.div>
        </AnimatePresence>
    );
}