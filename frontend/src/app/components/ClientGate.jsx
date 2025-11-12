"use client";
// Import React's built-in hooks for state and side effects
import { useState, useEffect } from "react";

/**
 * ClientGate Component
 * * This component acts as a gate to prevent "hydration mismatch" errors in Next.js.
 * It works by ensuring its 'children' only render *after* the client has fully hydrated.
 * * On the server and during initial client render, it renders the children invisibly.
 * Immediately after hydration, it flips a state variable, causing a re-render
 * that displays the children. This guarantees the client-rendered output
 * matches the server-rendered output for the initial pass, avoiding the error.
 */
export default function ClientGate({ children }) {
  // 'ready' state tracks whether the component has successfully mounted (hydrated) on the client.
  // It starts as 'false' (server-render and initial client-render).
  const [ready, setReady] = useState(false);

  // This effect runs *only* on the client side, after the component has mounted.
  useEffect(() => {
    // Once the effect runs, we set the 'ready' state to 'true'.
    // This signals that we are safely on the client and post-hydration.
    setReady(true);
  }, []); // The empty dependency array [] ensures this effect runs only once, right after the initial mount.

  // --- Render Logic ---

  // This is the logic that runs during Server-Side Rendering (SSR)
  // AND during the initial client-side render (hydration).
  if (!ready) {
    // Render the children but keep them invisible.
    // This makes the server-rendered HTML structure identical to the
    // initial client-rendered HTML structure, preventing a mismatch error.
    // The user sees nothing, but the DOM structure is consistent.
    return <div style={{ visibility: "hidden" }}>{children}</div>;
  }

  // This logic runs *only* on the client, *after* the 'useEffect' has
  // set 'ready' to 'true' and triggered a re-render.
  // Now we return the *actual* children, which can be safely rendered on the client.
  return children;
}