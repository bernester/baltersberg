<script lang="ts">
  import "@fontsource/lexend/300.css";
  import "@fontsource/lexend/400.css";
  import "@fontsource/lexend/700.css";
  import "../app.css";
  import Logo from "$components/Common/Logo-ani.svelte";
  import RegisterButton from "$components/Common/RegisterButton.svelte";
  import data from "../data.json";
  import {
    buttonSmallClasses,
    linkClasses,
    secondaryButtonClasses,
  } from "$lib/styles";
  import { prefersReducedMotion } from "svelte/motion";
  import { fly } from "svelte/transition";
  import type { Snippet } from "svelte";

  const { children }: { children: Snippet } = $props();

  // The centered logo lives in normal flow at the top. Once it scrolls out of
  // view, reveal a compact sticky navbar (logo left, register button right).
  let header = $state<HTMLElement>();
  let showNav = $state(false);

  $effect(() => {
    if (!header) return;
    const observer = new IntersectionObserver(
      ([entry]) => (showNav = !entry.isIntersecting),
    );
    observer.observe(header);
    return () => observer.disconnect();
  });
</script>

<svelte:head>
  <title>Freizeit für Alle. Das inklusive Sommerzeltlager in Allgäu</title>
</svelte:head>
<a
  href="#main"
  class="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-yellow focus:text-black focus:font-bold focus:rounded"
>
  Zum Hauptinhalt springen
</a>
<header bind:this={header} class="p-8 flex justify-center">
  <a href="/" aria-label="Zur Startseite">
    <Logo />
  </a>
</header>

{#if showNav}
  <nav
    transition:fly={{
      y: -80,
      duration: prefersReducedMotion.current ? 0 : 300,
    }}
    class="fixed top-0 inset-x-0 z-40"
  >
    <div
      class="max-w-7xl mx-auto px-8 py-3 flex items-center justify-between gap-4"
    >
      <a href="/" aria-label="Zur Startseite">
        <Logo size={80} />
      </a>
      <div class="flex gap-4">
        <a
          href="/spenden"
          class={[
            buttonSmallClasses,
            secondaryButtonClasses,
            "btn-interaction",
          ]}>Spenden</a
        >
        {#if data.registrationOpen}
          <RegisterButton small />
        {/if}
      </div>
    </div>
  </nav>
{/if}
<main id="main" class="w-full text-black">
  {@render children()}
</main>

<footer
  class="max-w-(--breakpoint-sm) mx-auto py-8 text-sm text-center space-y-4 text-balance"
>
  <p>
    Freizeit für Alle ist ein Projekt der Freizeitbande e.V. unter der
    Trägerschaft des
    <a
      href="https://allgaeu-oberschwaben.bdkj.info/"
      target="_blank"
      rel="nofollow noopener noreferrer"
      class={linkClasses}
      aria-label="Katholisches Jugendreferat Ravensburg (öffnet in neuem Tab)"
    >
      Katholischen Jugendreferat Ravensburg
    </a>
  </p>
  <p>
    <span class="whitespace-nowrap">
      <a href="/impressum" class={linkClasses}>Impressum</a>
      <span class="mx-2" aria-hidden="true">•</span>
    </span>
    <span class="whitespace-nowrap">
      <a href="/datenschutz" class={linkClasses}>Datenschutzerklärung</a>
    </span>
    <span class="whitespace-nowrap">
      <a href="/barrierefreiheit" class={linkClasses}>Barrierefreiheit</a>
      <span class="mx-2" aria-hidden="true">•</span>
    </span>
    <span class="whitespace-nowrap">
      <a href="/satzung" class={linkClasses}>Vereinssatzung</a>
      <span class="mx-2" aria-hidden="true">•</span>
    </span>
    <a href="/schutzkonzept" class={linkClasses}>Schutzkonzept</a>
  </p>
</footer>
