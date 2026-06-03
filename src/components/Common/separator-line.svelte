<script lang="ts">
  import { untrack } from "svelte";
  import { separatorLines, type SvgLine } from "$lib/separator-lines";

  type Props = {
    lines?: SvgLine[];
    class?: string;
  };

  const { lines = separatorLines, class: className = "" }: Props = $props();

  // Pick a random line once when the component is created (intentionally non-reactive)
  const selectedLine = untrack(
    () => lines[Math.floor(Math.random() * lines.length)],
  );
</script>

<svg
  class={`w-auto h-1 aspect-auto ${className} mx-auto my-8`}
  viewBox={selectedLine.viewBox}
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  aria-hidden="true"
  role="presentation"
>
  {#each selectedLine.paths as path}
    <path d={path} fill="currentColor" class="text-black" />
  {/each}
</svg>
