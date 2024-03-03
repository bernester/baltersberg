<script>
  import "@fontsource/lexend/300.css";
  import "@fontsource/lexend/400.css";
  import "@fontsource/lexend/700.css";
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
    <div class="footer-content">
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
    </div>
  </footer>
</div>

<style lang="scss">
  .layout {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .header {
    display: flex;
    justify-content: flex-end;
    padding: 32px;
    width: 100%;
    flex: 0;
    position: fixed;
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
    background-color: var(--backgroundSecondary);
  }

  .footer-content {
    width: 100%;
    max-width: 800px;
    padding: 32px;
  }
</style>
