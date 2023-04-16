<script>
  import "@fontsource/inter/400.css";
  import "@fontsource/inter/700.css";
  import "../styles/app.scss";
  import Logo from "../components/Logo.svelte";
</script>

<svelte:head>
  <title>Zeltlager Baltersberg - Freizeit für Alle!</title>
</svelte:head>
<div class="layout">
  <header class="header">
    <a href="/" aria-label="Zur Startseite">
      <Logo />
    </a>
  </header>
  <main class="main">
    <slot />
  </main>
  <footer class="footer">
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
      &copy; 2017-2023 Zeltlager Baltersberg
    </p>
  </footer>
</div>

<style type="scss">
  .logo {
    height: 64px;
  }

  .layout {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .header {
    display: flex;
    justify-content: flex-end;
    padding: 32px;
    flex: 0;
    position: sticky;
    top: 0;
  }

  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .footer {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0;
    font-size: 14px;
    line-height: 1.5em;
    padding: 32px;
    background-color: var(--backgroundSecondary);
  }

  .wrapper {
    box-sizing: border-box;
    max-width: 640px;
    text-align: center;
    padding-bottom: 80px;
  }
</style>
