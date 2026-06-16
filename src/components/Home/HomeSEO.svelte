<script>
  import RegisterButton from "$components/Common/RegisterButton.svelte";
  import { Marker, Underline } from "$lib/annotate";
  import { headlineClasses, linkClasses, sectionClasses } from "$lib/styles";
  import data from "./../../data.json";
</script>

<article class={sectionClasses.default}>
  <h2 class={`${headlineClasses} mb-8 text-center text-balance`}>
    Was ist die <span use:Marker class="inline-block">Freizeit für Alle?</span>
  </h2>
  <p class="text-xl/relaxed text-pretty mb-[1em]">
    Zehn Tage Sommer, Zelte, Lagerfeuer und gemeinsam Abenteuer erleben – das
    ist die Freizeit für Alle. Wir sind eine Sommerfreizeit für Kinder und
    Jugendliche zwischen 9 und 14 Jahren, bei der wirklich alle mitmachen
    können.
  </p>
  <p class="text-xl/relaxed text-pretty mb-[1em]">
    Bei uns ist Platz für alle – egal ob mit oder ohne Behinderung, egal woher
    jemand kommt oder was die Familie sich leisten kann. Wir kochen gemeinsam,
    gestalten das Programm gemeinsam und sorgen dafür, dass sich alle sicher und
    wohl fühlen.
  </p>
  <p class="text-xl/relaxed text-pretty mb-[1em]">
    <span use:Underline>Bunt. Laut. Wild. Geborgen.</span> In unserem
    <a href="/manifest" class={linkClasses}>Freizeitbanden Manifest</a> erfahrt ihr
    noch mehr was uns antreibt.
  </p>

  {#if data.registrationOpen}
    <div class="text-center">
      <RegisterButton />
    </div>
  {/if}
</article>
