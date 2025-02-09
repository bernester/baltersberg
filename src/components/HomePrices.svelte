<script type="module">
  import { Box, Circle } from "$lib/annotate";
  import { linkClasses } from "$lib/styles";
  import data from "./../data.json";
  import Headline from "./Headline.svelte";
  import RegisterButton from "./RegisterButton.svelte";
</script>

<section class="max-w-screen-sm mx-auto py-8 mb-8">
  <div class="flex flex-col gap-8 text-center">
    <Headline tag="h2" style="headline"
      >Was <span use:Circle>kostet</span> die Freizeit?</Headline
    >

    <p class="text-xl/relaxed">
      Wir wollen, dass jeder beim Sommerabenteuer dabei sein kann. Deshalb gibt
      es drei verschiedene Preise.
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
    <p class="text-base">
      Wenn ihr Fragen zu den Preisen habt oder Hilfe braucht, schreibt uns eine
      E-Mail an: <a
        href="mailto:freizeitfueralle@gmail.com"
        target="_blank"
        class={linkClasses}>freizeitfueralle@gmail.com</a
      > Wir helfen euch gerne! 😊
    </p>
  </div>
</section>
