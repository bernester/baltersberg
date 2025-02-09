<script type="module">
  import { Circle } from "$lib/annotate";
  import { headline, linkClasses } from "$lib/styles";
  import data from "./../data.json";
  import RegisterButton from "./RegisterButton.svelte";
</script>

<section class="max-w-screen-sm mx-auto py-8 mb-8">
  <div class="flex flex-col gap-8 text-center">
    <h2 class={headline}>Was <span use:Circle>kostet</span> die Freizeit?</h2>

    <p class="text-xl/relaxed text-balance">
      Damit sich alle unsere Freizeit leisten können, gibt es drei verschiedene
      Preise.
    </p>
    <div class="grid grid-cols-3 gap-4">
      <div>
        <div class="font-bolle text-6xl/none">{data.prices.regular}€</div>
        <div class="text-base font-bold">Normales <br />Einkommen</div>
      </div>
      <div>
        <div class="font-bolle text-6xl/none">{data.prices.low}€</div>
        <div class="text-base font-bold">Geringes <br />Einkommen</div>
      </div>
      <div>
        <div class="font-bolle text-6xl/none">{data.prices.none}€</div>
        <div class="text-base font-bold">Ohne festes <br />Einkommen</div>
      </div>
    </div>
    {#if data.registrationOpen}
      <RegisterButton />
    {/if}

    <div class="space-y-2">
      <p class="text-sm text-balance">
        Bitte wählt den Preis, der am besten zu eurer finanziellen Situation
        passt. Wir vertrauen darauf, dass ihr den für euch passenden Preis
        wählt.
      </p>
      <p class="text-sm text-balance">
        Wenn ihr Fragen zu den Preisen habt oder Hilfe braucht, schreibt uns
        eine E-Mail an: <a
          href="mailto:freizeitfueralle@gmail.com"
          target="_blank"
          class={linkClasses}>freizeitfueralle@gmail.com</a
        > Wir helfen euch gerne! 😊
      </p>
    </div>
  </div>
</section>
