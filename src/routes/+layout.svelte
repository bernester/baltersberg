<script lang="ts">
  import "@fontsource/lexend/300.css";
  import "@fontsource/lexend/400.css";
  import "@fontsource/lexend/700.css";
  import "../app.css";
  import Logo from "$components/Common/Logo-ani.svelte";
  import { linkClasses } from "$lib/styles";
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
<header class="p-8 flex justify-center">
  <a href="/" aria-label="Zur Startseite">
    <Logo />
  </a>
</header>
<main id="main" class="w-full text-black">
  <slot />
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
