<script>
  import { Marker } from "$lib/annotate";
  import {
    headlineClasses,
    primaryButtonClasses,
    sectionClasses,
  } from "$lib/styles";
</script>

<section class={`${sectionClasses.default}`}>
  <div class="flex flex-col gap-8 items-center text-center">
    <h2 class={`${headlineClasses} text-center text-balance`}>
      <span use:Marker={"green"} class="inline-block">Mach mit</span> in unserem
      Team
    </h2>
    <a href="/mach-mit" class={`${primaryButtonClasses} !text-green-light`}
      >Mehr erfahren</a
    >
  </div>
</section>
