"use client";
import { useState, useEffect } from "react";

// ClientGate ensures rendering only happens after hydration
export default function ClientGate({ children }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  if (!ready) {
    // Optional placeholder (keeps SSR output consistent)
    return <div style={{ visibility: "hidden" }}>{children}</div>;
  }

  return children;
}
