<script lang="ts">
  import DecorativeImage from "$components/Common/DecorativeImage.svelte";
  import HomeFaq from "$components/Home/HomeFaq.svelte";
  import HomeHero from "$components/Home/HomeHero.svelte";
  import HomePrices from "$components/Home/HomePrices.svelte";
  import HomeSeo from "$components/Home/HomeSEO.svelte";
  import HomeSummary from "$components/Home/HomeSummary.svelte";
  import HomeTeamAd from "$components/Home/HomeTeamAd.svelte";
  import HomeVideo from "$components/Home/HomeVideo.svelte";
</script>

<div class="space-y-20">
  <HomeHero />
  <HomeVideo />
  <HomePrices />
  <DecorativeImage
    src="/jugger.svg"
    alt="Kinder spielen Jugger auf der Wiese"
    width={640}
  />
  <HomeSummary />
  <DecorativeImage
    src="/joy-skipping.svg"
    alt="Zwei Kinder hüpfen fröhlich über einer Wiese"
  />
  <HomeSeo />
  <HomeFaq />
  <DecorativeImage
    src="/marshmallow.svg"
    alt="Kinder sitzen an einem Lagerfeuer und grillen Marshmallows"
  />
  <HomeTeamAd />
  <DecorativeImage
    src="/happy-chores.svg"
    alt="Kinder haben Spaß beim Spüldienst"
  />
</div>
