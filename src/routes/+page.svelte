<script>
  import HomePrices from "$components/Home/HomePrices.svelte";
  import HomeHero from "$components/Home/HomeHero.svelte";
  import HomeSummary from "$components/Home/HomeSummary.svelte";
  import HomeTeamAd from "$components//Home/HomeTeamAd.svelte";
  import { headlineClasses, sectionClasses } from "$lib/styles";
  import { Underline, Marker } from "$lib/annotate";
  import data from "./../data.json";
  import RegisterButton from "$components/Common/RegisterButton.svelte";
</script>

<HomeHero />
<HomePrices />
<HomeSummary />

<article class={`${sectionClasses.default}`}>
  <h2 class={`${headlineClasses} mb-8 text-center text-balance`}>
    Was ist die <span use:Marker class="inline-block">Freizeit für Alle?</span>
  </h2>
  <p class="text-lg/relaxed text-pretty mb-4">
    Die Freizeit für Alle ist ein inklusives Zeltlager für Kinder und
    Jugendliche zwischen 10 und 15 Jahren.
  </p>
  <p class="text-lg/relaxed text-pretty mb-8">
    Bei uns sind <span use:Underline>alle herzlich willkommen,</span> unabhängig
    von Fähigkeiten, Geschlecht, Religion oder Hintergrund. Wir bieten ein abenteuerliches
    Programm voller Spaß und Freude. In unseren Zelten haben alle Platz. Sei dabei
    und erlebe eine unvergessliche Zeit mit neuen Bekanntschaften und vielen tollen
    Erlebnissen!
  </p>

  {#if data.registrationOpen}
    <div class="text-center">
      <RegisterButton />
    </div>
  {/if}
</article>

<HomeTeamAd />
