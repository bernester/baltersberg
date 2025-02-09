<script>
  import { Marker } from "$lib/annotate";
  import { headline, primaryButton } from "$lib/styles";
</script>

<section class="max-w-screen-sm mx-auto py-8 mb-8">
  <div class="flex flex-col gap-8 items-center text-center">
    <h2 class={`${headline} text-center text-balance`}>
      <span use:Marker class="inline-block">Mach mit</span> in unserem Team
    </h2>
    <a href="/mach-mit" class={primaryButton}>Mehr erfahren</a>
  </div>
</section>
