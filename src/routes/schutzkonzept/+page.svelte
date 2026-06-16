<script lang="ts">
  import BackLink from "$components/Common/BackLink.svelte";
  import { proseWrapperClasses } from "$lib/styles";
  import type { PageData } from "./$types";

  let { data }: { data: PageData } = $props();
</script>

<svelte:head>
  <title>Schutzkonzept – Freizeit für Alle</title>
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
  :global(.prose a) {
    @apply underline;
  }
</style>
