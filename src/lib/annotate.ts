import { annotate } from "rough-notation";
import type { Action } from "svelte/action";

type AnnotateColor = "green" | "yellow";

// Reuse rough-notation's own types instead of duplicating them.
type RoughOptions = Parameters<typeof annotate>[1];
type RoughAnnotation = ReturnType<typeof annotate>;

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined" || !window.matchMedia) return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Shared lifecycle for all annotation actions. Waits until the node enters the
 * viewport via IntersectionObserver, draws the annotation, and cleans up
 * (observer + pending timeout + injected SVG) when the action is destroyed.
 */
function createAnnotation(
  node: HTMLElement,
  config: Omit<RoughOptions, "animate">,
): { destroy: () => void } {
  const reducedMotion = prefersReducedMotion();
  let annotation: RoughAnnotation | null = null;
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      annotation = annotate(node, { ...config, animate: !reducedMotion });
      if (reducedMotion) {
        annotation.show();
      } else {
        timeoutId = setTimeout(() => annotation?.show(), 200);
      }
      observer.unobserve(node);
      break;
    }
  });
  observer.observe(node);

  return {
    destroy() {
      observer.disconnect();
      if (timeoutId !== null) clearTimeout(timeoutId);
      annotation?.remove();
    },
  };
}

const transparentColor: Record<AnnotateColor, string> = {
  green: "var(--color-green-transparent)",
  yellow: "var(--color-yellow-transparent)",
};

export const Underline: Action<HTMLElement> = (node) =>
  createAnnotation(node, {
    type: "underline",
    strokeWidth: 2,
    iterations: 4,
    padding: 0,
    color: "var(--color-black-transparent)",
    multiline: true,
  });

export const Circle: Action<HTMLElement, AnnotateColor | undefined> = (
  node,
  color = "yellow",
) =>
  createAnnotation(node, {
    type: "circle",
    strokeWidth: 4,
    color: transparentColor[color],
    multiline: true,
  });

export const Marker: Action<HTMLElement, AnnotateColor | undefined> = (
  node,
  color = "yellow",
) =>
  createAnnotation(node, {
    type: "highlight",
    color: transparentColor[color],
    multiline: true,
    iterations: 1,
  });
