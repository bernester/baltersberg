<script lang="ts">
  const videoUrl = "https://www.youtube.com/watch?v=fllxNphPCqw";
</script>

<section class="p-8">
  <a
    href={videoUrl}
    target="_blank"
    rel="noopener noreferrer"
    class="relative block group"
    aria-label="Youtube Video von der Freizeitbande (öffnet in neuem Tab)"
  >
    <div class="absolute inset-0 flex items-center justify-center z-10">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-20 h-20 text-yellow bg-black motion-safe:group-hover:bg-black/90 motion-safe:transition motion-safe:duration-200 rounded-full p-4"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        focusable="false"
      >
        <path d="M8 5v14l11-7z" />
      </svg>
    </div>

    <img
      src="/campfire.svg"
      width="1280"
      height="853"
      loading="eager"
      class="w-full max-w-4xl mx-auto motion-safe:transform motion-safe:transition-transform motion-safe:duration-200 motion-safe:group-hover:scale-105"
      alt=""
      draggable="false"
    />
  </a>
</section>
