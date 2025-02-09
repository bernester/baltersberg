import { annotate } from "rough-notation";
import { onMount } from "svelte";

export function Underline(node: HTMLElement) {
  onMount(() => {
    const annotation = annotate(node, { type: "underline", strokeWidth: 4 });
    annotation.show();
  });
}

export function Circle(node: HTMLElement) {
  onMount(() => {
    const annotation = annotate(node, {
      type: "circle",
      strokeWidth: 4,
      color: "var(--box)",
    });
    annotation.show();
  });
}

export function Box(node: HTMLElement) {
  onMount(() => {
    const annotation = annotate(node, {
      type: "box",
      strokeWidth: 4,
      padding: 0,
      color: "var(--box)",
    });
    annotation.show();
  });
}

export function Highlight(node: HTMLElement) {
  onMount(() => {
    const annotation = annotate(node, {
      type: "highlight",
      color: "var(--highlight)",
    });
    annotation.show();
  });
}
