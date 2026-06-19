<script lang="ts">
  import { Strike } from "$lib/annotate";
  import type { Snippet } from "svelte";

  const { children }: { children: Snippet } = $props();

  let checked = $state(false);
</script>

<!-- One packing-list item people can tick off. A real (visually hidden but
     focusable) checkbox drives the state and is announced correctly by screen
     readers; the SVG marker swaps via CSS :checked (works without JS), and the
     hand-drawn strike-through is drawn by rough-notation when checked. -->
<li class="check">
  <label>
    <input type="checkbox" bind:checked />
    <span class="marker" aria-hidden="true"></span>
    <!-- rough-notation's multiline strike needs an inline target so each
         wrapped line yields its own client rect; the flex item (.text) would
         collapse to a single rect and draw just one line. -->
    <span class="text"><span use:Strike={checked}>{@render children()}</span
      ></span>
  </label>
</li>

<style>
  .check {
    text-wrap: pretty;
  }

  label {
    display: flex;
    align-items: flex-start;
    gap: 0.65rem;
    cursor: pointer;
  }

  /* Visually hidden, but kept in the layout so it stays keyboard-focusable. */
  input {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: 0;
    opacity: 0;
    pointer-events: none;
  }

  .marker {
    flex: none;
    width: 1.4em;
    height: 1.4em;
    margin-top: 0.05em;
    background: url("/uncheck.svg") center / contain no-repeat;
  }

  input:checked ~ .marker {
    background-image: url("/check.svg");
  }

  /* The input is invisible, so surface keyboard focus on the marker instead. */
  input:focus-visible ~ .marker {
    outline: 2px solid var(--color-black);
    outline-offset: 2px;
  }
</style>
