<script type="module">
  import data from "./../data.json";
</script>

<section class="max-w-screen-sm">
  <div class="py-8 max-w-[72ch]">
    <h2 class="font-bolle uppercase text-6xl mb-[0.5em]">
      Wie viel kostet die Freizeit?
    </h2>
    <p class="text-xl/relaxed mb-8">
      Wir wollen, dass jeder beim Sommerabenteuer dabei sein kann. Deshalb gibt es drei verschiedene Preise.
    </p>
    <div class="grid grid-cols-3 gap-4">
      <div class="price-wrapper">
        <h3 class="price-name">Normales Einkommen</h3>
        <strong class="font-bolle text-4xl">{data.prices.regular}€</strong>
      </div>
      <div class="price-wrapper">
        <h3 class="price-name">Geringes Einkommen</h3>
        <strong class="font-bolle text-4xl">{data.prices.low}€</strong>
      </div>
      <div class="price-wrapper">
        <h3 class="price-name">Ohne festes Einkommen</h3>
        <strong class="font-bolle text-4xl">{data.prices.none}€</strong>
      </div>
    </div>
    {#if data.registrationOpen}
        <a
          href="https://tally.so/r/3EKKMN"
          class="btn"
          rel="nofollow"
          target="blank">Jetzt anmelden</a
        >
    {/if}
    <div>
      <p class="text-md">
        Wenn ihr Fragen zu den Preisen habt oder mehr Unterstützung braucht, könnt ihr uns jederzeit unter <a
        href="mailto:freizeitfueralle@gmail.com"
        target="_blank" class="underline underline-offset-2 hover:no-underline">freizeitfueralle@gmail.com</a
      > erreichen.
      </p>
    </div>
  </div>
</section>
