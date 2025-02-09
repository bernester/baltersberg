<script>
  import HomePrices from "$components/HomePrices.svelte";
  import HomeHero from "$components/HomeHero.svelte";
  import HomeSummary from "$components/HomeSummary.svelte";
  import HomeTeamAd from "$components/HomeTeamAd.svelte";
  import Headline from "$components/Headline.svelte";
</script>

<HomeHero />

<HomePrices />

<HomeSummary />

<article class="max-w-screen-sm mx-auto py-8 mb-8">
  <div>
    <Headline>Was ist die Freizeit für Alle?</Headline>
    <p class="copy">
      Die Freizeit für Alle ist ein inklusives Zeltlager für Kinder und
      Jugendliche zwischen 10 und 15 Jahren! Bei uns sind alle herzlich
      willkommen, unabhängig von Fähigkeiten, Geschlecht, Religion oder
      Hintergrund. Wir bieten ein abenteuerliches Programm voller Spaß und
      Freude. In unseren Zelten haben alle Platz. Sei dabei und erlebe eine
      unvergessliche Zeit mit neuen Bekanntschaften und vielen tollen
      Erlebnissen!
    </p>
  </div>
</article>

<HomeTeamAd />
