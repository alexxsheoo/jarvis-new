"use client";

import { useSyncExternalStore } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

function subscribe(onChange: () => void) {
  if (typeof window === "undefined" || !window.matchMedia) return () => {};
  const query = window.matchMedia(QUERY);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

function getSnapshot() {
  if (typeof window === "undefined" || !window.matchMedia) return false;
  return window.matchMedia(QUERY).matches;
}

/**
 * Hydration-safe replacement for Motion's `useReducedMotion`.
 *
 * Motion's version seeds its state from a module-level ref that is `null` on the
 * server and a real boolean in the browser, so any markup branching on it
 * diverges during hydration for users who actually prefer reduced motion.
 *
 * `useSyncExternalStore`'s server snapshot is used for BOTH the server render
 * and the first client render, so hydration is always deterministic. React then
 * re-reads the live snapshot after hydration and re-renders if it differs.
 *
 * Unlike Motion's hook, this one also stays subscribed to changes.
 */
export function useReducedMotion() {
  return useSyncExternalStore(subscribe, getSnapshot, () => false);
}
