<script lang="ts">
  import data from "../../data.json";
  import { formatDate } from "$lib/utils";
  import { headlineClasses, sectionClasses } from "$lib/styles";
  import { Marker } from "$lib/annotate";
</script>

<section class={`${sectionClasses.wide} space-y-6`}>
  <h2 class={`${headlineClasses} text-center mb-8`}>
    Die Freizeit auf einen Blick
  </h2>
  <dl class="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-6">
    <div class="space-y-1">
      <dt class="font-bold text-lg">Dauer:</dt>
      <dd class="text-xl text-balance">
        Die Freizeit dauert <span class="font-bold" use:Marker>10 Tage</span>
      </dd>
    </div>
    <div class="space-y-1">
      <dt class="font-bold text-lg">Anreise:</dt>
      <dd class="text-xl text-balance">
        Am <span class="font-bold" use:Marker
          >{formatDate(data.dates.camp.start)}
          {data.schedule.arrivalTime}</span
        > könnt ihr anreisen.
      </dd>
    </div>
    <div class="space-y-1">
      <dt class="font-bold text-lg">Abreise:</dt>
      <dd class="text-xl text-balance">
        Die Abreise ist am <span class="font-bold" use:Marker
          >{formatDate(data.dates.camp.end)} {data.schedule.departureTime}</span
        >
      </dd>
    </div>
    <div class="space-y-1">
      <dt class="font-bold text-lg">Adresse:</dt>
      <dd class="text-xl text-balance">
        {data.venue.name}, {data.venue.street},
        {data.venue.postalCode}
        {data.venue.city}
      </dd>
    </div>
    <div class="space-y-1">
      <dt class="font-bold text-lg">Teilnehmende:</dt>
      <dd class="text-xl text-balance">
        Wir haben Platz für <span class="font-bold" use:Marker
          >32 Kinder und Jugendliche</span
        >
      </dd>
    </div>
    <div class="space-y-1">
      <dt class="font-bold text-lg">Alterspanne:</dt>
      <dd class="text-xl text-balance">
        Die Freizeit ist besonders <span class="font-bold" use:Marker
          >für 9- bis 14-Jährige</span
        > geeignet.
      </dd>
    </div>
  </dl>
</section>
