import { annotate } from "rough-notation";
import { onMount } from "svelte";

function applyAnnotation(node: HTMLElement, options: any) {
  const annotation = annotate(node, options);
  setTimeout(() => {
    annotation.show();
  }, 200);
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
    color: "var(--color-black)",
    multiline: true,
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
    color: color === "green" ? "var(--color-green)" : "var(--color-yellow)",
    multiline: true,
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
    color: color === "green" ? "var(--color-green)" : "var(--color-yellow)",
    multiline: true,
    iterations: 1,
  };

  onMount(() => createObserver(node, options));
  $: createObserver(node, options);
}
