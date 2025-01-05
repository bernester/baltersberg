<script>
  import "@fontsource/lexend/300.css";
  import "@fontsource/lexend/400.css";
  import "@fontsource/lexend/700.css";
  import "../app.css";
  import Logo from "@components/Logo.svelte";
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
  <main>
    <slot />
  </main>
  <footer>
    <p>
      Das Zeltlager Baltersberg ist unter der Trägerschaft des
      <a
        href="https://allgaeu-oberschwaben.bdkj.info/"
        target="_blank"
        rel="nofollow"
      >
        Katholischen Jugendreferat Ravensburg
      </a><br />
      <a href="/datenschutz">Datenschutzerklärung</a>
      &copy; 2017-2024 Zeltlager Baltersberg
    </p>
  </footer>
</div>
