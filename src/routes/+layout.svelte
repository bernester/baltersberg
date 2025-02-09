<script>
  import "@fontsource/lexend/300.css";
  import "@fontsource/lexend/400.css";
  import "@fontsource/lexend/700.css";
  import "../app.css";
  import Logo from "$components/Logo.svelte";
  import { linkClasses } from "$lib/styles";
</script>

<svelte:head>
  <title>Freizeit für Alle. Das inklusive Sommerzeltlager in Allgäu</title>
</svelte:head>
<div class="flex flex-col items-center">
  <header>
    <a href="/" aria-label="Zur Startseite">
      <Logo />
    </a>
  </header>
  <main class="w-full">
    <slot />
  </main>

  <footer class="max-w-screen-sm mx-auto py-8 text-sm text-center space-y-4">
    <p>
      Freizeit für Alle ist ein Projekt der Freizeitbande e.V. unter der
      Trägerschaft des
      <a
        href="https://allgaeu-oberschwaben.bdkj.info/"
        target="_blank"
        rel="nofollow"
        class={linkClasses}
      >
        Katholischen Jugendreferat Ravensburg
      </a>
    </p>
    <p>
      <a href="/impressum" class={linkClasses}>Impressum</a>
      <span class="mx-2">•</span>
      <a href="/datenschutz" class={linkClasses}>Datenschutzerklärung</a>
    </p>
  </footer>
</div>
