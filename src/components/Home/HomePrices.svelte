<script type="module">
  import RegisterButton from "$components/Common/RegisterButton.svelte";
  import { Circle, Underline } from "$lib/annotate";
  import { headlineClasses, linkClasses, sectionClasses } from "$lib/styles";
  import data from "../../data.json";

  const PriceClasses = "font-bolle text-4xl/none md:text-6xl/none";
</script>

<section class={`${sectionClasses.default}`} id="mehr">
  <div class="flex flex-col gap-8 text-center">
    <h2 class={headlineClasses}>
      Was <span use:Circle style="inline-block">kostet</span> die Freizeit?
    </h2>

    <p class="text-xl/relaxed text-balance">
      Damit sich alle unsere Freizeit leisten können, gibt es drei verschiedene
      Preise, die sich <span use:Underline>nach eurem Haushaltseinkommen</span> richten.
    </p>
    <div class="grid grid-cols-3 gap-4">
      <div>
        <div class={PriceClasses}>{data.prices.regular}€</div>
        <div class="text-sm md:text-base font-bold">
          Ab mittlerem <br />Einkommen
        </div>
      </div>
      <div>
        <div class={PriceClasses}>{data.prices.low}€</div>
        <div class="text-sm md:text-base font-bold">
          Bei geringem <br />Einkommen
        </div>
      </div>
      <div>
        <div class={PriceClasses}>{data.prices.none}€</div>
        <div class="text-sm md:text-base font-bold">
          Ohne festes <br />Einkommen
        </div>
      </div>
    </div>
    {#if data.registrationOpen}
      <RegisterButton />
    {/if}

    <div class="space-y-2">
      <!-- <p class="text-sm text-balance">
        Bitte wählt den Preis, der am besten zu eurer finanziellen Situation
        passt. Wir vertrauen darauf, dass ihr den für euch passenden Preis
        wählt.
      </p> -->
      <p class="text-sm text-balance">
        Wenn ihr Fragen zu den Preisen habt oder Hilfe braucht, schreibt uns
        eine E-Mail an: <a
          href="mailto:hallo@freizeitban.de"
          target="_blank"
          class={linkClasses}>hallo@freizeitban.de</a
        > Wir helfen euch gerne! 😊
      </p>
    </div>
  </div>
</section>
