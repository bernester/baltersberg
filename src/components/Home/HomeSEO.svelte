<script lang="ts">
  import { Box, Marker, Underline } from "$lib/annotate";
  import {
    titleClasses,
    sectionClasses,
    leadParagraphClasses,
  } from "$lib/styles";
</script>

<article class={sectionClasses.default}>
  <h2 class={[titleClasses, "mb-8 text-center text-balance"]}>
    Was ist die <span use:Marker class="inline-block">Freizeit für Alle?</span>
  </h2>
  <p class={leadParagraphClasses}>
    Zehn Tage Sommer, Zelte, Lagerfeuer und gemeinsam Abenteuer erleben – das
    ist die Freizeit für Alle. Wir sind eine Sommerfreizeit für Kinder und
    Jugendliche zwischen 9 und 14 Jahren, bei der wirklich alle mitmachen
    können.
  </p>
  <p class={leadParagraphClasses}>
    Bei uns ist Platz für alle – egal ob mit oder ohne Behinderung, egal woher
    jemand kommt oder was die Familie sich leisten kann. Wir kochen gemeinsam,
    gestalten das Programm gemeinsam und sorgen dafür, dass sich alle sicher und
    wohl fühlen.
  </p>

  <a href="/manifest" use:Box class="group mb-6 block">
    <div
      use:Marker={"pink"}
      class="p-4 flex items-center justify-between gap-6"
    >
      <p class="text-md/normal md:text-lg/relaxed text-pretty">
        <strong use:Underline>Bunt. Laut. Wild. Geborgen.</strong> In unserem Freizeitbanden
        Manifest erfahrt ihr was uns antreibt.
      </p>
      <img
        src="/arrow-right.svg"
        alt=""
        class="w-12 flex-none motion-safe:transition-transform motion-safe:duration-200 motion-safe:group-hover:translate-x-1"
      />
    </div>
  </a>
</article>
