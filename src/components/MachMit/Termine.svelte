<script>
  import { Circle, Marker, Underline } from "$lib/annotate";
  import { headlineClasses, linkClasses, sectionClasses } from "$lib/styles";

  const TermineTitleClasses =
    "text-2xl/none md:text-3xl/none font-bolle uppercase mb-2";
  const TermineSummaryClasses = "text-md md:text-lg";
</script>

<section class={`${sectionClasses.wide}`}>
  <h2 class={`${headlineClasses} text-center mb-12 md:mb-20`}>
    Termine <span use:Circle={"green"}>2026</span>
  </h2>

  <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
    <article>
      <h3 class={TermineTitleClasses}>
        <span use:Underline class="inline-block">Kick-Off</span> Wochenende
      </h3>
      <p class={TermineSummaryClasses}>tbd.</p>
      <!--
      <a
        href="https://www.google.com/calendar/render?action=TEMPLATE&text=Kick-Off+Wochenende&dates=20250523T150000Z/20250525T130000Z"
        target="_blank"
        rel="noopener noreferrer"
        class={`${linkClasses} ${TermineSummaryClasses}`}
        >In den Kalender eintragen</a
      >
      -->
    </article>
    <article>
      <h3 class={TermineTitleClasses}>
        <span use:Underline class="inline-block">Aufbau</span> und Schulungen
      </h3>
      <p class={TermineSummaryClasses}>tbd.</p>
      <!--
      <a
        href="https://www.google.com/calendar/render?action=TEMPLATE&text=Aufbau+und+Schulungen&dates=20250808T080000Z/20250811T180000Z"
        target="_blank"
        rel="noopener noreferrer"
        class={`${linkClasses} ${TermineSummaryClasses}`}
        >In den Kalender eintragen</a
      >
      -->
    </article>
    <article>
      <h3 class={TermineTitleClasses}>
        10 Tage <span use:Underline class="inline-block">Freizeit</span> für Alle
      </h3>
      <p class={TermineSummaryClasses}>tbd.</p>
      <!--
      <a
        href="https://www.google.com/calendar/render?action=TEMPLATE&text=Freizeit+f%C3%BCr+Alle&dates=20250812T090000Z/20250822T090000Z"
        target="_blank"
        rel="noopener noreferrer"
        class={`${linkClasses} ${TermineSummaryClasses}`}
        >In den Kalender eintragen</a
      >
      -->
    </article>
    <article>
      <h3 class={TermineTitleClasses}>
        <span use:Underline class="inline-block">Abbau</span> und Abreise
      </h3>
      <p class={TermineSummaryClasses}>tbd.</p>
      <!--<a
        href="https://www.google.com/calendar/render?action=TEMPLATE&text=Abbau&dates=20250822T090000Z/20250823T160000Z"
        target="_blank"
        rel="noopener noreferrer"
        class={`${linkClasses} ${TermineSummaryClasses}`}
        >In den Kalender eintragen</a
    >-->
    </article>
  </div>
</section>
