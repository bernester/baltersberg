<script>
  import data from "../../data.json";
  import { formatDate } from "$lib/utils";
  import { headlineClasses, sectionClasses } from "$lib/styles";
  import { Marker } from "$lib/annotate";
</script>

<section class={`${sectionClasses.wide} space-y-6`}>
  <h2 class={`${headlineClasses} text-center mb-8`}>
    Die Freizeit auf einen Blick
  </h2>
  <div class="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-6">
    <dl class="space-y-1">
      <dt class="font-bold text-base">Dauer:</dt>
      <dd class="text-lg text-balance">
        Das Zeltlager dauert <span class="font-bold" use:Marker>10 Tage</span>
      </dd>
    </dl>
    <dl class="space-y-1">
      <dt class="font-bold text-base">Anreise:</dt>
      <dd class="text-lg text-balance">
        Am <span class="font-bold" use:Marker
          >{formatDate(data.dates.CurrentStart)}
          ab 11 Uhr</span
        > könnt ihr anreisen.
      </dd>
    </dl>
    <dl class="space-y-1">
      <dt class="font-bold text-base">Abreise:</dt>
      <dd class="text-lg text-balance">
        Die Abreise beginnt <span class="font-bold" use:Marker
          >{formatDate(data.dates.CurrentEnd)} ab 11 Uhr</span
        >
      </dd>
    </dl>
    <dl class="space-y-1">
      <dt class="font-bold text-base">Addresse:</dt>
      <dd class="text-lg text-balance">
        Zeltplatz am Buchweiher, Buch 4, 88260 Argenbühl
      </dd>
    </dl>
    <dl class="space-y-1">
      <dt class="font-bold text-base">Teilnehmende:</dt>
      <dd class="text-lg text-balance">
        Wir haben Platz für <span class="font-bold" use:Marker
          >32 Kinder und Jugendliche</span
        >
      </dd>
    </dl>
    <dl class="space-y-1">
      <dt class="font-bold text-base">Alterspanne:</dt>
      <dd class="text-lg text-balance">
        Das Zeltlager ist für Kinder und Jugendliche zwischen <span
          class="font-bold"
          use:Marker>9 bis 14 Jahre alt</span
        > ausgelegt.
      </dd>
    </dl>
  </div>
</section>
