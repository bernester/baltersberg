<script lang="ts">
  import Aufgaben from "$components/MachMit/Aufgaben.svelte";
  import Faq from "$components/MachMit/Faq.svelte";
  import Hero from "$components/MachMit/Hero.svelte";
  import Termine from "$components/MachMit/Termine.svelte";
</script>

<svelte:head>
  <title>Mach mit – Freizeit für Alle</title>
</svelte:head>

<div class="space-y-20">
  <Hero />
  <Aufgaben />
  <Termine />
  <Faq />
</div>
