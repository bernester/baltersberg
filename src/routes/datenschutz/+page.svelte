<script lang="ts">
  import BackLink from "$components/Common/BackLink.svelte";
  import { proseWrapperClasses } from "$lib/styles";
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<svelte:head>
  <title>Datenschutzerklärung – Freizeit für Alle</title>
</svelte:head>

<div class={proseWrapperClasses}>
  <BackLink />
  {@html data.content}
</div>

<style>
  @reference "../../app.css";

  :global(.prose h1) {
    @apply text-lg font-bold mb-2;
  }
  :global(.prose h2) {
    @apply text-base font-bold mb-2 mt-6;
  }
  :global(.prose p) {
    @apply text-sm mb-4 text-pretty;
  }
  :global(.prose ul) {
    @apply text-sm mb-4 space-y-1 text-pretty list-outside list-disc ps-4;
  }
  :global(.prose a) {
    @apply underline;
  }
  :global(.prose address) {
    @apply not-italic;
  }
</style>
