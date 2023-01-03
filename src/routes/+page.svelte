<svelte:head>
  <title>Zeltlager Baltersberg - Freizeit für Alle!</title>
</svelte:head>
<div class="layout">
  <header class="header">
    <img src="baltersberg-logo.svg" alt="Zeltlager Baltersberg" class="logo" />
  </header>
  <main class="main">
    <div class="wrapper">
      <h1 class="h1 bakso text-center">
        <span class="h3">Zeltlager Baltersberg</span><br /> Freizeit für Alle!
      </h1>
      <p class="lead text-center">
        Wir sind gerade am Umbauen. Bei Fragen schreiben Sie bitte an <a
          href="mailto: freizeitfueralle@gmail.com"
          >freizeitfueralle@gmail.com</a
        >
      </p>
    </div>
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

  .lead {
    font-size: 1.5rem;
    line-height: 1.5em;
  }
</style>
