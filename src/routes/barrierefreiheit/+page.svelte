<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<div class="max-w-screen-sm mx-auto py-8 mb-8 prose prose-sm">
  {@html data.content}
</div>

<style>
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

