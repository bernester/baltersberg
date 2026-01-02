<script>
  import HomePrices from "$components/Home/HomePrices.svelte";
  import HomeHero from "$components/Home/HomeHero.svelte";
  import HomeSummary from "$components/Home/HomeSummary.svelte";
  import HomeTeamAd from "$components/Home/HomeTeamAd.svelte";
  import HomeSeo from "$components/Home/HomeSEO.svelte";
  import HomeFaq from "$components/Home/HomeFaq.svelte";
</script>

<div class="space-y-20">
  <HomeHero />
  <section class="p-8">
    <a
      href="https://www.youtube.com/watch?v=fllxNphPCqw"
      target="_blank"
      rel="noopener noreferrer"
      class="relative block group"
    >
      <div
        class="absolute inset-0 flex items-center justify-center z-10"
        role="presentation"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-20 h-20 text-yellow bg-black group-hover:bg-opacity-90 transition duration-200 rounded-full p-4"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>

      <img
        src="campfire.svg"
        width="1280"
        height="853"
        loading="eager"
        class="w-full max-w-4xl mx-auto transform transition-transform duration-200 group-hover:scale-105"
        alt="Die Freizeitbande sitzt um das Lagerfeuer herum und singt"
        draggable="false"
      />
      <span class="sr-only">Youtube Video von der Freizeitbande</span>
    </a>
  </section>
  <HomePrices />
  <HomeSummary />
  <section class="flex justify-center">
    <img
      src="joy-skipping.svg"
      alt="Zwei Kinder hüpfen fröhlich über einer Wiese"
      class="w-[480px] max-w-full my-8"
      loading="lazy"
      draggable="false"
    />
  </section>
  <HomeSeo />
  <HomeFaq />
  <section class="flex justify-center">
    <img
      src="marshmallow.svg"
      alt="Marshmallow sitzt auf einem Lagerfeuer"
      class="w-[480px] max-w-full my-8"
      loading="lazy"
      draggable="false"
    />
  </section>
  <HomeTeamAd />
  <section class="flex justify-center">
    <img
      src="happy-chores.svg"
      alt="Kinder haben Spaßbeim Spüldienst"
      class="w-[480px] max-w-full my-8"
      loading="lazy"
      draggable="false"
    />
  </section>
</div>
