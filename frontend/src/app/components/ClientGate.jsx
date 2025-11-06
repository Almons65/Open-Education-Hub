"use client";
import { useState, useEffect } from "react";

// Prevent "hydration mismatch" errors in Next.js
// Ensuring its 'children' only render *after* the client has hydrated.
export default function ClientGate({ children }) {
  // This tracks whether the component has successfully mounted on the client.
  const [ready, setReady] = useState(false);

  useEffect(() => {
    //Set the 'ready' state to 'true'. This signals that we are safely on the client and post-hydration.
    setReady(true);
  }, []); // The empty array ensures this effect runs only once.

  // This is the logic that runs during Server-Side Rendering (SSR) and during the initial client-side render (hydration).
  if (!ready) {
    // The user sees nothing, but the HTML structure is consistent.
    return <div style={{ visibility: "hidden" }}>{children}</div>;
  }

  // the *actual* children, which can be safely rendered on the client.
  return children;
}