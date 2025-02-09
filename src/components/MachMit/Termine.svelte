<script>
  import { Circle, Marker, Underline } from "$lib/annotate";
  import { headlineClasses, linkClasses } from "$lib/styles";

  const TermineTitleClasses =
    "text-xl/none md:text-3xl/none font-bolle uppercase mb-2";
  const TermineSummaryClasses = "text-lg/relaxed";
</script>

<section class="max-w-screen-lg mx-auto py-8 mb-8">
  <h2 class={`${headlineClasses} text-center mb-20`}>
    Termine <span use:Circle={"green"}>2025</span>
  </h2>

  <div class="grid grid-cols-4 gap-8">
    <article>
      <h3 class={TermineTitleClasses}>
        <span use:Underline class="inline-block">Kick-Off</span> Wochenende
      </h3>
      <p class={TermineSummaryClasses}>23.05.2025 bis 25.05.2025</p>
      <a
        href="https://www.google.com/calendar/render?action=TEMPLATE&text=Kick-Off+Wochenende&dates=20250523T150000Z/20250525T130000Z"
        target="_blank"
        class={linkClasses}>In den Kalender eintragen</a
      >
    </article>
    <article>
      <h3 class={TermineTitleClasses}>
        <span use:Underline class="inline-block">Aufbau</span> und Schulungen
      </h3>
      <p class={TermineSummaryClasses}>08.08.2025 bis 11.08.2025</p>
      <a
        href="https://www.google.com/calendar/render?action=TEMPLATE&text=Aufbau+und+Schulungen&dates=20250808T080000Z/20250811T180000Z"
        target="_blank"
        class={linkClasses}>In den Kalender eintragen</a
      >
    </article>
    <article>
      <h3 class={TermineTitleClasses}>
        10 Tage <span use:Underline class="inline-block">Freizeit</span> für Alle
      </h3>
      <p class={TermineSummaryClasses}>12.08.2025 bis 22.08.2025</p>
      <a
        href="https://www.google.com/calendar/render?action=TEMPLATE&text=Freizeit+f%C3%BCr+Alle&dates=20250812T090000Z/20250822T090000Z"
        target="_blank"
        class={linkClasses}>In den Kalender eintragen</a
      >
    </article>
    <article>
      <h3 class={TermineTitleClasses}>
        <span use:Underline class="inline-block">Abbau</span> und Abreise
      </h3>
      <p class={TermineSummaryClasses}>22.08.2025 bis 23.8.2025</p>
      <a
        href="https://www.google.com/calendar/render?action=TEMPLATE&text=Abbau&dates=20250822T090000Z/20250823T160000Z"
        target="_blank"
        class={linkClasses}>In den Kalender eintragen</a
      >
    </article>
  </div>
</section>
