<script lang="ts">
  import { untrack } from "svelte";

  type Props = {
    class?: string;
  };

  const { class: className = "" }: Props = $props();

  // 4 hand-drawn separator variants in /static/separators/. Each SVG has its
  // own viewBox, so the browser computes the width from the intrinsic aspect
  // ratio while we constrain the height with Tailwind.
  const lines = [
    "/separators/line-1.svg",
    "/separators/line-2.svg",
    "/separators/line-3.svg",
    "/separators/line-4.svg",
  ];

  // Pick once when the component is created (intentionally non-reactive).
  const selected = untrack(
    () => lines[Math.floor(Math.random() * lines.length)],
  );
</script>

<img
  src={selected}
  class={`w-auto h-1 ${className} mx-auto my-8`}
  aria-hidden="true"
  alt=""
/>
