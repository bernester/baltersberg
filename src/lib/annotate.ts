import { annotate } from "rough-notation";
import { onMount } from "svelte";

export function Underline(node: HTMLElement) {
  onMount(() => {
    const annotation = annotate(node, {
      type: "underline",
      strokeWidth: 2,
      iterations: 4,
      padding: 0,
      multiline: true,
    });
    setTimeout(() => {
      annotation.show();
    }, 1000);
  });
}

export function Circle(
  node: HTMLElement,
  color: "green" | "yellow" = "yellow"
) {
  onMount(() => {
    const annotation = annotate(node, {
      type: "circle",
      strokeWidth: 4,
      color: color === "green" ? "var(--color-green)" : "var(--color-yellow)",
      multiline: true,
    });
    setTimeout(() => {
      annotation.show();
    }, 1000);
  });
}

export function Box(node: HTMLElement) {
  onMount(() => {
    const annotation = annotate(node, {
      type: "box",
      strokeWidth: 4,
      padding: 0,
      color: "var(--box)",
      multiline: true,
    });
    setTimeout(() => {
      annotation.show();
    }, 1000);
  });
}

export function Marker(
  node: HTMLElement,
  color: "green" | "yellow" = "yellow"
) {
  onMount(() => {
    const annotation = annotate(node, {
      type: "highlight",
      color: color === "green" ? "var(--color-green)" : "var(--color-yellow)",
      multiline: true,
      iterations: 1,
    });
    setTimeout(() => {
      annotation.show();
    }, 1000);
  });
}
function theme(transparent: any) {
  throw new Error("Function not implemented.");
}
