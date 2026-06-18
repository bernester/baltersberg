<script lang="ts">
  import { Marker } from "$lib/annotate";
  import {
    buttonDefaultClasses,
    titleClasses,
    primaryButtonClasses,
    sectionClasses,
  } from "$lib/styles";
</script>

<section class={sectionClasses.default}>
  <div class="flex flex-col gap-8 items-center text-center">
    <h2 class={[titleClasses, "text-center text-balance"]}>
      <span use:Marker={"green"} class="inline-block">Mach mit</span> in unserem
      Team
    </h2>
    <a
      href="/mach-mit"
      class={[buttonDefaultClasses, primaryButtonClasses, "!text-green-light"]}
      >Mehr erfahren</a
    >
  </div>
</section>
