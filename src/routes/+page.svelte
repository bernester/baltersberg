<script>
  import HomePrices from "../components/HomePrices.svelte";
  import HomeHero from "../components/HomeHero.svelte";
  import HomeSummary from "../components/HomeSummary.svelte";
  import HomeTeamAd from "../components/HomeTeamAd.svelte";
  import data from "./../data.json";
  import { formatDate } from "$lib/utils";
  import Headline from "@components/Headline.svelte";
</script>

<HomeHero />

<div class="text-4xl/relaxed font-bolle">
  Das Abenteuer geht weiter:<br />
  <mark
    >{formatDate(data.dates.CurrentStart)} - {formatDate(
      data.dates.CurrentEnd
    )}</mark
  ><br />
  Anmeldung ab Februar 2025
</div>

<HomePrices />

<HomeSummary />

<section class="max-w-screen-sm">
  <div>
    <Headline>Was ist das Zeltlager Baltersberg?</Headline>
    <p class="copy">
      Das Zeltlager Baltersberg ist ein inklusives Zeltlager für Kinder und
      Jugendliche zwischen 10 und 15 Jahren! Bei uns sind alle herzlich
      willkommen, unabhängig von Fähigkeiten, Geschlecht, Religion oder
      Hintergrund. Wir bieten ein abenteuerliches Programm voller Spaß und
      Freude. In unseren Zelten haben alle Platz. Sei dabei und erlebe eine
      unvergessliche Zeit mit neuen Bekanntschaften und vielen tollen
      Erlebnissen!
    </p>
  </div>
</section>

<HomeTeamAd />
