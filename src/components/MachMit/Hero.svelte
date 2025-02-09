<script>
  import { Marker } from "$lib/annotate";
  import { linkClasses, primaryButtonClasses } from "$lib/styles";
  import { scrollTo } from "svelte-scrolling";
</script>

<section class="max-w-screen-sm mx-auto py-8 mb-8">
  <h1
    class="text-6xl/tight md:text-8xl/tight font-bolle uppercase text-center mb-8"
  >
    <span use:Marker={"green"}>Komm, mach mit.</span> Werde Teil der Freizeit&shy;bande.
  </h1>
  <div class="flex flex-col gap-6 items-center mb-20">
    <a
      href="https://tally.so/r/nrAk42"
      class={`${primaryButtonClasses} !text-green-light`}
      rel="nofollow"
      target="blank">Werde Teil des Teams</a
    >

    <a
      href="mehr-erfahren"
      use:scrollTo={"faq"}
      class={`${linkClasses}`}
      rel="presentation">Häufige Fragen</a
    >
  </div>
  <p class="text-lg/relaxed text-center text-pretty mb-8">
    Du liebst die Arbeit mit Kindern und Jugendlichen? Du bist spontan, wild und
    weltoffen? Du interessierst dich für Inklusion, Demokratie und
    interkulturellen Austausch? Du findest Nachhaltigkeit und gesunde Ernährung
    spitze? Du sehnst dich nach einem einzigartigen Sommerabenteuer?
  </p>
</section>
