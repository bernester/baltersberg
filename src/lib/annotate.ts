import { annotate } from "rough-notation";
import { onMount } from "svelte";

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined" || !window.matchMedia) return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function applyAnnotation(node: HTMLElement, options: any) {
  const annotation = annotate(node, options);
  if (prefersReducedMotion()) {
    // Render the annotation instantly, with no draw animation
    annotation.show();
  } else {
    setTimeout(() => {
      annotation.show();
    }, 200);
  }
}

function createObserver(node: HTMLElement, options: any) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        applyAnnotation(node, options);
        observer.unobserve(node); // Stop observing after annotation is applied
      }
    });
  });

  observer.observe(node);
}

export function Underline(node: HTMLElement) {
  const options = {
    type: "underline",
    strokeWidth: 2,
    iterations: 4,
    padding: 0,
    color: "var(--color-black-transparent)",
    multiline: true,
    animate: !prefersReducedMotion(),
  };

  onMount(() => createObserver(node, options));
  $: createObserver(node, options);
}

export function Circle(
  node: HTMLElement,
  color: "green" | "yellow" = "yellow"
) {
  const options = {
    type: "circle",
    strokeWidth: 4,
    color:
      color === "green"
        ? "var(--color-green-transparent)"
        : "var(--color-yellow-transparent)",
    multiline: true,
    animate: !prefersReducedMotion(),
  };

  onMount(() => createObserver(node, options));
  $: createObserver(node, options);
}

export function Marker(
  node: HTMLElement,
  color: "green" | "yellow" = "yellow"
) {
  const options = {
    type: "highlight",
    color:
      color === "green"
        ? "var(--color-green-transparent)"
        : "var(--color-yellow-transparent)",
    multiline: true,
    iterations: 1,
    animate: !prefersReducedMotion(),
  };

  onMount(() => createObserver(node, options));
  $: createObserver(node, options);
}
