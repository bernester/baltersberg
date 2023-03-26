<script>
  import "../global.scss";
</script>

<svelte:head>
  <title>Zeltlager Baltersberg - Freizeit für Alle!</title>
</svelte:head>
<div class="layout">
  <header class="header">
    <a href="/" aria-label="Zur Startseite">
      <img src="baltersberg-logo.svg" alt="" class="logo" aria-hidden="true" />
    </a>
  </header>
  <main class="main">
    <slot />
  </main>
  <footer class="footer">
    <div class="wrapper">
      <p>
        Das Zeltlager Baltersberg ist unter der Trägerschaft des
        <a
          href="https://allgaeu-oberschwaben.bdkj.info/"
          target="_blank"
          rel="nofollow"
        >
          Katholischen Jugendreferat Ravensburg
        </a>. <br />
        <a href="/datenschutz">Datenschutzerklärung</a>
        &copy; 2017-2023 Zeltlager Baltersberg
      </p>
    </div>
  </footer>
</div>

<style>
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
  }

  .main {
    padding: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
  }

  .footer {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0;
    font-size: 12px;
  }

  .wrapper {
    box-sizing: border-box;
    max-width: 640px;
    text-align: center;
    padding-bottom: 80px;
  }
</style>
