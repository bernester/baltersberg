<script lang="ts">
  import BackLink from "$components/Common/BackLink.svelte";
  import { proseWrapperClasses } from "$lib/styles";
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<svelte:head>
  <title>Vereinssatzung – Freizeit für Alle</title>
</svelte:head>

<div class={proseWrapperClasses}>
  <BackLink />
  {@html data.content}
</div>

<style>
  @reference "../../app.css";

  :global(.prose h1) {
    @apply text-2xl font-bold mb-6;
  }
  :global(.prose h2) {
    @apply text-lg font-bold mb-2 mt-8;
  }
  :global(.prose p) {
    @apply text-sm mb-4 text-pretty;
  }
  :global(.prose ol) {
    @apply text-sm mb-4 space-y-2 text-pretty list-outside list-decimal ps-6;
  }
  :global(.prose ol ol) {
    @apply mt-2 mb-0 list-[lower-alpha];
  }
  :global(.prose ul) {
    @apply text-sm mb-4 space-y-1 text-pretty list-outside list-disc ps-6;
  }
  :global(.prose li) {
    @apply leading-relaxed;
  }
  :global(.prose hr) {
    @apply my-8 border-t border-black/20;
  }
  :global(.prose a) {
    @apply underline;
  }
</style>
