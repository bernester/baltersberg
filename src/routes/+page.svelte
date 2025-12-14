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
          class="w-20 h-20 text-black bg-white group-hover:bg-opacity-90 transition duration-200 rounded-full p-4"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>

      <picture>
        <source
          type="image/webp"
          srcset="videothumbnail-640w.webp 640w, videothumbnail-1024w.webp 1024w, videothumbnail-1280w.webp 1280w"
          sizes="(max-width: 640px) 640px, (max-width: 1024px) 1024px, 1280px"
        />
        <img
          src="videothumbnail-gross.jpg"
          width="1280"
          height="853"
          loading="eager"
          class="w-full max-w-4xl mx-auto transform transition-transform duration-200 group-hover:scale-105"
          alt="Die Freizeitbande sitzt um das Lagerfeuer herum und singt"
        />
      </picture>
      <span class="sr-only">Youtube Video von der Freizeitbande</span>
    </a>
  </section>
  <HomePrices />
  <HomeSummary />
  <HomeFaq />
  <HomeSeo />
  <HomeTeamAd />
</div>
